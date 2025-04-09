// src/app/vitrine/ClientWrapper.tsx
'use client';

import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { useApp } from '@/contexts/AppContext';
import { Product } from '@/types/product';
import { ProductGrid } from '@/components/vitrine/ProductGrid';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const { addToCart } = useCart();
  const { showNotification } = useApp();

  // Função para adicionar ao carrinho com notificação
  const handleAddToCart = (product: Product) => {
    console.log("Adicionando ao carrinho:", product.name); // Debugging
    addToCart(product);
    showNotification(`${product.name} adicionado ao carrinho`, 'success');
  };

  // Se não for um elemento React válido, retornar como está
  if (!React.isValidElement(children)) {
    return <>{children}</>;
  }

  // Verificar se é um ProductGrid e passar a função handleAddToCart
  const childType = (children as any).type;
  const isProductGrid = childType === ProductGrid || childType.name === 'ProductGrid';

  if (isProductGrid) {
    return React.cloneElement(children as React.ReactElement<any>, {
      onAddToCart: handleAddToCart
    });
  }

  // Caso contrário, renderizar o children sem modificação
  return <>{children}</>;
}