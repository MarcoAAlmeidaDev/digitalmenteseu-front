import React from 'react';
import { Metadata } from 'next';
import CursoContent from '@/components/cursos/CursoContent';
import { cursosMock } from '@/data/cursosMock';
import { notFound } from 'next/navigation';

interface CoursePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const curso = cursosMock.find(c => c.id === params.id);
  
  if (!curso) {
    return {
      title: 'Curso não encontrado | DigitalmenteSEU',
      description: 'O curso solicitado não foi encontrado.'
    };
  }
  
  return {
    title: `${curso.titulo} | DigitalmenteSEU`,
    description: curso.descricao,
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const curso = cursosMock.find(c => c.id === params.id);
  
  if (!curso) {
    notFound();
  }
  
  return <CursoContent curso={curso} />;
}