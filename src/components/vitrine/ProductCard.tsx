'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { useApp } from '@/contexts/AppContext';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { addToFavorites, removeFromFavorites, isFavorite, showNotification } = useApp();
  const favorite = isFavorite(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToCart(product);
    showNotification(`${product.name} adicionado ao carrinho`, 'success');
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (favorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  // Função para renderizar as estrelas de avaliação
  const renderRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    // Adicionar estrelas cheias
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Adicionar meia estrela se necessário
    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="half-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path fill="url(#half-gradient)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    // Adicionar estrelas vazias
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return <div className="flex">{stars}</div>;
  };

  // Gera uma cor de fundo aleatória baseada no ID do produto (para variedade visual)
  const getBgColor = () => {
    const colors = [
      'bg-purple-200', 'bg-orange-200', 'bg-amber-200', 'bg-rose-200', 
      'bg-cyan-200', 'bg-emerald-200', 'bg-indigo-200', 'bg-pink-200'
    ];
    const index = parseInt(product.id, 10) % colors.length;
    return colors[index];
  };

  return (
    <Link href={`/vitrine/produto/${product.id}`} className="block h-full">
      <div className={`relative h-full flex flex-col overflow-hidden rounded-none group transition-transform duration-300 hover:-translate-y-1 ${getBgColor()}`}>
        {/* Marcador de desconto no canto */}
        <div className="absolute top-0 left-0 z-10">
          <div className="w-16 h-16 relative overflow-hidden">
            {product.discount && (
              <div className="absolute top-0 left-0 rotate-45 bg-black text-white transform origin-top-left -translate-y-1/2 translate-x-1/4 w-28 text-center text-xs font-bold py-1">
                -{product.discount}%
              </div>
            )}
          </div>
        </div>
        
        {/* Conteúdo da imagem */}
        <div className="relative h-52 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          
          {/* Overlay para o efeito de destaque */}
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Título em destaque no estilo retrô como na imagem */}
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-center z-10">
            <h2 className="text-4xl font-bold text-white uppercase tracking-wider drop-shadow-lg px-4">
              {product.name.split(' ')[0]}
            </h2>
          </div>
          
          {/* Botão de favorito (canto superior direito) */}
          <button
            onClick={handleToggleFavorite}
            aria-label={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
            className={`absolute top-3 right-3 p-1.5 rounded-full ${favorite ? 'text-red-500 bg-white shadow' : 'text-gray-400 bg-white shadow hover:text-red-500'} transition-colors focus:outline-none z-10`}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill={favorite ? "currentColor" : "none"} 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={favorite ? 0 : 2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        
        {/* Área preta com descrição (como na imagem) */}
        <div className="bg-black text-white p-4">
          <p className="text-sm line-clamp-2">
            {product.description || `${product.name} é um curso que vai te ensinar o potencial incrível da melhor ferramenta do mundo para a sua jornada profissional.`}
          </p>
        </div>
        
        {/* Conteúdo inferior */}
        <div className="p-4 flex-grow flex flex-col">
          {/* Nome do produto */}
          <h3 className="text-base font-medium mb-1 line-clamp-2 text-gray-800">{product.name}</h3>
          
          {/* Autor/Instrutor */}
          <p className="text-xs text-gray-600 mb-1.5">
            {product.author || 'Instrutor do Curso'}
          </p>
          
          {/* Avaliação do produto */}
          <div className="flex items-center mb-2">
            {renderRatingStars(product.rating)}
            <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
          </div>
          
          {/* Preços no estilo da imagem */}
          <div className="mt-auto flex flex-col">
            <div className="text-xs text-gray-500 line-through mb-1">
              De R$ {(product.originalPrice || (product.price * 1.45)).toFixed(2)}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-600">Por: </div>
                <div className="text-lg font-bold text-black">
                  R$ {product.price.toFixed(2)}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button
                  className="bg-black text-white text-xs font-bold uppercase px-3 py-2 hover:bg-gray-800 transition-colors focus:outline-none"
                >
                  SAIBA MAIS
                </button>
                
                <button
                  onClick={handleAddToCart}
                  aria-label="Adicionar ao carrinho"
                  className="bg-pink-600 text-white p-2 hover:bg-pink-700 transition-colors focus:outline-none"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}