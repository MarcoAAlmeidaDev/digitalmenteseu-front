import React from 'react';
import Link from 'next/link';
import { FiBook, FiChevronLeft } from 'react-icons/fi';

export default function CourseNotFound() {
  return (
    <div className="min-h-screen pt-20 bg-[#13111b] text-white flex items-center justify-center">
      <div className="text-center max-w-lg px-4">
        <div className="w-20 h-20 mx-auto bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
          <FiBook size={32} className="text-blue-400" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Curso não encontrado</h1>
        <p className="text-gray-400 mb-8">
          O curso que você está procurando não existe ou pode ter sido removido.
        </p>
        <Link 
          href="/meus-cursos"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors"
        >
          <FiChevronLeft size={20} />
          <span>Voltar para meus cursos</span>
        </Link>
      </div>
    </div>
  );
}