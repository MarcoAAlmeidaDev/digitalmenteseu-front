'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { redirect } from 'next/navigation';
import SidebarMenu from '@/components/cursos/SidebarMenu';
import WhatsAppButton from '@/components/cursos/WhatsAppButton';

export default function MeusCursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useAuth();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  // Verificar autenticação
  if (!isLoading && !isAuthenticated) {
    redirect('/login');
  }
  
  // Handlers para o estado da sidebar
  const handleSidebarToggle = (expanded: boolean) => {
    setIsSidebarExpanded(expanded);
  };
  
  // Se estiver carregando, mostrar indicador
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#121214] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400">Carregando...</p>
        </div>
      </div>
    );
  }
  
  // Se não estiver autenticado, não renderiza nada
  if (!isAuthenticated) {
    return null;
  }
  
  return (
    <div className="relative min-h-screen bg-[#13111b]">
      {/* Menu lateral - Posicionamento absoluto para garantir exibição */}
      <div className="fixed top-0 left-0 h-full z-30">
        <SidebarMenu 
          isCompact={false} 
          onToggle={handleSidebarToggle} 
        />
      </div>
      
      {/* Conteúdo principal - Usando margin-left para evitar sobreposição */}
      <main 
        className={`transition-all duration-300 ease-in-out ${
          isSidebarExpanded 
            ? 'ml-64' // Quando expandido
            : 'ml-20' // Quando recolhido
        } text-white`}
      >
        <div className="w-full h-full py-6 px-6">
          {children}
        </div>
      </main>
      
      {/* Botão de WhatsApp fixo */}
      <WhatsAppButton />
    </div>
  );
}