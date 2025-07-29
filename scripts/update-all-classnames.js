#!/usr/bin/env node

/**
 * Update All Class Names Script
 * Comprehensive update of all class names to use new unified CSS architecture
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Files to update
const filesToUpdate = ["src/components/**/*.js", "pages/**/*.js"];

// Comprehensive class mappings
const classMappings = [
  // Card system updates
  { old: "card-base", replacement: "card" },
  { old: "card-layout-base", replacement: "card" },
  { old: "card-preview", replacement: "card card--sm" },
  { old: "card-detail", replacement: "card card--lg" },
  { old: "card-feature", replacement: "card card--feature" },
  { old: "card-interactive", replacement: "card card--interactive" },
  { old: "card-elevated", replacement: "card card--elevated" },
  { old: "card-outline", replacement: "card card--outline" },

  // Card component updates
  { old: "card-image", replacement: "card__image" },
  { old: "card-photo", replacement: "card__image" },
  { old: "card-title", replacement: "card__title" },
  { old: "card-content", replacement: "card__content" },
  { old: "card-description", replacement: "card__description" },
  { old: "card-footer", replacement: "card__footer" },
  { old: "card-header", replacement: "card__header" },
  { old: "card-bio", replacement: "card__bio" },
  { old: "card-info", replacement: "card__info" },
  { old: "card-details", replacement: "card__details" },
  { old: "card-features", replacement: "card__features" },
  { old: "card-highlights", replacement: "card__highlights" },
  { old: "card-expertise", replacement: "card__expertise" },
  { old: "card-courses", replacement: "card__courses" },
  { old: "card-outcomes", replacement: "card__outcomes" },

  // Section updates
  { old: "section-title", replacement: "section__title" },
  { old: "section-subtitle", replacement: "section__subtitle" },
  { old: "section-description", replacement: "section__description" },
  { old: "section-divider", replacement: "section__divider" },
  { old: "feature-section-image", replacement: "feature-section__image" },
  {
    old: "feature-section-image__figure",
    replacement: "feature-section__figure",
  },
  {
    old: "feature-section-image__picture",
    replacement: "feature-section__picture",
  },
  { old: "feature-section-image__img", replacement: "feature-section__img" },
  { old: "feature-section-text", replacement: "feature-section__text" },

  // Carousel updates
  { old: "carousel-card-image", replacement: "carousel-card__image" },

  // Directory updates
  { old: "category-overview-card", replacement: "category-overview-card" },

  // Activity updates
  { old: "activity-preview-card", replacement: "activity-preview-card" },
  { old: "sport-card", replacement: "sport-card" },
  { old: "fitness-card", replacement: "fitness-card" },
  { old: "recreation-card", replacement: "recreation-card" },

  // Service updates
  { old: "service-category", replacement: "service-category" },
  { old: "application-step", replacement: "application-step" },
  { old: "service-card", replacement: "service-card" },

  // Safety updates
  { old: "safety-category", replacement: "safety-category" },
  { old: "comm-item", replacement: "comm-item" },
  { old: "health-req-item", replacement: "health-req-item" },
  { old: "packing-category", replacement: "packing-category" },
  { old: "travel-tip-card", replacement: "travel-tip-card" },
  { old: "protocol-card", replacement: "protocol-card" },
  { old: "testimonial-card", replacement: "testimonial-card" },

  // Day updates
  { old: "day-card", replacement: "day-card" },

  // Button content updates
  { old: "btn-content", replacement: "btn__content" },

  // Text alignment updates (if any remaining)
  { old: "text-center", replacement: "text--center" },
  { old: "text-left", replacement: "text--left" },
  { old: "text-right", replacement: "text--right" },

  // Spacing updates (if any remaining)
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
 * Update class names in a file
 */
function updateClassNames(filePath) {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let updated = false;

    classMappings.forEach(({ old, replacement }) => {
      // Match class names in className attributes
      const classNameRegex = new RegExp(
        `className=["'][^"']*\\b${old}\\b[^"']*["']`,
        "g"
      );
      const matches = content.match(classNameRegex);

      if (matches) {
        content = content.replace(classNameRegex, (match) => {
          return match.replace(new RegExp(`\\b${old}\\b`, "g"), replacement);
        });
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
function updateAllClassNames() {
  console.log("🔄 Updating all class names to unified architecture...\n");

  let totalUpdates = 0;
  let filesUpdated = 0;

  filesToUpdate.forEach((filePattern) => {
    const files = glob.sync(filePattern);
    files.forEach((file) => {
      console.log(`📝 Processing: ${file}`);
      const updated = updateClassNames(file);
      if (updated) {
        filesUpdated++;
        totalUpdates++;
      }
    });
  });

  console.log(`\n✅ All class names updated!`);
  console.log(`📊 Results:`);
  console.log(`  • Files processed: ${filesToUpdate.length}`);
  console.log(`  • Files updated: ${filesUpdated}`);
  console.log(`  • Total updates: ${totalUpdates}`);

  if (totalUpdates > 0) {
    console.log(
      `\n🎉 All class names have been updated to use the new unified architecture!`
    );
    console.log(`\n📋 Next steps:`);
    console.log(
      `  1. Test the application to ensure all styles work correctly`
    );
    console.log(`  2. Check for any remaining old class patterns`);
    console.log(`  3. Verify responsive behavior across all components`);
    console.log(`  4. Update any remaining hardcoded styles`);
  } else {
    console.log(`\nℹ️  No class names found to update.`);
  }
}

// Run if called directly
if (require.main === module) {
  updateAllClassNames();
}

module.exports = {
  updateClassNames,
  updateAllClassNames,
  classMappings,
};
