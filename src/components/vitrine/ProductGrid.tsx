// src/components/vitrine/ProductGrid.tsx
'use client';

import React from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '@/types/product';

interface ProductGridProps {
  products: Product[];
  onAddToCart?: (product: Product) => void;
}

export function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  // Função padrão vazia se onAddToCart não for fornecido
  const handleAddToCart = (product: Product) => {
    console.log("Grid: handleAddToCart chamado para", product.name); // Debugging
    if (typeof onAddToCart === 'function') {
      onAddToCart(product);
    } else {
      console.error("Grid: onAddToCart não é uma função válida");
    }
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold text-gray-700">Nenhum produto encontrado</h2>
        <p className="text-gray-500 mt-2">Tente mudar os filtros ou o termo de busca.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={handleAddToCart} 
        />
      ))}
    </div>
  );
}