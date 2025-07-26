#!/usr/bin/env node

/**
 * CSS Analysis Script for SCISS Website
 * Identifies redundant and unused styles across all pages except application page
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

class CSSAnalyzer {
  constructor() {
    this.projectRoot = path.resolve(__dirname, "..");
    this.cssFiles = [];
    this.jsFiles = [];
    this.cssClasses = new Set();
    this.usedClasses = new Set();
    this.unusedClasses = new Set();
    this.redundantStyles = [];
    this.analysisResults = {
      totalCSSFiles: 0,
      totalCSSLines: 0,
      totalClasses: 0,
      usedClasses: 0,
      unusedClasses: 0,
      redundantPatterns: 0,
      estimatedSavings: 0,
    };
  }

  /**
   * Main analysis function
   */
  async analyze() {
    console.log("🔍 Starting CSS Analysis for SCISS Website...\n");

    try {
      await this.collectFiles();
      await this.extractCSSClasses();
      await this.extractUsedClasses();
      await this.findUnusedClasses();
      await this.findRedundantStyles();
      await this.generateReport();
    } catch (error) {
      console.error("❌ Analysis failed:", error.message);
      process.exit(1);
    }
  }

  /**
   * Collect all CSS and JS files
   */
  async collectFiles() {
    console.log("📁 Collecting files...");

    // Collect CSS files
    const cssPatterns = [
      "src/styles/**/*.css",
      "src/styles/**/*.scss",
      "src/styles/**/*.sass",
    ];

    for (const pattern of cssPatterns) {
      const files = glob.sync(pattern, { cwd: this.projectRoot });
      this.cssFiles.push(...files);
    }

    // Collect JS/JSX files (excluding application page)
    const jsPatterns = [
      "pages/**/*.js",
      "pages/**/*.jsx",
      "src/components/**/*.js",
      "src/components/**/*.jsx",
      "src/sections/**/*.js",
      "src/sections/**/*.jsx",
    ];

    for (const pattern of jsPatterns) {
      const files = glob.sync(pattern, { cwd: this.projectRoot });
      // Exclude application page
      this.jsFiles.push(...files.filter((file) => !file.includes("apply")));
    }

    console.log(
      `✅ Found ${this.cssFiles.length} CSS files and ${this.jsFiles.length} JS files`
    );
  }

  /**
   * Extract all CSS classes from CSS files
   */
  async extractCSSClasses() {
    console.log("🎨 Extracting CSS classes...");

    for (const cssFile of this.cssFiles) {
      const filePath = path.join(this.projectRoot, cssFile);
      const content = fs.readFileSync(filePath, "utf8");

      // Extract class selectors
      const classRegex = /\.([a-zA-Z][a-zA-Z0-9_-]*)/g;
      let match;

      while ((match = classRegex.exec(content)) !== null) {
        const className = match[1];
        // Skip pseudo-classes and pseudo-elements
        if (!className.includes(":") && !className.includes("::")) {
          this.cssClasses.add(className);
        }
      }
    }

    console.log(`✅ Found ${this.cssClasses.size} unique CSS classes`);
  }

  /**
   * Extract used classes from JS/JSX files
   */
  async extractUsedClasses() {
    console.log("🔍 Extracting used classes from JS files...");

    for (const jsFile of this.jsFiles) {
      const filePath = path.join(this.projectRoot, jsFile);
      const content = fs.readFileSync(filePath, "utf8");

      // Find className patterns
      const patterns = [
        /className\s*=\s*["'`]([^"'`]+)["'`]/g,
        /className\s*=\s*\{[^}]*["'`]([^"'`]+)["'`][^}]*\}/g,
        /className\s*=\s*\{[^}]*\}/g,
        /class\s*=\s*["'`]([^"'`]+)["'`]/g,
      ];

      for (const pattern of patterns) {
        let match;
        while ((match = pattern.exec(content)) !== null) {
          if (match[1]) {
            const classes = match[1].split(/\s+/);
            classes.forEach((cls) => {
              if (cls && !cls.includes("{") && !cls.includes("}")) {
                this.usedClasses.add(cls);
              }
            });
          }
        }
      }
    }

    console.log(`✅ Found ${this.usedClasses.size} used classes`);
  }

  /**
   * Find unused classes
   */
  async findUnusedClasses() {
    console.log("🚫 Finding unused classes...");

    for (const cssClass of this.cssClasses) {
      if (!this.usedClasses.has(cssClass)) {
        this.unusedClasses.add(cssClass);
      }
    }

    console.log(`✅ Found ${this.unusedClasses.size} unused classes`);
  }

  /**
   * Find redundant styles
   */
  async findRedundantStyles() {
    console.log("🔄 Finding redundant styles...");

    const stylePatterns = new Map();
    const redundantPatterns = [];

    for (const cssFile of this.cssFiles) {
      const filePath = path.join(this.projectRoot, cssFile);
      const content = fs.readFileSync(filePath, "utf8");

      // Extract style blocks
      const styleBlocks =
        content.match(/\.[a-zA-Z][a-zA-Z0-9_-]*\s*\{[^}]+\}/g) || [];

      for (const block of styleBlocks) {
        const selector = block.match(/^\.([a-zA-Z][a-zA-Z0-9_-]*)/)?.[1];
        const styles = block.match(/\{([^}]+)\}/)?.[1];

        if (selector && styles) {
          const normalizedStyles = this.normalizeStyles(styles);
          const key = normalizedStyles;

          if (stylePatterns.has(key)) {
            const existing = stylePatterns.get(key);
            redundantPatterns.push({
              pattern: normalizedStyles,
              files: [existing.file, cssFile],
              selectors: [existing.selector, selector],
            });
          } else {
            stylePatterns.set(key, { file: cssFile, selector });
          }
        }
      }
    }

    this.redundantStyles = redundantPatterns;
    console.log(
      `✅ Found ${redundantPatterns.length} redundant style patterns`
    );
  }

  /**
   * Normalize CSS styles for comparison
   */
  normalizeStyles(styles) {
    return styles
      .replace(/\s+/g, " ")
      .replace(/;\s*/g, ";")
      .replace(/:\s*/g, ":")
      .trim()
      .toLowerCase();
  }

  /**
   * Generate comprehensive report
   */
  async generateReport() {
    console.log("📊 Generating analysis report...\n");

    // Calculate statistics
    this.analysisResults.totalCSSFiles = this.cssFiles.length;
    this.analysisResults.totalClasses = this.cssClasses.size;
    this.analysisResults.usedClasses = this.usedClasses.size;
    this.analysisResults.unusedClasses = this.unusedClasses.size;
    this.analysisResults.redundantPatterns = this.redundantStyles.length;
    this.analysisResults.estimatedSavings = Math.round(
      (this.unusedClasses.size / this.cssClasses.size) * 100
    );

    // Generate report
    const report = this.createReport();

    // Save report to file
    const reportPath = path.join(this.projectRoot, "css-analysis-report.md");
    fs.writeFileSync(reportPath, report);

    console.log("📋 Analysis Report Generated:");
    console.log(`📄 Report saved to: ${reportPath}\n`);

    // Print summary
    this.printSummary();
  }

  /**
   * Create detailed report
   */
  createReport() {
    const timestamp = new Date().toISOString();

    return `# CSS Analysis Report - SCISS Website
Generated: ${timestamp}

## 📊 Summary Statistics

- **Total CSS Files**: ${this.analysisResults.totalCSSFiles}
- **Total CSS Classes**: ${this.analysisResults.totalClasses}
- **Used Classes**: ${this.analysisResults.usedClasses}
- **Unused Classes**: ${this.analysisResults.unusedClasses}
- **Redundant Patterns**: ${this.analysisResults.redundantPatterns}
- **Estimated Savings**: ${this.analysisResults.estimatedSavings}%

## 🚫 Unused Classes (${this.unusedClasses.size})

${Array.from(this.unusedClasses)
  .sort()
  .map((cls) => `- \`.${cls}\``)
  .join("\n")}

## 🔄 Redundant Style Patterns (${this.redundantStyles.length})

${this.redundantStyles
  .map(
    (pattern) => `
### Pattern ${pattern.files.length} files
**Files**: ${pattern.files.join(", ")}
**Selectors**: ${pattern.selectors.map((s) => `\`.${s}\``).join(", ")}
**Styles**:
\`\`\`css
${pattern.pattern}
\`\`\`
`
  )
  .join("\n")}

## 🎯 Recommendations

### 1. Remove Unused Classes
Consider removing the unused classes listed above to reduce CSS bundle size.

### 2. Consolidate Redundant Patterns
Create shared utility classes for the redundant patterns identified above.

### 3. Create Shared Components
Consider creating shared component styles for common patterns like:
- Card layouts
- Badge styles
- Button variants
- Form elements

### 4. CSS Organization
- Move common patterns to utility classes
- Create component-specific CSS files
- Use CSS custom properties for consistent theming

## 📁 Files Analyzed

### CSS Files (${this.cssFiles.length})
${this.cssFiles.map((file) => `- ${file}`).join("\n")}

### JS Files (${this.jsFiles.length})
${this.jsFiles.map((file) => `- ${file}`).join("\n")}

---
*Report generated by CSS Analysis Script*
`;
  }

  /**
   * Print summary to console
   */
  printSummary() {
    console.log("📈 Analysis Summary:");
    console.log("====================");
    console.log(`📁 CSS Files: ${this.analysisResults.totalCSSFiles}`);
    console.log(`🎨 Total Classes: ${this.analysisResults.totalClasses}`);
    console.log(`✅ Used Classes: ${this.analysisResults.usedClasses}`);
    console.log(`❌ Unused Classes: ${this.analysisResults.unusedClasses}`);
    console.log(
      `🔄 Redundant Patterns: ${this.analysisResults.redundantPatterns}`
    );
    console.log(
      `💰 Estimated Savings: ${this.analysisResults.estimatedSavings}%`
    );

    if (this.unusedClasses.size > 0) {
      console.log("\n🚫 Top 10 Unused Classes:");
      Array.from(this.unusedClasses)
        .slice(0, 10)
        .forEach((cls) => {
          console.log(`   - .${cls}`);
        });
    }

    if (this.redundantStyles.length > 0) {
      console.log("\n🔄 Redundant Patterns Found:");
      this.redundantStyles.slice(0, 5).forEach((pattern, index) => {
        console.log(`   ${index + 1}. ${pattern.files.join(" ↔ ")}`);
      });
    }

    console.log("\n💡 Next Steps:");
    console.log("   1. Review the detailed report in css-analysis-report.md");
    console.log("   2. Remove unused classes carefully");
    console.log("   3. Consolidate redundant patterns");
    console.log("   4. Test thoroughly after changes");
  }
}

// Run analysis if script is executed directly
if (require.main === module) {
  const analyzer = new CSSAnalyzer();
  analyzer.analyze().catch(console.error);
}

module.exports = CSSAnalyzer;
