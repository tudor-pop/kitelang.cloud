import React from 'react';
import styles from './Breadcrumb.module.css';

export interface BreadcrumbItem {
    label: string;
    onClick?: () => void;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <div className={styles.breadcrumb}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    {item.onClick ? (
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                item.onClick?.();
                            }}
                        >
                            {item.label}
                        </a>
                    ) : (
                        <span>{item.label}</span>
                    )}
                    {index < items.length - 1 && (
                        <span className={styles.breadcrumbSeparator}>›</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}