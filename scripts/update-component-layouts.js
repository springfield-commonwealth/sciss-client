#!/usr/bin/env node

/**
 * Update Component Layout Classes Script
 * Converts old layout classes to replacement unified layout system in components
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Files to update
const filesToUpdate = ["src/components/**/*.js", "pages/**/*.js"];

// Layout class mappings for components
const layoutMappings = [
  // Grid classes
  { old: "grid grid-1", replacement: "grid grid--1" },
  { old: "grid grid-2", replacement: "grid grid--2" },
  { old: "grid grid-3", replacement: "grid grid--3" },
  { old: "grid grid-4", replacement: "grid grid--4" },
  { old: "grid grid-auto-fit", replacement: "grid grid--auto-fit" },
  { old: "grid grid-auto-fill", replacement: "grid grid--auto-fill" },

  // Container classes
  { old: "container container-full", replacement: "container container--full" },
  { old: "container container-sm", replacement: "container container--sm" },
  { old: "container container-lg", replacement: "container container--lg" },

  // Section classes
  { old: "section section-small", replacement: "section section--sm" },
  { old: "section section-large", replacement: "section section--lg" },

  // Flex classes
  { old: "flex flex-center", replacement: "flex flex--center" },
  { old: "flex flex-start", replacement: "flex flex--start" },
  { old: "flex flex-end", replacement: "flex flex--end" },
  { old: "flex flex-between", replacement: "flex flex--between" },
  { old: "flex flex-around", replacement: "flex flex--around" },

  // Card classes
  { old: "card card-small", replacement: "card card--sm" },
  { old: "card card-large", replacement: "card card--lg" },
  { old: "card card-outline", replacement: "card card--outline" },
  { old: "card card-elevated", replacement: "card card--elevated" },
  { old: "card card-interactive", replacement: "card card--interactive" },

  // Text alignment classes
  { old: "text-center", replacement: "text--center" },
  { old: "text-left", replacement: "text--left" },
  { old: "text-right", replacement: "text--right" },

  // Spacing classes
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
 * Update layout classes in a component file
 */
function updateComponentLayouts(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let updated = false;

    layoutMappings.forEach(({ old, replacement }) => {
      const regex = new RegExp(old.replace(/\s+/g, "\\s+"), "g");
      const matches = content.match(regex);

      if (matches) {
        content = content.replace(regex, replacement);
        updated = true;
        console.log(
          `  🔄 Updated ${
            matches.length
          } instances of "${old}" to "${replacement}" in ${path.basename(
            filePath
          )}`
        );
      }
    });

    if (updated) {
      fs.writeFileSync(filePath, content);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Main function
 */
function updateAllComponentLayouts() {
  console.log("🔄 Updating component layout classes to unified system...\n");

  let totalUpdates = 0;
  let filesUpdated = 0;

  filesToUpdate.forEach((filePattern) => {
    const files = glob.sync(filePattern);
    files.forEach((file) => {
      console.log(`📝 Processing: ${file}`);
      const updated = updateComponentLayouts(file);
      if (updated) {
        filesUpdated++;
        totalUpdates++;
      }
    });
  });

  console.log(`\n✅ Component layout update completed!`);
  console.log(`📊 Results:`);
  console.log(`  • Files processed: ${filesToUpdate.length}`);
  console.log(`  • Files updated: ${filesUpdated}`);
  console.log(`  • Total updates: ${totalUpdates}`);

  if (totalUpdates > 0) {
    console.log(`\n🎉 All component layout classes have been updated!`);
    console.log(`\n📋 Next steps:`);
    console.log(`  1. Test the application to ensure layouts work correctly`);
    console.log(`  2. Check for any remaining old layout classes`);
    console.log(`  3. Verify responsive behavior`);
    console.log(`  4. Remove legacy CSS after testing`);
  } else {
    console.log(`\nℹ️  No component layout classes found to update.`);
  }
}

// Run if called directly
if (require.main === module) {
  updateAllComponentLayouts();
}

module.exports = {
  updateComponentLayouts,
  updateAllComponentLayouts,
  layoutMappings,
};
