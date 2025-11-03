# Kite Documentation - Style Guide

## Overview

The Kite documentation uses a **clean brutalist design system** featuring bold typography, high contrast, and minimal animations. The design emphasizes clarity and functional aesthetics with Material Design 3 purple accents on a light slate-gray background. The styling is built entirely with vanilla CSS using CSS custom properties for theming.

**Design Philosophy:**
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

---

## Color Palette

### Light Theme
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

### Dark Theme
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

### Semantic Colors
- **Primary Purple**: `#A855F7` (Material Design 3 purple, used for all interactive elements)
- **Info/Accent Blue**: `#5BB4FF` (used for info boxes, reading progress)
- **Success Green**: `#10B981` (used for success states, copy confirmation)
- **Warning Amber**: `#F59E0B` (used in feature card icons)
- **Divider Gray**: `#666666` (used for section dividers)

### Syntax Highlighting Colors

#### Light Theme Syntax
```css
.keyword: #7C3AED   /* Dark purple */
.import: #0284C7    /* Dark blue */
.string: #059669    /* Dark green */
.comment: #6B7280   /* Gray */
.function: #0369A1  /* Dark cyan */
```

#### Dark Theme Syntax
```css
.keyword: #C084FC   /* Light purple */
.import: #5BB4FF    /* Light blue */
.string: #34D399    /* Emerald */
.comment: #9CA3AF   /* Light gray */
.function: #60A5FA  /* Sky blue */
```

---

## Typography

### Font Families
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

### Heading Scale
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

### Body Text
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

### Bold Typography (Brutalist)
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

### Responsive Typography
```css
@media (max-width: 900px) {
  h1 { font-size: 36px; }
  h2 { font-size: 26px; }
}
```

---

## Spacing System

### Component Padding
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

### Margins
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

### Gaps (Flexbox/Grid)
```css
gap: 8px;   /* Small gaps (breadcrumb, logo) */
gap: 12px;  /* Medium gaps (feature cards links) */
gap: 15px;  /* FAB container */
gap: 24px;  /* Large gaps (grid layouts, feature cards) */
gap: 48px;  /* Extra large (main footer grid) */
```

---

## Component Styles

### Island Pattern (Brutalist)
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

### Left Sidebar
```css
.left-sidebar {
  width: 280px;
  position: fixed;
  background: var(--bg-primary);
  border-right: 2px solid var(--border-color);  /* Bold border */
  transition: none;  /* No smooth transitions in brutalism */
}
```

### Right Sidebar (TOC)
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

### Navigation Items
```css
.sidebar-menu a {
  display: block;
  padding: 10px 16px;
  color: var(--text-secondary);
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  margin: 2px 12px;
  box-shadow: none;
}

.sidebar-menu a:hover {
  background: rgba(127, 82, 255, 0.08);
  color: var(--primary-color);
}

.sidebar-menu a.active {
  background: rgba(127, 82, 255, 0.12);
  color: var(--primary-color);
  font-weight: 600;
}
```

### Code Blocks (Brutalist)
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

### Info Boxes (Brutalist)
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

### Floating Action Buttons (FAB) - Brutalist Style
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

### Copy Button (Brutalist - Matches FAB)
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

### Feature Cards (No Borders)
```css
.feature-card {
  background: #FAF5FF;  /* Light purple background */
  border: none;  /* No borders on feature cards */
  border-radius: 16px;
  padding: 32px;
}
```

---

## Borders and Shadows (Brutalist Approach)

### Border Strategy
```css
/* All islands and major components use 2px solid borders */
border: 2px solid var(--border-color);

/* No borders on specific elements */
border: none;  /* Code blocks, info boxes, feature cards */

/* Border colors */
--border-color: #000000;  /* Light theme - black */
--border-color: #FFFFFF;  /* Dark theme - white */
```

### Shadow Philosophy: **No Shadows**
```css
/* All shadows are transparent in brutalism */
--shadow: transparent;
--shadow-strong: transparent;

/* Exception: Hard-edged drop shadows on hover */
box-shadow: 0 4px 0 rgba(0, 0, 0, 0.5);  /* FAB and copy button hover */

/* Reading progress indicator glow (functional, not decorative) */
box-shadow: 0 0 10px rgba(91, 180, 255, 0.5);
```

---

## Border Radius (Hard Edges)

### Border Radius Scale
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

### Border Strategy
- **0-4px**: Brutalist hard edges
- **8px**: Small interactive elements
- **12px**: Medium containers
- **16px**: Large content containers
- **50%**: Only for circular FAB buttons
- **20px+**: Pill shapes for badges

---

## Animations and Transitions

