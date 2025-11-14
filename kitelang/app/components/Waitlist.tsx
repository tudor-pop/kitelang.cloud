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

    // Common disposable email domains to block
    const disposableDomains = [
        'tempmail.com', 'throwaway.email', '10minutemail.com', 'guerrillamail.com',
        'mailinator.com', 'maildrop.cc', 'trashmail.com', 'fakeinbox.com'
    ];

    // Common domain typos to suggest corrections
    const domainCorrections: Record<string, string> = {
        'gmail.con': 'gmail.com',
        'gmial.com': 'gmail.com',
        'gmai.com': 'gmail.com',
        'yahooo.com': 'yahoo.com',
        'yaho.com': 'yahoo.com',
        'hotmial.com': 'hotmail.com',
        'hotmai.com': 'hotmail.com',
        'outlok.com': 'outlook.com',
        'outloo.com': 'outlook.com'
    };

    const validateEmail = (email: string): { valid: boolean; error?: string; suggestion?: string } => {
        // Trim whitespace
        email = email.trim().toLowerCase();

        // Check if empty
        if (!email) {
            return { valid: false, error: 'Please enter your email address' };
        }

        // More robust email regex (RFC 5322 simplified)
        const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

        if (!emailRegex.test(email)) {
            return { valid: false, error: 'Please enter a valid email address' };
        }

        // Extract domain
        const domain = email.split('@')[1];

        // Check for disposable email
        if (disposableDomains.includes(domain)) {
            return { valid: false, error: 'Temporary email addresses are not allowed' };
        }

        // Check for common typos and suggest corrections
        if (domainCorrections[domain]) {
            return {
                valid: false,
                error: `Did you mean ${email.replace(domain, domainCorrections[domain])}?`,
                suggestion: email.replace(domain, domainCorrections[domain])
            };
        }

        // Check for suspicious patterns
        if (email.split('@')[0].length < 2) {
            return { valid: false, error: 'Email address seems too short' };
        }

        if (domain.split('.').length < 2) {
            return { valid: false, error: 'Please enter a complete domain (e.g., example.com)' };
        }

        // Check for consecutive dots
        if (email.includes('..')) {
            return { valid: false, error: 'Email address cannot contain consecutive dots' };
        }

        return { valid: true };
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
        const validation = validateEmail(email);

        if (!validation.valid) {
            showToast(validation.error || 'Invalid email address', 'error');

            // If there's a suggestion, automatically correct it
            if (validation.suggestion) {
                setTimeout(() => {
                    setEmail(validation.suggestion!);
                }, 2000);
            }
            return;
        }

        // Check for recent submission (rate limiting)
        const lastSubmission = localStorage.getItem('waitlist_last_submission');
        if (lastSubmission) {
            const timeSince = Date.now() - parseInt(lastSubmission);
            if (timeSince < 60000) { // 1 minute cooldown
                showToast('Please wait a moment before submitting again', 'error');
                return;
            }
        }

        // Set loading state
        setStatus('loading');

        // Call the PHP endpoint
        try {
            const formData = new FormData();
            formData.append('email', email.toLowerCase());

            // Use production URL in development, relative path in production
            const isDevelopment = process.env.NODE_ENV === 'development' || window.location.hostname === 'localhost';
            const endpoint = isDevelopment
                ? 'https://kitelang.cloud/waitlist.php'  // Your production URL
                : '/waitlist.php';

            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData
            });

            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);

            // Get response text first to debug
            const responseText = await response.text();
            console.log('Response text:', responseText);
            console.log('Response text length:', responseText.length);
            console.log('Response text trimmed:', responseText.trim());

            // Try to parse JSON (trim whitespace first)
            let data;
            try {
                data = JSON.parse(responseText.trim());
                console.log('Parsed data:', data);
            } catch (e) {
                console.error('JSON parse error:', e);
                console.error('Raw response:', responseText);
                console.error('Raw response (hex):', Array.from(responseText).map(c => c.charCodeAt(0).toString(16)).join(' '));
                setStatus('idle');
                showToast('Invalid server response. Please try again.', 'error');
                return;
            }

            // Handle specific status codes BEFORE checking response.ok
            if (response.status === 409) {
                // Email already registered
                setStatus('idle');
                showToast(data.message || 'This email is already on the waitlist!', 'error');
                // Add to local storage to prevent future attempts
                const submittedEmails = JSON.parse(localStorage.getItem('waitlist_emails') || '[]');
                if (!submittedEmails.includes(email.toLowerCase())) {
                    submittedEmails.push(email.toLowerCase());
                    localStorage.setItem('waitlist_emails', JSON.stringify(submittedEmails));
                }
                return;
            }

            if (response.status === 400) {
                // Bad request / validation error
                setStatus('idle');
                showToast(data.message || 'Invalid email address', 'error');
                return;
            }

            if (response.status === 500) {
                // Server error
                setStatus('idle');
                showToast(data.message || 'Server error. Please try again later.', 'error');
                return;
            }

            // Check if response is ok (status 200-299)
            if (!response.ok) {
                setStatus('idle');
                showToast(data.message || 'Something went wrong. Please try again.', 'error');
                return;
            }

            if (data.success) {
                // Store submission locally
                const submittedEmails = JSON.parse(localStorage.getItem('waitlist_emails') || '[]');
                submittedEmails.push(email.toLowerCase());
                localStorage.setItem('waitlist_emails', JSON.stringify(submittedEmails));
                localStorage.setItem('waitlist_last_submission', Date.now().toString());

                setStatus('success');
                setEmail(''); // Clear the input
                showToast(data.message || 'Thanks for joining! Check your email for confirmation.', 'success');

                // Reset status after a delay
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('idle');
                showToast(data.message || 'Something went wrong. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Fetch error:', error);
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
