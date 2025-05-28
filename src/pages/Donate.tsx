
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Heart, Shield, CreditCard, Users } from 'lucide-react';

const Donate = () => {
  const [donationType, setDonationType] = useState<'once' | 'monthly'>('once');
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'France'
  });

  const predefinedAmounts = [25, 50, 100, 250, 500];

  const donationImpacts = {
    25: "Fournit des fournitures scolaires à 5 enfants pendant un mois",
    50: "Offre 10 repas nutritifs à des enfants malnutris",
    100: "Finance la vaccination de 20 enfants",
    250: "Permet l'accès à l'eau potable à une famille pendant 6 mois",
    500: "Équipe une salle de classe complète avec du matériel pédagogique"
  };

  const handleAmountSelect = (selectedAmount: number) => {
    setAmount(selectedAmount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setAmount(parseInt(value) || 0);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDonorInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation submitted:', { donationType, amount, donorInfo });
    alert('Merci pour votre générosité ! Vous allez être redirigé vers le système de paiement sécurisé.');
  };

  const getCurrentImpact = () => {
    return donationImpacts[amount as keyof typeof donationImpacts] || 
           `Votre don de ${amount}€ aura un impact significatif sur nos projets`;
  };

  return (
    <div className="min-h-screen font-inter">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-charity-blue to-charity-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Faire un Don
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Votre générosité peut changer des vies. Chaque don compte.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            {/* Donation Type */}
            <div className="mb-8">
              <h2 className="font-playfair text-2xl font-bold text-charity-darkGray mb-4">
                Type de don
              </h2>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setDonationType('once')}
                  className={`flex-1 py-3 px-6 rounded-full font-medium transition-all ${
                    donationType === 'once'
                      ? 'bg-charity-orange text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Don ponctuel
                </button>
                <button
                  type="button"
                  onClick={() => setDonationType('monthly')}
                  className={`flex-1 py-3 px-6 rounded-full font-medium transition-all ${
                    donationType === 'monthly'
                      ? 'bg-charity-orange text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Don mensuel
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h2 className="font-playfair text-2xl font-bold text-charity-darkGray mb-4">
                Montant {donationType === 'monthly' ? 'mensuel' : ''}
              </h2>
              
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-4">
                {predefinedAmounts.map((presetAmount) => (
                  <button
                    key={presetAmount}
                    type="button"
                    onClick={() => handleAmountSelect(presetAmount)}
                    className={`py-3 px-4 rounded-lg font-medium transition-all ${
                      amount === presetAmount && !customAmount
                        ? 'bg-charity-orange text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {presetAmount}€
                  </button>
                ))}
              </div>
              
              <div>
                <Label htmlFor="customAmount">Autre montant</Label>
                <Input
                  id="customAmount"
                  type="number"
                  min="1"
                  placeholder="Montant en €"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="mt-2"
                />
              </div>
              
              {/* Impact Display */}
              <div className="mt-4 p-4 bg-charity-lightGray rounded-lg">
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-charity-orange flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-charity-darkGray mb-1">
                      Impact de votre don de {amount}€
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {getCurrentImpact()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Donor Information */}
            <div className="mb-8">
              <h2 className="font-playfair text-2xl font-bold text-charity-darkGray mb-4">
                Vos informations
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={donorInfo.firstName}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={donorInfo.lastName}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={donorInfo.email}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={donorInfo.phone}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Adresse *</Label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    required
                    value={donorInfo.address}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="city">Ville *</Label>
                  <Input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={donorInfo.city}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">Code postal *</Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    required
                    value={donorInfo.postalCode}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>

            {/* Tax Benefits */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">
                    Avantage fiscal
                  </h3>
                  <p className="text-green-700 text-sm">
                    Votre don de {amount}€ ne vous coûtera que {Math.round(amount * 0.34)}€ 
                    après déduction fiscale de 66%. Vous recevrez automatiquement votre reçu fiscal.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="bg-charity-orange hover:bg-orange-600 text-white px-12 py-4 rounded-full font-medium text-lg"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Procéder au paiement sécurisé
              </Button>
              <p className="text-gray-500 text-sm mt-4">
                Paiement 100% sécurisé par SSL
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-charity-lightGray">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Shield className="w-12 h-12 text-charity-blue mx-auto mb-4" />
              <h3 className="font-semibold text-charity-darkGray text-lg mb-2">
                Sécurisé
              </h3>
              <p className="text-gray-600 text-sm">
                Toutes les transactions sont sécurisées et cryptées
              </p>
            </div>
            <div>
              <Heart className="w-12 h-12 text-charity-orange mx-auto mb-4" />
              <h3 className="font-semibold text-charity-darkGray text-lg mb-2">
                Transparent
              </h3>
              <p className="text-gray-600 text-sm">
                100% de votre don va directement aux bénéficiaires
              </p>
            </div>
            <div>
              <Users className="w-12 h-12 text-charity-green mx-auto mb-4" />
              <h3 className="font-semibold text-charity-darkGray text-lg mb-2">
                Impact réel
              </h3>
              <p className="text-gray-600 text-sm">
                Plus de 150,000 personnes aidées grâce à nos donateurs
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
