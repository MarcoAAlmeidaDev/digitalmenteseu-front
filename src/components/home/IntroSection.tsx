import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const IntroSection: React.FC = () => {
  return (
    <section className="relative bg-white py-16 md:py-20 overflow-hidden">
      {/* Manchas com formas geométricas - apenas visíveis em telas maiores */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden hidden md:block">
        <div className="absolute right-0 top-10 w-[42rem] h-[38rem] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-[#f9a012] opacity-100 transform translate-x-1/4 rotate-12"></div>
        <div className="absolute right-20 bottom-20 w-[40rem] h-[36rem] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] bg-[#1333f7] opacity-100 transform translate-x-1/4 -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-screen-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 text-gray-900 mx-auto">
            Empoderando Você Através do Conhecimento
            {/* Sublinhado laranja abaixo de "Você" */}
            <span className="absolute left-[38%] md:left-[42%] lg:left-[43%] right-[40%] md:right-[42%] lg:right-[43%] bottom-[25%] h-2 bg-[#f9a012] rounded-full"></span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 mx-auto mb-10 px-4 md:max-w-screen-lg lg:max-w-screen-xl">
            Imagine um lugar onde cada clique abre uma porta para novas oportunidades. No DigitalmenteSEU, combinamos a inspiração de um blog enriquecedor com a praticidade de uma loja virtual, oferecendo uma ampla gama de cursos online e produtos digitais, incluindo uma seleção diversificada de conteúdos criados por diferentes produtores. Seja qual for o seu nicho, aqui você encontrará os recursos necessários para impulsionar sua jornada.
          </p>
        </div>
        
        {/* Browser mockup com imagem semelhante à referência */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Browser window */}
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl border border-gray-200">
              {/* Browser Top Bar */}
              <div className="w-full h-8 bg-gray-100 flex items-center px-3 border-b border-gray-200">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto w-2/3 h-5 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">
                  https://digitalmenteseu.com.br/blog
                </div>
                <div className="flex space-x-2">
                  <div className="w-4 h-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M12.7 15.3a1 1 0 01-1.4 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 011.4 1.4L8.42 10l4.3 4.3z" />
                    </svg>
                  </div>
                  <div className="w-4 h-4 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M7.3 15.3a1 1 0 001.4 1.4l5-5a1 1 0 000-1.4l-5-5a1 1 0 00-1.4 1.4L11.58 10l-4.3 4.3z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Website Content */}
              <div className="w-full aspect-[16/9] relative bg-white">
                <Image
                  src="/images/website-screenshot.jpg"
                  alt="Blog Preview"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="w-full h-full"
                />
              </div>
            </div>
            
            {/* Linha tracejada estilizada */}
            <div className="w-3/4 h-12 mx-auto relative mt-4">
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
            
            {/* Botão de acesso ao blog */}
            <div className="mt-2 text-center">
              <Link
                href="/blog"
                className="bg-[#ff6600] hover:bg-[#ff7a1a] text-white font-medium py-3 px-10 rounded-full transition-colors shadow-md hover:shadow-lg text-lg"
              >
                Acessar Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;