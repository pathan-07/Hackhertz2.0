'use client';
import React, { useEffect, useState, useRef } from 'react';

const TimelineRobot = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const robotRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [robotPosition, setRobotPosition] = useState({ top: 0, progress: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (!robotRef.current) return;
      
      const scrollY = window.scrollY;
      const timelineSection = document.getElementById('timeline');
      
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect();
        const timelineTop = rect.top + window.scrollY;
        const timelineHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        // Check if timeline section is visible
        const isInView = rect.top < viewportHeight && rect.bottom > 0;
        setIsVisible(isInView);
        
        if (isInView) {
          // Calculate scroll progress through timeline (0 to 1)
          const progress = Math.max(0, Math.min(1, 
            (scrollY - timelineTop + viewportHeight * 0.5) / (timelineHeight)
          ));
          
          // Set robot position based on progress
          setRobotPosition({
            top: progress * timelineHeight * 0.8,  // 80% of timeline height
            progress
          });
        }
      }
      
      setScrollPosition(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  // Robot appearance changes based on scroll progress
  const eyeAnimation = robotPosition.progress > 0.7 ? 'animate-pulse' : '';
  const antennaColor = robotPosition.progress > 0.5 ? 'bg-pink-400' : 'bg-blue-400';
  const bodyRotation = Math.sin(robotPosition.progress * Math.PI * 2) * 5; // -5 to 5 degrees

  return (
    <div 
      ref={robotRef}
      className="fixed right-10 z-20 animate-float-robot hidden md:block"
      style={{ 
        top: `calc(100px + ${robotPosition.top}px)`,
        opacity: Math.min(1, Math.max(0.6, robotPosition.progress)),
        transform: `scale(${Math.min(1.2, Math.max(0.8, 0.8 + robotPosition.progress * 0.4))}) rotate(${bodyRotation}deg)`
      }}
    >
      {/* Robot design */}
      <div className="relative w-24 h-32">
        {/* Antenna */}
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gray-300">
          <div className={`w-3 h-3 rounded-full ${antennaColor} absolute -top-2 left-1/2 transform -translate-x-1/2 ${eyeAnimation}`}></div>
        </div>
        
        {/* Head */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600 relative">
          {/* Eyes */}
          <div className="absolute top-4 left-3 w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
          <div className="absolute top-4 right-3 w-3 h-3 rounded-full bg-blue-400 animate-pulse animation-delay-500"></div>
          
          {/* Mouth - changes with progress */}
          <div 
            className="absolute bottom-4 left-0 right-0 mx-auto w-8 h-2 rounded-full"
            style={{
              background: robotPosition.progress > 0.8 ? 'linear-gradient(to right, #ff6b35, #c41e3a)' : '#3498db',
              transform: `scaleX(${robotPosition.progress > 0.5 ? Math.min(1.5, 0.8 + robotPosition.progress) : 1})`
            }}
          ></div>
        </div>
        
        {/* Body */}
        <div className="w-12 h-16 mx-auto mt-1 rounded-xl bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-gray-600 relative overflow-hidden">
          {/* Body lights */}
          <div className="flex justify-center pt-3 space-x-2">
            <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse animation-delay-1000"></div>
          </div>
          
          {/* Progress indicator on body */}
          <div className="absolute bottom-2 left-2 right-2 h-3 bg-gray-900 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full"
              style={{ 
                width: `${robotPosition.progress * 100}%`,
                background: `linear-gradient(to right, #3498db, #ff6b35 ${robotPosition.progress * 100}%)`
              }}
            ></div>
          </div>
          
          {/* Hidden pattern that appears with progress */}
          <div 
            className="absolute inset-0 opacity-0 transition-opacity duration-1000"
            style={{ 
              opacity: robotPosition.progress > 0.7 ? 0.3 : 0,
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)',
              backgroundSize: '5px 5px'
            }}
          ></div>
        </div>
        
        {/* Arms - move with progress */}
        <div 
          className="absolute top-20 left-0 w-6 h-2 bg-gray-600 rounded-full origin-right"
          style={{ transform: `rotate(${-20 + Math.sin(robotPosition.progress * Math.PI * 4) * 30}deg)` }}
        ></div>
        <div 
          className="absolute top-20 right-0 w-6 h-2 bg-gray-600 rounded-full origin-left"
          style={{ transform: `rotate(${20 - Math.sin(robotPosition.progress * Math.PI * 4 + 1) * 30}deg)` }}
        ></div>
      </div>
    </div>
  );
};

export default TimelineRobot;