### Brutalist Animation Philosophy
- **Minimal animations**: No scale, no float, no complex transforms
- **Fast transitions**: 0.2s for most interactions
- **Hard edges**: No easing curves for shadows
- **Functional only**: Animations serve purpose, not decoration

### Component-Specific Transitions
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

### Disabled Transforms
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

---

## Special Features

### Custom Scrollbar
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

### Reading Progress Indicator
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

### Section Divider (Brutalist - Simplified)
```css
.section-divider {
  height: 2px;  /* Thicker line */
  background: #666666;  /* Simple dark gray */
  margin: 48px 0;
  /* No gradient, no decorative elements */
}
```

### Theme Toggle System
- Auto-detects system preference: `prefers-color-scheme`
- Manual override saved to `localStorage`
- Smooth 0.3s transitions on color properties only
- Icon changes: 🌙 (light mode) ↔ ☀️ (dark mode)

### External Link Indicator
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

---

## Syntax Highlighting (Code)

### Theme-Specific Syntax Colors
```css
/* Light Theme - Darker colors for readability */
.keyword {
  color: #7C3AED;  /* Dark purple */
  font-weight: 700;
}

[data-theme="dark"] .keyword {
  color: #C084FC;  /* Light purple */
}

.import {
  color: #0284C7;  /* Dark blue */
  font-weight: 600;
}

[data-theme="dark"] .import {
  color: #5BB4FF;  /* Light blue */
}

.string {
  color: #059669;  /* Dark green */
}

[data-theme="dark"] .string {
  color: #34D399;  /* Emerald */
}

.comment {
  color: #6B7280;  /* Gray */
  font-style: italic;
}

[data-theme="dark"] .comment {
  color: #9CA3AF;  /* Light gray */
}

.function {
  color: #0369A1;  /* Dark cyan */
  font-weight: 600;
}

[data-theme="dark"] .function {
  color: #60A5FA;  /* Sky blue */
}
```

### Inline Code
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

---

## Design Patterns Summary

### Brutalist Design Principles
All design follows brutalist principles:
- **High contrast**: Black borders, bold typography, pure colors
- **No shadows**: Flat design with transparent shadows
- **Hard edges**: Minimal border radius, rectangular forms
- **Bold borders**: 2px solid borders on all islands
- **No gradients**: Solid colors only (except hamburger menu)
- **Heavy typography**: Font-weight 900 for emphasis
- **Functional aesthetics**: Design serves purpose, not decoration
- **Material Design 3 purple**: #A855F7 as sole accent color

### Island Design (Brutalist)
All major content sections are "islands" - bordered sections with:
- 16px border radius (compromise for usability)
- 2px solid black/white borders
- No shadows (box-shadow: none)
- No hover elevation effects
- White/black backgrounds (theme-dependent)

### Color Philosophy
- **Primary Purple**: #A855F7 (Material Design 3) for all interactive elements
- **Pure Black/White**: #000000 / #FFFFFF for maximum contrast
- **Neutral Grays**: Four levels of gray for text hierarchy
- **Accent Blue**: #5BB4FF for information and progress
- **No transparency**: Solid colors (except for hover states)

### Spacing Philosophy
- **8px Base Unit**: Multiples of 8 for most spacing
- **Progressive Scale**: 8, 12, 16, 24, 32, 48, 56, 64
- **Generous Whitespace**: Especially in content areas
- **2px Borders**: Consistent bold borders throughout

### Interaction Philosophy
- **Minimal feedback**: 0.2s transitions for essential changes only
- **No scale effects**: No transform scale animations
- **No lift effects**: No translateY hover animations
- **Hard shadows only**: 0 4px 0 rgba(0, 0, 0, 0.5) for FAB/button hovers
- **Functional only**: Animations serve purpose, not decoration

---

## Media Queries and Breakpoints

