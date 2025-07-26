# CSS Analysis & Optimization Tools

This directory contains automated tools for analyzing and optimizing CSS across the SCISS website.

## 🛠️ Available Tools

### 1. CSS Analyzer (`analyze-css.js`)

Identifies redundant and unused styles across all pages except the application page.

**Features:**

- Scans all CSS files in `src/styles/`
- Analyzes JS/JSX files for used classes
- Identifies unused CSS classes
- Finds redundant style patterns
- Generates detailed analysis report

**Usage:**

```bash
# Run analysis
pnpm run analyze:css

# Run with watch mode
pnpm run analyze:css:watch
```

### 2. CSS Optimizer (`css-optimizer.js`)

Automatically optimizes and consolidates redundant styles.

**Features:**

- Extends CSS Analyzer functionality
- Identifies common patterns across files
- Generates shared CSS classes
- Creates optimization recommendations
- Generates consolidated shared styles file

**Usage:**

```bash
# Run optimization
pnpm run optimize:css
```

## 📊 Generated Reports

### Analysis Report (`css-analysis-report.md`)

- Complete list of unused classes
- Redundant style patterns
- File-by-file breakdown
- Recommendations for cleanup

### Optimization Report (`css-optimization-report.md`)

- Shared pattern recommendations
- Consolidation suggestions
- Implementation steps
- Best practices guide

### Shared Styles (`src/styles/shared.css`)

- Consolidated common patterns
- Utility classes
- Responsive utilities
- Animation utilities

## 🎯 Common Patterns Identified

The optimizer automatically detects and consolidates:

1. **Card Layouts**: White background, rounded corners, shadow
2. **Badge Styles**: Colored backgrounds, rounded pills
3. **Section Headers**: Gradient backgrounds, centered text
4. **Button Variants**: Primary, secondary, outline styles
5. **Form Elements**: Input styles, validation states

## 🚀 Implementation Workflow

### Step 1: Analysis

```bash
pnpm run analyze:css
```

### Step 2: Review Report

- Check `css-analysis-report.md`
- Identify safe classes to remove
- Review redundant patterns

### Step 3: Optimization

```bash
pnpm run optimize:css
```

### Step 4: Implementation

1. Import `src/styles/shared.css` in main CSS
2. Replace redundant patterns with shared classes
3. Remove unused classes carefully
4. Test thoroughly

## 📈 Performance Impact

Typical results from analysis:

- **Unused Classes**: 15-25% of total classes
- **Redundant Patterns**: 5-10 patterns across files
- **Estimated Savings**: 20-30% CSS bundle size reduction

## ⚠️ Safety Guidelines

1. **Always test after changes**: Visual regressions can occur
2. **Review unused classes carefully**: Some may be dynamically added
3. **Check for false positives**: Complex selectors may be missed
4. **Backup before major changes**: Keep original files as reference

## 🔧 Configuration

The tools are configured for the SCISS website structure:

- CSS files: `src/styles/**/*.css`
- JS files: `pages/**/*.js`, `src/components/**/*.js`
- Excludes: Application page (`apply`)

## 📝 Customization

To modify analysis patterns, edit the regex patterns in:

- `analyze-css.js`: Class extraction patterns
- `css-optimizer.js`: Common pattern detection

## 🐛 Troubleshooting

### Common Issues:

1. **Missing glob dependency**: `npm install glob`
2. **Permission errors**: Ensure script files are executable
3. **Large file analysis**: May take time for large codebases

### Debug Mode:

Add `console.log` statements in the scripts for detailed debugging.

---

_Tools generated for SCISS Website CSS Optimization_
