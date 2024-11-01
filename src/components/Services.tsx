import React from 'react';
import { Wrench, Pipeline, Flame } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Chaudronnerie',
    description: 'Fabrication sur mesure de pièces et structures métalliques selon vos spécifications.',
  },
  {
    icon: Pipeline,
    title: 'Tuyauterie',
    description: 'Installation et maintenance de systèmes de tuyauterie industrielle complexes.',
  },
  {
    icon: Flame,
    title: 'Soudure',
    description: 'Soudure de précision sur tous types de métaux avec les plus hauts standards de qualité.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Nos Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <service.icon size={40} className="text-zinc-800 mb-6" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}