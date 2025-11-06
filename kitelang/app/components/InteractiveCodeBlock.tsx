'use client';

import React, {useEffect, useState} from 'react';

interface CodeExample {
    title: string;
    code: string;
    steps: Array<{ line: number; label: string }>;
}

interface InteractiveCodeBlockProps {
    examples?: CodeExample[];
}

const defaultCodeExamples: CodeExample[] = [
    {
        title: 'Resources',
        code: `import VPC from "cloud.network"

resource VPC vpc {
    name = "production-vpc"
    cidr = "10.0.0.0/16"
    region = "us-east-1"
}`,
        steps: [
            {line: 0, label: 'Import VPC resource'},
            {line: 2, label: 'Create VPC resource'}
        ]
    },
    {
        title: 'Decorators',
        code: `import VPC from "cloud.network"
import Subnet from "cloud.network"

resource VPC vpc {
    name = "production-vpc"
    cidr = "10.0.0.0/16"
}
@count(3) // creates 3 subnets: subnet-0 (10.0.0.0/24), subnet-1(10.1.0.0/24), subnet-2(10.2.0.0/24)
resource Subnet subnet {
    vpc_id      = vpc.id
    cidr_block  = "10.\${count}.0.0/24" 
}
`,
        steps: [
            {line: 0, label: 'Import Bucket resource'},
            {line: 2, label: 'Decorate resource with @count'},
            {line: 3, label: 'Create Bucket resource'},
            {line: 4, label: 'Use count index'}
        ]
    },
    {
        title: 'Multi-Cloud',
        code: `import Bucket from "cloud.storage"

@provisionOn([aws, gcp])
resource Bucket photos {
    name = "my-photos"
}

@dependsOn(photos)
resource Bucket videos {
    name = "my-videos"
}

for bucket in [photos, videos] {
    println(bucket)
}`,
        steps: [
            {line: 0, label: 'Clean import statement'},
            {line: 2, label: 'Provision on multiple clouds'},
            {line: 7, label: 'Dependency management'},
            {line: 12, label: 'Iterate over resources'}
        ]
    },
    {
        title: 'With Functions',
        code: `import * from aws

fun createVpc(name: String, cidr: String) {
    return VPC {
        name = name
        cidr = cidr
        enableDnsHostnames = true
    }
}

resource vpc = createVpc("prod", "10.0.0.0/16")`,
        steps: [
            {line: 2, label: 'Define reusable function'},
            {line: 10, label: 'Use function to create VPC'}
        ]
    }
];

