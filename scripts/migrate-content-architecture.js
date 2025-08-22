#!/usr/bin/env node

/**
 * Content Architecture Migration Script
 * Migrates from current scattered structure to clean Payload CMS v3 structure
 */

import { execSync } from "child_process";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Colors for console output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logStep(step) {
  log(`\n${colors.bright}${colors.blue}=== ${step} ===${colors.reset}`);
}

function logSuccess(message) {
  log(`✅ ${message}`, "green");
}

function logWarning(message) {
  log(`⚠️  ${message}`, "yellow");
}

function logError(message) {
  log(`❌ ${message}`, "red");
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    logSuccess(`Created directory: ${dirPath}`);
  } else {
    logWarning(`Directory already exists: ${dirPath}`);
  }
}

function moveFile(source, destination) {
  try {
    if (fs.existsSync(source)) {
      // Ensure destination directory exists
      const destDir = path.dirname(destination);
      ensureDirectoryExists(destDir);

      // Move the file
      fs.renameSync(source, destination);
      logSuccess(`Moved: ${source} → ${destination}`);
    } else {
      logWarning(`Source file not found: ${source}`);
    }
  } catch (error) {
    logError(`Failed to move ${source}: ${error.message}`);
  }
}

function updateImportsInFile(filePath, oldImport, newImport) {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, "utf8");
      const originalContent = content;

      // Update import paths
      content = content.replace(new RegExp(oldImport, "g"), newImport);

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        logSuccess(`Updated imports in: ${filePath}`);
      }
    }
  } catch (error) {
    logError(`Failed to update imports in ${filePath}: ${error.message}`);
  }
}

function findAndUpdateImports(directory, oldImport, newImport) {
  if (!fs.existsSync(directory)) return;

  const files = fs.readdirSync(directory, { withFileTypes: true });

  for (const file of files) {
    const fullPath = path.join(directory, file.name);

    if (file.isDirectory()) {
      findAndUpdateImports(fullPath, oldImport, newImport);
    } else if (file.name.match(/\.(ts|tsx|js|jsx)$/)) {
      updateImportsInFile(fullPath, oldImport, newImport);
    }
  }
}

function backupDirectory(sourceDir, backupDir) {
  try {
    if (fs.existsSync(sourceDir)) {
      ensureDirectoryExists(backupDir);
      execSync(`cp -r "${sourceDir}" "${backupDir}"`);
      logSuccess(`Backed up: ${sourceDir} → ${backupDir}`);
    }
  } catch (error) {
    logError(`Failed to backup ${sourceDir}: ${error.message}`);
  }
}

