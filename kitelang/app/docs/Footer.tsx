'use client';

import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Kite</h3>
                        <p>Modern Infrastructure as Code for multi-cloud deployments.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="/docs">Documentation</a></li>
                            <li><a href="https://github.com/kitelang/kite">GitHub</a></li>
                            <li><a href="/examples">Examples</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Community</h4>
                        <ul>
                            <li><a href="https://discord.gg/kite">Discord</a></li>
                            <li><a href="https://twitter.com/kitelang">Twitter</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {currentYear} EchoStream SRL. Licensed under Fair Code.</p>
                </div>
            </footer>

            <style jsx>{`
                .footer {
                    background: #FFFFFF;
                    border-radius: 16px;
                    border: 2px solid var(--border-color);
                    box-shadow: none;
                    padding: 48px 48px 24px 48px;
                    margin: 32px 32px 24px 32px;
                    position: relative;
                    transition: none;
                    font-family: 'Roboto Mono', 'Consolas', monospace;
                }

                :global([data-theme="dark"]) .footer {
                    background: #1A1A1A;
                    border-color: #2A2A2A;
                    box-shadow: none;
                }

                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 48px;
                    margin-bottom: 40px;
                }

                :global(.footer-section h3) {
                    font-size: 14px;
                    font-weight: 600;
                    color: var(--text-primary);
                    margin-bottom: 16px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                :global(.footer-section h4) {
                    font-size: 14px;
                    font-weight: 600;
                    color: var(--text-primary);
                    margin-bottom: 16px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                :global(.footer-section p) {
                    color: var(--text-secondary);
                    font-size: 14px;
                    line-height: 1.6;
                }

                :global(.footer-section ul) {
                    list-style: none;
                    padding: 0;
                }

                :global(.footer-section ul li) {
                    margin-bottom: 8px;
                }

                :global(.footer-section a) {
                    color: var(--text-secondary);
                    font-size: 14px;
                    border: none;
                }

                :global(.footer-section a:hover) {
                    color: var(--primary-color);
                }

                .footer-bottom {
                    border-top: 1px solid var(--border-color);
                    padding-top: 32px;
                    margin-top: 40px;
                    text-align: center;
                    color: var(--text-muted);
                    font-size: 13px;
                }

                :global(.footer-bottom a) {
                    color: var(--primary-color);
                    border: none;
                }

                @media (max-width: 1400px) {
                    .footer {
                        margin: 32px 32px 24px 32px;
                    }
                }

                @media (max-width: 1100px) {
                    .footer {
                        margin: 32px 16px 24px 16px;
                    }
                }

                @media (max-width: 900px) {
                    .footer {
                        margin: 32px 16px 16px 16px;
                        padding: 32px 24px;
                        border-radius: 12px;
                    }

                    .footer-content {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }
                }
            `}</style>
        </>
    );
}
