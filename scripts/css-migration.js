#!/usr/bin/env node

/**
 * CSS Migration Script
 * Automates the refactoring of scattered button styles to unified system
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Configuration
const CONFIG = {
  sourceDir: "src/styles",
  backupDir: "src/styles/backup",
  designTokensDir: "src/styles/design-tokens",
  componentsDir: "src/styles/components",

  // Files to migrate
  filesToMigrate: [
    "src/styles/globals.css",
    "src/styles/shared.css",
    "src/styles/pages/*.css",
    "src/styles/components/*.css",
  ],

  // Button patterns to replace
  buttonPatterns: [
    {
      name: "Basic Button",
      pattern: /\.btn\s*\{[\s\S]*?\}/g,
      replacement: "/* Button styles moved to button-base.css */",
    },
    {
      name: "Primary Button",
      pattern: /\.btn-primary\s*\{[\s\S]*?\}/g,
      replacement: "/* Primary button styles moved to button-base.css */",
    },
    {
      name: "Secondary Button",
      pattern: /\.btn-secondary\s*\{[\s\S]*?\}/g,
      replacement: "/* Secondary button styles moved to button-base.css */",
    },
    {
      name: "Outline Button",
      pattern: /\.btn-outline\s*\{[\s\S]*?\}/g,
      replacement: "/* Outline button styles moved to button-base.css */",
    },
    {
      name: "Large Button",
      pattern: /\.btn-large\s*\{[\s\S]*?\}/g,
      replacement: "/* Large button styles moved to button-base.css */",
    },
    {
      name: "Small Button",
      pattern: /\.btn-sm\s*\{[\s\S]*?\}/g,
      replacement: "/* Small button styles moved to button-base.css */",
    },
  ],

  // Color variable patterns to replace
  colorPatterns: [
    {
      name: "Primary Blue",
      pattern: /--primary-blue:\s*#[0-9a-fA-F]{6};/g,
      replacement: "--primary-blue: var(--color-primary-500);",
    },
    {
      name: "Secondary Blue",
      pattern: /--secondary-blue:\s*#[0-9a-fA-F]{6};/g,
      replacement: "--secondary-blue: var(--color-primary-600);",
    },
    {
      name: "Accent Yellow",
      pattern: /--accent-yellow:\s*#[0-9a-fA-F]{6};/g,
      replacement: "--accent-yellow: var(--color-yellow-500);",
    },
    {
      name: "Primary Orange",
      pattern: /--primary-orange:\s*#[0-9a-fA-F]{6};/g,
      replacement: "--primary-orange: var(--color-accent-500);",
    },
  ],
};

/**
 * Create backup of original files
 */
