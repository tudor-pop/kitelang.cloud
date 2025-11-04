'use client';

import React from 'react';
import Footer from '../components/Footer';
import EditInfo from './EditInfo';

interface MainContentProps {
    activePage: string;
    onShowPage: (pageId: string) => void;
    onCopyCode: (code: string, blockId: string) => void;
    copyStatus: { [key: string]: boolean };
    contentRef: React.RefObject<HTMLElement>;
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
            className="main-content"
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

                    {/* Accent Section */}
                    <div style={{ background: '#FBFBFB', border: '2px solid var(--border-color)', borderRadius: '16px', padding: '32px', margin: '48px 0', boxShadow: '-8px 8px 0 var(--shadow)' }}>
                        <p style={{ margin: 0, fontSize: '20px', fontWeight: 700, textAlign: 'center', color: '#000' }}>
                            Ready to transform your infrastructure workflow? Explore Kite today!
                        </p>
                    </div>

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
                                <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600 }}>Develop providers</h3>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="#develop-plugins"
                                   style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>
                                    <span style={{ color: '#5BB4FF' }}>🎯</span> Develop provider plugins
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

            {/* Footer */}
            <Footer />

            <style jsx global>{`
                .main-content {
                    flex: 1;
                    margin-left: 280px;
                    margin-right: 40px;
                    padding: 0;
                    background-color: transparent;
                    max-width: 100%;
                    overflow-x: hidden;
                    box-sizing: border-box;
                    position: relative;
                    z-index: 10;
                }

                .page-section {
                    display: none;
                }

                .page-section.active {
                    display: block;
                }

                .content-island {
                    background: #FFFFFF;
                    border-radius: 16px;
                    padding: 48px 56px;
                    margin: 24px 32px;
                    border: 2px solid var(--border-color);
                    box-shadow: none;
                    transition: none;
                    max-width: 100%;
                    box-sizing: border-box;
                    overflow-x: auto;
                }

                [data-theme="dark"] .content-island {
                    background: #1A1A1A;
                    border-color: #2A2A2A;
                    box-shadow: none;
                }

                .breadcrumb {
                    font-size: 13px;
                    color: var(--text-muted);
                    margin-bottom: 32px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .breadcrumb a {
                    color: var(--primary-color);
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.2s;
                    border-bottom: 2px solid transparent;
                    padding-bottom: 2px;
                    display: inline-block;
                }

                .breadcrumb a:hover {
                    color: var(--primary-dark);
                    border-bottom-color: var(--primary-light);
                }

                .breadcrumb-separator {
                    color: var(--text-light);
                }

                .content-island h1 {
                    font-size: 52px;
                    color: var(--text-primary);
                    margin-bottom: 16px;
                    font-weight: 700;
                    letter-spacing: -1.5px;
                    line-height: 1.2;
                }

                .content-island h2 {
                    font-size: 36px;
                    color: var(--text-primary);
                    margin-top: 32px;
                    margin-bottom: 16px;
                    font-weight: 600;
                    position: relative;
                    padding-bottom: 16px;
                    scroll-margin-top: 24px;
                    line-height: 1.3;
                    letter-spacing: -0.5px;
                }

                .content-island p {
                    margin-bottom: 24px;
                    font-size: 17px;
                    line-height: 1.8;
                    color: var(--text-secondary);
                    letter-spacing: 0.2px;
                }

                .content-island code {
                    background: rgba(0, 0, 0, 0.06);
                    color: var(--primary-color);
                    padding: 3px 8px;
                    border-radius: 6px;
                    font-family: 'Roboto Mono', 'Consolas', monospace;
                    font-size: 0.9em;
                    font-weight: 500;
                    letter-spacing: 0;
                }

                [data-theme="dark"] .content-island code {
                    background: rgba(255, 255, 255, 0.1);
                }

                .code-block code {
                    background: transparent;
                    padding: 0;
                    border-radius: 0;
                    color: var(--text-primary);
                }

                .section-divider {
                    height: 2px;
                    background: #666666;
                    margin: 48px 0;
                }

                .content-island a {
                    color: var(--primary-color);
                    text-decoration: none;
                    font-family: 'Roboto Mono', 'Consolas', monospace;
                    font-size: 0.9em;
                    font-weight: 500;
                    transition: all 0.2s;
                    border-bottom: 2px solid transparent;
                    position: relative;
                }

                .content-island a:hover {
                    color: var(--primary-dark);
                    border-bottom-color: var(--primary-light);
                    text-decoration: none;
                }

                .content-island a[href^="http"]::after,
                .content-island a[href^="https://"]::after {
                    content: '↗';
                    font-size: 0.85em;
                    margin-left: 4px;
                    opacity: 0.6;
                    display: inline-block;
                    transition: all 0.2s;
                }

                .content-island a[href^="http"]:hover::after,
                .content-island a[href^="https://"]:hover::after {
                    opacity: 1;
                    transform: translate(2px, -2px);
                }

                .breadcrumb a::after {
                    content: none;
                }

                .code-block {
                    background: var(--code-bg);
                    border: none;
                    border-radius: 16px;
                    padding: 30px;
                    margin: 30px 0;
                    overflow-x: auto;
                    position: relative;
                    box-shadow: none;
                }

                .code-block code {
                    font-family: 'Roboto Mono', 'Consolas', monospace;
                    font-size: 14px;
                    line-height: 1.8;
                    color: var(--code-text);
                }

                [data-theme="dark"] .code-block code {
                    color: #FFFFFF;
                }

                .keyword {
                    color: #7C3AED;
                    font-weight: 700;
                }

                [data-theme="dark"] .keyword {
                    color: #C084FC;
                }

                .import {
                    color: #0284C7;
                    font-weight: 600;
                }

                [data-theme="dark"] .import {
                    color: #5BB4FF;
                }

                .string {
                    color: #059669;
                }

                [data-theme="dark"] .string {
                    color: #34D399;
                }

                .comment {
                    color: #6B7280;
                    font-style: italic;
                }

                [data-theme="dark"] .comment {
                    color: #9CA3AF;
                }

                .function {
                    color: #0369A1;
                    font-weight: 600;
                }

                [data-theme="dark"] .function {
                    color: #60A5FA;
                }

                .code-block-wrapper {
                    position: relative;
                }

                .copy-button {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: var(--primary-color);
                    border: 1px solid var(--border-color);
                    color: white;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 13px;
                    font-weight: 900;
                    cursor: pointer;
                    transition: opacity 0.3s ease, box-shadow 0.2s ease;
                    opacity: 0;
                    z-index: 10;
                    box-shadow: none;
                }

                .code-block-wrapper:hover .copy-button {
                    opacity: 1;
                }

                .copy-button:hover {
                    background: var(--primary-dark);
                    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.5);
                }

                .copy-button:active {
                    transform: none;
                }

                .info-box {
                    background: var(--info-bg);
                    border-radius: 12px;
                    padding: 24px 28px;
                    margin: 30px 0;
                    box-shadow: none;
                    border: none;
                }

                .info-box p {
                    margin: 0;
                    color: var(--text-secondary);
                }

                .feature-card {
                    border: 2px solid var(--border-color) !important;
                    box-shadow: none !important;
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }

                .feature-card:hover {
                    transform: translate(-6px, -6px) scale(1.02);
                    box-shadow: 6px 6px 0 var(--shadow) !important;
                }

                .feature-card a {
                    cursor: pointer;
                }

                .feature-card a:hover {
                    color: var(--primary-color) !important;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .content-island > * {
                    animation: fadeInUp 0.6s ease-out;
                }

                .content-island h2 {
                    animation: fadeInUp 0.6s ease-out 0.1s backwards;
                }

                @media (max-width: 1400px) {
                    .main-content {
                        margin-right: 40px !important;
                    }

                    .content-island {
                        margin: 24px 32px;
                    }
                }

                @media (max-width: 1100px) {
                    .main-content {
                        margin-left: 0;
                        margin-right: 16px !important;
                    }

                    .content-island {
                        margin: 24px 16px;
                        padding: 40px 32px;
                    }
                }

                @media (max-width: 900px) {
                    .main-content {
                        margin-left: 0;
                        margin-right: 0 !important;
                        padding: 0;
                        width: 100%;
                    }

                    .content-island {
                        margin: 16px;
                        padding: 32px 20px;
                        border-radius: 12px;
                    }

                    .content-island h1 {
                        font-size: 36px;
                    }

                    .content-island h2 {
                        font-size: 26px;
                    }
                }
            `}</style>
        </main>
    );
}
