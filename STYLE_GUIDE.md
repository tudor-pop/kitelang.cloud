# Kite Documentation - Style Guide

## Overview

The Kite documentation uses a modern, clean design system featuring an "island" layout pattern with glassmorphism effects. The design emphasizes readability, smooth interactions, and excellent dark mode support. The styling is built entirely with vanilla CSS using CSS custom properties for theming.

**Design Philosophy:**
- Island-based layout with elevated cards
- Glassmorphism and modern visual effects
- Smooth transitions and subtle animations
- Fully responsive with mobile-first approach
- System-aware dark mode with manual override
- Accessibility-focused with proper semantic HTML

---

## Color Palette

### Light Theme
```css
--bg-primary: #FFFFFF           /* Main background */
--bg-secondary: rgba(255, 255, 255, 0.8)  /* Secondary surfaces */
--bg-tertiary: rgba(255, 255, 255, 0.6)   /* Tertiary backgrounds */

--text-primary: #1A1A1A         /* Primary text */
--text-secondary: #444          /* Secondary text */
--text-muted: #666              /* Muted text */
--text-light: #888              /* Light text */

--primary-color: #7F52FF        /* Primary brand purple */
--primary-dark: #5C3FBF         /* Darker purple for hover states */
--primary-light: #A78BFA        /* Lighter purple for accents */

--border-color: rgba(0, 0, 0, 0.08)       /* Subtle borders */
--border-color-strong: rgba(0, 0, 0, 0.12) /* Stronger borders */

--code-bg: #F8F9FA              /* Code block background */
--hover-bg: rgba(0, 0, 0, 0.04) /* Hover backgrounds */
--active-bg: rgba(127, 82, 255, 0.08)  /* Active/selected state */

--shadow: rgba(0, 0, 0, 0.03)   /* Subtle shadows */
--shadow-strong: rgba(0, 0, 0, 0.08)   /* Pronounced shadows */

--info-bg: rgba(91, 180, 255, 0.05)    /* Info box background */
```

### Dark Theme
```css
--bg-primary: #1A1A1A           /* Main dark background */
--bg-secondary: rgba(30, 30, 30, 0.95)  /* Secondary dark surfaces */
--bg-tertiary: rgba(30, 30, 30, 0.8)    /* Tertiary backgrounds */

--text-primary: #FFFFFF         /* Primary white text */
--text-secondary: #CCCCCC       /* Secondary lighter gray */
--text-muted: #999              /* Muted gray */
--text-light: #777              /* Light gray */

--primary-color: #A78BFA        /* Lighter purple for dark mode */
--primary-dark: #7F52FF         /* Reverse: darker becomes hover */
--primary-light: #C4B5FD        /* Lightest purple */

--border-color: rgba(255, 255, 255, 0.1)
--border-color-strong: rgba(255, 255, 255, 0.15)

--code-bg: #242424
--hover-bg: rgba(255, 255, 255, 0.05)
--active-bg: rgba(127, 82, 255, 0.15)

--shadow: rgba(0, 0, 0, 0.3)
--shadow-strong: rgba(0, 0, 0, 0.2)

--info-bg: rgba(91, 180, 255, 0.1)
```

### Semantic Colors
- **Info/Accent Blue**: `#5BB4FF` (used for info boxes, external links)
- **Success Green**: `#10B981` (used for success states, copy confirmation)
- **Code String Green**: `#0FA676` (syntax highlighting)
- **Code Function Teal**: `#00627A` (syntax highlighting)
- **Warning Amber**: `#F59E0B` (used in feature cards)
- **Background Overlay**: `#0A0A0A` (dark theme body background)

---

## Typography

### Font Families
```css
/* Body Text */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Code/Monospace */
font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
```

### Heading Scale
```css
h1 {
  font-size: 52px;
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.2;
  margin-bottom: 16px;
}

h2 {
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 1.3;
  margin-top: 64px;
  margin-bottom: 16px;
  padding-bottom: 16px;
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
  font-size: 16px;
  line-height: 1.7;
}

p {
  font-size: 17px;
  line-height: 1.8;
  letter-spacing: 0.2px;
  margin-bottom: 24px;
}
```

