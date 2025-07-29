# CSS Quick Reference Guide

## 🚀 Quick Start

### Basic Layout Pattern

```html
<div class="container">
  <section class="section">
    <div class="grid grid--3 gap--6">
      <div class="card card--interactive">
        <div class="card__header">
          <h3 class="card__title">Title</h3>
        </div>
        <div class="card__content">
          <p>Content</p>
        </div>
      </div>
    </div>
  </section>
</div>
```

## 🎨 Design Tokens

### Colors

```css
/* Primary */
--color-primary-500: #1f56a4;
--color-primary-600: #2563eb;

/* Semantic */
--color-success-500: #10b981;
--color-warning-500: #f59e0b;
--color-error-500: #ef4444;

/* Grays */
--color-gray-50: #f9fafb;
--color-gray-900: #111827;
```

### Spacing

```css
--space-0: 0; /* 0px */
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-4: 1rem; /* 16px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-12: 3rem; /* 48px */
```

### Typography

```css
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
```

## 🔧 Component Classes

### Buttons

```html
<!-- Primary -->
<button class="btn btn--primary">Primary</button>

<!-- Secondary -->
<button class="btn btn--secondary">Secondary</button>

<!-- Outline -->
<button class="btn btn--outline">Outline</button>

<!-- Sizes -->
<button class="btn btn--sm">Small</button>
<button class="btn">Default</button>
<button class="btn btn--lg">Large</button>

<!-- States -->
<button class="btn btn--success">Success</button>
<button class="btn btn--warning">Warning</button>
<button class="btn btn--error">Error</button>
```

### Layout

```html
<!-- Containers -->
<div class="container">Default (1200px)</div>
<div class="container--sm">Small (768px)</div>
<div class="container--lg">Large (1400px)</div>
<div class="container--xl">Extra Large (1600px)</div>
<div class="container--full">Full Width</div>

<!-- Sections -->
<section class="section">Default padding</section>
<section class="section--sm">Small padding</section>
<section class="section--lg">Large padding</section>
<section class="section--no-padding">No padding</section>

<!-- Grids -->
<div class="grid grid--1">1 column</div>
<div class="grid grid--2">2 columns</div>
<div class="grid grid--3">3 columns</div>
<div class="grid grid--4">4 columns</div>
<div class="grid grid--auto-fit">Auto-fit</div>
<div class="grid grid--auto-fill">Auto-fill</div>

<!-- Flexbox -->
<div class="flex flex--center">Center</div>
<div class="flex flex--between">Space between</div>
<div class="flex flex--col">Column</div>
<div class="flex flex--row">Row</div>
<div class="items--center">Align center</div>
<div class="justify--center">Justify center</div>
```

### Cards

```html
<!-- Base Card -->
<div class="card">
  <div class="card__header">
    <h3 class="card__title">Title</h3>
  </div>
  <div class="card__content">
    <p class="card__description">Content</p>
  </div>
  <div class="card__footer">
    <button class="btn btn--primary">Action</button>
  </div>
</div>

<!-- Card Variants -->
<div class="card card--sm">Small</div>
<div class="card card--lg">Large</div>
<div class="card card--outline">Outline</div>
<div class="card card--elevated">Elevated</div>
<div class="card card--interactive">Interactive</div>

<!-- Card Layouts -->
<div class="card card--horizontal">Horizontal</div>
<div class="card card--feature">Feature</div>

<!-- Card Grids -->
<div class="card-grid card-grid--2">2 columns</div>
<div class="card-grid card-grid--3">3 columns</div>
<div class="card-grid card-grid--auto-fit">Auto-fit</div>
```

## 📱 Responsive Classes

### Breakpoints

- **Mobile**: Default (0px+)
- **Tablet**: 768px+ (`md:`)
- **Desktop**: 1024px+ (`lg:`)
- **Large Desktop**: 1280px+ (`xl:`)

### Responsive Grids

```html
<!-- Stack on mobile, 2 on tablet, 3 on desktop -->
<div class="grid grid--1 md:grid--2 lg:grid--3 gap--6">
  <!-- Cards -->
</div>

<!-- Auto-fit with responsive columns -->
<div class="grid grid--auto-fit md:grid--2 lg:grid--3">
  <!-- Cards -->
</div>
```

### Responsive Visibility

```html
<div class="hidden md:block">Hidden on mobile, visible on tablet+</div>
<div class="block md:hidden">Visible on mobile, hidden on tablet+</div>
```

