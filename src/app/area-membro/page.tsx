import React from 'react';
import MemberAreaContent from '@/components/auth/MemberAreaContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Área de Membro | DigitalmenteSEU',
  description: 'Acesse conteúdos exclusivos, acompanhe seu progresso e gerencie sua conta.',
};

export default function MemberAreaPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-blue-50 to-white">
      <MemberAreaContent />
    </div>
  );
}