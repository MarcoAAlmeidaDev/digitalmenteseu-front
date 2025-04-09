'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiPlay, FiClock } from 'react-icons/fi';

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    youtubeId: string;
    category: string;
    author: string;
    duration: string;
  };
  onSelect: () => void;
}

export default function VideoCard({ video, onSelect }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

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
      // Adicione mais mapeamentos conforme necessário
    };

    return categoryMap[category] || category;
  };

  return (
    <div 
      className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform ${
        isHovered ? 'scale-[1.02]' : 'scale-100'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail com overlay de play */}
      <div className="relative w-full h-48 bg-gray-100">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay de play que aparece ao passar o mouse */}
        <div 
          className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-14 h-14 rounded-full bg-blue-600 bg-opacity-90 flex items-center justify-center">
            <FiPlay className="text-white text-xl" />
          </div>
        </div>

        {/* Tag de categoria */}
        <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
          {getCategoryLabel(video.category)}
        </div>

        {/* Duração do vídeo */}
        <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center">
          <FiClock className="mr-1" size={12} />
          {video.duration}
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2 min-h-[3.5rem]">
          {video.title}
        </h3>
        
        <p className="text-gray-500 text-sm mb-3 line-clamp-2 min-h-[2.5rem]">
          {video.description}
        </p>
        
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <span className="font-medium">{video.author}</span>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={onSelect}
            className="flex-1 inline-flex items-center justify-center text-blue-600 hover:text-blue-800 font-medium border border-blue-600 rounded-md px-4 py-2 transition-colors hover:bg-blue-50"
          >
            <FiPlay className="mr-2" size={16} />
            <span>Assistir agora</span>
          </button>
          
          <Link
            href={`/digitube/videos-conteudos/${video.id}`}
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}