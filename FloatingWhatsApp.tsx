import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5533991317112"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] animate-pulse hover:scale-110 transition-transform duration-300 flex items-center justify-center"
      aria-label="Agendar via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}