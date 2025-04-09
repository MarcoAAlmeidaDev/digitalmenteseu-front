'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import { FiHome, FiChevronRight, FiUser, FiBookmark, FiShoppingBag, FiBook, FiPlay, FiCreditCard, FiSettings } from 'react-icons/fi';

export default function MemberAreaContent() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  // Redirecionar para login se não estiver autenticado
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  // Exibir estado de carregamento
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  // Se não estiver autenticado, não renderizar nada (o redirecionamento já está configurado)
  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Trilha de navegação (Breadcrumb) */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link href="/" className="flex items-center hover:text-blue-600 transition-colors">
          <FiHome className="mr-1" size={14} />
          <span>Início</span>
        </Link>
        <FiChevronRight className="mx-2" size={14} />
        <span className="text-blue-600 font-medium">Área de Membro</span>
      </div>

      {/* Cabeçalho com perfil do usuário */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 animate-fadeIn">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100">
            <Image
              src={user.avatar || '/images/author-1.jpg'}
              alt={user.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Bem-vindo, {user.name}!</h1>
            <p className="text-gray-600 mb-4">
              Esta é sua área pessoal. Aqui você pode acessar seus conteúdos favoritos, gerenciar suas compras e personalizar sua experiência.
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Membro desde: Janeiro 2024
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                Nível: Iniciante
              </span>
              {user.role === 'admin' && (
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                  Administrador
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Grid de opções */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Meu Perfil */}
        <Link href="/perfil" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group animate-slideUp">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
              <FiUser size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Meu Perfil</h3>
              <p className="text-gray-600">Atualize suas informações pessoais e preferências.</p>
            </div>
          </div>
        </Link>
        
        {/* Favoritos */}
        <Link href="/favoritos" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group animate-slideUp delay-150">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-full bg-pink-100 text-pink-600 group-hover:bg-pink-200 transition-colors">
              <FiBookmark size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">Favoritos</h3>
              <p className="text-gray-600">Acesse seus cursos, produtos e artigos salvos.</p>
            </div>
          </div>
        </Link>
        
        {/* Minhas Compras */}
        <Link href="/minhas-compras" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group animate-slideUp delay-300">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-full bg-green-100 text-green-600 group-hover:bg-green-200 transition-colors">
              <FiShoppingBag size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">Minhas Compras</h3>
              <p className="text-gray-600">Histórico de pedidos e download de produtos digitais.</p>
            </div>
          </div>
        </Link>
        
        {/* Meus Cursos */}
        <Link href="/meus-cursos" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group animate-slideUp">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200 transition-colors">
              <FiBook size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">Meus Cursos</h3>
              <p className="text-gray-600">Continue seus estudos e acompanhe seu progresso.</p>
            </div>
          </div>
        </Link>
        
        {/* Conteúdo Exclusivo */}
        <Link href="/conteudo-exclusivo" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group animate-slideUp delay-150">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 group-hover:bg-yellow-200 transition-colors">
              <FiPlay size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">Conteúdo Exclusivo</h3>
              <p className="text-gray-600">Materiais premium disponíveis apenas para membros.</p>
            </div>
          </div>
        </Link>
        
        {/* Configurações */}
        <Link href="/configuracoes" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group animate-slideUp delay-300">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-full bg-gray-100 text-gray-600 group-hover:bg-gray-200 transition-colors">
              <FiSettings size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-600 transition-colors">Configurações</h3>
              <p className="text-gray-600">Ajuste suas preferências de conta e notificações.</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Painel de atividades recentes */}
      <div className="bg-white rounded-xl shadow-md p-6 animate-fadeIn">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Atividades Recentes</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <h3 className="font-medium text-gray-800">Bem-vindo à sua nova conta!</h3>
            <p className="text-gray-600 text-sm mt-1">Agora você tem acesso a recursos exclusivos da plataforma.</p>
            <span className="text-xs text-gray-500 mt-2 block">Hoje, {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}