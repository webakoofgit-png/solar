import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../data/solarData';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const defaultWhatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hello Sanmitra Solar! I would like to inquire about solar installation for my property.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* WhatsApp Action */}
      <motion.a
        href={defaultWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sanmitra Solar on WhatsApp"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="relative group p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl shadow-emerald-900/30 flex items-center justify-center transition-all duration-200"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full" />
        <MessageCircle className="w-6 h-6 fill-current" />

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md border border-slate-700">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-3 bg-[#071B2E] border border-amber-400/40 hover:border-amber-400 text-amber-400 hover:text-white hover:bg-slate-800 rounded-full shadow-lg transition-colors cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
