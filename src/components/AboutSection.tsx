'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaFire, FaLeaf, FaUsers, FaHeart } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

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

  const featureItems = [
    {
      icon: <FaFire className="text-2xl" />,
      title: "בישול מסורתי",
      description: "שיטות בישול מסורתיות על האש הפתוחה לטעם אותנטי"
    },
    {
      icon: <FaLeaf className="text-2xl" />,
      title: "מרכיבים טריים",
      description: "רק חומרי גלם איכותיים וטריים נבחרים בקפידה מדי יום"
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "אווירה משפחתית",
      description: "מקום מושלם למשפחות, חברים וכל מי שאוהב אוכל טוב"
    },
    {
      icon: <FaHeart className="text-2xl" />,
      title: "מסורת וניסיון",
      description: "מעל 25 שנות ניסיון בהכנת השיפודים הטעימים ביותר"
    }
  ];

  return (
    <section 
      id="about-section" 
      dir="rtl" 
      className="py-16 md:py-24 bg-white overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Image Column */}
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1"
            variants={itemVariants}
          >
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                alt="האווירה החמה והמשפחתית בשיפודי הכיכר" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#30413b]/60 to-transparent"></div>
              <div 
                className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#eaf73b] rounded-tl-[3rem]"
                style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}
              ></div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            className="w-full md:w-1/2 text-right order-1 md:order-2"
            variants={itemVariants}
          >
            <motion.div 
              className="inline-block mb-3 px-4 py-1 bg-[#eaf73b] rounded-full"
              variants={itemVariants}
            >
              <span className="text-[#30413b] font-bold">הסיפור שלנו</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-[#30413b]"
              variants={itemVariants}
            >
              שיפודי הכיכר - טעם של מסורת
            </motion.h2>
            
            <motion.p 
              className="text-lg mb-6 text-[#30413b]/90 leading-relaxed"
              variants={itemVariants}
            >
              מסעדת "שיפודי הכיכר" נוסדה בשנת 1995 מתוך אהבה עמוקה למטבח הישראלי האותנטי ולמסורת הבישול על האש. המייסדים, משפחת לוי, הביאו איתם מתכונים עתיקים שעברו במשפחה מדור לדור, והחליטו לחלוק את הטעמים המיוחדים האלה עם הקהל הרחב.
            </motion.p>
            
            <motion.p 
              className="text-lg mb-8 text-[#30413b]/90 leading-relaxed"
              variants={itemVariants}
            >
              כבר למעלה מ-25 שנה אנחנו מקפידים על איכות בלתי מתפשרת - מבחירת חומרי הגלם הטריים ביותר ועד להכנה המסורתית על האש הפתוחה. האווירה החמה והמשפחתית, יחד עם השירות האדיב והאוכל המשובח, הפכו את המסעדה למוסד קולינרי אהוב בקרב תושבי האזור ומבקרים מרחבי הארץ.
            </motion.p>

            {/* Feature Grid */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8"
              variants={containerVariants}
            >
              {featureItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 p-3 bg-[#eaf73b] rounded-full text-[#30413b]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#30413b] mb-1">{item.title}</h3>
                    <p className="text-[#30413b]/80">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;