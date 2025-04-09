import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#e3fffe] py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Versão Mobile - Conteúdo centralizado */}
        <div className="flex flex-col items-center text-center md:hidden">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            DESCUBRA O POTENCIAL DOS 
            <span className="block relative">
              PRODUTOS DIGITAIS
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-2/3 h-2 bg-orange-500 transform rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            Transforme suas ideias em soluções digitais eficientes e atrativas. 
            Nossos especialistas irão guiá-lo em toda a jornada da criação à implementação.
          </p>
          
          <Link 
            href="/registro" 
            className="inline-block bg-[#0761ff] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg mb-10"
          >
            Desbloqueie seu potencial
          </Link>
          
          {/* Imagem abaixo do botão na versão mobile */}
          <div className="relative w-full h-[300px]">
            <Image
              src="/images/woman-tablet.png"
              alt="Mulher usando tablet com produtos digitais"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
        
        {/* Versão Desktop - Layout original com flex-row */}
        <div className="hidden md:flex md:flex-row items-center justify-between">
          {/* Conteúdo textual à esquerda */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
              DESCUBRA O POTENCIAL DOS 
              <span className="block relative">
                PRODUTOS DIGITAIS
                <span className="absolute left-0 -bottom-2 w-2/3 h-2 bg-orange-500 transform rounded-full"></span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              Transforme suas ideias em soluções digitais eficientes e atrativas. 
              Nossos especialistas irão guiá-lo em toda a jornada da criação à implementação.
            </p>
            
            <Link 
              href="/register" 
              className="inline-block bg-[#0761ff] hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              Desbloqueie seu potencial
            </Link>
          </div>
          
          {/* Imagem à direita - apenas para desktop */}
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[500px] lg:h-[600px]">
              <Image
                src="/images/woman-tablet.png"
                alt="Mulher usando tablet com produtos digitais"
                fill
                style={{ objectFit: 'contain' }}
                priority
                className="transform translate-x-8"
              />
              
              {/* Elementos decorativos - apenas desktop */}
              <div className="absolute -left-16 top-0 w-32 h-32 opacity-80 transform rotate-12">
                <Image
                  src="/images/icon-digital.svg"
                  alt="Ícone digital"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              
              <div className="absolute -right-8 top-16 w-24 h-24 opacity-80 transform -rotate-6">
                <Image
                  src="/images/icon-idea.svg"
                  alt="Ícone ideia"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;