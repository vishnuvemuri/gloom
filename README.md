# GloomDev Private Limited - Corporate Website

A modern, production-ready corporate website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations with reduced-motion support
- **Accessible**: WCAG AA compliant with semantic HTML
- **Modern Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Performance Optimized**: Lazy loading, optimized images, code splitting

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── NavBar.tsx           # Navigation with dark mode toggle
│   ├── HeroSection.tsx      # Hero with video background
│   ├── SolutionsGrid.tsx    # 3-column solutions overview
│   ├── SoftwareSection.tsx  # Software development capabilities
│   ├── ProcurementSection.tsx # Procurement services
│   ├── TrainingSection.tsx  # Professional training programs
│   ├── AboutSection.tsx     # Company mission, values, leadership
│   ├── LocationsMap.tsx     # Interactive location pins
│   ├── ContactForm.tsx      # Contact form with validation
│   └── Footer.tsx           # Footer with links and contact info
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
└── index.css                # Global styles and Tailwind imports
```

## Customization

### Images & Assets

Replace placeholder images in the following locations:

1. **Hero Background Video**:
   - Current: Unsplash stock photo
   - Recommended: Upload a corporate tech video to `/public/hero-video.mp4`
   - Update `HeroSection.tsx` line 8 to use local video

2. **Location Map Background**:
   - Current: India map from Unsplash
   - Update `LocationsMap.tsx` line 48 with your preferred map image

### Colors

The color palette is defined in `tailwind.config.js`:

- **Primary (Cyan)**: `#00ADEF` - Main brand color for CTAs
- **Accent (Orange)**: `#FF6B35` - Warm accent color
- **Navy**: `#0A1931` - Dark background color

To change colors, update the `colors` section in `tailwind.config.js`.

### Content

All content is embedded in the components. To update:

- **Company Info**: Edit contact details in `ContactForm.tsx` and `Footer.tsx`
- **Solutions**: Modify the `solutions` array in `SolutionsGrid.tsx`
- **Software Capabilities**: Update `capabilities` array in `SoftwareSection.tsx`
- **Procurement Services**: Edit `services` array in `ProcurementSection.tsx`
- **Training Programs**: Modify arrays in `TrainingSection.tsx`
- **Leadership**: Update `leadership` array in `AboutSection.tsx`

### Typography

Fonts are loaded from Google Fonts in `index.css`:
- **Display/Headings**: Poppins
- **Body Text**: Inter

To change fonts, update the `@import` URL in `index.css` and `fontFamily` in `tailwind.config.js`.

## Performance Notes

- All animations respect `prefers-reduced-motion` media query
- Images use lazy loading where appropriate
- Framer Motion animations are optimized for 60fps
- Tailwind CSS purges unused styles in production builds

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Contact

**GloomDev Private Limited**

- Business: tirumalarajumahali@gloomdev.in
- HR: hr@gloomdev.in
- Phone: +91 83673 99638

Office in Vijayawada

---

Copyright 2025 GloomDev Private Limited. All rights reserved.
