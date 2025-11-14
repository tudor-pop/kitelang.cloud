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
- **Component modularity**: Reusable components across pages to maintain consistency
- **DRY principle**: Don't Repeat Yourself - shared components for common UI elements

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

## Docs Page Grid Layout - CRITICAL DOCUMENTATION

### DO NOT CHANGE THIS LAYOUT

**IMPORTANT**: The layout structure below has been finalized after extensive testing and debugging. Modifying this layout will cause scrolling issues, z-index problems, and layout breakage. If you need to make changes to the docs page, you MUST preserve this exact structure.

### Container Grid Structure

```css
/* File: app/docs/docs.css */
.body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    height: 100vh;
    width: 100vw;
    overflow: hidden;  /* CRITICAL: No body scroll */
}

.container {
    display: grid;
    grid-template-columns: 280px 1fr 280px;  /* FIXED: left sidebar | main content | right TOC */
    grid-template-rows: 1fr auto;
    grid-template-areas:
        'side main right'
        'side footer footer';
    gap: 0;
    width: 100vw;      /* CRITICAL: Full viewport width */
    max-width: 100%;   /* CRITICAL: Prevents overflow */
    height: 100vh;
    position: relative;
    z-index: 1;
    /* NO overflow property - allows grid to work */
}
```

### Component-Specific Styles

#### Left Sidebar (Sidebar.module.css)
```css
.leftSidebar {
    width: 280px;                    /* FIXED WIDTH */
    grid-area: side;                 /* Grid placement */
    position: sticky;                /* STICKY, not fixed */
    top: 72px;                       /* Below global topbar */
    height: calc(100vh - 72px);      /* Full height minus topbar */
    overflow-y: auto;                /* Internal scroll */
    align-self: start;               /* Aligns to top of grid cell */
    z-index: 100;                    /* Above main content */
}
```

#### Main Content (MainContent.module.css)
```css
.mainContent {
    grid-area: main;                 /* Grid placement */
    height: 100%;                    /* CRITICAL: Fill grid cell */
    overflow-y: auto;                /* ONLY scrollable area */
    overflow-x: hidden;
    max-width: 100%;                 /* Prevents horizontal overflow */
    z-index: 1;                      /* Below sidebars */
}

:global(.content-island) {
    padding: 48px;                   /* RESTORED: Do not set to 0 */
    margin: 32px auto;               /* RESTORED: Do not set to 0 */
    width: 100%;
    box-sizing: border-box;
}
```

#### Right TOC Sidebar (TableOfContents.module.css)
```css
.rightSidebar {
    grid-area: right;                /* Grid placement */
    position: sticky;                /* STICKY, not fixed */
    top: 72px;                       /* Below global topbar */
    max-height: calc(100vh - 72px - 100px);  /* Leave space at bottom */
    overflow-y: auto;                /* Internal scroll for long TOCs */
    z-index: 20;                     /* CRITICAL: Above main content */
    align-self: start;               /* Aligns to top of grid cell */
}
```

### Scrolling Behavior - How It Works

1. **Body Level** (`overflow: hidden`)
   - NO scrolling at body level
   - Prevents double-scroll issues
   - Forces all scrolling to happen within grid children

2. **Container Level** (NO overflow property)
   - Grid layout needs to flow naturally
   - No overflow property allows grid to size correctly
   - Width: `100vw` with `max-width: 100%` prevents horizontal overflow

3. **Left Sidebar** (`overflow-y: auto`)
   - Independent vertical scroll
   - Only scrolls menu items
   - Sticky positioning keeps it visible

4. **Main Content** (`overflow-y: auto`)
   - PRIMARY scroll area
   - Only this area scrolls page content
   - `height: 100%` fills grid cell completely

5. **Right TOC** (`overflow-y: auto`)
   - Independent vertical scroll
   - Only scrolls TOC items when list is long
   - Sticky positioning keeps it visible

### Z-Index Hierarchy

```
100  - Left Sidebar (above all content)
20   - Right TOC (above main content)
1    - Main Content (base layer)
1    - Container (base layer)
```

**Why TOC needs z-index 20**: Prevents main content from overlaying TOC when scrolling. Without this, gray areas would appear to cover the TOC.

