'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './TopBar.module.css';

interface TopBarProps {
    theme: string;
    toggleTheme: () => void;
    activePage?: 'home' | 'docs' | 'pricing';
}

export default function TopBar({ theme, toggleTheme, activePage = 'home' }: TopBarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Close mobile menu when screen size changes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={styles.topBar} aria-label="Main navigation">
                <div className={styles.logo}>
                    <Link href="/" className={styles.logoLink} aria-label="Kite home page">
                        <span className={styles.logoText}>Kite</span>
                        <span className={styles.versionBadge}>v0.0.2</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
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

                {/* Mobile Hamburger Button */}
                <button
                    className={styles.hamburger}
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isMobileMenuOpen}
                >
                    <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen1 : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen2 : ''}`}></span>
                    <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.hamburgerLineOpen3 : ''}`}></span>
                </button>
            </nav>

            {/* Mobile Menu Drawer */}
            <div
                className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.mobileMenuOverlayOpen : ''}`}
                onClick={closeMobileMenu}
                aria-hidden={!isMobileMenuOpen}
            ></div>
            <div
                className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
            >
                <div className={styles.mobileMenuHeader}>
                    <button
                        onClick={closeMobileMenu}
                        className={styles.backButton}
                        aria-label="Close menu"
                    >
                        ← Back
                    </button>
                </div>
                <div className={styles.mobileMenuContent}>
                    <Link
                        href="/docs"
                        className={`${styles.mobileMenuItem} ${activePage === 'docs' ? styles.mobileMenuItemActive : ''}`}
                        onClick={closeMobileMenu}
                    >
                        Documentation
                    </Link>
                    <Link
                        href="/#features"
                        className={styles.mobileMenuItem}
                        onClick={closeMobileMenu}
                    >
                        Features
                    </Link>
                    <Link
                        href="/pricing"
                        className={`${styles.mobileMenuItem} ${activePage === 'pricing' ? styles.mobileMenuItemActive : ''}`}
                        onClick={closeMobileMenu}
                    >
                        Pricing
                    </Link>
                    <a
                        href="https://github.com/tudor-pop/kitelang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.mobileMenuItem}
                        onClick={closeMobileMenu}
                    >
                        GitHub ↗
                    </a>
                    <button
                        onClick={() => {
                            toggleTheme();
                            closeMobileMenu();
                        }}
                        className={`${styles.mobileMenuItem} ${styles.mobileMenuThemeToggle}`}
                    >
                        <span>{theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}</span>
                    </button>
                </div>
            </div>
        </>
    );
}
