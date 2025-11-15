import React from 'react';
import EditInfo from '../components/EditInfo';
import Breadcrumb from '../components/Breadcrumb';

interface IntroductionPageProps {
    onShowPage: (pageId: string) => void;
    pageDates: Record<string, string>;
}

export default function IntroductionPage({ onShowPage, pageDates }: IntroductionPageProps) {
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

            <h2 id="who-should-use-kite" style={{ marginTop: '64px', marginBottom: '24px' }}>Who Should Use Kite?</h2>

            <p>
                Kite is designed for teams and individuals who need reliable, scalable infrastructure across multiple
                cloud providers. Whether you&apos;re managing a handful of resources or orchestrating complex
                multi-cloud deployments, Kite adapts to your needs.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 600, marginTop: '32px', marginBottom: '16px' }}>
                DevOps Engineers & Platform Teams
            </h3>

            <p>
                Build and maintain infrastructure that spans AWS, Google Cloud, Azure, and beyond. Kite&apos;s unified
                syntax means you write once and deploy anywhere, eliminating the need to learn provider-specific tools.
                Perfect for teams managing multi-cloud environments or planning cloud migrations.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 600, marginTop: '32px', marginBottom: '16px' }}>
                Software Engineers
            </h3>

            <p>
                Developers familiar with modern programming languages will feel right at home. Kite&apos;s syntax draws
                inspiration from TypeScript, C#, and Java, making infrastructure code as intuitive as application code.
                Type safety catches errors before deployment, and IDE support provides autocomplete and inline
                documentation.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 600, marginTop: '32px', marginBottom: '16px' }}>
                Startups & Growing Companies
            </h3>

            <p>
                Start small and scale confidently. Kite grows with your infrastructure needs without forcing you to
                rewrite everything when you expand to new cloud providers or regions. The free tier makes it accessible
                for early-stage companies, while enterprise features support growth.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 600, marginTop: '32px', marginBottom: '16px' }}>
                Enterprises with Complex Requirements
            </h3>

            <p>
                Organizations needing vendor flexibility, compliance controls, and robust state management will
                appreciate Kite&apos;s enterprise-grade features. Built-in support for importing existing infrastructure
                means you can adopt Kite incrementally without disrupting current operations.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: 600, marginTop: '32px', marginBottom: '16px' }}>
                Teams Seeking Better Collaboration
            </h3>

            <p>
                Share reusable modules across projects and teams. Kite&apos;s clean syntax and type system make code
                reviews straightforward, while built-in refactoring support lets you reorganize infrastructure without
                destroying and recreating resources in production.
            </p>
        </div>
    );
}