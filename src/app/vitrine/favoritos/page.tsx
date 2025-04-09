// src/app/vitrine/favoritos/page.tsx
import { Metadata } from 'next';
import { CartProvider } from '@/contexts/CartContext';
import { AppProvider } from '@/contexts/AppContext';
import { VitrineHeader } from '@/components/vitrine/VitrineHeader';
import FavoritesContent from './FavoritesContent';

export const metadata: Metadata = {
  title: 'Meus Favoritos | Vitrine',
  description: 'Lista de produtos favoritos na vitrine.',
};

export default function FavoritesPage() {
  return (
    <CartProvider>
      <AppProvider>
        <div className="min-h-screen bg-gray-50">
          <VitrineHeader />
          
          <main className="container mx-auto px-4 py-8">
            <section className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Meus Favoritos</h1>
              <p className="text-gray-600">
                Produtos que você marcou como favoritos
              </p>
            </section>
            
            <FavoritesContent />
          </main>
        </div>
      </AppProvider>
    </CartProvider>
  );
}