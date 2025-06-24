'use client';
  
import React from 'react';

/**
 * BookingSection Component
 * (Fallback component due to generation failure)
 */
export default function BookingSection() {
  return (
    <div className="w-full py-12 px-4 bg-white" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{color: '#eaf73b'}}>
          שיפודי הכיכר
        </h2>
        <p className="text-lg mb-8 text-center">
          מסעדת גריל ישראלית המתמחה בשיפודים עסיסיים על האש, עם מבחר בשרים איכותיים, תוספות חמות וסלטים טריים שמוגשים בנדיבות. המקום מציע אווירה אותנטית וחמה, שירות מהיר ומחירים נוחים – מושלם לארוחה משפחתית, מפגש חברים או ארוחה עסקית משביעה.
        </p>
        <div className="text-center">
          <button 
            className="px-6 py-3 rounded-md text-white font-medium"
            style={{backgroundColor: '#30413b'}}
          >
            הזמן עכשיו
          </button>
        </div>
      </div>
    </div>
  );
}