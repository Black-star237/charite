
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Gala de Charité 2024',
      description: 'Une soirée exceptionnelle pour soutenir nos projets éducatifs en Afrique.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=300&fit=crop',
      date: '15 Décembre 2024',
      time: '19h00 - 23h00',
      location: 'Palais des Congrès, Paris',
      attendees: '500 personnes',
      price: '150€',
      type: 'Gala'
    },
    {
      id: 2,
      title: 'Course Solidaire',
      description: 'Participez à notre course de 10km pour collecter des fonds pour l\'accès à l\'eau potable.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
      date: '22 Décembre 2024',
      time: '09h00 - 12h00',
      location: 'Parc de Vincennes, Paris',
      attendees: '1000 participants',
      price: '25€',
      type: 'Sport'
    },
    {
      id: 3,
      title: 'Conférence sur l\'Éducation',
      description: 'Débat sur l\'importance de l\'éducation dans le développement durable.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=300&fit=crop',
      date: '10 Janvier 2025',
      time: '14h00 - 17h00',
      location: 'Université Sorbonne, Paris',
      attendees: '200 personnes',
      price: 'Gratuit',
      type: 'Conférence'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Marché de Noël Solidaire',
      description: 'Un marché de Noël où tous les bénéfices sont reversés à nos projets.',
      image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=500&h=300&fit=crop',
      date: '15-17 Décembre 2023',
      location: 'Place de la République, Paris',
      raised: '45,000€',
      type: 'Marché'
    },
    {
      id: 5,
      title: 'Soirée Jazz Caritative',
      description: 'Concert de jazz avec des artistes renommés pour soutenir nos actions.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
      date: '8 Octobre 2023',
      location: 'Olympia, Paris',
      raised: '75,000€',
      type: 'Concert'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Gala': return 'bg-charity-blue';
      case 'Sport': return 'bg-charity-green';
      case 'Conférence': return 'bg-charity-orange';
      case 'Concert': return 'bg-purple-500';
      case 'Marché': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-charity-blue to-charity-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Nos Événements
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Rejoignez-nous lors de nos événements et aidez-nous à faire la différence
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charity-darkGray mb-12 text-center">
            Événements à Venir
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-medium ${getTypeColor(event.type)}`}>
                    {event.type}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-charity-darkGray text-xl mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {event.attendees}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-charity-orange">
                      {event.price}
                    </span>
                    <Button className="bg-charity-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium">
                      S'inscrire
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-charity-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charity-darkGray mb-12 text-center">
            Événements Passés
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-medium mb-4 ${getTypeColor(event.type)}`}>
                      {event.type}
                    </div>
                    <h3 className="font-semibold text-charity-darkGray text-xl mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {event.description}
                    </p>
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-charity-green">
                      {event.raised} collectés
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
