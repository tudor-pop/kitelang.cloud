'use client';

import React from 'react';

interface SidebarProps {
    isOpen: boolean;
    expandedMenus: { [key: string]: boolean };
    onToggleMenu: (menuKey: string) => void;
    onShowPage: (pageId: string) => void;
}

export default function Sidebar({ isOpen, expandedMenus, onToggleMenu, onShowPage }: SidebarProps) {
    return (
        <aside className={`left-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <div className="sidebar-logo">
                    <div className="logo-text">Kite</div>
                    <span className="version-badge">v0.0.2</span>
                </div>
            </div>
            <ul className="sidebar-menu">
                <li><a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-home'); }} id="nav-home">Home</a></li>

                <li>
                    <div
                        className={`menu-item expandable ${expandedMenus['concepts'] ? 'expanded' : ''}`}
                        onClick={() => onToggleMenu('concepts')}
                    >
                        Concepts
                    </div>
                    <ul className={`nested ${expandedMenus['concepts'] ? 'show' : ''}`}>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-overview'); }} id="nav-overview">Overview</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-basics'); }} id="nav-basics">Basics</a></li>
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
                                <li><a href="#" onClick={(e) => { e.preventDefault(); onShowPage('page-basic-syntax'); }} id="nav-basic-syntax">Basic Syntax</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    );
}
