
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, Target } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'École pour Tous - Mali',
      description: 'Construction et équipement d\'une école primaire pour 300 enfants dans la région de Kayes.',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&h=300&fit=crop',
      location: 'Mali, Afrique de l\'Ouest',
      duration: 'Janvier 2024 - Décembre 2024',
      beneficiaries: '300 enfants',
      goal: '150,000€',
      raised: '120,000€',
      progress: 80,
      status: 'En cours'
    },
    {
      id: 2,
      title: 'Eau Pure - Bangladesh',
      description: 'Installation de puits et systèmes de purification d\'eau dans 5 villages ruraux.',
      image: 'https://images.unsplash.com/photo-1594736797933-d0b22e4df12b?w=500&h=300&fit=crop',
      location: 'Bangladesh, Asie du Sud',
      duration: 'Mars 2024 - Juin 2024',
      beneficiaries: '1,200 personnes',
      goal: '75,000€',
      raised: '75,000€',
      progress: 100,
      status: 'Terminé'
    },
    {
      id: 3,
      title: 'Nutrition Enfantine - Haïti',
      description: 'Programme de nutrition pour lutter contre la malnutrition infantile.',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=300&fit=crop',
      location: 'Haïti, Caraïbes',
      duration: 'Février 2024 - Février 2025',
      beneficiaries: '500 enfants',
      goal: '200,000€',
      raised: '140,000€',
      progress: 70,
      status: 'En cours'
    },
    {
      id: 4,
      title: 'Clinique Mobile - Kenya',
      description: 'Services de santé mobile pour les communautés isolées du nord du Kenya.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop',
      location: 'Kenya, Afrique de l\'Est',
      duration: 'Juin 2024 - Mai 2025',
      beneficiaries: '2,000 personnes',
      goal: '300,000€',
      raised: '180,000€',
      progress: 60,
      status: 'En cours'
    },
    {
      id: 5,
      title: 'Formation Professionnelle - Guatemala',
      description: 'Programme de formation professionnelle pour les jeunes défavorisés.',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop',
      location: 'Guatemala, Amérique Centrale',
      duration: 'Septembre 2024 - Août 2025',
      beneficiaries: '150 jeunes',
      goal: '100,000€',
      raised: '45,000€',
      progress: 45,
      status: 'En cours'
    },
    {
      id: 6,
      title: 'Urgence Cyclone - Philippines',
      description: 'Aide d\'urgence suite au passage du cyclone dans la région de Mindanao.',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=500&h=300&fit=crop',
      location: 'Philippines, Asie du Sud-Est',
      duration: 'Octobre 2024 - Décembre 2024',
      beneficiaries: '800 familles',
      goal: '250,000€',
      raised: '210,000€',
      progress: 84,
      status: 'Urgent'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Terminé': return 'bg-charity-green';
      case 'En cours': return 'bg-charity-blue';
      case 'Urgent': return 'bg-charity-orange';
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
            Nos Projets
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Découvrez nos actions concrètes pour améliorer la vie des plus vulnérables
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-charity-darkGray text-xl mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {project.beneficiaries}
                    </div>
                  </div>
                  
                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-charity-darkGray font-medium">{project.raised}</span>
                      <span className="text-gray-500">Objectif: {project.goal}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-charity-orange h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-xs text-gray-500 mt-1">
                      {project.progress}%
                    </div>
                  </div>
                  
                  <Button className="bg-charity-orange hover:bg-orange-600 text-white w-full py-3 rounded-full font-medium">
                    Soutenir ce Projet
                  </Button>
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

export default Projects;
