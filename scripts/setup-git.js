/**
 * Git Setup Script
 * 
 * This script helps verify Git setup for the project.
 * Note: Videos are excluded from Git (see .gitignore)
 * 
 * Usage:
 *   node scripts/setup-git.js
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

console.log('🔧 Git Setup Script\n');
console.log('='.repeat(50));

// Check Git
console.log('\n1. Checking Git installation...');
try {
  const gitVersion = execSync('git --version', { encoding: 'utf-8' }).trim();
  console.log(`   ✓ Git installed: ${gitVersion}`);
} catch (error) {
  console.error('   ✗ Git is not installed');
  console.error('   Please install Git: https://git-scm.com/downloads');
  process.exit(1);
}

// Check Git LFS (not required, but informative)
console.log('\n2. Git LFS status...');
console.log('   ℹ Git LFS not required - videos are excluded from Git');
console.log('   See VIDEO_HOSTING.md for production video hosting options');

// Check if Git repo is initialized
console.log('\n3. Checking Git repository...');
const gitDir = join(projectRoot, '.git');
if (existsSync(gitDir)) {
  console.log('   ✓ Git repository initialized');
} else {
  console.log('   ⚠ Git repository not initialized');
  console.log('   Run: git init');
}

// Check .gitignore for video exclusions
console.log('\n4. Checking .gitignore...');
const gitIgnorePath = join(projectRoot, '.gitignore');
if (existsSync(gitIgnorePath)) {
  console.log('   ✓ .gitignore file exists');
  
  // Check if it excludes videos
  const fs = await import('fs');
  const content = fs.readFileSync(gitIgnorePath, 'utf-8');
  if (content.includes('*.mp4') || content.includes('video')) {
    console.log('   ✓ Video files excluded from Git');
  } else {
    console.log('   ⚠ Video files may not be excluded');
  }
} else {
  console.log('   ⚠ .gitignore file not found');
}

// Summary and next steps
console.log('\n' + '='.repeat(50));
console.log('\n📋 Next Steps:\n');

if (!existsSync(gitDir)) {
  console.log('1. Initialize Git: git init');
}

console.log('2. Add files: git add .');
console.log('3. Commit: git commit -m "Initial commit"');
console.log('4. Create GitHub repo (see GITHUB_SETUP.md)');
console.log('5. Add remote: git remote add origin <your-repo-url>');
console.log('6. Push: git push -u origin main');
console.log('\nNote: Videos are excluded from Git. See VIDEO_HOSTING.md for production hosting.');

console.log('\n✅ Setup check complete!\n');

