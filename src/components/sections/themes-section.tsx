// This file has been renamed to domains-section.tsx
import { InteractiveCard } from '@/components/ui/interactive-card';
import { BrainCircuit, Bot, ShieldCheck, HeartPulse } from 'lucide-react';

const themes = [
  {
    icon: <BrainCircuit className="w-12 h-12 text-primary" />,
    title: 'AI & Machine Learning',
    description: 'Innovate with intelligent systems, neural networks, and data-driven solutions.',
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    title: 'Cybersecurity & Privacy',
    description: 'Develop novel solutions to protect digital assets and ensure user privacy in a connected world.',
  },
  {
    icon: <Bot className="w-12 h-12 text-primary" />,
    title: 'Web3 & Decentralization',
    description: 'Explore the future of the internet with blockchain, dApps, and decentralized finance.',
  },
  {
    icon: <HeartPulse className="w-12 h-12 text-primary" />,
    title: 'Future of HealthTech',
    description: 'Create technologies that improve healthcare, from diagnostics to patient care.',
  },
];

export function ThemesSection() {
  return (
    <section id="themes" className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">Hackathon Themes</h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Choose your domain. Bend the reality.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {themes.map((theme) => (
          <InteractiveCard key={theme.title}>
            <div className="flex flex-col items-center text-center">
              <div className="p-4 bg-secondary rounded-full mb-4">
                {theme.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{theme.title}</h3>
              <p className="text-muted-foreground">{theme.description}</p>
            </div>
          </InteractiveCard>
        ))}
      </div>
    </section>
  );
}
