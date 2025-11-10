'use client';

import React, { useState, useEffect, useRef } from 'react';
import './docs.css';
import TableOfContents from './TableOfContents';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

export default function DocsPage() {
    const [activePage, setActivePage] = useState('page-home');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [hamburgerActive, setHamburgerActive] = useState(false);
    const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({
        'concepts': true,
        'types': true,
        'basicTypes': true,
    });
    const [readingProgress, setReadingProgress] = useState(0);
    const [activeTocItem, setActiveTocItem] = useState('');
    const [tocContent, setTocContent] = useState<React.ReactNode>(null);
    const [showToc, setShowToc] = useState(false);
    const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});
    const [pageDates, setPageDates] = useState<Record<string, string>>({
        'page-home': 'January 2025',
        'page-overview': 'January 2025',
        'page-basics': 'January 2025',
        'page-basic-syntax': 'January 2025',
    });

    // Refs
    const mainContentRef = useRef<HTMLElement>(null);

    // Fetch page modification dates on mount
    useEffect(() => {
        fetch('/api/page-dates')
            .then(res => res.json())
            .then(dates => setPageDates(dates))
            .catch(err => console.error('Failed to fetch page dates:', err));
    }, []);

    // Reading progress indicator
    useEffect(() => {
        const updateReadingProgress = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setReadingProgress(scrolled);
        };

        window.addEventListener('scroll', updateReadingProgress);
        updateReadingProgress();

        return () => window.removeEventListener('scroll', updateReadingProgress);
    }, []);

    // TOC active item highlighting
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    if (id) {
                        setActiveTocItem(id);
                    }
                }
            });
        }, observerOptions);

        // Observe all h2 sections
        const headings = document.querySelectorAll('h2[id]');
        headings.forEach(heading => observer.observe(heading));

        return () => {
            headings.forEach(heading => observer.unobserve(heading));
        };
    }, [activePage]);

    // Handle sidebar toggle
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
        setHamburgerActive(!hamburgerActive);
    };

    // Handle menu expansion
    const toggleMenu = (menuKey: string) => {
        setExpandedMenus(prev => ({
            ...prev,
            [menuKey]: !prev[menuKey]
        }));
    };

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Copy code function
    const copyCode = (code: string, blockId: string) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopyStatus(prev => ({ ...prev, [blockId]: true }));
            setTimeout(() => {
                setCopyStatus(prev => ({ ...prev, [blockId]: false }));
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    };

    // Show page function
    const showPage = (pageId: string) => {
        setActivePage(pageId);
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Update TOC based on page
        if (pageId === 'page-home') {
            setShowToc(false);
        } else if (pageId === 'page-overview') {
            setShowToc(true);
            setTocContent(
                <>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} data-level="1">Overview</a></li>
                    <li><a href="#what-is-kite" data-level="2">What is Kite?</a></li>
                    <li><a href="#why-kite" data-level="2">Why Kite?</a></li>
                </>
            );
        } else if (pageId === 'page-basics') {
            setShowToc(true);
            setTocContent(
                <>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} data-level="1">Basics</a></li>
                    <li><a href="#package-definition" data-level="2">Package definition and imports</a></li>
                    <li><a href="#program-entry" data-level="2">Program entry point</a></li>
                </>
            );
        } else if (pageId === 'page-basic-syntax') {
            setShowToc(true);
            setTocContent(
                <>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} data-level="1">Basic syntax</a></li>
                    <li><a href="#package-definition" data-level="2">Package definition and imports</a></li>
                    <li><a href="#program-entry" data-level="2">Program entry point</a></li>
                </>
            );
        }
    };

    return (
        <div className="body">
            {/* Reading Progress Indicator */}
            <div className="reading-progress" style={{ width: `${readingProgress}%` }}></div>

            {/* Hamburger Menu */}
            <button
                className={`hamburger ${hamburgerActive ? 'active' : ''}`}
                onClick={toggleSidebar}
            >
                <div className="hamburger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span>Menu</span>
            </button>

            <div className="container">
                {/* Left Sidebar Navigation */}
                <Sidebar
                    isOpen={sidebarOpen}
                    expandedMenus={expandedMenus}
                    onToggleMenu={toggleMenu}
                    onShowPage={showPage}
                />

                {/* Main Content */}
                <MainContent
                    activePage={activePage}
                    onShowPage={showPage}
                    onCopyCode={copyCode}
                    copyStatus={copyStatus}
                    contentRef={mainContentRef}
                    showToc={showToc}
                    pageDates={pageDates}
                />

                {/* Right Sidebar - Table of Contents */}
                {showToc && <TableOfContents content={tocContent} show={showToc} />}

                {/* Floating Action Buttons */}
                <div
                    className="fab-container"
                    style={{
                        position: 'fixed',
                        right: showToc ? '330px' : '90px',
                        bottom: '30px'
                    }}
                >
                    <button className="fab" title="Scroll to top" onClick={scrollToTop}>↑</button>
                </div>
            </div>
        </div>
    );
}