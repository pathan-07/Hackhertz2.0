'use client';

import React, { forwardRef, useEffect, useRef } from 'react';
import { cleanDarkReaderFromSvg } from '@/lib/clean-svg';
import { ClientOnly } from '@/components/ui/client-only';

// Component to wrap SVG icons and ensure they're rendered client-side only
// This helps prevent hydration mismatches from Dark Reader and similar extensions
export const SafeSvgIcon = forwardRef<
  HTMLDivElement,
  { 
    children: React.ReactNode;
    className?: string;
  }
>(({ children, className }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (containerRef.current) {
      // Find all SVG elements and clean them
      const svgElements = containerRef.current.querySelectorAll('svg');
      svgElements.forEach(svg => {
        cleanDarkReaderFromSvg(svg);
      });
    }
  }, []);
  
  return (
    <div ref={ref} className={className}>
      <ClientOnly>
        <div ref={containerRef}>
          {children}
        </div>
      </ClientOnly>
    </div>
  );
});

SafeSvgIcon.displayName = 'SafeSvgIcon';
