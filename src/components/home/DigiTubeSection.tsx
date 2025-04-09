'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';

interface VideoCard {
  id: string;
  title: string;
  description: string;
  category: string;
  youtubeId: string;
}

const DigiTubeSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Efeito para inicializar o vídeo quando o componente montar
  useEffect(() => {
    // Verifica se a referência ao vídeo existe
    if (videoRef.current) {
      // Configura o vídeo para autoplay, mudo e loop
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.playsInline = true;
      
      // Tenta iniciar o vídeo
      videoRef.current.play().catch(error => {
        console.error("Erro ao reproduzir o vídeo:", error);
      });
    }
  }, []);

  const advantages = [
    'Est et in pharetra magna adipiscing ornare aliquam.',
    'Tellus arcu sed consequat ac velit ut eu blandit.',
    'Ullamcorper ornare in et egestas dolor orci.'
  ];

  const videoCards: VideoCard[] = [
    {
      id: '1',
      title: 'Mapa Mental',
      description: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
      category: 'Desenvolvimento Pessoal',
      youtubeId: 'jQMbuK6URws'
    },
    {
      id: '2',
      title: 'Porque a I.A pode te ajudar no Dia a dia?',
      description: 'Aliquam ut euismod condimentum elementum ultricies volutpat sit non.',
      category: 'Tecnologia',
      youtubeId: 'jQMbuK6URws'
    },
    {
      id: '3',
      title: 'Documentário: O Mundo está se digitalizando',
      description: 'Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.',
      category: 'NOVO',
      youtubeId: 'jQMbuK6URws'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-16 mb-16">
          {/* Coluna de Texto & Vantagens */}
          <div className="w-full lg:w-1/2 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 relative">
              Explore e tenha conhecimento com o DigiTube
              <span className="absolute -bottom-3 left-0 w-64 h-2 bg-orange-400 rounded-full"></span>
            </h2>
            
            <ul className="space-y-4 mb-8">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 p-1 rounded-full bg-white shadow-sm text-[#1333f7] mr-3">
                    <FiCheck className="w-5 h-5" />
                  </span>
                  <span className="text-gray-700">{advantage}</span>
                </li>
              ))}
            </ul>
            
            <Link 
              href="/digitube"
              className="inline-block bg-[#1333f7] hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              Conheça mais sobre o DigiTube
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          
          {/* Coluna do Vídeo */}
          <div className="w-full lg:w-1/2 h-full">
            <div className="relative">
              {/* Fundo circular azul - Escondido em dispositivos móveis */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full transform translate-x-1/4 -translate-y-1/4 z-0 hidden lg:block"></div>
              
              {/* MacBook Container */}
              <div className="relative z-10 mx-auto">
                {/* MacBook Body */}
                <div className="relative w-full aspect-[16/10] bg-gray-800 rounded-t-lg p-[2%] pt-[1.8%]">
                  {/* Screen */}
                  <div className="w-full h-full rounded-sm bg-gray-900 overflow-hidden">
                    {/* Video Container - Com vídeo usando ref */}
                    <div className="relative w-full h-full">
                      <video 
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        preload="auto"
                        poster="/images/digitube-poster.jpg"
                      >
                        <source src="/videos/digitube-demo.mp4" type="video/mp4" />
                        Seu navegador não suporta a tag de vídeo.
                      </video>
                    </div>
                  </div>
                </div>
                
                {/* MacBook Bottom */}
                <div className="relative w-[105%] h-4 bg-gray-800 -left-[2.5%] rounded-b-lg"></div>
                
                {/* Stand */}
                <div className="relative w-[20%] h-2 bg-gray-700 rounded-b-lg mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cards de Vídeo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {videoCards.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* YouTube Embed */}
              <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?si=PrCVmy02daIfY9-C`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="p-5">
                {/* Etiqueta de categoria acima do título */}
                <div className="mb-3">
                  <span className={`inline-block py-1 px-3 text-xs font-medium rounded-full
                    ${video.category === 'NOVO' 
                      ? 'bg-green-100 text-green-800' 
                      : video.category === 'Tecnologia' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-purple-100 text-purple-800'
                    }`}
                  >
                    {video.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                <button className="w-full py-2 border-2 border-blue-600 rounded-md text-blue-600 font-medium transition-colors duration-300 hover:bg-blue-600 hover:text-white">
                  ASSISTIR VÍDEO
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigiTubeSection;