// src/app/blog/post/[id]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { posts } from '@/data/blogData';
// import { Banner } from '@/components/blog/Banner';
import { SearchBar } from '@/components/blog/SearchBar';
import { CategorySelector } from '@/components/blog/CategorySelector';
import { SmallPostCard } from '@/components/blog/SmallPostCard';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { AuthorCard } from '@/components/blog/AuthorCard';
import { TableOfContents } from '@/components/blog/TableOfContents';

// Tipos para os parâmetros da página
interface BlogPostPageProps {
  params: {
    id: string;
  };
}

// Geração dinâmica de metadados baseados no post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = posts.find(post => post.id === params.id);
  
  if (!post) {
    return {
      title: 'Notícia não encontrada | DigitalmenteSeu',
      description: 'A notícia que você está procurando não foi encontrada.'
    };
  }
  
  return {
    title: `${post.title} | Blog DigitalmenteSeu`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.imageUrl,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    }
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = posts.find(post => post.id === params.id);
  
  // Se não encontrar o post, retorna 404
  if (!post) {
    notFound();
  }
  
  // Obter posts relacionados (mesma categoria)
  const relatedPosts = posts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);
  
  // Obter posts populares (mais visualizações)
  const popularPosts = [...posts]
    .sort((a, b) => b.views - a.views)
    .filter(p => p.id !== post.id)
    .slice(0, 4);

  // Formatar a data
  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Banner com imagem do post */}
        <div className="relative h-64 md:h-80 lg:h-96 w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Conteúdo do banner */}
          <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 lg:px-12 max-w-screen-xl mx-auto">
            <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm inline-block mb-4 w-fit">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center text-white gap-4">
              <span className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readTime} min de leitura
              </span>
              <span className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formattedDate}
              </span>
              <span className="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {post.views.toLocaleString()} visualizações
              </span>
            </div>
          </div>
        </div>
        
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
        
        {/* Conteúdo principal */}
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Conteúdo do artigo */}
            <div className="lg:w-2/3">
              <article className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                {/* Conteúdo do artigo */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 mb-6 font-medium">{post.excerpt}</p>
                  
                  {/* Conteúdo fictício do artigo (em produção viria do CMS) */}
                  <h2>Introdução</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel 
                    ultricies lacinia, nisl nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl. 
                    Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, vel aliquam 
                    nisl nisl sit amet nisl.
                  </p>
                  
                  <h2>Desenvolvimento</h2>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor 
                    sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies 
                    mi vitae est. Mauris placerat eleifend leo.
                  </p>
                  
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor 
                    sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies 
                    mi vitae est. Mauris placerat eleifend leo.
                  </p>
                  
                  <h2>Conclusão</h2>
                  <p>
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                    turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor 
                    sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies 
                    mi vitae est. Mauris placerat eleifend leo.
                  </p>
                </div>
                
                {/* Tags */}
                <div className="mt-8 border-t pt-6">
                  <h3 className="text-lg font-semibold mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <a 
                        key={tag}
                        href={`/blog/tag/${tag}`}
                        className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 transition-colors"
                      >
                        #{tag}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Compartilhar */}
                <div className="mt-8 border-t pt-6">
                  <h3 className="text-lg font-semibold mb-3">Compartilhe:</h3>
                  <ShareButtons url={`https://digitalmenteseu.com/blog/post/${post.id}`} title={post.title} />
                </div>
                
                {/* Autor */}
                <div className="mt-8 border-t pt-6">
                  <AuthorCard author={post.author} />
                </div>
              </article>
              
              {/* Posts relacionados - Visível apenas em mobile */}
              <div className="mt-8 lg:hidden">
                <h3 className="text-xl font-bold mb-4">Posts Relacionados</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <SmallPostCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Autor Card (Desktop) */}
              <div className="hidden lg:block sticky top-24">
                {/* Índice */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Neste artigo</h3>
                  <TableOfContents />
                </div>
              
                {/* Posts relacionados */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Posts Relacionados</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <SmallPostCard key={relatedPost.id} post={relatedPost} />
                    ))}
                  </div>
                </div>
                
                {/* Posts populares */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">Posts Populares</h3>
                  <div className="space-y-4">
                    {popularPosts.map((popularPost) => (
                      <SmallPostCard key={popularPost.id} post={popularPost} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}