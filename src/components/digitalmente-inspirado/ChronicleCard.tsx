// src/components/digitalmente-inspirado/ChronicleCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Chronicle } from '@/types/chronicles';

interface ChronicleCardProps {
  chronicle: Chronicle;
}

export function ChronicleCard({ chronicle }: ChronicleCardProps) {
  return (
    <Link href={`/digitalmente-inspirado/cronica/${chronicle.id}`} className="block">
      <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Imagem de capa */}
        <div className="relative h-48 w-full">
          <Image
            src={chronicle.coverImage}
            alt={chronicle.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* Conteúdo */}
        <div className="p-6">
          {/* Autor */}
          <div className="flex items-center mb-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
              <Image
                src={chronicle.author.image}
                alt={chronicle.author.name}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span className="font-medium text-gray-800">{chronicle.author.name}</span>
          </div>
          
          {/* Título e descrição */}
          <h3 className="text-xl font-bold mb-2 text-gray-900 line-clamp-2">{chronicle.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{chronicle.excerpt}</p>
          
          {/* Link para ler mais */}
          <div className="flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
            Ler Mais
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}