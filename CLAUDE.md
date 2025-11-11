# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for **Kite** - a modern Infrastructure as Code (IaC) language designed for multi-cloud deployments. The site combines marketing content, documentation, and pricing information.

**Technology Stack:**
- **Next.js 16.0.1** - React framework with Turbopack for fast development
- **TypeScript 5.9.3** - Type-safe component development
- **React 19.2.0** - Modern React with functional components and hooks
- **CSS Modules** - Component-scoped CSS with `.module.css` files
- **Node.js 24 LTS** - Latest LTS version with @types/node 24.10.0
- **Tailwind CSS 4.1.17** - Utility-first CSS framework (minimal usage)
- **ESLint 9.39.1** - Code linting with Next.js configuration

**Key Characteristics:**
- Next.js app directory structure with React Server Components
- Type-safe development with TypeScript
- CSS Modules for component-scoped styles with automatic class name hashing
- Global styles in `app/globals.css` for theme variables and shared utilities
- System-aware dark mode with localStorage persistence
- Brutalist design philosophy throughout

## Architecture

### Next.js App Structure

```
app/
├── page.tsx                          # Landing page (/)
├── components/
│   ├── Footer.tsx                    # Shared footer component
│   └── InteractiveCodeBlock.tsx      # Code demo with tabs and syntax highlighting
├── layout.tsx                        # Root layout wrapper
└── globals.css                       # Global styles
```

### File Structure

```
app/page.tsx                    # Interactive landing page with code demo
app/components/InteractiveCodeBlock.tsx  # Tabbed code block with Kite syntax highlighting
app/components/Footer.tsx       # Footer component
docs.html                       # Documentation portal (multi-page SPA, static HTML)
pricing.html                    # Three-tier pricing page (static HTML)
LICENSE.html                    # Terms and conditions (static HTML)
public/LICENSE.html             # Public license file
STYLE_GUIDE.md                  # Complete design system documentation
CLAUDE.md                       # This file - developer guidance
```

**Note:** The main landing page uses Next.js/React, while docs, pricing, and license pages remain static HTML files for simplicity.

### Docs Page Layout (app/docs/)

The documentation page uses **Next.js with simplified CSS Grid + floating TOC** layout:

#### Grid Layout Structure - CURRENT IMPLEMENTATION

**IMPORTANT**: This is the current, finalized layout. The structure is:

```css
/* Container Grid - Simple 2-column layout (desktop) */
.container {
    display: grid;
    grid-template-columns: 280px 1fr;  /* left sidebar | content area */
    grid-template-rows: 1fr;
    gap: 0;
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    overflow: hidden;
}

/* Main with Footer - Scrollable container */
.main-with-footer {
    height: calc(100vh - 70px);  /* Account for 70px TopBar */
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0;
    box-sizing: border-box;
}

/* Dynamic margin based on TOC visibility */
.main-with-footer.with-toc {
    margin-right: 280px;  /* Space for floating TOC */
}

.main-with-footer.no-toc {
    margin-right: 0;  /* Full width when TOC hidden */
}

/* TOC - Floating fixed position */
.rightSidebar {
    position: fixed;
    right: 0;
    top: 44px;  /* Below navigation bar */
    width: 280px;
    max-height: calc(100vh - 44px);
    overflow-y: auto;
    z-index: 20;
}
```

**Layout Components:**
1. **TopBar** (global, 70px height)
   - Fixed at top of viewport
   - Always visible across all pages
   - Contains logo, navigation, theme toggle

2. **Left Sidebar** (`Sidebar.tsx`)
   - Width: 280px fixed (column 1 of container)
   - Position: Part of grid, sticky within its column
   - Height: `100vh`
   - Has internal scroll: `overflow-y: auto`
   - Stays fixed when main content scrolls
   - Z-index: 100
   - **Responsive**: Hidden on screens ≤1100px (replaced by hamburger menu)

3. **Main with Footer** (`div.main-with-footer`)
   - Column 2 of container
   - Height: `calc(100vh - 70px)` to account for TopBar
   - Contains MainContent and Footer as siblings
   - This div scrolls, containing both main content and footer
   - Dynamically adjusts `margin-right` based on TOC visibility:
     - `with-toc` class: 280px margin (makes space for TOC)
     - `no-toc` class: 0px margin (fills full width)
   - **Responsive**: Full width on screens ≤1100px