### Small Text Sizes
- Breadcrumbs: `13px`
- Edit info: `13px`
- TOC header: `11px` (uppercase, letter-spacing: `1.5px`)
- TOC links: `14px` / `13px` / `12px` (based on heading level)
- Footer text: `13px` / `14px`
- Navigation items: `14px` / `13px`
- Version badge: `11px` (letter-spacing: `0.5px`)
- Code inline: `0.9em` (relative to parent)
- Code blocks: `14px`

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
padding: 24px 24px 24px 8px;  /* Right sidebar */

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

/* FAB Buttons */
padding: 12px 18px;

/* Small Elements */
padding: 8px 16px;  /* Edit info badge */
padding: 4px 10px;  /* Version badge */
padding: 3px 8px;   /* Inline code */
```

### Margins
```css
/* Content Islands */
margin: 24px 32px;  /* Standard island margin */

/* Heading Spacing */
margin-top: 64px;   /* h2 top margin */
margin-bottom: 16px; /* h1, h2 bottom */

/* Paragraph Spacing */
margin-bottom: 24px;

/* Code Blocks & Info Boxes */
margin: 30px 0;

/* Dividers */
margin: 48px 0;  /* Section divider */

/* Breadcrumbs */
margin-bottom: 32px;

/* Lists */
margin: 24px 0;
margin-bottom: 8px;   /* List items */
margin-bottom: 12px;  /* Inline list items */
margin-bottom: 16px;  /* Feature list items */
```

### Gaps (Flexbox/Grid)
```css
gap: 8px;   /* Small gaps (breadcrumb, logo, FAB toggle) */
gap: 12px;  /* Medium gaps (feature cards links, footer sections) */
gap: 15px;  /* FAB container */
gap: 24px;  /* Large gaps (grid layouts, footer grid) */
gap: 48px;  /* Extra large (main footer grid) */
```

### Responsive Spacing
```css
@media (max-width: 1100px) {
  .content-island {
    margin: 24px 16px;
    padding: 40px 32px;
  }
}

@media (max-width: 900px) {
  .content-island {
    margin: 16px;
    padding: 32px 20px;
  }
  .footer {
    padding: 32px 24px;
  }
}
```

---

## Component Styles

### Island Pattern (Core Design)
```css
.content-island {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 48px 56px;
  margin: 24px 32px;
  border: 1px solid #E5E7EB;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.content-island:hover {
  box-shadow: 0 12px 60px var(--shadow-strong);
}
```

### Left Sidebar
```css
.left-sidebar {
  width: 280px;
  position: fixed;
  background: #FFFFFF;
  border-right: 1px solid #E5E7EB;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.04);
}
```

### Right Sidebar (TOC)
```css
.right-sidebar {
  width: 280px;
  position: fixed;
  right: 0;
  background: transparent;
}

