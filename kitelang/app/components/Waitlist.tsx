'use client';

import React, { useState } from 'react';
import styles from './Waitlist.module.css';

export default function Waitlist() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Reset error state
        setErrorMessage('');

        // Validate email
        if (!email) {
            setStatus('error');
            setErrorMessage('Please enter your email address');
            return;
        }

        if (!validateEmail(email)) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address');
            return;
        }

        // Set loading state
        setStatus('loading');

        // Simulate API call (replace with actual API endpoint)
        try {
            // TODO: Replace with actual API call to your email service
            // Example: await fetch('/api/waitlist', { method: 'POST', body: JSON.stringify({ email }) })

            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

            // For now, just log to console and show success
            console.log('Waitlist signup:', email);

            setStatus('success');
            setEmail(''); // Clear the input
        } catch (error) {
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again.');
        }
    };

    return (
        <section className={styles.waitlistSection}>
            <div className={styles.waitlistContent}>
                <h2 className={styles.waitlistTitle}>Join the Waitlist</h2>
                <p className={styles.waitlistSubtitle}>
                    Be the first to know when Kite launches. Get early access, exclusive updates, and special pricing.
                </p>

                <form onSubmit={handleSubmit} className={styles.waitlistForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.visuallyHidden}>
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className={styles.emailInput}
                            disabled={status === 'loading' || status === 'success'}
                            aria-invalid={status === 'error'}
                            aria-describedby={status === 'error' ? 'error-message' : undefined}
                        />
                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={status === 'loading' || status === 'success'}
                        >
                            {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join Waitlist'}
                        </button>
                    </div>

                    {status === 'error' && errorMessage && (
                        <p id="error-message" className={styles.errorMessage} role="alert">
                            {errorMessage}
                        </p>
                    )}

                    {status === 'success' && (
                        <p className={styles.successMessage} role="alert">
                            Thanks for joining! Check your email for confirmation.
                        </p>
                    )}
                </form>

                <p className={styles.privacyNote}>
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>
        </section>
    );
}
