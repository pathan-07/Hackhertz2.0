'use client';
import { useAnimatedCounter } from '@/hooks/use-animated-counter';
import { motion } from 'framer-motion';

const stats = [
  { value: 500, label: 'Participants', icon: '👨‍💻' },
  { value: 100, label: 'Projects', icon: '🚀' },
  { value: 48, label: 'Hours of Hacking', icon: '⏱️' },
  { value: 25, label: 'Mentors & Judges', icon: '🧠' },
];

const StatCounter = ({ value }: { value: number }) => {
  const { count, ref } = useAnimatedCounter(value, 2000);
  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export function StatsSection() {
  return (
    <section id="stats" className="container mx-auto py-24">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={stat.label} 
            className="tech-card p-8 rounded-xl bg-[#0c061f]/70"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="text-4xl mb-3">{stat.icon}</div>
            <p className="text-5xl lg:text-6xl font-headline bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              <StatCounter value={stat.value} />+
            </p>
            <p className="text-lg text-muted-foreground mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
