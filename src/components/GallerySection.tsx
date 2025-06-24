'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoArrowBack, IoArrowForward } from 'react-icons/io5';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: 'food' | 'interior' | 'atmosphere';
};

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'שיפודי בשר עסיסיים על הגריל',
      category: 'food',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'סלט ירקות טרי עם טחינה',
      category: 'food',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'אווירה חמימה במסעדה',
      category: 'atmosphere',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'שף מכין שיפודים על האש',
      category: 'atmosphere',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'מנת שיפודים מוגשת עם תוספות',
      category: 'food',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'עיצוב פנים של המסעדה',
      category: 'interior',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'אווירה משפחתית במסעדה',
      category: 'atmosphere',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1534650075489-3baad0076690?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      alt: 'לקוחות מאושרים נהנים מארוחה',
      category: 'atmosphere',
    },
  ];

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage) {
      if (e.key === 'ArrowLeft') {
        goToNext(); // In RTL, left arrow goes to next
      } else if (e.key === 'ArrowRight') {
        goToPrevious(); // In RTL, right arrow goes to previous
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    }
  };

  return (
    <section 
      id="gallery-section" 
      dir="rtl" 
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-gray-100"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#30413b]">
            הגלריה שלנו
          </h2>
          <p className="text-lg md:text-xl text-[#30413b]/80 max-w-3xl mx-auto">
            צפו בתמונות המציגות את המנות העסיסיות, האווירה החמימה והחוויה המיוחדת שמחכה לכם ב״שיפודי הכיכר״
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer h-64 bg-[#30413b]/5"
              onClick={() => openLightbox(image, index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#30413b]/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <div 
              className="relative max-w-6xl w-full h-[80vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full h-full"
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </motion.div>
              
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-white text-lg bg-[#30413b]/80 inline-block px-4 py-2 rounded-lg">
                  {selectedImage.alt}
                </p>
              </div>

              <button
                onClick={closeLightbox}
                className="absolute top-4 left-4 p-2 rounded-full bg-[#eaf73b] text-[#30413b] hover:bg-[#eaf73b]/80 transition-colors"
                aria-label="סגור"
              >
                <IoClose size={24} />
              </button>

              <button
                onClick={goToPrevious}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[#eaf73b] text-[#30413b] hover:bg-[#eaf73b]/80 transition-colors"
                aria-label="תמונה קודמת"
              >
                <IoArrowForward size={24} />
              </button>

              <button
                onClick={goToNext}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-[#eaf73b] text-[#30413b] hover:bg-[#eaf73b]/80 transition-colors"
                aria-label="תמונה הבאה"
              >
                <IoArrowBack size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;