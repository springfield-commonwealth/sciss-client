#!/usr/bin/env node

/**
 * Layout Migration Script
 * Converts old layout classes to new unified layout system
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Files to migrate
const filesToMigrate = [
  "src/styles/globals.css",
  "src/styles/shared.css",
  "src/styles/components/*.css",
  "src/styles/pages/*.css",
  "src/styles/sections/*.css",
];

// Layout class mappings
const layoutMappings = [
  // Container classes
  { old: "container-base", replacement: "container" },
  { old: "container-full", replacement: "container--full" },

  // Section classes
  { old: "section-base", replacement: "section" },
  { old: "section-small", replacement: "section--sm" },
  { old: "section-large", replacement: "section--lg" },

  // Grid classes
  { old: "grid-base", replacement: "grid" },
  { old: "grid-2", replacement: "grid--2" },
  { old: "grid-3", replacement: "grid--3" },
  { old: "grid-4", replacement: "grid--4" },
  { old: "grid-auto-fit", replacement: "grid--auto-fit" },
  { old: "grid-auto-fill", replacement: "grid--auto-fill" },

  // Flex classes
  { old: "flex-center", replacement: "flex--center" },
  { old: "flex-start", replacement: "flex--start" },
  { old: "flex-end", replacement: "flex--end" },
  { old: "flex-between", replacement: "flex--between" },
  { old: "flex-around", replacement: "flex--around" },

  // Card classes
  { old: "card-base", replacement: "card" },
  { old: "card-layout-base", replacement: "card" },
  { old: "card-preview", replacement: "card--sm" },
  { old: "card-detail", replacement: "card--lg" },
  { old: "card-feature", replacement: "card--feature" },

  // Utility classes
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

// CSS class patterns to replace
const cssPatterns = [
  {
    name: "Container Classes",
    pattern: /\.container\s*\{[\s\S]*?\}/g,
    replacement: "/* Container styles moved to layout-system.css */",
  },
  {
    name: "Section Classes",
    pattern: /\.section\s*\{[\s\S]*?\}/g,
    replacement: "/* Section styles moved to layout-system.css */",
  },
  {
    name: "Grid Classes",
    pattern: /\.grid\s*\{[\s\S]*?\}/g,
    replacement: "/* Grid styles moved to layout-system.css */",
  },
  {
    name: "Card Classes",
    pattern: /\.card\s*\{[\s\S]*?\}/g,
    replacement: "/* Card styles moved to card-system.css */",
  },
];

/**
 * Update layout classes in a file
 */
function updateLayoutClasses(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let updated = false;

    // Update class names in HTML/JSX
    layoutMappings.forEach(({ old, replacement }) => {
      const regex = new RegExp(`\\b${old}\\b`, "g");
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

    // Update CSS patterns
    cssPatterns.forEach(({ name, pattern, replacement }) => {
      const matches = content.match(pattern);
      if (matches) {
        content = content.replace(pattern, replacement);
        updated = true;
        console.log(
          `  🔄 Replaced ${matches.length} ${name} patterns in ${path.basename(
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
 * Update index.css to import new layout systems
 */
function updateIndexCSS() {
  const indexPath = "src/styles/index.css";
  try {
    let content = fs.readFileSync(indexPath, "utf8");

    // Add layout system imports if they don't exist
    const layoutImports = [
      "/* Layout System */",
      "@import './components/layout/layout-system.css';",
      "@import './components/cards/card-system.css';",
      "",
    ];

    // Check if imports already exist
    if (!content.includes("layout-system.css")) {
      // Find the right place to insert (after design tokens)
      const designTokensEnd = content.indexOf("/* Component System */");
      if (designTokensEnd !== -1) {
        const before = content.substring(0, designTokensEnd);
        const after = content.substring(designTokensEnd);
        content = before + layoutImports.join("\n") + after;

        fs.writeFileSync(indexPath, content);
        console.log("  ✅ Updated index.css with layout system imports");
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error(`❌ Error updating index.css:`, error.message);
    return false;
  }
}

/**
 * Main function
 */
function migrateLayoutSystem() {
  console.log("🔄 Migrating layout system to unified architecture...\n");

  let totalUpdates = 0;
  let filesUpdated = 0;

  filesToMigrate.forEach((filePattern) => {
    const files = glob.sync(filePattern);
    files.forEach((file) => {
      console.log(`📝 Processing: ${file}`);
      const updated = updateLayoutClasses(file);
      if (updated) {
        filesUpdated++;
        totalUpdates++;
      }
    });
  });

  // Update index.css
  const indexUpdated = updateIndexCSS();
  if (indexUpdated) {
    totalUpdates++;
  }

  console.log(`\n✅ Layout migration completed!`);
  console.log(`📊 Results:`);
  console.log(`  • Files processed: ${filesToMigrate.length}`);
  console.log(`  • Files updated: ${filesUpdated}`);
  console.log(`  • Total updates: ${totalUpdates}`);

  if (totalUpdates > 0) {
    console.log(`\n🎉 Layout system has been unified!`);
    console.log(`\n📋 Next steps:`);
    console.log(`  1. Test the application to ensure layouts work correctly`);
    console.log(`  2. Update any remaining hardcoded layout classes`);
    console.log(`  3. Remove legacy CSS after testing`);
    console.log(`  4. Update component usage to use new layout classes`);
  } else {
    console.log(`\nℹ️  No layout classes found to update.`);
  }
}

// Run if called directly
if (require.main === module) {
  migrateLayoutSystem();
}

module.exports = {
  updateLayoutClasses,
  migrateLayoutSystem,
  layoutMappings,
};
