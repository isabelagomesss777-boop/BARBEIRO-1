import React, { useState, useEffect } from 'react';
import { Scissors } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-bg-dark/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scissors className="text-gold" size={28} />
          <span className="font-display font-bold text-2xl tracking-wide uppercase">
            Alex<span className="text-gold">.</span>
          </span>
        </div>
        <a
          href="https://wa.me/5533991317112"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-gold text-gold font-display font-semibold uppercase tracking-wider text-sm hover:bg-gold hover:text-bg-dark transition-colors duration-300"
        >
          Agendar Agora
        </a>
      </div>
    </motion.header>
  );
}