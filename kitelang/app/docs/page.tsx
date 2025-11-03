'use client';

import React, { useState, useEffect, useRef } from 'react';
import './docs.css';
import TableOfContents from './TableOfContents';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

export default function DocsPage() {
    const [activePage, setActivePage] = useState('page-home');
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({
        'concepts': true,
        'types': true,
        'basicTypes': true,
    });
    const [readingProgress, setReadingProgress] = useState(0);
    const [activeTocItem, setActiveTocItem] = useState('');
    const [tocContent, setTocContent] = useState<React.ReactNode>(null);
    const [showToc, setShowToc] = useState(false);
    const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});

    // Refs
    const mainContentRef = useRef<HTMLElement>(null);

    // Detect system theme on mount
    useEffect(() => {
        const detectSystemTheme = () => {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
            return 'light';
        };

        // Check for saved preference, otherwise use system preference
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const initialTheme = savedTheme || detectSystemTheme();
        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);

        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            const savedTheme = localStorage.getItem('theme');
            if (!savedTheme) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
                document.documentElement.setAttribute('data-theme', newTheme);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Reading progress indicator
    useEffect(() => {
        const updateReadingProgress = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setReadingProgress(scrolled);
        };

        window.addEventListener('scroll', updateReadingProgress);
        updateReadingProgress();

        return () => window.removeEventListener('scroll', updateReadingProgress);
    }, []);

    // TOC active item highlighting
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    if (id) {
                        setActiveTocItem(id);
                    }
                }
            });
        }, observerOptions);

        // Observe all h2 sections
        const headings = document.querySelectorAll('h2[id]');
        headings.forEach(heading => observer.observe(heading));

        return () => {
            headings.forEach(heading => observer.unobserve(heading));
        };
    }, [activePage]);

    // Handle theme toggle
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Handle sidebar toggle
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        setHamburgerActive(!hamburgerActive);
    };

    // Handle menu expansion
    const toggleMenu = (menuKey: string) => {
        setExpandedMenus(prev => ({
            ...prev,
            [menuKey]: !prev[menuKey]
        }));
    };

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Copy code function
    const copyCode = (code: string, blockId: string) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopyStatus(prev => ({ ...prev, [blockId]: true }));
            setTimeout(() => {
                setCopyStatus(prev => ({ ...prev, [blockId]: false }));
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    };

    // Show page function
    const showPage = (pageId: string) => {
        setActivePage(pageId);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update TOC based on page
        if (pageId === 'page-home') {
            setShowToc(false);
        } else if (pageId === 'page-overview') {
            setShowToc(true);
            setTocContent(
                <>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} data-level="1">Overview</a></li>
                    <li><a href="#what-is-kite" data-level="2">What is Kite?</a></li>
                    <li><a href="#why-kite" data-level="2">Why Kite?</a></li>
                </>
            );
        } else if (pageId === 'page-basics') {
            setShowToc(true);
            setTocContent(
                <>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} data-level="1">Basics</a></li>
                    <li><a href="#package-definition" data-level="2">Package definition and imports</a></li>
                    <li><a href="#program-entry" data-level="2">Program entry point</a></li>
                </>
            );
        } else if (pageId === 'page-basic-syntax') {
            setShowToc(true);
            setTocContent(
                <>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} data-level="1">Basic syntax</a></li>
                    <li><a href="#package-definition" data-level="2">Package definition and imports</a></li>
                    <li><a href="#program-entry" data-level="2">Program entry point</a></li>
                </>
            );
        }
    };

    return (
        <div className="body">
            {/* Reading Progress Indicator */}
            <div className="reading-progress" style={{ width: `${readingProgress}%` }}></div>

            {/* Hamburger Menu */}
            <button
                className={`hamburger ${hamburgerActive ? 'active' : ''}`}
                onClick={toggleSidebar}
            >
                <div className="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span>Menu</span>
            </button>

            <div className="container">
                {/* Left Sidebar Navigation */}
                <Sidebar
                    isOpen={sidebarOpen}
                    expandedMenus={expandedMenus}
                    onToggleMenu={toggleMenu}
                    onShowPage={showPage}
                />

                {/* Main Content */}
                <main
                    className="main-content"
                    ref={mainContentRef}
                    style={{
                        marginRight: showToc ? '280px' : '40px'
                    }}
                >
                    {/* Home Page */}
                    <div className={`page-section ${activePage === 'page-home' ? 'active' : ''}`}>
                        <div className="content-island">
                            <h1>Welcome to Kite</h1>

                            <div className="edit-info">
                                <span>Updated on January 2025</span>
                            </div>

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
                                <a href="#" onClick={(e) => { e.preventDefault(); showPage('page-home'); }}>Home</a>
                                <span className="breadcrumb-separator">›</span>
                                <span>Overview</span>
                            </div>

                            <h1>Overview</h1>

                            <div className="edit-info">
                                <span>Updated on January 2025</span>
                            </div>

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
                                <a href="#" onClick={(e) => { e.preventDefault(); showPage('page-home'); }}>Home</a>
                                <span className="breadcrumb-separator">›</span>
                                <span>Basics</span>
                            </div>

                            <h1>Basic syntax</h1>

                            <div className="edit-info">
                                <span>Updated on August 5, 2025</span>
                            </div>

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
                                    onClick={() => copyCode('package my.demo\n\nimport kite.text.*\n\n// ...', 'code1')}
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
                                    onClick={() => copyCode('fun main() {\n    println("Hello world!")\n}', 'code2')}
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
                                    onClick={() => copyCode('fun main(args: Array<String>) {\n    println(args.contentToString())\n}', 'code3')}
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
                                <a href="#" onClick={(e) => { e.preventDefault(); showPage('page-home'); }}>Home</a>
                                <span className="breadcrumb-separator">/</span>
                                <a href="#basics">Basics</a>
                                <span className="breadcrumb-separator">/</span>
                                <span>Basic syntax</span>
                            </div>

                            <h1>Basic syntax</h1>

                            <div className="edit-info">
                                <span>Updated on August 5, 2025</span>
                            </div>

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
                                    onClick={() => copyCode('package my.demo\n\nimport kite.text.*\n\n// ...', 'code4')}
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
                                    onClick={() => copyCode('fun main() {\n    println("Hello world!")\n}', 'code5')}
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
                                    onClick={() => copyCode('fun main(args: Array<String>) {\n    println(args.contentToString())\n}', 'code6')}
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
                </main>

                {/* Right Sidebar - Table of Contents */}
                <TableOfContents content={tocContent} show={showToc} />
            </div>

            {/* Floating Action Buttons */}
            <div
                className="fab-container"
                style={{
                    right: showToc ? '40px' : '90px'
                }}
            >
                <button className="fab" title="Scroll to top" onClick={scrollToTop}>↑</button>
                <button className="fab" title="Toggle theme" onClick={toggleTheme}>
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>
            </div>
        </div>
    );
}