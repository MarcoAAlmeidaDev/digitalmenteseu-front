'use client';

import React from 'react';
import Link from 'next/link';
import { SearchBar } from './SearchBar';
import { CartButton } from './CartButton';
import { useApp } from '@/contexts/AppContext';

export function VitrineHeader() {
  const { favorites } = useApp();
  
  return (
    <>
      {/* Espaçamento para evitar que o header fique grudado no topo */}
      <div className="h-4 bg-gray-50 mt-3"></div>
      
      <header className="bg-white shadow-sm sticky top-4 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/vitrine" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Vitrine</span>
            </Link>

            {/* Busca centralizada */}
            <div className="hidden md:block flex-grow mx-10">
              <SearchBar />
            </div>

            {/* Ícones de navegação */}
            <div className="flex items-center space-x-4">
              <Link 
                href="/vitrine/favoritos" 
                className="p-2 rounded-full text-gray-700 hover:bg-gray-100 relative"
                aria-label="Favoritos"
              >
                <svg
                  className="h-6 w-6"
                  fill={favorites.length > 0 ? "currentColor" : "none"}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={favorites.length > 0 ? 0 : 2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                
                {/* Badge para indicar número de favoritos */}
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {favorites.length > 99 ? '99+' : favorites.length}
                  </span>
                )}
              </Link>
              
              <Link
                href="/vitrine/conta"
                className="p-2 rounded-full text-gray-700 hover:bg-gray-100"
                aria-label="Minha conta"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
              
              <CartButton />
            </div>
          </div>

          {/* Busca mobile */}
          <div className="mt-4 md:hidden">
            <SearchBar />
          </div>
        </div>
      </header>
      
      {/* Vídeo em loop que ocupa 100% da largura */}
      <div className="w-full overflow-hidden">
        <video 
          className="w-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ height: '700px' }}
        >
          <source src="/videos/capa-vitrine.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>
    </>
  );
}