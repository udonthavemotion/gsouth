# Vercel Deployment Checklist

## ✅ Pre-Deployment Verification

This checklist ensures all assets (photos and videos) will display correctly on Vercel preview and production.

## 1. Video Files Status

### Committed Videos (Will work on Vercel)
- ✅ `hero.mp4` (3.67 MB) - Used in Catalog, Modular pages
- ✅ `land-home-hero.mp4` (13.76 MB) - Used in LandHome page  
- ✅ `single-wide-hero.mp4` (7.34 MB) - Used in SingleWide page

### Missing/Broken Videos (Need attention)
- ⚠️ `about-hero.mp4` - Used in About, Manufacturers pages (132 bytes - broken)
- ⚠️ `deals-hero.mp4` - Used in Deals page (132 bytes - broken)
- ⚠️ `financingpage.mp4` - Used in Insurance page (132 bytes - broken)
- ⚠️ `mainhero.mp4` - Used in Home, DoubleWide pages (132 bytes - broken)
- ⚠️ `hero headerpartstore.mp4` - Used in Parts page (location: `/assets/images/parts store/`)

**Action Required:** Replace broken videos with actual video files before deployment.

## 2. Image Files Status

### ✅ All Images Committed
- All images in `public/assets/images/` are committed to Git
- Total: ~563 images (~79 MB)
- All use correct relative paths: `/assets/images/...`

## 3. Asset Path Verification

### ✅ Correct Path Patterns
- Videos: `/assets/video/[filename].mp4`
- Images: `/assets/images/[category]/[filename]`
- All paths are relative (start with `/`)

### ⚠️ Potential Issues Found

1. **Services.tsx** uses paths:
   - `/Modular Homes Page/Land and home packages/...`
   - `/Modular Homes Page/Financing made simple/...`
   - **Verify:** These files exist in `public/Modular Homes Page/`

2. **Parts.tsx** references:
   - `/assets/images/parts store/hero headerpartstore.mp4`
   - **Verify:** This video file exists

## 4. Vercel Configuration

### ✅ vercel.json Settings
- Build command: `npm run build` ✅
- Video headers configured for proper MIME types ✅
- Cache headers set for videos ✅
- Rewrites configured for SPA routing ✅

## 5. Build Configuration

### ✅ vite.config.ts
- Public assets served from `public/` folder ✅
- React plugin configured ✅
- Path aliases set up ✅

## 6. Deployment Steps

### Step 1: Verify All Assets
```bash
# Check videos are committed
git ls-files public/assets/video/*.mp4

# Check images are committed  
git ls-files public/assets/images/**/*.jpg
```

### Step 2: Fix Broken Videos
Replace broken videos (132 bytes) with actual video files:
- `about-hero.mp4`
- `deals-hero.mp4`
- `financingpage.mp4`
- `mainhero.mp4`
- `hero headerpartstore.mp4` (in parts store folder)

### Step 3: Deploy to Vercel

1. **Import Project:**
   - Go to https://vercel.com/new
   - Import from GitHub: `udonthavemotion/gsouth`
   - Framework Preset: **Vite** (auto-detected)

2. **Build Settings:**
   - Build Command: `npm run build` (default)
   - Output Directory: `dist` (default)
   - Install Command: `npm install` (default)

3. **Environment Variables:**
   - None required for basic deployment
   - Optional: Add `GEMINI_API_KEY` if using AI features

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete
   - Check preview URL

## 7. Post-Deployment Verification

### Check Preview URL
- [ ] All images load correctly
- [ ] Videos play (if replaced)
- [ ] No 404 errors in browser console
- [ ] All pages navigate correctly

### Check Production URL
- [ ] Same as preview checks
- [ ] Performance is acceptable
- [ ] Videos stream properly

## 8. Troubleshooting

### Videos Not Loading
- **Issue:** Broken videos (132 bytes) won't play
- **Solution:** Replace with actual video files and commit

### Images Not Loading
- **Issue:** 404 errors for images
- **Solution:** Verify paths start with `/assets/images/` (not `./` or `../`)

### Build Fails
- **Issue:** Build errors on Vercel
- **Solution:** Check build logs, ensure all dependencies are in `package.json`

### Large File Warnings
- **Issue:** GitHub/Vercel warnings about large files
- **Solution:** Videos are optimized and under limits (largest is 13.76 MB)

## 9. Current Status Summary

| Asset Type | Status | Count | Total Size |
|------------|--------|-------|------------|
| Images | ✅ Ready | 563 | ~79 MB |
| Videos (working) | ✅ Ready | 3 | ~24.77 MB |
| Videos (broken) | ⚠️ Need Fix | 5 | ~0 MB |

## 10. Quick Fix Commands

```bash
# Check what videos are committed
git ls-files public/assets/video/*.mp4

# Add missing videos (after replacing broken ones)
git add public/assets/video/*.mp4
git commit -m "Add missing video files"
git push origin main

# Verify all assets
npm run check-media
```

## ✅ Ready for Vercel?

**Before deploying:**
- [x] Videos optimized and committed (3 working videos)
- [x] All images committed
- [x] vercel.json configured correctly
- [x] Build configuration correct
- [ ] **Replace broken videos** (5 videos need actual files)
- [ ] **Verify Services.tsx image paths** exist

**After fixing broken videos, you're ready to deploy!**

