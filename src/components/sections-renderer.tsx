"use client";

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

// A simple skeleton loader to show while sections are loading.
// This prevents layout shift and provides a better user experience.
const SectionLoader = () => (
  <div className="container mx-auto py-12 md:py-24">
    <Skeleton className="h-8 w-1/3 mx-auto mb-8" />
    <Skeleton className="h-64 w-full" />
  </div>
);

// Reintroducing all sections
const AboutSection = dynamic(() => import('@/components/sections/about-section').then(mod => mod.AboutSection), {
  loading: () => <SectionLoader />,
  ssr: false,
});

const DomainsSection = dynamic(() => import('@/components/sections/domains-section').then(mod => mod.DomainsSection), {
  loading: () => <SectionLoader />,
  ssr: false,
});

const TimelineSection = dynamic(() => import('@/components/sections/timeline-section').then(mod => mod.TimelineSection), {
  loading: () => <SectionLoader />,
  ssr: false,
});

const PrizesSection = dynamic(() => import('@/components/sections/prizes-section').then(mod => mod.PrizesSection), {
  loading: () => <SectionLoader />,
  ssr: false,
});

const SponsorsSection = dynamic(() => import('@/components/sections/sponsors-section').then(mod => mod.SponsorsSection), {
  loading: () => <SectionLoader />,
  ssr: false,
});

const FaqSection = dynamic(() => import('@/components/sections/faq-section').then(mod => mod.FaqSection), {
  loading: () => <SectionLoader />,
  ssr: false,
});

const VenueSection = dynamic(() => import('@/components/sections/venue-section').then(mod => mod.VenueSection), {
  loading: () => <SectionLoader />,
  ssr: false,
});

export function SectionsRenderer() {
  return (
    <div className="space-y-24 md:space-y-32 py-24 md:py-32">
      <AboutSection />
      <DomainsSection />
      <TimelineSection />
      <PrizesSection />
      <SponsorsSection />
      <FaqSection />
      <VenueSection />
    </div>
  );
}