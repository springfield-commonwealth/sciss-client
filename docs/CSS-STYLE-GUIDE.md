# SCISS CSS Style Guide

## Overview

This guide establishes coding standards and best practices for CSS development in the SCISS platform.

## Table of Contents

1. [Design Tokens](#design-tokens)
2. [File Organization](#file-organization)
3. [Naming Conventions](#naming-conventions)
4. [CSS Structure](#css-structure)
5. [Component Guidelines](#component-guidelines)
6. [Responsive Design](#responsive-design)
7. [Performance](#performance)

---

## Design Tokens

### Color Usage

```css
/* ✅ Use semantic color tokens */
color: var(--color-text-primary);
background: var(--color-bg-primary);
border-color: var(--color-border-light);

/* ❌ Avoid hardcoded colors */
color: #1a1a1a;
background: #ffffff;
```

### Typography

```css
/* ✅ Use typography tokens */
font-size: var(--text-lg);
font-weight: var(--font-semibold);
line-height: var(--leading-normal);

/* ❌ Avoid hardcoded values */
font-size: 18px;
font-weight: 600;
```

### Spacing

```css
/* ✅ Use spacing tokens */
padding: var(--space-6);
margin: var(--space-8);
gap: var(--grid-gap-md);

/* ❌ Avoid hardcoded spacing */
padding: 24px;
margin: 32px;
```

---

## File Organization

### Directory Structure

```
src/styles/
├── design-tokens/          # Design system tokens
│   ├── colors.css
│   ├── typography.css
│   ├── spacing.css
│   └── shadows.css
├── components/             # Component-specific styles
│   ├── buttons/
│   ├── cards/
│   └── forms/
├── layouts/               # Layout components
├── pages/                 # Page-specific styles
├── sections/              # Section components
├── globals.css            # Global styles
├── shared.css             # Shared utilities
└── index.css              # Main entry point
```

### Import Order

```css
/* 1. Design tokens first */
@import "./design-tokens/colors.css";
@import "./design-tokens/typography.css";
@import "./design-tokens/spacing.css";
@import "./design-tokens/shadows.css";

/* 2. Global styles */
@import "./globals.css";

/* 3. Shared utilities */
@import "./shared.css";

/* 4. Component styles */
@import "./components/buttons/button-base.css";
@import "./components/cards/card-system.css";

/* 5. Page-specific styles last */
@import "./pages/home.css";
```

---

## Naming Conventions

### CSS Classes

```css
/* ✅ Use kebab-case for class names */
.application-form {
}
.nav-menu {
}
.card-container {
}

/* ✅ Use BEM methodology for complex components */
.card {
}
.card__header {
}
.card__body {
}
.card--featured {
}
.card--compact {
}
```

### CSS Variables

```css
/* ✅ Use semantic naming for design tokens */
--color-primary-500
--text-lg
--space-6
--shadow-md

/* ✅ Use component-specific tokens */
--btn-padding-x
--card-padding-lg
--nav-height
```

---

## CSS Structure

### Component Template

```css
/* ==========================================================================
   COMPONENT NAME
   ========================================================================== */

.component {
  /* Layout */
  display: flex;
  flex-direction: column;
  gap: var(--space-4);

  /* Spacing */
  padding: var(--card-padding-md);
  margin: var(--space-6) 0;

  /* Visual */
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);

  /* Typography */
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--color-text-primary);

  /* Transitions */
  transition: all var(--transition-normal);
}

.component:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* States */
.component--active {
  background: var(--color-primary-50);
  border-color: var(--color-primary-500);
}

.component--disabled {
  opacity: 0.5;
  pointer-events: none;
}

/* Responsive */
@media (max-width: 768px) {
  .component {
    padding: var(--card-padding-sm);
    margin: var(--space-4) 0;
  }
}
```

---

## Component Guidelines

### Button System

```css
/* Base button styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--btn-padding-y) var(--btn-padding-x);
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  text-decoration: none;
  cursor: pointer;
  transition: all var(--transition-normal);
}

/* Button variants */
.btn--primary {
  background: var(--color-primary-500);
  color: var(--color-text-white);
}

.btn--secondary {
  background: var(--color-bg-secondary);
  color: var(--color-text-primary);
  border-color: var(--color-border-medium);
}

.btn--outline {
  background: transparent;
  color: var(--color-primary-500);
  border-color: var(--color-primary-500);
}
```

### Card System

```css
/* Base card styles */
.card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Card variants */
.card--elevated {
  box-shadow: var(--shadow-lg);
}

.card--interactive {
  cursor: pointer;
}
```

---

## Responsive Design

### Breakpoint System

```css
/* Mobile first approach */
@media (min-width: 768px) {
  /* Tablet */
}
@media (min-width: 1024px) {
  /* Desktop */
}
@media (min-width: 1280px) {
  /* Large Desktop */
}
```

### Responsive Utilities

```css
/* Hide/show utilities */
.hidden {
  display: none;
}
.block {
  display: block;
}

@media (min-width: 768px) {
  .md\:hidden {
    display: none;
  }
  .md\:block {
    display: block;
  }
}
```

---

## Performance

### Best Practices

```css
/* ✅ Use efficient selectors */
.card {
} /* Good */
.card .title {
} /* Good */
.card > .title {
} /* Better */

/* ❌ Avoid inefficient selectors */
div.card .title span {
} /* Too specific */
.card .title .text span {
} /* Too deep */
```

### Critical CSS

```css
/* Load critical styles inline */
/* Above-the-fold content only */
.hero {
}
.navigation {
}
.main-content {
}
```

### CSS Optimization

- Use CSS custom properties for theming
- Minimize specificity conflicts
- Group related styles together
- Use shorthand properties when possible
- Avoid `!important` unless absolutely necessary

---

## Accessibility

### Focus States

```css
/* Always provide visible focus states */
.btn:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

### Color Contrast

```css
/* Ensure sufficient color contrast */
.text-primary {
  color: var(--color-text-primary); /* WCAG AA compliant */
}
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Testing

### Visual Regression Testing

- Test all components across breakpoints
- Verify design token consistency
- Check accessibility compliance
- Validate performance metrics

### Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

---

## Maintenance

### Regular Reviews

- Monthly design token audits
- Quarterly performance reviews
- Annual accessibility assessments
- Continuous component documentation updates

### Migration Strategy

- Gradual migration from legacy styles
- Backward compatibility during transitions
- Comprehensive testing before releases
- Clear documentation of changes
