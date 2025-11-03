# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for **Kite** - a modern Infrastructure as Code (IaC) language designed for multi-cloud deployments. The site is a static HTML website combining marketing content, documentation, and pricing information.

**Key Characteristic:** Zero-dependency, self-contained architecture. Each HTML file is production-ready with embedded CSS and JavaScript. No build process, no frameworks, no package managers.

## Architecture

### Self-Contained Static Files

- **No build process** - Files can be edited and deployed directly
- **No external dependencies** - No package.json, npm, or node_modules
- **No frameworks** - Pure vanilla HTML/CSS/JavaScript
- **Inline everything** - CSS in `<style>` tags, JavaScript in `<script>` tags
- Each page is completely standalone and can function independently

### File Structure

```
index.html          # Interactive landing page with code demo
docs.html           # Documentation portal (multi-page SPA)
pricing.html        # Three-tier pricing page
LICENSE.html        # Terms and conditions
STYLE_GUIDE.md      # Complete design system documentation
```

### docs.html SPA Pattern

The documentation page uses a **client-side routing system** within a single HTML file:

- Multiple `.page-section` divs with `display: none` by default
- JavaScript `showPage(pageId)` function toggles visibility
- Three-column layout: Left sidebar (navigation), Main content (island), Right TOC
- Dynamic TOC updates based on active page
- Layout adjustments (shows/hides TOC sidebar, repositions FABs)

**When adding new documentation pages:**
1. Add a new `.page-section` div with unique ID
2. Update `showPage()` function to handle the new page
3. Add navigation link in `.sidebar-menu`
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

- **1400px** - Hide right TOC sidebar
- **1100px** - Show hamburger menu, hide left sidebar until clicked
- **900px** - Single column layout, reduced typography

## Development Workflow

### Testing Changes

**Local Development:**
```bash
# Option 1: Open directly in browser (file:// protocol)
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows

# Option 2: Simple HTTP server (if needed for CORS)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

**Browser Compatibility:**
- Requires CSS Grid, Flexbox, CSS Custom Properties
- Requires IntersectionObserver API (for TOC highlighting)
- Test in Chrome, Firefox, Safari, Edge

### Git Workflow

```bash
# Standard git workflow
git add <files>
git commit -m "message"
git push origin main
```

Remote repository: https://github.com/tudor-pop/kitelang.cloud.git

## Common Modifications

### Adding Syntax-Highlighted Code Block

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

### Updating Theme Colors

All colors are defined in CSS variables:

```css
:root {
    --bg-primary: #FFFFFF;
    --text-primary: #000000;
    --primary-color: #A855F7;
    --border-color: #000000;
    /* etc. */
}

[data-theme="dark"] {
    --bg-primary: #000000;
    --text-primary: #FFFFFF;
    --border-color: #FFFFFF;
    /* etc. */
}
```

## Important Conventions

### CSS Conventions

- Use CSS variables for all colors (never hardcode colors except in variable definitions)
- Component-scoped class names (`.content-island`, `.code-block-wrapper`)
- Theme variants via `[data-theme="dark"]` selector
- All shadows should be `transparent` except hard-edged drop shadows (`0 4px 0 rgba(0, 0, 0, 0.5)`)
- Border radius: 4px (small), 8px (medium), 12px (large mobile), 16px (islands)

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
- **Don't create separate CSS files** - Keep styles embedded for self-containment
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