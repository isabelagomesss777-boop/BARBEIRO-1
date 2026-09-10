import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2944&auto=format&fit=crop"
          alt="Barbeiro cortando cabelo"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-bg-dark/30"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-12 bg-gold"></span>
            <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold">
              Minas Novas - MG
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tight mb-8"
          >
            A Arte do <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">
              Corte Perfeito
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed"
          >
            Onde a tradição encontra a precisão moderna. Elevamos o padrão do homem contemporâneo com um atendimento exclusivo e impecável.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="https://wa.me/5533991317112"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-gold text-bg-dark px-8 py-4 font-display font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300"
            >
              Agendar Meu Horário
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}