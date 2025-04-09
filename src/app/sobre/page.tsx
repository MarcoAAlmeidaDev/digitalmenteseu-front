'user client';

import React from 'react';
import HeroSection from '@/components/sobre/HeroSection';
import MissionSection from '@/components/sobre/MissionSection';
import ValuesSection from '@/components/sobre/ValuesSection';
import TimelineSection from '@/components/sobre/TimelineSection';
import TeamSection from '@/components/sobre/TeamSection';
import ContactSection from '@/components/sobre/ContactSection';


export const metadata = {
  title: 'Sobre | DigitalmenteSEU',
  description: 'Conheça nossa história, missão e valores que impulsionam a DigitalmenteSEU a transformar a presença digital de pessoas e empresas.',
};

export default function SobrePage() {
  return (
    <>
        <HeroSection />
        <MissionSection/>
        <ValuesSection/>
        <TimelineSection/>
        <TeamSection/>
        <ContactSection/>

        {/* Outras seções podem ser adicionadas aqui */}
    </>
  );
}