.toc-island {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  border: 1px solid #E5E7EB;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
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

### Code Blocks
```css
.code-block {
  background: var(--code-bg);
  border: 1px solid var(--border-color-strong);
  border-radius: 16px;
  padding: 30px;
  margin: 30px 0;
  box-shadow: 0 8px 30px var(--shadow-strong);
  transition: all 0.3s ease;
}

.code-block:hover {
  border-color: var(--primary-light);
  box-shadow: 0 10px 40px var(--shadow-strong);
  transform: translateY(-1px);
}
```

### Info Boxes
```css
.info-box {
  background: var(--info-bg);
  border-left: 4px solid #5BB4FF;
  border-radius: 12px;
  padding: 24px 28px;
  margin: 30px 0;
  box-shadow: 0 6px 25px rgba(91, 180, 255, 0.1);
  border: 1px solid rgba(91, 180, 255, 0.2);
}

.info-box:hover {
  box-shadow: 0 8px 35px rgba(91, 180, 255, 0.15);
  transform: translateY(-1px);
}
```

### Floating Action Buttons (FAB)
```css
.fab {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #7F52FF 0%, #5C3FBF 100%);
  border-radius: 50%;
  color: white;
  font-size: 20px;
  box-shadow: 0 4px 20px rgba(127, 82, 255, 0.4);
  transition: all 0.3s ease;
}

.fab:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 30px rgba(127, 82, 255, 0.5);
}
```

### Copy Button
```css
.copy-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--primary-color);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  opacity: 0;
  box-shadow: 0 2px 10px rgba(217, 70, 239, 0.3);
}

.code-block-wrapper:hover .copy-button {
  opacity: 1;
}

.copy-button:hover {
  background: var(--primary-dark);
  box-shadow: 0 4px 15px rgba(217, 70, 239, 0.4);
}
```

### Hamburger Menu
```css
.hamburger {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 101;
  background: linear-gradient(135deg, #7F52FF 0%, #5C3FBF 100%);
  color: white;
  padding: 12px 18px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(127, 82, 255, 0.4);
  display: none; /* Hidden on desktop */
}
```

---

## Shadows and Elevations

### Shadow Hierarchy
```css
/* Level 1 - Subtle */
box-shadow: 0 2px 10px rgba(127, 82, 255, 0.1);

/* Level 2 - Light */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
box-shadow: 2px 0 10px rgba(0, 0, 0, 0.04);  /* Sidebar */

/* Level 3 - Medium */
box-shadow: 0 6px 25px rgba(91, 180, 255, 0.1);  /* Info box */
box-shadow: 0 8px 30px var(--shadow-strong);      /* Code blocks */
box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);       /* Content island */

/* Level 4 - Strong (Hover) */
box-shadow: 0 10px 40px var(--shadow-strong);     /* Code hover */
box-shadow: 0 12px 60px var(--shadow-strong);     /* Island hover */

/* Level 5 - FAB Glow */
box-shadow: 0 4px 20px rgba(127, 82, 255, 0.4);
box-shadow: 0 6px 30px rgba(127, 82, 255, 0.5);   /* FAB hover */

/* Reading Progress Glow */
box-shadow: 0 0 10px rgba(91, 180, 255, 0.5);

/* Dark Theme Shadows */
[data-theme="dark"] {
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.3);  /* Sidebar */
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);  /* Islands */
}
```

### Elevation Strategy
- **Level 0**: Base page background (no shadow)
- **Level 1**: Sidebar (2-4px blur)
- **Level 2**: TOC island (4-16px blur)
- **Level 3**: Content islands, code blocks (8-40px blur)
- **Level 4**: Hover states (12-60px blur)
- **Level 5**: Interactive elements (FABs with colored glow)

---

## Animations and Transitions

### Global Transitions
```css
* {
  transition: background-color 0.3s ease,
              color 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease !important;
}
```

### Component-Specific Transitions
```css
/* Standard Interactive Elements */
transition: all 0.2s;
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);  /* Navigation */
transition: all 0.3s ease;  /* Islands, buttons */

/* Sidebar Toggle */
transition: transform 0.3s;

/* Reading Progress */
transition: width 0.1s ease;
```

### Keyframe Animations

#### Slide Down (Menu Expansion)
```css
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nested.show {
  animation: slideDown 0.3s ease-out;
}
```

#### Fade In Up (Content)
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content-island > * {
  animation: fadeInUp 0.6s ease-out;
}

.content-island h2 {
  animation: fadeInUp 0.6s ease-out 0.1s backwards;
}
```

#### Skeleton Loading
```css
@keyframes skeleton-loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

.skeleton {
  animation: skeleton-loading 1.5s infinite ease-in-out;
  background: linear-gradient(90deg,
    var(--bg-secondary) 0%,
    var(--bg-tertiary) 50%,
    var(--bg-secondary) 100%);
  background-size: 200% 100%;
}
```

### Hover Transforms
```css
/* FAB Scale */
.fab:hover {
  transform: scale(1.1);
}

/* Button Active */
.copy-button:active {
  transform: scale(0.95);
}

/* Subtle Lift */
.code-block:hover,
.info-box:hover {
  transform: translateY(-1px);
}

/* External Link Icon */
a[href^="http"]:hover::after {
  transform: translate(2px, -2px);
}

/* Hamburger Animation */
.hamburger.active .hamburger-icon span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.active .hamburger-icon span:nth-child(2) {
  opacity: 0;
}
.hamburger.active .hamburger-icon span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
```

### Transition Timing
- **Instant**: `0.1s` (reading progress)
- **Fast**: `0.2s` (links, navigation hovers)
- **Standard**: `0.3s` (most UI elements, theme toggle)
- **Smooth**: `0.6s` (content fade-in)
- **Extended**: `1.5s` (skeleton loading loop)

---

## Border Radius

### Border Radius Scale
```css
/* Small Elements */
border-radius: 3px;   /* Scrollbar thumb */
border-radius: 6px;   /* Inline code */
border-radius: 8px;   /* Navigation items, buttons, copy button */

/* Medium Components */
border-radius: 12px;  /* Info boxes, hamburger, footer (mobile), badges, content islands (mobile) */

/* Large Islands */
border-radius: 16px;  /* Content islands, code blocks, TOC island, footer, feature cards */

/* Circular */
border-radius: 50%;   /* FAB buttons */
border-radius: 12px;  /* Version badge (pill shape with small padding) */
border-radius: 20px;  /* Edit info badge (pill shape) */
```

### Border Strategy
- **3-6px**: Inline elements, small UI components
- **8px**: Interactive elements (buttons, nav items)
- **12px**: Medium containers, mobile variants
- **16px**: Large content containers (islands)
- **50%**: Circular buttons
- **High px with small size**: Pill shapes

---

## Grid and Layout

### Main Layout Structure
```css
.container {
  display: flex;
  min-height: 100vh;
}

/* Three-column layout */
- Left sidebar: 280px fixed
- Main content: flex: 1
- Right sidebar: 280px fixed
```

### Grid Layouts

#### Footer Grid
```css
.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 48px;
}

