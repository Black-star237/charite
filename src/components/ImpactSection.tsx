
import React from 'react';
import { Button } from '@/components/ui/button';

const ImpactSection = () => {
  const campaigns = [
    {
      title: "Les Assoiffés Attendent Votre Aide",
      image: "https://images.unsplash.com/photo-1594736797933-d0b22e4df12b?w=400&h=300&fit=crop",
      description: "Lorem ipsum dolor sit amet consectetur. Mauris nulla tellus facilisi neque quis egestas commodo erat lorem sit.",
      progress: 60,
      raised: "$24,839.00",
      goal: "$50,000.00",
      color: "bg-charity-orange"
    },
    {
      title: "Changer une Vie un Repas à la Fois",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop",
      description: "Lorem ipsum dolor sit amet consectetur. Mauris nulla tellus facilisi neque quis egestas commodo erat lorem sit.",
      progress: 75,
      raised: "$18,590.00",
      goal: "$25,000.00",
      color: "bg-charity-green"
    },
    {
      title: "Soyons une Communauté dans cette Cause",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      description: "Lorem ipsum dolor sit amet consectetur. Mauris nulla tellus facilisi neque quis egestas commodo erat lorem sit.",
      progress: 45,
      raised: "$12,450.00",
      goal: "$30,000.00",
      color: "bg-charity-blue"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-charity-orange font-medium mb-4 tracking-wide uppercase text-sm">
            Promouvoir la Sécurité et les Droits des Enfants
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charity-darkGray mb-6">
            Votre Don Signifie Beaucoup pour Eux.
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Nous avons aidé plus de 150,000 familles vulnérables depuis notre lancement. Ensemble nous pouvons aider encore plus de familles. Nous avons aidé dans plus de 12 pays. Leur donner de la nourriture, de l'éducation, des médicaments et bien plus encore.
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-charity-darkGray mb-3 text-lg leading-tight">
                  {campaign.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {campaign.description}
                </p>
                
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-charity-darkGray font-medium">{campaign.raised}</span>
                    <span className="text-gray-500">Objectif: {campaign.goal}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${campaign.color} h-2 rounded-full transition-all duration-1000`}
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {campaign.progress}%
                  </div>
                </div>
                
                <Button className={`${campaign.color} hover:opacity-90 text-white w-full py-3 rounded-full font-medium`}>
                  Faire un Don
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button className="bg-charity-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium text-lg">
            Voir Toutes les Campagnes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