### Common Mistakes to Avoid

❌ **DON'T**: Change grid columns from `280px 1fr 280px`
- Result: Layout breaks, content doesn't fill width

❌ **DON'T**: Change container width from `100vw` to `100%`
- Result: Container doesn't fill full body width

❌ **DON'T**: Add `overflow: hidden` to container
- Result: TOC gets cut off, appears covered by gray area

❌ **DON'T**: Remove `overflow: hidden` from body
- Result: Double scrolling - both body and main content scroll

❌ **DON'T**: Change main content height from `100%` to `min-height: 100%`
- Result: Double scrolling, layout height issues

❌ **DON'T**: Remove padding/margin from `.content-island`
- Result: Content touches edges, poor visual spacing

❌ **DON'T**: Change sidebars from `position: sticky` to `position: fixed`
- Result: Sidebars not part of grid, layout breaks

❌ **DON'T**: Lower TOC z-index below 20
- Result: Main content overlays TOC, appears covered

### Layout Benefits

✅ Prevents double scrolling
✅ Sidebars stay visible during content scroll
✅ Clean separation of scrollable regions
✅ Proper z-index stacking for interaction
✅ Full-width container fills viewport
✅ Responsive grid layout
✅ No horizontal overflow issues

### Testing Checklist

When modifying docs page, verify:

- [ ] No double scrolling (body should NOT scroll)
- [ ] Main content scrolls smoothly
- [ ] Left sidebar stays fixed when content scrolls
- [ ] Right TOC stays fixed when content scrolls
- [ ] TOC is fully interactive (not covered by anything)
- [ ] Container fills full width of viewport
- [ ] No horizontal scrollbar appears
- [ ] Content islands have proper padding/margin
- [ ] All three columns visible on desktop
- [ ] Responsive behavior works at breakpoints

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

## Component Modularity and Reusability

### Why Component Modularity Matters

**Modularity is CRITICAL** for maintaining a consistent, scalable codebase. Instead of duplicating code across pages, we extract common UI elements into shared components. This approach provides:

1. **Single Source of Truth**: Update once, apply everywhere
2. **Consistency**: Same look and feel across all pages
3. **Maintainability**: Easier to debug and update
4. **DRY Principle**: Don't Repeat Yourself - reduces code duplication
5. **Testability**: Isolated components are easier to test
6. **Scalability**: Easy to add new pages without rebuilding common elements

### Shared Components Directory

**Location**: `/app/components/`

All reusable components that appear on multiple pages should live here:

```
kitelang/app/components/
├── Footer.tsx          # Shared footer across all pages
├── TopBar.tsx          # (Future) Shared navigation bar
└── Button.tsx          # (Future) Reusable button component
```

### Case Study: Footer Component

#### Problem (Before)
- Footer duplicated on homepage (`app/page.tsx`)
- Footer duplicated on docs (`app/docs/Footer.tsx`)
- Footer duplicated on pricing (`app/pricing/page.tsx`)
- Any change required updating 3 separate files
- Inconsistent styling and content across pages

#### Solution (After)
- Created `/app/components/Footer.tsx`
- All pages import from shared component:
  ```tsx
  import Footer from '../components/Footer';
  // or
  import Footer from './components/Footer';
  ```
- Single file to update for all pages
- Guaranteed consistency

#### Benefits Achieved
- **Lines of code saved**: ~120 lines × 2 = 240 lines eliminated
- **Update time**: From 3 edits down to 1 edit
- **Bug risk**: Reduced from 3× to 1×
- **Consistency**: 100% guaranteed across all pages

### Top Navigation Bar Pattern

All pages (landing, docs, pricing) share the same top bar with:
- Logo + version badge (links to homepage)
- 5 navigation buttons: Documentation, Features, Pricing, GitHub, Theme Toggle
- Active state highlighting for current page
- Fixed positioning at top (70px height)
- Dark mode support

#### Implementation Guideline
When adding a new page, reuse the same top bar structure:

