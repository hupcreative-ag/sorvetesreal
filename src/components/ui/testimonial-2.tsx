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

// --- PRE-DEFINED POSITIONS FOR FLOATING PHOTOS AROUND SITE CONTENT ---
const imagePositions = [
  // Desktop and Tablet positions (floating at side margins around content)
  { top: '4%', left: '4%', className: 'hidden lg:block w-24 h-34 sm:w-28 sm:h-40' },
  { top: '16%', left: '16%', className: 'hidden xl:block w-20 h-28' },
  { top: '3%', right: '16%', className: 'hidden xl:block w-22 h-30' },
  { top: '5%', right: '4%', className: 'hidden lg:block w-26 h-38' },
  { top: '32%', right: '3%', className: 'hidden md:block w-22 h-32' },
  { top: '56%', right: '4%', className: 'hidden lg:block w-24 h-36' },
  { top: '42%', left: '3%', className: 'hidden md:block w-24 h-36' },
  { bottom: '16%', left: '5%', className: 'hidden lg:block w-24 h-34' },
  { bottom: '6%', left: '18%', className: 'hidden xl:block w-20 h-28' },
  { bottom: '10%', right: '18%', className: 'hidden xl:block w-22 h-32' },
  { bottom: '5%', right: '4%', className: 'hidden lg:block w-24 h-34' },

  // Mobile-specific floating positions (staying at outer edges to avoid content overlap)
  { top: '4%', left: '2%', className: 'block md:hidden w-14 h-20 opacity-90' },
  { top: '3%', right: '2%', className: 'block md:hidden w-16 h-22 opacity-90' },
  { top: '44%', left: '2%', className: 'block md:hidden w-16 h-22 opacity-90' },
  { top: '42%', right: '2%', className: 'block md:hidden w-14 h-20 opacity-90' },
  { bottom: '16%', left: '2%', className: 'block md:hidden w-16 h-22 opacity-90' },
  { bottom: '5%', right: '2%', className: 'block md:hidden w-14 h-20 opacity-90' },
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
      {/* Clean Floating Photos (NO container borders, NO background image) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {testimonials.slice(0, imagePositions.length).map((testimonial, index) => (
          <motion.div
            key={index}
            className={cn(
              'absolute rounded-2xl shadow-xl overflow-hidden pointer-events-auto transition-transform duration-300 hover:shadow-2xl',
              imagePositions[index].className
            )}
            style={{ 
              top: imagePositions[index].top, 
              left: imagePositions[index].left,
              right: imagePositions[index].right,
              bottom: imagePositions[index].bottom,
            }}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.1, zIndex: 30, rotate: 0 }}
            custom={index}
          >
            <motion.img
              src={testimonial.imgSrc}
              alt={testimonial.alt}
              className="w-full h-full object-cover rounded-2xl pointer-events-none select-none aspect-[2/3]"
              animate={floatingAnimation()}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content Layout on Clean Red Background */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default AnimatedTestimonialGrid;
