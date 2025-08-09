'use client';

import { useEffect, useRef } from 'react';

export const DigitalWireframeHead = () => {
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
    
    // Create a wireframe head visualization
    const drawWireframeHead = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Center position for the head
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2 - 100; // Offset to position higher
      
      // Set neon colors from the image
      const colors = [
        '#ff005a', // Neon red
        '#7800ff', // Purple
        '#00c8ff', // Cyan
        '#d400ff'  // Pink
      ];
      
      // Animation time
      const time = Date.now() * 0.001;
      
      // Draw wireframe layers
      for (let layer = 0; layer < 25; layer++) {
        const layerOffset = layer * 5;
        const waveIntensity = 10 + Math.sin(time + layer * 0.1) * 5;
        const color = colors[layer % colors.length];
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        
        // Draw head outline with wave effects
        for (let i = 0; i < 360; i += 5) {
          const angle = (i * Math.PI) / 180;
          const radiusX = 150 + Math.sin(angle * 4 + time + layer * 0.05) * waveIntensity;
          const radiusY = 180 + Math.sin(angle * 3 + time * 1.5 + layer * 0.05) * waveIntensity;
          
          const x = centerX + Math.cos(angle) * radiusX;
          const y = centerY + Math.sin(angle) * radiusY;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.closePath();
        ctx.globalAlpha = 0.3 - layer * 0.01;
        ctx.stroke();
      }
      
      // Draw facial features as circuit-like patterns
      drawCircuitPatterns(ctx, centerX, centerY, time);
      
      // Draw neon circle around the head like in the image
      ctx.beginPath();
      ctx.strokeStyle = '#ff005a';
      ctx.lineWidth = 4;
      ctx.globalAlpha = 0.9;
      ctx.arc(centerX, centerY, 240, 0, Math.PI * 2);
      ctx.stroke();
      
      // Glow effect for the neon circle
      ctx.beginPath();
      ctx.strokeStyle = '#ff005a';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.5;
      ctx.arc(centerX, centerY, 244, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.strokeStyle = '#ff005a';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3;
      ctx.arc(centerX, centerY, 248, 0, Math.PI * 2);
      ctx.stroke();
    };
    
    const drawCircuitPatterns = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number, time: number) => {
      // Draw eyes
      const eyeOffsetX = 50;
      const eyeY = centerY - 20;
      
      // Left eye
      ctx.beginPath();
      ctx.globalAlpha = 0.8;
      ctx.strokeStyle = '#00c8ff';
      ctx.lineWidth = 2;
      ctx.arc(centerX - eyeOffsetX, eyeY, 15, 0, Math.PI * 2);
      ctx.stroke();
      
      // Right eye
      ctx.beginPath();
      ctx.arc(centerX + eyeOffsetX, eyeY, 15, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw circuit-like patterns
      ctx.globalAlpha = 0.5;
      ctx.strokeStyle = '#7800ff';
      
      // Draw random circuit lines across the face
      for (let i = 0; i < 15; i++) {
        const startAngle = Math.random() * Math.PI * 2;
        const endAngle = startAngle + Math.PI * (0.5 + Math.random() * 0.5);
        const radius = 60 + Math.random() * 60;
        
        const startX = centerX + Math.cos(startAngle) * radius;
        const startY = centerY + Math.sin(startAngle) * radius;
        const endX = centerX + Math.cos(endAngle) * radius;
        const endY = centerY + Math.sin(endAngle) * radius;
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        
        // Add some bezier curves for organic flow
        const controlX = centerX + Math.cos((startAngle + endAngle) / 2) * radius * 1.2;
        const controlY = centerY + Math.sin((startAngle + endAngle) / 2) * radius * 0.8;
        
        ctx.quadraticCurveTo(controlX, controlY, endX, endY);
        ctx.stroke();
      }
    };
    
    // Animation loop
    const animate = () => {
      drawWireframeHead();
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
      className="absolute inset-0 z-20 pointer-events-none opacity-60"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default DigitalWireframeHead;