```tsx
<nav className="top-bar">
  <div className="logo">
    <Link href="/" ...>
      <span className="logo-text">Kite</span>
      <span className="version-badge">v0.0.2</span>
    </Link>
  </div>
  <div className="nav-buttons">
    <Link href="/docs" className="nav-button {active}">Documentation</Link>
    <Link href="/#features" className="nav-button">Features</Link>
    <Link href="/pricing" className="nav-button">Pricing</Link>
    <a href="https://github.com/...">GitHub</a>
    <button onClick={toggleTheme}>...</button>
  </div>
</nav>
```

**Future Improvement**: Extract to `/app/components/TopBar.tsx`

### Button Hover Effects Pattern

All secondary buttons (transparent with border) follow the same hover behavior:

```css
.secondary-button {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-color);
}

.secondary-button:hover {
  /* NO background color change */
  /* NO text color change */
  transform: translate(-4px, -4px);
  box-shadow: 4px 4px 0 var(--border-color);
}
```

**Key Learning**: Don't change colors on hover for secondary buttons. Only transform and add shadow.

### Color Consistency Across Pages

#### CSS Variables (Shared)
All pages must use the same CSS custom properties defined in the design system:

```css
:root {
  --bg-primary: #FFFFFF;
  --bg-secondary: #F5F5F5;
  --text-primary: #000000;
  --primary-color: #A855F7;
  --border-color: #000000;
  /* ... */
}

[data-theme="dark"] {
  --bg-primary: #000000;
  --bg-secondary: #1A1A1A;
  --text-primary: #FFFFFF;
  --border-color: #FFFFFF;
  /* ... */
}
```

#### Same Primary Color Everywhere
- **Homepage hero button**: `background: var(--primary-color)`
- **Pricing "Popular" badge**: `background: var(--primary-color)`
- **Docs active nav item**: `color: var(--primary-color)`
- **Code syntax highlighting**: Uses derived colors from primary

### Grid Layout Patterns

Use consistent grid layouts across all pages for similar content:

#### 4-Column Footer Grid
```css
.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

#### 3-Column Feature/Pricing Grid
```css
.features-grid, .pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

@media (max-width: 1200px) {
  grid-template-columns: 1fr;
}
```

### Lessons Learned from Session

#### 1. Flexbox vs Grid for Layout
- **Use Flexbox** for simple directional layouts (top bar, button groups)
- **Use Grid** for complex multi-column layouts (feature cards, pricing cards, footer)
- **Don't overcomplicate**: Fixed-position sidebars don't need to be in grid

#### 2. Positioning Strategy
- **Fixed position** elements (top bar, sidebars, FAB) stay outside main layout flow
- **Use margins** on main content to create space for fixed elements
- **Don't use overlays** unless intentional (like modal dialogs)

#### 3. When to Extract a Component
Extract when:
- ✅ Element appears on 2+ pages
- ✅ Element is self-contained with clear purpose
- ✅ Element has 30+ lines of code
- ✅ Element might be reused in future

Don't extract if:
- ❌ Element is page-specific
- ❌ Element is deeply coupled to page state
- ❌ Element is < 10 lines of simple HTML

#### 4. Theme Support in Components
Every component must support dark mode:

```tsx
<style jsx>{`
  .component {
    background: var(--bg-primary);
    color: var(--text-primary);
  }

  :global([data-theme="dark"]) .component {
    /* Dark overrides if needed */
  }
`}</style>
```

#### 5. Component File Structure
```tsx
'use client';  // If uses hooks/interactivity

import React from 'react';
import Link from 'next/link';  // For internal links

