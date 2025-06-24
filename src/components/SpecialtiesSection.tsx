'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaFire } from 'react-icons/fa';

interface SpecialtyItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

const SpecialtiesSection: React.FC = () => {
  const specialties: SpecialtyItem[] = [
    {
      id: 'beef-skewers',
      name: 'שיפודי בקר',
      description: 'נתחי בקר עסיסיים על האש, מתובלים בתערובת תבלינים סודית של השף',
      imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'chicken-skewers',
      name: 'שיפודי עוף',
      description: 'פרגיות טריות בתיבול ביתי, צלויות לשלמות על הגריל',
      imageUrl: 'https://images.unsplash.com/photo-1527324688151-0e627063f2b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'lamb-kebabs',
      name: 'קבב טלה',
      description: 'קבב טלה משובח עם בצל ופטרוזיליה, מוגש עם טחינה ביתית',
      imageUrl: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'vegetable-skewers',
      name: 'שיפודי ירקות',
      description: 'מבחר ירקות טריים צלויים על האש עם שמן זית ומלח ים',
      imageUrl: 'https://images.unsplash.com/photo-1592394533824-9440e5d68530?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'entrecote-steak',
      name: 'אנטריקוט על האש',
      description: 'סטייק אנטריקוט מיושן צלוי לבחירתך, מוגש עם רוטב שום ביתי',
      imageUrl: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'fish-skewers',
      name: 'שיפודי דג',
      description: 'פילה דניס טרי בתיבול לימוני, צלוי בעדינות על הגריל',
      imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="specialties" dir="rtl" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#30413b] mb-4 relative inline-block">
            <span className="relative z-10">המומחיות שלנו</span>
            <motion.span 
              className="absolute bottom-1 right-0 h-3 bg-[#eaf73b] w-full -z-10"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-lg text-[#30413b] max-w-2xl mx-auto">
            השיפודים המיוחדים שלנו מוכנים טריים מדי יום, עם חומרי גלם איכותיים ותבלינים משובחים
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {specialties.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img 
                  src={item.imageUrl} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#30413b]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 text-right">
                <div className="flex items-center justify-between mb-3">
                  <motion.div 
                    className="h-8 w-8 rounded-full bg-[#eaf73b] flex items-center justify-center"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaFire className="text-[#30413b]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[#30413b]">{item.name}</h3>
                </div>
                <p className="text-[#30413b]/80">{item.description}</p>
                
                <motion.div 
                  className="mt-4 h-1 bg-[#eaf73b] w-0 group-hover:w-full"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <motion.button 
            className="bg-[#eaf73b] text-[#30413b] font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            הזמינו שולחן עכשיו
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;