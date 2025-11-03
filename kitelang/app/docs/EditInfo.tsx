'use client';

import React from 'react';

interface EditInfoProps {
    date: string;
}

export default function EditInfo({ date }: EditInfoProps) {
    return (
        <div className="edit-info">
            <span>Updated on {date}</span>
        </div>
    );
}
