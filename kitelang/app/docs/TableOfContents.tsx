'use client';

import React from 'react';

interface TableOfContentsProps {
    content: React.ReactNode;
    show: boolean;
}

export default function TableOfContents({ content, show }: TableOfContentsProps) {
    if (!show) return null;

    return (
        <>
            <aside className="right-sidebar">
                <div className="toc-island">
                    <h3 className="toc-header">On this page</h3>
                    <ul className="toc-menu">
                        {content}
                    </ul>
                </div>
            </aside>

            <style jsx>{`
                .right-sidebar {
                    width: 280px;
                    background: transparent;
                    border-left: none;
                    position: fixed;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    overflow-y: auto;
                    padding: 16px 24px 24px 8px;
                    transition: background-color 0.3s ease;
                    z-index: 1;
                }

                .toc-island {
                    background: #FFFFFF;
                    background-color: #FFFFFF;
                    border-radius: 16px;
                    padding: 24px;
                    border: 2px solid var(--border-color);
                    box-shadow: none;
                    position: sticky;
                    top: 8px;
                    transition: box-shadow 0.3s ease;
                }

                .toc-island:hover {
                    box-shadow: 6px 6px 0 var(--shadow);
                }

                :global([data-theme="dark"]) .toc-island {
                    background: #1A1A1A;
                    background-color: #1A1A1A;
                    border-color: #2A2A2A;
                }

                .toc-header {
                    font-size: 11px;
                    color: var(--text-light);
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    font-weight: 700;
                    margin-bottom: 20px;
                    padding-left: 15px;
                }

                .toc-menu {
                    list-style: none;
                }

                .toc-menu :global(li) {
                    margin-bottom: 8px;
                }

                .toc-menu :global(a) {
                    color: var(--text-secondary);
                    text-decoration: none;
                    font-size: 14px;
                    font-weight: 500;
                    display: block;
                    padding: 10px 16px;
                    border-radius: 8px;
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .toc-menu :global(a[data-level="1"]) {
                    font-weight: 600;
                    font-size: 14px;
                    color: var(--text-primary);
                }

                .toc-menu :global(a[data-level="2"]) {
                    padding-left: 24px;
                    font-size: 13px;
                }

                .toc-menu :global(a[data-level="3"]) {
                    padding-left: 32px;
                    font-size: 12px;
                    font-weight: 400;
                }

                .toc-menu :global(a:hover) {
                    color: var(--primary-color);
                    background: rgba(127, 82, 255, 0.08);
                }

                .toc-menu :global(a.active) {
                    color: var(--primary-color);
                    background: rgba(127, 82, 255, 0.12);
                    font-weight: 600;
                    box-shadow: 0 2px 10px rgba(127, 82, 255, 0.1);
                }
            `}</style>
        </>
    );
}