4. **Main Content** (`MainContent.tsx`)
   - First child of `main-with-footer`
   - No scrolling properties (scrolling handled by parent)
   - Contains page sections with content islands
   - Padding/margins adjust at responsive breakpoints

5. **Footer** (`Footer.tsx`)
   - Second child of `main-with-footer` (sibling to MainContent)
   - **Island styling on docs page only** (via `isIsland={true}` prop)
   - Styled as an island: bordered, rounded corners (16px)
   - Margin: `32px 24px 24px 24px` (desktop)
   - Width: `auto` (fits within container)
   - Font: `Roboto Mono` (monospace) everywhere
   - Scrolls together with main content
   - **Responsive margins**: Adjust at 1100px, 900px, 600px breakpoints

6. **Right TOC** (`TableOfContents.tsx`)
   - Position: `fixed` at `right: 0, top: 44px`
   - Width: 280px
   - Max-height: `calc(100vh - 44px)` (content-based height, not full screen)
   - Floats above content (not part of grid)
   - Has internal scroll: `overflow-y: auto`
   - Only rendered when `showToc` is `true`
   - Z-index: 20
   - **Responsive**: Hidden on screens ≤900px

**Scrolling Behavior:**
- HTML/Body: `overflow: hidden` set via useEffect (docs page only, removed on unmount)
- Body (`.body` class): `overflow: hidden` - NO scroll at body level
- Container: `overflow: hidden` - NO scroll
- Left Sidebar: Independent scroll (`overflow-y: auto`)
- **Main-with-footer: PRIMARY scroll area** (`overflow-y: auto`) - scrolls both content AND footer together
- Main Content: NO scroll properties (relies on parent)
- Right TOC: Independent scroll (`overflow-y: auto`)
- Footer: Scrolls with main content (inside main-with-footer)

**Responsive Breakpoints:**

1. **≤900px** - Hide TOC
   - TOC disappears (display: none)
   - Main content margin-right becomes 0
   - Content islands get smaller margins (16px)

2. **≤1100px** - Hide sidebar, show hamburger
   - Left sidebar hidden by default
   - Container becomes single column (grid-template-columns: 1fr)
   - Hamburger menu button appears
   - Sidebar appears as fixed overlay when hamburger is clicked
   - Main content full width with no TOC margin

3. **≤600px** - Extra small mobile
   - Further reduced margins (12px)
   - Smaller typography (h1: 28px, h2: 22px, p: 15px)
   - Smaller FAB button (44px)
   - Footer padding reduced to 24px 16px

**Why This Layout:**
- **Simplified structure** - Single 2-column grid, TOC floats separately
- **Floating TOC** - Fixed position on right, doesn't affect grid
- **Dynamic width** - Main content expands to full width when TOC is hidden
- **Single scroll container** - Main-with-footer handles all content scrolling
- **Footer as island** - Styled consistently with other content islands (docs page only)
- **No double scrollbars** - Only main-with-footer scrolls
- **TopBar accounted for** - Heights use calc() to account for 70px TopBar
- **Content-based TOC height** - Uses max-height instead of height for natural sizing
- **Mobile-friendly** - Progressive enhancement with hamburger menu and hidden TOC

#### Multi-Page SPA Pattern

The docs page uses **client-side routing** within a single Next.js page:

- Multiple `.page-section` divs with `display: none` by default
- JavaScript `showPage(pageId)` function toggles visibility
- Dynamic TOC updates based on active page
- Layout adjustments (shows/hides TOC sidebar, repositions FABs)

**When adding new documentation pages:**
1. Add a new `.page-section` div with unique ID in `MainContent.tsx`
2. Update `showPage()` function to handle the new page in `page.tsx`
3. Add navigation link in `Sidebar.tsx` `.sidebar-menu`
4. Define TOC structure for that page in the `showPage()` switch statement

## Design System (Brutalism)

The entire site follows a **brutalist design philosophy**. Refer to `STYLE_GUIDE.md` for complete specifications.

### Core Principles

