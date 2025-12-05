# Media Optimization Guide

This guide explains how to optimize media files (videos and images) before committing to GitHub.

## Current Media Status

- **Videos**: ~29.38 MB (8 files)
- **Images**: ~79.14 MB (563 files)
- **Total**: ~108.52 MB

## Video Optimization

### Prerequisites

Install FFmpeg:
- **Windows**: Download from [https://www.gyan.dev/ffmpeg/builds/](https://www.gyan.dev/ffmpeg/builds/)
  - Extract and add to PATH
- **macOS**: `brew install ffmpeg`
- **Linux**: `sudo apt-get install ffmpeg`

### Optimize Videos

```bash
npm run optimize-videos
```

This script will:
- Compress videos using H.264 codec
- Reduce file sizes while maintaining quality
- Create backups in `public/assets/video/_original/`
- Enable fast-start for web streaming

### Manual Optimization

If you prefer manual optimization:

```bash
ffmpeg -i input.mp4 -c:v libx264 -preset medium -crf 23 -vf "scale=1920:1080:force_original_aspect_ratio=decrease" -c:a aac -b:a 128k -movflags +faststart output.mp4
```

## Image Optimization

### Recommended Tools

1. **WebP Conversion**: Convert large images to WebP format
   ```bash
   # Using cwebp (from Google WebP tools)
   cwebp -q 80 input.jpg -o output.webp
   ```

2. **Image Compression**: Use tools like:
   - [Squoosh](https://squoosh.app/) - Online tool
   - [ImageOptim](https://imageoptim.com/) - macOS
   - [TinyPNG](https://tinypng.com/) - Online tool

### Target Sizes

- **Hero images**: Max 500KB
- **Gallery images**: Max 300KB
- **Thumbnails**: Max 100KB

## Video Files Excluded from Git

**Videos are excluded from Git** because they're too large. See [VIDEO_HOSTING.md](./VIDEO_HOSTING.md) for production hosting options.

For local development, videos should be in `public/assets/video/` but they won't be committed to Git.

## Pre-Commit Checklist

Before committing to GitHub:

1. ✅ Run `npm run check-media` to review file sizes
2. ✅ Optimize videos: `npm run optimize-videos`
3. ✅ Optimize large images (>2MB)
4. ✅ Verify videos are excluded from Git (check `.gitignore`)
5. ✅ Check that `_original` folders are in `.gitignore`
6. ✅ Test that optimized media loads correctly
7. ✅ Set up external video hosting for production (see VIDEO_HOSTING.md)

## File Structure

```
public/
  assets/
    video/
      *.mp4              # Optimized videos (tracked in Git)
      _original/         # Original backups (ignored by Git)
    images/
      *.jpg, *.webp     # Optimized images (tracked in Git)
```

## Notes

- Original files are backed up in `_original` folders but excluded from Git
- Optimized files should be web-ready (fast loading, reasonable quality)
- Videos use H.264 codec for maximum browser compatibility
- Images should use WebP format when possible for better compression

