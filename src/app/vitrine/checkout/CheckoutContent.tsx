// src/app/vitrine/checkout/CheckoutContent.tsx
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { useApp } from '@/contexts/AppContext';

type PaymentMethod = 'credit_card' | 'pix';

interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  paymentMethod: PaymentMethod;
  cardNumber?: string;
  cardName?: string;
  cardExpiry?: string;
  cardCVC?: string;
}

export default function CheckoutContent() {
  const { items, totalPrice, clearCart } = useCart();
  const { showNotification } = useApp();
  const router = useRouter();
  
  const [formData, setFormData] = useState<CheckoutForm>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'credit_card',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCVC: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Se não houver itens no carrinho, mostrar mensagem
  if (items.length === 0) {
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
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <h2 className="text-2xl font-bold mb-2">Seu carrinho está vazio</h2>
        <p className="text-gray-600 mb-6">
          Adicione produtos ao carrinho antes de finalizar a compra.
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
  
  // Função para atualizar o form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Função para lidar com envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Aqui você pode adicionar a integração com um gateway de pagamento
      // Por enquanto, vamos apenas simular um processamento
      
      // Simular um atraso de processamento
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Limpar o carrinho
      clearCart();
      
      // Mostrar notificação de sucesso
      showNotification('Pedido realizado com sucesso! Obrigado pela sua compra.', 'success');
      
      // Redirecionar para a página de confirmação
      router.push('/vitrine');
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
      showNotification('Erro ao processar o pagamento. Tente novamente.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Formulário de checkout */}
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-6 border-b pb-2">Informações Pessoais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome Completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <h2 className="text-xl font-bold mb-6 border-b pb-2">Endereço de Entrega</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Endereço Completo
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                Cidade
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  Estado
                </label>
                <select
                  id="state"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecione</option>
                  <option value="AC">AC</option>
                  <option value="AL">AL</option>
                  <option value="AP">AP</option>
                  <option value="AM">AM</option>
                  <option value="BA">BA</option>
                  <option value="CE">CE</option>
                  <option value="DF">DF</option>
                  <option value="ES">ES</option>
                  <option value="GO">GO</option>
                  <option value="MA">MA</option>
                  <option value="MT">MT</option>
                  <option value="MS">MS</option>
                  <option value="MG">MG</option>
                  <option value="PA">PA</option>
                  <option value="PB">PB</option>
                  <option value="PR">PR</option>
                  <option value="PE">PE</option>
                  <option value="PI">PI</option>
                  <option value="RJ">RJ</option>
                  <option value="RN">RN</option>
                  <option value="RS">RS</option>
                  <option value="RO">RO</option>
                  <option value="RR">RR</option>
                  <option value="SC">SC</option>
                  <option value="SP">SP</option>
                  <option value="SE">SE</option>
                  <option value="TO">TO</option>
                </select>
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                  CEP
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  required
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-6 border-b pb-2">Método de Pagamento</h2>
          <div className="mb-8">
            <div className="flex space-x-4 mb-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="credit_card"
                  name="paymentMethod"
                  value="credit_card"
                  checked={formData.paymentMethod === 'credit_card'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="credit_card" className="ml-2 block text-sm text-gray-700">
                  Cartão de Crédito
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="pix"
                  name="paymentMethod"
                  value="pix"
                  checked={formData.paymentMethod === 'pix'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="pix" className="ml-2 block text-sm text-gray-700">
                  PIX
                </label>
              </div>
            </div>

            {formData.paymentMethod === 'credit_card' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Número do Cartão
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    required
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome no Cartão
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    required
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Validade
                    </label>
                    <input
                      type="text"
                      id="cardExpiry"
                      name="cardExpiry"
                      required
                      placeholder="MM/AA"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="cardCVC" className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cardCVC"
                      name="cardCVC"
                      required
                      placeholder="123"
                      value={formData.cardCVC}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {formData.paymentMethod === 'pix' && (
              <div className="bg-gray-50 p-4 rounded-md text-center">
                <p className="text-gray-700 mb-4">
                  Ao finalizar o pedido, você receberá um QR Code PIX para pagamento.
                </p>
                <div className="bg-white p-4 rounded-md inline-block">
                  <svg
                    className="w-32 h-32 mx-auto"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="100" height="100" fill="white" />
                    <path
                      d="M25 25H35V35H25V25ZM40 25H50V35H40V25ZM55 25H65V35H55V25ZM25 40H35V50H25V40ZM40 40H50V50H40V40ZM55 40H65V50H55V40ZM25 55H35V65H25V55ZM40 55H50V65H40V55ZM55 55H65V65H55V55ZM70 25H75V30H70V25ZM65 30H70V35H65V30ZM75 35H80V40H75V35ZM65 40H70V45H65V40ZM75 45H80V50H75V45ZM65 50H70V55H65V50ZM75 55H80V60H75V55ZM65 60H70V65H65V60ZM75 65H80V70H75V65ZM70 70H75V75H70V70ZM25 70H30V75H25V70ZM30 65H35V70H30V65ZM35 70H40V75H35V70ZM40 65H45V70H40V65ZM45 70H50V75H45V70ZM50 65H55V70H50V65ZM55 70H60V75H55V70ZM60 65H65V70H60V65Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Processando...' : 'Finalizar Compra'}
            </button>
          </div>
        </form>
      </div>

      {/* Resumo do pedido */}
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
            <div className="text-gray-700 mb-4">
              <p>{items.length} {items.length === 1 ? 'produto' : 'produtos'} no carrinho</p>
            </div>
          </div>
          
          <div className="p-6 max-h-80 overflow-y-auto">
            <ul className="divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.product.id} className="py-4 flex">
                  <div className="relative h-20 w-20 rounded-md bg-gray-100 overflow-hidden">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-contain p-2"
                      sizes="80px"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{item.product.name}</h4>
                    <div className="mt-1 flex justify-between text-sm">
                      <p>Qtd: {item.quantity}</p>
                      <p className="font-medium">R${(item.product.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6">
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>R${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Frete</span>
              <span>Grátis</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-4 border-t mt-4">
              <span>Total</span>
              <span>R${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}