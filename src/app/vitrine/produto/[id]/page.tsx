// src/app/vitrine/produto/[id]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products, categories } from '@/data/productsData';
import { CartProvider } from '@/contexts/CartContext';
import { AppProvider } from '@/contexts/AppContext';
import { VitrineHeader } from '@/components/vitrine/VitrineHeader';

import ClientDetailWrapper from './ClientDetailWrapper';

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

// Geração dinâmica de metadados baseados no produto
export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const product = products.find(product => product.id === params.id);
  
  if (!product) {
    return {
      title: 'Produto não encontrado | Vitrine',
      description: 'O produto que você está procurando não foi encontrado.'
    };
  }
  
  return {
    title: `${product.name} | Vitrine`,
    description: product.description.substring(0, 160),
    openGraph: {
      title: product.name,
      description: product.description.substring(0, 160),
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name
        }
      ]
    }
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  // Encontrar o produto pelo ID
  const product = products.find(product => product.id === params.id);
  
  // Se não encontrar o produto, retorna 404
  if (!product) {
    notFound();
  }
  
  // Encontrar a categoria do produto
  const category = categories.find(cat => cat.id === product.category);
  
  // Produtos relacionados (mesma categoria, exceto o produto atual)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  // Função para renderizar as estrelas de avaliação
  const renderRatingStars = (rating: number) => {
    const starsJSX = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Estrelas cheias
    for (let i = 0; i < fullStars; i++) {
      starsJSX.push(<span key={i} className="text-yellow-400">★</span>);
    }

    // Meia estrela
    if (hasHalfStar) {
      starsJSX.push(<span key="half" className="text-yellow-400">★</span>);
    }

    // Estrelas vazias
    const emptyStars = 5 - starsJSX.length;
    for (let i = 0; i < emptyStars; i++) {
      starsJSX.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }

    return <div className="flex">{starsJSX}</div>;
  };
  
  return (
    <CartProvider>
      <AppProvider>
        <div className="min-h-screen bg-gray-50">
          <VitrineHeader />
          
          <main className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <nav className="flex mb-8 text-sm">
              <a href="/vitrine" className="text-gray-500 hover:text-blue-600">Home</a>
              <span className="mx-2 text-gray-500">/</span>
              {category && (
                <>
                  <a href={`/vitrine/categoria/${category.slug}`} className="text-gray-500 hover:text-blue-600">
                    {category.name}
                  </a>
                  <span className="mx-2 text-gray-500">/</span>
                </>
              )}
              <span className="text-gray-900 font-medium">{product.name}</span>
            </nav>
            
            {/* Detalhe do produto */}
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Imagem do produto */}
                <div className="relative bg-gray-100 rounded-lg h-72 md:h-96">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                
                {/* Informações do produto */}
                <div className="flex flex-col">
                  {/* ID do produto */}
                  <span className="text-sm text-gray-500 mb-1">ID: {product.id}</span>
                  
                  {/* Nome do produto */}
                  <h1 className="text-2xl md:text-3xl font-bold mb-3">{product.name}</h1>
                  
                  {/* Avaliação */}
                  <div className="flex items-center mb-4">
                    <div className="text-xl">
                      {renderRatingStars(product.rating)}
                    </div>
                    <span className="ml-2 text-gray-600">({product.reviewCount} avaliações)</span>
                  </div>
                  
                  {/* Preço */}
                  <div className="mb-6">
                    {product.originalPrice && (
                      <div className="flex items-center mb-1">
                        <span className="text-gray-400 line-through text-lg">R${product.originalPrice.toFixed(2)}</span>
                        {product.discount && (
                          <span className="ml-2 bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded">
                            -{product.discount}%
                          </span>
                        )}
                      </div>
                    )}
                    <div className="text-3xl font-bold text-gray-900">
                      R${product.price.toFixed(2)}
                    </div>
                  </div>
                  
                  {/* Descrição */}
                  <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-2">Descrição</h2>
                    <p className="text-gray-700">{product.description}</p>
                  </div>
                  
                  {/* Botões de ação */}
                  <ClientDetailWrapper product={product} />
                </div>
              </div>
            </div>
            
            {/* Produtos relacionados */}
            {relatedProducts.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {relatedProducts.map((relatedProduct) => (
                    <a 
                      key={relatedProduct.id} 
                      href={`/vitrine/produto/${relatedProduct.id}`}
                      className="block bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                    >
                      <div className="relative w-full h-40 bg-gray-100">
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 line-clamp-2">{relatedProduct.name}</h3>
                        <p className="mt-2 font-bold">R${relatedProduct.price.toFixed(2)}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>
      </AppProvider>
    </CartProvider>
  );
}