import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Téléphone',
    content: '+33 1 23 45 67 89',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@ctfc.fr',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    content: '123 Rue de l'Industrie, 75001 Paris',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Contact</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <item.icon size={32} className="text-zinc-800 mb-4" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}