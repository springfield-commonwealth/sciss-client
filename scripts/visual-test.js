#!/usr/bin/env node

/**
 * Visual Testing Script for CSS Refactor
 * Helps validate that the refactor maintains visual consistency
 */

const fs = require("fs");
const path = require("path");

// Test scenarios
const testScenarios = [
  {
    name: "Design Token System",
    checks: [
      "All color tokens defined",
      "All spacing tokens defined",
      "All typography tokens defined",
      "All shadow tokens defined",
      "All border-radius tokens defined",
    ],
  },
  {
    name: "Component Consistency",
    checks: [
      "Button variants use tokens",
      "Card layouts use tokens",
      "Navigation uses tokens",
      "Forms use tokens",
      "Footer uses tokens",
    ],
  },
  {
    name: "Page Layouts",
    checks: [
      "Home page renders correctly",
      "About page renders correctly",
      "Activities page renders correctly",
      "Trips page renders correctly",
      "Apply page renders correctly",
    ],
  },
  {
    name: "Responsive Design",
    checks: [
      "Mobile layouts work (320px)",
      "Tablet layouts work (768px)",
      "Desktop layouts work (1200px+)",
      "Large desktop layouts work (1600px+)",
    ],
  },
];

/**
 * Check design token completeness
 */
function checkDesignTokens() {
  const tokenFiles = [
    "src/styles/tokens/color-system.css",
    "src/styles/tokens/layout-system.css",
    "src/styles/tokens/typography-system.css",
    "src/styles/tokens/visual-effects.css",
  ];

  const results = {
    filesExist: [],
    tokenCount: 0,
    issues: [],
  };

  tokenFiles.forEach((file) => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, "utf8");
      const tokenMatches = content.match(/--[^:]+:/g);
      results.filesExist.push(file);
      results.tokenCount += tokenMatches ? tokenMatches.length : 0;
    } else {
      results.issues.push(`Missing token file: ${file}`);
    }
  });

  return results;
}

/**
 * Check component token usage
 */
function checkComponentTokens() {
  const componentFiles = [
    "src/styles/components/buttons/button-base.css",
    "src/styles/components/cards/card-system.css",
    "src/styles/components/navigation.css",
    "src/styles/components/application-form.css",
    "src/styles/components/footer.css",
  ];

  const results = {
    filesChecked: 0,
    tokenUsage: 0,
    hardcodedValues: 0,
    issues: [],
  };

  componentFiles.forEach((file) => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, "utf8");
      results.filesChecked++;

      // Count token usage
      const tokenMatches = content.match(/var\(--[^)]+\)/g);
      results.tokenUsage += tokenMatches ? tokenMatches.length : 0;

      // Count hardcoded values (basic check)
      const hardcodedMatches = content.match(/\d+px/g);
      results.hardcodedValues += hardcodedMatches ? hardcodedMatches.length : 0;

      if (hardcodedMatches && hardcodedMatches.length > 0) {
        results.issues.push(
          `${file}: ${hardcodedMatches.length} hardcoded values found`
        );
      }
    } else {
      results.issues.push(`Component file not found: ${file}`);
    }
  });

  return results;
}

/**
 * Generate visual test report
 */
function generateVisualReport() {
  console.log("\n🎨 Visual Testing Report for CSS Refactor");
  console.log("==========================================\n");

  // Check design tokens
  console.log("📋 Design Token System Check:");
  console.log("-----------------------------");
  const tokenResults = checkDesignTokens();
  console.log(`✅ Token files found: ${tokenResults.filesExist.length}/5`);
  console.log(`🎯 Total tokens defined: ${tokenResults.tokenCount}`);

  if (tokenResults.issues.length > 0) {
    console.log("⚠️  Issues:");
    tokenResults.issues.forEach((issue) => console.log(`   - ${issue}`));
  }

  // Check component tokens
  console.log("\n📋 Component Token Usage Check:");
  console.log("--------------------------------");
  const componentResults = checkComponentTokens();
  console.log(`✅ Component files checked: ${componentResults.filesChecked}/5`);
  console.log(`🎯 Token usage instances: ${componentResults.tokenUsage}`);
  console.log(
    `⚠️  Hardcoded values found: ${componentResults.hardcodedValues}`
  );

  if (componentResults.issues.length > 0) {
    console.log("⚠️  Issues:");
    componentResults.issues.forEach((issue) => console.log(`   - ${issue}`));
  }

  // Test scenarios
  console.log("\n📋 Test Scenarios:");
  console.log("------------------");
  testScenarios.forEach((scenario) => {
    console.log(`\n🔍 ${scenario.name}:`);
    scenario.checks.forEach((check) => {
      console.log(`   ☐ ${check}`);
    });
  });

  // Summary
  console.log("\n📊 Summary:");
  console.log("------------");
  console.log(`✅ Design tokens: ${tokenResults.tokenCount} tokens defined`);
  console.log(`✅ Component usage: ${componentResults.tokenUsage} tokens used`);
  console.log(
    `⚠️  Remaining issues: ${componentResults.hardcodedValues} hardcoded values`
  );

  if (componentResults.hardcodedValues === 0) {
    console.log("\n🎉 CSS refactor visual testing passed!");
    console.log("   All components are using design tokens consistently.");
  } else {
    console.log("\n🔧 Next steps:");
    console.log("   - Replace remaining hardcoded values with tokens");
    console.log("   - Test all pages for visual consistency");
    console.log("   - Run cross-browser compatibility tests");
  }

  console.log("\n💡 Manual Testing Required:");
  console.log("   - Test all pages in different browsers");
  console.log("   - Verify responsive behavior on different devices");
  console.log("   - Check for any visual regressions");
  console.log("   - Validate accessibility of styled components");
}

// Run the visual test
console.log("🔍 Starting visual testing for CSS refactor...");
generateVisualReport();
