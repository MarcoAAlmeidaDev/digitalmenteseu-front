'use client';

import React from 'react';
import Link from 'next/link';
import { FiUser, FiTag, FiExternalLink } from 'react-icons/fi';
import { VideoEmbedHelper } from '@/components/helpers/VideoEmbedHelper';

interface FeaturedVideoProps {
  video: {
    id: string;
    title: string;
    description: string;
    youtubeId: string;
    category: string;
    author: string;
  };
}

export default function FeaturedVideo({ video }: FeaturedVideoProps) {
  // Função para traduzir a categoria
  const getCategoryLabel = (category: string) => {
    const categoryMap: Record<string, string> = {
      technology: 'Tecnologia',
      personalDev: 'Desenvolvimento Pessoal',
      business: 'Negócios',
      design: 'Design',
      marketing: 'Marketing',
      health: 'Saúde e Bem-estar',
      education: 'Educação',
    };

    return categoryMap[category] || category;
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Coluna do vídeo */}
        <div className="lg:col-span-3 w-full">
          <div className="relative pb-[56.25%] h-0 w-full">
            <div className="absolute top-0 left-0 w-full h-full rounded-tl-xl">
              <VideoEmbedHelper
                url={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                title={video.title}
              />
            </div>
          </div>
        </div>

        {/* Coluna de detalhes */}
        <div className="lg:col-span-2 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">{video.title}</h2>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center text-gray-600">
              <FiUser className="mr-1" size={14} />
              <span>{video.author}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FiTag className="mr-1" size={14} />
              <span>{getCategoryLabel(video.category)}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6">{video.description}</p>
          
          <div className="flex gap-3">
            <Link
              href={`/digitube/videos-conteudos/${video.id}`}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 inline-flex items-center justify-center font-medium transition-colors"
            >
              Ver detalhes
            </Link>
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md px-4 py-2 inline-flex items-center justify-center transition-colors"
            >
              <FiExternalLink className="mr-1" size={16} />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}