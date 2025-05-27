
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Heart, Globe } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-charity-lightGray to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <p className="text-charity-orange font-medium mb-4 tracking-wide uppercase text-sm">
              Donnez-leur une chance
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charity-darkGray leading-tight mb-6">
              Croire en un Avenir 
              <span className="text-charity-orange"> Meilleur</span> pour les Autres.
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Donec cursus vestibulum tortor mauris id porta dictum. Enim at et tempus orci et.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-charity-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium text-lg group">
                Rejoindre Notre Campagne
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-charity-orange text-charity-orange hover:bg-charity-orange hover:text-white px-8 py-4 rounded-full font-medium text-lg">
                En Savoir Plus
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-charity-darkGray">120+</div>
                <div className="text-gray-600 text-sm">Vies Changées</div>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-slide-in">
            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=500&fit=crop"
                  alt="Enfants souriants"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-charity-blue rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-charity-darkGray">1,501</div>
                    <div className="text-gray-600 text-sm">Donateurs</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-charity-green rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-charity-darkGray">12</div>
                    <div className="text-gray-600 text-sm">Pays</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
