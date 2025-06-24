'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaUtensils, FaInfoCircle, FaImages, FaComments, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('#mobile-menu') && !target.closest('#menu-toggle')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigation links
  const navLinks = [
    { id: 'menu', label: 'תפריט', icon: <FaUtensils /> },
    { id: 'about', label: 'אודות', icon: <FaInfoCircle /> },
    { id: 'gallery', label: 'גלריה', icon: <FaImages /> },
    { id: 'testimonials', label: 'המלצות', icon: <FaComments /> },
    { id: 'contact', label: 'צור קשר', icon: <FaEnvelope /> },
    { id: 'booking', label: 'הזמנת מקום', icon: <FaCalendarAlt /> },
  ];

  return (
    <header 
      id="main-navbar"
      dir="rtl"
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-secondary text-primary shadow-lg py-2' 
          : 'bg-primary text-secondary py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 mr-3">
                <Image
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=96&q=80"
                  alt="שיפודי הכיכר"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="text-right">
                <h1 className="text-xl md:text-2xl font-bold">שיפודי הכיכר</h1>
                <p className="text-xs md:text-sm">מסעדת גריל ישראלית אותנטית</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 mx-1 rounded-md text-right flex items-center ${
                  scrolled ? 'hover:bg-primary hover:text-secondary' : 'hover:bg-secondary hover:text-primary'
                } transition-colors duration-300`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <span className="ml-1">{link.icon}</span>
                <span>{link.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            id="menu-toggle"
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-secondary"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-expanded={isOpen}
            aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`px-4 pt-2 pb-4 space-y-2 ${scrolled ? 'bg-secondary' : 'bg-primary'}`}>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full text-right px-3 py-3 flex items-center rounded-md ${
                      scrolled ? 'hover:bg-primary hover:text-secondary' : 'hover:bg-secondary hover:text-primary'
                    } transition-colors duration-300`}
                    aria-label={link.label}
                  >
                    <span className="ml-3">{link.icon}</span>
                    <span className="text-lg">{link.label}</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;