'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface InteractiveTechCardProps {
  className?: string;
  children: React.ReactNode;
}

export function InteractiveTechCard({ className, children }: InteractiveTechCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className={cn(
        "tech-card relative overflow-hidden",
        "border border-orange-500/20 p-6 rounded-xl",
        "transition-all duration-300 bg-[#0c061f]/70",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{ y: -8 }}
    >
      {isHovering && (
        <div 
          className="absolute pointer-events-none inset-0 opacity-40 bg-radial-gradient"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 126, 0, 0.5) 0%, transparent 60%)`,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
