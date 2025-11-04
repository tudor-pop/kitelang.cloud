'use client';

import React from 'react';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-column">
                        <h4 className="footer-title">Product</h4>
                        <a href="/docs">Documentation</a>
                        <a href="/#features">Features</a>
                        <a href="/pricing">Pricing</a>
                        <a href="/changelog">Changelog</a>
                    </div>
                    <div className="footer-column">
                        <h4 className="footer-title">Community</h4>
                        <a href="https://github.com/tudor-pop/kitelang" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="#">Discord</a>
                        <a href="https://x.com/kite_lang" target="_blank" rel="noopener noreferrer">X</a>
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

            <style jsx>{`
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

                @media (max-width: 768px) {
                    .footer-content {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </>
    );
}