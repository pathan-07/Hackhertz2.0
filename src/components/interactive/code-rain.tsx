'use client';

import { useEffect, useRef } from 'react';

interface CodeRainProps {
  density?: number;
  speed?: number;
  opacity?: number;
}

export const CodeRain = ({ 
  density = 20, 
  speed = 1,
  opacity = 0.1
}: CodeRainProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const width = window.innerWidth;
    
    // Generate a random character from the set
    const getRandomChar = () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>[]{}|\\/%$#@!*()+-=';
      return chars.charAt(Math.floor(Math.random() * chars.length));
    };
    
    // Generate a string of random characters
    const generateCodeString = (length: number) => {
      let result = '';
      for (let i = 0; i < length; i++) {
        result += getRandomChar();
      }
      return result;
    };
    
    // Create code columns
    const numColumns = Math.floor(width / 20) * density / 10;
    
    for (let i = 0; i < numColumns; i++) {
      const column = document.createElement('div');
      column.className = 'code-column';
      
      // Random position and properties
      const randomX = Math.random() * width;
      const randomLength = 10 + Math.floor(Math.random() * 80);
      const randomDelay = Math.random() * 5;
      const randomSpeed = (0.5 + Math.random() * 1.5) * speed;
      const randomOpacity = 0.1 + Math.random() * 0.4 * opacity;
      
      // Colors inspired by the neon wireframe from the image
      const colors = ['#ff005a', '#9500ff', '#00c8ff', '#d400ff'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      // Set data code attribute with random string
      column.setAttribute('data-code', generateCodeString(randomLength));
      column.style.color = randomColor;
      
      // Set CSS variables
      column.style.setProperty('--x', `${randomX}px`);
      column.style.setProperty('--fall-duration', `${10 / randomSpeed}s`);
      column.style.setProperty('--fall-delay', `${randomDelay}s`);
      column.style.setProperty('--opacity', `${randomOpacity}`);
      column.style.left = `${randomX}px`;
      
      container.appendChild(column);
    }
    
    // Cleanup
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [density, speed, opacity]);
  
  return (
    <div className="matrix-code" ref={containerRef}></div>
  );
};

export default CodeRain;
