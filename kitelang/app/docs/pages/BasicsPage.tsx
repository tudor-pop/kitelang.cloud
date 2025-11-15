import React from 'react';
import CodeBlock from '../components/CodeBlock';

interface BasicsPageProps {
    onShowPage: (pageId: string) => void;
    onCopyCode: (code: string, blockId: string) => void;
    copyStatus: { [key: string]: boolean };
    pageDates: Record<string, string>;
}

export default function BasicsPage({ onShowPage, onCopyCode, copyStatus, pageDates }: BasicsPageProps) {
    return (
        <div className="content-island">
            <h1>Syntax overview</h1>

            <p>
                Explore quick examples of Kite&apos;s syntax and key features. Each example demonstrates how to use
                a specific aspect of the language, with links to detailed documentation at the end.
            </p>

            <h2 id="file-structure">File Structure</h2>
            <p>
                Kite source files use the <code>.kite</code> file extension. A <code>.kite</code> file may contain
                any combination of imports, resource declarations, component definitions, and function declarations.
            </p>

            <CodeBlock
                code={`// vars, resources, components, inputs, outputs etc...`}
                caption="example.kite"
            />

            <h2 id="variables">Variables</h2>
            <p>
                Variables in Kite are declared using the <code>var</code> keyword. Variables are private to a file,
                a function, component, or a block scope which means they behave like any other variables in other programming languages.
            </p>

            <div className="info-box">
                <p>
                    <strong>💡</strong> var declarations follow the Kite convention of{' '}
                    <code>&lt;keyword&gt; &lt;type&gt; &lt;name&gt; = &lt;init&gt;</code>
                </p>
            </div>

            <CodeBlock code={`var name    = "production"  // declare a string variable and initialize it with the value of "production"
var enabled = true          // declare a boolean variable and initialize it with the value of true
var count   = 3             // declare a integer variable and initialize it with the value of 3

count         += 2            // assigns a value of 5 to the variable count`} />

            <p>
                Variables can optionally include an explicit type annotation between the <code>var</code> keyword
                and the variable name.
            </p>

            <CodeBlock code={`var int count       = 3            // explicitly declare int
var string name     = "production" // explicitly declare string
var boolean enabled = true         // explicitly declare boolean`} />
        </div>
    );
}