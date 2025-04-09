// src/app/vitrine/favoritos/FavoritesContent.tsx
'use client';

import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { useCart } from '@/contexts/CartContext';
import { ProductGrid } from '@/components/vitrine/ProductGrid';
import Link from 'next/link';

export default function FavoritesContent() {
  const { favorites, showNotification } = useApp();
  const { addToCart } = useCart();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    showNotification(`${product.name} adicionado ao carrinho`, 'success');
  };

  if (favorites.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <svg
          className="w-16 h-16 text-gray-400 mx-auto mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <h2 className="text-2xl font-bold mb-2">Você ainda não tem favoritos</h2>
        <p className="text-gray-600 mb-6">
          Adicione produtos aos favoritos clicando no ícone de coração nos produtos que você gostar.
        </p>
        <Link
          href="/vitrine"
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Explorar produtos
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Lista de favoritos */}
      <ProductGrid products={favorites} onAddToCart={handleAddToCart} />
    </div>
  );
}