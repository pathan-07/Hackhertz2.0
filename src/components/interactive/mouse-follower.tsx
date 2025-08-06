'use client';

import { useEffect, useState } from 'react';

export const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Create the mouse follower element
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    document.body.appendChild(follower);

    // Update position of follower
    const updateFollower = () => {
      if (follower) {
        follower.style.left = `${position.x}px`;
        follower.style.top = `${position.y}px`;
        
        if (isActive) {
          follower.classList.add('active');
        } else {
          follower.classList.remove('active');
        }
      }
      requestAnimationFrame(updateFollower);
    };

    // Start the animation
    const animationId = requestAnimationFrame(updateFollower);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationId);
      if (follower && follower.parentNode) {
        follower.parentNode.removeChild(follower);
      }
    };
  }, [position.x, position.y, isActive]);

  return null;
};

export default MouseFollower;
