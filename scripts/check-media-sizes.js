/**
 * Media Size Checker Script
 * 
 * This script checks the sizes of all media files (videos and images)
 * to identify optimization opportunities.
 * 
 * Usage:
 *   node scripts/check-media-sizes.js
 */

import { readdirSync, statSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const publicDir = join(projectRoot, 'public', 'assets');

/**
 * Format bytes to human readable format
 */
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Get file size
 */
function getFileSize(filePath) {
  try {
    return statSync(filePath).size;
  } catch (error) {
    return 0;
  }
}

/**
 * Recursively get all files in a directory
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!existsSync(dirPath)) {
    return arrayOfFiles;
  }

  const files = readdirSync(dirPath, { withFileTypes: true });

  files.forEach(file => {
    const filePath = join(dirPath, file.name);
    
    if (file.isDirectory()) {
      // Skip _original directories
      if (file.name !== '_original') {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      }
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

/**
 * Main function
 */
function checkMediaSizes() {
  console.log('📊 Media Size Checker\n');
  console.log('='.repeat(60));

  // Check videos
  const videoDir = join(publicDir, 'video');
  const videoFiles = existsSync(videoDir)
    ? getAllFiles(videoDir).filter(f => f.endsWith('.mp4'))
    : [];

  // Check images
  const imageDir = join(publicDir, 'images');
  const imageFiles = existsSync(imageDir)
    ? getAllFiles(imageDir).filter(f => 
        /\.(jpg|jpeg|png|webp|gif)$/i.test(f)
      )
    : [];

  // Analyze videos
  console.log('\n🎬 Video Files:\n');
  if (videoFiles.length === 0) {
    console.log('  No video files found');
  } else {
    let totalVideoSize = 0;
    const videoSizes = videoFiles.map(file => {
      const size = getFileSize(file);
      totalVideoSize += size;
      const relativePath = file.replace(projectRoot + '\\', '').replace(projectRoot + '/', '');
      return { path: relativePath, size };
    }).sort((a, b) => b.size - a.size);

    videoSizes.forEach(({ path, size }) => {
      const sizeStr = formatBytes(size);
      const warning = size > 10 * 1024 * 1024 ? ' ⚠️  (Large - consider optimizing)' : '';
      console.log(`  ${path.padEnd(50)} ${sizeStr.padStart(10)}${warning}`);
    });

    console.log(`\n  Total: ${formatBytes(totalVideoSize)} (${videoFiles.length} files)`);
    
    if (totalVideoSize > 50 * 1024 * 1024) {
      console.log(`  ⚠️  Warning: Total video size exceeds 50MB. Consider using Git LFS.`);
    }
  }

  // Analyze images
  console.log('\n🖼️  Image Files:\n');
  if (imageFiles.length === 0) {
    console.log('  No image files found');
  } else {
    let totalImageSize = 0;
    const imageSizes = imageFiles.map(file => {
      const size = getFileSize(file);
      totalImageSize += size;
      const relativePath = file.replace(projectRoot + '\\', '').replace(projectRoot + '/', '');
      return { path: relativePath, size };
    }).sort((a, b) => b.size - a.size);

    // Show top 20 largest images
    const topImages = imageSizes.slice(0, 20);
    topImages.forEach(({ path, size }) => {
      const sizeStr = formatBytes(size);
      const warning = size > 2 * 1024 * 1024 ? ' ⚠️  (Large - consider optimizing)' : '';
      console.log(`  ${path.padEnd(50)} ${sizeStr.padStart(10)}${warning}`);
    });

    if (imageSizes.length > 20) {
      console.log(`  ... and ${imageSizes.length - 20} more files`);
    }

    console.log(`\n  Total: ${formatBytes(totalImageSize)} (${imageFiles.length} files)`);
    
    const largeImages = imageSizes.filter(img => img.size > 2 * 1024 * 1024);
    if (largeImages.length > 0) {
      console.log(`  ⚠️  ${largeImages.length} image(s) exceed 2MB. Consider optimizing.`);
    }
  }

  // Summary
  const totalMediaSize = (videoFiles.reduce((sum, f) => sum + getFileSize(f), 0) +
                          imageFiles.reduce((sum, f) => sum + getFileSize(f), 0));

  console.log('\n' + '='.repeat(60));
  console.log(`\n📦 Total Media Size: ${formatBytes(totalMediaSize)}`);
  console.log(`   Videos: ${formatBytes(videoFiles.reduce((sum, f) => sum + getFileSize(f), 0))}`);
  console.log(`   Images: ${formatBytes(imageFiles.reduce((sum, f) => sum + getFileSize(f), 0))}`);

  console.log('\n💡 Recommendations:');
  if (videoFiles.some(f => getFileSize(f) > 10 * 1024 * 1024)) {
    console.log('  - Run optimize-videos.js to compress large video files');
  }
  if (imageFiles.some(f => getFileSize(f) > 2 * 1024 * 1024)) {
    console.log('  - Consider optimizing large images (convert to WebP, compress)');
  }
  if (totalMediaSize > 100 * 1024 * 1024) {
    console.log('  - Total media size is large. Ensure Git LFS is configured.');
  }
}

checkMediaSizes();

