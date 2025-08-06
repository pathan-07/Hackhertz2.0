'use client';

import { useState, useEffect, ReactNode } from 'react';

interface ClientWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * A component that ensures its children are only rendered on the client side.
 * This helps prevent hydration mismatches with components that use browser APIs.
 */
export function ClientWrapper({ children, fallback = null }: ClientWrapperProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return fallback;
  }

  return <>{children}</>;
}
