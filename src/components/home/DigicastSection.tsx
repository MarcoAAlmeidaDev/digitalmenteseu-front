'use client';

import React from 'react';
import Link from 'next/link';

const DigicastSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Conteúdo Textual (Esquerda) */}
          <div className="w-full lg:w-1/2 z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 relative">
              Se atualize em qualquer lugar com o Digicast
              <span className="absolute -bottom-3 left-0 w-[280px] h-2 bg-orange-400 rounded-full"></span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8">
              Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
            </p>
            
            <Link 
              href="/digicast"
              className="inline-flex items-center bg-[#1333f7] hover:bg-blue-800 text-white py-3 px-6 rounded-full transition-colors shadow-md"
            >
              Explorar mais sobre o Digicast
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
          
          {/* MacBook com vídeo do YouTube (Direita) */}
          <div className="w-full lg:w-1/2 relative">
            {/* Fundo circular azul */}
            <div className="absolute inset-0 bg-blue-600 rounded-full transform scale-105 z-0"></div>
            
            {/* MacBook Container */}
            <div className="relative z-10 mx-auto px-6 py-8">
              {/* MacBook Body */}
              <div className="macbook">
                <div className="screen">
                  <div className="viewport">
                    {/* YouTube Iframe */}
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/rWWeRNY4_1Q?si=Eb9WQYTzuAkTceSG" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="base"></div>
                <div className="notch"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS para o MacBook */}
      <style jsx>{`
        .macbook {
          width: 100%;
          position: relative;
          perspective: 1000px;
        }
        
        .screen {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 62.5%; /* 16:10 aspect ratio */
          background: #1e1e1e;
          border-radius: 12px 12px 0 0;
          border: 2px solid #585858;
          border-bottom: none;
          transform-origin: bottom center;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        .viewport {
          position: absolute;
          top: 5%;
          left: 2.5%;
          width: 95%;
          height: 90%;
          background: #000;
          overflow: hidden;
        }
        
        .base {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 5%;
          background: linear-gradient(to bottom, #b3b3b3, #d1d1d1);
          border-radius: 0 0 12px 12px;
          border: 2px solid #b3b3b3;
          transform-origin: top center;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .notch {
          position: absolute;
          width: 30%;
          height: 0;
          padding-bottom: 1.5%;
          bottom: 5%;
          left: 35%;
          background: linear-gradient(to bottom, #b3b3b3, #d6d6d6);
          border-radius: 0 0 8px 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          z-index: 1;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .screen {
            border-radius: 8px 8px 0 0;
          }
          
          .base {
            padding-bottom: 7%;
          }
          
          .notch {
            width: 40%;
            left: 30%;
          }
        }
      `}</style>
    </section>
  );
};

export default DigicastSection;