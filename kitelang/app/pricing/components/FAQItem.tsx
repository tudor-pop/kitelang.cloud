'use client';

import React, { useState } from 'react';
import styles from './FAQItem.module.css';

interface FAQItemProps {
    question: string;
    answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.faqItem}>
            <button
                className={styles.faqQuestion}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>▼</span>
            </button>
            <div className={`${styles.faqAnswer} ${isOpen ? styles.open : ''}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
}
