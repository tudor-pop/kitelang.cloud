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
                    <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-home'); }} id="nav-home" className="menu-link">
                            Home
                        </a>
                    </li>
                    <li>
                        <div
                            className={`menu-item expandable ${expandedMenus['concepts'] ? 'expanded' : ''}`}
                            onClick={() => onToggleMenu('concepts')}
                        >
                            Concepts
                        </div>
                        <ul className={`nested ${expandedMenus['concepts'] ? 'show' : ''}`}>
                            <li>
                                <a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-overview'); }} id="nav-overview" className="menu-link">
                                    Overview
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-install'); }} id="nav-install" className="menu-link">
                                    Install
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-basics'); }} id="nav-basics" className="menu-link">
                                    Basics
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div
                            className={`menu-item expandable ${expandedMenus['types'] ? 'expanded' : ''}`}
                            onClick={() => onToggleMenu('types')}
                        >
                            Types
                        </div>
                        <ul className={`nested ${expandedMenus['types'] ? 'show' : ''}`}>
                            <li>
                                <div
                                    className={`menu-item expandable ${expandedMenus['basicTypes'] ? 'expanded' : ''}`}
                                    onClick={() => onToggleMenu('basicTypes')}
                                >
                                    Basic Types
                                </div>
                                <ul className={`nested ${expandedMenus['basicTypes'] ? 'show' : ''}`}>
                                    <li>
                                        <a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-basic-syntax'); }} id="nav-basic-syntax" className="menu-link">
                                            Basic Syntax
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
