'use client';

import React from 'react';
import styles from './PricingCard.module.css';

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
        <div className={`${styles.pricingCard} ${featured ? styles.featured : ''}`}>
            {featured && <div className={styles.featuredBadge}>Most Popular</div>}
            <div className={styles.cardHeader}>
                <h3 className={styles.tierName}>{tier}</h3>
                <div className={styles.priceContainer}>
                    <span className={styles.price}>{price}</span>
                    {period && <span className={styles.period}>{period}</span>}
                </div>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>

            <ul className={styles.featuresList}>
                {features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                        <span className={styles.checkIcon}>✓</span>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <button className={`${styles.ctaButton} ${styles[buttonType]}`}>
                {buttonText}
            </button>
        </div>
    );
}
