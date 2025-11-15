'use client';

import React from 'react';
import styles from './Sidebar.module.css';

interface SidebarProps {
    isOpen: boolean;
    expandedMenus: { [key: string]: boolean };
    onToggleMenu: (menuKey: string) => void;
    onShowPage: (pageId: string) => void;
    activePage: string;
}

export default function Sidebar({ isOpen, expandedMenus, onToggleMenu, onShowPage, activePage }: SidebarProps) {
    return (
        <aside className={`${styles.leftSidebar} ${isOpen ? 'open' : ''}`}>
            <ul className="sidebar-menu">
                    <li>
                        <a
                            href="#"
                            onClick={(e) => { e.preventDefault(); onShowPage('page-home'); }}
                            id="nav-home"
                            className={`menu-link ${activePage === 'page-home' ? 'active' : ''}`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <h6 style={{
                            fontSize: '14px',
                            fontWeight: 600,
                            margin: '16px 0 8px 16px',
                            color: 'var(--text-secondary)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            fontFamily: 'IBM Plex Sans, sans-serif'
                        }}>
                            Overview
                        </h6>
                        <ul className="nested show">
                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); onShowPage('page-overview'); }}
                                    id="nav-overview"
                                    className={`menu-link ${activePage === 'page-overview' ? 'active' : ''}`}
                                >
                                    Introduction
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); onShowPage('page-install'); }}
                                    id="nav-install"
                                    className={`menu-link ${activePage === 'page-install' ? 'active' : ''}`}
                                >
                                    Install
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => { e.preventDefault(); onShowPage('page-basics'); }}
                                    id="nav-basics"
                                    className={`menu-link ${activePage === 'page-basics' ? 'active' : ''}`}
                                >
                                    Basics
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
        </aside>
    );
}
