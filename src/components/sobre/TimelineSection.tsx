'use client';

import React from 'react';

const TimelineSection: React.FC = () => {
  const timelineEvents = [
    {
      year: '2014',
      title: 'O início da jornada',
      description: 'Nascemos com a missão de transformar a presença digital de pequenas empresas no Brasil.'
    },
    {
      year: '2016',
      title: 'Expansão da equipe',
      description: 'Crescemos para 15 especialistas e expandimos nossa atuação para o mercado nacional.'
    },
    {
      year: '2018',
      title: 'Lançamento do DigiTube',
      description: 'Lançamos nossa primeira plataforma proprietária, revolucionando a gestão de conteúdo digital.'
    },
    {
      year: '2020',
      title: 'Inovação em tempos difíceis',
      description: 'Durante a pandemia, ajudamos mais de 200 empresas na sua transformação digital.'
    },
    {
      year: '2022',
      title: 'Inteligência Artificial',
      description: 'Integramos soluções de IA aos nossos produtos, com o lançamento do DigiAI.'
    },
    {
      year: '2025',
      title: 'Presente e futuro',
      description: 'Hoje, somos referência em soluções digitais, com clientes em todo o Brasil e América Latina.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">NOSSA HISTÓRIA</h2>
          <p className="text-lg text-gray-600">
            Desde o início, nossa trajetória foi marcada pelo compromisso com a inovação 
            e com resultados excepcionais para nossos clientes.
          </p>
        </div>

        <div className="relative">
          {/* Linha central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row gap-8 items-center md:items-start"
              >
                {/* Para layouts maiores que MD, alternar entre esquerda e direita */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:order-1' : 'md:order-3'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
                
                {/* Círculo central com ano - visível apenas em MD+ */}
                <div className="hidden md:flex md:w-0 items-center justify-center md:order-2 relative z-10">
                  <div className="w-16 h-16 p-5 rounded-2xl bg-[#fe6905] text-white flex items-center justify-center font-bold">
                    {event.year}
                  </div>
                </div>
                
                {/* Em telas pequenas, o ano aparece no topo do card */}
                <div className="md:hidden text-xl font-bold text-[#0761ff] mb-2">
                  {event.year}
                </div>
                
                {/* Espaço vazio para o lado oposto em MD+ */}
                <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Chamada final */}
        <div className="text-center max-w-2xl mx-auto mt-20">
          <p className="text-xl text-gray-700 font-medium">
            Esta é apenas parte da nossa história, que continua sendo escrita todos os dias 
            com dedicação, inovação e parceria com nossos clientes.
          </p>
          <div className="mt-8">
            <button className="bg-[#0761ff] hover:bg-blue-700 text-white py-3 px-8 rounded-full transition-colors shadow-md">
              Faça parte da nossa história
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;