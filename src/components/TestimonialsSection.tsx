'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaChevronRight, FaChevronLeft, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "דניאל כהן",
    rating: 5,
    quote: "השיפודים הכי טעימים שאכלתי! האווירה חמה ומשפחתית והשירות מעולה. אני חוזר לכאן בכל הזדמנות.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "מיכל לוי",
    rating: 4.5,
    quote: "הסלטים הטריים והלחם מהטאבון פשוט מושלמים. מקום אותנטי עם אוכל ביתי ואווירה נעימה.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "יוסי אברהם",
    rating: 5,
    quote: "המנות נדיבות והטעם מדהים! השירות אדיב ומהיר. מומלץ בחום למי שמחפש חוויה ישראלית אמיתית.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "רונית שמעוני",
    rating: 5,
    quote: "הבשרים העסיסיים והטריים הם חגיגה אמיתית לחך. המקום נקי, השירות מצוין והאווירה משפחתית.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 5,
    name: "אבי מזרחי",
    rating: 4.5,
    quote: "מקום מצוין עם אוכל טעים ואותנטי. השיפודים מושלמים והסלטים טריים. ממליץ בחום!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 6,
    name: "שירה גולן",
    rating: 5,
    quote: "פשוט תענוג! האוכל טעים, השירות מסביר פנים והאווירה נעימה. מקום מושלם למשפחות וחברים.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    
    autoPlayRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-[#eaf73b]" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half-star" className="text-[#eaf73b]" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  return (
    <section 
      id="testimonials-section" 
      dir="rtl" 
      className="relative py-16 overflow-hidden bg-gradient-to-b from-[#30413b] to-[#253330]"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#eaf73b] rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 border-4 border-[#eaf73b] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-[#eaf73b] rounded-full"></div>
        <div className="grid grid-cols-10 gap-4 absolute inset-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-[#eaf73b] rounded-full opacity-20"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#eaf73b] mb-4 font-display">
            הלקוחות שלנו מספרים
          </h2>
          <div className="w-24 h-1 bg-[#eaf73b] mx-auto mb-6"></div>
          <p className="text-white text-lg max-w-2xl mx-auto">
            מה אומרים עלינו הלקוחות שכבר התארחו ב״שיפודי הכיכר״ ונהנו מחוויה קולינרית אותנטית
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial carousel */}
          <div className="relative h-[400px] md:h-[350px] overflow-hidden rounded-xl bg-[#30413b]/40 backdrop-blur-sm shadow-xl border border-[#eaf73b]/20">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="flex flex-col md:flex-row h-full p-6 md:p-8">
                  <div className="md:w-1/3 flex flex-col items-center justify-center mb-6 md:mb-0">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#eaf73b] shadow-lg">
                      <Image 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        fill
                        sizes="(max-width: 768px) 96px, 128px"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-[#eaf73b]">
                      {testimonials[currentIndex].name}
                    </h3>
                    <div className="flex mt-2">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 flex items-center justify-center text-right">
                    <div className="relative">
                      <FaQuoteRight className="absolute -top-6 right-0 text-4xl text-[#eaf73b]/30" />
                      <p className="text-white text-lg md:text-xl leading-relaxed pr-2">
                        {testimonials[currentIndex].quote}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button 
              onClick={handlePrev}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#eaf73b] text-[#30413b] flex items-center justify-center shadow-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#eaf73b] focus:ring-offset-2"
              aria-label="הקודם"
            >
              <FaChevronRight className="text-xl" />
            </button>
            
            <button 
              onClick={handleNext}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#eaf73b] text-[#30413b] flex items-center justify-center shadow-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#eaf73b] focus:ring-offset-2"
              aria-label="הבא"
            >
              <FaChevronLeft className="text-xl" />
            </button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-2 space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#eaf73b] focus:ring-offset-2 ${
                  currentIndex === index ? "bg-[#eaf73b]" : "bg-white/30"
                }`}
                aria-label={`עבור לביקורת ${index + 1}`}
                aria-current={currentIndex === index ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative grill pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDR2NGgtNHptOCAwaDR2NGgtNHptOCAwaDR2NGgtNHptOCAwaDR2NGgtNHoiIGZpbGw9IiNlYWY3M2IiIGZpbGwtb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] bg-repeat-x"></div>
    </section>
  );
};

export default TestimonialsSection;