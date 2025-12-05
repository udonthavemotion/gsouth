# Gulf South Homes Inc.

Modern website for Gulf South Homes Inc. - Louisiana's trusted manufactured and modular home dealer since 1995.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment (Vercel)

This project is configured for zero-config Vercel deployment:

1. Connect this repo to Vercel
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Install Command: `npm install`

### Environment Variables

None required for basic deployment.

## Project Structure

```
├── components/     # Reusable UI components
├── pages/          # Page components
├── data/           # Home inventory data
├── public/         # Static assets (images, videos)
├── src/            # Global styles
└── index.html      # Entry point
```

## Pages

- `/` - Homepage with video hero
- `/catalog` - All homes catalog with filters
- `/single-wide` - Single-wide homes
- `/land-home` - Land & Home packages
- `/about` - About the company
- `/services` - Parts & service info
- `/contact` - Contact form
- `/catalog/:id` - Individual home details

## Media Files

### Videos
**Videos are excluded from Git** (too large for repository). See [VIDEO_HOSTING.md](./VIDEO_HOSTING.md) for hosting options.

For local development, place videos in `public/assets/video/` (they won't be committed to Git).

### Images
All images are included in the repository. To check sizes:
```bash
npm run check-media
```

## GitHub Setup

To set up this project on GitHub:

1. **Create GitHub repository** (don't initialize with README)
2. **Add remote and push**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   git push -u origin main
   ```

**Note**: Videos are excluded from Git. See [VIDEO_HOSTING.md](./VIDEO_HOSTING.md) for production hosting options.

## License

Private - Gulf South Homes Inc.
