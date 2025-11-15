'use client';

import React from 'react';
import styles from './MainContent.module.css';
import HomePage from './pages/HomePage';
import IntroductionPage from './pages/IntroductionPage';
import BasicsPage from './pages/BasicsPage';
import BasicSyntaxPage from './pages/BasicSyntaxPage';

interface MainContentProps {
    activePage: string;
    onShowPage: (pageId: string) => void;
    onCopyCode: (code: string, blockId: string) => void;
    copyStatus: { [key: string]: boolean };
    contentRef: React.RefObject<HTMLElement | null>;
    showToc: boolean;
    pageDates: Record<string, string>;
}

export default function MainContent({
    activePage,
    onShowPage,
    onCopyCode,
    copyStatus,
    contentRef,
    showToc,
    pageDates
}: MainContentProps) {
    return (
        <main
            className={styles.mainContent}
            ref={contentRef}
        >
            {/* Home Page */}
            <div className={`page-section ${activePage === 'page-home' ? 'active' : ''}`}>
                <HomePage onShowPage={onShowPage} pageDates={pageDates} />
            </div>

            {/* Overview Page */}
            <div className={`page-section ${activePage === 'page-overview' ? 'active' : ''}`}>
                <IntroductionPage
                    onShowPage={onShowPage}
                    pageDates={pageDates}
                />
            </div>

            {/* Basics Page */}
            <div className={`page-section ${activePage === 'page-basics' ? 'active' : ''}`}>
                <BasicsPage
                    onShowPage={onShowPage}
                    onCopyCode={onCopyCode}
                    copyStatus={copyStatus}
                    pageDates={pageDates}
                />
            </div>

            {/* Basic Syntax Page */}
            <div className={`page-section ${activePage === 'page-basic-syntax' ? 'active' : ''}`}>
                <BasicSyntaxPage
                    onShowPage={onShowPage}
                    onCopyCode={onCopyCode}
                    copyStatus={copyStatus}
                    pageDates={pageDates}
                />
            </div>
        </main>
    );
}