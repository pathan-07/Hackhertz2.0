
'use client';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto">
      {/* ... Aapka section content yahaan ... */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What is <span className="text-gradient">HackHertz?</span></h2>
            <p className="text-muted-foreground mb-4">
              HackHertz is a 2-day offline hackathon organized by Shree Swaminarayan Institute Of Technology, Bhat, where students work in teams to solve real-world open innovation problems using technology. The event fosters collaboration, creativity, critical thinking, and communication skills, giving students a platform to create impactful projects in an industry-like environment.
            </p>
          </div>
          <div className="bg-card border border-border p-8 rounded-lg space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Event Details</h3>
            <div className="space-y-2">
              <p><span className="font-bold text-primary">Team Size:</span> 4 members</p>
              <p><span className="font-bold text-primary">Participation Fee:</span> ₹50 per person</p>
              <p><span className="font-bold text-primary">Food:</span> A food stall will be available on campus for participants to purchase food.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
