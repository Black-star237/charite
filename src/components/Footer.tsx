
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    "À propos d'Nous": [
      'Notre Histoire',
      'Équipe',
      'Mission & Vision',
      'Carrières'
    ],
    "Nos Programmes": [
      'Éducation',
      'Santé',
      'Eau & Assainissement',
      'Aide d\'Urgence'
    ],
    "Participer": [
      'Faire un Don',
      'Devenir Bénévole',
      'Organiser une Collecte',
      'Partenariats'
    ],
    "Support": [
      'Centre d\'Aide',
      'FAQ',
      'Contact',
      'Politique de Confidentialité'
    ]
  };

  return (
    <footer className="bg-charity-darkGray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-charity-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-playfair text-2xl font-semibold">Charius</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Nous nous engageons à créer un monde meilleur pour tous les enfants. 
              Rejoignez-nous dans notre mission pour apporter de l'espoir et des opportunités 
              aux communautés dans le besoin.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-charity-orange" />
                <span className="text-gray-300">contact@charius.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-charity-orange" />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-charity-orange" />
                <span className="text-gray-300">123 Rue de la Charité, Paris, France</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-charity-orange transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-semibold text-white mb-2">Restez Informé</h4>
              <p className="text-gray-300 text-sm">
                Recevez nos dernières nouvelles et mises à jour sur nos programmes.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-charity-orange"
              />
              <button className="bg-charity-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 Charius. Tous droits réservés.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-charity-orange transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
