#!/usr/bin/env node

/**
 * Fix Migration Issues Script
 * Fixes remaining issues after content architecture migration
 */

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
  }
}

function moveFile(source, destination) {
  try {
    if (fs.existsSync(source)) {
      const destDir = path.dirname(destination);
      ensureDirectoryExists(destDir);
      fs.renameSync(source, destination);
      logSuccess(`Moved: ${source} → ${destination}`);
    } else {
      logWarning(`Source file not found: ${source}`);
    }
  } catch (error) {
    logError(`Failed to move ${source}: ${error.message}`);
  }
}

function copyFile(source, destination) {
  try {
    if (fs.existsSync(source)) {
      const destDir = path.dirname(destination);
      ensureDirectoryExists(destDir);
      fs.copyFileSync(source, destination);
      logSuccess(`Copied: ${source} → ${destination}`);
    } else {
      logWarning(`Source file not found: ${source}`);
    }
  } catch (error) {
    logError(`Failed to copy ${source}: ${error.message}`);
  }
}

function updateImportsInFile(filePath, oldImport, newImport) {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, "utf8");
      const originalContent = content;

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

function fixMigrationIssues() {
  logStep("Fixing Migration Issues");

  // Step 1: Move missing data files
  logStep("Step 1: Moving Data Files");

  const dataMoves = [
    { source: "src/data/content", dest: "src/lib/content/data" },
    {
      source: "src/data/addressOptions.json",
      dest: "src/lib/content/data/addressOptions.json",
    },
    {
      source: "src/data/formOptions.json",
      dest: "src/lib/content/data/formOptions.json",
    },
  ];

  dataMoves.forEach(({ source, dest }) => {
    if (fs.existsSync(source)) {
      if (fs.statSync(source).isDirectory()) {
        // Copy directory contents
        const files = fs.readdirSync(source);
        files.forEach((file) => {
          const sourceFile = path.join(source, file);
          const destFile = path.join(dest, file);
          copyFile(sourceFile, destFile);
        });
      } else {
        copyFile(source, dest);
      }
    }
  });

  // Step 2: Create missing pages.ts file
  logStep("Step 2: Creating Missing Files");

  const pagesContent = `// Pages Content Management - Epic 5: Content Architecture Modernization
// Placeholder implementation for CMS-managed pages

import { getPayload } from '../payload/getPayload';

export interface Page {
  id: string;
  title: string;
  slug: string;
  status: 'draft' | 'published';
  meta?: {
    title?: string;
    description?: string;
  };
  blocks?: any[];
  createdAt: string;
  updatedAt: string;
}

export async function getAllPages(): Promise<Page[]> {
  try {
    const payload = await getPayload();
    const pages = await payload.find({
      collection: 'pages',
      where: {
        status: {
          equals: 'published',
        },
      },
    });
    return pages.docs || [];
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const payload = await getPayload();
    const pages = await payload.find({
      collection: 'pages',
      where: {
        and: [
          {
            slug: {
              equals: slug,
            },
          },
          {
            status: {
              equals: 'published',
            },
          },
        ],
      },
    });
    return pages.docs[0] || null;
  } catch (error) {
    console.error('Error fetching page by slug:', error);
    return null;
  }
}

export async function getPagesByCategory(category: string): Promise<Page[]> {
  try {
    const payload = await getPayload();
    const pages = await payload.find({
      collection: 'pages',
      where: {
        and: [
          {
            category: {
              equals: category,
            },
          },
          {
            status: {
              equals: 'published',
            },
          },
        ],
      },
    });
    return pages.docs || [];
  } catch (error) {
    console.error('Error fetching pages by category:', error);
    return [];
  }
}
`;

  fs.writeFileSync("src/lib/content/pages.ts", pagesContent);
  logSuccess("Created pages.ts file");

  // Step 3: Update import paths in content files
  logStep("Step 3: Updating Content File Imports");

  const contentFiles = [
    "src/lib/content/activities.ts",
    "src/lib/content/courses.ts",
    "src/lib/content/staff.ts",
    "src/lib/content/trips.ts",
  ];

  contentFiles.forEach((file) => {
    if (fs.existsSync(file)) {
      updateImportsInFile(file, "@/data/content/", "@/lib/content/data/");
    }
  });

  // Step 4: Update other import paths
  logStep("Step 4: Updating Other Import Paths");

  const importUpdates = [
    { old: "@/app/src/constants/", newPath: "@/constants/" },
    { old: "@/app/src/hooks/", newPath: "@/hooks/" },
    { old: "@/app/src/api/", newPath: "@/front-end-api/" },
    { old: "@/app/src/lib/schemas/", newPath: "@/lib/schemas/" },
    { old: "@/app/src/types/", newPath: "@/types/" },
    {
      old: "@/data/addressOptions.json",
      newPath: "@/lib/content/data/addressOptions.json",
    },
    {
      old: "@/data/formOptions.json",
      newPath: "@/lib/content/data/formOptions.json",
    },
  ];

  importUpdates.forEach(({ old, newPath }) => {
    findAndUpdateImports("src", old, newPath);
  });

  // Step 5: Fix payload config import
  logStep("Step 5: Fixing Payload Config Import");

  const adminPagePath = "src/app/admin/[[...segments]]/page.tsx";
  if (fs.existsSync(adminPagePath)) {
    updateImportsInFile(
      adminPagePath,
      "../../payload.config",
      "../../../payload.config"
    );
  }

  logStep("Migration Issues Fixed!");
  logSuccess("All migration issues have been resolved");
  logWarning("Please run type-check again to verify the fixes");
}

// Run if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    fixMigrationIssues();
  } catch (error) {
    logError(`Fix failed: ${error.message}`);
    process.exit(1);
  }
}

export { fixMigrationIssues };
