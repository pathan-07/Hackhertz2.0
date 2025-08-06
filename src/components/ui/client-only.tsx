'use client';

import { useEffect, useState } from 'react';

// This component ensures that its children are only rendered on the client
// This helps avoid hydration mismatches with browser extensions like Dark Reader
export function ClientOnly({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // On the first render, don't render anything to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  return <>{children}</>;
}
