import React from 'react';
import QuickStartCards from '../components/QuickStartCards';

interface HomePageProps {
    onShowPage: (pageId: string) => void;
    pageDates: Record<string, string>;
}

export default function HomePage({ onShowPage, pageDates }: HomePageProps) {
    return (
        <div className="content-island">
            <h1>Welcome to Kite</h1>

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

            <div className="section-divider"></div>

            <h2 style={{ marginTop: '64px', marginBottom: '24px' }}>Getting Started</h2>

            <p>Ready to get started with Kite? Here are the essential resources to begin your journey:</p>

            <QuickStartCards onShowPage={onShowPage} />
        </div>
    );
}