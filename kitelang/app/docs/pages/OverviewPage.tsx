import React from 'react';
import EditInfo from '../components/EditInfo';
import Breadcrumb from '../components/Breadcrumb';

interface OverviewPageProps {
    onShowPage: (pageId: string) => void;
    pageDates: Record<string, string>;
}

export default function OverviewPage({ onShowPage, pageDates }: OverviewPageProps) {
    return (
        <div className="content-island">
            <Breadcrumb
                items={[
                    { label: 'Home', onClick: () => onShowPage('page-home') },
                    { label: 'Introduction' }
                ]}
            />

            <h1>Introduction</h1>

            <EditInfo date={pageDates['page-overview']} />

            <h2 id="what-is-kite">What is Kite?</h2>

            <p>
                Kite is a declarative IaC language built to provision cloud infrastructure with precision and
                consistency.
            </p>

            <p>
                Define your resources once. Provision them anywhere. A single Kite configuration describes exactly
                what you need, then scales effortlessly across your entire development lifecycle, from staging to
                production.
            </p>

            <p>
                Clean syntax meets powerful type safety. Catch configuration errors before they reach the cloud.
                Share infrastructure modules across teams. The result? Infrastructure that&apos;s not just automated.
                It&apos;s remarkably simple to understand and maintain.
            </p>

            <h2 id="why-kite" style={{ marginTop: '64px', marginBottom: '24px' }}>Why Kite?</h2>

            <ul style={{ listStyle: 'none', paddingLeft: 0, margin: '24px 0' }}>
                <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                    <strong>One language. Every cloud.</strong> True portability without the pain.
                </li>
                <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                    <strong>Designed to feel familiar.</strong> Kite&apos;s syntax draws from the best of Terraform,
                    Bicep, and modern languages like TypeScript, C# and Java.
                </li>
                <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                    <strong>Refactor fearlessly.</strong> Rename resources in code without ever losing the real ones
                    in the cloud.
                </li>
                <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                    <strong>Import with ease.</strong> Bring your existing cloud infrastructure into Kite. No
                    rewrites, no headaches, just instant control.
                </li>
                <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                    <strong>Build without limits.</strong> Extend resources effortlessly with annotations or mixins,
                    and compose infrastructure the way you imagine it.
                </li>
                <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--text-primary)', fontSize: '20px', lineHeight: 1 }}>•</span>
                    <strong>State that scales with you.</strong> Just a proper database managing everything
                    automatically. Safe, fast, secure, and recoverable when things go wrong.
                </li>
            </ul>
        </div>
    );
}