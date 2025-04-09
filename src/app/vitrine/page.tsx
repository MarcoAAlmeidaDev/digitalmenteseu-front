// src/app/vitrine/page.tsx
import { Metadata } from 'next';
import { products, categories } from '@/data/productsData';
import { ProductGrid } from '@/components/vitrine/ProductGrid';
import { CategoryNav } from '@/components/vitrine/CategoryNav';
import { CartProvider } from '@/contexts/CartContext';
import { AppProvider } from '@/contexts/AppContext';
import { VitrineHeader } from '@/components/vitrine/VitrineHeader';

// Componente cliente para tratar interações no lado cliente
import ClientWrapper from './ClientWrapper';

export const metadata: Metadata = {
  title: 'Vitrine | DigitalmenteSeu',
  description: 'Explore nossa vitrine de produtos e serviços digitais.',
};

export default function VitrinePage() {
  // Filtrar produtos em destaque para a primeira seção
  const featuredProducts = products.filter(product => product.featured);
  // Todos os produtos
  const allProducts = products;

  return (
    <CartProvider>
      <AppProvider>
        <div className="min-h-screen bg-gray-50">
          <VitrineHeader />
          
          {/* Espaçador para quando o header está fixo */}
          <div className="h-[65px] md:h-[72px] header-spacer"></div>
          
          <main className="container mx-auto px-4 py-8">
            {/* Navegação por categoria */}
            <div className="mb-8">
              <CategoryNav categories={categories} />
            </div>
            
            {/* Produtos em destaque */}
            {featuredProducts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Produtos em Destaque</h2>
                <ClientWrapper>
                  <ProductGrid products={featuredProducts} />
                </ClientWrapper>
              </section>
            )}
            
            {/* Todos os produtos */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Todos os Produtos</h2>
              <ClientWrapper>
                <ProductGrid products={allProducts} />
              </ClientWrapper>
            </section>
          </main>
        </div>
      </AppProvider>
    </CartProvider>
  );
}