'use client';

import React, { useState, useEffect, useRef } from 'react';
import './docs.css';
import TableOfContents from './components/TableOfContents';
import Sidebar from './components/Sidebar';
import MainContent from './MainContent';
import Footer from '../components/Footer';

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
    });

    // Refs
    const mainContentRef = useRef<HTMLElement>(null);

    // Prevent body scrolling (docs page only)
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.height = '100vh';

        return () => {
            document.body.style.overflow = '';
            document.body.style.height = '';
            document.documentElement.style.overflow = '';
            document.documentElement.style.height = '';
        };
    }, []);

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

    // Auto-generate TOC based on page headings
    useEffect(() => {
        // Wait for DOM to update after page change
        const generateToc = () => {
            const activePageElement = document.querySelector('.page-section.active');
            if (!activePageElement) return;

            // Find all h1, h2, h3 elements in the active page
            const headings = activePageElement.querySelectorAll('h1, h2, h3');

            if (headings.length === 0) {
                setShowToc(false);
                return;
            }

            // Hide TOC on home page
            if (activePage === 'page-home') {
                setShowToc(false);
                return;
            }

            setShowToc(true);

            const tocItems: React.ReactNode[] = [];

            headings.forEach((heading, index) => {
                const tagName = heading.tagName.toLowerCase();
                const text = heading.textContent || '';
                const id = heading.getAttribute('id');

                if (tagName === 'h1') {
                    // First item: page title, scrolls to top
                    tocItems.push(
                        <li key={`toc-${index}`}>
                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                                data-level="1"
                            >
                                {text}
                            </a>
                        </li>
                    );
                } else if (tagName === 'h2' && id) {
                    // h2 with id - level 2
                    tocItems.push(
                        <li key={`toc-${index}`}>
                            <a href={`#${id}`} data-level="2">
                                {text}
                            </a>
                        </li>
                    );
                } else if (tagName === 'h3' && id) {
                    // h3 with id - level 3
                    tocItems.push(
                        <li key={`toc-${index}`}>
                            <a href={`#${id}`} data-level="3">
                                {text}
                            </a>
                        </li>
                    );
                }
            });

            setTocContent(<>{tocItems}</>);
        };

        // Use setTimeout to ensure DOM is updated
        const timer = setTimeout(generateToc, 0);
        return () => clearTimeout(timer);
    }, [activePage]);

    // Show page function
    const showPage = (pageId: string) => {
        setActivePage(pageId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
                    activePage={activePage}
                />

                {/* Content Area: Main + Footer (TOC floats) */}
                <div className={`main-with-footer ${showToc ? 'with-toc' : 'no-toc'}`}>
                    <MainContent
                        activePage={activePage}
                        onShowPage={showPage}
                        onCopyCode={copyCode}
                        copyStatus={copyStatus}
                        contentRef={mainContentRef}
                        showToc={showToc}
                        pageDates={pageDates}
                    />
                    <Footer isIsland={true} />
                </div>

                {/* Right Sidebar - Table of Contents (floating) */}
                {showToc && <TableOfContents content={tocContent} show={showToc} activeTocItem={activeTocItem} />}

                {/* Floating Action Buttons */}
                <div className="fab-container">
                    <button className="fab" title="Scroll to top" onClick={scrollToTop}>↑</button>
                </div>
            </div>
        </div>
    );
}