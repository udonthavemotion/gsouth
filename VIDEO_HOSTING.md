# Video Hosting Guide

## Why Videos Are Excluded from Git

Videos are excluded from the Git repository because:
- **Large file sizes** (17.77 MB for `land-home-hero.mp4`)
- **GitHub file size limits** (100MB per file, but large files slow down clones)
- **Better performance** with external hosting/CDN
- **Reduced repository size** for faster clones and deployments

## Current Video Files

### Working Videos (Need External Hosting)
- `hero.mp4` (3.67 MB) - Used in Catalog, Modular pages
- `land-home-hero.mp4` (17.77 MB) - Used in LandHome page
- `single-wide-hero.mp4` (7.94 MB) - Used in SingleWide page

### Broken Videos (132 bytes - need replacement)
- `about-hero.mp4` - Used in About, Manufacturers pages
- `deals-hero.mp4` - Used in Deals page
- `dealsheader.mp4` - Not currently used
- `financingpage.mp4` - Used in Insurance page
- `mainhero.mp4` - Used in Home, DoubleWide pages

## Recommended Hosting Options

### Option 1: Vercel Blob Storage (Recommended)
Best for Vercel deployments - integrated and fast.

```bash
# Install Vercel Blob
npm install @vercel/blob

# Upload videos via Vercel dashboard or CLI
vercel blob put public/assets/video/hero.mp4
```

Then update video sources in code:
```tsx
<source src="https://[your-blob-url].vercel-storage.com/hero.mp4" type="video/mp4" />
```

### Option 2: Cloudflare R2 / AWS S3
Good for high traffic and global CDN.

1. Upload videos to R2/S3 bucket
2. Get public URLs
3. Update video sources in code

### Option 3: YouTube/Vimeo (Unlisted)
Free option, but less control over playback.

1. Upload videos as unlisted
2. Use embed or direct video URLs
3. Update code to use YouTube/Vimeo URLs

### Option 4: Keep Videos Local (Development Only)
For local development, videos should be in `public/assets/video/` but excluded from Git.

## Implementation Steps

### Step 1: Upload Videos to Hosting Service

Choose one of the options above and upload your videos.

### Step 2: Update Video Sources

Create a configuration file for video URLs:

```typescript
// constants.ts or new file: videoUrls.ts
export const VIDEO_URLS = {
  hero: process.env.VITE_VIDEO_HERO_URL || '/assets/video/hero.mp4',
  mainhero: process.env.VITE_VIDEO_MAINHERO_URL || '/assets/video/mainhero.mp4',
  'land-home-hero': process.env.VITE_VIDEO_LAND_HOME_URL || '/assets/video/land-home-hero.mp4',
  'single-wide-hero': process.env.VITE_VIDEO_SINGLE_WIDE_URL || '/assets/video/single-wide-hero.mp4',
  'about-hero': process.env.VITE_VIDEO_ABOUT_URL || '/assets/video/about-hero.mp4',
  'deals-hero': process.env.VITE_VIDEO_DEALS_URL || '/assets/video/deals-hero.mp4',
  'financingpage': process.env.VITE_VIDEO_FINANCING_URL || '/assets/video/financingpage.mp4',
};
```

### Step 3: Update Components

Update video sources in pages:

```tsx
// Before
<source src="/assets/video/hero.mp4" type="video/mp4" />

// After
<source src={VIDEO_URLS.hero} type="video/mp4" />
```

### Step 4: Set Environment Variables (for production)

In Vercel/dashboard, add environment variables:
- `VITE_VIDEO_HERO_URL`
- `VITE_VIDEO_MAINHERO_URL`
- etc.

## Local Development

For local development, keep videos in `public/assets/video/`:
- Videos work locally (served by Vite dev server)
- Videos are excluded from Git (via .gitignore)
- Team members need to add videos manually or download from shared storage

## Quick Setup Script

Create a script to help team members set up videos:

```bash
# scripts/setup-videos.sh
echo "Download videos from [shared storage URL]"
echo "Place them in public/assets/video/"
echo "Required files:"
echo "  - hero.mp4"
echo "  - land-home-hero.mp4"
echo "  - single-wide-hero.mp4"
echo "  - mainhero.mp4"
echo "  - about-hero.mp4"
echo "  - deals-hero.mp4"
echo "  - financingpage.mp4"
```

## Notes

- Videos in `public/assets/video/` will work locally but won't be committed to Git
- Production should use external hosting for better performance
- Broken videos (132 bytes) need to be replaced with actual video files
- Consider optimizing videos before uploading (reduce file size)

