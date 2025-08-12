'use client';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
// Import the logo image directly
import logoImage from '@/assets/hackhertz.png';

// Import the digital wireframe head (client-only version)
const DigitalWireframeHead = dynamic(
  () => import('../digital-wireframe-head-client'),
  {
    ssr: false,
    loading: () => null
  }
);

// Import the digital pathway (client-only version)
const DigitalPathway = dynamic(
  () => import('../digital-pathway-client'),
  {
    ssr: false,
    loading: () => null
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
       {/* ADD THESE TWO COMPONENTS to recreate the newtheme.png effect */}
       <DigitalWireframeHead />
       <DigitalPathway />
       
       <div
        className="absolute inset-0 -z-10 h-full w-full bg-[#050215] bg-[linear-gradient(to_right,rgba(255,0,90,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,0,255,0.03)_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      {/* Reduced the gap from gap-6 to gap-4 for tighter spacing */}
      <div className="relative z-10 container mx-auto flex flex-col items-center gap-2 md:gap-4 px-4">
        
        <motion.div 
          variants={logoVariants} 
          initial="hidden" 
          animate="visible" 
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto"
        >
          <div className="text-center font-bold mb-4 text-white">Presented by Shree Swaminarayan Institute Of Technology</div>
          <Image 
            src={logoImage} 
            alt="HackHertz Logo" 
            width={600}
            height={200}
            className="w-full h-auto object-contain"
            // MODIFY these styles to make the logo glow and blend like the head
            style={{
              mixBlendMode: "screen", 
              filter: "drop-shadow(0 0 15px rgba(255, 0, 90, 0.7)) drop-shadow(0 0 30px rgba(120, 0, 255, 0.5))"
            }}
            priority
          />
        </motion.div>

        <p className="text-sm md:text-lg text-muted-foreground max-w-3xl text-center">
          Join us on 14th & 15th September for HackHertz - an innovative 30 Hours offline hackathon where creativity meets technology. Build groundbreaking solutions, learn from industry experts, and compete for amazing prizes!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 md:mt-6">
          <Button asChild size="lg" variant="glow" pulse>
            <Link href="https://forms.gle/WN3px2vnANwpdcyAA">Register</Link>
          </Button>
          <Button asChild size="lg" variant="techOutline">
            <a href="#about">EXPLORE</a>
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-4 md:mt-6">
          <Badge variant="outline" className="text-sm md:text-lg py-1 px-2 md:py-2 md:px-4 border-[#ff005a]/60 bg-[#0c061f]/60 backdrop-blur-sm hover:border-[#ff005a]/90 transition-all duration-300 shadow-[0_0_10px_rgba(255,0,90,0.3)]">30:00:00 RUNTIME</Badge>
          <Badge variant="outline" className="text-sm md:text-lg py-1 px-2 md:py-2 md:px-4 border-[#7800ff]/60 bg-[#0c061f]/60 backdrop-blur-sm hover:border-[#7800ff]/90 transition-all duration-300 shadow-[0_0_10px_rgba(120,0,255,0.3)]">TEAM.SYNC()</Badge>
          <Badge variant="outline" className="text-sm md:text-lg py-1 px-2 md:py-2 md:px-4 border-[#00c8ff]/60 bg-[#0c061f]/60 backdrop-blur-sm hover:border-[#00c8ff]/90 transition-all duration-300 shadow-[0_0_10px_rgba(0,200,255,0.3)]">REWARDS.EXE</Badge>
        </div>
      </div>
    </section>
  );
}
