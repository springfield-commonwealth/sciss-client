#!/usr/bin/env node

/**
 * Legacy CSS Cleanup Script
 * Removes duplicate CSS rules and unused styles
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

// Patterns to remove (legacy CSS that's now in unified systems)
const patternsToRemove = [
  {
    name: "Legacy Container Rules",
    pattern:
      /\/\* Container styles moved to layout-system\.css \*\/[\s\S]*?\/\* End Container \*\/\s*/g,
    replacement: "/* Container styles moved to layout-system.css */\n",
  },
  {
    name: "Legacy Section Rules",
    pattern:
      /\/\* Section styles moved to layout-system\.css \*\/[\s\S]*?\/\* End Section \*\/\s*/g,
    replacement: "/* Section styles moved to layout-system.css */\n",
  },
  {
    name: "Legacy Grid Rules",
    pattern:
      /\/\* Grid styles moved to layout-system\.css \*\/[\s\S]*?\/\* End Grid \*\/\s*/g,
    replacement: "/* Grid styles moved to layout-system.css */\n",
  },
  {
    name: "Legacy Card Rules",
    pattern:
      /\/\* Card styles moved to card-system\.css \*\/[\s\S]*?\/\* End Card \*\/\s*/g,
    replacement: "/* Card styles moved to card-system.css */\n",
  },
  {
    name: "Legacy Button Rules",
    pattern:
      /\/\* Button styles moved to button-base\.css \*\/[\s\S]*?\/\* End Button \*\/\s*/g,
    replacement: "/* Button styles moved to button-base.css */\n",
  },
  {
    name: "Duplicate Grid Classes",
    pattern: /\.grid\s*\{[\s\S]*?\}/g,
    replacement: "/* Grid styles moved to layout-system.css */",
  },
  {
    name: "Duplicate Container Classes",
    pattern: /\.container\s*\{[\s\S]*?\}/g,
    replacement: "/* Container styles moved to layout-system.css */",
  },
  {
    name: "Duplicate Section Classes",
    pattern: /\.section\s*\{[\s\S]*?\}/g,
    replacement: "/* Section styles moved to layout-system.css */",
  },
  {
    name: "Duplicate Card Classes",
    pattern: /\.card\s*\{[\s\S]*?\}/g,
    replacement: "/* Card styles moved to card-system.css */",
  },
  {
    name: "Duplicate Button Classes",
    pattern: /\.btn\s*\{[\s\S]*?\}/g,
    replacement: "/* Button styles moved to button-base.css */",
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
    name: "Old Text Alignment Classes",
    pattern: /\.text-(center|left|right)\s*\{[\s\S]*?\}/g,
    replacement: "",
  },
  {
    name: "Old Spacing Classes",
    pattern: /\.(m|p)[tblrxy]?-[0-9]\s*\{[\s\S]*?\}/g,
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

    // Remove legacy patterns
    patternsToRemove.forEach(({ name, pattern, replacement }) => {
      const matches = content.match(pattern);
      if (matches) {
        content = content.replace(pattern, replacement);
        updated = true;
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
      .trim();

    if (updated) {
      fs.writeFileSync(filePath, content);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error cleaning up ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Optimize CSS bundle size
 */
function optimizeBundleSize() {
  console.log("\n📦 Optimizing CSS bundle size...");

  // Calculate total CSS size
  let totalSize = 0;
  const cssFiles = glob.sync("src/styles/**/*.css");

  cssFiles.forEach((file) => {
    const stats = fs.statSync(file);
    totalSize += stats.size;
  });

  console.log(
    `  📊 Total CSS bundle size: ${(totalSize / 1024).toFixed(2)} KB`
  );

  // Remove backup directory if it exists
  const backupDir = "src/styles/backup";
  if (fs.existsSync(backupDir)) {
    console.log(`  🗂️  Backup directory found: ${backupDir}`);
    console.log(
      `  💡 Consider removing backup after testing: rm -rf ${backupDir}`
    );
  }

  return totalSize;
}

/**
 * Main function
 */
function cleanupLegacyCSS() {
  console.log("🧹 Cleaning up legacy CSS...\n");

  let totalUpdates = 0;
  let filesUpdated = 0;

  filesToCleanup.forEach((filePattern) => {
    const files = glob.sync(filePattern);
    files.forEach((file) => {
      console.log(`📝 Processing: ${file}`);
      const updated = cleanupCSSFile(file);
      if (updated) {
        filesUpdated++;
        totalUpdates++;
      }
    });
  });

  // Optimize bundle size
  const bundleSize = optimizeBundleSize();

  console.log(`\n✅ Legacy CSS cleanup completed!`);
  console.log(`📊 Results:`);
  console.log(`  • Files processed: ${filesToCleanup.length}`);
  console.log(`  • Files updated: ${filesUpdated}`);
  console.log(`  • Total updates: ${totalUpdates}`);
  console.log(`  • Bundle size: ${(bundleSize / 1024).toFixed(2)} KB`);

  if (totalUpdates > 0) {
    console.log(`\n🎉 Legacy CSS has been cleaned up!`);
    console.log(`\n📋 Next steps:`);
    console.log(`  1. Test the application to ensure no styles are broken`);
    console.log(`  2. Remove backup directory if testing is successful`);
    console.log(`  3. Update documentation with new architecture`);
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
  optimizeBundleSize,
};
