'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#e3fffe] py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Texto à esquerda */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 relative">
              SOMOS A DIGITALMENTESEU
              <span className="block">TRANSFORMANDO NEGÓCIOS</span>
              <span className="absolute left-0 -bottom-3 w-2/3 h-2 bg-orange-500 transform rounded-full"></span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Nossa missão é transformar ideias em soluções digitais inovadoras 
              que geram impacto real para empresas e pessoas. Combinamos tecnologia 
              e criatividade para enfrentar os desafios do mundo digital.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-5 rounded-xl shadow-sm w-40">
                <p className="text-3xl font-bold text-[#0761ff]">12+</p>
                <p className="text-gray-600">Anos de experiência</p>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm w-40">
                <p className="text-3xl font-bold text-[#0761ff]">500+</p>
                <p className="text-gray-600">Projetos entregues</p>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm w-40">
                <p className="text-3xl font-bold text-[#0761ff]">98%</p>
                <p className="text-gray-600">Clientes satisfeitos</p>
              </div>
            </div>
          </div>
          
          {/* MacBook com imagem à direita */}
          <div className="lg:w-1/2 order-1 lg:order-2 relative">
            {/* Fundo circular decorativo */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#0761ff] rounded-full opacity-10 -z-10"></div>
            
            {/* Container do MacBook */}
            <div className="relative w-full max-w-xl mx-auto">
              {/* Corpo do MacBook */}
              <div className="relative w-full bg-[#1e1e1e] rounded-t-lg pt-3 pb-1 px-3 shadow-xl">
                {/* Barra superior com câmera */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-gray-600 mt-1"></div>
                
                {/* Tela */}
                <div className="bg-[#121212] aspect-video rounded overflow-hidden">
                  {/* Imagem na tela */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/quem-somos.png"
                      alt="Dashboard de projeto digital"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Base do MacBook */}
              <div className="relative w-full h-3 bg-[#1e1e1e] rounded-b-lg shadow-xl"></div>
              
              {/* Suporte/Stand */}
              <div className="relative w-1/4 h-1 bg-[#1e1e1e] mx-auto rounded-b"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;