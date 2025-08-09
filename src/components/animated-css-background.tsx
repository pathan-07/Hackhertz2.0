'use client';
import React, { useEffect, useState } from 'react';

const AnimatedCssBackground = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Binary code characters
  const binaryChars = ['0', '1'];
  
  // Hacker code fragments
  const codeFragments = [
    '{hack}', '<root>', '$_GET', 'sudo', '#!/bin', 
    'rm -rf', 'ssh', 'chmod', 'exec()', 'console.log', 
    'function()', 'getRoot', 'hack', 'inject', 'void'
  ];
  
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Dark base with digital wireframe gradient inspired by the image */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(255, 0, 106, 0.5), rgba(120, 0, 255, 0.4) 40%, rgba(0, 150, 255, 0.6) 80%)',
        backgroundColor: '#050215' /* Deeper dark base color */
      }}></div>

      {/* Digital scan lines */}
      <div 
        className="absolute inset-0 opacity-8" 
        style={{
          backgroundImage: 'repeating-linear-gradient(transparent 0px, transparent 1px, rgba(0, 0, 0, 0.8) 1px, rgba(0, 0, 0, 0.8) 2px)',
          backgroundSize: '100% 2px'
        }}
      ></div>
      
      {/* Digital wireframe grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,0,106,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,0,255,0.15)_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      {/* Wireframe contour lines like in the image */}
      <div className="absolute inset-0 opacity-15 code-lines"></div>
      <div className="absolute inset-0 cyber-dots"></div>
      
      {/* Animated particles with code fragments */}
      <div className="particles">
        {mounted && Array.from({ length: 60 }).map((_, index) => {
          // Determine if this particle should be a code fragment or just a glow
          const isCodeParticle = index % 5 === 0;
          const codeText = isCodeParticle 
            ? codeFragments[Math.floor(Math.random() * codeFragments.length)]
            : binaryChars[Math.floor(Math.random() * 2)];
            
          return (
            <div 
              key={index} 
              className="particle" 
              data-code={codeText}
              style={{
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--duration': `${15 + Math.random() * 20}s`,
                '--delay': `${Math.random() * 5}s`,
                '--size': `${3 + Math.random() * 8}px`,
                '--color': `hsla(${[350, 270, 200, 180][Math.floor(Math.random() * 4)]}, 100%, ${60 + Math.random() * 20}%, ${isCodeParticle ? 0.8 : 0.6})`,
              } as React.CSSProperties}
            ></div>
          );
        })}
      </div>
      
      {/* Neon circular glow like in the image */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-[#ff005a]/25 blur-[120px] animate-pulse"></div>
      
      {/* The central red neon circle from the image */}
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full border-4 border-[#ff005a] shadow-[0_0_30px_10px_rgba(255,0,90,0.6)] animate-pulse"></div>
      
      {/* Surrounding glows to mimic the image's atmosphere */}
      <div className="absolute top-2/3 left-1/2 w-[500px] h-[500px] rounded-full bg-[#7800ff]/20 blur-[150px] animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00c8ff]/20 blur-[100px] animate-pulse animation-delay-3000"></div>
      
      {/* Add digital pathway like in the bottom of the image */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px]" style={{
        background: 'linear-gradient(to top, rgba(0, 200, 255, 0.3), transparent)',
        boxShadow: '0 0 40px 10px rgba(0, 200, 255, 0.2)'
      }}></div>
      
      {/* Add digital circuit patterns */}
      <div className="absolute inset-0 matrix-bg"></div>
    </div>
  );
};

AnimatedCssBackground.displayName = 'AnimatedCssBackground';

export default AnimatedCssBackground;
export { AnimatedCssBackground };
