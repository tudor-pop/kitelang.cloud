'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import TopBar from './TopBar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const pathname = usePathname();

    // Detect system theme on mount
    useEffect(() => {
        const detectSystemTheme = () => {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
            return 'light';
        };

        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const initialTheme = savedTheme || detectSystemTheme();
        setTheme(initialTheme);
        document.documentElement.setAttribute('data-theme', initialTheme);

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            const savedTheme = localStorage.getItem('theme');
            if (!savedTheme) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
                document.documentElement.setAttribute('data-theme', newTheme);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Determine active page based on pathname
    const getActivePage = (): 'home' | 'docs' | 'pricing' => {
        if (pathname === '/docs') return 'docs';
        if (pathname === '/pricing') return 'pricing';
        return 'home';
    };

    return (
        <>
            <TopBar theme={theme} toggleTheme={toggleTheme} activePage={getActivePage()} />
            <div style={{ marginTop: '70px' }}>
                {children}
            </div>
        </>
    );
}
