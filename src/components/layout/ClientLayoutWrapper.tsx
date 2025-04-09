'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Verificar se estamos em rotas onde o header e footer não devem aparecer
  const hideHeaderFooter = 
    pathname === '/meus-cursos/' || 
    pathname?.startsWith('/curso/') ||
    pathname === '/area-membro/' ||
    pathname?.startsWith('/area-membro/');
  
  // Adicionar classe ao body para CSS
  useEffect(() => {
    if (hideHeaderFooter) {
      document.body.classList.add('auth-area-page');
    } else {
      document.body.classList.remove('auth-area-page');
    }
    
    return () => {
      document.body.classList.remove('auth-area-page');
    };
  }, [hideHeaderFooter]);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeaderFooter && <Header />}
      <main className={`flex-grow ${hideHeaderFooter ? 'pt-0' : 'pt-20'}`}>
        {children}
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}