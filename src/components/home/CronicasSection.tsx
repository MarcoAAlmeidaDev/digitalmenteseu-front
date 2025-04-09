'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactTyped } from 'react-typed';
// Aqui você importaria o CSS específico
// import '@/styles/cronicas.css';

interface Author {
  name: string;
  image: string;
}

interface Chronicle {
  id: string;
  title: string;
  excerpt: string;
  author: Author;
}

const CronicasSection: React.FC = () => {
  const chronicles: Chronicle[] = [
    {
      id: '1',
      title: 'Crônica 1',
      excerpt: 'Texto de exibição do conteúdo que o usuário quiser colocar aqui no Digitalmente inspirado',
      author: {
        name: 'Jackie Chan',
        image: '/images/author-1.jpg'
      }
    },
    {
      id: '2',
      title: 'Crônica 2',
      excerpt: 'Texto de exibição do conteúdo que o usuário quiser colocar aqui no Digitalmente inspirado',
      author: {
        name: 'Jackie Chan',
        image: '/images/author-1.jpg'
      }
    },
    {
      id: '3',
      title: 'Crônica 3',
      excerpt: 'Texto de exibição do conteúdo que o usuário quiser colocar aqui no Digitalmente inspirado',
      author: {
        name: 'Jackie Chan',
        image: '/images/author-1.jpg'
      }
    },
    {
      id: '4',
      title: 'Crônica 4',
      excerpt: 'Texto de exibição do conteúdo que o usuário quiser colocar aqui no Digitalmente inspirado',
      author: {
        name: 'Jackie Chan',
        image: '/images/author-1.jpg'
      }
    }
  ];

  // Estado para controlar quais crônicas são exibidas
  const [startIndex, setStartIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<'next' | 'prev'>('next');

  // Determina as duas crônicas visíveis atualmente
  const visibleChronicles = [
    chronicles[startIndex % chronicles.length],
    chronicles[(startIndex + 1) % chronicles.length]
  ];

  // Função para avançar para as próximas crônicas
  const goToNext = () => {
    if (animating) return;
    setAnimationDirection('next');
    setAnimating(true);
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex + 2) % chronicles.length);
      setAnimating(false);
    }, 500);
  };

  // Função para voltar para as crônicas anteriores
  const goToPrev = () => {
    if (animating) return;
    setAnimationDirection('prev');
    setAnimating(true);
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex - 2 + chronicles.length) % chronicles.length);
      setAnimating(false);
    }, 500);
  };

  // Determina a classe de animação baseada na direção
  const getAnimationClass = (index: number) => {
    if (!animating) return '';
    
    if (animationDirection === 'next') {
      return 'animate-slide-left';
    } else {
      return 'animate-slide-right';
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <ReactTyped
              strings={[
                'Procure inspiração com o Digitalmente Inspirado',
                'Passe sua inspiração com o Digitalmente Inspirado'
              ]}
              typeSpeed={70}
              backSpeed={50}
              loop
              className="inline-block"
            />
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-5xl mx-auto">
            Os produtos digitais transformaram profundamente nossa sociedade, economia e vida cotidiana. Seu impacto se estende muito além da mera conveniência tecnológica, representando uma revolução na forma como interagimos, trabalhamos e resolvemos problemas.
          </p>
        </div>

        <div className="relative mb-16">
          {/* Seta navegação esquerda */}
          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all focus:outline-none"
            aria-label="Crônicas anteriores"
            disabled={animating}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Container para os cards de crônicas */}
          <div className="overflow-hidden">
            <div 
              className={`flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-16 max-w-5xl mx-auto transition-all duration-500 ease-out ${
                animating ? 'pointer-events-none' : ''
              }`}
            >
              {visibleChronicles.map((chronicle, index) => (
                <div 
                  key={`${chronicle.id}-${index}`} 
                  className={`w-full md:w-2/5 overflow-hidden transition-all duration-500 ease-out ${
                    getAnimationClass(index)
                  }`}
                >
                  <div className="rounded-xl overflow-hidden shadow-md">
                    {/* Imagem de fundo com efeito bokeh */}
                    <div className="relative h-56 bg-gray-800 overflow-hidden">
                      <div className="absolute inset-0 bg-opacity-70 bg-black z-0">
                        <div className="w-full h-full bg-[url('/images/bokeh-bg.jpg')] bg-cover bg-center opacity-70"></div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 pb-12 relative" style={{ minHeight: '320px' }}>
                      {/* Avatar do autor */}
                      <div className="absolute -top-12 left-6 w-24 h-24 rounded-full border-4 border-white overflow-hidden">
                        <Image 
                          src={chronicle.author.image} 
                          alt={chronicle.author.name}
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      
                      {/* Nome do autor */}
                      <div className="ml-28 -mt-2 mb-4">
                        <p className="text-xl font-medium text-gray-900">{chronicle.author.name}</p>
                      </div>
                      
                      {/* Título da crônica */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{chronicle.title}</h3>
                      
                      {/* Texto da crônica */}
                      <p className="text-gray-600 mb-6">
                        {chronicle.excerpt}
                      </p>
                      
                      {/* Botão "Ler Mais" */}
                      <Link 
                        href={`/cronicas/${chronicle.id}`}
                        className="inline-flex items-center text-[#1333f7] font-medium"
                      >
                        Ler Mais 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Seta navegação direita */}
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all focus:outline-none"
            aria-label="Próximas crônicas"
            disabled={animating}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Linha tracejada estilizada */}
        <div className="w-3/4 h-12 mx-auto relative mb-4">
          <svg className="w-full h-full" viewBox="0 0 300 20" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M5,10 Q75,-10 150,10 Q225,30 295,10" 
              fill="none" 
              stroke="#ff6600" 
              strokeWidth="2" 
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        {/* Botão central */}
        <div className="text-center">
          <Link
            href="/digitalmente-inspirado"
            className="inline-block bg-[#1333f7] hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg"
          >
            Conheça mais sobre o Digitalmente Inspirado
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CronicasSection;