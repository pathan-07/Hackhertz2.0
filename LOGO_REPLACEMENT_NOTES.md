**For your information:**

I've created the necessary folders and modified the code to use an image instead of text for the HackHertz logo in both the hero section and the header. For the changes to work correctly, you need to:

1. Place your PNG logo file at `public/images/hackhertz-logo.png`
2. Make sure the logo image has a transparent background for the best visual effect
3. The logo should be approximately 600px wide for the best quality on larger screens

The image has been configured with:
- Responsive sizing that works across all device sizes
- A subtle glow effect using drop-shadow
- Proper animation for a smooth entrance

If your logo file has a different name, just update the src path in both files:
- src/components/sections/hero-section.tsx
- src/components/layout/header.tsx
