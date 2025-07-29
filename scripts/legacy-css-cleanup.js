#!/usr/bin/env node

/**
 * Legacy CSS Cleanup Script
 * Removes legacy CSS code that's been replaced by the new unified systems
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Files to clean up
const filesToCleanup = [
  "src/styles/globals.css",
  "src/styles/shared.css",
  "src/styles/components/*.css",
  "src/styles/pages/*.css",
  "src/styles/sections/*.css",
];

// Legacy patterns to remove (replaced by unified systems)
const legacyPatterns = [
  // Legacy button patterns (replaced by button-base.css)
  {
    name: "Legacy Button Rules",
    pattern: /\.btn\s*\{[\s\S]*?\}/g,
    replacement: "/* Button styles moved to button-base.css */",
  },
  {
    name: "Legacy Button Variants",
    pattern:
      /\.btn-(primary|secondary|outline|ghost|success|warning|error)\s*\{[\s\S]*?\}/g,
    replacement: "/* Button variant styles moved to button-base.css */",
  },
  {
    name: "Legacy Button Sizes",
    pattern: /\.btn-(sm|lg)\s*\{[\s\S]*?\}/g,
    replacement: "/* Button size styles moved to button-base.css */",
  },

  // Legacy layout patterns (replaced by layout-system.css)
  {
    name: "Legacy Container Rules",
    pattern: /\.container\s*\{[\s\S]*?\}/g,
    replacement: "/* Container styles moved to layout-system.css */",
  },
  {
    name: "Legacy Section Rules",
    pattern: /\.section\s*\{[\s\S]*?\}/g,
    replacement: "/* Section styles moved to layout-system.css */",
  },
  {
    name: "Legacy Grid Rules",
    pattern: /\.grid\s*\{[\s\S]*?\}/g,
    replacement: "/* Grid styles moved to layout-system.css */",
  },
  {
    name: "Legacy Flex Rules",
    pattern: /\.flex\s*\{[\s\S]*?\}/g,
    replacement: "/* Flex styles moved to layout-system.css */",
  },

  // Legacy card patterns (replaced by card-system.css)
  {
    name: "Legacy Card Rules",
    pattern: /\.card\s*\{[\s\S]*?\}/g,
    replacement: "/* Card styles moved to card-system.css */",
  },
  {
    name: "Legacy Card Variants",
    pattern: /\.card-(sm|lg|outline|elevated|interactive)\s*\{[\s\S]*?\}/g,
    replacement: "/* Card variant styles moved to card-system.css */",
  },
  {
    name: "Legacy Card Components",
    pattern:
      /\.card-(image|title|content|footer|header|bio|info|details|features|highlights|expertise|courses|outcomes)\s*\{[\s\S]*?\}/g,
    replacement: "/* Card component styles moved to card-system.css */",
  },

  // Legacy spacing patterns (replaced by design tokens)
  {
    name: "Legacy Spacing Classes",
    pattern: /\.(m|p)[tblrxy]?-[0-9]\s*\{[\s\S]*?\}/g,
    replacement: "/* Spacing styles moved to design tokens */",
  },

  // Legacy text alignment patterns (replaced by design tokens)
  {
    name: "Legacy Text Alignment",
    pattern: /\.text-(center|left|right)\s*\{[\s\S]*?\}/g,
    replacement: "/* Text alignment styles moved to design tokens */",
  },

  // Legacy color patterns (replaced by design tokens)
  {
    name: "Legacy Color Variables",
    pattern:
      /--(primary|secondary|success|warning|error|gray)-[0-9]+:\s*#[0-9a-fA-F]{3,6};/g,
    replacement: "/* Color variables moved to design tokens */",
  },

  // Legacy typography patterns (replaced by design tokens)
  {
    name: "Legacy Typography",
    pattern: /\.text-(xs|sm|base|lg|xl|2xl)\s*\{[\s\S]*?\}/g,
    replacement: "/* Typography styles moved to design tokens */",
  },

  // Legacy shadow patterns (replaced by design tokens)
  {
    name: "Legacy Shadow Classes",
    pattern: /\.shadow-(sm|md|lg|xl)\s*\{[\s\S]*?\}/g,
    replacement: "/* Shadow styles moved to design tokens */",
  },
];