@media (max-width: 900px) {
  grid-template-columns: 1fr;
  gap: 24px;
}
```

#### Feature Cards Grid
```css
/* Home page feature cards */
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: 24px;
```

### Flexbox Patterns

#### Sidebar Logo
```css
.sidebar-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
```

#### Breadcrumb
```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
}
```

#### FAB Container
```css
.fab-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
```

#### Navigation
```css
.sidebar-menu a {
  display: block;  /* Full-width clickable area */
}

.toc-menu a {
  display: block;
}
```

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
  - Main content: full width, margin 0
  - Content island: margin 16px, padding 32px 20px, border-radius 12px
  - h1: 36px (from 52px)
  - h2: 26px (from 36px)
  - Footer: padding 32px 24px
  - Footer grid: 1 column
  - FAB: right 20px
}
```

### Responsive Patterns

#### Sidebar Toggle (Mobile)
```css
.left-sidebar {
  transform: translateX(-100%);
  transition: transform 0.3s;
}

.left-sidebar.open {
  transform: translateX(0);
}
```

#### Content Width Adjustment
```css
/* Desktop */
.main-content {
  margin-left: 280px;   /* Left sidebar width */
  margin-right: 40px;
}

/* Tablet */
@media (max-width: 1100px) {
  margin-left: 0;
  margin-right: 16px;
}

/* Mobile */
@media (max-width: 900px) {
  margin: 0;
  width: 100%;
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
  background: transparent;
}

.left-sidebar::-webkit-scrollbar-thumb {
  background: rgba(127, 82, 255, 0.3);
  border-radius: 3px;
}

.left-sidebar::-webkit-scrollbar-thumb:hover {
  background: rgba(127, 82, 255, 0.5);
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
  box-shadow: 0 0 10px rgba(91, 180, 255, 0.5);
}
```

### Theme Toggle System
- Auto-detects system preference: `prefers-color-scheme`
- Manual override saved to `localStorage`
- Smooth 0.3s transitions on all color properties
- Icon changes: 🌙 (light mode) ↔ ☀️ (dark mode)

### Section Divider
```css
.section-divider {
  height: 1px;
  background: linear-gradient(90deg,
    transparent 0%,
    var(--border-color) 50%,
    transparent 100%);
  margin: 48px 0;
  position: relative;
}

.section-divider::after {
  content: '•';
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: var(--bg-primary);
  color: var(--primary-color);
  padding: 0 12px;
  font-size: 20px;
}
```

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

### Gradient Effects

