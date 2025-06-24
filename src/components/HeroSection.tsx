'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#f0ff4a",
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section 
      id="hero-section" 
      dir="rtl" 
      className="relative w-full h-screen overflow-hidden bg-[#30413b]"
      aria-label="מידע על מסעדת שיפודי הכיכר"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="שיפודים על גריל"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#30413b]/70 backdrop-blur-[2px]"></div>
        
        {/* Retro geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full border-4 border-[#eaf73b]"></div>
          <div className="absolute bottom-40 right-20 w-60 h-60 border-4 border-[#eaf73b] transform rotate-45"></div>
        </div>
      </div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 flex flex-col items-end justify-center h-full px-6 md:px-12 lg:px-24 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 text-right">
          {/* Logo/Title */}
          <motion.div 
            className="mb-4 inline-block bg-[#eaf73b] px-4 py-2 transform -skew-x-6"
            variants={itemVariants}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#30413b] tracking-tight">
              שיפודי הכיכר
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div 
            className="mb-8 bg-[#30413b]/80 p-6 backdrop-blur-sm border-r-4 border-[#eaf73b]"
            variants={itemVariants}
          >
            <p className="text-white text-lg md:text-xl leading-relaxed">
              מסעדת גריל ישראלית אותנטית המתמחה במגוון שיפודים עסיסיים וטריים, המוכנים על האש במקום – באווירה חמה, עממית ומשפחתית. המסעדה מציעה חוויית אירוח אותנטית עם בשרים איכותיים, סלטים טריים, לחמים חמים מהטאבון ושירות מכל הלב.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className="flex items-center justify-center gap-2 bg-[#eaf73b] text-[#30413b] px-8 py-4 text-xl font-bold rounded-md shadow-lg focus:outline-none focus:ring-4 focus:ring-[#eaf73b]/50 transform transition-all"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            aria-label="הזמן עכשיו"
          >
            <span>הזמן עכשיו</span>
            <FaUtensils className="ml-2" aria-hidden="true" />
            <FaArrowLeft className="mr-1" aria-hidden="true" />
          </motion.button>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-8 left-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="flex flex-col items-start gap-2">
          <div className="w-16 h-1 bg-[#eaf73b]"></div>
          <div className="w-8 h-1 bg-[#eaf73b]"></div>
          <div className="w-4 h-1 bg-[#eaf73b]"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;