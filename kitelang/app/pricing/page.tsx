'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PricingPage() {
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
        <div className="pricing-page">
            {/* Top Navigation Bar */}
            <nav className="top-bar">
                <div className="logo">
                    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span className="logo-text">Kite</span>
                        <span className="version-badge">v0.0.2</span>
                    </Link>
                </div>
                <div className="nav-buttons">
                    <Link href="/docs" className="nav-button">Documentation</Link>
                    <Link href="/#features" className="nav-button">Features</Link>
                    <Link href="/pricing" className="nav-button active">Pricing</Link>
                    <a href="https://github.com/tudor-pop/kitelang" target="_blank" rel="noopener noreferrer" className="nav-button">GitHub</a>
                    <button onClick={toggleTheme} className="nav-button theme-toggle">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="main-content">
                {/* Pricing Section */}
                <section className="pricing-section">
                    <h1 className="page-title">Simple Pricing</h1>
                    <p className="page-subtitle">
                        Choose the plan that fits your team. All plans include core features.
                        Scale as you grow.
                    </p>

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
                                <li>✓ 100-500 employees</li>
                                <li>✓ $10M revenue</li>
                            </ul>
                            <button className="pricing-button primary">Start Trial</button>
                        </div>
                        <div className="pricing-card">
                            <h3 className="pricing-tier">Enterprise</h3>
                            <div className="pricing-price">Custom</div>
                            <p className="pricing-subtitle">For large organizations</p>
                            <ul className="pricing-features">
                                <li>✓ Everything in Pro</li>
                                <li>✓ 24/7 priority support</li>
                                <li>✓ Feature request</li>
                                <li>✓ Training & onboarding</li>
                                <li>✓ Custom SLA</li>
                            </ul>
                            <button className="pricing-button secondary">Contact Sales</button>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="faq-section">
                        <h2 className="faq-title">Frequently Asked Questions</h2>
                        <div className="faq-grid">
                            <div className="faq-item">
                                <h3 className="faq-question">What counts as a project?</h3>
                                <p className="faq-answer">
                                    A project is a distinct infrastructure configuration managed by Kite.
                                    You can have unlimited projects on all plans.
                                </p>
                            </div>
                            <div className="faq-item">
                                <h3 className="faq-question">Can I upgrade or downgrade anytime?</h3>
                                <p className="faq-answer">
                                    Yes! You can change your plan at any time. Changes take effect immediately,
                                    and we'll prorate your billing accordingly.
                                </p>
                            </div>
                            <div className="faq-item">
                                <h3 className="faq-question">What is managed state backend?</h3>
                                <p className="faq-answer">
                                    We host and manage your infrastructure state in a secure, highly available
                                    database with automatic backups and versioning.
                                </p>
                            </div>
                            <div className="faq-item">
                                <h3 className="faq-question">Do you offer academic or non-profit discounts?</h3>
                                <p className="faq-answer">
                                    Yes! Contact us for special pricing for educational institutions,
                                    open-source projects, and non-profit organizations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-column">
                            <h4 className="footer-title">Product</h4>
                            <Link href="/docs">Documentation</Link>
                            <Link href="/#features">Features</Link>
                            <Link href="/pricing">Pricing</Link>
                            <a href="/changelog">Changelog</a>
                        </div>
                        <div className="footer-column">
                            <h4 className="footer-title">Community</h4>
                            <a href="https://github.com/tudor-pop/kitelang" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="#">Discord</a>
                            <a href="https://x.com/kite_lang" target="_blank">X</a>
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
                    --shadow: rgba(0, 0, 0, 0.2);
                }

                [data-theme="dark"] {
                    --bg-primary: #000000;
                    --bg-secondary: #1A1A1A;
                    --text-primary: #FFFFFF;
                    --text-secondary: #B0B0B0;
                    --text-muted: #808080;
                    --border-color: #FFFFFF;
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

                .pricing-page {
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

                .nav-button.active {
                    background: var(--primary-color);
                    color: var(--bg-primary);
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

                /* Pricing Section */
                .pricing-section {
                    padding: 100px 40px;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .page-title {
                    font-size: 56px;
                    font-weight: 900;
                    text-align: center;
                    margin-bottom: 24px;
                    color: var(--text-primary);
                    letter-spacing: -1px;
                }

                .page-subtitle {
                    font-size: 20px;
                    line-height: 1.6;
                    text-align: center;
                    color: var(--text-secondary);
                    margin-bottom: 80px;
                    max-width: 700px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .pricing-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                    max-width: 1200px;
                    margin: 0 auto 100px;
                }

                .pricing-card {
                    background: var(--bg-primary);
                    border: 2px solid var(--border-color);
                    border-radius: 16px;
                    padding: 40px 32px;
                    position: relative;
                    transition: all 0.2s;
                }

                .pricing-card:hover {
                    transform: translate(-6px, -6px);
                    box-shadow: 6px 6px 0 var(--shadow);
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

                /* FAQ Section */
                .faq-section {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .faq-title {
                    font-size: 36px;
                    font-weight: 900;
                    margin-bottom: 48px;
                    text-align: center;
                    color: var(--text-primary);
                }

                .faq-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 32px;
                }

                .faq-item {
                    background: var(--bg-secondary);
                    border: 2px solid var(--border-color);
                    border-radius: 12px;
                    padding: 32px;
                }

                .faq-question {
                    font-size: 18px;
                    font-weight: 700;
                    margin-bottom: 12px;
                    color: var(--text-primary);
                }

                .faq-answer {
                    font-size: 15px;
                    line-height: 1.7;
                    color: var(--text-secondary);
                }

                /* Footer */
                .footer {
                    background: var(--bg-secondary);
                    border-top: 2px solid var(--border-color);
                    padding: 60px 40px 40px;
                    margin-top: 100px;
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
                    .pricing-grid {
                        grid-template-columns: 1fr;
                        max-width: 500px;
                    }

                    .faq-grid {
                        grid-template-columns: 1fr;
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

                    .page-title {
                        font-size: 36px;
                    }

                    .footer-content {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </div>
    );
}