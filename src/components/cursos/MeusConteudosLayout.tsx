'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import MeusCursos from './MeusCursos';
import CursosEmAndamento from './CursosEmAndamento';
import CursosLayout from './CursosLayout';
import { FiBook, FiList, FiSearch, FiFilter, FiChevronRight } from 'react-icons/fi';
import { cursosMock } from '@/data/cursosMock';
import Link from 'next/link';

export default function MeusConteudosLayout() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('emAndamento');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCursos, setFilteredCursos] = useState(cursosMock);
  const [filter, setFilter] = useState('all');

  // Filtrar cursos baseado na busca e categoria
  useEffect(() => {
    let result = cursosMock;
    
    if (searchTerm) {
      result = result.filter(curso => 
        curso.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        curso.categoria.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filter !== 'all') {
      result = result.filter(curso => curso.categoria === filter);
    }
    
    setFilteredCursos(result);
  }, [searchTerm, filter]);

  // Cursos em andamento são aqueles com progresso > 0 e < 100
  const cursosEmAndamento = filteredCursos.filter(curso => curso.progresso > 0 && curso.progresso < 100);
  
  // Todos os cursos disponíveis para o usuário
  const todosCursos = filteredCursos;

  // Obter categorias únicas para o filtro
  const categorias = Array.from(new Set(cursosMock.map(curso => curso.categoria)));

  return (
    <div className="w-full">
      {/* Trilha de navegação (Breadcrumb) */}
      <div className="flex items-center text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-400 transition-colors">
          Início
        </Link>
        <FiChevronRight size={14} className="mx-2" />
        <span className="text-white">Meus Cursos</span>
      </div>
      
      {/* Cabeçalho de boas-vindas */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 text-blue-300">Olá, {user?.name}!</h1>
        <p className="text-gray-400">
          Continue expandindo seus conhecimentos. Você tem {cursosEmAndamento.length} cursos em andamento.
        </p>
      </div>

      {/* Acesso Rápido */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-300">Acesso rápido</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button 
            onClick={() => setActiveTab('emAndamento')}
            className={`flex items-center gap-3 p-4 rounded-lg transition-all cursor-pointer ${
              activeTab === 'emAndamento' 
                ? 'bg-blue-500 text-white' 
                : 'bg-[#1c1b29] text-gray-300 hover:bg-[#232230]'
            }`}
          >
            <FiBook size={20} />
            <span>Meus Cursos</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('todosCursos')}
            className={`flex items-center gap-3 p-4 rounded-lg transition-all cursor-pointer ${
              activeTab === 'todosCursos' 
                ? 'bg-blue-500 text-white' 
                : 'bg-[#1c1b29] text-gray-300 hover:bg-[#232230]'
            }`}
          >
            <FiList size={20} />
            <span>Todos os Cursos</span>
          </button>
        </div>
      </section>

      {/* Barra de pesquisa e filtros */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Buscar por cursos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#1c1b29] text-white border border-gray-700 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-text"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        
        <div className="relative">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="appearance-none bg-[#1c1b29] text-white border border-gray-700 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="all">Todas categorias</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
          <FiFilter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
        </div>
      </div>

      {/* Conteúdo principal */}
      {activeTab === 'emAndamento' ? (
        // Exibir cursos em andamento com scroll horizontal
        <CursosEmAndamento cursos={cursosEmAndamento} />
      ) : (
        // Exibir todos os cursos disponíveis
        <MeusCursos cursos={todosCursos} />
      )}
    </div>
  );
}