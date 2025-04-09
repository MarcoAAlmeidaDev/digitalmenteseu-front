'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiSearch, FiFilter, FiExternalLink, FiStar, FiThumbsUp, FiChevronDown } from 'react-icons/fi';
import IAToolCard from './IAToolCard';
import IAToolModal from './IAToolModal';
import { iaTools } from '@/data/iaToolsData';
import { IATool } from '@/types/tools';

type FilterOption = 'all' | 'free' | 'paid' | 'freemium';
type SortOption = 'popularity' | 'newest' | 'alphabetical';
type CategoryOption = 'all' | 'text' | 'image' | 'audio' | 'video' | 'productivity' | 'research' | 'seo' | 'marketing';

export default function IAToolsContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState<FilterOption>('all');
  const [categoryFilter, setCategoryFilter] = useState<CategoryOption>('all');
  const [sortBy, setSortBy] = useState<SortOption>('popularity');
  const [selectedTool, setSelectedTool] = useState<IATool | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filtrar ferramentas baseado nos critérios
  const filteredTools = iaTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = priceFilter === 'all' ? true : 
                        (priceFilter === 'free' && tool.pricing === 'free') ||
                        (priceFilter === 'paid' && tool.pricing === 'paid') ||
                        (priceFilter === 'freemium' && tool.pricing === 'freemium');
    
    const matchesCategory = categoryFilter === 'all' ? true : 
                           tool.categories.includes(categoryFilter);
    
    return matchesSearch && matchesPrice && matchesCategory;
  });

  // Ordenar ferramentas
  const sortedTools = [...filteredTools].sort((a, b) => {
    if (sortBy === 'popularity') {
      return b.upvotes - a.upvotes;
    } else if (sortBy === 'newest') {
      return new Date(b.added).getTime() - new Date(a.added).getTime();
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  const openToolModal = (tool: IATool) => {
    setSelectedTool(tool);
    setIsModalOpen(true);
  };

  const closeToolModal = () => {
    setIsModalOpen(false);
  };

  // Categorias para o filtro
  const categories = [
    { value: 'all', label: 'Todas Categorias' },
    { value: 'text', label: 'Geração de Texto' },
    { value: 'image', label: 'Geração de Imagem' },
    { value: 'audio', label: 'Áudio e Voz' },
    { value: 'video', label: 'Edição de Vídeo' },
    { value: 'productivity', label: 'Produtividade' },
    { value: 'research', label: 'Pesquisa' },
    { value: 'seo', label: 'SEO' },
    { value: 'marketing', label: 'Marketing' },
  ];

  // Opções de preço para o filtro
  const priceOptions = [
    { value: 'all', label: 'Todos Preços' },
    { value: 'free', label: 'Gratuito' },
    { value: 'paid', label: 'Pago' },
    { value: 'freemium', label: 'Freemium' },
  ];

  // Opções de ordenação
  const sortOptions = [
    { value: 'popularity', label: 'Mais Populares' },
    { value: 'newest', label: 'Mais Recentes' },
    { value: 'alphabetical', label: 'Ordem Alfabética' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-900 to-blue-900 bg-clip-text text-transparent">
          Ferramentas de Inteligência Artificial
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Descubra as melhores ferramentas de IA para revolucionar seu fluxo de trabalho, aumentar sua produtividade e expandir sua criatividade no mundo digital.
        </p>
        
        {/* Campo de pesquisa principal */}
        <div className="max-w-2xl mx-auto relative mb-10">
          <input
            type="text"
            placeholder="Digite o nome da ferramenta ou categoria..."
            className="w-full px-4 py-3 pl-12 rounded-full border-2 border-blue-200 focus:border-blue-500 focus:outline-none text-gray-700 shadow-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500" size={20} />
        </div>
        
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105"
          onClick={() => window.scrollTo({ top: document.getElementById('tools-grid')?.offsetTop, behavior: 'smooth' })}
        >
          Explorar Ferramentas
        </button>
      </div>

      {/* Filtros e Ordenação */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50"
          >
            <FiFilter size={16} className="text-blue-600" />
            <span>Filtros</span>
            <FiChevronDown size={16} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="text-gray-600">
          Exibindo {filteredTools.length} de {iaTools.length} ferramentas
        </div>
      </div>
      
      {/* Painel de filtros expansível */}
      {isFilterOpen && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-gray-700">Categorias</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <div key={category.value} className="flex items-center">
                  <input
                    type="radio"
                    id={`category-${category.value}`}
                    name="category"
                    checked={categoryFilter === category.value}
                    onChange={() => setCategoryFilter(category.value as CategoryOption)}
                    className="mr-2 accent-blue-600"
                  />
                  <label htmlFor={`category-${category.value}`}>{category.label}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-gray-700">Preço</h3>
            <div className="space-y-2">
              {priceOptions.map(option => (
                <div key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    id={`price-${option.value}`}
                    name="price"
                    checked={priceFilter === option.value}
                    onChange={() => setPriceFilter(option.value as FilterOption)}
                    className="mr-2 accent-blue-600"
                  />
                  <label htmlFor={`price-${option.value}`}>{option.label}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-end">
            <button
              onClick={() => {
                setSearchTerm('');
                setPriceFilter('all');
                setCategoryFilter('all');
                setSortBy('popularity');
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-gray-600"
            >
              Limpar Filtros
            </button>
          </div>
        </div>
      )}

      {/* Grid de ferramentas */}
      <div id="tools-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedTools.length > 0 ? (
          sortedTools.map(tool => (
            <IAToolCard 
              key={tool.id} 
              tool={tool} 
              onClick={() => openToolModal(tool)} 
            />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <div className="mb-4">
              <Image 
                src="/images/icons/search-empty.svg" 
                alt="Nenhum resultado" 
                width={100} 
                height={100} 
                className="mx-auto opacity-60" 
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Nenhuma ferramenta encontrada</h3>
            <p className="text-gray-500">Tente ajustar seus filtros ou buscar por outro termo.</p>
          </div>
        )}
      </div>

      {/* Modal de detalhes da ferramenta */}
      {isModalOpen && selectedTool && (
        <IAToolModal 
          tool={selectedTool}
          isOpen={isModalOpen}
          onClose={closeToolModal}
        />
      )}
    </div>
  );
}