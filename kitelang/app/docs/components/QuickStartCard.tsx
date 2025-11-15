import React from 'react';
import styles from './QuickStartCard.module.css';

interface QuickStartCardProps {
    icon: string;
    title: string;
    description: string;
    pageId: string;
    onShowPage: (pageId: string) => void;
}

export default function QuickStartCard({ icon, title, description, pageId, onShowPage }: QuickStartCardProps) {
    return (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                onShowPage(pageId);
            }}
            className={styles.card}
        >
            <h3>{icon} {title}</h3>
            <p>{description}</p>
        </a>
    );
}
