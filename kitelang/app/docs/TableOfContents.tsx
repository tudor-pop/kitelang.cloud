'use client';

import React from 'react';
import styles from './TableOfContents.module.css';

interface TableOfContentsProps {
    content: React.ReactNode;
    show: boolean;
}

export default function TableOfContents({ content, show }: TableOfContentsProps) {
    if (!show) return null;

    return (
        <aside className={styles.rightSidebar}>
            <div className={styles.tocIsland}>
                <h3 className={styles.tocHeader}>On this page</h3>
                <ul className={styles.tocMenu}>
                    {content}
                </ul>
            </div>
        </aside>
    );
}
