
import React from 'react';
import { Button } from '@/components/ui/button';
import { Users, Eye } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-20 bg-charity-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=400&fit=crop"
                    alt="Enfant étudiant"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-32 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1594736797933-d0b22e4df12b?w=300&h=200&fit=crop"
                    alt="Groupe d'enfants"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-32 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=200&fit=crop"
                    alt="Enfants heureux"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=400&fit=crop"
                    alt="Aide humanitaire"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Welcome Badge */}
            <div className="absolute top-4 left-4 bg-white rounded-2xl p-4 shadow-xl">
              <p className="text-charity-orange font-medium text-sm">Bienvenue chez Charius</p>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charity-darkGray mb-6">
              Vous êtes l'Espoir des Autres.
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Vivamus vehicula egestas consequat suscipit enim bibendum tellus dolor at. Elit venenatis vulputate mauris risus sollicitudin rhoncus pellentesque varius. Pellentesque tristique ultricies feugiat gravida cursus. Lacutte amet egesit ante et consectetuer adipiscing.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charity-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-charity-darkGray mb-2">Notre Mission</h4>
                  <p className="text-gray-600 text-sm">
                    Nous croyons en la charité et en une défense transparente.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charity-green rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-charity-darkGray mb-2">Notre Vision</h4>
                  <p className="text-gray-600 text-sm">
                    Un monde où chaque enfant a accès à l'éducation et aux soins.
                  </p>
                </div>
              </div>
            </div>

            <Button className="bg-charity-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium text-lg">
              Découvrir Plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
