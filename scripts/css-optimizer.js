#!/usr/bin/env node

/**
 * CSS Optimizer for SCISS Website
 * Automatically optimizes and consolidates redundant styles
 */

const fs = require("fs");
const path = require("path");
const CSSAnalyzer = require("./analyze-css");

class CSSOptimizer extends CSSAnalyzer {
  constructor() {
    super();
    this.optimizations = [];
    this.sharedStyles = new Map();
  }

  /**
   * Run optimization analysis
   */
  async optimize() {
    console.log("🚀 Starting CSS Optimization for SCISS Website...\n");

    try {
      await this.analyze();
      await this.generateOptimizations();
      await this.createSharedStyles();
      await this.generateOptimizationReport();
    } catch (error) {
      console.error("❌ Optimization failed:", error.message);
      process.exit(1);
    }
  }

  /**
   * Generate optimization recommendations
   */
  async generateOptimizations() {
    console.log("🎯 Generating optimization recommendations...");

    // Analyze common patterns
    this.analyzeCommonPatterns();

    // Generate consolidation recommendations
    this.generateConsolidationRecommendations();

    // Generate removal recommendations
    this.generateRemovalRecommendations();
  }

  /**
   * Analyze common patterns across files
   */
  analyzeCommonPatterns() {
    const patterns = new Map();

    for (const cssFile of this.cssFiles) {
      const filePath = path.join(this.projectRoot, cssFile);
      const content = fs.readFileSync(filePath, "utf8");

      // Find common patterns
      const commonPatterns = [
        {
          name: "card-layout",
          regex:
            /\.([a-zA-Z][a-zA-Z0-9_-]*)\s*\{[^}]*background:\s*white[^}]*border-radius:\s*12px[^}]*box-shadow:\s*var\(--shadow-light\)[^}]*\}/g,
          template: `
.card-base {
  background: white;
  border-radius: 12px;
  box-shadow: var(--shadow-light);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-base:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-medium);
}`,
        },
        {
          name: "badge-style",
          regex:
            /\.([a-zA-Z][a-zA-Z0-9_-]*)\s*\{[^}]*background:\s*rgba\(31,\s*86,\s*164,\s*0\.9\)[^}]*color:\s*white[^}]*padding:\s*0\.25rem\s*0\.75rem[^}]*border-radius:\s*20px[^}]*\}/g,
          template: `
.badge-base {
  background: rgba(31, 86, 164, 0.9);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.badge-secondary {
  background: rgba(230, 196, 59, 0.9);
  color: var(--text-dark);
}`,
        },
        {
          name: "section-header",
          regex:
            /\.([a-zA-Z][a-zA-Z0-9_-]*)\s*\{[^}]*background:\s*linear-gradient\(135deg[^}]*color:\s*white[^}]*padding:\s*4rem\s*0[^}]*\}/g,
          template: `
.section-header-base {
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}`,
        },
      ];

      for (const pattern of commonPatterns) {
        let match;
        while ((match = pattern.regex.exec(content)) !== null) {
          const className = match[1];
          if (!patterns.has(pattern.name)) {
            patterns.set(pattern.name, {
              template: pattern.template,
              classes: [],
            });
          }
          patterns.get(pattern.name).classes.push(className);
        }
      }
    }

    this.sharedStyles = patterns;
  }

  /**
   * Generate consolidation recommendations
   */
  generateConsolidationRecommendations() {
    console.log("📋 Consolidation Recommendations:");

    for (const [patternName, pattern] of this.sharedStyles) {
      if (pattern.classes.length > 1) {
        console.log(`\n🔄 ${patternName.toUpperCase()}:`);
        console.log(`   Classes: ${pattern.classes.join(", ")}`);
        console.log(
          `   Recommendation: Create shared .${patternName}-base class`
        );
      }
    }
  }

  /**
   * Generate removal recommendations
   */
  generateRemovalRecommendations() {
    console.log("\n🗑️ Removal Recommendations:");

    // Group unused classes by file
    const unusedByFile = new Map();

    for (const cssClass of this.unusedClasses) {
      for (const cssFile of this.cssFiles) {
        const filePath = path.join(this.projectRoot, cssFile);
        const content = fs.readFileSync(filePath, "utf8");

        if (content.includes(`.${cssClass}`)) {
          if (!unusedByFile.has(cssFile)) {
            unusedByFile.set(cssFile, []);
          }
          unusedByFile.get(cssFile).push(cssClass);
        }
      }
    }

    for (const [file, classes] of unusedByFile) {
      console.log(`\n📁 ${file}:`);
      classes.forEach((cls) => {
        console.log(`   - Remove .${cls}`);
      });
    }
  }

  /**
   * Create shared styles file
   */
  async createSharedStyles() {
    console.log("\n📝 Creating shared styles...");

    let sharedCSS = `/* Shared Styles - Generated by CSS Optimizer */
/* Common patterns consolidated from across the codebase */

`;

    for (const [patternName, pattern] of this.sharedStyles) {
      if (pattern.classes.length > 1) {
        sharedCSS += `/* ${patternName.toUpperCase()} PATTERN */\n`;
        sharedCSS += pattern.template;
        sharedCSS += "\n\n";
      }
    }

    // Add utility classes
    sharedCSS += `/* UTILITY CLASSES */

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.mb-1 { margin-bottom: 0.5rem; }
.mb-2 { margin-bottom: 1rem; }
.mb-3 { margin-bottom: 1.5rem; }
.mb-4 { margin-bottom: 2rem; }
.mb-5 { margin-bottom: 3rem; }

.mt-1 { margin-top: 0.5rem; }
.mt-2 { margin-top: 1rem; }
.mt-3 { margin-top: 1.5rem; }
.mt-4 { margin-top: 2rem; }
.mt-5 { margin-top: 3rem; }

/* Responsive utilities */
@media (max-width: 768px) {
  .hide-mobile { display: none; }
}

@media (min-width: 769px) {
  .hide-desktop { display: none; }
}

/* Animation utilities */
.fade-in {
  animation: fadeIn 0.6s ease-out;
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

    const sharedPath = path.join(this.projectRoot, "src/styles/shared.css");
    fs.writeFileSync(sharedPath, sharedCSS);

    console.log(`✅ Shared styles created: ${sharedPath}`);
  }

  /**
   * Generate optimization report
   */
  async generateOptimizationReport() {
    console.log("\n📊 Generating optimization report...");

    const report = this.createOptimizationReport();
    const reportPath = path.join(
      this.projectRoot,
      "css-optimization-report.md"
    );
    fs.writeFileSync(reportPath, report);

    console.log(`📄 Optimization report saved: ${reportPath}`);
    this.printOptimizationSummary();
  }

  /**
   * Create optimization report
   */
  createOptimizationReport() {
    const timestamp = new Date().toISOString();

    return `# CSS Optimization Report - SCISS Website
Generated: ${timestamp}

## 📊 Analysis Summary

- **Total CSS Files**: ${this.analysisResults.totalCSSFiles}
- **Total Classes**: ${this.analysisResults.totalClasses}
- **Unused Classes**: ${this.analysisResults.unusedClasses}
- **Redundant Patterns**: ${this.analysisResults.redundantPatterns}
- **Estimated Savings**: ${this.analysisResults.estimatedSavings}%

## 🎯 Optimization Recommendations

### 1. Shared Patterns Identified

${Array.from(this.sharedStyles.entries())
  .map(
    ([name, pattern]) => `
#### ${name.toUpperCase()}
- **Classes**: ${pattern.classes.join(", ")}
- **Recommendation**: Use shared \`.${name}-base\` class
- **Files**: ${pattern.classes
      .map((cls) => this.findClassFile(cls))
      .filter(Boolean)
      .join(", ")}
`
  )
  .join("\n")}

### 2. Unused Classes to Remove

${Array.from(this.unusedClasses)
  .sort()
  .map((cls) => `- \`.${cls}\``)
  .join("\n")}

### 3. Redundant Patterns to Consolidate

${this.redundantStyles
  .map(
    (pattern) => `
#### Pattern in ${pattern.files.length} files
- **Files**: ${pattern.files.join(", ")}
- **Selectors**: ${pattern.selectors.map((s) => `\`.${s}\``).join(", ")}
- **Recommendation**: Create shared utility class
`
  )
  .join("\n")}

## 🚀 Implementation Steps

### Step 1: Create Shared Styles
1. Import the generated \`src/styles/shared.css\` in your main CSS file
2. Replace redundant patterns with shared classes
3. Update component references

### Step 2: Remove Unused Classes
1. Review each unused class carefully
2. Remove classes that are confirmed unused
3. Test thoroughly after removal

### Step 3: Consolidate Patterns
1. Replace redundant patterns with shared utilities
2. Update all component references
3. Remove duplicate CSS blocks

### Step 4: Performance Optimization
1. Minify CSS for production
2. Use CSS purging in build process
3. Implement critical CSS loading

## 📁 Generated Files

- \`src/styles/shared.css\` - Consolidated shared styles
- \`css-analysis-report.md\` - Detailed analysis report
- \`css-optimization-report.md\` - This optimization report

## 💡 Best Practices

1. **Use CSS Custom Properties**: Leverage your existing design tokens
2. **Component-Based CSS**: Keep styles close to components
3. **Utility-First**: Use utility classes for common patterns
4. **Performance**: Monitor bundle size and loading times
5. **Testing**: Always test visual regressions after changes

---
*Report generated by CSS Optimizer*
`;
  }

  /**
   * Find which file contains a specific class
   */
  findClassFile(className) {
    for (const cssFile of this.cssFiles) {
      const filePath = path.join(this.projectRoot, cssFile);
      const content = fs.readFileSync(filePath, "utf8");

      if (content.includes(`.${className}`)) {
        return cssFile;
      }
    }
    return null;
  }

  /**
   * Print optimization summary
   */
  printOptimizationSummary() {
    console.log("\n🎯 Optimization Summary:");
    console.log("========================");
    console.log(`📁 CSS Files Analyzed: ${this.analysisResults.totalCSSFiles}`);
    console.log(`🎨 Total Classes: ${this.analysisResults.totalClasses}`);
    console.log(`❌ Unused Classes: ${this.analysisResults.unusedClasses}`);
    console.log(
      `🔄 Redundant Patterns: ${this.analysisResults.redundantPatterns}`
    );
    console.log(
      `💰 Estimated Savings: ${this.analysisResults.estimatedSavings}%`
    );

    console.log("\n📋 Shared Patterns Created:");
    for (const [name, pattern] of this.sharedStyles) {
      if (pattern.classes.length > 1) {
        console.log(`   - ${name}: ${pattern.classes.length} classes`);
      }
    }

    console.log("\n💡 Next Steps:");
    console.log("   1. Review css-optimization-report.md");
    console.log("   2. Import src/styles/shared.css");
    console.log("   3. Replace redundant patterns with shared classes");
    console.log("   4. Remove unused classes carefully");
    console.log("   5. Test thoroughly after changes");
  }
}

// Run optimizer if script is executed directly
if (require.main === module) {
  const optimizer = new CSSOptimizer();
  optimizer.optimize().catch(console.error);
}

module.exports = CSSOptimizer;
