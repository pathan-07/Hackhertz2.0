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
      {/* Dark base with cyberpunk gradient */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(to bottom, rgba(255, 126, 0, 0.8), rgba(255, 51, 102, 0.7) 30%, rgba(121, 40, 202, 0.6) 60%, rgba(0, 112, 243, 0.8))',
        backgroundColor: '#080410' /* Darker base color */
      }}></div>

      {/* Digital scan lines */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: 'repeating-linear-gradient(transparent 0px, transparent 1px, rgba(0, 0, 0, 0.8) 1px, rgba(0, 0, 0, 0.8) 2px)',
          backgroundSize: '100% 2px'
        }}
      ></div>
      
      {/* Cyber grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,126,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,126,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      {/* Matrix-like code rain - binary streams */}
      <div className="absolute inset-0 opacity-10 code-lines"></div>
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
                '--color': `hsla(${[30, 350, 280, 210][Math.floor(Math.random() * 4)]}, 100%, 70%, ${isCodeParticle ? 0.8 : 0.6})`,
              } as React.CSSProperties}
            ></div>
          );
        })}
      </div>
      
      {/* Multiple animated glows with higher opacity */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/15 blur-[150px] animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full bg-pink-500/15 blur-[180px] animate-pulse animation-delay-1000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] rounded-full bg-purple-700/15 blur-[160px] animate-pulse animation-delay-2000"></div>
      <div className="absolute bottom-1/3 left-1/3 w-[450px] h-[450px] rounded-full bg-blue-500/15 blur-[120px] animate-pulse animation-delay-3000"></div>
      
      {/* Add digital circuit patterns */}
      <div className="absolute inset-0 matrix-bg"></div>
    </div>
  );
};

AnimatedCssBackground.displayName = 'AnimatedCssBackground';

export default AnimatedCssBackground;
export { AnimatedCssBackground };
