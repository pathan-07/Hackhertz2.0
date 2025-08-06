'use client';
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';
import { ClientOnly } from '@/components/ui/client-only';

export function Footer() {

  return (
    <footer className="border-t border-border/20 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <a href="mailto:skilldevelopmentclub.ssit@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            skilldevelopmentclub.ssit@gmail.com
          </a>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">SSIT Website</Link>
            </li>
            <li>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About HackHertz</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-6">
            <Link href="#" aria-label="Instagram">
              <ClientOnly>
                <Instagram className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </ClientOnly>
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <ClientOnly>
                <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
              </ClientOnly>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8 pt-8 border-t border-border/10">
        <p className="text-muted-foreground">&copy; HackHertz - Made with ❤️ by Skill Development Club, SSIT</p>
      </div>
    </footer>
  );
}