export default function InteractiveCodeBlock({examples = defaultCodeExamples}: InteractiveCodeBlockProps) {
    const [activeTab, setActiveTab] = useState(0);
    const [displayedCode, setDisplayedCode] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [currentStep, setCurrentStep] = useState(0);

    // Typing animation
    useEffect(() => {
        const code = examples[activeTab].code;

        // Skip typing animation temporarily for testing
        setDisplayedCode(code);
        setIsTyping(false);
        setCurrentStep(0);

        // // Uncomment for typing animation:
        // setDisplayedCode('');
        // setIsTyping(true);
        // setCurrentStep(0);
        // let index = 0;
        // const typingInterval = setInterval(() => {
        //     if (index < code.length) {
        //         setDisplayedCode(code.substring(0, index + 1));
        //         index++;
        //     } else {
        //         setIsTyping(false);
        //         clearInterval(typingInterval);
        //     }
        // }, 20);
        // return () => clearInterval(typingInterval);
    }, [activeTab, examples]);

    // Step highlighting
    useEffect(() => {
        if (!isTyping) {
            const steps = examples[activeTab].steps;
            let stepIndex = 0;

            const stepInterval = setInterval(() => {
                setCurrentStep(stepIndex % steps.length);
                stepIndex++;
            }, 2000);

            return () => clearInterval(stepInterval);
        }
    }, [isTyping, activeTab, examples]);

    const highlightSyntax = (code: string) => {
        const lines = code.split('\n');
        const activeStep = examples[activeTab].steps[currentStep];

        return lines.map((lineText, lineIndex) => {
            const isHighlighted = !isTyping && activeStep.line === lineIndex;
            const lineClass = isHighlighted ? 'code-line highlighted' : 'code-line';

            if (!lineText.trim()) {
                return (
                    <div key={lineIndex} className={lineClass}>
                        <span className="line-number">{lineIndex + 1}</span>
                        <span>&nbsp;</span>
                    </div>
                );
            }

            // During typing, show plain text
            if (isTyping) {
                return (
                    <div key={lineIndex} className={lineClass}>
                        <span className="line-number">{lineIndex + 1}</span>
                        <span>{lineText}</span>
                    </div>
                );
            }

            // After typing - parse into React elements
            const tokens: React.ReactNode[] = [];
            let pos = 0;
            let key = 0;

            // Check if previous token was "resource" keyword to highlight type names
            let previousWasResource = false;

            // Define token patterns with priority
            const tokenPatterns = [
                {regex: /^\/\/.*$/, className: 'comment'},
                {
                    regex: /^\b(package|import|from|resource|fun|return|val|var|if|else|for|while|when|class|interface|object|companion|data|sealed|abstract|open|override|private|public|internal|protected|in|println)\b/,
                    className: 'keyword'
                },
                {regex: /^\d+\.?\d*/, className: 'number'},  // Removed word boundary requirement
                {regex: /^[={}()[\]:,.]/, className: 'operator'},
            ];

            while (pos < lineText.length) {
                let matched = false;

                // Skip whitespace but track if we just saw "resource"
                if (lineText[pos] === ' ' || lineText[pos] === '\t') {
                    tokens.push(<span key={key++}>{lineText[pos]}</span>);
                    pos++;
                    continue;
                }

                // Handle decorators like @count(2)
                if (lineText[pos] === '@') {
                    const decoratorMatch = lineText.substring(pos).match(/^@\w+/);
                    if (decoratorMatch) {
                        tokens.push(<span key={key++} className="decorator">{decoratorMatch[0]}</span>);
                        pos += decoratorMatch[0].length;
                        matched = true;
                        continue;
                    }
                }

                // Handle strings with interpolation
                if (lineText[pos] === '"') {
                    tokens.push(<span key={key++} className="string">"</span>);
                    pos++;

                    let stringContent = '';
                    while (pos < lineText.length && lineText[pos] !== '"') {
                        if (lineText[pos] === '\\' && pos + 1 < lineText.length) {
                            // Handle escape sequences
                            stringContent += lineText[pos] + lineText[pos + 1];
                            pos += 2;
                        } else if (lineText[pos] === '$' && pos + 1 < lineText.length && lineText[pos + 1] === '{') {
                            // Flush any accumulated string content
                            if (stringContent) {
                                tokens.push(<span key={key++} className="string">{stringContent}</span>);
                                stringContent = '';
                            }

                            // Add interpolation start ${
                            tokens.push(<span key={key++} className="interpolation">${'{'}</span>);
                            pos += 2;

                            // Find matching closing brace
                            let interpolationContent = '';
                            let braceCount = 1;
                            while (pos < lineText.length && braceCount > 0) {
                                if (lineText[pos] === '{') braceCount++;
                                else if (lineText[pos] === '}') braceCount--;

                                if (braceCount > 0) {
                                    interpolationContent += lineText[pos];
                                }
                                pos++;
                            }

                            // Add interpolation content (variable name) - white color
                            if (interpolationContent) {
                                tokens.push(<span key={key++}>{interpolationContent}</span>);
                            }

                            // Add closing brace
                            tokens.push(<span key={key++} className="interpolation">{'}'}</span>);
                        } else {
                            stringContent += lineText[pos];
                            pos++;
                        }
                    }

                    // Flush remaining string content
                    if (stringContent) {
                        tokens.push(<span key={key++} className="string">{stringContent}</span>);
                    }

                    // Add closing quote
                    if (pos < lineText.length && lineText[pos] === '"') {
                        tokens.push(<span key={key++} className="string">"</span>);
                        pos++;
                    }

                    matched = true;
                    previousWasResource = false;
                    continue;
                }

                // Check if the next token should be highlighted as a type (after "resource")
                if (previousWasResource) {
                    const typeMatch = lineText.substring(pos).match(/^\b[A-Z]\w*/);
                    if (typeMatch) {
                        tokens.push(
                            <span key={key++} className="type">
                                {typeMatch[0]}
                            </span>
                        );
                        pos += typeMatch[0].length;
                        previousWasResource = false;
                        continue;
                    }
                }

                // Try to match each pattern at current position
                for (const pattern of tokenPatterns) {
                    const remaining = lineText.substring(pos);
                    const match = remaining.match(pattern.regex);

                    if (match) {
                        // Check if this is the "resource" keyword
                        if (pattern.className === 'keyword' && match[0] === 'resource') {
                            previousWasResource = true;
                        } else {
                            previousWasResource = false;
                        }

                        tokens.push(
                            <span key={key++} className={pattern.className}>
                                {match[0]}
                            </span>
                        );
                        pos += match[0].length;
                        matched = true;
                        break;
                    }
                }

                // No pattern matched, add single character as plain text
                if (!matched) {
                    tokens.push(<span key={key++}>{lineText[pos]}</span>);
                    pos++;
                    previousWasResource = false;
                }
            }

            return (
                <div key={lineIndex} className={lineClass}>
                    <span className="line-number">{lineIndex + 1}</span>
                    <span>{tokens}</span>
                </div>
            );
        });
    };

    return (
        <>
            <div className="code-window">
                <div className="code-header">
                    <div className="code-tabs">
                        {examples.map((example, index) => (
                            <button
                                key={index}
                                className={`code-tab ${activeTab === index ? 'active' : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                {example.title}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="code-content">
                    {highlightSyntax(displayedCode)}
                </div>
                {!isTyping && (
                    <div className="code-footer">
                        <div className="step-indicator">
                            <span className="step-label">{examples[activeTab].steps[currentStep].label}</span>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                /* Code Window */
                .code-window {
                    background: var(--code-bg);
                    border: 2px solid var(--border-color);
                    border-radius: 8px;
                    overflow: hidden;
                }

                .code-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px 20px;
                    background: var(--bg-secondary);
                    border-bottom: 2px solid var(--border-color);
                }

                .code-tabs {
                    display: flex;
                    gap: 8px;
                }

                .code-tab {
                    padding: 6px 16px;
                    background: transparent;
                    border: 2px solid var(--border-color);
                    border-radius: 4px;
                    font-family: 'Roboto Mono', monospace;
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--text-secondary);
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .code-tab:hover {
                    background: var(--primary-light);
                    color: var(--bg-primary);
                }

                .code-tab.active {
                    background: var(--primary-color);
                    color: #FFFFFF;
                }

                .copy-btn {
                    padding: 6px 12px;
                    background: var(--primary-color);
                    color: var(--bg-primary);
                    border: none;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .copy-btn:hover {
                    background: var(--primary-dark);
                }

                .code-content {
                    padding: 24px;
                    font-family: 'Roboto Mono', monospace;
                    font-size: 14px;
                    line-height: 1.5;
                    color: var(--text-primary);
                    overflow-x: auto;
                    overflow-y: auto;
                    height: 450px;
                    tab-size: 4;
                    -moz-tab-size: 4;
                    white-space: pre;
                }

                .code-line {
                    display: flex;
                    gap: 16px;
                    padding: 2px 0;
                    transition: background 0.3s ease;
                }

                .code-line.highlighted {
                    background: rgba(168, 85, 247, 0.15);
                    border-left: 3px solid var(--primary-color);
                    padding-left: 8px;
                    margin-left: -11px;
                }

                .line-number {
                    color: var(--text-muted);
                    user-select: none;
                    min-width: 30px;
                    text-align: right;
                    font-size: 12px;
                }

                .code-footer {
                    padding: 12px 20px;
                    background: var(--bg-secondary);
                    border-top: 2px solid var(--border-color);
                }

                .step-indicator {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .step-label {
                    font-family: 'Roboto Mono', monospace;
                    font-size: 12px;
                    font-weight: 600;
                    color: var(--primary-color);
                }

                /* Syntax Highlighting */
                :global(.keyword) {
                    color: #A855F7;
                    font-weight: 600;
                }

                :global(.type) {
                    color: #3B82F6;
                    font-weight: 600;
                }

                :global(.string) {
                    color: #10B981;
                }

                :global(.interpolation) {
                    color: #D97706;
                }

                :global(.decorator) {
                    color: #D97706;
                }

                :global(.number) {
                    color: #06B6D4;
                }

                :global(.operator) {
                    color: var(--text-secondary);
                }

                :global(.comment) {
                    color: var(--text-muted);
                    font-style: italic;
                }
            `}</style>
        </>
    );
}