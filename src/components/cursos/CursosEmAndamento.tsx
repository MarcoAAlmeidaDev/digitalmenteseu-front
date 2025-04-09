'use client';

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FiPlay, FiChevronLeft, FiChevronRight, FiClock } from 'react-icons/fi';

interface Curso {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  imagem: string;
  progresso: number;
  totalAulas: number;
  aulasAssistidas: number;
}

interface CursosEmAndamentoProps {
  cursos: Curso[];
}

export default function CursosEmAndamento({ cursos }: CursosEmAndamentoProps) {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Se não houver cursos em andamento
  if (cursos.length === 0) {
    return (
      <div className="bg-[#1c1b29] rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold mb-4">Nenhum curso em andamento</h3>
        <p className="text-gray-400 mb-6">
          Você ainda não começou nenhum curso. Experimente iniciar um dos cursos disponíveis.
        </p>
        <button
          onClick={() => router.push('/cursos')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Explorar cursos
        </button>
      </div>
    );
  }

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-blue-300">Continuar assistindo</h2>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 bg-[#1c1b29] text-gray-300 rounded-full hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
            aria-label="Rolar para esquerda"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-[#1c1b29] text-gray-300 rounded-full hover:bg-blue-500 hover:text-white transition-colors cursor-pointer"
            aria-label="Rolar para direita"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Container com scroll horizontal - otimizado para spacing */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 hide-scrollbar snap-x w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cursos.map((curso) => (
          <div
            key={curso.id}
            className="min-w-[280px] sm:min-w-[300px] w-[300px] bg-[#1c1b29] rounded-xl overflow-hidden shadow-lg flex flex-col snap-start transition-transform hover:transform hover:scale-[1.02]"
          >
            {/* Imagem do curso */}
            <div className="relative h-44 w-full">
              <Image
                src={curso.imagem}
                alt={curso.titulo}
                fill
                className="object-cover"
              />
              {/* Badge de categoria */}
              <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">
                {curso.categoria}
              </span>
              
              {/* Indicador de progresso */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                <div 
                  className="h-full bg-blue-500" 
                  style={{ width: `${curso.progresso}%` }}
                />
              </div>
            </div>

            {/* Conteúdo do card */}
            <div className="p-4 flex-grow flex flex-col">
              <h3 className="font-bold text-lg mb-2 line-clamp-2 text-blue-100">{curso.titulo}</h3>
              
              <div className="mt-2 mb-4 flex-grow">
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>Progresso</span>
                  <span>{curso.progresso}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${curso.progresso}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-400">
                  <span className="flex items-center">
                    <FiClock size={12} className="mr-1" />
                    {curso.aulasAssistidas} de {curso.totalAulas} aulas
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => router.push(`/curso/${curso.id}`)}
                className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors cursor-pointer"
              >
                <FiPlay size={16} />
                <span>Continuar assistindo</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}