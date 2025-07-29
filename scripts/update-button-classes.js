#!/usr/bin/env node

/**
 * Update Button Classes Script
 * Converts old button classes to new BEM-style format
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Files to update
const filesToUpdate = [
  'pages/activities/[slug].js',
  'pages/academics.js',
  'pages/courses/[slug].js',
  'pages/life-activities.js',
  'pages/staff/[slug].js',
  'pages/trips/[slug].js'
];

// Button class mappings
const buttonClassMappings = [
  // Basic button classes
  { old: 'btn btn-primary', replacement: 'btn btn--primary' },
  { old: 'btn btn-secondary', replacement: 'btn btn--secondary' },
  { old: 'btn btn-outline', replacement: 'btn btn--outline' },
  
  // Button size classes
  { old: 'btn btn-primary btn-large', replacement: 'btn btn--primary btn--lg' },
  { old: 'btn btn-secondary btn-large', replacement: 'btn btn--secondary btn--lg' },
  { old: 'btn btn-outline btn-large', replacement: 'btn btn--outline btn--lg' },
  { old: 'btn btn-primary btn-medium', replacement: 'btn btn--primary' },
  { old: 'btn btn-secondary btn-medium', replacement: 'btn btn--secondary' },
  
  // Individual button classes (for cases where they might be used separately)
  { old: 'btn-primary', replacement: 'btn--primary' },
  { old: 'btn-secondary', replacement: 'btn--secondary' },
  { old: 'btn-outline', replacement: 'btn--outline' },
  { old: 'btn-large', replacement: 'btn--lg' },
  { old: 'btn-medium', replacement: '' }, // Remove medium as it's not in our system
  { old: 'btn-small', replacement: 'btn--sm' }
];

/**
 * Update button classes in a file
 */
function updateButtonClasses(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    buttonClassMappings.forEach(({ old, replacement }) => {
      const regex = new RegExp(`className="([^"]*\\s)?${old.replace(/\s+/g, '\\s+')}(\\s[^"]*)?"`, 'g');
      const matches = content.match(regex);
      
      if (matches) {
        content = content.replace(regex, (match, before, after) => {
          const beforePart = before || '';
          const afterPart = after || '';
          const newClass = replacement ? ` ${replacement}` : '';
          return `className="${beforePart.trim()}${newClass}${afterPart}"`;
        });
        updated = true;
        console.log(`  🔄 Updated ${matches.length} instances of "${old}" in ${path.basename(filePath)}`);
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
function updateAllButtonClasses() {
  console.log('🔄 Updating button classes to new BEM format...\n');
  
  let totalUpdates = 0;
  let filesUpdated = 0;
  
  filesToUpdate.forEach(filePattern => {
    const files = glob.sync(filePattern);
    files.forEach(file => {
      console.log(`📝 Processing: ${file}`);
      const updated = updateButtonClasses(file);
      if (updated) {
        filesUpdated++;
        totalUpdates++;
      }
    });
  });
  
  console.log(`\n✅ Update completed!`);
  console.log(`📊 Results:`);
  console.log(`  • Files processed: ${filesToUpdate.length}`);
  console.log(`  • Files updated: ${filesUpdated}`);
  console.log(`  • Total updates: ${totalUpdates}`);
  
  if (totalUpdates > 0) {
    console.log(`\n🎉 All button classes have been updated to the new BEM format!`);
    console.log(`\n📋 Next steps:`);
    console.log(`  1. Test the application to ensure buttons work correctly`);
    console.log(`  2. Check for any remaining old button classes`);
    console.log(`  3. Remove legacy CSS after testing`);
  } else {
    console.log(`\nℹ️  No button classes found to update.`);
  }
}

// Run if called directly
if (require.main === module) {
  updateAllButtonClasses();
}

module.exports = {
  updateButtonClasses,
  updateAllButtonClasses,
  buttonClassMappings
}; 