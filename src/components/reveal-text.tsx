'use client';

import { useEffect, useState } from 'react';

interface RevealTextProps {
  text: string;
  className?: string;
  speed?: number; // ms per character
  delay?: number; // ms before starting
}

export const RevealText = ({ 
  text, 
  className = '', 
  speed = 30, 
  delay = 0 
}: RevealTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let charIndex = 0;
    
    // Reset state when text changes
    setDisplayedText('');
    setIsComplete(false);
    
    // Initial delay before starting
    timeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (charIndex < text.length) {
          setDisplayedText(prev => prev + text.charAt(charIndex));
          charIndex++;
        } else {
          clearInterval(intervalId);
          setIsComplete(true);
        }
      }, speed);
      
      return () => clearInterval(intervalId);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);
  
  return (
    <span className={`inline-block ${className} ${!isComplete ? 'hacker-typing' : ''}`}>
      {displayedText}
    </span>
  );
};

export default RevealText;
