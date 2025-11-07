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
        <nav className={styles.topBar} aria-label="Main navigation">
            <div className={styles.logo}>
                <Link href="/" className={styles.logoLink} aria-label="Kite home page">
                    <span className={styles.logoText}>Kite</span>
                    <span className={styles.versionBadge}>v0.0.2</span>
                </Link>
            </div>
            <div className={styles.navButtons}>
                <Link
                    href="/docs"
                    className={`${styles.navButton} ${activePage === 'docs' ? styles.active : ''}`}
                    aria-current={activePage === 'docs' ? 'page' : undefined}
                >
                    Documentation
                </Link>
                <Link href="/#features" className={styles.navButton}>Features</Link>
                <Link
                    href="/pricing"
                    className={`${styles.navButton} ${activePage === 'pricing' ? styles.active : ''}`}
                    aria-current={activePage === 'pricing' ? 'page' : undefined}
                >
                    Pricing
                </Link>
                <a
                    href="https://github.com/tudor-pop/kitelang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.navButton}
                    aria-label="View Kite on GitHub (opens in new tab)"
                >
                    GitHub
                </a>
                <button
                    onClick={toggleTheme}
                    className={`${styles.navButton} ${styles.themeToggle}`}
                    aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                >
                    <span aria-hidden="true">{theme === 'dark' ? '☀️' : '🌙'}</span>
                </button>
            </div>
        </nav>
    );
}
