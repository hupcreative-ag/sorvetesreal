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

// --- PRE-DEFINED POSITIONS FOR THE FLOATING PHOTOS ---
// Carefully distributed across desktop, tablet, and mobile views to surround site content
const imagePositions = [
  // Desktop and Tablet positions (around hero, links section, and footer)
  { top: '3%', left: '6%', className: 'hidden lg:block w-24 h-32 md:w-28 md:h-38' },
  { top: '10%', left: '25%', className: 'hidden md:block w-20 h-28' },
  { top: '2%', right: '24%', className: 'hidden md:block w-22 h-30' },
  { top: '6%', right: '6%', className: 'hidden lg:block w-28 h-38' },
  { top: '30%', right: '4%', className: 'hidden md:block w-24 h-34' },
  { top: '52%', right: '6%', className: 'hidden lg:block w-26 h-36' },
  { top: '48%', left: '4%', className: 'hidden md:block w-28 h-38' },
  { bottom: '18%', left: '8%', className: 'hidden lg:block w-24 h-34' },
  { bottom: '8%', left: '28%', className: 'hidden md:block w-20 h-28' },
  { bottom: '12%', right: '28%', className: 'hidden md:block w-24 h-34' },
  { bottom: '4%', right: '6%', className: 'hidden lg:block w-24 h-32' },

  // Mobile-specific positions (positioned gracefully at corners/margins)
  { top: '5%', left: '3%', className: 'block md:hidden w-16 h-22 opacity-85' },
  { top: '3%', right: '4%', className: 'block md:hidden w-18 h-24 opacity-85' },
  { bottom: '20%', left: '3%', className: 'block md:hidden w-18 h-24 opacity-85' },
  { bottom: '6%', right: '3%', className: 'block md:hidden w-16 h-22 opacity-85' },
];

// --- ANIMATION LOGIC ---
const imageVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: 'spring' as const, 
      stiffness: 260, 
      damping: 20,
      delay: Math.random() * 0.4,
    } 
  },
};

const floatingAnimation = () => ({
  y: [0, Math.random() * -12 - 4, 0],
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
        'relative w-full min-h-screen mx-auto overflow-hidden',
        className
      )}
    >
      {/* Floating Photo Containers Across Site */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {testimonials.slice(0, imagePositions.length).map((testimonial, index) => (
          <motion.div
            key={index}
            className={cn(
              'absolute rounded-2xl shadow-2xl overflow-hidden border-2 border-white/30 bg-[#541517]/30 backdrop-blur-[2px] pointer-events-auto transition-shadow duration-300',
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
            whileHover={{ scale: 1.12, zIndex: 30, rotate: 0 }}
            custom={index}
          >
            <motion.img
              src={testimonial.imgSrc}
              alt={testimonial.alt}
              className="w-full h-full object-cover rounded-xl pointer-events-none select-none aspect-[2/3]"
              animate={floatingAnimation()}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Page Layout Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default AnimatedTestimonialGrid;