// Main migration function
function migrateContentArchitecture() {
  logStep("Starting Content Architecture Migration");

  // Create backup
  logStep("Creating Backup");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  backupDirectory("src", `backup-${timestamp}`);

  // Phase 1: Create new directory structure
  logStep("Phase 1: Creating New Directory Structure");

  const newDirectories = [
    "src/lib/payload",
    "src/lib/content",
    "src/lib/utils",
    "src/components/content",
    "src/components/blocks",
    "src/payload/blocks",
    "src/payload/fields",
    "src/payload/hooks",
    "src/payload/access",
  ];

  newDirectories.forEach((dir) => ensureDirectoryExists(dir));

  // Phase 2: Move existing files
  logStep("Phase 2: Moving Existing Files");

  const fileMoves = [
    // Payload utilities
    {
      source: "src/app/src/lib/utils/payload.ts",
      dest: "src/lib/payload/getPayload.ts",
    },

    // Content files (if they exist)
    {
      source: "src/app/src/lib/content/courses.ts",
      dest: "src/lib/content/courses.ts",
    },
    {
      source: "src/app/src/lib/content/activities.ts",
      dest: "src/lib/content/activities.ts",
    },
    {
      source: "src/app/src/lib/content/trips.ts",
      dest: "src/lib/content/trips.ts",
    },
    {
      source: "src/app/src/lib/content/staff.ts",
      dest: "src/lib/content/staff.ts",
    },

    // Components
    { source: "src/app/src/components/ui", dest: "src/components/ui" },
    {
      source: "src/app/src/components/sections",
      dest: "src/components/content",
    },
  ];

  fileMoves.forEach(({ source, dest }) => {
    if (fs.existsSync(source)) {
      if (fs.statSync(source).isDirectory()) {
        // Move directory contents
        const files = fs.readdirSync(source);
        files.forEach((file) => {
          const sourceFile = path.join(source, file);
          const destFile = path.join(dest, file);
          moveFile(sourceFile, destFile);
        });
      } else {
        moveFile(source, dest);
      }
    }
  });

  // Phase 3: Update import paths
  logStep("Phase 3: Updating Import Paths");

  const importUpdates = [
    { old: "@/app/src/lib/content/", newPath: "@/lib/content/" },
    { old: "@/app/src/lib/utils/", newPath: "@/lib/utils/" },
    { old: "@/app/src/components/", newPath: "@/components/" },
    { old: "@/content/", newPath: "@/lib/content/" },
  ];

  importUpdates.forEach(({ old, newPath }) => {
    findAndUpdateImports("src", old, newPath);
    findAndUpdateImports("tests", old, newPath);
  });

  // Phase 4: Create new content index
  logStep("Phase 4: Creating Unified Content Exports");

  const contentIndexContent = `// Unified Content Exports - Epic 5: Content Architecture Modernization
// Centralized exports for all content types

export * from './courses';
export * from './activities';
export * from './trips';
export * from './staff';
export * from './pages';

// Content metadata
export const CONTENT_TYPES = {
  COURSE: 'course',
  ACTIVITY: 'activity',
  TRIP: 'trip',
  STAFF: 'staff',
  PAGE: 'page',
} as const;

export const CONTENT_PATHS = {
  COURSES: '/courses',
  ACTIVITIES: '/activities',
  TRIPS: '/trips',
  STAFF: '/staff',
  PAGES: '/pages',
} as const;

export const CONTENT_COLLECTIONS = {
  ACADEMIC_PROGRAMS: 'academic-programs',
  LIFE_ACTIVITIES: 'life-activities',
  DAY_TRIPS: 'day-trips',
  STAFF_PROFILES: 'staff-profiles',
  PAGES: 'pages',
} as const;
`;

  fs.writeFileSync("src/lib/content/index.ts", contentIndexContent);
  logSuccess("Created unified content exports");

  // Phase 5: Clean up old directories
  logStep("Phase 5: Cleaning Up Old Directories");

  const directoriesToRemove = [
    "src/content",
    "src/app/src/lib/content",
    "src/app/src/data/content",
  ];

  directoriesToRemove.forEach((dir) => {
    if (fs.existsSync(dir)) {
      try {
        fs.rmSync(dir, { recursive: true, force: true });
        logSuccess(`Removed directory: ${dir}`);
      } catch (error) {
        logError(`Failed to remove ${dir}: ${error.message}`);
      }
    }
  });

  logStep("Migration Complete!");
  logSuccess("Content architecture has been successfully migrated");
  logWarning("Please review the changes and test your application");
  logWarning("Check the backup directory if you need to rollback");

  // Next steps
  logStep("Next Steps");
  console.log(`
${colors.cyan}1.${colors.reset} Review the migrated structure
${colors.cyan}2.${colors.reset} Update any remaining import paths manually
${colors.cyan}3.${colors.reset} Test all routes and functionality
${colors.cyan}4.${colors.reset} Update your Payload CMS configuration if needed
${colors.cyan}5.${colors.reset} Run your test suite to ensure everything works
${colors.cyan}6.${colors.reset} Update documentation to reflect new structure
  `);
}

// Run migration if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    migrateContentArchitecture();
  } catch (error) {
    logError(`Migration failed: ${error.message}`);
    process.exit(1);
  }
}

export { migrateContentArchitecture };
