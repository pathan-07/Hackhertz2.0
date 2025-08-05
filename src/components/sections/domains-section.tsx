'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const domains = [
  {
    icon: <BrainCircuit className="w-10 h-10 text-gradient" />,
    title: 'AI & Machine Learning',
    description: 'Build intelligent systems that can learn, adapt, and solve complex problems using artificial intelligence.',
  },
  {
    icon: <Bot className="w-10 h-10 text-gradient" />,
    title: 'Blockchain',
    description: 'Create decentralized applications and explore blockchain technology solutions for real-world problems.',
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

export function DomainsSection() {
  return (
    <section id="domains" className="container mx-auto">
      {/* ... Aapka section content yahaan ... */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">Problem <span className="text-gradient">Domains</span></h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Problem statements across these innovative domains.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {domains.map((domain, index) => (
          <motion.div
            key={domain.title}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, y: -8 }}
          >
            <Card className="bg-card border-border/20 h-full">
               <CardHeader className="flex flex-row items-center gap-4">
                  {domain.icon}
                  <CardTitle className="text-2xl">{domain.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{domain.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
