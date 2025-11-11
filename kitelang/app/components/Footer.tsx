'use client';

import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
    isIsland?: boolean;
}

export default function Footer({ isIsland = false }: FooterProps) {
    return (
        <footer className={`${styles.footer} ${isIsland ? 'footer-island' : 'footer'}`}>
            <div className={styles.footerContent}>
                <div className={styles.footerColumn}>
                    <h4 className={styles.footerTitle}>Product</h4>
                    <a href="/docs">Documentation</a>
                    <a href="/#features">Features</a>
                    <a href="/pricing">Pricing</a>
                    <a href="/changelog">Changelog</a>
                </div>
                <div className={styles.footerColumn}>
                    <h4 className={styles.footerTitle}>Community</h4>
                    <a href="https://github.com/tudor-pop/kitelang" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="#">Discord</a>
                    <a href="https://x.com/kite_lang" target="_blank" rel="noopener noreferrer">X</a>
                    <a href="#">Blog</a>
                </div>
                <div className={styles.footerColumn}>
                    <h4 className={styles.footerTitle}>Company</h4>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="/LICENSE.html">License</a>
                    <a href="#">Terms</a>
                </div>
                <div className={styles.footerColumn}>
                    <h4 className={styles.footerTitle}>Kite</h4>
                    <p className={styles.footerText}>Modern Infrastructure as Code for the multi-cloud era.</p>
                    <p className={styles.footerCopyright}>© 2025 EchoStream SRL</p>
                </div>
            </div>
        </footer>
    );
}