# Hostinger Deployment Guide

## Overview
This guide explains how to deploy the SCISS website to Hostinger hosting and solve caching issues.

## Cache Control Strategy

### Problem
- Browser caching was causing users to see old content even after deployments
- The build ID was hardcoded, preventing cache busting

### Solution Implemented
1. **Dynamic Build IDs**: Each build now has a unique timestamp-based ID
2. **Cache Headers**: `.htaccess` file controls server-side caching
3. **Version Tracking**: `version.json` file tracks each deployment

## Deployment Steps

### 1. Build for Production

```bash
# Clean previous builds
pnpm run deploy:prod

# This will:
# - Generate a new version.json with timestamp
# - Create unique build ID
# - Build static export to /dist folder
```

### 2. Upload to Hostinger

Upload the contents of the `dist` folder to your Hostinger public_html directory:

```
dist/
  ├── .htaccess          # Server configuration (IMPORTANT!)
  ├── index.html
  ├── version.json       # Version tracking
  ├── _next/
  ├── images/
  └── ...
```

**Important**: Make sure `.htaccess` is uploaded and active on the server.

### 3. Clear Hostinger Cache

After uploading, clear Hostinger's server cache:

1. Log into Hostinger Control Panel
2. Go to **Advanced** → **Cache Manager**
3. Click **Clear All Cache**

### 4. Clear WordPress Cache (if applicable)

If using WordPress with the Next.js site:

1. Clear WordPress cache (W3 Total Cache, WP Super Cache, etc.)
2. Clear CloudFlare cache if enabled
3. Purge browser cache: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

## Cache Control Settings

### HTML Files (no-cache)
- HTML files are never cached
- Users always get fresh content
- Set by `.htaccess`: `Cache-Control: no-cache, no-store, must-revalidate`

### JavaScript/CSS (1 hour)
- Short cache for quick updates
- Must revalidate after 1 hour
- Set by `.htaccess`: `Cache-Control: public, max-age=3600, must-revalidate`

### Images (1 week)
- Longer cache for performance
- Set by `.htaccess`: `Cache-Control: public, max-age=604800, immutable`

## Troubleshooting

### Users Still See Old Content

**Solution 1: Hard Refresh**
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`
- Or: `Ctrl/Cmd + F5`

**Solution 2: Clear Browser Cache**
1. Chrome: Settings → Privacy → Clear browsing data
2. Select "Cached images and files"
3. Click "Clear data"

**Solution 3: Verify .htaccess**
- Ensure `.htaccess` file is in the root directory
- Check file permissions (644)
- Verify Apache `mod_headers` is enabled

### Build Not Updating

**Check Build ID:**
```bash
# Should see a new timestamp each time
cat dist/_next/BUILD_ID

# Check version file
cat dist/version.json
```

**Rebuild:**
```bash
rimraf .next dist
pnpm run deploy:prod
```

### Server Configuration Issues

**Check Apache Modules:**
The following Apache modules must be enabled:
- `mod_rewrite` (URL rewriting)
- `mod_headers` (HTTP headers)
- `mod_deflate` (Compression)

Contact Hostinger support if these aren't enabled.

## Version Checking

The site now includes a `version.json` file:

```json
{
  "buildTime": "2026-01-15T10:30:00.000Z",
  "buildTimestamp": 1705315800000,
  "gitHash": "abc1234",
  "version": "abc1234-1705315800000"
}
```

You can check the current deployed version at:
```
https://sciss.org/version.json
```

## Best Practices

### For Each Deployment:

1. ✅ Run full production build: `pnpm run deploy:prod`
2. ✅ Upload entire `dist` folder (including `.htaccess`)
3. ✅ Clear Hostinger cache
4. ✅ Clear WordPress cache (if applicable)
5. ✅ Test in incognito window
6. ✅ Verify version.json shows new timestamp

### Monitoring:

- Check version.json after deployment
- Test in incognito mode to avoid local cache
- Ask users to hard refresh if they report issues
- Monitor Hostinger error logs for .htaccess issues

## Additional Notes

### Static Export
- The site uses Next.js static export (`output: "export"`)
- All pages are pre-rendered at build time
- No server-side rendering on Hostinger
- All routes handled by `.htaccess` rewrite rules

### WordPress Integration
- If site is in a subdirectory of WordPress, adjust `.htaccess` rules
- Ensure WordPress permalinks don't conflict
- Consider using subdomain for better separation

## Support

If caching issues persist:
1. Check Hostinger's error logs
2. Verify `.htaccess` syntax
3. Contact Hostinger support for cache configuration
4. Check browser console for errors

---

**Last Updated**: January 2026
**Deployment Target**: Hostinger Shared Hosting

