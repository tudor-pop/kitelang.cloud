'use client';

import React from 'react';
import Footer from '../components/Footer';
import PricingCard from './components/PricingCard';
import FAQItem from './components/FAQItem';
import styles from './page.module.css';

const pricingTiers = [
    {
        tier: 'Free',
        price: '$0',
        period: '/month',
        subtitle: 'For small teams',
        features: [
            'Unlimited projects',
            'Community support',
            'Core features',
            '< 100 employees',
            '< $1M revenue'
        ],
        buttonText: 'Get Started',
        buttonType: 'secondary' as const,
        featured: false
    },
    {
        tier: 'Pro',
        price: '$20',
        period: '/month',
        subtitle: 'For growing teams',
        features: [
            'Everything in Free',
            'Managed state backend',
            'Email support',
            '100-500 employees',
            '$10M revenue'
        ],
        buttonText: 'Start Trial',
        buttonType: 'primary' as const,
        featured: true
    },
    {
        tier: 'Enterprise',
        price: 'Custom',
        subtitle: 'For large organizations',
        features: [
            'Everything in Pro',
            '24/7 priority support',
            'Feature request',
            'Training & onboarding',
            'Custom SLA'
        ],
        buttonText: 'Contact Sales',
        buttonType: 'secondary' as const,
        featured: false
    }
];

const faqs = [
    {
        id: 'project-definition',
        question: 'What counts as a project?',
        answer: 'A project is a distinct infrastructure configuration managed by Kite. You can have unlimited projects on all plans.'
    },
    {
        id: 'plan-changes',
        question: 'Can I upgrade or downgrade anytime?',
        answer: "Yes! You can change your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly."
    },
    {
        id: 'managed-state',
        question: 'What is managed state backend?',
        answer: 'We host and manage your infrastructure state in a secure, highly available database with automatic backups and versioning.'
    },
    {
        id: 'discounts',
        question: 'Do you offer academic or non-profit discounts?',
        answer: 'Yes! Contact us for special pricing for educational institutions, open-source projects, and non-profit organizations.'
    },
    {
        id: 'free-commercial',
        question: 'Can I use the Free plan for commercial projects?',
        answer: 'Yes! The Free plan can be used for commercial projects as long as your company has fewer than 100 employees and less than $1M in annual revenue.'
    },
    {
        id: 'free-trial',
        question: 'Do you offer a free trial?',
        answer: 'All users start with the Free plan, which includes core features and unlimited projects. You can upgrade to Pro or Enterprise anytime without needing a separate trial.'
    },
    {
        id: 'payment-methods',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit and debit cards. Annual billing is available with a discount - contact us for details on annual pricing.'
    },
    {
        id: 'data-residency',
        question: 'Where is my infrastructure state stored?',
        answer: 'For managed state backend, data is stored in secure, highly available regions. Enterprise customers can discuss specific data residency requirements with our team.'
    },
    {
        id: 'pricing-model',
        question: 'Is pricing per user or per organization?',
        answer: 'Pricing is per organization, not per user. Your entire team can use Kite under a single plan with no per-seat charges.'
    },
    {
        id: 'cancellation',
        question: 'What is your cancellation policy?',
        answer: 'You can cancel your subscription at any time. Your plan remains active until the end of your billing period, and no refunds are provided for partial months.'
    }
];

export default function PricingPage() {

    return (
        <div className={styles.pricingPage}>
            {/* Main Content */}
            <main className={styles.mainContent}>
                {/* Pricing Section */}
                <section className={styles.pricingSection}>
                    <h1 className={styles.pageTitle}>Simple Pricing</h1>
                    <p className={styles.pageSubtitle}>
                        Choose the plan that fits your team. All plans include core features.
                        Scale as you grow.
                    </p>

                    <div className={styles.pricingGrid}>
                        {pricingTiers.map((tier) => (
                            <PricingCard key={tier.tier} {...tier} />
                        ))}
                    </div>

                    {/* FAQ Section */}
                    <div className={styles.faqSection}>
                        <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
                        <div className={styles.faqGrid}>
                            {faqs.map((faq) => (
                                <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </main>
        </div>
    );
}