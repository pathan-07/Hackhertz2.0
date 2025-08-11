'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Trophy, Star, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const prizes = [
  {
    icon: <Trophy className="w-12 h-12 text-yellow-400" />,
    title: '1st winner',
    description: 'The winning team will receive amazing rewards and recognition! Includes a prize, winner certificates and exclusive swag.',
  },
  {
    icon: <Award className="w-12 h-12 text-slate-300" />,
    title: '2nd winner',
    description: 'Runner-up teams will be rewarded for their outstanding efforts! Includes a prize , runner-up certificates and exclusive swag.',
  },
  {
    icon: <Star className="w-12 h-12 text-orange-400" />,
    title: '3rd winner',
    description: '2nd Runner-up teams will be rewarded for their outstanding efforts! Includes a prize , 2nd runner-up certificates and exclusive swag.',
  },
  {
    icon: <Gift className="w-12 h-12 text-purple-400" />,
    title: 'Swags for every participants',
    description: 'All participants will receive exclusive hackathon swag as a token of appreciation for their participation and effort.',
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

export function PrizesSection() {
  return (
    <section id="prizes" className="container mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">Prizes & <span className="text-gradient">Perks</span></h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Amazing rewards await the most innovative teams.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {prizes.map((prize, index) => (
          <motion.div
            key={prize.title}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, y: -8 }}
          >
            <Card className="bg-card border-border/20 h-full">
              <CardHeader className="flex flex-row items-center gap-4">
                {prize.icon}
                <CardTitle className="text-2xl">{prize.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{prize.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
