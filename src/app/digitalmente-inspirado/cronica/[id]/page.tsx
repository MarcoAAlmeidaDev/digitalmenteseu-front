// src/app/digitalmente-inspirado/cronica/[id]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { chronicles } from '@/data/chroniclesData';
import { AuthorCard } from '@/components/digitalmente-inspirado/AuthorCard';
import { ShareButtons } from '@/components/blog/ShareButtons';

// Tipos para os parâmetros da página
interface ChroniclePageProps {
  params: {
    id: string;
  };
}

// Geração dinâmica de metadados baseados na crônica
export async function generateMetadata({ params }: ChroniclePageProps): Promise<Metadata> {
  const chronicle = chronicles.find(chronicle => chronicle.id === params.id);
  
  if (!chronicle) {
    return {
      title: 'Crônica não encontrada | DigitalmenteSeu',
      description: 'A crônica que você está procurando não foi encontrada.'
    };
  }
  
  return {
    title: `${chronicle.title} | Digitalmente Inspirado`,
    description: chronicle.excerpt,
    keywords: chronicle.tags.join(', '),
    openGraph: {
      title: chronicle.title,
      description: chronicle.excerpt,
      images: [
        {
          url: chronicle.coverImage,
          width: 1200,
          height: 630,
          alt: chronicle.title
        }
      ]
    }
  };
}

export default function ChroniclePage({ params }: ChroniclePageProps) {
  const chronicle = chronicles.find(chronicle => chronicle.id === params.id);
  
  // Se não encontrar a crônica, retorna 404
  if (!chronicle) {
    notFound();
  }
  
  // Formatar a data
  const formattedDate = new Date(chronicle.date).toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Banner com imagem da crônica */}
        <div className="relative h-64 md:h-80 lg:h-96 w-full">
          <Image
            src={chronicle.coverImage}
            alt={chronicle.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          
          {/* Conteúdo do banner */}
          <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-8 lg:px-12 max-w-screen-xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {chronicle.title}
              </h1>
              <div className="flex flex-wrap items-center text-white gap-4">
                <span className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {chronicle.readTime} min de leitura
                </span>
                <span className="flex items-center text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formattedDate}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Conteúdo principal */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Conteúdo da crônica */}
            <div className="lg:w-2/3">
              <article className="bg-white rounded-lg shadow-sm p-6 md:p-8">
                {/* Conteúdo do artigo */}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: chronicle.content }}
                />
                
                {/* Tags */}
                <div className="mt-8 border-t pt-6">
                  <h3 className="text-lg font-semibold mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {chronicle.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Compartilhar - Versão mobile */}
                <div className="mt-8 border-t pt-6 lg:hidden">
                  <h3 className="text-lg font-semibold mb-3">Compartilhe:</h3>
                  <ShareButtons url={`https://digitalmenteseu.com/digitalmente-inspirado/cronica/${chronicle.id}`} title={chronicle.title} />
                </div>
              </article>
              
              {/* Link para voltar ao Digitalmente Inspirado */}
              <div className="mt-6">
                <Link 
                  href="/digitalmente-inspirado"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Voltar para Digitalmente Inspirado
                </Link>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                {/* Autor Card */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <AuthorCard author={chronicle.author} />
                </div>
                
                {/* Compartilhar - Versão desktop */}
                <div className="bg-white rounded-lg shadow-sm p-6 hidden lg:block">
                  <h3 className="text-lg font-semibold mb-3">Compartilhe:</h3>
                  <ShareButtons url={`https://digitalmenteseu.com/digitalmente-inspirado/cronica/${chronicle.id}`} title={chronicle.title} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}