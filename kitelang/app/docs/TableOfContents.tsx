'use client';

import React from 'react';

interface TableOfContentsProps {
    content: React.ReactNode;
    show: boolean;
}

export default function TableOfContents({ content, show }: TableOfContentsProps) {
    if (!show) return null;

    return (
        <aside className="right-sidebar">
            <div className="toc-island">
                <h3 className="toc-header">On this page</h3>
                <ul className="toc-menu">
                    {content}
                </ul>
            </div>
        </aside>
    );
}
