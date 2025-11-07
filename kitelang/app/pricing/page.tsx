'use client';

import React from 'react';
import Footer from '../components/Footer';
import PricingCard from './components/PricingCard';
import FAQItem from './components/FAQItem';

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
        <div className="pricing-page">
            {/* Main Content */}
            <main className="main-content">
                {/* Pricing Section */}
                <section className="pricing-section">
                    <h1 className="page-title">Simple Pricing</h1>
                    <p className="page-subtitle">
                        Choose the plan that fits your team. All plans include core features.
                        Scale as you grow.
                    </p>

                    <div className="pricing-grid">
                        {pricingTiers.map((tier) => (
                            <PricingCard key={tier.tier} {...tier} />
                        ))}
                    </div>

                    {/* FAQ Section */}
                    <div className="faq-section">
                        <h2 className="faq-title">Frequently Asked Questions</h2>
                        <div className="faq-grid">
                            {faqs.map((faq) => (
                                <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <Footer />
            </main>

            <style jsx global>{`
                :root {
                    --bg-primary: #FFFFFF;
                    --bg-secondary: #F5F5F5;
                    --text-primary: #000000;
                    --text-secondary: #4A4A4A;
                    --text-muted: #6B6B6B;
                    --primary-color: #A855F7;
                    --primary-dark: #9333EA;
                    --primary-light: #C084FC;
                    --border-color: #000000;
                    --shadow: rgba(0, 0, 0, 0.2);
                }

                [data-theme="dark"] {
                    --bg-primary: #000000;
                    --bg-secondary: #1A1A1A;
                    --text-primary: #FFFFFF;
                    --text-secondary: #B0B0B0;
                    --text-muted: #808080;
                    --border-color: #FFFFFF;
                    --shadow: rgba(255, 255, 255, 0.2);
                }

                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    background: var(--bg-primary);
                    color: var(--text-primary);
                    transition: background-color 0.3s ease, color 0.3s ease;
                }

                .pricing-page {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }

                /* Main Content */
                .main-content {
                    overflow-y: auto;
                    flex: 1;
                }

                /* Pricing Section */
                .pricing-section {
                    padding: 100px 40px;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .page-title {
                    font-size: 56px;
                    font-weight: 900;
                    text-align: center;
                    margin-bottom: 24px;
                    color: var(--text-primary);
                    letter-spacing: -1px;
                }

                .page-subtitle {
                    font-size: 20px;
                    line-height: 1.6;
                    text-align: center;
                    color: var(--text-secondary);
                    margin-bottom: 80px;
                    max-width: 700px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .pricing-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 32px;
                    max-width: 1200px;
                    margin: 0 auto 100px;
                }

                /* FAQ Section */
                .faq-section {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .faq-title {
                    font-size: 36px;
                    font-weight: 900;
                    margin-bottom: 48px;
                    text-align: center;
                    color: var(--text-primary);
                }

                .faq-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 32px;
                    align-items: start;
                }

                /* Footer */
                .footer {
                    background: var(--bg-secondary);
                    border-top: 2px solid var(--border-color);
                    padding: 60px 40px 40px;
                    margin-top: 100px;
                }

                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 40px;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .footer-column {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .footer-title {
                    font-size: 14px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 8px;
                    color: var(--text-primary);
                }

                .footer-column a {
                    font-size: 14px;
                    color: var(--text-secondary);
                    text-decoration: none;
                    transition: color 0.2s;
                }

                .footer-column a:hover {
                    color: var(--primary-color);
                }

                .footer-text {
                    font-size: 14px;
                    line-height: 1.6;
                    color: var(--text-secondary);
                }

                .footer-copyright {
                    font-size: 12px;
                    color: var(--text-muted);
                    margin-top: 8px;
                }

                /* Responsive */
                @media (max-width: 1200px) {
                    .pricing-grid {
                        grid-template-columns: 1fr;
                        max-width: 500px;
                    }

                    .faq-grid {
                        grid-template-columns: 1fr;
                    }
                }

                @media (max-width: 768px) {
                    .page-title {
                        font-size: 36px;
                    }

                    .pricing-section {
                        padding: 60px 20px;
                    }

                    .footer-content {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
            `}</style>
        </div>
    );
}