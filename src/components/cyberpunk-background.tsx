'use client';

import { useEffect, useRef } from 'react';
import CodeRain from './interactive/code-rain';
// Removed MouseFollower import

export function CyberpunkBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient"></div>
      
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 circuit-pattern"></div>
      
      {/* Code rain effect */}
      <CodeRain density={15} speed={1.2} opacity={0.15} />
      
      {/* Scan lines effect */}
      <div className="absolute inset-0 scan-lines pointer-events-none"></div>
      
      {/* Mouse follower removed */}
    </div>
  );
}

export default CyberpunkBackground;
