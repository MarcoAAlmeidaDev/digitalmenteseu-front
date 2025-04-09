'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { useApp } from '@/contexts/AppContext';
import { Product } from '@/types/product';
import Image from 'next/image';

interface ClientDetailWrapperProps {
  product: Product;
}

// Função para simular obtenção de produto relacionado
// Em um cenário real, você buscaria isso de uma API ou contexto
const getRelatedProduct = (currentProduct: Product): Product => {
  // Produto relacionado simulado
  return {
    id: `related-${currentProduct.id}`,
    name: `Complemento para ${currentProduct.name}`,
    price: currentProduct.price * 0.6, // 60% do preço do produto principal
    image: currentProduct.image, // No mundo real, teria imagem própria
    rating: 4.8,
    reviewCount: 42,
    description: `O complemento perfeito para maximizar sua experiência com ${currentProduct.name}`,
    author: currentProduct.author,
    discount: 20,
    category:'tecnologia'
  };
};

export default function ClientDetailWrapper({ product }: ClientDetailWrapperProps) {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite, showNotification } = useApp();
  const router = useRouter();
  const favorite = isFavorite(product.id);
  
  // Estado para controlar a visibilidade do popup de upsell
  const [showUpsell, setShowUpsell] = useState(false);
  
  // Produto relacionado para upsell
  const relatedProduct = getRelatedProduct(product);

  const handleAddToCart = () => {
    addToCart(product);
    showNotification(`${product.name} adicionado ao carrinho`, 'success');
  };

  const handleBuyNow = () => {
    // Em vez de ir direto para o checkout, mostramos o popup de upsell
    addToCart(product);
    showNotification(`${product.name} adicionado ao carrinho`, 'success');
    setShowUpsell(true);
  };

  const handleAcceptUpsell = () => {
    // Adiciona o produto relacionado e vai para o checkout
    addToCart(relatedProduct);
    showNotification(`${relatedProduct.name} adicionado ao carrinho`, 'success');
    setShowUpsell(false);
    router.push('/vitrine/checkout');
  };

  const handleDeclineUpsell = () => {
    // Fecha o popup e vai para o checkout sem adicionar produto adicional
    setShowUpsell(false);
    router.push('/vitrine/checkout');
  };

  const handleToggleFavorite = () => {
    if (favorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <div className="space-y-4">
      {/* Botão de favorito */}
      <button
        onClick={handleToggleFavorite}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg border ${
          favorite 
            ? 'border-red-200 bg-red-50 text-red-500' 
            : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
        } transition-colors w-full`}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          fill={favorite ? "currentColor" : "none"} 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={favorite ? 0 : 2} 
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
          />
        </svg>
        <span>{favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}</span>
      </button>
      
      {/* Botões de ação */}
      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-white text-blue-600 border-2 border-blue-600 py-3 px-6 rounded-lg font-medium hover:bg-blue-50 transition-colors"
        >
          Adicionar ao Carrinho
        </button>
        <button
          onClick={handleBuyNow}
          className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Comprar Agora
        </button>
      </div>
      
      {/* Popup de Upsell */}
      {showUpsell && (
        <div className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-xl w-full overflow-hidden shadow-2xl animate-slideUp">
            {/* Cabeçalho do popup */}
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-5 text-white">
              <h3 className="text-2xl font-bold">Oferta Especial!</h3>
              <p className="mt-1 text-white text-opacity-90">
                Aproveite esta oportunidade exclusiva antes de finalizar sua compra
              </p>
            </div>
            
            {/* Conteúdo do popup */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-5 items-center">
                {/* Imagem do produto */}
                <div className="relative w-40 h-40 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-contain p-2"
                  />
                  {relatedProduct.discount && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1">
                      -{relatedProduct.discount}%
                    </div>
                  )}
                </div>
                
                {/* Detalhes do produto */}
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800">{relatedProduct.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{relatedProduct.description}</p>
                  
                  <div className="mt-4 flex items-center">
                    <div className="text-2xl font-bold text-gray-900">
                      R$ {relatedProduct.price.toFixed(2)}
                    </div>
                    {relatedProduct.discount && (
                      <div className="ml-2 text-sm text-gray-500 line-through">
                        R$ {(relatedProduct.price * (1 + relatedProduct.discount/100)).toFixed(2)}
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-3 mt-3">
                    <p className="text-sm text-amber-800">
                      <span className="font-semibold">Dica:</span> Quase 70% dos nossos clientes aproveitam esta oferta para maximizar seus resultados!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Rodapé com botões */}
            <div className="p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAcceptUpsell}
                className="flex-1 bg-gradient-to-r from-orange-500 to-amber-600 text-white py-3 px-6 rounded-lg font-medium hover:from-orange-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-md"
              >
                Sim! Quero Adicionar
              </button>
              <button
                onClick={handleDeclineUpsell}
                className="flex-1 text-gray-600 bg-white border border-gray-300 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Não, Obrigado
              </button>
            </div>
            
            {/* Selo de garantia */}
            <div className="px-6 pb-6 text-center">
              <p className="text-xs text-gray-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Garantia de satisfação ou seu dinheiro de volta em até 30 dias
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}