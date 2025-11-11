'use client';

import React from 'react';
import styles from './Sidebar.module.css';

interface SidebarProps {
    isOpen: boolean;
    expandedMenus: { [key: string]: boolean };
    onToggleMenu: (menuKey: string) => void;
    onShowPage: (pageId: string) => void;
}

export default function Sidebar({ isOpen, expandedMenus, onToggleMenu, onShowPage }: SidebarProps) {
    return (
        <aside className={`${styles.leftSidebar} ${isOpen ? 'open' : ''}`}>
            <ul className="sidebar-menu">
                    {/* Getting Started Section */}
                    <li className="menu-section">
                        <div className="section-label">Getting Started</div>
                    </li>
                    <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-home'); }} id="nav-home" className="menu-link">
                            <span className="link-icon">🏠</span>
                            <span className="link-text">Home</span>
                        </a>
                    </li>

                    {/* Core Concepts Section */}
                    <li className="menu-section">
                        <div className="section-label">Core Concepts</div>
                    </li>
                    <li>
                        <div
                            className={`menu-item expandable ${expandedMenus['concepts'] ? 'expanded' : ''}`}
                            onClick={() => onToggleMenu('concepts')}
                        >
                            <span className="link-icon">💡</span>
                            <span className="link-text">Concepts</span>
                        </div>
                        <ul className={`nested ${expandedMenus['concepts'] ? 'show' : ''}`}>
                            <li>
                                <a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-overview'); }} id="nav-overview" className="menu-link">
                                    <span className="link-icon-small">→</span>
                                    <span className="link-text">Overview</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-basics'); }} id="nav-basics" className="menu-link">
                                    <span className="link-icon-small">→</span>
                                    <span className="link-text">Basics</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    {/* Language Reference Section */}
                    <li className="menu-section">
                        <div className="section-label">Language Reference</div>
                    </li>
                    <li>
                        <div
                            className={`menu-item expandable ${expandedMenus['types'] ? 'expanded' : ''}`}
                            onClick={() => onToggleMenu('types')}
                        >
                            <span className="link-icon">📝</span>
                            <span className="link-text">Types</span>
                        </div>
                        <ul className={`nested ${expandedMenus['types'] ? 'show' : ''}`}>
                            <li>
                                <div
                                    className={`menu-item expandable ${expandedMenus['basicTypes'] ? 'expanded' : ''}`}
                                    onClick={() => onToggleMenu('basicTypes')}
                                >
                                    <span className="link-icon-small">→</span>
                                    <span className="link-text">Basic Types</span>
                                </div>
                                <ul className={`nested ${expandedMenus['basicTypes'] ? 'show' : ''}`}>
                                    <li>
                                        <a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-basic-syntax'); }} id="nav-basic-syntax" className="menu-link">
                                            <span className="link-icon-small">→</span>
                                            <span className="link-text">Basic Syntax</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
        </aside>
    );
}
