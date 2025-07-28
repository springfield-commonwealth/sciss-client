# SCISS CSS Style Guide

## 📋 **Overview**

This document provides comprehensive guidelines for CSS development in the SCISS platform, ensuring consistency, maintainability, and performance across all components and pages.

## 🎨 **Design System**

### **Color Palette**

```css
:root {
  --primary-blue: #3b82f6;
  --primary-orange: #f59e0b;
  --text-dark: #1f2937;
  --text-light: #64748b;
  --background-light: #f8fafc;
  --background-secondary: #e2e8f0;
  --background-tertiary: #f1f5f9;
}
```

### **Spacing Scale**

```css
:root {
  --spacing-xs: 0.5rem; /* 8px */
  --spacing-sm: 1rem; /* 16px */
  --spacing-md: 1.5rem; /* 24px */
  --spacing-lg: 2rem; /* 32px */
  --spacing-xl: 3rem; /* 48px */
  --spacing-2xl: 4rem; /* 64px */
}
```

### **Border Radius**

```css
:root {
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 25px;
}
```

### **Z-Index Scale**

```css
:root {
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
  --z-toast: 1080;
  --z-tooltip-highest: 1090;
}
```

## 🧩 **Universal Component Classes**

### **Card System**

```css
/* Base Card */
.card-base {
  background: white;
  border-radius: 12px;
  box-shadow: var(--shadow-light);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Card Variants */
.card-preview {
  /* Preview cards */
}
.card-feature {
  /* Feature cards */
}
.card-testimonial {
  /* Testimonial cards */
}
.card-highlight {
  /* Highlight cards */
}
.card-faculty {
  /* Faculty cards */
}
.card-course {
  /* Course cards */
}
.card-activity {
  /* Activity cards */
}
.card-trip {
  /* Trip cards */
}
.card-staff {
  /* Staff cards */
}
```

### **Grid System**

```css
/* Base Grid */
.grid-base {
  display: grid;
  gap: 2rem;
}

/* Grid Variants */
.grid-faculty {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
.grid-feature {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.grid-highlights {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
.grid-testimonials {
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
.grid-courses {
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}
.grid-programs {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.grid-preview {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

### **Hero System**

```css
/* Base Hero */
.hero-base {
  position: relative;
  padding: 4rem 0;
  text-align: center;
  overflow: hidden;
}

/* Hero Variants */
.hero-primary {
  /* Primary hero with gradient */
}
.hero-secondary {
  /* Secondary hero */
}
.hero-minimal {
  /* Minimal hero */
}
```

### **Badge System**

```css
/* Base Badge */
.badge-base {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

/* Badge Variants */
.badge-primary {
  background: var(--primary-blue);
  color: white;
}
.badge-secondary {
  background: var(--background-secondary);
  color: var(--text-dark);
}
.badge-success {
  background: var(--success-color);
  color: white;
}
.badge-warning {
  background: var(--warning-color);
  color: white;
}
.badge-error {
  background: var(--error-color);
  color: white;
}
```

### **Section Header System**

```css
/* Base Section Header */
.section-header-base {
  text-align: center;
  margin-bottom: 3rem;
}

/* Section Header Variants */
.section-header-primary {
  /* Primary section headers */
}
.section-header-secondary {
  /* Secondary section headers */
}
.section-header-minimal {
  /* Minimal section headers */
}
```

## 📱 **Responsive Design**

### **Breakpoints**

```css
/* Mobile First Approach */
@media (min-width: 640px) {
  /* sm */
}
@media (min-width: 768px) {
  /* md */
}
@media (min-width: 1024px) {
  /* lg */
}
@media (min-width: 1280px) {
  /* xl */
}
```

### **Navigation Height**

```css
:root {
  --nav-height: 120px; /* Desktop */
  --nav-height-mobile: 80px; /* Mobile */
}
```

## ♿ **Accessibility Guidelines**

### **Focus States**

```css
/* Enhanced focus states */
.btn:focus-visible,
.card-base:focus-visible,
.nav-link:focus-visible {
  outline: 3px solid var(--primary-blue);
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.2);
}
```

### **High Contrast Support**

```css
@media (prefers-contrast: high) {
  :root {
    --primary-blue: #1e40af;
    --text-dark: #000000;
  }
}
```

### **Reduced Motion Support**

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🚀 **Performance Guidelines**

### **Critical CSS**

```css
/* Critical styles for above-the-fold content */
.critical-loading {
  /* Loading states */
}
.critical-container {
  /* Container layout */
}
.critical-header {
  /* Header spacing */
}
.critical-title {
  /* Typography */
}
.critical-btn {
  /* Button styles */
}
```

### **CSS Optimization**

- Use CSS custom properties for design tokens
- Minimize `!important` usage (< 5 instances)
- Use standardized z-index scale
- Implement CSS purging for unused styles
- Optimize for production with minification

## 📝 **Naming Conventions**

### **BEM Methodology**

```css
/* Block */
.card-base {
}

/* Element */
.card-base__image {
}
.card-base__content {
}
.card-base__title {
}

/* Modifier */
.card-base--featured {
}
.card-base--large {
}
```

### **Utility Classes**

```css
/* Layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.grid-base {
  display: grid;
  gap: 2rem;
}

/* Spacing */
.mt-nav {
  margin-top: var(--nav-height);
}
.mt-nav-mobile {
  margin-top: var(--nav-height-mobile);
}

/* Typography */
.text-high-contrast {
  color: var(--text-dark);
  font-weight: 600;
}
```

## 🧪 **Testing Guidelines**

### **Visual Regression Testing**

- Test all component variants
- Test responsive breakpoints
- Test accessibility features
- Test high contrast mode
- Test reduced motion preferences

### **Performance Testing**

- Monitor CSS bundle size
- Test critical CSS loading
- Verify CSS purging effectiveness
- Test animation performance

## 📚 **File Organization**

```
src/styles/
├── shared.css              # Design tokens & universal classes
├── globals.css             # Global styles & resets
├── components/             # Component-specific styles
│   ├── navigation.css
│   ├── forms.css
│   └── cards.css
├── pages/                  # Page-specific styles
│   ├── home.css
│   ├── about.css
│   └── courses.css
└── sections/              # Section-specific styles
    ├── hero.css
    ├── features.css
    └── testimonials.css
```

## 🔧 **Best Practices**

### **Do's**

- ✅ Use universal CSS classes for consistency
- ✅ Follow the design token system
- ✅ Implement proper accessibility features
- ✅ Use semantic HTML with appropriate ARIA labels
- ✅ Test across different devices and browsers
- ✅ Optimize for performance

### **Don'ts**

- ❌ Don't use `!important` unless absolutely necessary
- ❌ Don't create duplicate styles
- ❌ Don't ignore accessibility requirements
- ❌ Don't use inline styles
- ❌ Don't forget to test responsive behavior

## 📊 **Quality Metrics**

### **Target Standards**

- **CSS Bundle Size**: < 50KB gzipped
- **`!important` Usage**: < 5 instances
- **Accessibility Score**: 9/10 (WCAG AA)
- **Performance Score**: 90+ (Lighthouse)
- **Code Coverage**: 95%+

### **Monitoring**

- Regular CSS audits
- Performance monitoring
- Accessibility testing
- Visual regression testing
- Code quality reviews

---

_This style guide ensures consistent, maintainable, and performant CSS across the SCISS platform._
