// src/app/blog/search/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import { posts } from '@/data/blogData';
import { SearchBar } from '@/components/blog/SearchBar';
import { CategorySelector } from '@/components/blog/CategorySelector';
import { HighlightedPostCard } from '@/components/blog/HighlightedPostCard';
import { AdBanner } from '@/components/blog/AdBanner';
import { SearchHeader } from '@/components/blog/SearchHeader';

// Tipagem para os parâmetros da página
interface SearchPageProps {
  searchParams?: {
    q?: string;
  };
}

// Metadados da página
export const metadata: Metadata = {
  title: 'Resultados da busca | Blog DigitalmenteSeu',
  description: 'Encontre artigos e notícias sobre os temas que você está procurando.',
  robots: {
    index: false, // Não indexar páginas de resultado de busca
    follow: true,
  },
};

export default function SearchPage({ searchParams }: SearchPageProps) {
  // Garantir que searchParams existe e obter a query
  const searchQuery = searchParams?.q || '';
  
  console.log("Termo de busca recebido:", searchQuery); // Debugging
  
  // Filtrar posts com base na query de busca (case insensitive)
  const filteredPosts = searchQuery 
    ? posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];
  
  console.log("Número de posts encontrados:", filteredPosts.length); // Debugging
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho da busca */}
      <SearchHeader searchQuery={searchQuery} resultsCount={filteredPosts.length} />
      
      {/* Barra de busca e categorias */}
      <div className="bg-white py-4 sticky top-0 z-10 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/3">
              <SearchBar initialQuery={searchQuery} />
            </div>
            <div className="w-full md:w-2/3">
              <CategorySelector />
            </div>
          </div>
        </div>
      </div>
      
      {/* Container principal do conteúdo */}
      <div className="container mx-auto px-4 py-8">
        {/* Verificar se não há resultados */}
        {filteredPosts.length === 0 ? (
          <div className="py-16 text-center">
            <div className="w-20 h-20 mx-auto mb-6">
              <Image
                src="/images/icons/search-empty.svg"
                alt="Nenhum resultado encontrado"
                width={80}
                height={80}
              />
            </div>
            <h2 className="text-2xl font-bold mb-4">Nenhum resultado encontrado</h2>
            <p className="text-gray-600 max-w-lg mx-auto mb-8">
              Não encontramos nenhum artigo que corresponda à sua busca por "{searchQuery}". 
              Tente usar outras palavras-chave ou explorar nossas categorias.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {/* Lista de resultados */}
            <section aria-labelledby="search-results-heading" className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 id="search-results-heading" className="text-2xl font-bold">
                  Resultados para "{searchQuery}"
                </h2>
              </div>
              <div className="space-y-6 animate-fadeIn">
                {filteredPosts.map((post) => (
                  <HighlightedPostCard key={post.id} post={post} />
                ))}
              </div>
            </section>
            
            {/* Banner de anúncio */}
            <section className="lg:col-span-1 flex flex-col justify-start">
              <h2 className="text-2xl font-bold mb-6">Publicidade</h2>
              <AdBanner />
            </section>
          </div>
        )}
      </div>
    </div>
  );
}