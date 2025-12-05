/**
 * Video Optimization Script
 * 
 * This script optimizes video files using ffmpeg to reduce file sizes
 * while maintaining acceptable quality for web use.
 * 
 * Requirements:
 * - ffmpeg must be installed and available in PATH
 * - Install: https://ffmpeg.org/download.html
 * 
 * Usage:
 *   node scripts/optimize-videos.js
 */

import { execSync } from 'child_process';
import { readdirSync, statSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const videoDir = join(projectRoot, 'public', 'assets', 'video');
const originalDir = join(videoDir, '_original');

// Video optimization settings
const OPTIMIZATION_SETTINGS = {
  // Target bitrate for web (good quality, reasonable size)
  videoBitrate: '2M',
  // Audio bitrate
  audioBitrate: '128k',
  // Codec for best web compatibility
  videoCodec: 'libx264',
  audioCodec: 'aac',
  // Preset for encoding speed vs compression
  preset: 'medium',
  // CRF (Constant Rate Factor) - lower is better quality (18-28 is good range)
  crf: '23',
  // Pixel format
  pixFmt: 'yuv420p',
  // Maximum resolution for web (1080p)
  maxResolution: '1920x1080',
};

/**
 * Check if ffmpeg is available
 */
function checkFFmpeg() {
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Get file size in MB
 */
function getFileSizeMB(filePath) {
  const stats = statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

/**
 * Optimize a single video file
 */
function optimizeVideo(inputPath, outputPath) {
  console.log(`\nOptimizing: ${inputPath}`);
  console.log(`Output: ${outputPath}`);
  
  const inputSize = getFileSizeMB(inputPath);
  console.log(`Original size: ${inputSize} MB`);

  try {
    // Build ffmpeg command
    const command = [
      'ffmpeg',
      '-i', `"${inputPath}"`,
      '-c:v', OPTIMIZATION_SETTINGS.videoCodec,
      '-preset', OPTIMIZATION_SETTINGS.preset,
      '-crf', OPTIMIZATION_SETTINGS.crf,
      '-vf', `scale=${OPTIMIZATION_SETTINGS.maxResolution}:force_original_aspect_ratio=decrease,pad=${OPTIMIZATION_SETTINGS.maxResolution}:(ow-iw)/2:(oh-ih)/2`,
      '-c:a', OPTIMIZATION_SETTINGS.audioCodec,
      '-b:a', OPTIMIZATION_SETTINGS.audioBitrate,
      '-pix_fmt', OPTIMIZATION_SETTINGS.pixFmt,
      '-movflags', '+faststart', // Enable fast start for web streaming
      '-y', // Overwrite output file
      `"${outputPath}"`
    ].join(' ');

    execSync(command, { stdio: 'inherit' });

    const outputSize = getFileSizeMB(outputPath);
    const savings = ((parseFloat(inputSize) - parseFloat(outputSize)) / parseFloat(inputSize) * 100).toFixed(1);
    
    console.log(`✓ Optimized size: ${outputSize} MB`);
    console.log(`✓ Space saved: ${savings}%`);
    
    return { success: true, originalSize: inputSize, optimizedSize: outputSize, savings };
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
    return { success: false, error: error.message };
  }
}

/**
 * Main optimization function
 */
async function optimizeAllVideos() {
  console.log('🎬 Video Optimization Script\n');
  console.log('='.repeat(50));

  // Check if ffmpeg is available
  if (!checkFFmpeg()) {
    console.error('\n✗ ERROR: ffmpeg is not installed or not in PATH');
    console.error('\nPlease install ffmpeg:');
    console.error('  Windows: https://www.gyan.dev/ffmpeg/builds/');
    console.error('  macOS: brew install ffmpeg');
    console.error('  Linux: sudo apt-get install ffmpeg');
    process.exit(1);
  }

  // Check if original directory exists
  if (!existsSync(originalDir)) {
    console.log(`\n⚠ Warning: Original videos directory not found: ${originalDir}`);
    console.log('Creating backup directory...');
    // We'll work with existing videos in videoDir
  }

  // Get all video files
  const videoFiles = readdirSync(videoDir)
    .filter(file => file.endsWith('.mp4') && file !== '_original');

  if (videoFiles.length === 0) {
    console.log('\n⚠ No video files found to optimize');
    return;
  }

  console.log(`\nFound ${videoFiles.length} video file(s) to optimize\n`);

  const results = [];
  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  // Import fs/promises at the top level
  const fs = await import('fs/promises');

  // Process each video
  for (const videoFile of videoFiles) {
    const inputPath = join(videoDir, videoFile);
    const tempPath = join(videoDir, `temp_${videoFile}`);
    
    // Backup original if _original directory exists
    const originalBackupPath = existsSync(originalDir) 
      ? join(originalDir, videoFile)
      : null;

    // Backup original before optimization
    if (originalBackupPath && !existsSync(originalBackupPath)) {
      await fs.copyFile(inputPath, originalBackupPath);
    }

    // Optimize video
    const result = optimizeVideo(inputPath, tempPath);
    
    if (result.success) {
      // Replace original with optimized version
      await fs.rename(tempPath, inputPath);
      
      totalOriginalSize += parseFloat(result.originalSize);
      totalOptimizedSize += parseFloat(result.optimizedSize);
    } else {
      // Remove temp file if optimization failed
      try {
        await fs.unlink(tempPath);
      } catch (e) {
        // Ignore if file doesn't exist
      }
    }
    
    results.push({ file: videoFile, ...result });
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('\n📊 Optimization Summary:\n');
  
  const totalSavings = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1);
  
  console.log(`Total original size: ${totalOriginalSize.toFixed(2)} MB`);
  console.log(`Total optimized size: ${totalOptimizedSize.toFixed(2)} MB`);
  console.log(`Total space saved: ${totalSavings}%`);
  console.log(`Space saved: ${(totalOriginalSize - totalOptimizedSize).toFixed(2)} MB`);

  console.log('\n✓ Optimization complete!');
}

// Run the script
optimizeAllVideos().catch(console.error);

