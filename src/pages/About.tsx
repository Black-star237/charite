
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Heart, Globe, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Nous croyons en la force de la compassion pour transformer les vies et créer un monde meilleur.'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Ensemble, nous sommes plus forts. Nous travaillons main dans la main avec les communautés locales.'
    },
    {
      icon: Globe,
      title: 'Impact Global',
      description: 'Notre mission s\'étend au-delà des frontières pour toucher des vies partout dans le monde.'
    },
    {
      icon: Award,
      title: 'Transparence',
      description: 'Nous nous engageons à une transparence totale dans l\'utilisation de vos dons.'
    }
  ];

  const team = [
    {
      name: 'Marie Dubois',
      role: 'Directrice Générale',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b002?w=300&h=300&fit=crop&crop=face',
      description: '15 ans d\'expérience dans le secteur humanitaire'
    },
    {
      name: 'Pierre Martin',
      role: 'Responsable des Programmes',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      description: 'Expert en développement international'
    },
    {
      name: 'Sophie Leroy',
      role: 'Coordinatrice Terrain',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      description: 'Spécialisée dans l\'aide d\'urgence'
    }
  ];

  return (
    <div className="min-h-screen font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-charity-blue to-charity-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Qui Sommes-Nous ?
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Depuis 2010, nous œuvrons pour un monde plus juste et solidaire
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-4xl font-bold text-charity-darkGray mb-6">
                Notre Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Charius s'engage à améliorer les conditions de vie des populations les plus vulnérables, 
                en particulier les enfants, à travers des programmes d'éducation, de santé, d'accès à l'eau 
                potable et de sécurité alimentaire.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nous croyons fermement qu'ensemble, nous pouvons construire un avenir meilleur pour tous, 
                où chaque enfant a la chance de grandir dans la dignité et de réaliser son potentiel.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
                alt="Notre mission"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-charity-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-charity-darkGray mb-6">
              Nos Valeurs
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Ces valeurs guident chacune de nos actions et nous permettent de rester fidèles à notre mission
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-charity-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-semibold text-charity-darkGray mb-3 text-xl">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-charity-darkGray mb-6">
              Notre Équipe
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Des professionnels passionnés et dévoués à notre cause
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="font-semibold text-charity-darkGray text-xl mb-2">
                  {member.name}
                </h3>
                <p className="text-charity-orange font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