### Breakpoint Strategy
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
```

---

## Accessibility Features

1. **Semantic HTML**: Proper use of `<aside>`, `<main>`, `<nav>`, `<footer>`
2. **Scroll Margin**: `scroll-margin-top: 24px` on headings for anchor jumps
3. **Smooth Scrolling**: `scroll-behavior: auto` (brutalist preference)
4. **High Contrast**: WCAG AAA compliant with black/white text on backgrounds
5. **Keyboard Navigation**: All interactive elements are keyboard accessible
6. **Focus States**: Maintained through hover states
7. **No motion sickness**: Minimal animations reduce vestibular issues

---

## Implementation Notes

1. **CSS Variables**: All colors use CSS custom properties for easy theming
2. **Roboto Font Family**: Modern, geometric sans-serif for brutalist aesthetic
3. **Roboto Mono**: Used for code and footer (technical aesthetic)
4. **Dark Mode Strategy**: Full variable override, high contrast maintained
5. **No JavaScript for styles**: All styling is pure CSS
6. **Browser Support**: Modern browsers (CSS variables, grid, flexbox required)
7. **Material Design 3 Purple**: #A855F7 used consistently across all themes

---

## Key Brutalist Changes from Previous Design

### What Changed
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

### Design Philosophy Shift
- **From**: Glassmorphism, soft shadows, smooth animations, rounded corners
- **To**: Brutalism, high contrast, minimal animation, bold borders, functional design

---

## Quick Reference

### Most Common Values
- **Border**: `2px solid var(--border-color)`
- **Border Radius**: 4px (minimal), 8px (small), 16px (large)
- **Shadow**: `none` or `transparent` (brutalist)
- **Hard Shadow**: `0 4px 0 rgba(0, 0, 0, 0.5)` (FAB hover only)
- **Transition**: `box-shadow 0.2s ease` or `none`
- **Primary Color**: `#A855F7` (both themes)
- **Font Weight**: `400` (normal), `600` (semibold), `700` (bold), `900` (black)
- **Gap**: 8px (tight), 12px (normal), 24px (loose)
- **Padding**: 24px (compact), 32px (normal), 48px (spacious)

### Key CSS Classes
- `.content-island` - Main content container with 2px border
- `.code-block` - Code display, no border
- `.info-box` - Information callouts, no border
- `.fab` - Floating action buttons, hard-edged shadow on hover
- `.copy-button` - Code copy button, matches FAB style
- `.toc-island` - Table of contents, 2px border
- `.sidebar-menu` - Navigation menu
- `.section-divider` - Simple 2px gray line

---

## Next.js Component Architecture

### Project Migration (docs.html → Next.js)

The documentation has been migrated from a static HTML file (`docs.html`) to a **Next.js 16** application using the App Router. The original single-file architecture has been refactored into reusable React components.

### Component Structure

```
kitelang/app/docs/
├── page.tsx                    # Main orchestrator (client component)
├── MainContent.tsx             # All page content sections (client component)
├── Sidebar.tsx                 # Left navigation sidebar (client component)
├── TableOfContents.tsx         # Right TOC sidebar (client component)
├── Footer.tsx                  # Page footer with dynamic year (client component)
├── EditInfo.tsx                # "Updated on" badge (client component)
├── docs.css                    # Global styles and theme variables
├── utils/
│   └── getPageLastModified.ts  # Git utility for fetching modification dates (server-side)
└── api/
    └── page-dates/
        └── route.ts            # API endpoint for dynamic dates (server component)
```

### Component Responsibilities

#### page.tsx
- **Client Component** (`'use client'`)
- Main orchestrator for state management
- Handles theme toggling, sidebar visibility, page navigation
- Manages reading progress, TOC content, copy status
- Fetches dynamic page dates from API on mount
- Passes props to child components

#### MainContent.tsx
- **Client Component** (`'use client'`)
- Contains all page content sections (Home, Overview, Basics, Basic Syntax)
- Receives `pageDates` prop and passes to EditInfo components
- Includes Footer component
- Uses `<style jsx global>` for extensive nested content styles (777 lines)

#### Sidebar.tsx
- **Client Component** (`'use client'`)
- Left navigation menu with expandable sections
- Logo, version badge, navigation links
- Responsive hamburger menu integration
- Uses `<style jsx>` for scoped styles (267 lines)

#### TableOfContents.tsx
- **Client Component** (`'use client'`)
- Right sidebar with "On this page" navigation
- Conditionally rendered based on `show` prop
- Island design with hover effects
- Uses `<style jsx>` for scoped styles (118 lines)

#### Footer.tsx
- **Client Component** (`'use client'`)
- Footer with links and copyright
- Dynamic year calculation: `new Date().getFullYear()`
- Uses `<style jsx>` for scoped styles (135 lines)

#### EditInfo.tsx
- **Client Component** (`'use client'`)
- Displays "Updated on [date]" badge
- Receives date as prop (dynamically fetched from git)
- Calendar emoji (📅) prefix
- Uses `<style jsx>` for scoped styles (37 lines)

### Dynamic Date System

The documentation pages display their last modification date from git history:

#### How It Works

1. **Client Request** (`page.tsx`)
   - On component mount, fetches from `/api/page-dates`
   - Stores dates in state with fallback: `'January 2025'`

2. **API Route** (`app/api/page-dates/route.ts`)
   - Server-side endpoint using Next.js Route Handlers
   - Calls `getAllPageDates()` utility function
   - Returns JSON with page ID → date mapping

