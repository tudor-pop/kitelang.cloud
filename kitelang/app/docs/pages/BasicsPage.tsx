import React from 'react';
import EditInfo from '../components/EditInfo';
import Breadcrumb from '../components/Breadcrumb';

interface BasicsPageProps {
    onShowPage: (pageId: string) => void;
    onCopyCode: (code: string, blockId: string) => void;
    copyStatus: { [key: string]: boolean };
    pageDates: Record<string, string>;
}

export default function BasicsPage({ onShowPage, onCopyCode, copyStatus, pageDates }: BasicsPageProps) {
    return (
        <div className="content-island">
            <Breadcrumb
                items={[
                    { label: 'Home', onClick: () => onShowPage('page-home') },
                    { label: 'Basics' }
                ]}
            />

            <h1>Basic syntax</h1>

            <EditInfo date={pageDates['page-basics']} />

            <p>
                This is a collection of basic syntax elements with examples. At the end of every section, you&apos;ll
                find a link to a detailed description of the related topic.
            </p>

            <div className="info-box">
                <p>
                    💡 You can also learn all the Kite essentials with the free Kite Core track by
                </p>
            </div>

            <h2 id="package-definition">Package definition and imports</h2>

            <p>Package specification should be at the top of the source file:</p>

            <div className="code-block-wrapper">
                <button
                    className="copy-button"
                    onClick={() => onCopyCode('package my.demo\n\nimport kite.text.*\n\n// ...', 'code1')}
                    style={copyStatus['code1'] ? { background: '#10B981', opacity: 1 } : {}}
                >
                    {copyStatus['code1'] ? 'Copied!' : 'Copy'}
                </button>
                <div className="code-block">
                    <code>
                        <span className="keyword">package</span> my.demo
                        {'\n\n'}
                        <span className="import">import</span> kite.text.*
                        {'\n\n'}
                        <span className="comment">// ...</span>
                    </code>
                </div>
            </div>

            <p>
                It is not required to match directories and packages: source files can be placed arbitrarily in
                the file system.
            </p>

            <p><a href="#packages">See Packages →</a></p>

            <div className="section-divider"></div>

            <h2 id="program-entry">Program entry point</h2>

            <p>An entry point of a Kite application is the <code>main</code> function:</p>

            <div className="code-block-wrapper">
                <button
                    className="copy-button"
                    onClick={() => onCopyCode('fun main() {\n    println("Hello world!")\n}', 'code2')}
                    style={copyStatus['code2'] ? { background: '#10B981', opacity: 1 } : {}}
                >
                    {copyStatus['code2'] ? 'Copied!' : 'Copy'}
                </button>
                <div className="code-block">
                    <code>
                        <span className="keyword">fun</span> <span className="function">main</span>() {'{'}
                        {'\n    '}
                        <span className="function">println</span>(<span className="string">&quot;Hello world!&quot;</span>)
                        {'\n}'}
                    </code>
                </div>
            </div>

            <p>Another form of <code>main</code> accepts a variable number of String arguments:</p>

            <div className="code-block-wrapper">
                <button
                    className="copy-button"
                    onClick={() => onCopyCode('fun main(args: Array<String>) {\n    println(args.contentToString())\n}', 'code3')}
                    style={copyStatus['code3'] ? { background: '#10B981', opacity: 1 } : {}}
                >
                    {copyStatus['code3'] ? 'Copied!' : 'Copy'}
                </button>
                <div className="code-block">
                    <code>
                        <span className="keyword">fun</span> <span className="function">main</span>(args: Array&lt;String&gt;) {'{'}
                        {'\n    '}
                        <span className="function">println</span>(args.contentToString())
                        {'\n}'}
                    </code>
                </div>
            </div>
        </div>
    );
}