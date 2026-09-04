"use client";

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// --- TYPE DEFINITIONS ---
export interface Testimonial {
  imgSrc: string;
  alt: string;
}

export interface AnimatedTestimonialGridProps {
  testimonials: Testimonial[];
  className?: string;
  children?: React.ReactNode;
}

// --- STRICT OUTER MARGIN POSITIONS FOR FLOATING PHOTOS ---
// Strictly placed on outer left (2% - 8%) and outer right (2% - 8%) margins.
// ZERO images in the central content area (10% to 90%).
const imagePositions = [
  // Left side floating photos (Desktop / Tablet)
  { top: '4%', left: '3%', width: '115px', height: '170px', className: 'hidden md:block' },
  { top: '28%', left: '4%', width: '100px', height: '150px', className: 'hidden md:block' },
  { top: '52%', left: '3%', width: '115px', height: '170px', className: 'hidden md:block' },
  { top: '76%', left: '4%', width: '105px', height: '155px', className: 'hidden md:block' },

  // Right side floating photos (Desktop / Tablet)
  { top: '4%', right: '3%', width: '115px', height: '170px', className: 'hidden md:block' },
  { top: '28%', right: '4%', width: '105px', height: '155px', className: 'hidden md:block' },
  { top: '52%', right: '3%', width: '115px', height: '170px', className: 'hidden md:block' },
  { top: '76%', right: '4%', width: '100px', height: '150px', className: 'hidden md:block' },

  // Mobile side floating photos (Smaller, strictly pinned to screen edges)
  { top: '5%', left: '2%', width: '70px', height: '105px', className: 'block md:hidden opacity-90' },
  { top: '5%', right: '2%', width: '70px', height: '105px', className: 'block md:hidden opacity-90' },
  { top: '48%', left: '2%', width: '65px', height: '98px', className: 'block md:hidden opacity-90' },
  { top: '48%', right: '2%', width: '65px', height: '98px', className: 'block md:hidden opacity-90' },
  { bottom: '6%', left: '2%', width: '70px', height: '105px', className: 'block md:hidden opacity-90' },
  { bottom: '6%', right: '2%', width: '70px', height: '105px', className: 'block md:hidden opacity-90' },
];

// --- ANIMATION LOGIC ---
const imageVariants = {
  initial: { opacity: 0, scale: 0.6 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: 'spring' as const, 
      stiffness: 260, 
      damping: 20,
      delay: Math.random() * 0.3,
    } 
  },
};

const floatingAnimation = () => ({
  y: [0, Math.random() * -10 - 4, 0],
  rotate: [0, Math.random() * 4 - 2, 0],
  transition: {
    duration: Math.random() * 3 + 4,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut' as const,
  },
});

// --- COMPONENT ---
export const AnimatedTestimonialGrid = ({
  testimonials,
  className,
  children,
}: AnimatedTestimonialGridProps) => {

  return (
    <div
      className={cn(
        'relative w-full min-h-screen mx-auto overflow-hidden bg-real-red',
        className
      )}
    >
      {/* Floating Side Photos (Strictly in outer left/right margins) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {testimonials.slice(0, imagePositions.length).map((testimonial, index) => {
          const pos = imagePositions[index];
          return (
            <motion.div
              key={index}
              className={cn(
                'absolute rounded-2xl shadow-xl overflow-hidden pointer-events-auto transition-transform duration-300 hover:shadow-2xl',
                pos.className
              )}
              style={{ 
                top: pos.top, 
                left: pos.left,
                right: pos.right,
                bottom: pos.bottom,
                width: pos.width,
                height: pos.height,
              }}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.12, zIndex: 30, rotate: 0 }}
              custom={index}
            >
              <motion.img
                src={testimonial.imgSrc}
                alt={testimonial.alt}
                className="w-full h-full object-cover rounded-2xl pointer-events-none select-none aspect-[2/3]"
                animate={floatingAnimation()}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Main Page Layout (100% clean central red background) */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default AnimatedTestimonialGrid;
