import { HeroSection } from '@/components/sections/hero-section';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ClientWrapper } from '@/components/client-wrapper';
import CyberpunkBackgroundWrapper from '@/components/cyberpunk-background-wrapper';
import { SectionsRenderer } from '@/components/sections-renderer';

// Disabling hydration warnings in development to improve developer experience
export const fetchCache = 'force-no-store';
export const revalidate = 0;

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      {/* Add the cyberpunk background with client-side only rendering */}
      <ClientWrapper>
        <CyberpunkBackgroundWrapper />
      </ClientWrapper>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {/* The HeroSection is loaded statically because it's the first thing users see. */}
          <HeroSection />
          <SectionsRenderer />
        </main>
        <Footer />
      </div>
    </div>
  );
}
