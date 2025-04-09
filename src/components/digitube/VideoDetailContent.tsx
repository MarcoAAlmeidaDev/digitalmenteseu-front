'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiChevronRight, FiHome, FiUser, FiTag, FiExternalLink, FiShare2, FiBookmark, FiThumbsUp } from 'react-icons/fi';
import { VideoEmbedHelper } from '@/components/helpers/VideoEmbedHelper';
import VideoSearch from './VideoSearch';
import CategoryFilter from './CategoryFilter';
import VideoCard from './VideoCard';
import { videoData } from '@/data/videoData';

interface VideoDetailContentProps {
  video: {
    id: string;
    title: string;
    description: string;
    youtubeId: string;
    category: string;
    author: string;
    thumbnail: string;
    duration: string;
    uploadDate?: string;
    views?: number;
    likes?: number;
  };
}

export default function VideoDetailContent({ video }: VideoDetailContentProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [relatedVideos, setRelatedVideos] = useState<typeof videoData>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Extrair categorias únicas dos vídeos
  const categories = Array.from(new Set(videoData.map((v) => v.category)));

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

  // Encontrar vídeos relacionados (mesma categoria, excluindo o atual)
  useEffect(() => {
    let filteredVideos = videoData.filter(
      (v) => v.id !== video.id && v.category === video.category
    );

    // Se não houver vídeos suficientes da mesma categoria, adicione alguns aleatórios
    if (filteredVideos.length < 3) {
      const otherVideos = videoData.filter(
        (v) => v.id !== video.id && v.category !== video.category
      );
      
      // Embaralhar e pegar alguns aleatórios
      const randomVideos = [...otherVideos]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3 - filteredVideos.length);
      
      filteredVideos = [...filteredVideos, ...randomVideos];
    }

    setRelatedVideos(filteredVideos.slice(0, 3));
  }, [video.id, video.category]);

  // Manipuladores de eventos
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleShareClick = () => {
    setShowShareMenu(!showShareMenu);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copiado para a área de transferência!');
    setShowShareMenu(false);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    // Aqui você pode adicionar lógica para salvar nos favoritos
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    // Aqui você pode adicionar lógica para registrar curtidas
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fadeIn">
      {/* Trilha de navegação (Breadcrumb) */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link href="/" className="flex items-center hover:text-blue-600 transition-colors">
          <FiHome className="mr-1" size={14} />
          <span>Início</span>
        </Link>
        <FiChevronRight className="mx-2" size={14} />
        <Link href="/digitube" className="hover:text-blue-600 transition-colors">
          DigiTube
        </Link>
        <FiChevronRight className="mx-2" size={14} />
        <Link href="/digitube/videos-conteudos" className="hover:text-blue-600 transition-colors">
          Vídeos e Conteúdos
        </Link>
        <FiChevronRight className="mx-2" size={14} />
        <span className="text-blue-600 font-medium truncate max-w-[150px] md:max-w-xs">{video.title}</span>
      </div>

      {/* Filtros e busca */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 animate-slideRight">
        <div className="md:w-2/3">
          <VideoSearch onSearch={handleSearch} />
        </div>
        <div className="md:w-1/3">
          <CategoryFilter 
            categories={categories} 
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coluna principal com o vídeo */}
        <div className="lg:col-span-2">
          {/* Vídeo em tamanho ampliado */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 animate-scaleIn">
            <div className="relative pb-[56.25%] h-0 w-full">
              <div className="absolute top-0 left-0 w-full h-full">
                <VideoEmbedHelper
                  url={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  title={video.title}
                />
              </div>
            </div>
            
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-3">{video.title}</h1>
              
              <div className="flex flex-wrap items-center justify-between mb-4">
                <div className="flex flex-wrap gap-4 items-center text-gray-600">
                  <div className="flex items-center">
                    <FiUser className="mr-1" size={14} />
                    <span>{video.author}</span>
                  </div>
                  <div className="flex items-center">
                    <FiTag className="mr-1" size={14} />
                    <span>{getCategoryLabel(video.category)}</span>
                  </div>
                  {video.views && (
                    <span className="text-sm text-gray-500">
                      {video.views.toLocaleString()} visualizações
                    </span>
                  )}
                  {video.uploadDate && (
                    <span className="text-sm text-gray-500">
                      Publicado em {new Date(video.uploadDate).toLocaleDateString()}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2 mt-2 md:mt-0">
                  <button
                    onClick={handleLike}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors ${
                      isLiked 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <FiThumbsUp size={16} />
                    <span>{isLiked ? 'Curtido' : 'Curtir'}</span>
                  </button>
                  
                  <button
                    onClick={handleBookmark}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-md transition-colors ${
                      isBookmarked 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <FiBookmark size={16} />
                    <span>{isBookmarked ? 'Salvo' : 'Salvar'}</span>
                  </button>
                  
                  <div className="relative">
                    <button
                      onClick={handleShareClick}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      <FiShare2 size={16} />
                      <span>Compartilhar</span>
                    </button>
                    
                    {/* Menu de compartilhamento */}
                    {showShareMenu && (
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-10 py-1 border border-gray-200 animate-fadeIn">
                        <button
                          onClick={handleCopyLink}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Copiar link
                        </button>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            window.location.href
                          )}&text=${encodeURIComponent(video.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Compartilhar no Twitter
                        </a>
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            window.location.href
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Compartilhar no Facebook
                        </a>
                        <a
                          href={`https://wa.me/?text=${encodeURIComponent(
                            `${video.title} ${window.location.href}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Compartilhar no WhatsApp
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-700 whitespace-pre-line">{video.description}</p>
                
                <div className="mt-4">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <FiExternalLink className="mr-1" size={16} />
                    <span>Assistir no YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna lateral com vídeos relacionados */}
        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Vídeos Relacionados</h2>
          
          <div className="space-y-4">
            {relatedVideos.map((relatedVideo) => (
              <Link 
                key={relatedVideo.id} 
                href={`/digitube/videos-conteudos/${relatedVideo.id}`}
                className="block"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-slideUp">
                  <div className="flex flex-col sm:flex-row lg:flex-col">
                    {/* Thumbnail */}
                    <div className="relative w-full sm:w-40 lg:w-full h-40 sm:h-24 lg:h-40">
                      <img
                        src={relatedVideo.thumbnail}
                        alt={relatedVideo.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {relatedVideo.duration}
                      </div>
                    </div>
                    
                    {/* Detalhes */}
                    <div className="p-3">
                      <h3 className="font-medium text-gray-800 line-clamp-2 mb-1">
                        {relatedVideo.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-1">
                        {relatedVideo.author}
                      </p>
                      <span className="text-xs text-gray-500 mt-1 block">
                        {getCategoryLabel(relatedVideo.category)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}