# GitHub Repository Setup Guide

This guide will help you set up this project on GitHub **without Git LFS**.

## Important: Videos Excluded from Git

**Videos are excluded from the Git repository** because they're too large. See [VIDEO_HOSTING.md](./VIDEO_HOSTING.md) for production hosting options.

For local development, videos should be in `public/assets/video/` but they won't be committed to Git.

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., `gulf-south-homes`)
3. **DO NOT** initialize with README, .gitignore, or license
4. Copy the repository URL

## Step 2: Push to GitHub

```bash
# Add remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/gulf-south-homes.git

# Stage all files (videos will be excluded automatically)
git add .

# Create initial commit
git commit -m "Initial commit: Gulf South Homes website"

# Push to GitHub
git push -u origin main
```

## Step 3: Verify

After pushing:
1. ✅ Check GitHub repository - videos should NOT be present
2. ✅ Verify all code files are present
3. ✅ Check that images are included

## What's Excluded from Git

The following are excluded (via `.gitignore`):
- `public/assets/video/**/*.mp4` - All video files
- `public/assets/video/_original/` - Original video backups
- `node_modules/` - Dependencies
- `dist/` - Build output
- `.env*` - Environment files

## What's Included

- ✅ All source code
- ✅ All images (`public/assets/images/`)
- ✅ Configuration files
- ✅ Documentation

## Video Hosting for Production

Videos need to be hosted externally for production. Options:

1. **Vercel Blob Storage** (recommended for Vercel deployments)
2. **Cloudflare R2** or **AWS S3**
3. **YouTube/Vimeo** (unlisted)

See [VIDEO_HOSTING.md](./VIDEO_HOSTING.md) for detailed setup instructions.

## Local Development

For local development:
1. Place videos in `public/assets/video/`
2. Videos will work locally (served by Vercel dev server)
3. Videos won't be committed to Git

## Troubleshooting

### Videos Missing Locally
- Add videos to `public/assets/video/` manually
- Videos are excluded from Git, so each developer needs them locally

### Production Videos Not Loading
- Set up external video hosting (see [VIDEO_HOSTING.md](./VIDEO_HOSTING.md))
- Update video URLs in code or environment variables

### Push Errors
- Ensure `.gitignore` is committed
- Check that videos aren't accidentally staged: `git status`

## Next Steps

After successful push:
1. ✅ Set up video hosting for production
2. ✅ Configure deployment (Vercel, Netlify, etc.)
3. ✅ Update video URLs in production environment
