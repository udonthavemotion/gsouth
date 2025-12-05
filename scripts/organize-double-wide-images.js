import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read all files from the Double Wide Homes directory
const doubleWideDir = path.join(__dirname, '..', 'public', 'assets', 'images', 'Double Wide Homes');
const files = fs.readdirSync(doubleWideDir).filter(f => {
  const ext = path.extname(f).toLowerCase();
  return ['.jpg', '.jpeg', '.webp', '.png'].includes(ext);
});

// Pattern analysis function
function extractModelSlug(filename) {
  // Remove extension
  const nameWithoutExt = filename.replace(/\.(jpg|jpeg|webp|png)$/i, '');
  
  // Pattern: gulf_south_{model}_gallery_{index}-{suffix}
  // or: gulf_south_homes_{model}_gallery_{index}-{suffix}
  // or: gulf_south_grove_{model}_gallery_{index}-{suffix}
  
  // Skip content images (these are general marketing images)
  if (nameWithoutExt.includes('content-double-wide-home-models') || 
      nameWithoutExt.includes('modular-homes-content') ||
      nameWithoutExt.includes('double-wide-southern-homes-bayside')) {
    return null;
  }
  
  // Handle special cases
  if (nameWithoutExt.startsWith('The+')) {
    return 'the-grove'; // Special case for "The Grove" images
  }
  
  // Extract model slug
  let match = nameWithoutExt.match(/gulf_south_(?:homes_|grove_)?(.+?)_gallery/);
  if (!match) {
    // Try alternative pattern for single images (desoto, eexplorer, expedition)
    match = nameWithoutExt.match(/gulf_south_homes_(.+?)_gallery/);
  }
  
  if (match) {
    return match[1];
  }
  
  return null;
}

function extractGalleryIndex(filename) {
  const nameWithoutExt = filename.replace(/\.(jpg|jpeg|webp|png)$/i, '');
  const match = nameWithoutExt.match(/gallery[_-]?(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function slugToDisplayName(slug) {
  // Handle special cases
  const specialCases = {
    'eden_burton': 'Eden Burton',
    'boujee': 'Boujee',
    'boujeexl': 'Boujee XL',
    'burton': 'Burton',
    'kyleigh': 'Kyleigh',
    'orleans': 'Orleans',
    'dauphine': 'Dauphine',
    'jefferson': 'Jefferson',
    'lulamae': 'Lulamae',
    'magazine': 'Magazine',
    'maverick': 'Maverick',
    'parker': 'Parker',
    'pride': 'Pride',
    'revere': 'Revere',
    'satisfaction': 'Satisfaction',
    'sumner': 'Sumner',
    'washington': 'Washington',
    'desoto': 'Desoto',
    'eexplorer': 'E Explorer',
    'expedition': 'Expedition',
    'the-grove': 'The Grove'
  };
  
  if (specialCases[slug]) {
    return specialCases[slug];
  }
  
  // Convert slug to display name
  return slug
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function generateAltText(modelName, index, total) {
  return `${modelName} - Gallery image ${index} of ${total}`;
}

// Group files by model
const modelGroups = {};

files.forEach(file => {
  const modelSlug = extractModelSlug(file);
  
  if (!modelSlug) {
    // Skip content/marketing images
    return;
  }
  
  if (!modelGroups[modelSlug]) {
    modelGroups[modelSlug] = [];
  }
  
  modelGroups[modelSlug].push(file);
});

// Sort images within each group by gallery index
Object.keys(modelGroups).forEach(slug => {
  modelGroups[slug].sort((a, b) => {
    const indexA = extractGalleryIndex(a);
    const indexB = extractGalleryIndex(b);
    return indexA - indexB;
  });
});

// Generate TypeScript data structure
const models = Object.keys(modelGroups).map(slug => {
  const displayName = slugToDisplayName(slug);
  const images = modelGroups[slug];
  
  return {
    id: slug,
    displayName: displayName,
    images: images.map((img, idx) => ({
      filename: img,
      path: `/assets/images/Double Wide Homes/${img}`,
      altText: generateAltText(displayName, idx + 1, images.length)
    }))
  };
});

// Sort models alphabetically by display name
models.sort((a, b) => a.displayName.localeCompare(b.displayName));

// Output results
console.log(`Found ${models.length} unique models:`);
models.forEach(model => {
  console.log(`\n${model.displayName} (${model.id}): ${model.images.length} images`);
});

// Generate TypeScript file content
const tsContent = `import { HomeModel } from '../types';

// Double-Wide Home Models - Auto-generated from image analysis
// Generated: ${new Date().toISOString()}
// Total models: ${models.length}
// Total images: ${models.reduce((sum, m) => sum + m.images.length, 0)}

export const DOUBLE_WIDE_HOMES: Partial<HomeModel>[] = [
${models.map(model => {
  const firstImage = model.images[0];
  const gallery = model.images.map(img => `      "${img.path}"`).join(',\n');
  
  return `  {
    id: '${model.id}',
    name: "${model.displayName}",
    type: "Double Wide",
    imageUrl: "${firstImage.path}",
    gallery: [
${gallery}
    ]
  }`;
}).join(',\n\n')}
];

// Model metadata for reference
export const DOUBLE_WIDE_MODELS_METADATA = {
${models.map(model => {
  return `  '${model.id}': {
    displayName: "${model.displayName}",
    imageCount: ${model.images.length},
    images: [
${model.images.map(img => `      { filename: "${img.filename}", altText: "${img.altText}" }`).join(',\n')}
    ]
  }`;
}).join(',\n\n')}
};
`;

// Write to file
const outputPath = path.join(__dirname, '..', 'data', 'double-wide-homes.ts');
fs.writeFileSync(outputPath, tsContent, 'utf8');

console.log(`\n\n✅ Generated TypeScript file: ${outputPath}`);
console.log(`\n📊 Summary:`);
console.log(`   - Models: ${models.length}`);
console.log(`   - Total images: ${models.reduce((sum, m) => sum + m.images.length, 0)}`);

// Also output JSON for reference
const jsonOutput = {
  generated: new Date().toISOString(),
  totalModels: models.length,
  totalImages: models.reduce((sum, m) => sum + m.images.length, 0),
  models: models
};

const jsonPath = path.join(__dirname, '..', 'data', 'double-wide-homes-analysis.json');
fs.writeFileSync(jsonPath, JSON.stringify(jsonOutput, null, 2), 'utf8');
console.log(`   - JSON reference: ${jsonPath}`);

