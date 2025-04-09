// src/app/blog/categoria/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categories, posts } from '@/data/blogData';
import { CategoryHeader } from '@/components/blog/CategoryHeader';
import { SearchBar } from '@/components/blog/SearchBar';
import { CategorySelector } from '@/components/blog/CategorySelector';
import { FeaturedPostCard } from '@/components/blog/FeaturedPostCard';
import { HighlightedPostCard } from '@/components/blog/HighlightedPostCard';
import { AdBanner } from '@/components/blog/AdBanner';

// Tipagem para os parâmetros da página
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
      title: 'Categoria não encontrada | DigitalmenteSeu',
      description: 'A categoria que você está procurando não foi encontrada.'
    };
  }
  
  return {
    title: `${category.name} | Blog DigitalmenteSeu`,
    description: `Artigos e notícias sobre ${category.name} no blog DigitalmenteSeu. Fique por dentro das últimas tendências e informações.`,
    keywords: [category.name, 'blog', 'artigos', 'digitalmenteseu', 'conteúdo digital'].join(', '),
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Encontrar a categoria pela slug
  const category = categories.find(cat => cat.slug === params.slug);
  
  // Se não encontrar a categoria, retorna 404
  if (!category) {
    notFound();
  }
  
  // Filtrar posts pela categoria selecionada
  const categoryPosts = posts.filter(post => post.category === category.name);
  
  // Verificar se existem posts nesta categoria
  if (categoryPosts.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <CategoryHeader categoryName={category.name} />
        
        {/* Barra de busca e categorias */}
        <div className="bg-white py-4 sticky top-0 z-10 border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-full md:w-1/3">
                <SearchBar />
              </div>
              <div className="w-full md:w-2/3">
                <CategorySelector />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Nenhum artigo encontrado</h2>
          <p className="text-gray-600 mb-8">
            Ainda não temos artigos publicados nesta categoria. 
            Volte em breve para conferir novos conteúdos!
          </p>
        </div>
      </div>
    );
  }
  
  // Separar os posts para diferentes seções
  const featuredPosts = categoryPosts.slice(0, Math.min(5, categoryPosts.length));
  const remainingPosts = categoryPosts.slice(Math.min(5, categoryPosts.length));
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho da categoria */}
      <CategoryHeader categoryName={category.name} />
      
      {/* Barra de busca e categorias */}
      <div className="bg-white py-4 sticky top-0 z-10 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/3">
              <SearchBar />
            </div>
            <div className="w-full md:w-2/3">
              <CategorySelector />
            </div>
          </div>
        </div>
      </div>
      
      {/* Container principal do conteúdo */}
      <div className="container mx-auto px-4 py-8">
        {/* Seção de posts em destaque - apenas se houver pelo menos 5 posts */}
        {featuredPosts.length === 5 && (
          <section aria-labelledby="featured-heading" className="mb-16">
            <h2 id="featured-heading" className="text-2xl font-bold mb-6">Destaques da Categoria</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 animate-fadeIn min-h-[32rem]">
              {/* Postagem principal (grande à esquerda) */}
              <div className="md:col-span-7 lg:col-span-6 h-full">
                <FeaturedPostCard post={featuredPosts[0]} size="large" />
              </div>
              
              {/* Grid 2x2 à direita */}
              <div className="md:col-span-5 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 h-full">
                {featuredPosts.slice(1, 5).map((post) => (
                  <FeaturedPostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Grid com Posts e Banner de anúncio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Lista de posts */}
          <section aria-labelledby="posts-heading" className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 id="posts-heading" className="text-2xl font-bold">Artigos sobre {category.name}</h2>
            </div>
            <div className="space-y-6 animate-fadeIn">
              {(remainingPosts.length > 0 ? remainingPosts : categoryPosts).map((post) => (
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
      </div>
    </div>
  );
}