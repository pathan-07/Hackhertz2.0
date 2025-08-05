'use client';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ThreeDBackground = dynamic(() => import('../3d-hero-background').then(mod => mod.ThreeDBackground), { ssr: false });


const text = "HackHertz";
const variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.5 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};


export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
       <ThreeDBackground />
       <div
        className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="relative z-10 container mx-auto flex flex-col items-center gap-6">
        <motion.h1 variants={variants} initial="hidden" animate="visible" className="text-6xl md:text-8xl lg:text-9xl font-headline tracking-widest text-foreground uppercase flex">
            {text.split("").map((char, index) => (
                <motion.span key={index} variants={child}>
                {char}
                </motion.span>
            ))}
        </motion.h1>
        <p className="text-xl md:text-2xl font-bold text-gradient max-w-3xl">
          Code the Future. Enter the Digital Realm.
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Join us for HackHertz - an innovative 2-day offline hackathon where creativity meets technology. Build groundbreaking solutions, learn from industry experts, and compete for amazing prizes!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild size="lg">
            <Link href="/register">INITIALIZE</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href="#about">EXPLORE</a>
          </Button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Badge variant="outline" className="text-lg py-2 px-4">48:00:00 RUNTIME</Badge>
          <Badge variant="outline" className="text-lg py-2 px-4">TEAM.SYNC()</Badge>
          <Badge variant="outline" className="text-lg py-2 px-4">REWARDS.EXE</Badge>
        </div>
      </div>
    </section>
  );
}
