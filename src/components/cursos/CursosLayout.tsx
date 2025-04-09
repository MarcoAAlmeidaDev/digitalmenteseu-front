'use client';

import React, { useState, useEffect } from 'react';
import SidebarMenu from './SidebarMenu';
import WhatsAppButton from './WhatsAppButton';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface CursosLayoutProps {
  children: React.ReactNode;
}

export default function CursosLayout({ children }: CursosLayoutProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  // Verificar se o usuário está autenticado
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  // Handlers para o estado da sidebar
  const handleSidebarToggle = (expanded: boolean) => {
    setIsSidebarExpanded(expanded);
  };

  // Estado de carregamento
  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 bg-[#121214] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400">Carregando...</p>
        </div>
      </div>
    );
  }

  // Se não estiver autenticado, não renderizar nada (o redirecionamento já está configurado)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#13111b]">
      {/* Escondendo o Header e Footer globais */}
      <style jsx global>{`
        header[class*="Header_header"],
        footer[class*="Footer_footer"] {
          display: none !important;
        }
      `}</style>
      
      {/* Menu lateral que agora informa seu estado para o layout */}
      <SidebarMenu 
        isCompact={true} 
        onToggle={handleSidebarToggle} 
      />
      
      {/* Conteúdo principal que se ajusta quando a sidebar expande */}
      <main 
        className={`pt-20 transition-all duration-300 ease-in-out ${
          isSidebarExpanded 
            ? 'lg:pl-64' // Quando expandido, deixa espaço para a sidebar completa
            : 'lg:pl-20' // Quando compacto, deixa apenas espaço para os ícones
        } text-white`}
      >
        {children}
      </main>
      
      {/* Botão de WhatsApp fixo */}
      <WhatsAppButton />
    </div>
  );
}