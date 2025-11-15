import { execSync } from 'child_process';

/**
 * Gets the last modification date of a file from git history
 * Returns formatted date string (e.g., "January 2025")
 * This is a server-side only function (uses Node.js execSync)
 */
export function getPageLastModified(pageId: string): string {
    try {
        // Map page IDs to their corresponding source files
        const pageFileMap: Record<string, string> = {
            'page-home': 'kitelang/app/docs/MainContent.tsx',
            'page-overview': 'kitelang/app/docs/MainContent.tsx',
            'page-basics': 'kitelang/app/docs/MainContent.tsx',
        };

        const filePath = pageFileMap[pageId];
        if (!filePath) {
            return 'January 2025'; // Fallback
        }

        // Get the last commit date for this file
        // Run git from the repository root (parent directory of kitelang)
        const gitCommand = `cd .. && git log -1 --format=%cd --date=format:%B\\ %Y ${filePath}`;
        const lastModified = execSync(gitCommand, {
            encoding: 'utf-8',
            shell: '/bin/bash'
        }).trim();

        return lastModified || 'January 2025';
    } catch (error) {
        // Fallback if git command fails (e.g., not in a git repo, file not tracked)
        console.warn(`Failed to get git modification date for ${pageId}:`, error);
        return 'January 2025';
    }
}

/**
 * Gets all page modification dates at build time
 * Returns a map of page IDs to formatted dates
 */
export function getAllPageDates(): Record<string, string> {
    const pageIds = ['page-home', 'page-overview', 'page-basics'];
    const dates: Record<string, string> = {};

    for (const pageId of pageIds) {
        dates[pageId] = getPageLastModified(pageId);
    }

    return dates;
}
