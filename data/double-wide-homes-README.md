# Double-Wide Homes Image Organization

**Generated:** December 4, 2025  
**Total Models:** 21  
**Total Images:** 340

## Overview

This document describes the organization of double-wide home images located in `public/assets/images/Double Wide Homes/`. All images have been analyzed, grouped by model, and sorted by gallery index.

## Model List

### Complete Galleries (10+ images)

1. **Orleans** - 26 images
   - Includes both `gulf_south_grove_orleans` and `gulf_south_homes_orleans` prefixes
   - Slug: `orleans`

2. **Boujee** - 25 images
   - Slug: `boujee`

3. **Kyleigh** - 24 images
   - Uses `gulf_south_grove_kyleigh` prefix
   - Slug: `kyleigh`

4. **Boujee XL** - 24 images
   - Slug: `boujeexl`

5. **Magazine** - 24 images
   - Slug: `magazine`

6. **Satisfaction** - 22 images
   - Slug: `satisfaction`

7. **Eden Burton** - 21 images
   - Uses `gulf_south_eden_burton` prefix (note: different from standard pattern)
   - Slug: `eden_burton`
   - ⚠️ **Note:** May be "The Eden" model - verify with official site

8. **Pride** - 21 images
   - Slug: `pride`

9. **Sumner** - 20 images
   - Slug: `sumner`

10. **Revere** - 19 images
    - Slug: `revere`

11. **Dauphine** - 18 images
    - Slug: `dauphine`

12. **Jefferson** - 18 images
    - Slug: `jefferson`

13. **Burton** - 16 images
    - Slug: `burton`
    - ⚠️ **Note:** Separate from "Eden Burton" - verify relationship

14. **Lulamae** - 16 images
    - Slug: `lulamae`

15. **Maverick** - 14 images
    - Slug: `maverick`

16. **Parker** - 13 images
    - Slug: `parker`

17. **Washington** - 10 images
    - Slug: `washington`

### Limited Galleries (1-9 images)

18. **The Grove** - 6 images
   - Uses unique naming pattern: `The+Grove+{number}-{size}.jpg`
   - Slug: `the-grove`
   - ⚠️ **Note:** May be related to "Kyleigh" and "Orleans" (both use "grove" prefix)

19. **Desoto** - 1 image
   - Single image: `gulf_south_homes_desoto_gallery-1920w.jpg`
   - Slug: `desoto`
   - ⚠️ **Flagged:** Only 1 image - may need additional photos or is placeholder

20. **E Explorer** - 1 image
   - Single image: `gulf_south_homes_eexplorer_gallery-1920w.jpg`
   - Slug: `eexplorer`
   - ⚠️ **Flagged:** Only 1 image - may need additional photos or is placeholder

21. **Expedition** - 1 image
   - Single image: `gulf_south_homes_expedition_gallery-1920w.jpg`
   - Slug: `expedition`
   - ⚠️ **Flagged:** Only 1 image - may need additional photos or is placeholder

## Filename Patterns

### Standard Pattern
```
gulf_south_homes_{model}_gallery_{index}-{size}.{ext}
```

### Grove Collection Pattern
```
gulf_south_grove_{model}_gallery_{index}-{size}.{ext}
```

### Eden Burton Pattern (Unique)
```
gulf_south_eden_burton_gallery_{index}-{size}.{ext}
```

### The Grove Pattern (Unique)
```
The+{Model}+{number}-{size}.{ext}
```

## Image Sizes

Images use various size suffixes:
- `-0h` - Original/unconstrained height
- `-600h` - 600px height
- `-1920w` - 1920px width (used for single-image models)

## Models Requiring Review

1. **Eden Burton** - Verify if this should be "The Eden" model
2. **Burton vs Eden Burton** - Confirm if these are related or separate models
3. **The Grove Collection** - Kyleigh, Orleans, and The Grove may be related (all use "grove" prefix)
4. **Single-image models** - Desoto, E Explorer, and Expedition may need additional photos

## Excluded Images

The following images were excluded from the model data as they are general marketing/content images:

- `gulf-south-homes-content-double-wide-home-models-*.jpg/webp` (58 images)
- `gulf-south-homes-modular-homes-content-double-wide-home-models-*.jpg` (3 images)
- `gulf-south-homes-double-wide-southern-homes-bayside-*.jpg` (1 image)

These should be used for general page content, not individual model galleries.

## Usage

Import the data structure:

```typescript
import { DOUBLE_WIDE_HOMES, DOUBLE_WIDE_MODELS_METADATA } from './data/double-wide-homes';

// Use in components
DOUBLE_WIDE_HOMES.forEach(model => {
  // model.id, model.name, model.gallery, etc.
});
```

## Next Steps

1. ✅ Images organized by model
2. ✅ Galleries sorted by index
3. ⏳ Verify model names against official website
4. ⏳ Add manufacturer information (Champion, Sunshine, Franklin, etc.)
5. ⏳ Add model specifications (beds, baths, sqft)
6. ⏳ Integrate into Double-Wide Homes page component

