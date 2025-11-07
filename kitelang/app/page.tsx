'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from './components/Footer';
import InteractiveCodeBlock from './components/InteractiveCodeBlock';

export default function LandingPage() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Detect system theme on mount
    useEffect(() => {
        const detectSystemTheme = () => {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
            return 'light';
        };

        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const initialTheme = savedTheme || detectSystemTheme();
        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);

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

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="landing-page">
            {/* Decorative Clouds Background */}
            <div className="clouds-container">
                {/* Cloud 1 - Simple 3 bumps */}
                <svg className="cloud cloud-1" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 30,60 Q 30,30 50,30 Q 60,15 85,15 Q 110,15 120,30 Q 140,30 140,50 Q 140,70 120,70 L 50,70 Q 30,70 30,60 Z"/>
                </svg>

                {/* Cloud 2 - 4 bumps elongated */}
                <svg className="cloud cloud-2" viewBox="0 0 220 75" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 25,55 Q 25,35 45,35 Q 52,20 75,20 Q 90,20 95,25 Q 105,15 125,15 Q 145,15 150,25 Q 160,25 170,35 Q 180,35 180,55 Q 180,65 170,65 L 45,65 Q 25,65 25,55 Z"/>
                </svg>

                {/* Cloud 3 - 5 bumps large */}
                <svg className="cloud cloud-3" viewBox="0 0 240 85" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 30,65 Q 30,45 50,45 Q 57,28 80,28 Q 95,28 100,35 Q 110,22 135,22 Q 160,22 165,35 Q 175,30 190,30 Q 205,30 210,40 Q 220,40 220,60 Q 220,75 205,75 L 50,75 Q 30,75 30,65 Z"/>
                </svg>

                {/* Cloud 4 - Small 3 bumps */}
                <svg className="cloud cloud-4" viewBox="0 0 160 65" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 25,50 Q 25,30 42,30 Q 50,18 70,18 Q 90,18 98,30 Q 115,30 115,45 Q 115,58 100,58 L 42,58 Q 25,58 25,50 Z"/>
                </svg>

                {/* Cloud 5 - Flat bottom 4 bumps */}
                <svg className="cloud cloud-5" viewBox="0 0 190 70" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 25,60 L 25,50 Q 25,35 42,35 Q 48,22 68,22 Q 82,22 88,30 Q 98,20 118,20 Q 138,20 145,32 Q 160,32 160,50 L 160,60 Z"/>
                </svg>

                {/* Cloud 6 - Compact 4 bumps */}
                <svg className="cloud cloud-6" viewBox="0 0 180 75" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 28,58 Q 28,38 48,38 Q 55,25 75,25 Q 90,25 95,32 Q 105,22 125,22 Q 145,22 150,35 Q 165,35 165,55 Q 165,68 150,68 L 48,68 Q 28,68 28,58 Z"/>
                </svg>

                {/* Cloud 7 - Wide 5 bumps */}
                <svg className="cloud cloud-7" viewBox="0 0 250 80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 30,62 Q 30,45 48,45 Q 54,30 72,30 Q 85,30 90,37 Q 100,25 120,25 Q 140,25 145,35 Q 155,28 172,28 Q 190,28 195,38 Q 208,38 208,55 Q 208,70 195,70 L 48,70 Q 30,70 30,62 Z"/>
                </svg>

                {/* Cloud 8 - Tiny 3 bumps */}
                <svg className="cloud cloud-8" viewBox="0 0 140 60" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 22,48 Q 22,32 38,32 Q 45,20 62,20 Q 79,20 86,32 Q 102,32 102,46 Q 102,54 90,54 L 38,54 Q 22,54 22,48 Z"/>
                </svg>

                {/* Cloud 9 - Medium 4 bumps */}
                <svg className="cloud cloud-9" viewBox="0 0 200 75" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 28,60 Q 28,40 46,40 Q 52,26 72,26 Q 88,26 93,34 Q 103,22 123,22 Q 143,22 150,35 Q 165,35 165,55 Q 165,68 152,68 L 46,68 Q 28,68 28,60 Z"/>
                </svg>

                {/* Cloud 10 - Rounded 3 bumps */}
                <svg className="cloud cloud-10" viewBox="0 0 170 70" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 26,55 Q 26,38 44,38 Q 52,23 74,23 Q 96,23 104,38 Q 122,38 122,52 Q 122,64 108,64 L 44,64 Q 26,64 26,55 Z"/>
                </svg>
            </div>

            {/* Top Navigation Bar */}
            <nav className="top-bar">
                <div className="logo">
                    <span className="logo-text">Kite</span>
                    <span className="version-badge">v0.0.2</span>
                </div>
                <div className="nav-buttons">
                    <Link href="/docs" className="nav-button">Documentation</Link>
                    <a href="#features" className="nav-button">Features</a>
                    <Link href="/pricing" className="nav-button">Pricing</Link>
                    <a href="https://github.com/tudor-pop/kitelang" target="_blank" rel="noopener noreferrer" className="nav-button">GitHub</a>
                    <button onClick={toggleTheme} className="nav-button theme-toggle">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="main-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">Infrastructure as Code.<br />Actually Simple.</h1>
                        <p className="hero-subtitle">
                            Define your cloud infrastructure with precision and clarity.
                            Deploy anywhere. Scale effortlessly. Built for the multi-cloud era.
                        </p>
                        <div className="hero-buttons">
                            <Link href="/docs" className="primary-button">Get Started</Link>
                            <a href="#demo" className="secondary-button">See Demo</a>
                        </div>
                    </div>
                    <div className="hero-code">
                        <InteractiveCodeBlock />
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="features-section">
                    <h2 className="section-title">Why Kite?</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🚀</div>
                            <h3 className="feature-title">Multi-Cloud Native</h3>
                            <p className="feature-description">
                                One language for AWS, GCP, Azure, and more. True portability without the pain.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h3 className="feature-title">Type Safe</h3>
                            <p className="feature-description">
                                Catch configuration errors before deployment. Strong typing meets infrastructure.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3 className="feature-title">Blazing Fast</h3>
                            <p className="feature-description">
                                Optimized compilation and execution. Deploy in seconds, not minutes.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🎯</div>
                            <h3 className="feature-title">Developer First</h3>
                            <p className="feature-description">
                                Clean syntax inspired by modern languages. Familiar patterns, powerful features.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔄</div>
                            <h3 className="feature-title">State Management</h3>
                            <p className="feature-description">
                                Database-backed state. Automatic versioning. Team collaboration built-in.
                            </p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🛠️</div>
                            <h3 className="feature-title">Extensible</h3>
                            <p className="feature-description">
                                Mixins, plugins, and custom providers. Adapt to your team's workflow.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </main>

            <style jsx global>{`
                :root {
                    --bg-primary: #FFFFFF;
                    --bg-secondary: #F5F5F5;
                    --text-primary: #000000;
                    --text-secondary: #4A4A4A;
                    --text-muted: #6B6B6B;
                    --primary-color: #A855F7;
                    --primary-dark: #9333EA;
                    --primary-light: #C084FC;
                    --border-color: #000000;
                    --code-bg: #F5F5F5;
                    --shadow: rgba(0, 0, 0, 0.2);
                }

                [data-theme="dark"] {
                    --bg-primary: #000000;
                    --bg-secondary: #1A1A1A;
                    --text-primary: #FFFFFF;
                    --text-secondary: #B0B0B0;
                    --text-muted: #808080;
                    --border-color: #FFFFFF;
                    --code-bg: #1A1A1A;
                    --shadow: rgba(255, 255, 255, 0.2);
                }

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    background: var(--bg-primary);
                    color: var(--text-primary);
                    transition: background-color 0.3s ease, color 0.3s ease;
                }

                .landing-page {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    position: relative;
                    overflow: hidden;
                }

                .clouds-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    z-index: 0;
                    opacity: 1;
                }

                .cloud {
                    position: absolute;
                    opacity: 0.15;
                }

                .cloud-1 {
                    width: 180px;
                    top: 8%;
                    left: 5%;
                    animation: float 35s infinite ease-in-out;
                    fill: #60A5FA;
                }

                .cloud-2 {
                    width: 110px;
                    top: 15%;
                    left: 25%;
                    animation: float 28s infinite ease-in-out 3s;
                    fill: #C084FC;
                }

                .cloud-3 {
                    width: 180px;
                    top: 20%;
                    right: 10%;
                    animation: float 42s infinite ease-in-out 7s;
                    fill: #34D399;
                }

                .cloud-4 {
                    width: 150px;
                    top: 35%;
                    right: 25%;
                    animation: float 32s infinite ease-in-out 12s;
                    fill: #818CF8;
                }

                .cloud-5 {
                    width: 90px;
                    top: 45%;
                    left: 15%;
                    animation: float 25s infinite ease-in-out 5s;
                    fill: #F472B6;
                }

                .cloud-6 {
                    width: 180px;
                    top: 55%;
                    right: 8%;
                    animation: float 38s infinite ease-in-out 18s;
                    fill: #22D3EE;
                }

                .cloud-7 {
                    width: 140px;
                    top: 65%;
                    left: 30%;
                    animation: float 30s infinite ease-in-out 10s;
                    fill: #A78BFA;
                }

                .cloud-8 {
                    width: 80px;
                    top: 75%;
                    right: 35%;
                    animation: float 22s infinite ease-in-out 14s;
                    fill: #2DD4BF;
                }

                .cloud-9 {
                    width: 160px;
                    top: 82%;
                    left: 8%;
                    animation: float 36s infinite ease-in-out 8s;
                    fill: #6366F1;
                }

                .cloud-10 {
                    width: 130px;
                    top: 90%;
                    right: 15%;
                    animation: float 29s infinite ease-in-out 16s;
                    fill: #8B5CF6;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    25% {
                        transform: translateY(-20px) translateX(10px);
                    }
                    50% {
                        transform: translateY(0) translateX(20px);
                    }
                    75% {
                        transform: translateY(20px) translateX(10px);
                    }
                }

                /* Top Bar */
                .top-bar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    z-index: 100;
                    right: 0;
                    height: 70px;
                    background: var(--bg-primary);
                    border-bottom: 2px solid var(--border-color);
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 40px;
                    z-index: 1000;
                    transition: background-color 0.3s ease;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .logo-text {
                    font-size: 28px;
                    font-weight: 900;
                    color: var(--text-primary);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .version-badge {
                    background: var(--primary-color);
                    color: var(--bg-primary);
                    font-size: 11px;
                    padding: 4px 10px;
                    border-radius: 0;
                    font-weight: 900;
                    letter-spacing: 1px;
                    border: 2px solid var(--border-color);
                    font-family: 'Roboto Mono', monospace;
                }

                .nav-buttons {
                    display: flex;
                    gap: 8px;
                    align-items: center;
                }

                .nav-button {
                    padding: 10px 20px;
                    background: transparent;
                    border: 2px solid var(--border-color);
                    border-radius: 4px;
                    color: var(--text-primary);
                    font-size: 14px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s;
                    text-decoration: none;
                    display: inline-block;
                }

                .nav-button:hover {
                    background: var(--primary-color);
                    color: var(--bg-primary);
                    transform: translate(-2px, -2px);
                    box-shadow: 2px 2px 0 var(--border-color);
                }

                .theme-toggle {
                    font-size: 18px;
                    padding: 8px 12px;
                }

                /* Main Content */
                .main-content {
                    margin-top: 70px;
                    overflow-y: auto;
                    flex: 1;
                    position: relative;
                    z-index: 1;
                }

                /* Hero Section */
                .hero-section {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    padding: 0 40px;
                    max-width: 1400px;
                    margin: 0 auto;
                    align-items: center;
                    min-height: calc(100vh - 70px);
                }

                .hero-content {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .hero-title {
                    font-size: 56px;
                    font-weight: 900;
                    line-height: 1.2;
                    color: var(--text-primary);
                    letter-spacing: -1px;
                }

                .hero-subtitle {
                    font-size: 20px;
                    line-height: 1.7;
                    color: var(--text-secondary);
                }

                .hero-buttons {
                    display: flex;
                    gap: 16px;
                    margin-top: 16px;
                }

                .primary-button {
                    padding: 16px 32px;
                    background: var(--primary-color);
                    color: #FFFFFF;
                    border: 2px solid var(--border-color);
                    border-radius: 4px;
                    font-size: 16px;
                    font-weight: 900;
                    cursor: pointer;
                    transition: all 0.2s;
                    text-decoration: none;
                    display: inline-block;
                }

                .primary-button:hover {
                    transform: translate(-4px, -4px);
                    box-shadow: 4px 4px 0 var(--border-color);
                }

                .secondary-button {
                    padding: 16px 32px;
                    background: transparent;
                    color: var(--text-primary);
                    border: 2px solid var(--border-color);
                    border-radius: 4px;
                    font-size: 16px;
                    font-weight: 900;
                    cursor: pointer;
                    transition: all 0.2s;
                    text-decoration: none;
                    display: inline-block;
                }

                .secondary-button:hover {
                    transform: translate(-4px, -4px);
                    box-shadow: 4px 4px 0 var(--border-color);
                }

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
                    color: var(--bg-primary);
                }

                .code-title {
                    font-family: 'Roboto Mono', monospace;
                    font-size: 14px;
                    font-weight: 600;
                    color: var(--text-primary);
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
                    line-height: 1.8;
                    color: var(--text-primary);
                    overflow-x: auto;
                    min-height: 400px;
                }

                .code-line {
                    display: flex;
                    gap: 16px;
                    padding: 2px 0;
                    transition: background 0.3s ease;
                }

                .code-line.highlighted {
                    background: var(--primary-color);
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
                .keyword {
                    color: #A855F7;
                    font-weight: 600;
                }

                .string {
                    color: #10B981;
                }

                .number {
                    color: #06B6D4;
                }

                .operator {
                    color: var(--text-secondary);
                }

                .comment {
                    color: var(--text-muted);
                    font-style: italic;
                }

                /* Features Section */
                .features-section {
                    padding: 100px 40px;
                    background: var(--bg-secondary);
                    border-top: 2px solid var(--border-color);
                    border-bottom: 2px solid var(--border-color);
                }

                .section-title {
                    font-size: 48px;
                    font-weight: 900;
                    text-align: center;
                    margin-bottom: 60px;
                    color: var(--text-primary);
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .feature-card {
                    background: var(--bg-primary);
                    border: 2px solid var(--border-color);
                    border-radius: 16px;
                    padding: 32px;
                    transition: all 0.2s;
                }

                .feature-card:hover {
                    transform: translate(-6px, -6px);
                    box-shadow: 6px 6px 0 var(--shadow);
                }

                .feature-icon {
                    font-size: 40px;
                    margin-bottom: 16px;
                }

                .feature-title {
                    font-size: 22px;
                    font-weight: 700;
                    margin-bottom: 12px;
                    color: var(--text-primary);
                }

                .feature-description {
                    font-size: 16px;
                    line-height: 1.6;
                    color: var(--text-secondary);
                }

                /* Pricing Section */
                .pricing-section {
                    padding: 100px 40px;
                }

                .pricing-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .pricing-card {
                    background: var(--bg-primary);
                    border: 2px solid var(--border-color);
                    border-radius: 16px;
                    padding: 40px 32px;
                    position: relative;
                    transition: all 0.2s;
                }

                .pricing-card.featured {
                    border-color: var(--primary-color);
                    border-width: 3px;
                }

                .featured-badge {
                    position: absolute;
                    top: -12px;
                    right: 20px;
                    background: var(--primary-color);
                    color: var(--bg-primary);
                    padding: 6px 16px;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: 900;
                    letter-spacing: 1px;
                }

                .pricing-tier {
                    font-size: 24px;
                    font-weight: 900;
                    margin-bottom: 16px;
                    color: var(--text-primary);
                }

                .pricing-price {
                    font-size: 48px;
                    font-weight: 900;
                    margin-bottom: 8px;
                    color: var(--text-primary);
                }

                .pricing-period {
                    font-size: 18px;
                    font-weight: 500;
                    color: var(--text-muted);
                }

                .pricing-subtitle {
                    font-size: 14px;
                    color: var(--text-muted);
                    margin-bottom: 24px;
                }

                .pricing-features {
                    list-style: none;
                    margin-bottom: 32px;
                }

                .pricing-features li {
                    padding: 10px 0;
                    font-size: 15px;
                    color: var(--text-secondary);
                }

                .pricing-button {
                    width: 100%;
                    padding: 14px;
                    border: 2px solid var(--border-color);
                    border-radius: 4px;
                    font-size: 16px;
                    font-weight: 900;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .pricing-button.primary {
                    background: var(--primary-color);
                    color: var(--bg-primary);
                }

                .pricing-button.secondary {
                    background: transparent;
                    color: var(--text-primary);
                }

                .pricing-button:hover {
                    transform: translate(-4px, -4px);
                    box-shadow: 4px 4px 0 var(--border-color);
                }

                /* Responsive */
                @media (max-width: 1200px) {
                    .hero-section {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }

                    .features-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .pricing-grid {
                        grid-template-columns: 1fr;
                        max-width: 500px;
                    }
                }

                @media (max-width: 768px) {
                    .top-bar {
                        padding: 0 20px;
                    }

                    .nav-buttons {
                        gap: 4px;
                    }

                    .nav-button {
                        padding: 8px 12px;
                        font-size: 12px;
                    }

                    .hero-title {
                        font-size: 36px;
                    }

                    .features-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
}