- **High contrast** - Pure black borders (#000000) on light theme, white (#FFFFFF) on dark
- **No soft shadows** - All shadows are `transparent` except hard-edged drop shadows on interactive elements
- **Minimal border radius** - 4px for buttons/badges, 16px for content islands
- **Bold typography** - font-weight 900 for emphasis elements
- **2px solid borders** - All content islands and major UI elements
- **Material Design 3 purple** - Primary color #A855F7 consistently across themes
- **No scale/lift animations** - `transform: none` on hover (except scroll-to-top FAB)

### Island Architecture

Content is organized into "islands" - distinct bordered sections:

```css
.content-island {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 48px 56px;
  border: 2px solid var(--border-color);
  box-shadow: none;
}
```

### Color System

**Light Theme:**
- Primary: #A855F7 (purple)
- Background: #FFFFFF
- Text: #000000
- Borders: #000000

**Dark Theme:**
- Primary: #A855F7 (same purple)
- Background: #000000
- Text: #FFFFFF
- Borders: #FFFFFF

**System-aware dark mode:**
- Auto-detects `prefers-color-scheme: dark`
- User can override via toggle (saved to localStorage)
- All color transitions use `transition: 0.3s ease`

### Typography

**Font Families:**
- **Roboto** - Body text, headings, navigation
- **Roboto Mono** - Code blocks, footer, left sidebar menu
- **Fira Code** - Only on index.html code demo

**Scale:**
- h1: 52px / 700 weight (36px on mobile)
- h2: 36px / 600 weight (26px on mobile)
- h3: 24px / 600 weight
- Body: 16px / 400 weight
- Paragraph: 17px / line-height 1.8

### Spacing System

8px base unit: 8, 12, 16, 24, 32, 48, 56, 64

### Responsive Breakpoints

**Landing Page (app/page.tsx):**
- **1000px** - InteractiveCodeBlock side-by-side with buttons (above) / below buttons (below)
- **500px** - InteractiveCodeBlock jumps below "Get Started" buttons using flexbox order
- **480px** - "Get Started" and "See Demo" buttons stack vertically (full width)

**Documentation Page (app/docs/):**
- **1400px** - Hide right TOC sidebar
- **1100px** - Show hamburger menu, hide left sidebar until clicked
- **900px** - Hide TOC, reduce content island margins

**Footer Component (app/components/Footer.tsx):**
- **768px** - Switch to 3 columns for footer links
- **600px** - Switch to 2 columns for footer links
- **480px** - Single column footer, reduced padding
- **415px** - Minimal spacing with explicit margins (not flexbox gap)

## Development Workflow

### Running the Development Server

**Next.js Development:**
```bash
npm run dev
# Then visit http://localhost:3000
```

The Next.js dev server uses Turbopack for fast hot module replacement. Changes to React components will reflect immediately.

**Static HTML Pages:**
For docs.html, pricing.html, and LICENSE.html, you can open them directly:
```bash
open docs.html  # macOS
xdg-open docs.html  # Linux
start docs.html  # Windows
```

**Browser Compatibility:**
- Next.js supports modern browsers with ES6+ features
- React 19 requires recent browser versions
- Static HTML pages require CSS Grid, Flexbox, CSS Custom Properties
- IntersectionObserver API (for TOC highlighting in docs.html)
- Test in Chrome, Firefox, Safari, Edge

### Git Workflow

```bash
# Standard git workflow
git add <files>
git commit -m "message"
git push origin main
```

Remote repository: https://github.com/tudor-pop/kitelang.cloud.git

### Building and Deployment

**Build for Production:**
```bash
npm run build
```

This creates an `out` folder with static HTML/CSS/JS files ready for deployment.

**Deploy to Hostinger:**
1. Build the project: `npm run build`
2. Navigate to the `out` folder
3. Upload all contents to Hostinger's `public_html` directory via FTP or File Manager
4. Ensure `index.html` is in the root of your domain folder
5. The site is now live!

**Configuration:**
- `next.config.ts` is set to `output: 'export'` for static export
- Images are configured as `unoptimized: true` for compatibility
- All pages are pre-rendered as static HTML

## Common Modifications

### Interactive Code Block Component (app/components/InteractiveCodeBlock.tsx)

The landing page features a custom syntax-highlighted code block with:

**Features:**
- **Tabbed interface** - Multiple code examples (Resources, Decorators, Components, etc.)
- **Kite language syntax highlighting** - Custom tokenizer with support for:
  - Keywords (purple): `package`, `import`, `resource`, `component`, `mixin`, `on`, `fun`, `val`, `input`, `output`, etc.
  - Built-in types (blue): `string`, `int`, `float`, `double`, `boolean`, etc.
  - Decorators (orange): `@count`, `@region`, etc.
  - String interpolation (green strings, orange `${}` delimiters): `"production-${count}"`
  - Numbers (cyan): `3`, `10`, etc.
  - Comments (gray): Both `//` and `#` syntax
  - Functions and identifiers with hover tooltips
- **Horizontal text wrapping** - Code wraps naturally without horizontal scrolling
- **Copy to clipboard** - Copy button for each code example
- **Theme-aware** - Automatically adapts to light/dark theme

**Implementation Details:**
- Custom tokenization logic in `tokenizeLine()` function
- Handles string interpolation with both `${variable}` and `$variable` syntax
- Uses `data-tooltip` attribute with CSS `::before` pseudo-elements for tooltips
- Code examples stored in `defaultCodeExamples` array within component

### Decorative Cloud Background (app/page.tsx)

The landing page features subtle animated clouds with randomized positions:

**Cloud Structure:**
- **5 clouds** with varied sizes defined in `app/globals.css`
- Positions randomized on each page load via React `useEffect` hook
- Created using CSS pseudo-elements (`::before` and `::after`)
- Main body: elongated oval with `border-radius: 100px`
- `::before`: smaller circular bump on left
- `::after`: larger circular bump on right

**Implementation:**
```tsx
const [cloudPositions, setCloudPositions] = useState<Array<{ top: number; left?: number; right?: number }>>([]);

useEffect(() => {
    // Generate random positions for clouds on mount
    const positions = Array.from({ length: 5 }, () => ({
        top: Math.random() * 80 + 10, // 10% to 90%
        ...(Math.random() > 0.5
            ? { left: Math.random() * 70 + 5 } // 5% to 75%
            : { right: Math.random() * 70 + 5 }
        )
    }));
    setCloudPositions(positions);
}, []);
```

**Styling (in app/globals.css):**
```css
.cloud {
    position: absolute;
    border-radius: 100px;
    opacity: 0.15;
}

.cloud-1 {
    width: 180px;
    height: 50px;
    background: var(--text-primary);  /* Black in light mode, white in dark mode */
    animation: float 35s infinite ease-in-out;
}
```

**Animations:**
- Floating animation moves clouds naturally across screen
- Different speeds (25s-40s) and delays for variety
- Movement includes translateY() and translateX() transformations
- Positions randomized each page load for visual variety

**Key Principles:**
- Use `var(--text-primary)` for theme-aware clouds
- Keep opacity at ~0.15 for subtle background effect
- Z-index: 0 (behind all content)
- `pointer-events: none` to avoid interfering with interactions
- Random positioning prevents repetitive appearance

### Adding Syntax-Highlighted Code Block (Static HTML Pages)

```html
<div class="code-block-wrapper">
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
    <div class="code-block">
        <code>
            <span class="keyword">package</span> example
            <span class="import">import</span> kite.cloud.*
            <span class="comment">// Your code here</span>
        </code>
    </div>
</div>
```

**Syntax Classes:**
- `.keyword` - Language keywords (package, fun, val, etc.)
- `.import` - Import statements
- `.function` - Function names
- `.string` - String literals
- `.comment` - Comments

### Adding a New Documentation Page (docs.html)

1. **Add HTML section:**
```html
<div class="page-section" id="page-new-section">
    <div class="content-island">
        <div class="breadcrumb">
            <a href="#" onclick="showPage('page-home'); return false;">Home</a>
            <span class="breadcrumb-separator">›</span>
            <span>New Section</span>
        </div>
        <h1>New Section Title</h1>
        <!-- Content here -->
    </div>
</div>
```

2. **Add navigation link:**
```html
<li><a href="#" onclick="showPage('page-new-section'); return false;" id="nav-new-section">New Section</a></li>
```

3. **Update showPage() function:**
```javascript
} else if (pageId === 'page-new-section') {
    document.getElementById('nav-new-section')?.classList.add('active');
    if (tocSidebar) tocSidebar.style.display = 'block';
    if (mainContent) mainContent.style.marginRight = '280px';
    if (fabContainer) fabContainer.style.right = '330px';
    if (tocMenu) {
        tocMenu.innerHTML = `
            <li><a href="#" onclick="scrollToTop(); return false;" data-level="1">Section Title</a></li>
            <li><a href="#subsection-1" data-level="2">Subsection 1</a></li>
            <li><a href="#subsection-2" data-level="2">Subsection 2</a></li>
        `;
    }
}
```

### CSS Modules Architecture

The Next.js components use CSS Modules for component-scoped styling:

**File Naming Convention:**
- CSS Module files use `.module.css` extension
- Named after their component: `ComponentName.module.css`
- Placed in the same directory as the component

**Import Pattern:**
```tsx
import styles from './ComponentName.module.css';
```

**Usage in JSX:**
```tsx
export default function MyComponent() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Hello</h1>
            <p className={styles.description}>Content here</p>
        </div>
    );
}
```

**Class Name Convention:**
- Use camelCase in CSS modules: `.myClassName`
- Access in JSX: `styles.myClassName`
- Next.js automatically generates unique class names to prevent conflicts

**When to Use CSS Modules vs globals.css:**
- **CSS Modules** - Component-specific styles (`.container`, `.button`, `.card`)
- **globals.css** - Theme variables, animations, global utilities, cloud styles, syntax highlighting

**Example Component with CSS Module:**

*app/components/Card.tsx*
```tsx
'use client';

import React from 'react';
import styles from './Card.module.css';

interface CardProps {
    title: string;
    children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
    return (
        <div className={styles.card}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <div className={styles.cardContent}>
                {children}
            </div>
        </div>
    );
}
```

*app/components/Card.module.css*
```css
.card {
    background: var(--bg-primary);
    border: 2px solid var(--border-color);
    border-radius: 16px;
    padding: 32px;
    transition: all 0.2s;
}

.card:hover {
    transform: translate(-6px, -6px);
    box-shadow: 6px 6px 0 var(--shadow);
}

.cardTitle {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--text-primary);
}

.cardContent {
    font-size: 16px;
    line-height: 1.6;
    color: var(--text-secondary);
}
```

### Responsive Design Best Practices

**Learned from Footer Spacing Issues:**

When reducing spacing on small screens in CSS Modules, the following approach works reliably:

1. **Use explicit margins instead of flexbox gap** - Flexbox `gap` property may not respond as expected in media queries
2. **Set `display: block`** on elements to ensure margins are applied correctly
3. **Use `margin-bottom` on child elements** instead of `gap` on parent containers
4. **Apply to specific elements** (`.footerColumn a`, `.footerText`) rather than generic selectors
5. **Include `line-height` control** to prevent unwanted vertical spacing

**Working Example (Footer.module.css @415px breakpoint):**
```css
@media (max-width: 415px) {
    .footerColumn {
        gap: 0;
        margin-bottom: 16px;
    }

    .footerTitle {
        font-size: 12px;
        margin-bottom: 6px;
    }

    .footerColumn a,
    .footerText {
        font-size: 12px;
        line-height: 1.2;
        margin-bottom: 2px;
        display: block;
    }
}
```

**Why This Works:**
- `gap: 0` disables flexbox spacing
- `margin-bottom` provides explicit, predictable spacing
- `display: block` ensures margins collapse correctly
- `line-height: 1.2` prevents excessive vertical spacing from font metrics

**What Doesn't Work:**
- Relying on flexbox `gap` changes in media queries
- Using `line-height` adjustments alone
- Using adjacent sibling selectors (`a + a`) with margins
- Over-using `!important` flags (use only when necessary for specificity)

### Updating Theme Colors

All colors are defined in CSS variables in `app/globals.css`:

```css
:root {
    --bg-primary: #FFFFFF;
    --text-primary: #000000;
    --primary-color: #A855F7;
    --border-color: #000000;
    --code-bg: #F5F5F5;
    /* etc. */
}

[data-theme="dark"] {
    --bg-primary: #000000;
    --text-primary: #FFFFFF;
    --border-color: #FFFFFF;
    --code-bg: #1A1A1A;
    /* etc. */
}
```

## Important Conventions

### CSS Conventions

**For Next.js Components (CSS Modules):**
- Use `.module.css` files co-located with components
- Use camelCase for class names in CSS modules
- Import as: `import styles from './Component.module.css'`
- Apply as: `className={styles.className}`
- Never use global class names in CSS modules unless wrapped in `:global()`

**For Static HTML Pages:**
- Use kebab-case for class names (`.content-island`, `.code-block-wrapper`)
- Keep styles embedded in `<style>` tags for self-containment

**Universal Conventions:**
- Use CSS variables for all colors (never hardcode colors except in variable definitions)
- Theme variants via `[data-theme="dark"]` selector in `app/globals.css`
- All shadows should be `transparent` except hard-edged drop shadows (`0 4px 0 rgba(0, 0, 0, 0.5)`)
- Border radius: 4px (small), 8px (medium), 12px (large mobile), 16px (islands)
- CSS properties alphabetically ordered within logical groups

### JavaScript Conventions

- Global functions (no modules or ES6 imports)
- Event listeners attached directly via onclick or addEventListener
- localStorage for theme persistence only
- No async/await or Promises (not needed for static content)
- Use optional chaining (`?.`) for safety when accessing DOM elements

### Code Style

- Indentation: 4 spaces
- HTML attributes on same line when possible
- CSS properties alphabetically ordered within logical groups
- JavaScript function declarations (not arrow functions for top-level functions)

## Business Context

**Product:** Kite - Infrastructure as Code language for multi-cloud deployments

**Company:** EchoStream SRL (Romanian company, EU-based)

**Pricing Model:**
- Free tier: Small companies (< 100 employees, < $1M revenue)
- Pro tier: $20/month (managed state, email support)
- Enterprise: Custom pricing (SSO, training, 24/7 support)

**License:** Fair Code (Sustainable Use License) - see LICENSE.html and LICENSE files

## Key Technical Decisions

### Why No Build Process?

- **Simplicity** - No npm install, no build step, no configuration
- **Portability** - Works on any static host (GitHub Pages, Netlify, Vercel, CDN)
- **Maintainability** - Single-maintainer project optimized for quick iterations
- **Performance** - No JavaScript bundle, minimal CSS, instant page loads

### Why Brutalist Design?

- **Brand differentiation** - Stands out from typical SaaS marketing sites
- **Developer appeal** - Technical, honest aesthetic matches IaC tool audience
- **Performance** - No heavy animations, effects, or complex CSS
- **Clarity** - High contrast ensures readability and accessibility

### Why Self-Contained HTML?

- **Reduced complexity** - No asset pipeline, no URL routing
- **Easy deployment** - Just push to git and serve static files
- **No cache issues** - Everything updates atomically when file changes
- **Works offline** - Each file can be saved and viewed locally

## Things to Avoid

- **Don't add build tools** (webpack, vite, etc.) - Keep files production-ready
- **Don't add npm dependencies** - Maintain zero-dependency architecture
- **Don't soften the brutalism** - No gradients, soft shadows, or excessive rounded corners
- **Don't change the primary color** - #A855F7 is the brand color
- **Don't add frameworks** - Keep vanilla JavaScript
- **Don't use styled-jsx or CSS-in-JS** - Use CSS modules for Next.js components, embedded `<style>` tags for static HTML
- **Don't use global class names in CSS modules** - Always use the `styles.className` pattern
- **Don't mix styling approaches** - CSS modules for Next.js, embedded styles for static HTML, globals.css for shared utilities
- **Don't use utility CSS frameworks** (Tailwind, etc.) - Maintain component-scoped styles

## Testing Checklist

When making changes, verify:

- [ ] Both light and dark themes display correctly
- [ ] Responsive design works at 900px, 1100px, 1400px breakpoints
- [ ] Code blocks have working copy buttons
- [ ] Navigation updates active states
- [ ] TOC highlights active section
- [ ] Theme toggle persists to localStorage
- [ ] Hamburger menu animates on mobile
- [ ] Reading progress bar updates on scroll
- [ ] All brutalist design principles maintained (2px borders, no soft shadows, etc.)

## Deployment

**No deployment commands needed** - Just push to git:

```bash
git push origin main
```

The hosting provider (likely GitHub Pages or Netlify) automatically deploys on push to main branch.

## Related Resources

- **STYLE_GUIDE.md** - Complete design system specifications
- **LICENSE** - Fair Code license text
- **LICENSE.html** - Legal terms with FAQ