#!/usr/bin/env node

/**
 * Final CSS Cleanup Script
 * Removes all remaining legacy CSS patterns and old class names
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Files to process
const cssFiles = [
  "src/styles/**/*.css",
  "src/styles/globals.css",
  "src/styles/shared.css",
];

// Legacy patterns to remove
const legacyPatterns = [
  // Old section header patterns
  {
    name: "Legacy Section Header",
    pattern: /\.section-header-base\s*\{[\s\S]*?\}/g,
    replacement: "/* Section header styles moved to unified system */",
  },
  {
    name: "Legacy Section Header Variants",
    pattern: /\.section-header-[a-z-]+\s*\{[\s\S]*?\}/g,
    replacement: "/* Section header variant styles moved to unified system */",
  },

  // Old page header patterns
  {
    name: "Legacy Page Header",
    pattern: /\.page-header-[a-z-]+\s*\{[\s\S]*?\}/g,
    replacement: "/* Page header styles moved to unified system */",
  },

  // Old card patterns
  {
    name: "Legacy Card Patterns",
    pattern: /\.card-[a-z-]+\s*\{[\s\S]*?\}/g,
    replacement: "/* Card styles moved to card-system.css */",
  },

  // Old button patterns
  {
    name: "Legacy Button Patterns",
    pattern: /\.btn-[a-z-]+\s*\{[\s\S]*?\}/g,
    replacement: "/* Button styles moved to button-base.css */",
  },

  // Old grid patterns
  {
    name: "Legacy Grid Patterns",
    pattern: /\.grid-[0-9]\s*\{[\s\S]*?\}/g,
    replacement: "/* Grid styles moved to layout-system.css */",
  },

  // Old container patterns
  {
    name: "Legacy Container Patterns",
    pattern: /\.container-[a-z-]+\s*\{[\s\S]*?\}/g,
    replacement: "/* Container styles moved to layout-system.css */",
  },

  // Old spacing patterns
  {
    name: "Legacy Spacing Patterns",
    pattern: /\.(m|p|mt|mb|pt|pb)-[0-9]\s*\{[\s\S]*?\}/g,
    replacement: "/* Spacing styles moved to layout-system.css */",
  },

  // Old text alignment patterns
  {
    name: "Legacy Text Alignment",
    pattern: /\.text-(center|left|right)\s*\{[\s\S]*?\}/g,
    replacement: "/* Text alignment styles moved to layout-system.css */",
  },

  // Old flex patterns
  {
    name: "Legacy Flex Patterns",
    pattern: /\.flex-[a-z-]+\s*\{[\s\S]*?\}/g,
    replacement: "/* Flex styles moved to layout-system.css */",
  },

  // Old feature card patterns
  {
    name: "Legacy Feature Card",
    pattern: /\.feature-card-[a-z-]+\s*\{[\s\S]*?\}/g,
    replacement: "/* Feature card styles moved to card-system.css */",
  },

  // Old carousel patterns
  {
    name: "Legacy Carousel Patterns",
    pattern: /\.carousel-[a-z-]+\s*\{[\s\S]*?\}/g,
    replacement: "/* Carousel styles moved to unified system */",
  },

  // Old badge patterns
  {
    name: "Legacy Badge Patterns",
    pattern: /\.badge-[a-z-]+\s*\{[\s\S]*?\}/g,
    replacement: "/* Badge styles moved to unified system */",
  },

  // Old stats patterns
  {
    name: "Legacy Stats Patterns",
    pattern: /\.stats-[a-z-]+\s*\{[\s\S]*?\}/g,
    replacement: "/* Stats styles moved to unified system */",
  },

  // Old hero patterns
  {
    name: "Legacy Hero Patterns",
    pattern: /\.hero-[a-z-]+\s*\{[\s\S]*?\}/g,
    replacement: "/* Hero styles moved to unified system */",
  },
];

// Unused patterns to remove
const unusedPatterns = [
  {
    name: "Unused Grid Classes",
    pattern: /\.grid-[0-9]\s*\{[\s\S]*?\}/g,
    replacement: "",
  },
  {
    name: "Unused Container Classes",
    pattern: /\.container-[a-z]+\s*\{[\s\S]*?\}/g,
    replacement: "",
  },
  {
    name: "Unused Section Classes",
    pattern: /\.section-[a-z]+\s*\{[\s\S]*?\}/g,
    replacement: "",
  },
  {
    name: "Unused Card Classes",
    pattern: /\.card-[a-z]+\s*\{[\s\S]*?\}/g,
    replacement: "",
  },
  {
    name: "Unused Button Classes",
    pattern: /\.btn-[a-z]+\s*\{[\s\S]*?\}/g,
    replacement: "",
  },
  {
    name: "Unused Spacing Classes",
    pattern: /\.(m|p|mt|mb|pt|pb)-[0-9]\s*\{[\s\S]*?\}/g,
    replacement: "",
  },
  {
    name: "Unused Text Classes",
    pattern: /\.text-[a-z]+\s*\{[\s\S]*?\}/g,
    replacement: "",
  },
  {
    name: "Unused Flex Classes",
    pattern: /\.flex-[a-z]+\s*\{[\s\S]*?\}/g,
    replacement: "",
  },
];

