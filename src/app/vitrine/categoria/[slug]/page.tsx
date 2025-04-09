// src/app/vitrine/categoria/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products, categories } from '@/data/productsData';
import { ProductGrid } from '@/components/vitrine/ProductGrid';
import { CategoryNav } from '@/components/vitrine/CategoryNav';
import { CartProvider } from '@/contexts/CartContext';
import { AppProvider } from '@/contexts/AppContext';
import { VitrineHeader } from '@/components/vitrine/VitrineHeader';

import ClientWrapper from '../../ClientWrapper';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// Geração dinâmica de metadados baseados na categoria
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categories.find(cat => cat.slug === params.slug);
  
  if (!category) {
    return {
      title: 'Categoria não encontrada | Vitrine',
      description: 'A categoria que você está procurando não foi encontrada.'
    };
  }
  
  return {
    title: `${category.name} | Vitrine`,
    description: `Explore nossa coleção de produtos na categoria ${category.name}.`,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Encontrar a categoria pela slug
  const category = categories.find(cat => cat.slug === params.slug);
  
  // Se não encontrar a categoria, retorna 404
  if (!category) {
    notFound();
  }
  
  // Filtrar produtos pela categoria
  const categoryProducts = products.filter(product => product.category === category.id);
  
  return (
    <CartProvider>
      <AppProvider>
        <div className="min-h-screen bg-gray-50">
          <VitrineHeader />
          
          <main className="container mx-auto px-4 py-8">
            {/* Navegação por categoria */}
            <div className="mb-8">
              <CategoryNav categories={categories} activeCategory={params.slug} />
            </div>
            
            {/* Cabeçalho da categoria */}
            <section className="mb-8">
              <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
              <p className="text-gray-600">
                Encontre os melhores produtos na categoria {category.name}.
              </p>
            </section>
            
            {/* Produtos da categoria */}
            <section>
              <ClientWrapper>
                <ProductGrid products={categoryProducts} />
              </ClientWrapper>
            </section>
          </main>
        </div>
      </AppProvider>
    </CartProvider>
  );
}