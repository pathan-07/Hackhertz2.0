// This file is no longer used and can be deleted.
'use client';
import { useAnimatedCounter } from '@/hooks/use-animated-counter';

const stats = [
  { value: 500, label: 'Participants' },
  { value: 100, label: 'Projects' },
  { value: 48, label: 'Hours of Hacking' },
  { value: 25, label: 'Mentors & Judges' },
];

const StatCounter = ({ value }: { value: number }) => {
  const { count, ref } = useAnimatedCounter(value, 2000);
  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export function StatsSection() {
  return (
    <section id="stats" className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map(stat => (
          <div key={stat.label} className="bg-card p-8 rounded-xl border border-border/10">
            <p className="text-5xl lg:text-6xl font-headline text-accent">
              <StatCounter value={stat.value} />+
            </p>
            <p className="text-lg text-muted-foreground mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
