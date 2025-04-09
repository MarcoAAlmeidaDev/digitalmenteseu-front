import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/contexts/AppContext';
import { AuthProvider } from '@/contexts/AuthContext'; // Importar o AuthProvider
import NotificationsContainer from '@/components/ui/Notification';
import ClientLayoutWrapper from '@/components/layout/ClientLayoutWrapper';

const inter = Inter({ subsets: ['latin'] });

 export const metadata: Metadata = {
   title: 'Digitalmente',
   description: 'Sua plataforma digital completa',
 };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AppProvider>
          <AuthProvider> {/* Envolver com AuthProvider */}
            <ClientLayoutWrapper>
              {children}
            </ClientLayoutWrapper>
            <NotificationsContainer />
          </AuthProvider>
        </AppProvider>
      </body>
    </html>
  );
}