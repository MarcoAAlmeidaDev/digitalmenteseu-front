'use client';

import React, { useState, useEffect } from 'react';
import { FiSearch, FiChevronRight, FiHome } from 'react-icons/fi';
import Link from 'next/link';
import VideoSearch from './VideoSearch';
import CategoryFilter from './CategoryFilter';
import VideoCard from './VideoCard';
import FeaturedVideo from './FeaturedVideo';
import { videoData } from '@/data/videoData';

export default function DigiTubeContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredVideos, setFilteredVideos] = useState(videoData);
  const [featuredVideo, setFeaturedVideo] = useState(videoData[0]);

  // Extrair categorias únicas dos vídeos
  const categories = Array.from(
    new Set(videoData.map((video) => video.category))
  );

  // Filtrar vídeos com base na pesquisa e categoria selecionada
  useEffect(() => {
    let results = videoData;
    
    // Filtrar por termo de pesquisa
    if (searchTerm) {
      results = results.filter((video) =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filtrar por categoria
    if (selectedCategory) {
      results = results.filter((video) => video.category === selectedCategory);
    }
    
    setFilteredVideos(results);
    
    // Se temos resultados filtrados, atualize o vídeo em destaque
    if (results.length > 0 && (searchTerm || selectedCategory)) {
      setFeaturedVideo(results[0]);
    } else if (!searchTerm && !selectedCategory) {
      // Se não há filtros, volte ao vídeo em destaque original
      setFeaturedVideo(videoData[0]);
    }
  }, [searchTerm, selectedCategory]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const handleVideoSelect = (video: any) => {
    setFeaturedVideo(video);
    // Scroll para o topo para ver o vídeo em destaque
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <span className="text-blue-600 font-medium">Vídeos e Conteúdos</span>
      </div>

      {/* Cabeçalho da página */}
      <div className="text-center mb-10 animate-slideDown">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
          DigiTube: Vídeos e Conteúdos
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Explore nossa biblioteca de vídeos educativos sobre tecnologia, desenvolvimento pessoal
          e muito mais. Aprenda no seu próprio ritmo com nossos conteúdos selecionados.
        </p>
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

      {/* Vídeo em destaque */}
      <div className="mb-12 animate-scaleIn">
        <FeaturedVideo video={featuredVideo} />
      </div>

      {/* Grid de vídeos */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
          {searchTerm || selectedCategory ? 'Resultados da Busca' : 'Vídeos Recomendados'}
        </h2>

        {filteredVideos.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-lg animate-fadeIn">
            <svg
              className="w-16 h-16 mx-auto text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700">Nenhum vídeo encontrado</h3>
            <p className="text-gray-500 mt-2">
              Tente ajustar seus filtros ou termo de busca.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div key={video.id} className="animate-slideUp">
                <VideoCard
                  video={video}
                  onSelect={() => handleVideoSelect(video)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}