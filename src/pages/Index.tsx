
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import MissionSection from '@/components/MissionSection';
import ImpactSection from '@/components/ImpactSection';
import DonationSection from '@/components/DonationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <HeroSection />
      <ServicesSection />
      <MissionSection />
      <ImpactSection />
      <DonationSection />
      <Footer />
    </div>
  );
};

export default Index;
