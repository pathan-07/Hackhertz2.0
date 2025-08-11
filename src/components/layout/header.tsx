'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ClientOnly } from '@/components/ui/client-only';
// Import the logo image directly
import logoImage from '@/assets/hackhertz.png';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#domains', label: 'Domains' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#prizes', label: 'Prizes' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-gradient-to-r from-purple-900/70 via-blue-900/70 to-purple-900/70 backdrop-blur-md py-2 border-b border-purple-500/20' : 'py-4'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* START: Modified Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          {/* This div crops the image. The width is adjusted to show "HackHertz". */}
          <div className="w-[100px] overflow-hidden">
            <Image
              src={logoImage}
              alt="HackHertz"
              width={120}
              height={32}
              className="h-8 w-auto max-w-none"
              priority
            />
          </div>
        </Link>
        {/* END: Modified Logo Section */}
        
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg text-muted-foreground hover:text-foreground transition-colors relative group py-1 px-2"
              onClick={() => {
                const target = document.querySelector(link.href);
                if (target) {
                  const el = document.getElementById('nav-animation-' + link.label.toLowerCase());
                  if (el) el.classList.add('animate-nav-pulse');
                  setTimeout(() => {
                    if (el) el.classList.remove('animate-nav-pulse');
                  }, 500);
                }
              }}
            >
              <span className="relative z-10">{link.label}</span>
              
              {/* Animated underline effect */}
              <span 
                id={`nav-animation-${link.label.toLowerCase()}`}
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 group-hover:w-full transition-all duration-300"
              ></span>
              
              {/* Hover glow effect */}
              <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-20 bg-gradient-to-r from-orange-400 via-pink-500 to-blue-500 blur-sm transition-opacity duration-300"></span>
              
              {/* Particle effect on hover */}
              <span className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full bg-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500" 
                style={{animation: 'float 3s ease-in-out infinite'}}></span>
              <span className="absolute -bottom-1 left-1/4 w-1 h-1 rounded-full bg-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100" 
                style={{animation: 'float 3s ease-in-out 0.5s infinite'}}></span>
              <span className="absolute -bottom-1 right-1/4 w-1 h-1 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200" 
                style={{animation: 'float 3s ease-in-out 1s infinite'}}></span>
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <ClientOnly>
                  <Menu className="h-6 w-6 text-primary" />
                </ClientOnly>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/90 backdrop-blur-sm p-0">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation menu
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="text-2xl text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild size="lg" className="text-xl py-6 px-8 mt-8" onClick={closeMobileMenu}>
                  <Link href="/register">Register</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
