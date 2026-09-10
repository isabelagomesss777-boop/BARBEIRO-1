import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Check } from 'lucide-react';

export default function About() {
  const features = [
    "Atendimento 100% Personalizado",
    "Técnicas Modernas e Clássicas",
    "Ambiente Climatizado e Premium",
    "Produtos de Alta Qualidade"
  ];

  return (
    <section className="py-24 md:py-32 relative bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden bg-surface-dark">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2940&auto=format&fit=crop"
                alt="Detalhe de ferramentas de barbearia"
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-white/10 m-4"></div>
            </div>
            {/* Badge */}
            <div className="absolute -bottom-8 -right-8 bg-surface-dark p-6 border border-white/5 shadow-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center rounded-full">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Localização</p>
                  <p className="font-display font-semibold text-white">Minas Novas, MG</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight mb-6">
              Muito mais que <br />
              <span className="text-gold">um simples corte.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Na Alex Barbearia, entendemos que sua imagem é seu cartão de visitas. Trazemos para Minas Novas um conceito de barbearia premium, onde cada detalhe é pensado para oferecer uma experiência de relaxamento e renovação.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Do alinhamento perfeito da barba ao degradê impecável, nosso compromisso é com a sua melhor versão.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Check className="text-gold" size={14} />
                  </div>
                  <span className="text-gray-200 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}