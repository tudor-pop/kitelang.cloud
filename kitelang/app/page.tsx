'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

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
            {/* Top Navigation Bar */}
            <nav className="top-bar">
                <div className="logo">
                    <span className="logo-text">Kite</span>
                    <span className="version-badge">v0.0.2</span>
                </div>
                <div className="nav-buttons">
                    <Link href="/docs" className="nav-button">Documentation</Link>
                    <a href="#features" className="nav-button">Features</a>
                    <a href="#pricing" className="nav-button">Pricing</a>
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
                        <h1 className="hero-title">Infrastructure as Code.<br />Brutally Simple.</h1>
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
                        <div className="code-window">
                            <div className="code-header">
                                <span className="code-title">main.kite</span>
                                <button className="copy-btn">Copy</button>
                            </div>
                            <pre className="code-content">
{`package infrastructure

import kite.cloud.aws.*
import kite.cloud.gcp.*

resource vpc = VPC {
    name = "production-vpc"
    cidr = "10.0.0.0/16"
    region = "us-east-1"
}

resource server = EC2Instance {
    name = "web-server"
    type = "t3.medium"
    vpc = vpc
    tags = {
        environment = "production"
        managed_by = "kite"
    }
}`}
                            </pre>
                        </div>
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

                {/* Pricing Section */}
                <section id="pricing" className="pricing-section">
                    <h2 className="section-title">Simple Pricing</h2>
                    <div className="pricing-grid">
                        <div className="pricing-card">
                            <h3 className="pricing-tier">Free</h3>
                            <div className="pricing-price">$0<span className="pricing-period">/month</span></div>
                            <p className="pricing-subtitle">For small teams</p>
                            <ul className="pricing-features">
                                <li>✓ Unlimited projects</li>
                                <li>✓ Community support</li>
                                <li>✓ Core features</li>
                                <li>✓ &lt; 100 employees</li>
                                <li>✓ &lt; $1M revenue</li>
                            </ul>
                            <button className="pricing-button secondary">Get Started</button>
                        </div>
                        <div className="pricing-card featured">
                            <div className="featured-badge">Popular</div>
                            <h3 className="pricing-tier">Pro</h3>
                            <div className="pricing-price">$20<span className="pricing-period">/month</span></div>
                            <p className="pricing-subtitle">For growing teams</p>
                            <ul className="pricing-features">
                                <li>✓ Everything in Free</li>
                                <li>✓ Managed state backend</li>
                                <li>✓ Email support</li>
                                <li>✓ Advanced features</li>
                                <li>✓ Priority updates</li>
                            </ul>
                            <button className="pricing-button primary">Start Trial</button>
                        </div>
                        <div className="pricing-card">
                            <h3 className="pricing-tier">Enterprise</h3>
                            <div className="pricing-price">Custom</div>
                            <p className="pricing-subtitle">For large organizations</p>
                            <ul className="pricing-features">
                                <li>✓ Everything in Pro</li>
                                <li>✓ SSO & SAML</li>
                                <li>✓ 24/7 support</li>
                                <li>✓ Training & onboarding</li>
                                <li>✓ Custom SLA</li>
                            </ul>
                            <button className="pricing-button secondary">Contact Sales</button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-column">
                            <h4 className="footer-title">Product</h4>
                            <a href="/docs">Documentation</a>
                            <a href="#features">Features</a>
                            <a href="#pricing">Pricing</a>
                            <a href="/changelog">Changelog</a>
                        </div>
                        <div className="footer-column">
                            <h4 className="footer-title">Community</h4>
                            <a href="https://github.com/tudor-pop/kitelang" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="#">Discord</a>
                            <a href="#">Twitter</a>
                            <a href="#">Blog</a>
                        </div>
                        <div className="footer-column">
                            <h4 className="footer-title">Company</h4>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                            <a href="/LICENSE.html">License</a>
                            <a href="#">Terms</a>
                        </div>
                        <div className="footer-column">
                            <h4 className="footer-title">Kite</h4>
                            <p className="footer-text">Modern Infrastructure as Code for the multi-cloud era.</p>
                            <p className="footer-copyright">© 2025 EchoStream SRL</p>
                        </div>
                    </div>
                </footer>
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
                }

                /* Top Bar */
                .top-bar {
                    position: fixed;
                    top: 0;
                    left: 0;
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
                }

                /* Hero Section */
                .hero-section {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    padding: 100px 40px;
                    max-width: 1400px;
                    margin: 0 auto;
                    align-items: center;
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
                    color: var(--bg-primary);
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
                    background: var(--text-primary);
                    color: var(--bg-primary);
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
                }

                .code-content {
                    padding: 24px;
                    font-family: 'Roboto Mono', monospace;
                    font-size: 14px;
                    line-height: 1.8;
                    color: var(--text-primary);
                    overflow-x: auto;
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

                /* Footer */
                .footer {
                    background: var(--bg-secondary);
                    border-top: 2px solid var(--border-color);
                    padding: 60px 40px 40px;
                }

                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .footer-column {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .footer-title {
                    font-size: 14px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 8px;
                    color: var(--text-primary);
                }

                .footer-column a {
                    font-size: 14px;
                    color: var(--text-secondary);
                    text-decoration: none;
                    transition: color 0.2s;
                }

                .footer-column a:hover {
                    color: var(--primary-color);
                }

                .footer-text {
                    font-size: 14px;
                    line-height: 1.6;
                    color: var(--text-secondary);
                }

                .footer-copyright {
                    font-size: 12px;
                    color: var(--text-muted);
                    margin-top: 8px;
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

                    .footer-content {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </div>
    );
}