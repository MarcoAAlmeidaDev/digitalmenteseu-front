'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (category: string) => {
    onSelectCategory(category);
    setIsOpen(false);
  };

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Map para traduzir categorias (se necessário)
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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="w-full flex items-center justify-between px-4 py-3 border-2 border-gray-200 rounded-lg bg-white shadow-sm hover:border-gray-300 transition-colors"
      >
        <span className="text-gray-700">
          {selectedCategory ? getCategoryLabel(selectedCategory) : 'Filtrar por categoria'}
        </span>
        <FiChevronDown
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown menu - Removida a animação de escala */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <div className="max-h-60 overflow-y-auto">
            <button
              onClick={() => handleCategorySelect('')}
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                !selectedCategory ? 'bg-blue-50 text-blue-600' : ''
              }`}
            >
              Todas as categorias
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                  selectedCategory === category ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                {getCategoryLabel(category)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}