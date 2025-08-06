// This file has been renamed to domains-section.tsx
import { InteractiveTechCard } from '@/components/ui/interactive-tech-card';
import { BrainCircuit, Bot, ShieldCheck, HeartPulse } from 'lucide-react';

const themes = [
  {
    icon: <BrainCircuit className="w-12 h-12 text-gradient" />,
    title: 'AI & Machine Learning',
    description: 'Innovate with intelligent systems, neural networks, and data-driven solutions.',
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-gradient" />,
    title: 'Cybersecurity & Privacy',
    description: 'Develop novel solutions to protect digital assets and ensure user privacy in a connected world.',
  },
  {
    icon: <Bot className="w-12 h-12 text-gradient" />,
    title: 'Web3 & Decentralization',
    description: 'Explore the future of the internet with blockchain, dApps, and decentralized finance.',
  },
  {
    icon: <HeartPulse className="w-12 h-12 text-gradient" />,
    title: 'Future of HealthTech',
    description: 'Create technologies that improve healthcare, from diagnostics to patient care.',
  },
];

export function ThemesSection() {
  return (
    <section id="themes" className="container mx-auto py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">Hackathon <span className="text-gradient">Themes</span></h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Choose your domain. Bend the reality.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {themes.map((theme) => (
          <InteractiveTechCard key={theme.title}>
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-background/30 rounded-full mb-4 backdrop-blur-sm">
                {theme.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{theme.title}</h3>
              <p className="text-muted-foreground">{theme.description}</p>
            </div>
          </InteractiveTechCard>
        ))}
      </div>
    </section>
  );
}
