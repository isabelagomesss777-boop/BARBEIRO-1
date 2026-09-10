import React from 'react';
import { Scissors, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Scissors className="text-gold" size={24} />
            <span className="font-display font-bold text-xl tracking-wide uppercase">
              Alex<span className="text-gold">.</span>
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">Minas Novas - MG</p>
            <p className="text-gray-500 text-sm">Atendimento com hora marcada.</p>
          </div>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-surface-dark border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/50 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Alex Barbearia. Todos os direitos reservados.</p>
          <p>Design Premium</p>
        </div>
      </div>
    </footer>
  );
}