export default function ComponentName() {
  return (
    <>
      <div className="component">
        {/* JSX */}
      </div>

      <style jsx>{`
        /* Scoped styles */
      `}</style>
    </>
  );
}
```

### Checklist: Adding a New Page

When creating a new page, ensure:

- [ ] Import and use shared `Footer` component
- [ ] Use same top bar structure (or shared TopBar component)
- [ ] Use CSS variables for all colors (`var(--primary-color)`)
- [ ] Support dark mode with `[data-theme="dark"]` selectors
- [ ] Match brutalist design (2px borders, no soft shadows)
- [ ] Use grid for multi-column layouts (features, pricing)
- [ ] Use same button hover effects (transform + box-shadow only)
- [ ] Test responsive breakpoints (768px, 1200px)
- [ ] Fixed top bar height: 70px
- [ ] Main content: `margin-top: 70px`

### Anti-Patterns to Avoid

❌ **Don't copy-paste entire components**
```tsx
// BAD: Duplicating footer on every page
<footer>...</footer>  // page.tsx
<footer>...</footer>  // pricing/page.tsx
<footer>...</footer>  // docs/page.tsx
```

✅ **Do import shared component**
```tsx
// GOOD: Single source of truth
import Footer from '../components/Footer';
<Footer />
```

❌ **Don't hardcode colors**
```css
background: #A855F7;  /* BAD */
```

✅ **Do use CSS variables**
```css
background: var(--primary-color);  /* GOOD */
```

❌ **Don't use different hover effects per page**
```css
/* BAD: Homepage button lifts, Pricing button doesn't */
```

✅ **Do use consistent hover effects**
```css
/* GOOD: All secondary buttons behave identically */
.secondary-button:hover {
  transform: translate(-4px, -4px);
  box-shadow: 4px 4px 0 var(--border-color);
}
```

### Component Naming Conventions

- **PascalCase** for component files: `Footer.tsx`, `TopBar.tsx`
- **kebab-case** for CSS classes: `.footer-content`, `.top-bar`
- **camelCase** for CSS variables: `--primaryColor` ❌ NO, use `--primary-color` ✅
- **Descriptive names**: `Button.tsx` ❌ too generic, `PrimaryButton.tsx` ✅ specific

### Documentation for New Components

When creating a shared component, document:

1. **Purpose**: What does it do?
2. **Props**: What parameters does it accept?
3. **Usage**: How to import and use it?
4. **Dependencies**: What other components/utils does it need?
5. **Styling**: Does it support dark mode?

Example:
```tsx
/**
 * Footer Component
 *
 * Purpose: Shared footer with 4-column grid layout and company info
 * Props: None (static content)
 * Usage: import Footer from '@/components/Footer'; <Footer />
 * Dependencies: None
 * Styling: Supports dark mode via [data-theme="dark"]
 */
export default function Footer() { ... }
```

---

## Landing Page (app/page.tsx)

### Architecture Overview

The landing page (`/`) is a Next.js 16 page showcasing Kite with:
- Hero section with interactive code block
- Feature highlights
- Call-to-action buttons
- Decorative cloud background animations
- Shared footer component

### Interactive Code Block Component

**Location**: `/app/components/InteractiveCodeBlock.tsx`

The landing page features a custom syntax-highlighted code block with tabbed navigation:

#### Features
- **6 code example tabs**: Resources, Decorators, Components, Multi-Cloud, Mixins, Renaming
- **Custom Kite language syntax highlighting**:
  - Keywords (purple): `package`, `import`, `resource`, `component`, `mixin`, `on`, `fun`, `val`, `input`, `output`
  - Built-in types (blue): `string`, `int`, `float`, `double`, `boolean`
  - Decorators (orange): `@count`, `@region`
  - String interpolation: Green strings with orange `${}` delimiters and white variable names
  - Numbers (cyan): `#06B6D4`
  - Comments (gray): Both `//` and `#` syntax supported
  - Functions and identifiers with optional tooltips
- **Horizontal text wrapping**: `white-space: pre-wrap` - code wraps naturally
- **Copy to clipboard**: Copy button for each code example
- **Theme-aware**: Adapts to light/dark theme automatically

#### Implementation Details

```typescript
// Custom tokenization with string interpolation support
if (lineText[pos] === '"' || lineText[pos] === "'") {
  const quote = lineText[pos];
  // ... parse string with ${variable} and $variable interpolation
  // String parts: green (#10B981)
  // ${} delimiters: orange (#D97706)
  // Variable names: white
}
```

**Syntax Highlighting Colors**:
```css
.keyword { color: #A855F7; font-weight: 600; }  /* Purple */
.type { color: #3B82F6; font-weight: 600; }     /* Blue */
.decorator { color: #D97706; }                   /* Orange */
.interpolation { color: #D97706; }               /* Orange */
.string { color: #10B981; }                      /* Green */
.number { color: #06B6D4; }                      /* Cyan */
.comment { color: #6B7280; }                     /* Gray */
```

