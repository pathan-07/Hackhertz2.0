'use client';
import React, { useEffect, useState } from 'react';

type RobotAnimationProps = {
  targetElementId: string;
};

export default function RobotAnimation({ targetElementId }: RobotAnimationProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [robotPosition, setRobotPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);

      // Check if the timeline section is visible
      const timelineSection = document.getElementById(targetElementId);
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);

        if (isInView) {
          // Calculate how far through the section we've scrolled (0 to 1)
          const sectionTop = rect.top + window.scrollY;
          const sectionHeight = rect.height;
          const viewportHeight = window.innerHeight;
          const scrollProgress = Math.max(0, Math.min(1, 
            (currentPosition - sectionTop + viewportHeight) / (sectionHeight + viewportHeight)
          ));
          
          // Use this to position the robot
          setRobotPosition(scrollProgress * 100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetElementId]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed right-10 z-20 animate-float-robot"
      style={{ 
        top: `calc(50% - 50px + ${robotPosition}px)`,
        opacity: Math.min(1, Math.max(0.2, robotPosition / 50)),
        transform: `scale(${Math.min(1, Math.max(0.5, robotPosition / 50))})`
      }}
    >
      <div className="relative w-24 h-30">
        {/* Robot head */}
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-secondary border-2 border-white/30 relative">
          {/* Eyes */}
          <div className="absolute top-4 left-3 w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
          <div className="absolute top-4 right-3 w-2 h-2 rounded-full bg-blue-400 animate-pulse animation-delay-500"></div>
          {/* Mouth */}
          <div className="absolute bottom-3 left-4 right-4 h-1 bg-blue-200"></div>
        </div>
        {/* Robot body */}
        <div className="w-12 h-14 mt-1 mx-auto rounded-lg bg-gradient-to-br from-secondary to-primary border-2 border-white/30">
          {/* Buttons */}
          <div className="flex justify-center pt-2 space-x-2">
            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
