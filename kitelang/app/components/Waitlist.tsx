'use client';

import React, { useState } from 'react';
import Toast from './Toast';
import styles from './Waitlist.module.css';

interface ToastState {
    show: boolean;
    message: string;
    type: 'success' | 'error';
}

export default function Waitlist() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
    const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'success' });

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const showToast = (message: string, type: 'success' | 'error') => {
        setToast({ show: true, message, type });
    };

    const hideToast = () => {
        setToast({ ...toast, show: false });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate email
        if (!email) {
            showToast('Please enter your email address', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showToast('Please enter a valid email address', 'error');
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
            showToast('Thanks for joining! Check your email for confirmation.', 'success');

            // Reset status after a delay
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            setStatus('idle');
            showToast('Something went wrong. Please try again.', 'error');
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
                        />
                        <button
                            type="submit"
                            className={styles.submitButton}
                            disabled={status === 'loading' || status === 'success'}
                        >
                            {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join Waitlist'}
                        </button>
                    </div>
                </form>

                <p className={styles.privacyNote}>
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </div>

            {toast.show && (
                <Toast
                    message={toast.message}
                    type={toast.type}
                    onClose={hideToast}
                />
            )}
        </section>
    );
}
