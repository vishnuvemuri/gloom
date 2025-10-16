# Asset Replacement Guide

This guide shows you where to place your custom images, videos, and logos to replace the placeholder assets.

## Directory Structure

Create a `/public` directory in your project root if it doesn't exist, and organize assets as follows:

```
public/
├── hero-video.mp4          # Hero section background video
├── india-map.jpg           # Location map background
└── logos/
    ├── gloomdev-logo.svg   # Main company logo
    └── partners/           # Partner/client logos (optional)
```

## Asset Specifications

### 1. Hero Background Video

**Location**: `/public/hero-video.mp4`
**Component**: `src/components/HeroSection.tsx` (line 8)

**Specifications**:
- Format: MP4 (H.264 codec recommended)
- Resolution: 1920x1080 or higher
- Duration: 10-30 seconds (looping)
- File size: Under 5MB recommended
- Content: Corporate tech scenes, innovation, teamwork

**Update Code**:
```tsx
// Replace line 8 in HeroSection.tsx:
<div className="absolute inset-0 bg-[url('/hero-video.mp4')] bg-cover bg-center opacity-20"></div>

// Or use actual video element:
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-20"
>
  <source src="/hero-video.mp4" type="video/mp4" />
</video>
```

### 2. Location Map Background

**Location**: `/public/india-map.jpg`
**Component**: `src/components/LocationsMap.tsx` (line 48)

**Specifications**:
- Format: JPG or PNG
- Resolution: 800x800 minimum
- Content: India map or abstract geographic pattern

**Update Code**:
```tsx
// Replace line 48 in LocationsMap.tsx:
<div className="absolute inset-0 bg-[url('/india-map.jpg')] bg-cover bg-center opacity-20"></div>
```

### 3. Company Logo

**Location**: `/public/logos/gloomdev-logo.svg`
**Components**: `NavBar.tsx`, `Footer.tsx`

**Specifications**:
- Format: SVG (preferred) or PNG with transparent background
- Size: 160x40px (horizontal) or 40x40px (square icon)

**Update Code**:
```tsx
// In NavBar.tsx (line 51-55):
<motion.a href="#home" className="flex items-center space-x-2">
  <img src="/logos/gloomdev-logo.svg" alt="GloomDev" className="h-10" />
</motion.a>

// In Footer.tsx (line 27-32):
<div className="flex items-center space-x-2 mb-4">
  <img src="/logos/gloomdev-logo.svg" alt="GloomDev" className="h-10" />
</div>
```

## Recommended Free Stock Resources

If you need temporary placeholder assets:

### Videos
- **Pexels Videos**: https://www.pexels.com/videos/
  - Search: "technology", "innovation", "data center", "abstract tech"
- **Pixabay Videos**: https://pixabay.com/videos/
- **Coverr**: https://coverr.co/

### Images
- **Unsplash**: https://unsplash.com/
  - India map: Search "india map illustration"
- **Pexels**: https://www.pexels.com/

### Icons & Logos
- **Lucide Icons**: Already integrated (see existing components)
- **Logo Generator**: Use Figma, Canva, or LogoMakr for quick logos

## Optimization Tips

### Video Optimization
```bash
# Compress video using FFmpeg:
ffmpeg -i input.mp4 -vcodec h264 -crf 28 -preset slow output.mp4
```

### Image Optimization
- Use WebP format for better compression
- Compress with TinyPNG or Squoosh.app
- Lazy load images outside viewport

### Best Practices
1. Always provide `alt` text for accessibility
2. Use responsive images with `srcset` for different screen sizes
3. Serve optimized formats (WebP with fallback)
4. Lazy load images below the fold
5. Use CDN for production assets

## Testing Checklist

After replacing assets:

- [ ] Hero video plays smoothly on mobile and desktop
- [ ] All images load correctly in both light and dark modes
- [ ] Logo is visible with sufficient contrast
- [ ] Map background is subtle and doesn't overwhelm pins
- [ ] Assets are optimized and don't impact page load time
- [ ] All links and references point to correct file paths

## Need Help?

If you encounter issues with asset integration:

1. Check browser console for 404 errors
2. Verify file paths are correct (case-sensitive)
3. Ensure files are in `/public` directory (not `/src`)
4. Clear browser cache and rebuild: `npm run build`
5. Test locally before deploying to production

---

**Note**: All placeholder assets currently use external URLs (Unsplash). Replace these with your own hosted assets for production deployment to ensure reliability and faster load times.
