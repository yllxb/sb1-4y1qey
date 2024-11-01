import React from 'react';
import { Factory } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Factory size={28} className="text-zinc-800" />
            <span className="text-xl font-semibold text-zinc-800">CTFC</span>
          </div>
          <nav className="hidden md:flex gap-8">
            {['Accueil', 'Services', 'Devis', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-zinc-600 hover:text-zinc-900 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}