import React from 'react';
import { Factory } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Factory size={24} />
            <span className="font-semibold">CTFC</span>
          </div>
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} CTFC. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}