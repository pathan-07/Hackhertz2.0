import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { DomainsSection } from '@/components/sections/domains-section';
import { TimelineSection } from '@/components/sections/timeline-section';
import { PrizesSection } from '@/components/sections/prizes-section';
import { JudgesSection } from '@/components/sections/judges-section';
import { SponsorsSection } from '@/components/sections/sponsors-section';
import { FaqSection } from '@/components/sections/faq-section';
import { AnimatedSection } from '@/components/animated-section';
import { ClientWrapper } from '@/components/client-wrapper';
import CyberpunkBackgroundWrapper from '@/components/cyberpunk-background-wrapper';

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
          <HeroSection />
          <div className="space-y-24 md:space-y-32 py-24 md:py-32">
            <AnimatedSection>
                <AboutSection />
            </AnimatedSection>
             <AnimatedSection>
                <DomainsSection />
            </AnimatedSection>
             <AnimatedSection>
                <TimelineSection />
            </AnimatedSection>
             <AnimatedSection>
                <PrizesSection />
            </AnimatedSection>
             <AnimatedSection>
                <JudgesSection />
            </AnimatedSection>
             <AnimatedSection>
                <SponsorsSection />
            </AnimatedSection>
             <AnimatedSection>
                <FaqSection />
            </AnimatedSection>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
