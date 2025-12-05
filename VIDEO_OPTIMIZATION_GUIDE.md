# Video Optimization Guide with CapCut

## Why Optimize Videos?

- **Reduce file sizes** - Smaller files = faster uploads and downloads
- **Better performance** - Faster page loads for users
- **GitHub-friendly** - Stay under GitHub's 100MB per file limit
- **Bandwidth savings** - Lower hosting costs

## Current Video Status

Check current sizes:
```bash
npm run check-media
```

## CapCut Optimization Settings

### Recommended Settings for Web Videos

1. **Resolution**: 1920x1080 (1080p) or lower
   - For hero videos: 1920x1080 is ideal
   - For smaller videos: 1280x720 (720p) works well

2. **Frame Rate**: 30fps
   - Most web videos don't need 60fps
   - 30fps reduces file size significantly

3. **Bitrate**: 
   - **High quality**: 5-8 Mbps
   - **Medium quality**: 3-5 Mbps (recommended)
   - **Lower quality**: 2-3 Mbps (if size is critical)

4. **Codec**: H.264 (MP4)
   - Best browser compatibility
   - Good compression

5. **Audio**: 
   - 128 kbps AAC
   - Mono is fine for background videos

### Step-by-Step CapCut Optimization

1. **Import your video** into CapCut

2. **Export Settings**:
   - Format: **MP4**
   - Resolution: **1920x1080** (or match original if smaller)
   - Frame Rate: **30fps**
   - Quality: **High** or **Medium**
   - Bitrate: **5 Mbps** (adjust if file is still too large)

3. **Export** and save optimized version

4. **Check file size**:
   - Target: Under 10MB per video (ideally 3-5MB)
   - If over 10MB, reduce bitrate or resolution

5. **Replace original** with optimized version

## Target File Sizes

| Video | Current Size | Target Size | Notes |
|-------|-------------|-------------|-------|
| `hero.mp4` | 3.67 MB | 2-3 MB | Good size, minor optimization |
| `land-home-hero.mp4` | 17.77 MB | 5-8 MB | **Needs optimization** |
| `single-wide-hero.mp4` | 7.94 MB | 4-6 MB | Could optimize |
| Others (broken) | 132 bytes | Replace | Need actual videos |

## After Optimization

1. **Replace videos** in `public/assets/video/`
2. **Update .gitignore** to allow videos back in
3. **Commit and push** optimized videos

## Quick Optimization Checklist

- [ ] Open video in CapCut
- [ ] Set resolution to 1920x1080 (or lower)
- [ ] Set frame rate to 30fps
- [ ] Set bitrate to 5 Mbps
- [ ] Export as MP4
- [ ] Check file size (target: under 10MB)
- [ ] Replace original with optimized version
- [ ] Test video plays correctly

## Alternative: FFmpeg (Command Line)

If you prefer command line optimization:

```bash
# Install FFmpeg first: https://ffmpeg.org/download.html

# Optimize video
ffmpeg -i input.mp4 \
  -c:v libx264 \
  -preset medium \
  -crf 23 \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease" \
  -r 30 \
  -c:a aac \
  -b:a 128k \
  -movflags +faststart \
  output.mp4
```

Or use the included script:
```bash
npm run optimize-videos
```

## Notes

- **Keep originals** - Save originals in `public/assets/video/_original/` (excluded from Git)
- **Test playback** - Always test optimized videos in browser
- **Progressive loading** - Optimized videos load faster
- **Mobile-friendly** - Smaller files = better mobile experience

