import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Expertise en Chaudronnerie Industrielle
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-8">
            Solutions sur mesure et fabrication de précision pour vos projets industriels
          </p>
          <a
            href="#devis"
            className="inline-flex items-center gap-2 bg-white text-zinc-900 px-8 py-3 rounded-full hover:bg-zinc-100 transition-colors"
          >
            Demander un devis gratuit
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}