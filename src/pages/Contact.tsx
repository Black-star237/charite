
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['75 Avenue des Champs-Élysées', '75008 Paris, France']
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+33 1 42 86 14 72', '+33 6 78 94 32 10']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@charius.org', 'dons@charius.org']
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun - Ven: 9h00 - 18h00', 'Sam: 9h00 - 12h00']
    }
  ];

  return (
    <div className="min-h-screen font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-charity-blue to-charity-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Contactez-Nous
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-charity-darkGray mb-6">
                Envoyez-nous un Message
              </h2>
              <p className="text-gray-600 mb-8">
                Que vous souhaitiez devenir bénévole, faire un don, ou simplement en savoir plus 
                sur nos actions, n'hésitez pas à nous contacter.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">Sujet *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-charity-orange focus:border-charity-orange"
                    placeholder="Votre message..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-charity-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium"
                >
                  Envoyer le Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-charity-darkGray mb-6">
                Nos Informations
              </h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-charity-orange rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charity-darkGray text-lg mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Map placeholder */}
              <div className="mt-8">
                <h3 className="font-semibold text-charity-darkGray text-lg mb-4">
                  Notre Localisation
                </h3>
                <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Carte interactive (Google Maps)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-charity-lightGray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-charity-darkGray mb-12 text-center">
            Questions Fréquentes
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Comment puis-je faire un don ?",
                answer: "Vous pouvez faire un don en ligne via notre site web, par virement bancaire, ou par chèque. Toutes les informations sont disponibles sur notre page dédiée aux dons."
              },
              {
                question: "Comment devenir bénévole ?",
                answer: "Pour devenir bénévole, contactez-nous via le formulaire ci-dessus en précisant vos motivations et vos disponibilités. Nous organisons régulièrement des sessions d'information."
              },
              {
                question: "Mes dons sont-ils déductibles d'impôts ?",
                answer: "Oui, Charius est une association reconnue d'utilité publique. Vous recevrez un reçu fiscal vous permettant de déduire 66% de votre don de vos impôts."
              },
              {
                question: "Comment puis-je suivre l'utilisation de mon don ?",
                answer: "Nous publions régulièrement des rapports d'activité et des bilans financiers. De plus, nous envoyons à nos donateurs des nouvelles de nos projets via notre newsletter."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold text-charity-darkGray text-lg mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
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

export default Contact;