## 🎯 Utility Classes

### Spacing

```html
<!-- Margin -->
<div class="mt--lg">Top margin large</div>
<div class="mb--md">Bottom margin medium</div>
<div class="ml--sm">Left margin small</div>
<div class="mr--xs">Right margin extra small</div>

<!-- Padding -->
<div class="p--lg">Padding large</div>
<div class="pt--md">Top padding medium</div>
<div class="pb--sm">Bottom padding small</div>
<div class="px--xs">Horizontal padding extra small</div>

<!-- Gap -->
<div class="gap--6">Gap 24px</div>
<div class="gap--4">Gap 16px</div>
<div class="gap--2">Gap 8px</div>
```

### Text

```html
<!-- Alignment -->
<div class="text--center">Center</div>
<div class="text--left">Left</div>
<div class="text--right">Right</div>

<!-- Sizes -->
<div class="text-xs">Extra small</div>
<div class="text-sm">Small</div>
<div class="text-base">Base</div>
<div class="text-lg">Large</div>
<div class="text-xl">Extra large</div>
<div class="text-2xl">2X large</div>
```

### Positioning

```html
<div class="relative">Relative</div>
<div class="absolute">Absolute</div>
<div class="fixed">Fixed</div>
<div class="sticky">Sticky</div>

<div class="top--0">Top 0</div>
<div class="right--0">Right 0</div>
<div class="bottom--0">Bottom 0</div>
<div class="left--0">Left 0</div>

<div class="z--10">Z-index 10</div>
<div class="z--20">Z-index 20</div>
<div class="z--30">Z-index 30</div>
```

## 🔄 Common Patterns

### Hero Section

```html
<section class="section">
  <div class="container">
    <div class="text--center mb--lg">
      <h1 class="text-4xl">Hero Title</h1>
      <p class="text-lg">Hero description</p>
    </div>
    <div class="flex flex--center gap--4">
      <button class="btn btn--primary btn--lg">Primary CTA</button>
      <button class="btn btn--secondary">Secondary CTA</button>
    </div>
  </div>
</section>
```

### Feature Grid

```html
<section class="section">
  <div class="container">
    <div class="text--center mb--lg">
      <h2 class="text-3xl">Features</h2>
    </div>
    <div class="grid grid--1 md:grid--2 lg:grid--3 gap--6">
      <div class="card card--feature">
        <div class="card__header">
          <h3 class="card__title">Feature 1</h3>
        </div>
        <div class="card__content">
          <p class="card__description">Feature description</p>
        </div>
      </div>
      <!-- More feature cards -->
    </div>
  </div>
</section>
```

### Navigation

```html
<nav class="flex flex--between items--center">
  <div class="logo">Logo</div>
  <div class="flex gap--6">
    <a href="#" class="nav-link">Home</a>
    <a href="#" class="nav-link">About</a>
    <a href="#" class="nav-link">Contact</a>
  </div>
  <button class="btn btn--primary">CTA</button>
</nav>
```

### Footer

```html
<footer class="section bg--gray-900">
  <div class="container">
    <div class="grid grid--1 md:grid--4 gap--6">
      <div class="footer-column">
        <h3 class="text-lg mb--4">Company</h3>
        <ul class="space-y--2">
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <!-- More footer columns -->
    </div>
  </div>
</footer>
```

## 🛠️ Troubleshooting

### Common Issues

1. **Styles not applying**: Check if design tokens are imported
2. **Responsive not working**: Verify breakpoint classes are correct
3. **Conflicting styles**: Ensure BEM naming is followed
4. **Missing components**: Check if component systems are imported

### Debug Commands

```bash
# Check for old class patterns
grep -r "grid-[0-9]" src/ pages/
grep -r "text-center" src/ pages/

# Update components if needed
node scripts/update-component-layouts.js

# Clean up legacy CSS
node scripts/cleanup-legacy-css.js
```

### Best Practices

- ✅ Use design tokens for consistent values
- ✅ Follow BEM naming conventions
- ✅ Use responsive classes for mobile-first design
- ✅ Keep components modular and reusable
- ✅ Test across all breakpoints
- ❌ Don't use hardcoded values
- ❌ Don't create duplicate patterns
- ❌ Don't override component styles directly

---

_This quick reference covers the most common patterns. For detailed documentation, see `CSS-ARCHITECTURE-FINAL.md`_
