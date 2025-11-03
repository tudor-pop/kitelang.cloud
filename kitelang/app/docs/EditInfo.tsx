'use client';

import React from 'react';

interface EditInfoProps {
    date: string;
}

export default function EditInfo({ date }: EditInfoProps) {
    return (
        <>
            <div className="edit-info">
                <span>Updated on {date}</span>
            </div>

            <style jsx>{`
                .edit-info {
                    font-size: 13px;
                    color: var(--text-light);
                    margin-bottom: 24px;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(0, 0, 0, 0.04);
                    padding: 8px 16px;
                    border-radius: 20px;
                    border: none;
                }

                .edit-info::before {
                    content: '📅';
                    font-size: 14px;
                }
            `}</style>
        </>
    );
}
