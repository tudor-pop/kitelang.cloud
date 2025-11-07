'use client';

import React from 'react';

interface PricingCardProps {
    tier: string;
    price: string;
    period?: string;
    subtitle: string;
    features: string[];
    buttonText: string;
    buttonType: 'primary' | 'secondary';
    featured: boolean;
}

export default function PricingCard({
    tier,
    price,
    period,
    subtitle,
    features,
    buttonText,
    buttonType,
    featured
}: PricingCardProps) {
    return (
        <>
            <div className={`pricing-card ${featured ? 'featured' : ''}`}>
                {featured && <div className="featured-badge">Most Popular</div>}
                <div className="card-header">
                    <h3 className="tier-name">{tier}</h3>
                    <div className="price-container">
                        <span className="price">{price}</span>
                        {period && <span className="period">{period}</span>}
                    </div>
                    <p className="subtitle">{subtitle}</p>
                </div>

                <ul className="features-list">
                    {features.map((feature, index) => (
                        <li key={index} className="feature-item">
                            <span className="check-icon">✓</span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <button className={`cta-button ${buttonType}`}>
                    {buttonText}
                </button>
            </div>

            <style jsx>{`
                .pricing-card {
                    background: var(--bg-primary);
                    border: 2px solid var(--border-color);
                    border-radius: 16px;
                    padding: 40px 32px;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    transition: all 0.3s ease;
                }

                .pricing-card:hover {
                    transform: translate(-4px, -4px);
                    box-shadow: 4px 4px 0 var(--border-color);
                }

                .pricing-card.featured {
                    border-color: var(--primary-color);
                    border-width: 3px;
                }

                .featured-badge {
                    position: absolute;
                    top: -12px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: var(--primary-color);
                    color: var(--bg-primary);
                    font-size: 11px;
                    padding: 6px 16px;
                    border-radius: 0;
                    font-weight: 900;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    border: 2px solid var(--border-color);
                }

                .card-header {
                    text-align: center;
                    margin-bottom: 32px;
                    padding-bottom: 32px;
                    border-bottom: 2px solid var(--border-color);
                }

                .tier-name {
                    font-size: 28px;
                    font-weight: 900;
                    margin-bottom: 16px;
                    color: var(--text-primary);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .price-container {
                    margin-bottom: 12px;
                }

                .price {
                    font-size: 48px;
                    font-weight: 900;
                    color: var(--primary-color);
                    line-height: 1;
                }

                .period {
                    font-size: 18px;
                    color: var(--text-secondary);
                    margin-left: 4px;
                }

                .subtitle {
                    font-size: 16px;
                    color: var(--text-secondary);
                    margin: 0;
                }

                .features-list {
                    list-style: none;
                    margin: 0 0 32px 0;
                    padding: 0;
                    flex: 1;
                }

                .feature-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    margin-bottom: 16px;
                    font-size: 15px;
                    color: var(--text-primary);
                    line-height: 1.6;
                }

                .check-icon {
                    flex-shrink: 0;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--primary-color);
                    color: var(--bg-primary);
                    border-radius: 4px;
                    font-weight: 900;
                    font-size: 14px;
                    border: 2px solid var(--border-color);
                }

                .cta-button {
                    width: 100%;
                    padding: 16px;
                    font-size: 16px;
                    font-weight: 700;
                    border-radius: 8px;
                    border: 2px solid var(--border-color);
                    cursor: pointer;
                    transition: all 0.2s;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .cta-button.primary {
                    background: var(--primary-color);
                    color: var(--bg-primary);
                }

                .cta-button.primary:hover {
                    background: var(--primary-dark);
                    transform: translate(-2px, -2px);
                    box-shadow: 2px 2px 0 var(--border-color);
                }

                .cta-button.secondary {
                    background: transparent;
                    color: var(--text-primary);
                }

                .cta-button.secondary:hover {
                    background: var(--primary-color);
                    color: var(--bg-primary);
                    transform: translate(-2px, -2px);
                    box-shadow: 2px 2px 0 var(--border-color);
                }

                @media (max-width: 768px) {
                    .pricing-card {
                        padding: 32px 24px;
                    }

                    .tier-name {
                        font-size: 24px;
                    }

                    .price {
                        font-size: 40px;
                    }
                }
            `}</style>
        </>
    );
}
