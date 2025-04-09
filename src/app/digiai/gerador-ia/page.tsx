import React from 'react';
import TextGeneratorContent from '@/components/digiai/TextGeneratorContent';

export const metadata = {
  title: 'Gerador de Texto com IA | DigitalmenteSEU',
  description: 'Crie textos personalizados sobre diversos temas usando nossa ferramenta de geração de texto com inteligência artificial.'
};

export default function TextGeneratorPage() {
  return (
    <div className="min-h-screen pt-20 bg-with">
      <TextGeneratorContent />
    </div>
  );
}