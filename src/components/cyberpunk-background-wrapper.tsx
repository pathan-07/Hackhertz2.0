'use client';

import dynamic from 'next/dynamic';

// Import cyberpunk background with SSR disabled to avoid hydration issues
// This needs to be in a client component when using ssr: false
const CyberpunkBackground = dynamic(
  () => import('@/components/cyberpunk-background'),
  { ssr: false }
);

export function CyberpunkBackgroundWrapper() {
  return <CyberpunkBackground />;
}

export default CyberpunkBackgroundWrapper;
