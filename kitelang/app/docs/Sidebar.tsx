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
        <>
            <aside className={`left-sidebar ${isOpen ? 'open' : ''}`}>
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

            <style jsx>{`
                .left-sidebar {
                    width: 280px;
                    background: var(--bg-primary);
                    border-right: 2px solid var(--border-color);
                    overflow-y: auto;
                    position: fixed;
                    left: 0;
                    top: 70px;
                    bottom: 0;
                    padding: 24px 0;
                    transition: none;
                }

                :global([data-theme="dark"]) .left-sidebar {
                    background: var(--bg-primary);
                    border-color: var(--border-color);
                }

                .left-sidebar::-webkit-scrollbar {
                    width: 6px;
                }

                .left-sidebar::-webkit-scrollbar-track {
                    background: var(--bg-secondary);
                }

                .left-sidebar::-webkit-scrollbar-thumb {
                    background: var(--primary-color);
                    border-radius: 0;
                }

                .left-sidebar::-webkit-scrollbar-thumb:hover {
                    background: var(--primary-dark);
                }

                .sidebar-header {
                    padding: 0 20px 20px 20px;
                    border-bottom: 2px solid var(--border-color);
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: center;
                }

                .sidebar-logo {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    margin-bottom: 0;
                }

                .logo-text {
                    font-size: 32px;
                    font-weight: 900;
                    color: var(--text-primary);
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .version-badge {
                    display: inline-block;
                    background: var(--primary-color);
                    color: var(--bg-primary);
                    font-size: 12px;
                    padding: 6px 12px;
                    border-radius: 0;
                    font-weight: 900;
                    letter-spacing: 1px;
                    border: 2px solid var(--border-color);
                    box-shadow: none;
                    pointer-events: none;
                    font-family: 'Roboto Mono', 'Consolas', monospace;
                }

                .sidebar-menu {
                    list-style: none;
                }

                :global(.sidebar-menu li) {
                    margin: 0;
                }

                :global(.sidebar-menu a),
                :global(.sidebar-menu .menu-item) {
                    display: block;
                    padding: 10px 16px;
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 500;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    border-radius: 8px;
                    margin: 2px 12px;
                    box-shadow: none;
                    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    cursor: pointer;
                }

                :global(.sidebar-menu a:hover) {
                    background: rgba(127, 82, 255, 0.08);
                    color: var(--primary-color);
                }

                :global(.sidebar-menu .menu-item:hover) {
                    background: rgba(127, 82, 255, 0.08);
                    color: var(--primary-color);
                    box-shadow: none;
                }

                :global(.sidebar-menu a.active) {
                    background: rgba(127, 82, 255, 0.12);
                    color: var(--primary-color);
                    font-weight: 600;
                }

                :global(.sidebar-menu .expandable) {
                    cursor: pointer;
                    user-select: none;
                    box-shadow: none !important;
                }

                :global(.sidebar-menu .expandable::after) {
                    content: '›';
                    position: absolute;
                    right: 16px;
                    font-size: 16px;
                    font-weight: 600;
                    transition: transform 0.2s ease;
                    color: var(--primary-color);
                }

                :global(.sidebar-menu .expandable.expanded::after) {
                    transform: rotate(90deg);
                }

                :global(.sidebar-menu .nested) {
                    display: none;
                    padding-left: 0;
                }

                :global(.sidebar-menu .nested.show) {
                    display: block;
                    animation: slideDown 0.3s ease-out;
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                :global(.sidebar-menu .nested li a) {
                    padding-left: 32px;
                    font-size: 13px;
                    box-shadow: none !important;
                }

                :global(.sidebar-menu .nested li a:hover) {
                    box-shadow: none !important;
                }

                :global(.sidebar-menu .nested .nested li a) {
                    padding-left: 48px;
                    font-size: 13px;
                    font-weight: 400;
                    box-shadow: none !important;
                }

                :global(.sidebar-menu .nested .nested li a:hover) {
                    box-shadow: none !important;
                }

                @media (max-width: 1100px) {
                    .left-sidebar {
                        transform: translateX(-100%);
                        transition: transform 0.3s;
                        z-index: 100;
                    }

                    :global(.left-sidebar.open) {
                        transform: translateX(0);
                    }
                }

                @media (max-width: 900px) {
                    .left-sidebar {
                        transform: translateX(-100%);
                        transition: transform 0.3s;
                        z-index: 100;
                    }

                    :global(.left-sidebar.open) {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
}
