# Optimize Videos with CapCut & Commit to Git

## ✅ Yes, Optimize First!

**Optimizing videos with CapCut before committing is the right approach.** This will:
- Reduce file sizes significantly
- Keep repository manageable
- Improve page load times
- Stay under GitHub's limits

## Current Video Status

| Video | Current Size | Target Size | Priority |
|-------|-------------|-------------|----------|
| `hero.mp4` | 3.67 MB | ✅ Good | Already optimized |
| `land-home-hero.mp4` | 17.77 MB | 5-8 MB | **Must optimize** |
| `single-wide-hero.mp4` | 7.94 MB | 4-6 MB | Should optimize |
| `about-hero.mp4` | 132 bytes | Replace | Broken - needs video |
| `deals-hero.mp4` | 132 bytes | Replace | Broken - needs video |
| `financingpage.mp4` | 132 bytes | Replace | Broken - needs video |
| `mainhero.mp4` | 132 bytes | Replace | Broken - needs video |

## CapCut Optimization Steps

### 1. Open CapCut and Import Video

### 2. Export Settings (Recommended)

**For Hero Videos (land-home-hero, mainhero, etc.):**
- **Resolution**: 1920x1080 (1080p)
- **Frame Rate**: 30fps
- **Quality**: High
- **Bitrate**: 5 Mbps
- **Format**: MP4 (H.264)

**For Smaller Videos:**
- **Resolution**: 1280x720 (720p) is acceptable
- **Frame Rate**: 30fps
- **Quality**: Medium-High
- **Bitrate**: 3-4 Mbps
- **Format**: MP4 (H.264)

### 3. Export and Check Size

After exporting, check file size:
- ✅ **Under 10MB**: Perfect, ready to commit
- ⚠️ **10-15MB**: Acceptable, but try reducing bitrate to 4 Mbps
- ❌ **Over 15MB**: Reduce bitrate or resolution further

### 4. Replace Original

1. **Backup original** (if needed) to `public/assets/video/_original/`
2. **Replace** the video in `public/assets/video/` with optimized version
3. **Test** video plays correctly in browser

## Workflow After Optimization

### Step 1: Optimize All Videos

Use CapCut to optimize:
- `land-home-hero.mp4` (17.77 MB → target 5-8 MB)
- `single-wide-hero.mp4` (7.94 MB → target 4-6 MB)
- Replace broken videos (132 bytes) with actual videos

### Step 2: Verify Sizes

```bash
npm run check-media
```

Check that all videos are under 10MB.

### Step 3: Test Videos

Open your site locally and verify all videos play correctly:
- Home page: `mainhero.mp4`
- Catalog: `hero.mp4`
- Single Wide: `single-wide-hero.mp4`
- Land Home: `land-home-hero.mp4`
- About: `about-hero.mp4`
- Deals: `deals-hero.mp4`
- Insurance: `financingpage.mp4`

### Step 4: Commit and Push

```bash
# Check what will be committed (should show optimized videos)
git status

# Add optimized videos
git add public/assets/video/*.mp4

# Commit
git commit -m "Add optimized videos (CapCut)"

# Push to GitHub
git push origin main
```

## Target File Sizes Summary

- **Ideal**: 3-5 MB per video
- **Acceptable**: 5-10 MB per video
- **Maximum**: 10 MB per video (GitHub-friendly)
- **Total**: Keep all videos combined under 50 MB if possible

## Quick Checklist

- [ ] Open each video in CapCut
- [ ] Set resolution: 1920x1080 (or 1280x720)
- [ ] Set frame rate: 30fps
- [ ] Set bitrate: 5 Mbps (or lower if still too large)
- [ ] Export as MP4
- [ ] Verify file size under 10MB
- [ ] Replace original with optimized version
- [ ] Test video plays correctly
- [ ] Commit optimized videos to Git

## Notes

- **Keep originals**: Save originals in `_original/` folder (excluded from Git)
- **Test playback**: Always test optimized videos before committing
- **Progressive loading**: Optimized videos will load faster for users
- **Mobile-friendly**: Smaller files = better mobile experience

## After Committing

Once optimized videos are committed:
- ✅ Videos will be in GitHub repository
- ✅ Faster repository clones
- ✅ Better page performance
- ✅ No external hosting needed (unless you prefer CDN)

