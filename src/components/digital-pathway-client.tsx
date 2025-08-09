'use client';

import { ClientOnly } from '@/components/ui/client-only';
import { useEffect, useRef } from 'react';

const PathwayCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    // Define grid properties
    const gridSize = 30;
    let offset = 0;
    const speed = 1;
    
    // Create digital pathway effect like in the image
    const drawDigitalPathway = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the perspective grid (like a road/pathway)
      const horizonY = canvas.height * 0.55; // Horizon line position
      const vanishingPointX = canvas.width / 2; // Center of the screen
      
      // Set gradient for the pathway
      const pathwayGradient = ctx.createLinearGradient(0, horizonY, 0, canvas.height);
      pathwayGradient.addColorStop(0, 'rgba(0, 200, 255, 0.7)'); // Cyan at the horizon
      pathwayGradient.addColorStop(0.4, 'rgba(120, 0, 255, 0.4)'); // Purple in the middle
      pathwayGradient.addColorStop(1, 'rgba(10, 0, 30, 0.2)'); // Dark at the bottom
      
      ctx.fillStyle = pathwayGradient;
      ctx.fillRect(0, horizonY, canvas.width, canvas.height - horizonY);
      
      // Draw perspective grid lines
      ctx.strokeStyle = 'rgba(0, 200, 255, 0.3)';
      ctx.lineWidth = 1;
      
      // Vertical lines in perspective
      for (let x = -canvas.width; x <= canvas.width * 2; x += gridSize) {
        const adjustedX = (x + offset) % (canvas.width * 2) - canvas.width;
        
        // Calculate perspective position
        const perspectiveX = vanishingPointX + (adjustedX - vanishingPointX) * 1.5;
        
        ctx.beginPath();
        ctx.moveTo(perspectiveX, horizonY);
        ctx.lineTo(adjustedX, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines in perspective
      for (let y = 0; y <= canvas.height - horizonY; y += gridSize) {
        const perspectiveY = horizonY + y;
        const perspectiveWidth = canvas.width * (1 - y / (canvas.height - horizonY) * 0.8);
        
        ctx.beginPath();
        ctx.moveTo(vanishingPointX - perspectiveWidth / 2, perspectiveY);
        ctx.lineTo(vanishingPointX + perspectiveWidth / 2, perspectiveY);
        ctx.stroke();
      }
      
      // Add glowing particles along the path - use deterministic pattern instead of random
      const particleCount = 20;
      const time = Date.now() * 0.001; // Current time for animation
      
      for (let i = 0; i < particleCount; i++) {
        // Use deterministic pattern based on i and time
        const xOffset = Math.sin(time + i * 0.5) * 0.5;
        const particleX = vanishingPointX + xOffset * canvas.width * 0.8;
        
        // Vertical position with deterministic pattern
        const progress = ((i / particleCount) + (time * 0.1)) % 1;
        const particleY = horizonY + progress * (canvas.height - horizonY);
        
        // Size decreases as particles get closer to the horizon
        const size = 4 * (1 - progress);
        
        // Opacity varies
        ctx.globalAlpha = 0.7 - progress * 0.5;
        
        // Color varies between cyan and purple - deterministic
        const colorIndex = i % 3;
        const colors = ['#00c8ff', '#7800ff', '#ff005a'];
        
        ctx.fillStyle = colors[colorIndex];
        ctx.beginPath();
        ctx.arc(particleX, particleY, size, 0, Math.PI * 2);
        ctx.fill();
      }
      
      ctx.globalAlpha = 1;
      
      // Draw street lights
      drawStreetLights(ctx, vanishingPointX, horizonY, canvas.height);
      
      // Update animation
      offset += speed;
      if (offset > gridSize * 2) offset = 0;
    };
    
    // Draw street lights like in the image
    const drawStreetLights = (ctx: CanvasRenderingContext2D, centerX: number, horizonY: number, canvasHeight: number) => {
      const lightCount = 5; // Number of street lights on each side
      
      for (let side = -1; side <= 1; side += 2) { // Left and right sides
        for (let i = 0; i < lightCount; i++) {
          // Position lights in perspective
          const progress = i / (lightCount - 1);
          const perspectiveScale = 1 - progress * 0.9;
          
          const lightX = centerX + (side * canvasHeight * 0.2 * perspectiveScale);
          const lightY = horizonY + progress * (canvasHeight - horizonY) * 0.7;
          
          // Draw light post
          ctx.strokeStyle = 'rgba(0, 200, 255, 0.6)';
          ctx.lineWidth = 2 * perspectiveScale;
          ctx.beginPath();
          ctx.moveTo(lightX, lightY);
          ctx.lineTo(lightX, lightY - 40 * perspectiveScale);
          ctx.stroke();
          
          // Draw light
          const glow = ctx.createRadialGradient(
            lightX, lightY - 40 * perspectiveScale, 0,
            lightX, lightY - 40 * perspectiveScale, 20 * perspectiveScale
          );
          
          glow.addColorStop(0, 'rgba(0, 200, 255, 0.9)');
          glow.addColorStop(1, 'rgba(0, 200, 255, 0)');
          
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(lightX, lightY - 40 * perspectiveScale, 20 * perspectiveScale, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      drawDigitalPathway();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 z-10 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

// Wrap in ClientOnly to prevent hydration mismatches
export function DigitalPathway() {
  return (
    <ClientOnly>
      <PathwayCanvas />
    </ClientOnly>
  );
}

export default DigitalPathway;
