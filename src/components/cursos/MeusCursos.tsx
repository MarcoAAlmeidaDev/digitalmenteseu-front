'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FiPlay, FiClock } from 'react-icons/fi';

interface Curso {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  imagem: string;
  progresso: number;
  totalAulas: number;
  aulasAssistidas: number;
  duracao?: string;
}

interface MeusCursosProps {
  cursos: Curso[];
}

export default function MeusCursos({ cursos }: MeusCursosProps) {
  const router = useRouter();

  // Se não houver cursos
  if (cursos.length === 0) {
    return (
      <div className="bg-[#1c1b29] rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold mb-4">Nenhum curso encontrado</h3>
        <p className="text-gray-400 mb-6">
          Não encontramos cursos correspondentes aos seus critérios de busca.
        </p>
        <button
          onClick={() => router.push('/vitrine')}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Explorar cursos
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Todos os seus cursos</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
          {cursos.map((curso) => (
            <div
              key={curso.id}
              className="bg-[#1c1b29] rounded-xl overflow-hidden shadow-lg flex flex-col transition-transform hover:transform hover:scale-[1.02]"
            >
            {/* Imagem do curso */}
            <div className="relative h-40 w-full">
              <Image
                src={curso.imagem}
                alt={curso.titulo}
                fill
                className="object-cover"
              />
              
              {/* Badge de categoria */}
              <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                {curso.categoria}
              </span>
              
              {/* Indicador de progresso */}
              {curso.progresso > 0 && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                  <div 
                    className="h-full bg-blue-600" 
                    style={{ width: `${curso.progresso}%` }}
                  />
                </div>
              )}
            </div>

            {/* Conteúdo do card */}
            <div className="p-4 flex-grow flex flex-col">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{curso.titulo}</h3>
              
              {/* Duração do curso */}
              {curso.duracao && (
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <FiClock size={14} className="mr-1" />
                  <span>{curso.duracao}</span>
                </div>
              )}
              
              {/* Informações de progresso (se houver) */}
              {curso.progresso > 0 ? (
                <div className="mt-auto mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Progresso</span>
                    <span>{curso.progresso}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${curso.progresso}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">
                    {curso.aulasAssistidas} de {curso.totalAulas} aulas
                  </p>
                </div>
              ) : (
                <p className="text-sm text-gray-400 mt-2 mb-4 line-clamp-2">{curso.descricao}</p>
              )}
              
              <button
                onClick={() => router.push(`/curso/${curso.id}`)}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors mt-auto"
              >
                <FiPlay size={16} />
                <span>{curso.progresso > 0 ? 'Continuar assistindo' : 'Assistir curso'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}