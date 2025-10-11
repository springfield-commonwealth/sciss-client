#!/usr/bin/env node
/**
 * Generate version.json file for cache busting
 * This script creates a version file that the frontend can check
 * to detect when new updates are available
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function generateVersion() {
  try {
    // Try to get git commit hash
    let gitHash = 'unknown';
    try {
      gitHash = execSync('git rev-parse --short HEAD').toString().trim();
    } catch (e) {
      console.warn('Could not get git hash, using timestamp');
    }

    const version = {
      buildTime: new Date().toISOString(),
      buildTimestamp: Date.now(),
      gitHash: gitHash,
      version: `${gitHash}-${Date.now()}`,
    };

    // Write to public directory
    const publicPath = path.join(process.cwd(), 'public', 'version.json');
    fs.writeFileSync(publicPath, JSON.stringify(version, null, 2));
    
    console.log('✅ Generated version.json:', version);
    console.log(`   Build ID: ${version.version}`);
    
    return version;
  } catch (error) {
    console.error('❌ Error generating version:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  generateVersion();
}

module.exports = { generateVersion };