3. **Git Utility** (`utils/getPageLastModified.ts`)
   - **Server-side only** (uses Node.js `execSync`)
   - Maps page IDs to file paths: `'page-home' → 'kitelang/app/docs/MainContent.tsx'`
   - Executes: `cd .. && git log -1 --format=%cd --date=format:%B\ %Y [filepath]`
   - Returns formatted date string (e.g., "January 2025")
   - Falls back to "January 2025" if git command fails

4. **Rendering** (EditInfo components)
   - MainContent passes `pageDates[pageId]` to each EditInfo
   - Displays: "Updated on [dynamic date from git]"

#### Git Date Extraction

```typescript
// File: utils/getPageLastModified.ts
const gitCommand = `cd .. && git log -1 --format=%cd --date=format:%B\\ %Y ${filePath}`;
const lastModified = execSync(gitCommand, {
    encoding: 'utf-8',
    shell: '/bin/bash'
}).trim();
```

**Why `cd ..`?** The Next.js app runs from `/kitelang` directory, but git root is parent directory (`/Users/mimedia/IdeaProjects/kitelang.cloud`).

### Styling Architecture

#### CSS-in-JS with styled-jsx

All components use Next.js's built-in `styled-jsx` for component-scoped styles:

```tsx
<style jsx>{`
  .component-class {
    /* scoped styles */
  }
`}</style>
```

**Scoped vs Global:**
- **Scoped** (`<style jsx>`): Most components (Sidebar, TableOfContents, Footer, EditInfo)
- **Global** (`<style jsx global>`): MainContent only (due to complex nested HTML)

**Accessing child elements:**
```css
:global(.footer-section h4) {
  /* Styles child elements within scoped component */
}
```

**Dark theme support:**
```css
:global([data-theme="dark"]) .component {
  /* Dark theme overrides */
}
```

#### Global Styles (docs.css)

Contains:
- CSS custom properties (theme variables)
- Body and root styles
- Global resets
- Theme switching logic
- Shared utilities (breadcrumbs, hamburger menu, FAB, reading progress)

**Does NOT contain:**
- Component-specific styles (moved to component files)

### Component Props Reference

```typescript
// page.tsx → MainContent
interface MainContentProps {
  activePage: string;
  onShowPage: (pageId: string) => void;
  onCopyCode: (code: string, blockId: string) => void;
  copyStatus: { [key: string]: boolean };
  contentRef: React.RefObject<HTMLElement>;
  showToc: boolean;
  pageDates: Record<string, string>; // NEW: dynamic dates
}

// page.tsx → Sidebar
interface SidebarProps {
  isOpen: boolean;
  expandedMenus: { [key: string]: boolean };
  onToggleMenu: (menuKey: string) => void;
  onShowPage: (pageId: string) => void;
}

// page.tsx → TableOfContents
interface TableOfContentsProps {
  content: React.ReactNode;
  show: boolean;
}

// MainContent → EditInfo
interface EditInfoProps {
  date: string; // Dynamic date from git
}
```

### Key Implementation Details

1. **All components are client components** (`'use client'`) due to interactivity requirements
2. **Styles co-located with components** for easier maintenance and identification
3. **Dynamic year in Footer**: `new Date().getFullYear()` (no hardcoded year)
4. **Dynamic dates in EditInfo**: Fetched from git via API route
5. **API route is server-side**: Uses Node.js APIs (execSync) unavailable in client
6. **Fallback handling**: If git fails, falls back to "January 2025"
7. **Single source of truth**: All page content lives in MainContent.tsx

### Migration Benefits

- **Component reusability**: Each piece can be used independently
- **Better maintainability**: Styles co-located with components
- **Type safety**: TypeScript interfaces for all props
- **Modern architecture**: Next.js 16 with App Router
- **Dynamic content**: Git-based modification dates
- **Scoped styles**: No CSS conflicts between components

### Future Considerations

- Components are ready for extraction to separate pages
- Easy to add new documentation pages (just add to MainContent)
- Git utility can be extended to track individual page files (not just MainContent.tsx)
- API route can be cached for better performance
- Consider moving to Server Components for static pages (if interactivity is reduced)

---

**Document Version**: 2.1 (Brutalist + Next.js Components)
**Last Updated**: January 2025
**Based on**: Next.js 16 component architecture with styled-jsx
**Primary Color**: Material Design 3 Purple (#A855F7)
**Design Philosophy**: Brutalism with high contrast and minimal decoration
**Framework**: Next.js 16 (App Router) + TypeScript + styled-jsx