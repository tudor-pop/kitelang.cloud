'use client';

import React from 'react';
import Link from 'next/link';

interface TopBarProps {
    theme: string;
    toggleTheme: () => void;
    activePage?: 'home' | 'docs' | 'pricing';
}

export default function TopBar({ theme, toggleTheme, activePage = 'home' }: TopBarProps) {
    return (
        <>
            <nav className="top-bar">
                <div className="logo">
                    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span className="logo-text">Kite</span>
                        <span className="version-badge">v0.0.2</span>
                    </Link>
                </div>
                <div className="nav-buttons">
                    <Link href="/docs" className={`nav-button ${activePage === 'docs' ? 'active' : ''}`}>Documentation</Link>
                    <Link href="/#features" className="nav-button">Features</Link>
                    <Link href="/pricing" className={`nav-button ${activePage === 'pricing' ? 'active' : ''}`}>Pricing</Link>
                    <a href="https://github.com/tudor-pop/kitelang" target="_blank" rel="noopener noreferrer" className="nav-button">GitHub</a>
                    <button onClick={toggleTheme} className="nav-button theme-toggle">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </div>
            </nav>

            <style jsx global>{`
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
                }
            `}</style>
        </>
    );
}
