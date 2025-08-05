'use client';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

const judges = [
  {
    name: 'Dr. XYZ',
    title: 'Professor, Comp. Dept. SSIT',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'man portrait',
  },
  {
    name: 'Prof. ABC',
    title: 'Head of Department, SSIT',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'woman portrait',
  },
  {
    name: 'Mr. DEF',
    title: 'Industry Expert',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'person portrait',
  },
  {
    name: 'Ms. GHI',
    title: 'Tech Lead, Fortune 500',
    image: 'https://placehold.co/400x400.png',
    dataAiHint: 'lady portrait',
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

export function JudgesSection() {
  return (
    <section id="judges" className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">Meet the <span className="text-gradient">Jury</span></h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Learn from industry experts and academic leaders.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {judges.map((judge, index) => (
          <motion.div
            key={judge.name}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -8 }}
          >
            <Card className="text-center bg-card border-border/20 h-full">
              <CardContent className="p-6">
                <Image
                  src={judge.image}
                  data-ai-hint={judge.dataAiHint}
                  alt={judge.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 border-4 border-border"
                />
                <h3 className="text-xl font-bold">{judge.name}</h3>
                <p className="text-muted-foreground">{judge.title}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
