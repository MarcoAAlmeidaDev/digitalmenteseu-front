import React from 'react';
import DigiTubeContent from '@/components/digitube/DigiTubeContent';

export const metadata = {
  title: 'Vídeos e Conteúdos | DigiTube',
  description: 'Acesse nossa coleção de vídeos educativos sobre tecnologia, desenvolvimento pessoal e muito mais.',
  keywords: 'vídeos, tutoriais, aprendizado, tecnologia, desenvolvimento, educação online'
};

export default function DigiTubePage() {
  return (
    <div className="min-h-screen pt-20 bg-white">
      <DigiTubeContent />
    </div>
  );
}