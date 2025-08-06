'use client';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
// Import the logo image directly
import logoImage from '@/assets/hackhertz.png';

// Import the CSS-based animated background
const AnimatedCssBackground = dynamic(
  () => import('../animated-css-background'),
  { 
    ssr: false,
    loading: () => <div className="absolute inset-0 z-0 bg-background"></div>
  }
);

// Animation for the logo image
const logoVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
       {/* Use the CSS-based animated background */}
       <AnimatedCssBackground />
       <div
        className="absolute inset-0 -z-10 h-full w-full bg-[#09050f] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Reduced the gap from gap-6 to gap-4 for tighter spacing */}
      <div className="relative z-10 container mx-auto flex flex-col items-center gap-4">
        
        <motion.div 
          variants={logoVariants} 
          initial="hidden" 
          animate="visible" 
          className="w-full max-w-2xl mx-auto" // Increased max-width slightly for better presence
        >
          <Image 
            src={logoImage} 
            alt="HackHertz Logo" 
            width={600}
            height={200}
            className="w-full h-auto object-contain"
            style={{
              // This CSS trick makes the black background of the PNG transparent
              mixBlendMode: 'screen', 
              filter: "drop-shadow(0 0 12px rgba(112, 0, 255, 0.6))", // Enhanced glow
            }}
            priority
          />
        </motion.div>

        <p className="text-xl md:text-2xl font-bold text-gradient max-w-3xl">
          Code the Future. Enter the Digital Realm.
        </p>

        <p className="text-lg text-muted-foreground max-w-3xl">
          Join us for HackHertz - an innovative 2-day offline hackathon where creativity meets technology. Build groundbreaking solutions, learn from industry experts, and compete for amazing prizes!
        </p>

        {/* Reduced margin-top from mt-8 to mt-6 */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button asChild size="lg" variant="glow" pulse>
            <Link href="/register">INITIALIZE</Link>
          </Button>
          <Button asChild size="lg" variant="techOutline">
            <a href="#about">EXPLORE</a>
          </Button>
        </div>

        {/* Reduced margin-top from mt-8 to mt-6 */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Badge variant="outline" className="text-lg py-2 px-4 border-orange-500/50 bg-[#0c061f]/60 backdrop-blur-sm hover:border-orange-500/80 transition-all duration-300">48:00:00 RUNTIME</Badge>
          <Badge variant="outline" className="text-lg py-2 px-4 border-purple-500/50 bg-[#0c061f]/60 backdrop-blur-sm hover:border-purple-500/80 transition-all duration-300">TEAM.SYNC()</Badge>
          <Badge variant="outline" className="text-lg py-2 px-4 border-blue-500/50 bg-[#0c061f]/60 backdrop-blur-sm hover:border-blue-500/80 transition-all duration-300">REWARDS.EXE</Badge>
        </div>
      </div>
    </section>
  );
}
