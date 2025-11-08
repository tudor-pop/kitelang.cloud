'use client';

import React, { useState, useEffect, lazy, Suspense } from 'react';
import Link from 'next/link';
import InteractiveCodeBlock from './components/InteractiveCodeBlock';
import styles from './page.module.css';

// Lazy load components below the fold for better initial load performance
const Waitlist = lazy(() => import('./components/Waitlist'));
const Footer = lazy(() => import('./components/Footer'));

export default function LandingPage() {
    const [cloudPositions, setCloudPositions] = useState<Array<{ top: number; left?: number; right?: number }>>([]);

    useEffect(() => {
        // Generate random positions for clouds on mount
        const positions = Array.from({ length: 5 }, () => ({
            top: Math.random() * 80 + 10, // 10% to 90%
            ...(Math.random() > 0.5
                ? { left: Math.random() * 70 + 5 } // 5% to 75%
                : { right: Math.random() * 70 + 5 }
            )
        }));
        setCloudPositions(positions);
    }, []);

    return (
        <div className={styles.landingPage}>
            {/* Decorative Clouds Background */}
            <div className={styles.cloudsContainer}>
                {cloudPositions.map((pos, index) => (
                    <div
                        key={index}
                        className={`cloud cloud-${index + 1}`}
                        style={{
                            top: `${pos.top}%`,
                            left: pos.left !== undefined ? `${pos.left}%` : undefined,
                            right: pos.right !== undefined ? `${pos.right}%` : undefined
                        }}
                    ></div>
                ))}
            </div>

            {/* Main Content Area */}
            <main className={styles.mainContent}>
                {/* Hero Section */}
                <section className={styles.heroSection}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Infrastructure as Code.<br />Actually Simple.</h1>
                        <p className={styles.heroSubtitle}>
                            Define your cloud infrastructure with precision and clarity.
                            Deploy anywhere. Scale effortlessly. Built for the multi-cloud era.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link href="/docs" className={styles.primaryButton}>Get Started</Link>
                            <a href="#demo" className={styles.secondaryButton}>See Demo</a>
                        </div>
                    </div>
                    <div className={styles.heroCode}>
                        <InteractiveCodeBlock />
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className={styles.featuresSection}>
                    <div className={styles.featuresHeader}>
                        <h2 className={styles.sectionTitle}>Why it's better</h2>
                        <p className={styles.sectionSubtitle}>
                            Built for the modern cloud era. Designed for developer productivity.
                        </p>
                    </div>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard} style={{ animationDelay: '0ms' }}>
                            <div className={styles.featureNumber}>01</div>
                            <div className={styles.featureIcon}>🚀</div>
                            <h3 className={styles.featureTitle}>Multi-Cloud Native</h3>
                            <p className={styles.featureDescription}>
                                One language for AWS, GCP, Azure, and more. True portability without the pain.
                            </p>
                        </div>
                        <div className={styles.featureCard} style={{ animationDelay: '100ms' }}>
                            <div className={styles.featureNumber}>02</div>
                            <div className={styles.featureIcon}>🔒</div>
                            <h3 className={styles.featureTitle}>Type Safe</h3>
                            <p className={styles.featureDescription}>
                                Catch configuration errors before deployment. Strong typing meets infrastructure.
                            </p>
                        </div>
                        <div className={styles.featureCard} style={{ animationDelay: '200ms' }}>
                            <div className={styles.featureNumber}>03</div>
                            <div className={styles.featureIcon}>⚡</div>
                            <h3 className={styles.featureTitle}>Blazing Fast</h3>
                            <p className={styles.featureDescription}>
                                Optimized compilation and execution. Deploy in seconds, not minutes.
                            </p>
                        </div>
                        <div className={styles.featureCard} style={{ animationDelay: '300ms' }}>
                            <div className={styles.featureNumber}>04</div>
                            <div className={styles.featureIcon}>🎯</div>
                            <h3 className={styles.featureTitle}>Developer First</h3>
                            <p className={styles.featureDescription}>
                                Clean syntax inspired by modern languages. Familiar patterns, powerful features.
                            </p>
                        </div>
                        <div className={styles.featureCard} style={{ animationDelay: '400ms' }}>
                            <div className={styles.featureNumber}>05</div>
                            <div className={styles.featureIcon}>🔄</div>
                            <h3 className={styles.featureTitle}>State Management</h3>
                            <p className={styles.featureDescription}>
                                Database-backed state. Automatic versioning. Team collaboration built-in.
                            </p>
                        </div>
                        <div className={styles.featureCard} style={{ animationDelay: '500ms' }}>
                            <div className={styles.featureNumber}>06</div>
                            <div className={styles.featureIcon}>🛠️</div>
                            <h3 className={styles.featureTitle}>Extensible</h3>
                            <p className={styles.featureDescription}>
                                Mixins, plugins, and custom providers. Adapt to your team's workflow.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Comparison CTA Section */}
                <section className={styles.comparisonCta}>
                    <div className={styles.comparisonContent}>
                        <h2 className={styles.comparisonTitle}>How does Kite compare?</h2>
                        <p className={styles.comparisonText}>
                            See how Kite stacks up against Terraform, Pulumi, and Bicep across 20+ features.
                        </p>
                        <Link href="/comparison" className={styles.comparisonButton}>
                            View Comparison
                        </Link>
                    </div>
                </section>

                {/* Waitlist Section */}
                <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
                    <Waitlist />
                </Suspense>

                {/* Footer */}
                <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
                    <Footer />
                </Suspense>
            </main>

        </div>
    );
}