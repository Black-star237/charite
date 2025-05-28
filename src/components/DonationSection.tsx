
import React from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Droplets, Heart, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonationSection = () => {
  const causes = [
    {
      icon: GraduationCap,
      iconBg: 'bg-blue-100',
      iconColor: 'text-charity-blue',
      title: 'Éducation des Enfants',
      description: 'Permettre une éducation de qualité aux enfants défavorisés partout dans le monde.'
    },
    {
      icon: Droplets,
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
      title: 'Eau Pure',
      description: 'Fournir un accès à l\'eau potable et aux installations sanitaires dans les communautés.'
    },
    {
      icon: Heart,
      iconBg: 'bg-green-100',
      iconColor: 'text-charity-green',
      title: 'Nourriture Saine',
      description: 'Assurer une nutrition adéquate et des repas réguliers aux familles dans le besoin.'
    },
    {
      icon: Stethoscope,
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      title: 'Soins Médicaux',
      description: 'Offrir des soins de santé essentiels et des traitements aux populations vulnérables.'
    }
  ];

  return (
    <section className="py-20 bg-charity-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charity-darkGray mb-6">
            Votre Don Signifie un Autre Sourire.
          </h2>
        </div>

        {/* Causes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {causes.map((cause, index) => {
            const IconComponent = cause.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 ${cause.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-10 h-10 ${cause.iconColor}`} />
                </div>
                
                <h3 className="font-semibold text-charity-darkGray mb-3 text-lg">
                  {cause.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cause.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-charity-blue to-charity-green rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Aidez-nous à Grandir.
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Votre don signifie beaucoup pour eux. Faites un don selon vos moyens.
            </p>
            <Link to="/donate">
              <Button className="bg-white text-charity-blue hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg">
                Commencer à Donner Maintenant
              </Button>
            </Link>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
