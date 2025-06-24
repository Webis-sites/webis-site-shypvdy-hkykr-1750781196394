'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUtensils, FaLeaf, FaWineGlassAlt, FaCarrot, FaArrowLeft } from 'react-icons/fa';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

type MenuCategory = {
  id: string;
  name: string;
  icon: React.ReactNode;
  items: MenuItem[];
};

const MenuHighlights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('skewers');

  const menuCategories: MenuCategory[] = [
    {
      id: 'skewers',
      name: 'שיפודים',
      icon: <FaUtensils />,
      items: [
        {
          id: 1,
          name: 'שיפוד פרגית',
          description: 'נתחי פרגית עסיסיים בתיבול ביתי על האש',
          price: 58,
          image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 2,
          name: 'שיפוד אנטריקוט',
          description: 'קוביות אנטריקוט משובח בתיבול מיוחד של השף',
          price: 68,
          image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 3,
          name: 'שיפוד כבש',
          description: 'נתחי כבש טריים עם תבלינים ארומטיים',
          price: 64,
          image: 'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 4,
          name: 'שיפוד קבב ביתי',
          description: 'קבב בשר בקר טחון עם בצל ופטרוזיליה',
          price: 52,
          image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
      ]
    },
    {
      id: 'sides',
      name: 'תוספות',
      icon: <FaCarrot />,
      items: [
        {
          id: 1,
          name: 'צ׳יפס ביתי',
          description: 'תפוחי אדמה פריכים מטוגנים בשמן זית',
          price: 25,
          image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 2,
          name: 'אורז עם שקדים',
          description: 'אורז בסמטי עם שקדים קלויים ותבלינים',
          price: 22,
          image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 3,
          name: 'תפוחי אדמה בתנור',
          description: 'תפוחי אדמה אפויים בתנור עם רוזמרין ושום',
          price: 24,
          image: 'https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
      ]
    },
    {
      id: 'salads',
      name: 'סלטים',
      icon: <FaLeaf />,
      items: [
        {
          id: 1,
          name: 'סלט ישראלי',
          description: 'עגבניות, מלפפונים, בצל סגול וגמבה בשמן זית ולימון',
          price: 28,
          image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 2,
          name: 'טחינה ביתית',
          description: 'טחינה גולמית עם לימון, שום ופטרוזיליה',
          price: 22,
          image: 'https://images.unsplash.com/photo-1590739225287-bd31519780c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 3,
          name: 'חציל בטחינה',
          description: 'חציל קלוי על האש עם טחינה ושמן זית',
          price: 26,
          image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
      ]
    },
    {
      id: 'beverages',
      name: 'משקאות',
      icon: <FaWineGlassAlt />,
      items: [
        {
          id: 1,
          name: 'לימונדה ביתית',
          description: 'לימונדה טרייה עם נענע ולימונים סחוטים',
          price: 15,
          image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 2,
          name: 'בירה מהחבית',
          description: 'בירה ישראלית מקומית מהחבית',
          price: 24,
          image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          id: 3,
          name: 'קולה / ספרייט',
          description: 'שתייה קלה מוגשת עם קרח ולימון',
          price: 12,
          image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
      ]
    }
  ];

  const activeItems = menuCategories.find(category => category.id === activeCategory)?.items || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100 
      } 
    }
  };

  const tabVariants = {
    inactive: { 
      backgroundColor: "#30413b", 
      color: "#ffffff",
      scale: 1
    },
    active: { 
      backgroundColor: "#eaf73b", 
      color: "#30413b",
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <section id="menu-highlights" dir="rtl" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-right text-[#30413b] mb-4">המנות המובילות שלנו</h2>
          <p className="text-lg text-gray-600 text-right max-w-2xl mx-auto">
            טעמו ממבחר המנות האהובות במסעדת שיפודי הכיכר - שיפודים עסיסיים, תוספות מפנקות, סלטים טריים ומשקאות מרעננים
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-10 gap-2 md:gap-4">
          {menuCategories.map((category) => (
            <motion.button
              key={category.id}
              variants={tabVariants}
              initial="inactive"
              animate={activeCategory === category.id ? "active" : "inactive"}
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center px-6 py-3 rounded-full text-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#eaf73b] focus:ring-opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-selected={activeCategory === category.id}
              role="tab"
            >
              <span className="ml-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {activeItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5 bg-white">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-[#30413b]">{item.name}</h3>
                    <span className="text-lg font-bold text-[#30413b] bg-[#eaf73b] px-2 py-1 rounded">₪{item.price}</span>
                  </div>
                  <p className="text-gray-600 text-right mb-4">{item.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 bg-[#30413b] text-white rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    הוסף להזמנה
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <motion.a
            href="/menu"
            className="inline-flex items-center bg-[#eaf73b] text-[#30413b] px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaArrowLeft className="ml-2" />
            לתפריט המלא
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;