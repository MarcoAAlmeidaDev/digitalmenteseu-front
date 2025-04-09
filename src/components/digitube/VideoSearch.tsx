'use client';

import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';

interface VideoSearchProps {
  onSearch: (term: string) => void;
}

export default function VideoSearch({ onSearch }: VideoSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  // Debounce search to avoid unnecessary re-renders
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={`relative ${isFocused ? 'ring-2 ring-blue-500 rounded-lg' : ''}`}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Buscar vídeos..."
        className="w-full px-4 py-3 pl-12 rounded-lg border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-gray-700 shadow-sm transition-all duration-300"
      />
      <FiSearch
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
          isFocused ? 'text-blue-500' : 'text-gray-400'
        }`}
        size={20}
      />
      
      {searchTerm && (
        <button
          onClick={() => setSearchTerm('')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          aria-label="Limpar busca"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}