import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import VitrineSection from '@/components/home/VitrineSection';
import CronicasSection from '@/components/home/CronicasSection';
import DigiTubeSection from '@/components/home/DigiTubeSection';
import DigiAISection from '@/components/home/DigiAISection';
import DigicastSection from '@/components/home/DigicastSection';
import FAQSection from '@/components/home/FAQSection';
import NewsletterSection from '@/components/home/NewsletterSection';




export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <VitrineSection />
      <CronicasSection />
      <DigiTubeSection />
      <DigiAISection />
      <DigicastSection />
      <FAQSection />
      <NewsletterSection />
      {/* Outras seções virão aqui */}
    </div>
  );
}