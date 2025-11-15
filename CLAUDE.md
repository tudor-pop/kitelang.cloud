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
CLAUDE.md                       # This file - developer guidance and design system
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
   - **Active state highlighting**: Current page shown with subtle purple background (12% opacity)
   - **Hover states**: Non-active items get soft grey background (5% opacity), active item maintains purple background
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

The entire site follows a **brutalist design philosophy** with clean aesthetics featuring bold typography, high contrast, and minimal animations. The design emphasizes clarity and functional aesthetics with Material Design 3 purple accents.

### Design Philosophy

- **Clean brutalism**: Bold design with minimalist aesthetics and hard edges
- **Island-based layout**: Content separated into distinct bordered white sections
- **No soft shadows**: Flat design with only hard-edged drop shadows where needed
- **Neutral color palette**: Light slate-gray background (#F8FAFC) with white content islands
- **Minimal animations**: Simple transitions for essential feedback only
- **Colorful accents**: Yellow (#FDE047), Sky Blue (#7DD3FC), and Teal (#2DD4BF)
- **Bold typography**: Heavy font weights (900 for emphasis)
- **Roboto font family**: Modern, geometric typeface
- **Fully responsive**: Mobile-first with hamburger menu
- **System-aware dark mode**: With manual override capability
- **Material Design 3 purple**: #A855F7 as primary accent color
- **Component modularity**: Reusable components across pages to maintain consistency
- **DRY principle**: Don't Repeat Yourself - shared components for common UI elements

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

### Color Palette

#### Light Theme
```css
--bg-primary: #F8FAFC           /* Very light blue-gray background */
--bg-secondary: #E2E8F0         /* Light slate surfaces */
--bg-tertiary: #CBD5E1          /* Medium slate backgrounds */

--text-primary: #000000         /* Pure black text */
--text-secondary: #000000       /* Black secondary text */
--text-muted: #333333           /* Dark gray muted text */
--text-light: #666666           /* Medium gray light text */

--primary-color: #A855F7        /* Material Design 3 purple */
--primary-dark: #9333EA         /* Darker purple for hover states */
--primary-light: #C084FC        /* Lighter purple for accents */

--accent-blue: #7DD3FC          /* Sky blue accent */
--accent-yellow: #FDE047        /* Warm yellow accent */
--accent-teal: #2DD4BF          /* Turquoise accent */

--border-color: #000000         /* Black borders (brutalist) */
--border-color-strong: #000000  /* Black strong borders */

--code-bg: #F8FAFC              /* Very light blue-gray code background */
--code-text: #000000            /* Black code text */
--hover-bg: #FDE047             /* Yellow hover background */
--active-bg: #A855F7            /* Purple active state */

--shadow: #000000               /* Black hard shadows */
--shadow-strong: #000000        /* Black strong shadows */

--info-bg: #FEF9C3              /* Light yellow info background */
```

#### Dark Theme
```css
--bg-primary: #000000           /* Pure black background */
--bg-secondary: #1A1A1A         /* Very dark gray surfaces */
--bg-tertiary: #333333          /* Dark gray backgrounds */

--text-primary: #FFFFFF         /* Pure white text */
--text-secondary: #FFFFFF       /* White secondary text */
--text-muted: #CCCCCC           /* Light gray muted text */
--text-light: #999999           /* Medium gray light text */

--primary-color: #A855F7        /* Material Design 3 purple (consistent) */
--primary-dark: #9333EA         /* Darker purple hover */
--primary-light: #C084FC        /* Lighter purple accents */

--border-color: #FFFFFF         /* White borders for dark mode */
--border-color-strong: #FFFFFF  /* White strong borders */

--code-bg: #1A1A1A              /* Very dark code background */
--hover-bg: #A855F7             /* Purple hover in dark mode */
--active-bg: #A855F7            /* Purple active state */

--shadow: transparent           /* No shadows */
--shadow-strong: transparent    /* No strong shadows */

--info-bg: #FFF9E6              /* Same warm yellow (high contrast) */
```

#### Semantic Colors
- **Primary Purple**: `#A855F7` (Material Design 3 purple, used for all interactive elements)
- **Info/Accent Blue**: `#5BB4FF` (used for info boxes, reading progress)
- **Success Green**: `#10B981` (used for success states, copy confirmation)
- **Warning Amber**: `#F59E0B` (used in feature card icons)
- **Divider Gray**: `#666666` (used for section dividers)

#### Syntax Highlighting Colors

**Light Theme Syntax:**
```css
.keyword: #7C3AED   /* Dark purple */
.import: #0284C7    /* Dark blue */
.string: #059669    /* Dark green */
.comment: #6B7280   /* Gray */
.function: #0369A1  /* Dark cyan */
```

**Dark Theme Syntax:**
```css
.keyword: #C084FC   /* Light purple */
.import: #5BB4FF    /* Light blue */
.string: #34D399    /* Emerald */
.comment: #9CA3AF   /* Light gray */
.function: #60A5FA  /* Sky blue */
```

**System-aware dark mode:**
- Auto-detects `prefers-color-scheme: dark`
- User can override via toggle (saved to localStorage)
- All color transitions use `transition: 0.3s ease`

### Typography

**Font Families:**
```css
/* Body Text - Brutalist geometric sans-serif */
font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Code/Monospace - Clean monospace */
font-family: 'Roboto Mono', 'Consolas', monospace;

/* Content Links - Monospace for technical aesthetic */
font-family: 'Roboto Mono', 'Consolas', monospace;
font-size: 0.9em;

/* Sidebar Menu Links - Regular Roboto (NOT monospace) */
font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Footer Text - Monospace for technical aesthetic */
font-family: 'Roboto Mono', 'Consolas', monospace;
```

**Heading Scale:**
```css
h1 {
  font-size: 52px;
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.2;
  margin-bottom: 16px;
  color: var(--text-primary);
}

h2 {
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 1.3;
  margin-top: 32px;  /* Reduced from 64px for tighter spacing */
  margin-bottom: 16px;
  padding-bottom: 16px;
  scroll-margin-top: 24px;
}

h3 {
  font-size: 24px;
  font-weight: 600;
  /* Used in footer sections and feature cards */
}
```

**Body Text:**
```css
body {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}

p {
  font-size: 17px;
  line-height: 1.8;
  letter-spacing: 0.2px;
  margin-bottom: 24px;
}
```

**Bold Typography (Brutalist):**
```css
/* Logo text */
.logo-text {
  font-size: 32px;
  font-weight: 900;  /* Extra bold */
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* Version badge */
.version-badge {
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 1px;
}

/* FAB buttons */
.fab {
  font-weight: 900;
}

/* Copy button */
.copy-button {
  font-weight: 900;
}

/* Keyword syntax */
.keyword {
  font-weight: 700;
}
```

**Responsive Typography:**
```css
@media (max-width: 900px) {
  h1 { font-size: 36px; }
  h2 { font-size: 26px; }
}
```

### Spacing System

**Component Padding:**
```css
/* Content Island (Main) */
padding: 48px 56px;

/* Sidebars */
padding: 24px 0;  /* Left sidebar */

/* TOC Island */
padding: 24px;

/* Code Blocks */
padding: 30px;

/* Info Boxes */
padding: 24px 28px;

/* Footer */
padding: 48px;

/* Navigation Items */
padding: 10px 16px;

/* Small Elements */
padding: 8px 16px;  /* Edit info badge, copy button */
padding: 6px 12px;  /* Version badge */
padding: 3px 8px;   /* Inline code */
```

**Margins:**
```css
/* Content Islands */
margin: 24px 32px;  /* Standard island margin */

/* Heading Spacing */
margin-top: 32px;    /* h2 top margin (tighter spacing) */
margin-bottom: 16px; /* h1, h2 bottom */

/* Paragraph Spacing */
margin-bottom: 24px;

/* Edit Info Badge */
margin-bottom: 24px; /* Reduced from 40px for tighter spacing */

/* Code Blocks & Info Boxes */
margin: 30px 0;

/* Dividers */
margin: 48px 0;  /* Section divider */

/* Breadcrumbs */
margin-bottom: 32px;

/* TOC Right Sidebar */
padding: 16px 24px 24px 8px;  /* Tighter top padding (16px instead of 24px) */
```

**Gaps (Flexbox/Grid):**
```css
gap: 8px;   /* Small gaps (breadcrumb, logo) */
gap: 12px;  /* Medium gaps (feature cards links) */
gap: 15px;  /* FAB container */
gap: 24px;  /* Large gaps (grid layouts, feature cards) */
gap: 48px;  /* Extra large (main footer grid) */
```

**Base Unit:** 8px base unit: 8, 12, 16, 24, 32, 48, 56, 64

### Component Styles

**Island Pattern (Brutalist):**
```css
.content-island {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 48px 56px;
  margin: 24px 32px;
  border: 2px solid var(--border-color);  /* Bold 2px border */
  box-shadow: none;  /* No shadows in brutalism */
  transition: all 0.3s ease;
}

.content-island:hover {
  box-shadow: 0 12px 60px var(--shadow-strong);  /* Still no shadow (transparent) */
}
```

**Left Sidebar:**
```css
.left-sidebar {
  width: 280px;
  position: fixed;
  background: var(--bg-primary);
  border-right: 2px solid var(--border-color);  /* Bold border */
  transition: none;  /* No smooth transitions in brutalism */
}
```

**Right Sidebar (TOC):**
```css
.toc-island {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  border: 2px solid var(--border-color);  /* Bold border */
  box-shadow: none;  /* No shadow */
  position: sticky;
  top: 24px;
}
```

**Navigation Items:**
```css
.sidebar-menu a {
  display: block;
  padding: 8px 20px;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 400;
  transition: color 0.15s ease, background 0.15s ease;
  border-radius: 0;
  margin: 0;
  background: transparent;
  box-shadow: none;
}

.sidebar-menu a:hover {
  background: rgba(0, 0, 0, 0.05);  /* Light theme: soft grey */
  color: var(--text-primary);
}

[data-theme="dark"] .sidebar-menu a:hover {
  background: rgba(255, 255, 255, 0.05);  /* Dark theme: soft grey */
}

.sidebar-menu a.active {
  background: rgba(168, 85, 247, 0.12);  /* Subtle purple tint */
  color: var(--primary-color);
  font-weight: 500;
}

.sidebar-menu a.active:hover {
  background: rgba(168, 85, 247, 0.12) !important;  /* Purple stays same on hover */
  color: var(--primary-color);
}
```

**Code Blocks (Brutalist):**
```css
.code-block {
  background: var(--code-bg);
  border: none;  /* No border on code blocks */
  border-radius: 16px;
  padding: 30px;
  margin: 30px 0;
  box-shadow: 0 8px 30px var(--shadow-strong);  /* Transparent shadow */
  transition: all 0.3s ease;
}

.code-block:hover {
  border-color: var(--primary-light);
  box-shadow: 0 10px 40px var(--shadow-strong);  /* Transparent */
  transform: none;  /* No lift on hover (brutalist) */
}
```

**Info Boxes (Brutalist):**
```css
.info-box {
  background: var(--info-bg);
  border-left: 4px solid #5BB4FF;
  border-radius: 12px;
  padding: 24px 28px;
  margin: 30px 0;
  box-shadow: none;  /* No shadow */
  border: none;  /* No additional border */
  transition: none;  /* No transitions */
}

.info-box:hover {
  box-shadow: none;
  transform: none;  /* No lift */
}
```

**Floating Action Buttons (FAB) - Brutalist Style:**
```css
.fab {
  width: 50px;
  height: 50px;
  background: var(--primary-color);  /* Solid purple, no gradient */
  border-radius: 50%;
  border: 2px solid var(--border-color);  /* Bold black border */
  color: var(--bg-primary);
  font-size: 20px;
  font-weight: 900;  /* Extra bold */
  box-shadow: none;  /* No initial shadow */
  transition: box-shadow 0.2s ease;
  cursor: pointer;
}

.fab:hover {
  background: var(--primary-dark);
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.5);  /* Hard-edged drop shadow */
  transform: none;  /* No scale animation */
}
```

**Copy Button (Brutalist - Matches FAB):**
```css
.copy-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--primary-color);
  border: 2px solid var(--border-color);  /* Bold border */
  color: white;
  padding: 8px 16px;
  border-radius: 4px;  /* Minimal rounding */
  font-size: 13px;
  font-weight: 900;  /* Extra bold */
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  opacity: 0;
  z-index: 10;
  box-shadow: none;  /* No initial shadow */
}

.code-block-wrapper:hover .copy-button {
  opacity: 1;
}

.copy-button:hover {
  background: var(--primary-dark);
  box-shadow: 0 4px 0 rgba(0, 0, 0, 0.5);  /* Hard-edged shadow */
}

.copy-button:active {
  transform: none;  /* No scale animation */
}
```

**Feature Cards (No Borders):**
```css
.feature-card {
  background: #FAF5FF;  /* Light purple background */
  border: none;  /* No borders on feature cards */
  border-radius: 16px;
  padding: 32px;
}
```

### Borders and Shadows

**Border Strategy:**
```css
/* All islands and major components use 2px solid borders */
border: 2px solid var(--border-color);

/* No borders on specific elements */
border: none;  /* Code blocks, info boxes, feature cards */

/* Border colors */
--border-color: #000000;  /* Light theme - black */
--border-color: #FFFFFF;  /* Dark theme - white */
```

**Shadow Philosophy: No Shadows**
```css
/* All shadows are transparent in brutalism */
--shadow: transparent;
--shadow-strong: transparent;

/* Exception: Hard-edged drop shadows on hover */
box-shadow: 0 4px 0 rgba(0, 0, 0, 0.5);  /* FAB and copy button hover */

/* Reading progress indicator glow (functional, not decorative) */
box-shadow: 0 0 10px rgba(91, 180, 255, 0.5);
```

### Border Radius

**Border Radius Scale:**
```css
/* Minimal radius - almost square */
border-radius: 0;     /* Fully square (version badge) */
border-radius: 4px;   /* Copy button (minimal) */
border-radius: 8px;   /* Navigation items, inline code */
border-radius: 12px;  /* Info boxes */
border-radius: 16px;  /* Content islands, code blocks, feature cards */

/* Circular */
border-radius: 50%;   /* FAB buttons only */
border-radius: 20px;  /* Edit info badge (pill shape) */
```

**Border Strategy:**
- **0-4px**: Brutalist hard edges
- **8px**: Small interactive elements
- **12px**: Medium containers
- **16px**: Large content containers
- **50%**: Only for circular FAB buttons
- **20px+**: Pill shapes for badges

### Animations and Transitions

**Brutalist Animation Philosophy:**
- **Minimal animations**: No scale, no float, no complex transforms
- **Fast transitions**: 0.2s for most interactions
- **Hard edges**: No easing curves for shadows
- **Functional only**: Animations serve purpose, not decoration

**Component-Specific Transitions:**
```css
/* Standard Interactive Elements */
transition: all 0.2s;
transition: box-shadow 0.2s ease;  /* FAB and buttons */
transition: all 0.3s ease;  /* Islands */

/* NO transitions for brutalist elements */
transition: none;  /* Info boxes, brutalist content */

/* Sidebar Toggle */
transition: transform 0.3s;

/* Reading Progress */
transition: width 0.1s ease;
```

**Disabled Transforms:**
```css
/* No hover lifts in brutalism */
.code-block:hover {
  transform: none;  /* Was: translateY(-1px) */
}

.info-box:hover {
  transform: none;  /* No movement */
}

.fab:hover {
  transform: none;  /* Was: scale(1.1) */
}

.copy-button:active {
  transform: none;  /* Was: scale(0.95) */
}
```

### Special Features

**Custom Scrollbar:**
```css
.left-sidebar::-webkit-scrollbar {
  width: 6px;
}

.left-sidebar::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}

.left-sidebar::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 0;  /* Square scrollbar (brutalist) */
}

.left-sidebar::-webkit-scrollbar-thumb:hover {
  background: var(--primary-dark);
}
```

**Reading Progress Indicator:**
```css
.reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;  /* Updated via JavaScript */
  height: 3px;
  background: #5BB4FF;
  z-index: 1000;
  transition: width 0.1s ease;
  box-shadow: 0 0 10px rgba(91, 180, 255, 0.5);  /* Functional glow */
}
```

**Section Divider (Brutalist - Simplified):**
```css
.section-divider {
  height: 2px;  /* Thicker line */
  background: #666666;  /* Simple dark gray */
  margin: 48px 0;
  /* No gradient, no decorative elements */
}
```

**Theme Toggle System:**
- Auto-detects system preference: `prefers-color-scheme`
- Manual override saved to `localStorage`
- Smooth 0.3s transitions on color properties only
- Icon changes: 🌙 (light mode) ↔ ☀️ (dark mode)

**External Link Indicator:**
```css
a[href^="http"]::after,
a[href^="https://"]::after {
  content: '↗';
  font-size: 0.85em;
  margin-left: 4px;
  opacity: 0.6;
  transition: all 0.2s;
}

a[href^="http"]:hover::after {
  opacity: 1;
  transform: translate(2px, -2px);
}

/* Exceptions */
.breadcrumb a::after,
.sidebar-menu a::after,
.toc-menu a::after {
  content: none;
}
```

### Syntax Highlighting

**Inline Code:**
```css
code {
  background: rgba(0, 0, 0, 0.06);
  color: var(--primary-color);
  padding: 3px 8px;
  border-radius: 6px;
  font-family: 'Roboto Mono', 'Consolas', monospace;
  font-size: 0.9em;
  font-weight: 500;
}

[data-theme="dark"] code {
  background: rgba(255, 255, 255, 0.1);
}

/* Override in code blocks */
.code-block code {
  background: transparent;
  padding: 0;
  border-radius: 0;
  color: var(--code-text);
}

[data-theme="dark"] .code-block code {
  color: #FFFFFF;
}
```

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

**Breakpoint Strategy:**
```css
/* Desktop (Default) */
- Left sidebar visible: 280px
- Main content with margins
- Right TOC visible: 280px
- FAB positioned right: 330px

/* Large Tablet: max-width: 1400px */
@media (max-width: 1400px) {
  - Right sidebar hidden
  - Main content margin-right: 40px
  - FAB repositioned: right 40px
}

/* Tablet: max-width: 1100px */
@media (max-width: 1100px) {
  - Hamburger menu visible
  - Left sidebar: transform translateX(-100%)
  - Sidebar opens with .open class
  - Main content: margin-left: 0, margin-right: 16px
  - Content island: margin 24px 16px, padding 40px 32px
}

/* Mobile: max-width: 900px */
@media (max-width: 900px) {
  - All sidebars hidden
  - Hamburger menu visible
  - Main content: full width
  - Content island: margin 16px, padding 32px 20px
  - h1: 36px (from 52px)
  - h2: 26px (from 36px)
  - Footer: padding 32px 24px
  - FAB: right 20px
}

/* Small Mobile: max-width: 600px */
@media (max-width: 600px) {
  - Footer: 2-column grid
  - Further reduced content island margins (12px)
  - Smaller typography
}

/* Extra Small Mobile: max-width: 480px */
@media (max-width: 480px) {
  - Footer: single column
  - Buttons stack vertically on landing page
  - Reduced footer padding (32px 20px 20px)
}

/* Minimal Mobile: max-width: 415px */
@media (max-width: 415px) {
  - Footer: minimal spacing (margin-bottom: 2px on links)
  - Use explicit margins instead of flexbox gap
  - display: block on footer links for reliable spacing
  - line-height: 1.2 to control vertical rhythm
  - Content island: 8px padding
}
```

### Accessibility Features

1. **Semantic HTML**: Proper use of `<aside>`, `<main>`, `<nav>`, `<footer>`
2. **Scroll Margin**: `scroll-margin-top: 24px` on headings for anchor jumps
3. **Smooth Scrolling**: `scroll-behavior: auto` (brutalist preference)
4. **High Contrast**: WCAG AAA compliant with black/white text on backgrounds
5. **Keyboard Navigation**: All interactive elements are keyboard accessible
6. **Focus States**: Maintained through hover states
7. **No motion sickness**: Minimal animations reduce vestibular issues

### Implementation Notes

1. **CSS Variables**: All colors use CSS custom properties for easy theming
2. **Roboto Font Family**: Modern, geometric sans-serif for brutalist aesthetic
3. **Roboto Mono**: Used for code and footer (technical aesthetic)
4. **Dark Mode Strategy**: Full variable override, high contrast maintained
5. **No JavaScript for styles**: All styling is pure CSS
6. **Browser Support**: Modern browsers (CSS variables, grid, flexbox required)
7. **Material Design 3 Purple**: #A855F7 used consistently across all themes

### Key Brutalist Changes from Previous Design

**What Changed:**
1. **Removed all soft shadows** → Transparent shadows, hard-edged drop shadows only
2. **Removed gradients** → Solid colors (except hamburger menu legacy)
3. **Removed hover lifts** → `transform: none` on all elements
4. **Added bold borders** → 2px solid borders on all islands (later reduced to 1px for FAB/copy button)
5. **Removed borders from some elements** → Code blocks, info boxes, feature cards
6. **Increased font weights** → 900 for emphasis (logo, badges, buttons)
7. **Changed to Roboto** → From Inter to Roboto font family
8. **Added Roboto Mono to footer and content links** → Technical, monospace aesthetic (sidebar menu kept regular Roboto)
9. **Simplified divider** → From gradient with bullet to simple 2px gray line
10. **Made code blocks readable** → Light theme: #F8FAFC bg (same as page background), Dark theme: proper contrast
11. **Changed primary color** → From #7F52FF to Material Design 3 #A855F7
12. **Removed scale animations** → FAB and buttons no longer scale
13. **Square scrollbar** → Removed border-radius from scrollbar thumb
14. **Hard-edged copy button** → Matches FAB styling with 900 font-weight
15. **Rounded copy button** → Changed border-radius from 4px to 20px for pill shape
16. **Reduced button borders** → FAB and copy button borders from 2px to 1px for subtlety
17. **Tighter spacing** → h2 top margin from 64px to 32px, edit-info bottom margin from 40px to 24px
18. **Tighter TOC spacing** → Right sidebar top padding from 24px to 16px, toc-island sticky top from 24px to 8px
19. **Monospace content links** → All content links now use Roboto Mono at 0.9em for technical aesthetic
20. **Regular sidebar links** → Sidebar menu explicitly uses regular Roboto (not monospace)

**Design Philosophy Shift:**
- **From**: Glassmorphism, soft shadows, smooth animations, rounded corners
- **To**: Brutalism, high contrast, minimal animation, bold borders, functional design

### Quick Reference

**Most Common Values:**
- **Border**: `2px solid var(--border-color)`
- **Border Radius**: 4px (minimal), 8px (small), 16px (large)
- **Shadow**: `none` or `transparent` (brutalist)
- **Hard Shadow**: `0 4px 0 rgba(0, 0, 0, 0.5)` (FAB hover only)
- **Transition**: `box-shadow 0.2s ease` or `none`
- **Primary Color**: `#A855F7` (both themes)
- **Font Weight**: `400` (normal), `600` (semibold), `700` (bold), `900` (black)
- **Gap**: 8px (tight), 12px (normal), 24px (loose)
- **Padding**: 24px (compact), 32px (normal), 48px (spacious)

**Key CSS Classes:**
- `.content-island` - Main content container with 2px border
- `.code-block` - Code display, no border
- `.info-box` - Information callouts, no border
- `.fab` - Floating action buttons, hard-edged shadow on hover
- `.copy-button` - Code copy button, matches FAB style
- `.toc-island` - Table of contents, 2px border
- `.sidebar-menu` - Navigation menu
- `.section-divider` - Simple 2px gray line

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

- **LICENSE** - Fair Code license text
- **LICENSE.html** - Legal terms with FAQ
- now it is very important to always keep the styles of a component next to the component