#### Logo Gradient
```css
.logo-text {
  background: linear-gradient(135deg, #7F52FF 0%, #5C3FBF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

#### Button Gradient
```css
background: linear-gradient(135deg, #7F52FF 0%, #5C3FBF 100%);
```

### TOC Active State
```css
.toc-menu a.active {
  color: var(--primary-color);
  background: rgba(127, 82, 255, 0.12);
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(127, 82, 255, 0.1);
}
```

### Nested Navigation Indentation
```css
/* Level 1 - Base */
padding: 10px 16px;

/* Level 2 - Nested once */
padding-left: 32px;

/* Level 3 - Nested twice */
padding-left: 48px;
```

---

## Syntax Highlighting (Code)

### Syntax Colors
```css
.keyword {
  color: var(--primary-color);  /* #7F52FF / #A78BFA */
  font-weight: 700;
}

.import {
  color: #5BB4FF;
  font-weight: 600;
}

.string {
  color: #0FA676;  /* Green */
}

.comment {
  color: #999;
  font-style: italic;
}

.function {
  color: #00627A;  /* Teal */
  font-weight: 600;
}
```

### Inline Code
```css
code {
  background: rgba(0, 0, 0, 0.06);
  color: var(--primary-color);
  padding: 3px 8px;
  border-radius: 6px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.9em;
  font-weight: 500;
}

[data-theme="dark"] code {
  background: rgba(255, 255, 255, 0.1);
}
```

---

## Accessibility Features

1. **Semantic HTML**: Proper use of `<aside>`, `<main>`, `<nav>`, `<footer>`
2. **Scroll Margin**: `scroll-margin-top: 24px` on headings for anchor jumps
3. **Smooth Scrolling**: `scroll-behavior: smooth` on `html` and `body`
4. **Focus States**: Maintained through hover states
5. **Color Contrast**: WCAG compliant text colors
6. **Keyboard Navigation**: All interactive elements are keyboard accessible
7. **aria-labels**: Can be added to icon-only buttons (FABs)

---

## Performance Optimizations

1. **Preload Class**: Disables transitions on page load
   ```css
   .preload * { transition: none !important; }
   ```
   Removed after 100ms via JavaScript

2. **CSS Containment**: `box-sizing: border-box` on all elements

3. **Transform-based Animations**: Using `transform` for smooth 60fps animations

4. **Intersection Observer**: For TOC active state tracking (JS)

5. **Sticky Positioning**: For TOC island instead of complex JS

6. **Fixed Positioning**: For sidebars and FABs

---

## Design Patterns Summary

### Island Design
All major content sections are "islands" - elevated white (or dark) cards with:
- 16px border radius
- Subtle borders
- Layered shadows
- Hover elevation effect
- Glassmorphism-inspired transparency

### Color Philosophy
- **Primary Purple**: Brand identity, interactive elements
- **Neutral Grays**: Text hierarchy with 4 levels
- **Accent Blue**: Information, external links
- **Semantic Colors**: Success, warning, info states
- **Transparency**: Layering and depth (glassmorphism)

### Spacing Philosophy
- **8px Base Unit**: Multiples of 8 for most spacing
- **Progressive Scale**: 8, 12, 16, 24, 32, 48, 56, 64
- **Generous Whitespace**: Especially in content areas
- **Responsive Compression**: Reduces on smaller screens

### Interaction Philosophy
- **Instant Feedback**: 0.2s transitions for hovers
- **Smooth Motion**: cubic-bezier easing for natural feel
- **Subtle Lifts**: translateY(-1px) on hover
- **Progressive Enhancement**: Works without JS, enhanced with it

---

## Implementation Notes

1. **CSS Variables**: All colors and key values use CSS custom properties for easy theming
2. **Mobile-First Considerations**: Although desktop is default, responsive adjustments are comprehensive
3. **Dark Mode Strategy**: Full variable override, not filters
4. **JavaScript Dependencies**: Minimal - only for theme toggle, TOC tracking, and menu interactions
5. **Browser Support**: Modern browsers (CSS variables, grid, flexbox required)
6. **Font Loading**: System fonts as fallbacks for performance

---

## Quick Reference

### Most Common Values
- **Border Radius**: 8px (small), 12px (medium), 16px (large)
- **Shadow**: `0 8px 40px rgba(0, 0, 0, 0.08)`
- **Transition**: `all 0.3s ease` or `all 0.2s`
- **Primary Color**: `#7F52FF` (light) / `#A78BFA` (dark)
- **Gap**: 8px (tight), 12px (normal), 24px (loose)
- **Padding**: 24px (compact), 32px (normal), 48px (spacious)
- **Font Size**: 14px (small UI), 17px (body), 36px (h2), 52px (h1)

### Key CSS Classes
- `.content-island` - Main content container
- `.code-block` - Code display
- `.info-box` - Information callouts
- `.fab` - Floating action buttons
- `.toc-island` - Table of contents
- `.sidebar-menu` - Navigation menu
- `.skeleton` - Loading state

---

**Document Version**: 1.0
**Last Updated**: January 2025
**Based on**: docs.html design system