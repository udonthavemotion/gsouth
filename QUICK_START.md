# Quick Start Guide - GitHub Setup

## 🚀 Quick Commands

```bash
# 1. Verify videos are excluded
git status

# 2. Stage all files (videos excluded automatically)
git add .

# 3. Commit
git commit -m "Initial commit: Gulf South Homes website"

# 4. Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 5. Push to GitHub
git push -u origin main
```

## ✅ Pre-Flight Checklist

- [ ] Videos are in `public/assets/video/` (for local dev)
- [ ] `.gitignore` excludes videos (already configured)
- [ ] GitHub repository created
- [ ] Remote URL copied

## 📦 What Gets Pushed

✅ **Included:**
- All source code
- All images (`public/assets/images/`)
- Configuration files
- Documentation

❌ **Excluded:**
- `public/assets/video/**/*.mp4` - All videos
- `node_modules/`
- `dist/`
- `.env*` files

## 🎥 Video Handling

**Videos are excluded from Git** because they're too large.

- **Local Development**: Videos in `public/assets/video/` work locally
- **Production**: Videos need external hosting (see [VIDEO_HOSTING.md](./VIDEO_HOSTING.md))

## 🆘 Need Help?

- **Video Hosting**: See [VIDEO_HOSTING.md](./VIDEO_HOSTING.md)
- **GitHub Setup**: See [GITHUB_SETUP.md](./GITHUB_SETUP.md)
- **Full Summary**: See [SETUP_SUMMARY.md](./SETUP_SUMMARY.md)
