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

// --- ORGANIC OUT-OF-ALIGNMENT POSITIONS FOR FLOATING PHOTOS ---
// Organic vertical & horizontal offsets + slight rotation tilt to feel natural & solar
const imagePositions = [
  // Left side organic floating photos (Desktop / Tablet)
  { top: '3%', left: '2%', width: '115px', height: '170px', initialRotate: -6, className: 'hidden md:block' },
  { top: '22%', left: '6.5%', width: '100px', height: '148px', initialRotate: 5, className: 'hidden md:block' },
  { top: '44%', left: '1.5%', width: '120px', height: '178px', initialRotate: -4, className: 'hidden md:block' },
  { top: '65%', left: '6%', width: '105px', height: '155px', initialRotate: 7, className: 'hidden md:block' },
  { top: '84%', left: '2.5%', width: '110px', height: '162px', initialRotate: -5, className: 'hidden lg:block' },

  // Right side organic floating photos (Desktop / Tablet)
  { top: '4%', right: '2.5%', width: '110px', height: '162px', initialRotate: 6, className: 'hidden md:block' },
  { top: '25%', right: '6%', width: '115px', height: '170px', initialRotate: -7, className: 'hidden md:block' },
  { top: '47%', right: '1.5%', width: '105px', height: '155px', initialRotate: 4, className: 'hidden md:block' },
  { top: '68%', right: '6.5%', width: '118px', height: '175px', initialRotate: -5, className: 'hidden md:block' },
  { top: '86%', right: '3%', width: '100px', height: '148px', initialRotate: 6, className: 'hidden lg:block' },

  // Mobile organic positions (outer edges with gentle tilt and organic spacing)
  { top: '4%', left: '1.5%', width: '70px', height: '104px', initialRotate: -5, className: 'block md:hidden opacity-90' },
  { top: '3%', right: '2%', width: '72px', height: '106px', initialRotate: 6, className: 'block md:hidden opacity-90' },
  { top: '46%', left: '2%', width: '68px', height: '100px', initialRotate: 4, className: 'block md:hidden opacity-90' },
  { top: '44%', right: '1.5%', width: '70px', height: '104px', initialRotate: -6, className: 'block md:hidden opacity-90' },
  { bottom: '5%', left: '2%', width: '72px', height: '106px', initialRotate: -3, className: 'block md:hidden opacity-90' },
  { bottom: '4%', right: '2%', width: '68px', height: '100px', initialRotate: 5, className: 'block md:hidden opacity-90' },
];

// --- ANIMATION LOGIC FOR WHOLE BLOCK FLOATING ---
const getFloatingKeyframes = (index: number) => {
  const yRange = -10 - (index % 4) * 3;
  const dur = 4 + (index % 3) * 1.2;
  const rotDelta = (index % 2 === 0 ? 1 : -1) * (2 + (index % 3));

  return {
    y: [0, yRange, 0],
    rotate: [imagePositions[index]?.initialRotate ?? 0, (imagePositions[index]?.initialRotate ?? 0) + rotDelta, imagePositions[index]?.initialRotate ?? 0],
    transition: {
      duration: dur,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut' as const,
    },
  };
};

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
      {/* Organic Floating Photo Cards (Whole card floats, NO internal mask clipping) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {testimonials.slice(0, imagePositions.length).map((testimonial, index) => {
          const pos = imagePositions[index];
          const floatAnim = getFloatingKeyframes(index);

          return (
            <motion.div
              key={index}
              className={cn(
                'absolute rounded-2xl shadow-xl overflow-hidden pointer-events-auto transition-shadow duration-300 hover:shadow-2xl',
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
              initial={{ opacity: 0, scale: 0.6, rotate: pos.initialRotate }}
              animate={{
                opacity: 1,
                scale: 1,
                ...floatAnim,
              }}
              whileHover={{ scale: 1.15, zIndex: 30, rotate: 0 }}
              custom={index}
            >
              <img
                src={testimonial.imgSrc}
                alt={testimonial.alt}
                className="w-full h-full object-cover rounded-2xl pointer-events-none select-none aspect-[2/3]"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content Layout (100% clean central red background) */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

export default AnimatedTestimonialGrid;