function createBackup() {
  console.log("📦 Creating backups...");

  if (!fs.existsSync(CONFIG.backupDir)) {
    fs.mkdirSync(CONFIG.backupDir, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupPath = path.join(CONFIG.backupDir, `backup-${timestamp}`);

  fs.mkdirSync(backupPath, { recursive: true });

  CONFIG.filesToMigrate.forEach((pattern) => {
    const files = glob.sync(pattern);
    files.forEach((file) => {
      const relativePath = path.relative(CONFIG.sourceDir, file);
      const backupFile = path.join(backupPath, relativePath);

      // Create backup directory structure
      const backupDir = path.dirname(backupFile);
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      // Copy file to backup
      fs.copyFileSync(file, backupFile);
      console.log(`  ✅ Backed up: ${relativePath}`);
    });
  });

  console.log(`📁 Backup created at: ${backupPath}`);
  return backupPath;
}

/**
 * Analyze CSS files for duplicate patterns
 */
function analyzeDuplicates() {
  console.log("🔍 Analyzing CSS files for duplicates...");

  const analysis = {
    buttonDefinitions: [],
    colorDefinitions: [],
    duplicateFiles: [],
  };

  CONFIG.filesToMigrate.forEach((pattern) => {
    const files = glob.sync(pattern);
    files.forEach((file) => {
      const content = fs.readFileSync(file, "utf8");

      // Find button definitions
      const buttonMatches = content.match(/\.btn[^}]*\{[\s\S]*?\}/g);
      if (buttonMatches) {
        analysis.buttonDefinitions.push({
          file,
          count: buttonMatches.length,
          patterns: buttonMatches.map(
            (match) => match.substring(0, 50) + "..."
          ),
        });
      }

      // Find color definitions
      const colorMatches = content.match(/--[^:]+:\s*#[0-9a-fA-F]{6};/g);
      if (colorMatches) {
        analysis.colorDefinitions.push({
          file,
          count: colorMatches.length,
          colors: colorMatches,
        });
      }
    });
  });

  return analysis;
}

/**
 * Replace patterns in CSS files
 */
function replacePatterns() {
  console.log("🔄 Replacing patterns...");

  let totalReplacements = 0;

  CONFIG.filesToMigrate.forEach((pattern) => {
    const files = glob.sync(pattern);
    files.forEach((file) => {
      let content = fs.readFileSync(file, "utf8");
      let fileReplacements = 0;

      // Replace button patterns
      CONFIG.buttonPatterns.forEach(({ name, pattern, replacement }) => {
        const matches = content.match(pattern);
        if (matches) {
          content = content.replace(pattern, replacement);
          fileReplacements += matches.length;
          console.log(
            `  🔄 Replaced ${
              matches.length
            } ${name} patterns in ${path.basename(file)}`
          );
        }
      });

      // Replace color patterns
      CONFIG.colorPatterns.forEach(({ name, pattern, replacement }) => {
        const matches = content.match(pattern);
        if (matches) {
          content = content.replace(pattern, replacement);
          fileReplacements += matches.length;
          console.log(
            `  🎨 Replaced ${
              matches.length
            } ${name} patterns in ${path.basename(file)}`
          );
        }
      });

      if (fileReplacements > 0) {
        fs.writeFileSync(file, content);
        totalReplacements += fileReplacements;
      }
    });
  });

  console.log(`✅ Total replacements: ${totalReplacements}`);
  return totalReplacements;
}

/**
 * Update import statements
 */
function updateImports() {
  console.log("📥 Updating import statements...");

  const mainIndexFile = path.join(CONFIG.sourceDir, "index.css");

  if (fs.existsSync(mainIndexFile)) {
    let content = fs.readFileSync(mainIndexFile, "utf8");

    // Add design token imports at the top
    const designTokenImports = `
/* Design Tokens - Single source of truth */
@import './design-tokens/colors.css';
@import './design-tokens/spacing.css';
@import './design-tokens/typography.css';
@import './design-tokens/shadows.css';

/* Component System */
@import './components/buttons/button-base.css';

`;

    // Insert design token imports at the beginning
    content = designTokenImports + content;

    fs.writeFileSync(mainIndexFile, content);
    console.log("  ✅ Updated index.css with design token imports");
  }
}

/**
 * Generate migration report
 */
function generateReport(analysis, totalReplacements, backupPath) {
  console.log("📊 Generating migration report...");

  const report = {
    timestamp: new Date().toISOString(),
    backupPath,
    totalReplacements,
    analysis,
    recommendations: [
      "✅ Design tokens created for colors and spacing",
      "✅ Unified button system implemented",
      "🔄 Next steps:",
      "  1. Test all pages for visual consistency",
      "  2. Update component usage to new button classes",
      "  3. Remove legacy CSS after testing",
      "  4. Implement remaining component systems",
    ],
  };

  const reportPath = path.join(CONFIG.sourceDir, "migration-report.json");
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  console.log("📄 Migration report saved to: migration-report.json");
  return report;
}

/**
 * Main migration function
 */
function runMigration() {
  console.log("🚀 Starting CSS Migration...\n");

  try {
    // Step 1: Create backup
    const backupPath = createBackup();

    // Step 2: Analyze current state
    const analysis = analyzeDuplicates();

    console.log("\n📊 Analysis Results:");
    console.log(
      `  • Button definitions found in ${analysis.buttonDefinitions.length} files`
    );
    console.log(
      `  • Color definitions found in ${analysis.colorDefinitions.length} files`
    );

    // Step 3: Replace patterns
    const totalReplacements = replacePatterns();

    // Step 4: Update imports
    updateImports();

    // Step 5: Generate report
    const report = generateReport(analysis, totalReplacements, backupPath);

    console.log("\n🎉 Migration completed successfully!");
    console.log("\n📋 Next Steps:");
    report.recommendations.forEach((rec) => console.log(`  ${rec}`));
  } catch (error) {
    console.error("❌ Migration failed:", error.message);
    process.exit(1);
  }
}

// Run migration if called directly
if (require.main === module) {
  runMigration();
}

module.exports = {
  runMigration,
  createBackup,
  analyzeDuplicates,
  replacePatterns,
  updateImports,
  generateReport,
};
