// src/components/vitrine/CartButton.tsx
'use client';

import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { CartDropdown } from './CartDropdown';

export function CartButton() {
  const { totalItems, isOpen, openCart } = useCart();

  return (
    <div className="relative">
      <button
        onClick={openCart}
        aria-label="Abrir carrinho"
        className="flex items-center justify-center p-2 rounded-full text-gray-700 hover:bg-gray-100 relative"
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
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
      </button>
      <CartDropdown />
    </div>
  );
}