**Tooltips**: Uses `data-tooltip` attribute with CSS `::before` pseudo-elements
```tsx
<span className="has-tooltip" data-tooltip="index will be: 0, 1, 2, ..., n">
  index
</span>
```

```css
.has-tooltip {
  position: relative;
  border-bottom: 1px dotted;
  cursor: help;
}

.has-tooltip::before {
  content: attr(data-tooltip);
  position: absolute;
  white-space: pre-line;
  /* positioning and styling */
}
```

### Decorative Cloud Background

**Implementation**: CSS pseudo-elements technique in `app/page.tsx`

#### Cloud Structure
- **3 clouds** with varied sizes (large: 180px, small: 100px, medium: 145px)
- Created using CSS pseudo-elements: `::before` and `::after`
- Main body: Elongated oval with `border-radius: 100px`
- `::before`: Smaller circular bump on left
- `::after`: Larger circular bump on right

#### Cloud CSS Pattern
```css
.cloud {
  position: absolute;
  border-radius: 100px;
  opacity: 0.15;
}

.cloud::before,
.cloud::after {
  content: '';
  position: absolute;
  border-radius: 50%;
}

.cloud-1 {
  width: 180px;
  height: 50px;
  background: var(--text-primary);  /* Black in light, white in dark */
  top: 15%;
  left: 10%;
  animation: float 35s infinite ease-in-out;
}

.cloud-1::before {
  width: 70px;
  height: 70px;
  background: var(--text-primary);
  top: -35px;
  left: 25px;
}

.cloud-1::after {
  width: 95px;
  height: 85px;
  background: var(--text-primary);
  top: -43px;
  right: 28px;
}
```

#### Animation
```css
@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); }
  25% { transform: translateY(-20px) translateX(10px); }
  50% { transform: translateY(0) translateX(20px); }
  75% { transform: translateY(20px) translateX(10px); }
}
```

#### Key Principles
- **Theme-aware**: Uses `var(--text-primary)` for automatic light/dark adaptation
- **Subtle**: 15% opacity for non-intrusive background effect
- **Varied speeds**: Different animation durations (35s, 40s, 38s) and delays (0s, 5s, 10s)
- **Vertical distribution**: Positioned at 15%, 50%, and 80% of viewport height
- **Z-index layering**: `z-index: 0` (clouds), `z-index: 1` (content), `z-index: 100` (top bar)
- **Non-interactive**: `pointer-events: none` to avoid blocking clicks
- **Random sizes**: Large (180px), small (100px), medium (145px) for natural appearance

### Landing Page Layout

```tsx
<div className="landing-page">
  {/* Decorative Clouds (z-index: 0) */}
  <div className="clouds-container">
    <div className="cloud cloud-1"></div>
    <div className="cloud cloud-2"></div>
    <div className="cloud cloud-3"></div>
  </div>

  {/* Top Navigation Bar (z-index: 100) */}
  <nav className="top-bar">...</nav>

  {/* Hero Section (z-index: 1) */}
  <section className="hero">
    <h1>Infrastructure as Code for the Multi-Cloud Era</h1>
    <InteractiveCodeBlock />
    <div className="cta-buttons">
      <Link href="/docs">Get Started</Link>
      <Link href="/#features">Learn More</Link>
    </div>
  </section>

  {/* Features Section */}
  <section className="features">...</section>

  {/* Footer */}
  <Footer />
</div>
```

### Landing Page Styling Notes

- **Full-width sections**: Hero and features span full viewport width
- **Content islands**: Not used on landing page (docs.html pattern only)
- **Gradient backgrounds**: Feature cards use subtle purple tints
- **CTA buttons**: Primary (filled purple) and secondary (transparent with border)
- **Responsive**: Mobile-first with breakpoints at 768px and 1200px

---

**Document Version**: 2.3 (Brutalist + Component Modularity + Landing Page)
**Last Updated**: January 2025
**Based on**: Next.js 16.0.1 + TypeScript 5.9.3 + React 19.2.0 + Node.js 24 LTS
**Primary Color**: Material Design 3 Purple (#A855F7)
**Design Philosophy**: Brutalism with high contrast and minimal decoration
**Framework**: Next.js 16 (App Router) + TypeScript + styled-jsx