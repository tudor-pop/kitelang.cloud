'use client';

import React, { useEffect } from 'react';
import styles from './Toast.module.css';

interface ToastProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
    duration?: number;
}

export default function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div
            className={`${styles.toast} ${styles[type]}`}
            role="alert"
            aria-live="polite"
        >
            <div className={styles.toastContent}>
                <span className={styles.toastIcon}>
                    {type === 'success' ? '✓' : '✕'}
                </span>
                <span className={styles.toastMessage}>{message}</span>
            </div>
            <button
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close notification"
            >
                ✕
            </button>
        </div>
    );
}
