import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { name: "Degradê", price: "35" },
  { name: "Corte Social", price: "30" },
  { name: "Corte na Máquina", price: "25" },
  { name: "Pintura", price: "35" },
  { name: "Sobrancelha", price: "10" },
  { name: "Pezinho", price: "10" }
];

export default function Services() {
  return (
    <section className="py-24 md:py-32 relative bg-[#0f0f0f]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.2em] text-xs font-bold block mb-4"
          >
            Menu de Serviços
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold uppercase"
          >
            Nossa Especialidade
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface-dark border border-white/5 p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/30"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/30"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/30"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/30"></div>

          <div className="flex flex-col gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="flex items-end w-full group"
              >
                <span className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-white transition-colors">
                  {service.name}
                </span>
                <div className="flex-grow border-b border-dashed border-white/10 mx-4 mb-2 group-hover:border-gold/30 transition-colors"></div>
                <div className="flex items-start gap-1">
                  <span className="text-sm text-gold/70 mt-1">R$</span>
                  <span className="text-2xl md:text-3xl font-display font-bold text-gold">
                    {service.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-gray-400 text-sm mb-6">
              Valores sujeitos a alteração. Consulte-nos para pacotes e combos especiais.
            </p>
            <a
              href="https://wa.me/5533991317112"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gold text-gold px-8 py-3 font-display font-semibold uppercase tracking-wider hover:bg-gold hover:text-bg-dark transition-all duration-300"
            >
              Agendar Serviço
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}