'use client';
import { useState, useEffect, useRef } from 'react';

export const useAnimatedCounter = (endValue: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = endValue;
          if (start === end) return;

          const startTime = Date.now();
          const timer = setInterval(() => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const currentCount = Math.floor(progress * (end - start) + start);
            setCount(currentCount);

            if (progress === 1) {
              clearInterval(timer);
            }
          }, 25);

          if (observerRef.current && ref.current) {
            observerRef.current.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observerRef.current.observe(ref.current);
    }

    return () => {
      if (observerRef.current && ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observerRef.current.unobserve(ref.current);
      }
    };
  }, [endValue, duration]);

  return { count, ref };
};
