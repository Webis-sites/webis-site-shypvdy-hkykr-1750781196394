'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoAdd, IoRemove } from 'react-icons/io5';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  // FAQ data in Hebrew
  const faqItems: FAQItem[] = [
    {
      id: 'business-hours',
      question: 'מה שעות הפעילות של המסעדה?',
      answer: 'אנו פתוחים 7 ימים בשבוע. ראשון עד חמישי: 12:00-23:00, שישי: 12:00-16:00, שבת: מוצ"ש עד 23:00. בחגים ייתכנו שינויים בשעות הפעילות, מומלץ לבדוק בדף הפייסבוק שלנו או להתקשר למסעדה.'
    },
    {
      id: 'reservations',
      question: 'האם צריך להזמין מקום מראש?',
      answer: 'מומלץ להזמין מקום מראש, במיוחד בסופי שבוע ובשעות העומס. ניתן להזמין מקום דרך הטלפון: 03-1234567 או דרך האתר שלנו. אנו מקבלים הזמנות עד שעתיים לפני ההגעה, בכפוף לזמינות.'
    },
    {
      id: 'large-groups',
      question: 'האם ניתן לערוך אירועים למספר גדול של אנשים?',
      answer: 'בהחלט! אנו מציעים אפשרות לאירועים פרטיים עד 50 איש. יש לנו תפריטים מיוחדים לאירועים וניתן להתאים את החלל לפי דרישותיכם. לפרטים והזמנות אירועים, אנא צרו קשר לפחות שבועיים מראש.'
    },
    {
      id: 'takeout',
      question: 'האם יש אפשרות למשלוחים או איסוף עצמי?',
      answer: 'כן, אנו מציעים שירות משלוחים לאזורים הסמוכים ואפשרות לאיסוף עצמי. ניתן להזמין דרך האתר שלנו או בטלפון. זמן ההכנה הממוצע הוא כ-30 דקות, ובשעות העומס עד 45 דקות. הזמנות מעל 200 ש"ח מקבלות משלוח חינם.'
    },
    {
      id: 'parking',
      question: 'האם יש חניה בקרבת המסעדה?',
      answer: 'ישנה חניה ציבורית במרחק של כ-100 מטר מהמסעדה. בנוסף, בערבים ובסופי שבוע ניתן לחנות בחניון הבניין הסמוך ללא תשלום (החל מהשעה 19:00 בימי חול). לקוחות המסעדה זכאים להנחה של 50% בחניון הקרוב בהצגת חשבונית.'
    },
    {
      id: 'dietary',
      question: 'האם יש אפשרויות לתזונה מיוחדת (צמחוני, טבעוני, ללא גלוטן)?',
      answer: 'בהחלט! התפריט שלנו כולל מגוון אפשרויות צמחוניות וטבעוניות, כולל שיפודי ירקות, סלטים טריים ותוספות. רוב המנות שלנו ניתנות להתאמה לדיאטה ללא גלוטן, אך המטבח שלנו אינו מוגדר כמטבח נטול גלוטן לחלוטין. אנא יידעו את המלצר על כל רגישות או העדפה תזונתית.'
    },
    {
      id: 'kids',
      question: 'האם יש תפריט ילדים ואפשרויות לילדים?',
      answer: 'יש לנו תפריט ילדים מיוחד הכולל שיפודים קטנים, המבורגר, שניצל ותוספות לבחירה. כל מנת ילדים מגיעה עם שתייה ומתנה קטנה. בנוסף, יש לנו פינת משחקים קטנה לילדים וכיסאות תינוק זמינים לפי בקשה.'
    },
    {
      id: 'special-events',
      question: 'האם יש אירועים או מבצעים מיוחדים במסעדה?',
      answer: 'אנו מקיימים ערבי מוזיקה חיה בימי חמישי, ובכל יום שני יש לנו "שני משפחתי" עם הנחה של 15% על כל התפריט למשפחות. בנוסף, אנו מציעים ארוחות עסקיות בצהריים (12:00-16:00) בימים א׳-ה׳. עקבו אחרינו בפייסבוק ובאינסטגרם לעדכונים על אירועים ומבצעים מיוחדים.'
    }
  ];

  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const isItemOpen = (id: string): boolean => {
    return openItems.includes(id);
  };

  return (
    <section 
      id="faq-section" 
      dir="rtl" 
      className="w-full max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-right mb-4 text-[#30413b]">
          שאלות נפוצות
        </h2>
        <p className="text-lg text-right text-[#30413b]/80 max-w-2xl mx-auto">
          כל מה שרציתם לדעת על שיפודי הכיכר - המסעדה האותנטית עם הטעם הכי טוב בעיר
        </p>
      </div>

      <div className="space-y-4">
        {faqItems.map((item) => (
          <div 
            key={item.id}
            className="border border-[#30413b]/10 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="flex justify-between items-center w-full p-5 text-right focus:outline-none focus:ring-2 focus:ring-[#eaf73b] focus:ring-opacity-50"
              aria-expanded={isItemOpen(item.id)}
              aria-controls={`content-${item.id}`}
            >
              <motion.div
                animate={{ rotate: isItemOpen(item.id) ? 0 : 0 }}
                className="flex-shrink-0 ml-4"
              >
                {isItemOpen(item.id) ? (
                  <IoRemove className="text-[#eaf73b] text-xl bg-[#30413b] rounded-full p-1 w-6 h-6" />
                ) : (
                  <IoAdd className="text-[#eaf73b] text-xl bg-[#30413b] rounded-full p-1 w-6 h-6" />
                )}
              </motion.div>
              <span className="text-lg font-medium text-[#30413b]">{item.question}</span>
            </button>
            
            <AnimatePresence>
              {isItemOpen(item.id) && (
                <motion.div
                  id={`content-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-5 pt-0 border-t border-[#30413b]/10">
                    <p className="text-[#30413b]/80 text-right">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-block bg-[#eaf73b]/20 p-6 rounded-lg">
          <p className="text-[#30413b] font-medium text-right mb-2">
            יש לכם שאלה שלא מופיעה כאן?
          </p>
          <p className="text-[#30413b]/80 text-right">
            צרו איתנו קשר בטלפון <span dir="ltr">03-1234567</span> או שלחו לנו הודעה 
            <a href="#contact" className="text-[#30413b] font-medium mr-1 underline hover:text-[#eaf73b] transition-colors">
              בעמוד צור קשר
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;