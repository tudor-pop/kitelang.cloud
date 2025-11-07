'use client';

import React from 'react';
import styles from './EditInfo.module.css';

interface EditInfoProps {
    date: string;
}

export default function EditInfo({ date }: EditInfoProps) {
    return (
        <div className={styles.editInfo}>
            <span>Updated on {date}</span>
        </div>
    );
}
