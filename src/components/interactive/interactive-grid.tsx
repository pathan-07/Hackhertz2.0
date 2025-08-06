'use client';

import { useEffect, useRef } from 'react';

interface InteractiveGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const InteractiveGrid = ({ className = '', children }: InteractiveGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    
    const grid = gridRef.current;
    const gridBefore = grid.querySelector('::before') as HTMLElement;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      grid.classList.add('active');
      grid.style.setProperty('--mouse-x', `${x}px`);
      grid.style.setProperty('--mouse-y', `${y}px`);
    };
    
    const handleMouseLeave = () => {
      grid.classList.remove('active');
    };
    
    grid.addEventListener('mousemove', handleMouseMove);
    grid.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      grid.removeEventListener('mousemove', handleMouseMove);
      grid.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div ref={gridRef} className={`interactive-grid ${className}`}>
      {children}
    </div>
  );
};

export default InteractiveGrid;
