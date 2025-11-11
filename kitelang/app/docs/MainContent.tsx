'use client';

import React from 'react';
import EditInfo from './EditInfo';
import styles from './MainContent.module.css';

interface MainContentProps {
    activePage: string;
    onShowPage: (pageId: string) => void;
    onCopyCode: (code: string, blockId: string) => void;
    copyStatus: { [key: string]: boolean };
    contentRef: React.RefObject<HTMLElement | null>;
    showToc: boolean;
    pageDates: Record<string, string>;
}

export default function MainContent({
    activePage,
    onShowPage,
    onCopyCode,
    copyStatus,
    contentRef,
    showToc,
    pageDates
}: MainContentProps) {
    return (
        <main
            className={styles.mainContent}
            ref={contentRef}
        >
            {/* Home Page */}
            <div className={`page-section ${activePage === 'page-home' ? 'active' : ''}`}>
                <div className="content-island">
                    <h1>Welcome to Kite</h1>

                    <EditInfo date={pageDates['page-home']} />

                    <p>
                        Kite is a modern IaC language designed for the multi-cloud era. Write your infrastructure once using
                        clean, declarative syntax — then provision seamlessly across AWS, Google Cloud, Azure, and more.
                    </p>

                    <p>
                        Built from the ground up with simplicity and power in mind, Kite brings a fresh approach to
                        infrastructure management. Every feature is thoughtfully designed to make your workflow faster,
                        safer, and more intuitive.
                    </p>

                    <ul style={{ listStyle: 'none', paddingLeft: 0, margin: '24px 0' }}>
                        <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                            <strong>Intuitive syntax.</strong> Familiar patterns combined with modern expressiveness.
                        </li>
                        <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                            <strong>True portability.</strong> Define once, provision anywhere.
                        </li>
                        <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                            <strong>Built to extend.</strong> Mixins and plugins adapt seamlessly to your team&apos;s workflow.
                        </li>
                        <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                            <strong>Secure and reliable.</strong> State management in a proper database ensures complete
                            traceability.
                        </li>
                    </ul>

                    <p>
                        Kite empowers teams to manage infrastructure with confidence and clarity, eliminating complexity
                        without sacrificing control.
                    </p>

                    {/* Feature Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '48px' }}>
                        {/* Get Started Card */}
                        <div className="feature-card"
                             style={{ background: '#FAF5FF', border: 'none', borderRadius: '16px', padding: '32px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ fontSize: '32px' }}>🗺️</div>
                                <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600 }}>Get started</h3>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="#overview"
                                   style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>
                                    <span style={{ color: '#F59E0B' }}>✨</span> Overview
                                </a>
                                <a href="#install"
                                   style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>
                                    <span style={{ color: '#F59E0B' }}>🔧</span> Install
                                </a>
                                <a href="#resources"
                                   style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>
                                    <span style={{ color: '#F59E0B' }}>☀️</span> Resources
                                </a>
                            </div>
                        </div>

                        {/* Develop Providers Card */}
                        <div className="feature-card"
                             style={{ background: '#FAF5FF', border: 'none', borderRadius: '16px', padding: '32px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ fontSize: '32px' }}>👷</div>
                                <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600 }}>Developers</h3>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="#develop-plugins"
                                   style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>
                                    <span style={{ color: '#5BB4FF' }}>🎯</span> Create provider plugins
                                </a>
                            </div>
                        </div>

                        {/* Reference Card */}
                        <div className="feature-card"
                             style={{ background: '#FAF5FF', border: 'none', borderRadius: '16px', padding: '32px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                <div style={{ fontSize: '32px' }}>📚</div>
                                <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600 }}>Reference</h3>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="#reference"
                                   style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>
                                    <span style={{ color: '#10B981' }}>📚</span> Reference
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overview Page */}
            <div className={`page-section ${activePage === 'page-overview' ? 'active' : ''}`}>
                <div className="content-island">
                    <div className="breadcrumb">
                        <a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-home'); }}>Home</a>
                        <span className="breadcrumb-separator">›</span>
                        <span>Overview</span>
                    </div>

                    <h1>Overview</h1>

                    <EditInfo date={pageDates['page-overview']} />

                    <h2 id="what-is-kite">What is Kite?</h2>

                    <p>
                        Kite is a declarative IaC language built to provision cloud infrastructure with precision and
                        consistency.
                    </p>

                    <p>
                        Define your resources once. Provision them anywhere. A single Kite configuration describes exactly
                        what you need, then scales effortlessly across your entire development lifecycle, from staging to
                        production.
                    </p>

                    <p>
                        Clean syntax meets powerful type safety. Catch configuration errors before they reach the cloud.
                        Share infrastructure modules across teams. The result? Infrastructure that&apos;s not just automated.
                        It&apos;s remarkably simple to understand and maintain.
                    </p>

                    <h2 id="why-kite" style={{ marginTop: '64px', marginBottom: '24px' }}>Why Kite?</h2>

                    <ul style={{ listStyle: 'none', paddingLeft: 0, margin: '24px 0' }}>
                        <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                            <strong>One language. Every cloud.</strong> True portability without the pain.
                        </li>
                        <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                            <strong>Designed to feel familiar.</strong> Kite&apos;s syntax draws from the best of Terraform,
                            Bicep, and modern languages like TypeScript, C# and Java.
                        </li>
                        <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                            <strong>Refactor fearlessly.</strong> Rename resources in code without ever losing the real ones
                            in the cloud.
                        </li>
                        <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                            <strong>Import with ease.</strong> Bring your existing cloud infrastructure into Kite. No
                            rewrites, no headaches, just instant control.
                        </li>
                        <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                            <strong>Build without limits.</strong> Extend resources effortlessly with annotations or mixins,
                            and compose infrastructure the way you imagine it.
                        </li>
                        <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                            <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                            <strong>State that scales with you.</strong> Just a proper database managing everything
                            automatically. Safe, fast, secure, and recoverable when things go wrong.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Basics Page */}
            <div className={`page-section ${activePage === 'page-basics' ? 'active' : ''}`}>
                <div className="content-island">
                    <div className="breadcrumb">
                        <a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-home'); }}>Home</a>
                        <span className="breadcrumb-separator">›</span>
                        <span>Basics</span>
                    </div>

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
            </div>

            {/* Basic Syntax Page */}
            <div className={`page-section ${activePage === 'page-basic-syntax' ? 'active' : ''}`}>
                <div className="content-island">
                    <div className="breadcrumb">
                        <a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-home'); }}>Home</a>
                        <span className="breadcrumb-separator">/</span>
                        <a href="#basics">Basics</a>
                        <span className="breadcrumb-separator">/</span>
                        <span>Basic syntax</span>
                    </div>

                    <h1>Basic syntax</h1>

                    <EditInfo date={pageDates['page-basic-syntax']} />

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
                            onClick={() => onCopyCode('package my.demo\n\nimport kite.text.*\n\n// ...', 'code4')}
                            style={copyStatus['code4'] ? { background: '#10B981', opacity: 1 } : {}}
                        >
                            {copyStatus['code4'] ? 'Copied!' : 'Copy'}
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
                            onClick={() => onCopyCode('fun main() {\n    println("Hello world!")\n}', 'code5')}
                            style={copyStatus['code5'] ? { background: '#10B981', opacity: 1 } : {}}
                        >
                            {copyStatus['code5'] ? 'Copied!' : 'Copy'}
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
                            onClick={() => onCopyCode('fun main(args: Array<String>) {\n    println(args.contentToString())\n}', 'code6')}
                            style={copyStatus['code6'] ? { background: '#10B981', opacity: 1 } : {}}
                        >
                            {copyStatus['code6'] ? 'Copied!' : 'Copy'}
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
            </div>
        </main>
    );
}
