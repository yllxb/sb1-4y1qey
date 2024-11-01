import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    description: '',
    delai: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    alert('Votre demande de devis a été envoyée avec succès!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="devis" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-16">Demande de Devis</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
              <input
                type="text"
                name="nom"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                value={formData.nom}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
              <input
                type="tel"
                name="telephone"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                value={formData.telephone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
              <input
                type="text"
                name="entreprise"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                value={formData.entreprise}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description du projet</label>
            <textarea
              name="description"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Délai souhaité</label>
            <select
              name="delai"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
              value={formData.delai}
              onChange={handleChange}
            >
              <option value="">Sélectionnez un délai</option>
              <option value="urgent">Urgent (< 1 semaine)</option>
              <option value="normal">Normal (2-3 semaines)</option>
              <option value="flexible">Flexible (> 1 mois)</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Send size={20} />
            <span>Envoyer la demande</span>
          </button>
        </form>
      </div>
    </section>
  );
}