'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button'; // Import the Button component
import Link from 'next/link'; // Import Link for better navigation

export function VenueSection() {
  return (
    <section id="venue" className="container mx-auto py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">Event <span className="text-gradient">Venue</span></h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Join us at our carefully selected venue for HackHertz</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card variant="tech" className="p-8"> {/* Use the tech variant for consistency */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Event Location</h3>
              <p className="text-muted-foreground font-semibold">
                Shree Swaminarayan Institute of Technology (SSIT)
              </p>
              <p className="text-muted-foreground">
                Near Agora Mall & Indira Bridge,
                Sardar Patel Ring Road, Bhat Circle,
                Ahmedabad-Gandhinagar Highway,
                Bhat, Gandhinagar - 382428
              </p>

              <div className="mt-6">
                <h4 className="text-xl font-medium mb-2">Getting Here</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>~20-minute drive from Sabarmati Jn. Railway Station</li>
                  <li>~15-minute drive from Ahmedabad Airport</li>
                  <li>Buses & Metro stop near campus</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <h3 className="text-2xl font-bold">Facilities Available</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>High-speed WiFi connectivity</li>
                <li>Dedicated workspace for each team</li>
                <li>24-hour access during the hackathon</li>
                <li>Charging stations</li>
                <li>Rest areas</li>
                <li>Food court nearby</li>
              </ul>

              <div className="mt-6">
                {/* FIX: Replaced the standard button with your project's Button component */}
                <Button asChild variant="glow">
                  <Link href="https://maps.google.com/?q=Shree+Swaminarayan+Institute+of+Technology,Bhat" target="_blank" rel="noopener noreferrer">
                    View on Google Maps
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}