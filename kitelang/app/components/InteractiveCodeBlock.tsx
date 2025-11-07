'use client';

import React, {useEffect, useState, memo} from 'react';
import styles from './InteractiveCodeBlock.module.css';

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
}

// We fixed the infamous 'keys need to be known at plan time'
for availabilityZone in vpc.availabilityZones {
    resource Subnet subnets {
      vpcId = vpc.id
      az    = availabilityZone
    }
}
`,
        steps: [
            {line: 0, label: 'Import VPC resource'},
            {line: 2, label: 'Create VPC resource'},
            {line: 8, label: 'Iterates over runtime values'},
            {line: 11, label: 'Use availabilityZone local variable'}
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

@count(3)
resource Subnet subnet {
    vpcId = vpc.id
    cidr  = "10.\${count}.0.0/24"
}`,
        steps: [
            {line: 8, label: 'Decorate resource with @count'},
            {line: 11, label: 'Use count in string interpolation'}
        ]
    },
    {
        title: 'Components',
        code: `import Bucket from "cloud.storage"

component Prometheus {
    @allow(['prod', 'dev'])
    input string name = 'prod'

    resource Bucket logs { ... }
    resource Bucket metrics { ... }

    output string arn = logs.arn
}

// create both buckets by initializing a component
component Prometheus dev {
    name = "dev"
}`,
        steps: [
            {line: 2, label: 'Define reusable component'},
            {line: 3, label: '@allow only specific strings'},
            {line: 4, label: 'Input declaration with default value \'prod\''},
            {line: 9, label: 'Output declaration'},
            {line: 13, label: 'Initialize component with input'},
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

for index, bucket in [photos, videos] {
    println(index, bucket)
}`,
        steps: [
            {line: 0, label: 'Clean import statement'},
            {line: 2, label: 'Provision on multiple clouds'},
            {line: 7, label: 'Dependency management'},
            {line: 12, label: 'Iterate over resources'}
        ]
    },
    {
        title: 'Mixins',
        code: `import Bucket from "cloud.storage"

resource Bucket photos {
  name = "my-photos"
}
// resource property applied to just one resource
mixin gcp on photos { uniform_bucket_level_access = true }
mixin aws on photos { account_id = "00000" }

// type property applied to all instances
mixin gcp on Bucket { uniform_bucket_level_access = true }
mixin aws on Bucket { account_id = "00000" }

// properties on all buckets
mixin Bucket { tags = { env: 'prod' } }
`,
        steps: [
            {line: 6, label: 'Set properties on a resource'},
            {line: 10, label: 'Set provider properties on all resources of a type'},
            {line: 14, label: 'Set general properties on all resources of a type'},
        ]
    }
];

function InteractiveCodeBlock({examples = defaultCodeExamples}: InteractiveCodeBlockProps) {
    const [activeTab, setActiveTab] = useState(0);
    const [displayedCode, setDisplayedCode] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [currentStep, setCurrentStep] = useState(0);

    // Keyboard navigation handler for tabs
    const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
        let newIndex = index;

        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            newIndex = index === 0 ? examples.length - 1 : index - 1;
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            newIndex = index === examples.length - 1 ? 0 : index + 1;
        } else if (event.key === 'Home') {
            event.preventDefault();
            newIndex = 0;
        } else if (event.key === 'End') {
            event.preventDefault();
            newIndex = examples.length - 1;
        } else {
            return; // Don't change tab for other keys
        }

        setActiveTab(newIndex);
    };

    // Typing animation (disabled - instant display)
    useEffect(() => {
        const code = examples[activeTab].code;
        setDisplayedCode(code);
        setIsTyping(false);
        setCurrentStep(0);
    }, [activeTab, examples]);

    // Step highlighting
    useEffect(() => {
        if (!isTyping && examples[activeTab]?.steps?.length > 0) {
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
        const activeStep = examples[activeTab]?.steps?.[currentStep];

        return lines.map((lineText, lineIndex) => {
            const isHighlighted = !isTyping && activeStep && activeStep.line === lineIndex;
            const lineClass = isHighlighted ? `${styles.codeLine} ${styles.highlighted}` : styles.codeLine;

            if (!lineText.trim()) {
                return (
                    <div key={lineIndex} className={lineClass}>
                        <span className={styles.lineNumber}>{lineIndex + 1}</span>
                        <span>&nbsp;</span>
                    </div>
                );
            }

            // During typing, show plain text
            if (isTyping) {
                return (
                    <div key={lineIndex} className={lineClass}>
                        <span className={styles.lineNumber}>{lineIndex + 1}</span>
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
                {regex: /^(\/\/|#).*$/, className: 'comment'},  // Support both // and # comments
                {
                    regex: /^\b(package|import|from|resource|component|mixin|on|fun|return|val|var|if|else|for|while|when|class|interface|object|companion|data|sealed|abstract|open|override|private|public|internal|protected|in|input|output|println)\b/,
                    className: 'keyword'
                },
                {regex: /^\b(string|int|float|double|boolean|byte|short|long|char)\b/, className: 'type'},  // Built-in types
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
                        const decoratorName = decoratorMatch[0];

                        // Add tooltip for @count decorator
                        if (decoratorName === '@count') {
                            const tooltipText = "Creates 3 subnets with implicit naming:\n• subnet-0: 10.0.0.0/24\n• subnet-1: 10.1.0.0/24\n• subnet-2: 10.2.0.0/24";
                            tokens.push(
                                <span
                                    key={key++}
                                    className="decorator has-tooltip"
                                    data-tooltip={tooltipText}
                                >
                                    {decoratorName}
                                </span>
                            );
                        } else {
                            tokens.push(<span key={key++} className="decorator">{decoratorName}</span>);
                        }

                        pos += decoratorMatch[0].length;
                        matched = true;
                        continue;
                    }
                }

                // Handle strings with interpolation (both single and double quotes)
                if (lineText[pos] === '"' || lineText[pos] === "'") {
                    const quote = lineText[pos];
                    tokens.push(<span key={key++} className="string">{quote}</span>);
                    pos++;

                    let stringContent = '';
                    while (pos < lineText.length && lineText[pos] !== quote) {
                        if (lineText[pos] === '\\' && pos + 1 < lineText.length) {
                            // Handle escape sequences
                            stringContent += lineText[pos] + lineText[pos + 1];
                            pos += 2;
                        } else if (lineText[pos] === '$') {
                            // Check for ${...} or $variable interpolation
                            if (pos + 1 < lineText.length && lineText[pos + 1] === '{') {
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
                            } else if (pos + 1 < lineText.length && /[a-zA-Z_]/.test(lineText[pos + 1])) {
                                // Handle $variable (without braces)
                                // Flush any accumulated string content
                                if (stringContent) {
                                    tokens.push(<span key={key++} className="string">{stringContent}</span>);
                                    stringContent = '';
                                }

                                // Add $ as interpolation
                                tokens.push(<span key={key++} className="interpolation">$</span>);
                                pos++;

                                // Extract variable name
                                let variableName = '';
                                while (pos < lineText.length && /[a-zA-Z0-9_]/.test(lineText[pos])) {
                                    variableName += lineText[pos];
                                    pos++;
                                }

                                // Add variable name
                                if (variableName) {
                                    tokens.push(<span key={key++}>{variableName}</span>);
                                }
                            } else {
                                stringContent += lineText[pos];
                                pos++;
                            }
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
                    if (pos < lineText.length && lineText[pos] === quote) {
                        tokens.push(<span key={key++} className="string">{quote}</span>);
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

                // No pattern matched - check for identifiers with tooltips
                if (!matched) {
                    // Check if this is an identifier (starts with letter or underscore)
                    if (/[a-zA-Z_]/.test(lineText[pos])) {
                        let identifier = '';
                        const startPos = pos;
                        while (pos < lineText.length && /[a-zA-Z0-9_]/.test(lineText[pos])) {
                            identifier += lineText[pos];
                            pos++;
                        }

                        // Add tooltip for "index" identifier
                        if (identifier === 'index') {
                            const tooltipText = "index will be: 0, 1, 2, ..., n";
                            tokens.push(
                                <span
                                    key={key++}
                                    className="identifier has-tooltip"
                                    data-tooltip={tooltipText}
                                >
                                    {identifier}
                                </span>
                            );
                        } else if (identifier === 'availabilityZone') {
                            const tooltipText = "availabilityZone is a local variable containing actual values: \n• us-east-1a\n• us-east-1b\n• us-east-1c";
                            tokens.push(
                                <span
                                    key={key++}
                                    className="identifier has-tooltip"
                                    data-tooltip={tooltipText}
                                >
                                    {identifier}
                                </span>
                            );
                        } else {
                            tokens.push(<span key={key++}>{identifier}</span>);
                        }
                    } else {
                        tokens.push(<span key={key++}>{lineText[pos]}</span>);
                        pos++;
                    }
                    previousWasResource = false;
                }
            }

            return (
                <div key={lineIndex} className={lineClass}>
                    <span className={styles.lineNumber}>{lineIndex + 1}</span>
                    <span>{tokens}</span>
                </div>
            );
        });
    };

    return (
        <div className={styles.codeWindow}>
            <div className={styles.codeHeader}>
                <div className={styles.codeTabs} role="tablist" aria-label="Code examples">
                    {examples.map((example, index) => (
                        <button
                            key={index}
                            role="tab"
                            id={`tab-${index}`}
                            aria-selected={activeTab === index}
                            aria-controls={`tabpanel-${index}`}
                            tabIndex={activeTab === index ? 0 : -1}
                            className={`${styles.codeTab} ${activeTab === index ? styles.active : ''}`}
                            onClick={() => setActiveTab(index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        >
                            {example.title}
                        </button>
                    ))}
                </div>
            </div>
            <div
                className={styles.codeContent}
                role="tabpanel"
                id={`tabpanel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
                tabIndex={0}
            >
                {highlightSyntax(displayedCode)}
            </div>
            {!isTyping && examples[activeTab]?.steps?.[currentStep] && (
                <div className={styles.codeFooter}>
                    <div className={styles.stepIndicator}>
                        <span className={styles.stepLabel}>{examples[activeTab].steps[currentStep].label}</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default memo(InteractiveCodeBlock);