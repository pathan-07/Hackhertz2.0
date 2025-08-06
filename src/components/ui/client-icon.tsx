'use client';

import { ClientOnly } from '@/components/ui/client-only';
import { LucideProps } from 'lucide-react';
import { forwardRef } from 'react';

// This component wraps any Lucide icon to ensure it's only rendered on the client
// This prevents hydration errors from browser extensions like Dark Reader
export const ClientIcon = forwardRef<SVGSVGElement, { 
  icon: React.ComponentType<LucideProps>;
  className?: string;
} & Omit<LucideProps, 'ref'>>((props, ref) => {
  const { icon: Icon, className, ...rest } = props;
  
  return (
    <ClientOnly>
      <Icon ref={ref} className={className} {...rest} />
    </ClientOnly>
  );
});

ClientIcon.displayName = 'ClientIcon';
