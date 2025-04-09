// src/components/vitrine/CartDropdown.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';

export function CartDropdown() {
  const {
    items,
    isOpen,
    totalItems,
    totalPrice,
    closeCart,
    removeFromCart,
    updateQuantity,
  } = useCart();
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fechar o dropdown quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        closeCart();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 border border-gray-200 overflow-hidden"
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">Carrinho</h3>
          <button
            onClick={closeCart}
            aria-label="Fechar carrinho"
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="h-5 w-5"
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
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {items.length === 0 ? (
          <div className="p-6 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
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
            <p className="mt-2 text-gray-600">Seu carrinho está vazio</p>
            <button
              onClick={closeCart}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Continuar comprando
            </button>
          </div>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.product.id} className="flex p-4 border-b border-gray-200">
                <div className="relative h-16 w-16 flex-shrink-0 rounded bg-gray-100">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-contain p-2"
                    sizes="64px"
                  />
                </div>
                <div className="ml-4 flex-grow">
                  <h4 className="font-medium text-sm line-clamp-2">{item.product.name}</h4>
                  <div className="mt-1 flex justify-between">
                    <span className="text-sm text-gray-600">
                      R${item.product.price.toFixed(2)} x {item.quantity}
                    </span>
                    <span className="font-medium">
                      R${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="text-gray-500 hover:text-gray-700 h-6 w-6 flex items-center justify-center rounded-full bg-gray-100"
                        aria-label="Diminuir quantidade"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="mx-2 text-sm">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="text-gray-500 hover:text-gray-700 h-6 w-6 flex items-center justify-center rounded-full bg-gray-100"
                        aria-label="Aumentar quantidade"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Remover item"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {items.length > 0 && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between mb-3">
            <span className="font-medium">Total:</span>
            <span className="font-bold">R${totalPrice.toFixed(2)}</span>
          </div>
          <Link
            href="/vitrine/checkout"
            className="block w-full bg-blue-600 text-white text-center py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
            onClick={closeCart}
          >
            Finalizar Compra
          </Link>
        </div>
      )}
    </div>
  );
}