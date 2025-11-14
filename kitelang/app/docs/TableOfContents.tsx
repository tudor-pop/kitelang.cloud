'use client';

import React from 'react';
import styles from './TableOfContents.module.css';

interface TableOfContentsProps {
    content: React.ReactNode;
    show: boolean;
    activeTocItem: string;
}

export default function TableOfContents({ content, show, activeTocItem }: TableOfContentsProps) {
    if (!show) return null;

    // Add active class to TOC items based on activeTocItem
    React.useEffect(() => {
        // Remove active class from all TOC links
        const allLinks = document.querySelectorAll('.toc-menu a');
        allLinks.forEach(link => link.classList.remove('active'));

        // Add active class to the current TOC item
        if (activeTocItem) {
            const activeLink = document.querySelector(`.toc-menu a[href="#${activeTocItem}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }, [activeTocItem]);

    return (
        <aside className={styles.rightSidebar}>
            <div className={styles.tocIsland}>
                <h3 className={styles.tocHeader}>On this page</h3>
                <ul className={`${styles.tocMenu} toc-menu`}>
                    {content}
                </ul>
            </div>
        </aside>
    );
}
