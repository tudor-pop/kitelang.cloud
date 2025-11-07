'use client';

import React from 'react';
import Link from 'next/link';
import styles from './TopBar.module.css';

interface TopBarProps {
    theme: string;
    toggleTheme: () => void;
    activePage?: 'home' | 'docs' | 'pricing';
}

export default function TopBar({ theme, toggleTheme, activePage = 'home' }: TopBarProps) {
    return (
        <nav className={styles.topBar}>
            <div className={styles.logo}>
                <Link href="/" className={styles.logoLink}>
                    <span className={styles.logoText}>Kite</span>
                    <span className={styles.versionBadge}>v0.0.2</span>
                </Link>
            </div>
            <div className={styles.navButtons}>
                <Link href="/docs" className={`${styles.navButton} ${activePage === 'docs' ? styles.active : ''}`}>Documentation</Link>
                <Link href="/#features" className={styles.navButton}>Features</Link>
                <Link href="/pricing" className={`${styles.navButton} ${activePage === 'pricing' ? styles.active : ''}`}>Pricing</Link>
                <a href="https://github.com/tudor-pop/kitelang" target="_blank" rel="noopener noreferrer" className={styles.navButton}>GitHub</a>
                <button onClick={toggleTheme} className={`${styles.navButton} ${styles.themeToggle}`}>
                    {theme === 'dark' ? '☀️' : '🌙'}
                </button>
            </div>
        </nav>
    );
}
