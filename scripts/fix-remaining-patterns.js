#!/usr/bin/env node

/**
 * Fix Remaining Patterns Script
 * Finds and fixes any remaining old class patterns in JS/JSX files
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Files to check
const filesToCheck = ["src/components/**/*.js", "pages/**/*.js"];

// Patterns to fix
const patternsToFix = [
  // Grid patterns
  { old: "grid grid-1", replacement: "grid grid--1" },
  { old: "grid grid-2", replacement: "grid grid--2" },
  { old: "grid grid-3", replacement: "grid grid--3" },
  { old: "grid grid-4", replacement: "grid grid--4" },
  { old: "grid grid-auto-fit", replacement: "grid grid--auto-fit" },
  { old: "grid grid-auto-fill", replacement: "grid grid--auto-fill" },

  // Container patterns
  { old: "container container-full", replacement: "container container--full" },
  { old: "container container-sm", replacement: "container container--sm" },
  { old: "container container-lg", replacement: "container container--lg" },

  // Section patterns
  { old: "section section-small", replacement: "section section--sm" },
  { old: "section section-large", replacement: "section section--lg" },

  // Flex patterns
  { old: "flex flex-center", replacement: "flex flex--center" },
  { old: "flex flex-start", replacement: "flex flex--start" },
  { old: "flex flex-end", replacement: "flex flex--end" },
  { old: "flex flex-between", replacement: "flex flex--between" },
  { old: "flex flex-around", replacement: "flex flex--around" },

  // Card patterns
  { old: "card card-small", replacement: "card card--sm" },
  { old: "card card-large", replacement: "card card--lg" },
  { old: "card card-outline", replacement: "card card--outline" },
  { old: "card card-elevated", replacement: "card card--elevated" },
  { old: "card card-interactive", replacement: "card card--interactive" },

  // Text alignment patterns
  { old: "text-center", replacement: "text--center" },
  { old: "text-left", replacement: "text--left" },
  { old: "text-right", replacement: "text--right" },

  // Spacing patterns
  { old: "mb-5", replacement: "mb--lg" },
  { old: "mb-4", replacement: "mb--md" },
  { old: "mb-3", replacement: "mb--sm" },
  { old: "mb-2", replacement: "mb--xs" },
  { old: "mt-5", replacement: "mt--lg" },
  { old: "mt-4", replacement: "mt--md" },
  { old: "mt-3", replacement: "mt--sm" },
  { old: "mt-2", replacement: "mt--xs" },
  { old: "p-5", replacement: "p--lg" },
  { old: "p-4", replacement: "p--md" },
  { old: "p-3", replacement: "p--sm" },
  { old: "p-2", replacement: "p--xs" },
];

/**
 * Fix patterns in a file
 */
function fixPatterns(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let updated = false;
    let totalFixes = 0;

    patternsToFix.forEach(({ old, replacement }) => {
      const regex = new RegExp(old.replace(/\s+/g, "\\s+"), "g");
      const matches = content.match(regex);

      if (matches) {
        content = content.replace(regex, replacement);
        updated = true;
        totalFixes += matches.length;
        console.log(
          `  🔧 Fixed ${
            matches.length
          } instances of "${old}" to "${replacement}" in ${path.basename(
            filePath
          )}`
        );
      }
    });

    if (updated) {
      fs.writeFileSync(filePath, content);
      return { updated: true, fixes: totalFixes };
    }

    return { updated: false, fixes: 0 };
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return { updated: false, fixes: 0 };
  }
}

/**
 * Check for remaining old patterns
 */
function checkRemainingPatterns() {
  console.log("🔍 Checking for remaining old patterns...\n");

  const oldPatterns = [
    "grid-[0-9]",
    "container-[a-z]+",
    "section-[a-z]+",
    "flex-[a-z]+",
    "card-[a-z]+",
    "text-center",
    "text-left",
    "text-right",
    "mb-[0-9]",
    "mt-[0-9]",
    "p-[0-9]",
  ];

  oldPatterns.forEach((pattern) => {
    const files = glob.sync("src/**/*.js");
    const pages = glob.sync("pages/**/*.js");
    const allFiles = [...files, ...pages];

    allFiles.forEach((file) => {
      const content = fs.readFileSync(file, "utf8");
      const regex = new RegExp(pattern, "g");
      const matches = content.match(regex);

      if (matches) {
        console.log(
          `  ⚠️  Found ${matches.length} instances of "${pattern}" in ${file}`
        );
      }
    });
  });
}

/**
 * Main function
 */
function fixRemainingPatterns() {
  console.log("🔧 Fixing remaining old patterns...\n");

  let totalUpdates = 0;
  let filesUpdated = 0;
  let totalFixes = 0;

  filesToCheck.forEach((filePattern) => {
    const files = glob.sync(filePattern);
    files.forEach((file) => {
      console.log(`📝 Processing: ${file}`);
      const result = fixPatterns(file);
      if (result.updated) {
        filesUpdated++;
        totalUpdates++;
        totalFixes += result.fixes;
      }
    });
  });

  console.log(`\n✅ Pattern fixing completed!`);
  console.log(`📊 Results:`);
  console.log(`  • Files processed: ${filesToCheck.length}`);
  console.log(`  • Files updated: ${filesUpdated}`);
  console.log(`  • Total fixes: ${totalFixes}`);

  if (totalUpdates > 0) {
    console.log(`\n🎉 All remaining patterns have been fixed!`);
    console.log(`\n📋 Next steps:`);
    console.log(`  1. Test the application to ensure everything works`);
    console.log(`  2. Check carousel cards and other components`);
    console.log(`  3. Verify responsive behavior`);
  } else {
    console.log(`\nℹ️  No remaining patterns found to fix.`);
  }

  // Check for any remaining old patterns
  console.log(`\n🔍 Checking for any remaining old patterns...`);
  checkRemainingPatterns();
}

// Run if called directly
if (require.main === module) {
  fixRemainingPatterns();
}

module.exports = {
  fixPatterns,
  fixRemainingPatterns,
  checkRemainingPatterns,
};
