import React from 'react';
import Navbar from './Navbar';
import Hero from './Herói';
import About from './Sobre';
import Services from './Serviços';
import Testimonials from './Testemunhos';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark text-white font-body selection:bg-gold selection:text-bg-dark overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
