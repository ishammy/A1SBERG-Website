'use client';

import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function HomePage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 50, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 15 });
  const rotateX = useTransform(smoothY, [-100, 100], [10, -10]);
  const rotateY = useTransform(smoothX, [-100, 100], [-10, 10]);
  const bgOffsetX = useTransform(smoothX, [-100, 100], [-20, 20]);
  const bgOffsetY = useTransform(smoothY, [-100, 100], [-20, 20]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      x.set((e.clientX - innerWidth / 2) / 10);
      y.set((e.clientY - innerHeight / 2) / 10);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [x, y]);

  return (
    <section className="relative flex flex-col h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover scale-110"
        style={{
          backgroundImage: "url('/assets/home-background.png')",
          x: bgOffsetX,
          y: bgOffsetY,
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 text-center">
        <motion.div
          style={{ rotateX, rotateY, x: smoothX, y: smoothY }}
          initial={{ opacity: 0, scale: 0.5, y: -100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 15,
          }}
          className="will-change-transform"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity }}
          >
            <Image
              src="/assets/Title.png"
              alt="Title"
              width={800}
              height={900}
              priority
              className="drop-shadow-2xl"
              draggable={false}
            />
          </motion.div>
        </motion.div>

   
     
      </div>
    </section>
  );
}
