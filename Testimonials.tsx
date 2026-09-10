import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Eduardo",
    text: "Melhor degradê de Minas Novas, sem dúvidas. O Alex tem uma mão excelente e o ambiente é muito top. Recomendo de olhos fechados."
  },
  {
    name: "João Pedro Silva",
    text: "Atendimento de primeira. A gente percebe que ele usa produtos de qualidade e tem muito cuidado com os detalhes do corte."
  },
  {
    name: "Marcos Vinícius",
    text: "Lugar de respeito. Toda vez que vou saio satisfeito. É difícil achar um barbeiro que acerta de primeira, mas o Alex manda muito bem."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl font-bold uppercase"
          >
            A Palavra de Quem <span className="text-gold">Confia</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-surface-dark p-8 border border-white/5 hover:border-gold/20 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 italic">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-display font-bold text-gold">
                  {item.name.charAt(0)}
                </div>
                <span className="font-medium text-white">{item.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}