import { motion } from 'framer-motion';
import { useMemo } from 'react';
import type { ElementType, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as: Tag = 'div',
  className,
}: FadeInProps) {
  const MotionTag = useMemo(() => motion.create(Tag as ElementType), [Tag]);

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: 'easeInOut',
      }}
    >
      {children}
    </MotionTag>
  );
}
