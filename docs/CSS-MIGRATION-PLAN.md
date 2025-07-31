# SCISS CSS Migration Plan

## Overview

This document outlines the systematic migration from legacy CSS patterns to a modern, token-based design system.

## Current State Analysis

### ✅ What's Working Well

- Design tokens are properly structured
- Component organization is logical
- Responsive design approach is sound
- CSS custom properties are widely adopted

### ⚠️ Issues to Address

1. **Inconsistent variable naming** (mixed patterns)
2. **Missing design tokens** (undefined variables)
3. **Legacy hardcoded values** (pixels instead of tokens)
4. **Incomplete component systems** (button, card, form)

---

## Migration Phases

### Phase 1: Foundation (Week 1-2)

**Goal**: Complete the design token system

#### Tasks

- [x] ✅ Add missing spacing tokens (`--nav-height`, `--section-padding-*`)
- [x] ✅ Add missing color tokens (`--color-bg-*`, `--color-text-*`)
- [ ] Add missing border radius tokens
- [ ] Add missing transition tokens
- [ ] Create comprehensive token documentation

#### Deliverables

- Complete design token system
- Token usage documentation
- Migration validation script

### Phase 2: Component Systems (Week 3-4)

**Goal**: Standardize core component styles

#### Button System

```css
/* Target structure */
.btn {
  /* Base styles using tokens */
  padding: var(--btn-padding-y) var(--btn-padding-x);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
}

.btn--primary {
  /* Variant styles */
}
.btn--secondary {
  /* Variant styles */
}
.btn--outline {
  /* Variant styles */
}
```

#### Card System

```css
/* Target structure */
.card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  padding: var(--card-padding-md);
}

.card--elevated {
  /* Variant styles */
}
.card--interactive {
  /* Variant styles */
}
```

#### Form System

```css
/* Target structure */
.form-input {
  padding: var(--input-padding-y) var(--input-padding-x);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  font-size: var(--text-base);
}

.form-input:focus {
  border-color: var(--color-primary-500);
  box-shadow: var(--shadow-input-focus);
}
```

### Phase 3: Page Migration (Week 5-6)

**Goal**: Update page-specific styles to use tokens

#### Priority Pages

1. **Homepage** (`pages/index.css`)
2. **Application Form** (`components/application-form.css`)
3. **Navigation** (`components/navigation.css`)
4. **Course Pages** (`pages/courses/`)
5. **Staff Pages** (`pages/staff/`)

#### Migration Process

```css
/* Before */
.hero {
  padding: 2.5rem 2rem;
  background: #ffffff;
  border-radius: 16px;
}

/* After */
.hero {
  padding: var(--section-padding-lg) var(--container-padding-x);
  background: var(--color-bg-primary);
  border-radius: var(--radius-xl);
}
```

### Phase 4: Utility Classes (Week 7-8)

**Goal**: Standardize utility classes

#### Spacing Utilities

```css
/* Standardize spacing utilities */
.m-0 {
  margin: var(--space-0);
}
.m-1 {
  margin: var(--space-1);
}
.m-2 {
  margin: var(--space-2);
}
/* ... continue pattern */

.p-0 {
  padding: var(--space-0);
}
.p-1 {
  padding: var(--space-1);
}
.p-2 {
  padding: var(--space-2);
}
/* ... continue pattern */
```

#### Typography Utilities

```css
/* Standardize typography utilities */
.text-xs {
  font-size: var(--text-xs);
}
.text-sm {
  font-size: var(--text-sm);
}
.text-base {
  font-size: var(--text-base);
}
/* ... continue pattern */

.font-light {
  font-weight: var(--font-light);
}
.font-normal {
  font-weight: var(--font-normal);
}
.font-medium {
  font-weight: var(--font-medium);
}
/* ... continue pattern */
```

### Phase 5: Cleanup & Optimization (Week 9-10)

**Goal**: Remove legacy code and optimize performance

#### Tasks

- [ ] Remove unused CSS
- [ ] Consolidate duplicate styles
- [ ] Optimize CSS bundle size
- [ ] Update documentation
- [ ] Create component library

---

## Implementation Strategy

### Automated Migration Tools

#### 1. CSS Token Validator

```javascript
// scripts/validate-tokens.js
const validateTokens = () => {
  // Check for undefined CSS variables
  // Validate token naming consistency
  // Generate migration report
};
```

#### 2. Migration Script

```javascript
// scripts/migrate-css.js
const migrateCSS = () => {
  // Replace hardcoded values with tokens
  // Update class names to follow conventions
  // Generate backup of original files
};
```

### Manual Migration Checklist

#### For Each Component File:

- [ ] Replace hardcoded colors with token variables
- [ ] Replace hardcoded spacing with token variables
- [ ] Replace hardcoded typography with token variables
- [ ] Update class names to follow conventions
- [ ] Add proper documentation
- [ ] Test across breakpoints
- [ ] Validate accessibility

#### For Each Page File:

- [ ] Audit all CSS variable usage
- [ ] Replace legacy patterns with modern equivalents
- [ ] Ensure responsive design consistency
- [ ] Test visual regression
- [ ] Update component imports

---

## Testing Strategy

### Visual Regression Testing

```bash
# Run visual regression tests
npm run test:visual

# Compare before/after screenshots
npm run test:visual:compare
```

### Accessibility Testing

```bash
# Run accessibility audits
npm run test:a11y

# Check color contrast
npm run test:contrast
```

### Performance Testing

```bash
# Measure CSS bundle size
npm run test:performance

# Check CSS parsing time
npm run test:css-performance
```

---

## Risk Mitigation

### Backup Strategy

- Create git branches for each migration phase
- Maintain backup of original CSS files
- Use feature flags for gradual rollout

### Rollback Plan

- Keep original CSS files until migration is complete
- Document all changes for easy rollback
- Test rollback procedures regularly

### Communication Plan

- Weekly progress updates
- Clear documentation of changes
- Training sessions for team members

---

## Success Metrics

### Technical Metrics

- [ ] 100% of CSS uses design tokens
- [ ] 0 undefined CSS variables
- [ ] < 20% CSS bundle size reduction
- [ ] 100% accessibility compliance
- [ ] 0 visual regressions

### Process Metrics

- [ ] Migration completed on schedule
- [ ] All team members trained on new system
- [ ] Documentation is complete and accurate
- [ ] No production issues during migration

---

## Timeline

| Phase   | Duration  | Key Deliverables       |
| ------- | --------- | ---------------------- |
| Phase 1 | Week 1-2  | Complete design tokens |
| Phase 2 | Week 3-4  | Component systems      |
| Phase 3 | Week 5-6  | Page migrations        |
| Phase 4 | Week 7-8  | Utility classes        |
| Phase 5 | Week 9-10 | Cleanup & optimization |

---

## Resources

### Documentation

- [CSS Style Guide](./CSS-STYLE-GUIDE.md)
- [Design Token Reference](./DESIGN-TOKENS.md)
- [Component Library](./COMPONENT-LIBRARY.md)

### Tools

- CSS Token Validator
- Migration Scripts
- Visual Regression Testing
- Performance Monitoring

### Team Training

- Design Token Workshop
- Component System Training
- Accessibility Guidelines
- Performance Best Practices
