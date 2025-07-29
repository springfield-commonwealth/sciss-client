#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Specific files that need updating
const filesToUpdate = [
  "pages/activities/[slug].js",
  "pages/trips/[slug].js",
  "pages/courses/[slug].js",
];

// Button class mappings
const buttonMappings = [
  { old: "btn btn-primary", replacement: "btn btn--primary" },
  { old: "btn btn-secondary", replacement: "btn btn--secondary" },
  { old: "btn btn-outline", replacement: "btn btn--outline" },
  { old: "btn btn-primary btn-large", replacement: "btn btn--primary btn--lg" },
  {
    old: "btn btn-secondary btn-large",
    replacement: "btn btn--secondary btn--lg",
  },
  { old: "btn btn-outline btn-large", replacement: "btn btn--outline btn--lg" },
];

function updateFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, "utf8");
    let updated = false;

    buttonMappings.forEach(({ old, replacement }) => {
      const regex = new RegExp(old.replace(/\s+/g, "\\s+"), "g");
      const matches = content.match(regex);

      if (matches) {
        content = content.replace(regex, replacement);
        updated = true;
        console.log(
          `  🔄 Updated ${
            matches.length
          } instances of "${old}" in ${path.basename(filePath)}`
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

function main() {
  console.log("🔄 Updating remaining button classes...\n");

  let totalUpdates = 0;
  let filesUpdated = 0;

  filesToUpdate.forEach((filePath) => {
    console.log(`📝 Processing: ${filePath}`);
    const updated = updateFile(filePath);
    if (updated) {
      filesUpdated++;
      totalUpdates++;
    }
  });

  console.log(`\n✅ Update completed!`);
  console.log(`📊 Results:`);
  console.log(`  • Files processed: ${filesToUpdate.length}`);
  console.log(`  • Files updated: ${filesUpdated}`);
  console.log(`  • Total updates: ${totalUpdates}`);
}

main();
