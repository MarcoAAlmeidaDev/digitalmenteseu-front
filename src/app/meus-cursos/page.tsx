import React from 'react';
import MeusConteudosLayout from '@/components/cursos/MeusConteudosLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meus Cursos | DigitalmenteSEU',
  description: 'Acesse seus cursos e continue aprendendo.',
};

export default function MeusCursosPage() {
  return <MeusConteudosLayout />;
}