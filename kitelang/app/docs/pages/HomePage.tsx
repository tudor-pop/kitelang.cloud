import React from 'react';
import EditInfo from '../components/EditInfo';

interface HomePageProps {
    pageDates: Record<string, string>;
}

export default function HomePage({ pageDates }: HomePageProps) {
    return (
        <div className="content-island">
            <h1>Welcome to Kite</h1>

            <EditInfo date={pageDates['page-home']} />

            <p>
                Kite is a modern IaC language designed for the multi-cloud era. Write your infrastructure once using
                clean, declarative syntax — then provision seamlessly across AWS, Google Cloud, Azure, and more.
            </p>

            <p>
                Built from the ground up with simplicity and power in mind, Kite brings a fresh approach to
                infrastructure management. Every feature is thoughtfully designed to make your workflow faster,
                safer, and more intuitive.
            </p>

            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: '24px 0' }}>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                    <strong>Intuitive syntax.</strong> Familiar patterns combined with modern expressiveness.
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                    <strong>True portability.</strong> Define once, provision anywhere.
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                    <strong>Built to extend.</strong> Mixins and plugins adapt seamlessly to your team&apos;s workflow.
                </li>
                <li style={{ marginBottom: '12px', paddingLeft: '24px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                    <strong>Secure and reliable.</strong> State management in a proper database ensures complete
                    traceability.
                </li>
            </ul>

            <p>
                Kite empowers teams to manage infrastructure with confidence and clarity, eliminating complexity
                without sacrificing control.
            </p>

            {/* Feature Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '48px' }}>
                {/* Get Started Card */}
                <div className="feature-card"
                     style={{ background: '#FAF5FF', border: 'none', borderRadius: '16px', padding: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ fontSize: '32px' }}>🗺️</div>
                        <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600 }}>Get started</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <a href="#overview"
                           style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>
                            <span style={{ color: '#F59E0B' }}>✨</span> Overview
                        </a>
                        <a href="#install"
                           style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>
                            <span style={{ color: '#F59E0B' }}>🔧</span> Install
                        </a>
                        <a href="#resources"
                           style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>
                            <span style={{ color: '#F59E0B' }}>☀️</span> Resources
                        </a>
                    </div>
                </div>

                {/* Develop Providers Card */}
                <div className="feature-card"
                     style={{ background: '#FAF5FF', border: 'none', borderRadius: '16px', padding: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ fontSize: '32px' }}>👷</div>
                        <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600 }}>Developers</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <a href="#develop-plugins"
                           style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>
                            <span style={{ color: '#5BB4FF' }}>🎯</span> Create provider plugins
                        </a>
                    </div>
                </div>

                {/* Reference Card */}
                <div className="feature-card"
                     style={{ background: '#FAF5FF', border: 'none', borderRadius: '16px', padding: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ fontSize: '32px' }}>📚</div>
                        <h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600 }}>Reference</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <a href="#reference"
                           style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }}>
                            <span style={{ color: '#10B981' }}>📚</span> Reference
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}