/**
 * Clean up CSS file
 */
function cleanupCSSFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let updated = false;
    let totalRemovals = 0;

    // Remove legacy patterns
    legacyPatterns.forEach(({ name, pattern, replacement }) => {
      const matches = content.match(pattern);
      if (matches) {
        content = content.replace(pattern, replacement);
        updated = true;
        totalRemovals += matches.length;
        console.log(
          `  🗑️  Removed ${
            matches.length
          } legacy ${name} patterns from ${path.basename(filePath)}`
        );
      }
    });

    // Remove unused patterns
    unusedPatterns.forEach(({ name, pattern, replacement }) => {
      const matches = content.match(pattern);
      if (matches) {
        content = content.replace(pattern, replacement);
        updated = true;
        totalRemovals += matches.length;
        console.log(
          `  🗑️  Removed ${matches.length} unused ${name} from ${path.basename(
            filePath
          )}`
        );
      }
    });

    // Clean up empty lines and comments
    content = content
      .replace(/\n\s*\n\s*\n/g, "\n\n") // Remove multiple empty lines
      .replace(/\/\* [^*]* \*\/\s*\n/g, "") // Remove single-line comments
      .replace(/\/\*[\s\S]*?\*\/\s*\n/g, "") // Remove multi-line comments
      .trim();

    if (updated) {
      fs.writeFileSync(filePath, content);
      return { updated: true, removals: totalRemovals };
    }

    return { updated: false, removals: 0 };
  } catch (error) {
    console.error(`❌ Error cleaning up ${filePath}:`, error.message);
    return { updated: false, removals: 0 };
  }
}

/**
 * Calculate CSS bundle size
 */
function calculateBundleSize() {
  const cssFiles = glob.sync("src/styles/**/*.css");
  let totalSize = 0;
  let totalLines = 0;

  cssFiles.forEach((file) => {
    const stats = fs.statSync(file);
    const content = fs.readFileSync(file, "utf8");
    totalSize += stats.size;
    totalLines += content.split("\n").length;
  });

  return { size: totalSize, lines: totalLines };
}

/**
 * Main function
 */
function finalCSSCleanup() {
  console.log("🧹 Final CSS Cleanup - Removing Legacy Patterns...\n");

  const initialStats = calculateBundleSize();
  console.log(`📊 Initial CSS Bundle:`);
  console.log(`  • Size: ${(initialStats.size / 1024).toFixed(2)} KB`);
  console.log(`  • Lines: ${initialStats.lines.toLocaleString()}`);

  let totalFiles = 0;
  let filesUpdated = 0;
  let totalRemovals = 0;

  cssFiles.forEach((filePattern) => {
    const files = glob.sync(filePattern);
    files.forEach((file) => {
      console.log(`📝 Processing: ${file}`);
      const result = cleanupCSSFile(file);
      if (result.updated) {
        filesUpdated++;
        totalRemovals += result.removals;
      }
      totalFiles++;
    });
  });

  const finalStats = calculateBundleSize();
  const sizeReduction = (
    ((initialStats.size - finalStats.size) / initialStats.size) *
    100
  ).toFixed(1);
  const lineReduction = (
    ((initialStats.lines - finalStats.lines) / initialStats.lines) *
    100
  ).toFixed(1);

  console.log(`\n✅ Final CSS Cleanup completed!`);
  console.log(`📊 Results:`);
  console.log(`  • Files processed: ${totalFiles}`);
  console.log(`  • Files updated: ${filesUpdated}`);
  console.log(`  • Total removals: ${totalRemovals}`);
  console.log(
    `  • Bundle size: ${(finalStats.size / 1024).toFixed(
      2
    )} KB (${sizeReduction}% reduction)`
  );
  console.log(
    `  • Total lines: ${finalStats.lines.toLocaleString()} (${lineReduction}% reduction)`
  );

  if (filesUpdated > 0) {
    console.log(`\n🎉 Legacy CSS patterns have been completely removed!`);
    console.log(`\n📋 Next steps:`);
    console.log(`  1. Test the application to ensure everything works`);
    console.log(`  2. Check carousel cards and other components`);
    console.log(`  3. Verify responsive behavior`);
    console.log(`  4. Consider CSS minification for production`);
  } else {
    console.log(`\nℹ️  No legacy patterns found to remove.`);
  }
}

// Run if called directly
if (require.main === module) {
  finalCSSCleanup();
}

module.exports = {
  cleanupCSSFile,
  finalCSSCleanup,
  calculateBundleSize,
};
