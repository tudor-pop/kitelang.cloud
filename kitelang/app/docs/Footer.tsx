'use client';

import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
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
    );
}
