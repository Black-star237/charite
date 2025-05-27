
import React from 'react';
import { Heart, Gift, HandHeart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      iconBg: 'bg-charity-blue',
      title: 'Devenir bénévole',
      description: 'Rejoignez notre équipe de bénévoles et aidez directement sur le terrain. Votre temps peut tout changer.',
      buttonText: 'Je veux aider',
      buttonColor: 'bg-charity-blue hover:bg-blue-600'
    },
    {
      icon: Gift,
      iconBg: 'bg-charity-orange',
      title: 'Collecte de fonds rapide',
      description: 'Organisez votre propre collecte de fonds en ligne. Ensemble, nous pouvons accomplir davantage.',
      buttonText: 'Organiser une collecte',
      buttonColor: 'bg-charity-orange hover:bg-orange-600'
    },
    {
      icon: HandHeart,
      iconBg: 'bg-charity-green',
      title: 'Commencer à donner',
      description: 'Faites un don aujourd\'hui et voyez immédiatement l\'impact de votre générosité sur nos bénéficiaires.',
      buttonText: 'Faire un don',
      buttonColor: 'bg-charity-green hover:bg-green-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group hover:shadow-xl transition-all duration-300 p-8 rounded-2xl border border-gray-100 hover:border-gray-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-charity-darkGray mb-4 font-playfair">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <Button className={`${service.buttonColor} text-white px-6 py-3 rounded-full font-medium w-full group-hover:shadow-lg transition-all duration-300`}>
                  {service.buttonText}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
