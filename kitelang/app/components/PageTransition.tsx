'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './PageTransition.module.css';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [key, setKey] = useState(0);

    useEffect(() => {
        // Trigger re-render with animation on path change
        setKey(prev => prev + 1);
    }, [pathname]);

    return (
        <div key={key} className={styles.pageTransition}>
            {children}
        </div>
    );
}
