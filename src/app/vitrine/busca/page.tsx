// src/app/vitrine/busca/page.tsx
import { Metadata } from 'next';
import { products, categories } from '@/data/productsData';
import { ProductGrid } from '@/components/vitrine/ProductGrid';
import { CategoryNav } from '@/components/vitrine/CategoryNav';
import { CartProvider } from '@/contexts/CartContext';
import { AppProvider } from '@/contexts/AppContext';
import { VitrineHeader } from '@/components/vitrine/VitrineHeader';

import ClientWrapper from '../ClientWrapper';

interface SearchPageProps {
  searchParams: {
    q?: string;
  };
}

export const metadata: Metadata = {
  title: 'Busca | Vitrine',
  description: 'Resultados da sua busca na vitrine de produtos.',
  robots: {
    index: false,
    follow: true,
  }
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || '';
  
  // Filtrar produtos com base na busca (case insensitive)
  const searchResults = query 
    ? products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];
  
  return (
    <CartProvider>
      <AppProvider>
        <div className="min-h-screen bg-gray-50">
          <VitrineHeader />
          
          <main className="container mx-auto px-4 py-8">
            {/* Navegação por categoria */}
            <div className="mb-8">
              <CategoryNav categories={categories} />
            </div>
            
            {/* Resultados da busca */}
            <section className="mb-8">
              <h1 className="text-3xl font-bold mb-2">
                {query ? `Resultados para "${query}"` : 'Busca'}
              </h1>
              <p className="text-gray-600">
                {searchResults.length} {searchResults.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
              </p>
            </section>
            
            {/* Produtos encontrados */}
            <section>
              <ClientWrapper>
                <ProductGrid products={searchResults} />
              </ClientWrapper>
            </section>
          </main>
        </div>
      </AppProvider>
    </CartProvider>
  );
}