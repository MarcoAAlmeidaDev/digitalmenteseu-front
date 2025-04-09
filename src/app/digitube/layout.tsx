import React from 'react';

export const metadata = {
  title: 'DigiTube | DigitalmenteSEU',
  description: 'Acesse nossa biblioteca de vídeos educativos e conteúdos sobre tecnologia, desenvolvimento pessoal e muito mais.'
};

export default function DigiTubeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}