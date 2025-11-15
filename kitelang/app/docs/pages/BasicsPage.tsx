import React from 'react';

interface BasicsPageProps {
    onShowPage: (pageId: string) => void;
    onCopyCode: (code: string, blockId: string) => void;
    copyStatus: { [key: string]: boolean };
    pageDates: Record<string, string>;
}

export default function BasicsPage({ onShowPage, onCopyCode, copyStatus, pageDates }: BasicsPageProps) {
    return (
        <div className="content-island">
            <h1>Syntax overview</h1>

            <p>
                Explore quick examples of Kite&apos;s syntax and key features. Each example demonstrates how to use
                a specific aspect of the language, with links to detailed documentation at the end.
            </p>
        </div>
    );
}