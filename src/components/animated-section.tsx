
'use client';

import { motion } from 'framer-motion';
import type { HTMLMotionProps, Variants } from 'framer-motion';

interface AnimatedSectionProps extends HTMLMotionProps<'section'> {
  children: React.ReactNode;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function AnimatedSection({ children, ...props }: AnimatedSectionProps) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
