'use client';

import React from 'react';
import Image from 'next/image';

/**
 * This component provides a fallback method for displaying the HackHertz logo
 * using a base64 encoded image directly in the code.
 * 
 * To use this:
 * 1. Import this component in place of the regular Image component
 * 2. Replace the base64String below with your actual image encoded as base64
 * 
 * Example usage:
 *   <HackHertzLogo className="h-8 w-auto" />
 */

// Replace this with your actual base64-encoded image
// You can convert your image to base64 using online tools like:
// https://www.base64-image.de/
const base64String = "data:image/png;base64,YOUR_BASE64_STRING_HERE";

interface HackHertzLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function HackHertzLogo({ 
  className = "", 
  width = 120, 
  height = 32 
}: HackHertzLogoProps) {
  return (
    <div className={className}>
      <Image
        src={base64String}
        alt="HackHertz"
        width={width}
        height={height}
        className="w-full h-auto"
        priority
      />
    </div>
  );
}