// Unused CSS patterns to remove
const unusedPatterns = [
  {
    name: "Old Grid Classes",
    pattern: /\.grid-[0-9]\s*\{[\s\S]*?\}/g,
    replacement: "",
  },
  {
    name: "Old Container Classes",
    pattern: /\.container-(base|full|sm|lg)\s*\{[\s\S]*?\}/g,
    replacement: "",
  },
  {
    name: "Old Section Classes",
    pattern: /\.section-(base|small|large)\s*\{[\s\S]*?\}/g,
    replacement: "",
  },
  {
    name: "Old Card Classes",
    pattern: /\.card-(base|layout-base|preview|detail)\s*\{[\s\S]*?\}/g,
    replacement: "",
  },
  {
    name: "Old Button Classes",
    pattern: /\.btn-(primary|secondary|outline|ghost)\s*\{[\s\S]*?\}/g,
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
    let totalRemoved = 0;

    // Remove legacy patterns
    legacyPatterns.forEach(({ name, pattern, replacement }) => {
      const matches = content.match(pattern);
      if (matches) {
        content = content.replace(pattern, replacement);
        updated = true;
        totalRemoved += matches.length;
        console.log(
          `  🧹 Removed ${matches.length} ${name} patterns in ${path.basename(
            filePath
          )}`
        );
      }
    });

    // Remove unused patterns
    unusedPatterns.forEach(({ name, pattern, replacement }) => {
      const matches = content.match(pattern);
      if (matches) {
        content = content.replace(pattern, replacement);
        updated = true;
        totalRemoved += matches.length;
        console.log(
          `  🗑️  Removed ${matches.length} ${name} patterns in ${path.basename(
            filePath
          )}`
        );
      }
    });

    // Clean up empty lines and comments
    content = content
      .replace(/\n\s*\n\s*\n/g, "\n\n") // Remove multiple empty lines
      .replace(/\/\* [^*]* \*\/\s*\n/g, "") // Remove single-line comments
      .replace(/^\s*\/\*[\s\S]*?\*\/\s*$/gm, "") // Remove multi-line comments
      .replace(/^\s*\/\*[\s\S]*?\*\/\s*$/gm, "") // Remove more multi-line comments
      .trim();

    if (updated) {
      fs.writeFileSync(filePath, content);
      return { updated: true, removed: totalRemoved };
    }

    return { updated: false, removed: 0 };
  } catch (error) {
    console.error(`❌ Error cleaning up ${filePath}:`, error.message);
    return { updated: false, removed: 0 };
  }
}

/**
 * Remove backup directory
 */
function removeBackupDirectory() {
  const backupDir = "src/styles/backup";
  if (fs.existsSync(backupDir)) {
    try {
      fs.rmSync(backupDir, { recursive: true, force: true });
      console.log(`  🗂️  Removed backup directory: ${backupDir}`);
      return true;
    } catch (error) {
      console.error(`❌ Error removing backup directory:`, error.message);
      return false;
    }
  }
  return false;
}

/**
 * Calculate CSS bundle size
 */
function calculateBundleSize() {
  let totalSize = 0;
  let totalLines = 0;
  const cssFiles = glob.sync("src/styles/**/*.css");

  cssFiles.forEach((file) => {
    const stats = fs.statSync(file);
    const content = fs.readFileSync(file, "utf8");
    const lines = content.split("\n").length;

    totalSize += stats.size;
    totalLines += lines;
  });

  return { size: totalSize, lines: totalLines, files: cssFiles.length };
}

/**
 * Main function
 */
function cleanupLegacyCSS() {
  console.log("🧹 Cleaning up legacy CSS code...\n");

  // Calculate initial size
  const initialStats = calculateBundleSize();
  console.log(`📊 Initial CSS bundle:`);
  console.log(`  • Files: ${initialStats.files}`);
  console.log(`  • Lines: ${initialStats.lines.toLocaleString()}`);
  console.log(`  • Size: ${(initialStats.size / 1024).toFixed(2)} KB`);

  let totalUpdates = 0;
  let filesUpdated = 0;
  let totalRemoved = 0;

  filesToCleanup.forEach((filePattern) => {
    const files = glob.sync(filePattern);
    files.forEach((file) => {
      console.log(`📝 Processing: ${file}`);
      const result = cleanupCSSFile(file);
      if (result.updated) {
        filesUpdated++;
        totalUpdates++;
        totalRemoved += result.removed;
      }
    });
  });

  // Remove backup directory
  const backupRemoved = removeBackupDirectory();

  // Calculate final size
  const finalStats = calculateBundleSize();

  console.log(`\n✅ Legacy CSS cleanup completed!`);
  console.log(`📊 Results:`);
  console.log(`  • Files processed: ${filesToCleanup.length}`);
  console.log(`  • Files updated: ${filesUpdated}`);
  console.log(`  • Total patterns removed: ${totalRemoved}`);
  console.log(`  • Backup directory removed: ${backupRemoved ? "Yes" : "No"}`);

  console.log(`\n📦 Bundle Size Comparison:`);
  console.log(
    `  • Before: ${(initialStats.size / 1024).toFixed(
      2
    )} KB (${initialStats.lines.toLocaleString()} lines)`
  );
  console.log(
    `  • After: ${(finalStats.size / 1024).toFixed(
      2
    )} KB (${finalStats.lines.toLocaleString()} lines)`
  );
  console.log(
    `  • Reduction: ${(
      ((initialStats.size - finalStats.size) / initialStats.size) *
      100
    ).toFixed(1)}%`
  );
  console.log(
    `  • Lines removed: ${(
      initialStats.lines - finalStats.lines
    ).toLocaleString()}`
  );

  if (totalUpdates > 0) {
    console.log(`\n🎉 Legacy CSS has been cleaned up!`);
    console.log(`\n📋 Next steps:`);
    console.log(`  1. Test the application to ensure no styles are broken`);
    console.log(`  2. Verify all components render correctly`);
    console.log(`  3. Check responsive behavior across all pages`);
    console.log(`  4. Consider CSS minification for production`);
  } else {
    console.log(`\nℹ️  No legacy CSS found to clean up.`);
  }
}

// Run if called directly
if (require.main === module) {
  cleanupLegacyCSS();
}

module.exports = {
  cleanupCSSFile,
  cleanupLegacyCSS,
  removeBackupDirectory,
  calculateBundleSize,
};
