## Image Path Fix Instructions

I've fixed the image paths in both the hero section and header. For the image to display correctly:

1. Place your logo image file directly in the `public` folder (not in an images subfolder)
2. Name the file `hackhertz.png`

The updated implementation:
- Uses Next.js Image component for better performance and loading
- Provides consistent paths across components
- Sets width and height attributes for better loading performance
- Maintains the glow effect and styling

If you want to use a different filename, make sure to update it in both:
- `src/components/sections/hero-section.tsx`
- `src/components/layout/header.tsx`

Using the Next.js Image component provides:
- Automatic optimization and WebP conversion
- Lazy loading for better performance
- Proper sizing across different devices
