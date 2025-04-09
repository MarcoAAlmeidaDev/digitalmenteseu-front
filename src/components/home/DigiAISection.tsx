'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const DigiAISection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Coluna da Imagem (esquerda) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-lg overflow-hidden bg-gray-100">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/robot-hand.jpg"
                  alt="Braço robótico"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  className="rounded-lg"
                />
                
                {/* Overlay de play para dar a ideia de vídeo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#1333f7] ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coluna do Conteúdo (direita) */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Pequeno ícone decorativo de polegar para cima */}
              <div className="absolute -top-10 right-0 text-yellow-400 w-12 h-12 md:w-16 md:h-16">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
                </svg>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                Digi A.I, Decole no seu conhecimento com nossa ferramenta de inteligência artificial
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
              </p>
              
              <Link 
                href="/digi-ai"
                className="inline-flex items-center bg-[#1333f7] hover:bg-blue-800 text-white py-3 px-6 rounded-full transition-colors"
              >
                Explorar mais sobre o Digi A.I
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigiAISection;