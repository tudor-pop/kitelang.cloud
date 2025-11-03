import { NextResponse } from 'next/server';
import { getAllPageDates } from '@/app/docs/utils/getPageLastModified';

export async function GET() {
    try {
        const dates = getAllPageDates();
        return NextResponse.json(dates);
    } catch (error) {
        console.error('Error fetching page dates:', error);
        // Return fallback dates if git command fails
        return NextResponse.json({
            'page-home': 'January 2025',
            'page-overview': 'January 2025',
            'page-basics': 'January 2025',
            'page-basic-syntax': 'January 2025',
        });
    }
}
