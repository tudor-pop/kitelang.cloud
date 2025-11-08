'use client';

import React from 'react';
import styles from './page.module.css';

export default function ComparisonPage() {
    const features = [
        {
            category: 'Language & Syntax',
            items: [
                {
                    feature: 'Language Type',
                    kite: 'Domain-specific language (DSL)',
                    terraform: 'Declarative configuration (HCL)',
                    pulumi: 'General-purpose languages (TypeScript, Python, Go)',
                    bicep: 'Declarative DSL for Azure',
                },
                {
                    feature: 'Type Safety',
                    kite: 'Built-in strong typing',
                    terraform: 'Limited type checking',
                    pulumi: 'Language-dependent',
                    bicep: 'Strong typing for Azure resources',
                },
                {
                    feature: 'Learning Curve',
                    kite: 'Low - intuitive syntax',
                    terraform: 'Medium - HCL syntax',
                    pulumi: 'Medium - requires programming knowledge',
                    bicep: 'Low - JSON-like syntax',
                },
            ],
        },
        {
            category: 'Multi-Cloud Support',
            items: [
                {
                    feature: 'AWS Support',
                    kite: 'Native',
                    terraform: 'Native',
                    pulumi: 'Native',
                    bicep: 'No (Azure only)',
                },
                {
                    feature: 'GCP Support',
                    kite: 'Native',
                    terraform: 'Native',
                    pulumi: 'Native',
                    bicep: 'No (Azure only)',
                },
                {
                    feature: 'Azure Support',
                    kite: 'Native',
                    terraform: 'Native',
                    pulumi: 'Native',
                    bicep: 'Native (Azure-specific)',
                },
                {
                    feature: 'Cross-Cloud Abstraction',
                    kite: 'Unified resource model',
                    terraform: 'Provider-specific',
                    pulumi: 'Provider-specific',
                    bicep: 'Azure-only',
                },
            ],
        },
        {
            category: 'Features & Capabilities',
            items: [
                {
                    feature: 'State Management',
                    kite: 'Database-backed with versioning',
                    terraform: 'File-based or remote backend',
                    pulumi: 'Cloud-based state service',
                    bicep: 'Azure Resource Manager (ARM)',
                },
                {
                    feature: 'Runtime Iteration',
                    kite: 'Supports runtime values in loops',
                    terraform: 'Plan-time only (known limitation)',
                    pulumi: 'Dynamic iteration support',
                    bicep: 'Limited (compile-time loops)',
                },
                {
                    feature: 'Mixins & Composition',
                    kite: 'Native mixin system',
                    terraform: 'Modules',
                    pulumi: 'Object-oriented patterns',
                    bicep: 'Modules',
                },
                {
                    feature: 'Component System',
                    kite: 'Built-in reusable components',
                    terraform: 'Module-based',
                    pulumi: 'Component resources',
                    bicep: 'Module-based',
                },
                {
                    feature: 'Testing Support',
                    kite: 'Built-in test framework',
                    terraform: 'Third-party tools',
                    pulumi: 'Unit and integration testing',
                    bicep: 'Limited (ARM template validation)',
                },
            ],
        },
        {
            category: 'Developer Experience',
            items: [
                {
                    feature: 'IDE Support',
                    kite: 'VSCode extension with IntelliSense',
                    terraform: 'Good',
                    pulumi: 'Excellent (language tooling)',
                    bicep: 'Excellent (VSCode extension)',
                },
                {
                    feature: 'Error Messages',
                    kite: 'Clear and actionable',
                    terraform: 'Can be cryptic',
                    pulumi: 'Language-dependent',
                    bicep: 'Clear for Azure resources',
                },
                {
                    feature: 'Documentation',
                    kite: 'Comprehensive with examples',
                    terraform: 'Extensive',
                    pulumi: 'Good',
                    bicep: 'Good (Microsoft docs)',
                },
                {
                    feature: 'Debugging',
                    kite: 'Built-in debugger',
                    terraform: 'Debug mode',
                    pulumi: 'Standard language debuggers',
                    bicep: 'ARM deployment logs',
                },
            ],
        },
        {
            category: 'Enterprise & Operations',
            items: [
                {
                    feature: 'Team Collaboration',
                    kite: 'Built-in',
                    terraform: 'Terraform Cloud',
                    pulumi: 'Pulumi Service',
                    bicep: 'Azure DevOps / GitHub Actions',
                },
                {
                    feature: 'RBAC',
                    kite: 'Native support',
                    terraform: 'Enterprise tier',
                    pulumi: 'Team tier',
                    bicep: 'Azure RBAC',
                },
                {
                    feature: 'Policy as Code',
                    kite: 'Built-in',
                    terraform: 'Sentinel (Enterprise)',
                    pulumi: 'CrossGuard',
                    bicep: 'Azure Policy',
                },
                {
                    feature: 'Pricing',
                    kite: 'Free for small teams',
                    terraform: 'Free (Cloud has limits)',
                    pulumi: 'Free tier available',
                    bicep: 'Free (open source)',
                },
            ],
        },
    ];

    return (
        <div className={styles.comparisonPage}>
            <div className={styles.hero}>
                <h1 className={styles.heroTitle}>How Kite Compares</h1>
                <p className={styles.heroSubtitle}>
                    See how Kite stacks up against Terraform, Pulumi, and Bicep. Built for the modern multi-cloud world.
                </p>
            </div>

            <div className={styles.comparisonContent}>
                {/* Table Header */}
                <div className={styles.tableHeader}>
                    <div className={styles.featureColumn}>
                        <h2 className={styles.columnTitle}>Feature</h2>
                    </div>
                    <div className={styles.toolColumn}>
                        <div className={styles.toolHeader}>
                            <h2 className={styles.toolName}>Kite</h2>
                            <span className={styles.badge}>Our Solution</span>
                        </div>
                    </div>
                    <div className={styles.toolColumn}>
                        <h2 className={styles.toolName}>Terraform</h2>
                    </div>
                    <div className={styles.toolColumn}>
                        <h2 className={styles.toolName}>Pulumi</h2>
                    </div>
                    <div className={styles.toolColumn}>
                        <h2 className={styles.toolName}>Bicep</h2>
                    </div>
                </div>

                {/* Comparison Categories */}
                {features.map((category, categoryIndex) => (
                    <div key={categoryIndex} className={styles.category}>
                        <h3 className={styles.categoryTitle}>{category.category}</h3>
                        <div className={styles.categoryRows}>
                            {category.items.map((item, itemIndex) => (
                                <div key={itemIndex} className={styles.comparisonRow}>
                                    <div className={styles.featureColumn}>
                                        <span className={styles.featureName}>{item.feature}</span>
                                    </div>
                                    <div className={`${styles.toolColumn} ${styles.kiteColumn}`}>
                                        <span className={styles.featureValue}>{item.kite}</span>
                                    </div>
                                    <div className={styles.toolColumn}>
                                        <span className={styles.featureValue}>{item.terraform}</span>
                                    </div>
                                    <div className={styles.toolColumn}>
                                        <span className={styles.featureValue}>{item.pulumi}</span>
                                    </div>
                                    <div className={styles.toolColumn}>
                                        <span className={styles.featureValue}>{item.bicep}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* Call to Action */}
                <div className={styles.cta}>
                    <h2 className={styles.ctaTitle}>Ready to Try Kite?</h2>
                    <p className={styles.ctaText}>
                        Join thousands of developers building cloud infrastructure the modern way.
                    </p>
                    <div className={styles.ctaButtons}>
                        <a href="/docs" className={styles.primaryCta}>Get Started</a>
                        <a href="/#features" className={styles.secondaryCta}>Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
