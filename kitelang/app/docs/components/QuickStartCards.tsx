import React from 'react';
import QuickStartCard from './QuickStartCard';

interface QuickStartCardsProps {
    onShowPage: (pageId: string) => void;
}

export default function QuickStartCards({onShowPage}: QuickStartCardsProps) {
    const cards = [
        {
            icon: '🗺️',
            title: 'Introduction',
            description: "Learn about Kite and why it's the best choice for multi-cloud IaC",
            pageId: 'page-overview'
        },
        {
            icon: '📦',
            title: 'Installation',
            description: 'Install Kite CLI and set up your development environment',
            pageId: 'page-installation'
        },
        {
            icon: '🚀',
            title: 'First Project',
            description: 'Build your first cloud infrastructure with a step-by-step tutorial',
            pageId: 'page-first-project'
        },
        {
            icon: '📖',
            title: 'Learn the Basics',
            description: "Understand Kite's syntax, types, and core language features",
            pageId: 'page-basics'
        },
        {
            icon: '💡',
            title: 'Example Projects',
            description: 'Explore sample projects and templates for common use cases',
            pageId: 'page-examples'
        },
        {
            icon: '👷',
            title: 'Develop Plugins',
            description: "Create custom provider plugins to extend Kite's capabilities",
            pageId: 'page-develop-plugins'
        },
        {
            icon: '📚',
            title: 'API Reference',
            description: 'Complete reference documentation for the Kite language',
            pageId: 'page-reference'
        }
    ];

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginTop: '32px'
        }}>
            {cards.map((card, index) => (
                <QuickStartCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                    pageId={card.pageId}
                    onShowPage={onShowPage}
                />
            ))}
        </div>
    );
}
