'use client';
import Link from 'next/link';
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { ClientOnly } from '@/components/ui/client-only';

export function Footer() {
  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80, // Added offset for header
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white py-12 border-t border-border/20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
        {/* First Column - Hackathon Name and Description */}
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl mb-4">HackHertz 2025</h3>
          <p className="text-gray-400 mb-6">
            The ultimate hackathon experience for innovators and problem solvers.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/hackhertz_25" target='_blank' aria-label="Instagram" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
              <ClientOnly>
                <Instagram className="w-5 h-5" />
              </ClientOnly>
            </Link>
            <Link href="https://www.linkedin.com/in/hackhertz-ssit-81ba0b375" target='_blank' aria-label="LinkedIn" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
              <ClientOnly>
                <Linkedin className="w-5 h-5" />
              </ClientOnly>
            </Link>
          </div>
        </div>

        {/* Second Column - Quick Links */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link>
            </li>
            <li>
              <Link href="#about" onClick={(e) => scrollToSection(e, '#about')} className="text-gray-400 hover:text-primary transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="#domains" onClick={(e) => scrollToSection(e, '#domains')} className="text-gray-400 hover:text-primary transition-colors">Domains</Link>
            </li>
            <li>
              <Link href="#timeline" onClick={(e) => scrollToSection(e, '#timeline')} className="text-gray-400 hover:text-primary transition-colors">Timeline</Link>
            </li>
            <li>
              <Link href="#venue" onClick={(e) => scrollToSection(e, '#venue')} className="text-gray-400 hover:text-primary transition-colors">Venue</Link>
            </li>
            <li>
              <Link href="https://forms.gle/WN3px2vnANwpdcyAA" target='_blank' className="text-gray-400 hover:text-primary transition-colors">Register</Link>
            </li>
            <li>
              <Link href="https://ssit.co.in" target='_blank' className="text-gray-400 hover:text-primary transition-colors">SSIT Website</Link>
            </li>
          </ul>
        </div>

        {/* Third Column - Contact Info */}
        <div className="flex flex-col">
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <a href="mailto:hackhertzssit@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                  hackhertzssit@gmail.com
                </a>
                <p className="text-sm text-gray-500">Email us</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-gray-400">+91 9104649003</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9am to 6pm</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <p className="text-gray-400">+91 9726831875</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9am to 6pm</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-400">Shree Swaminarayan Institute Of Technology,</p>
                <p className="text-gray-400">Bhat-Gandhinagar, Gujarat</p>
                <p className="text-sm text-gray-500">Event Venue</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container mx-auto text-center mt-12 pt-8 border-t border-gray-800 relative px-4">
        <p className="text-gray-400">© 2025 HackHertz | SSIT. All rights reserved.</p>
        <p className="text-gray-400 mt-2">
          <span className="text-primary">Innovate.</span> <span className="text-blue-400">Create.</span> <span className="text-purple-400">Dominate.</span>
        </p>
        
        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop} 
          className="absolute right-8 -top-5 bg-gray-800 p-3 rounded-full hover:bg-primary transition-colors shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
}
