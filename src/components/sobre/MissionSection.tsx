'use client';

import React from 'react';
import { FiTarget, FiEye, FiHeart } from 'react-icons/fi';

const MissionSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            NOSSA ESSÊNCIA
          </h2>
          <p className="text-lg text-gray-600">
            Acreditamos no poder da transformação digital para criar um impacto positivo 
            nos negócios e na sociedade. Conheça o que nos motiva a fazer o que fazemos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Missão */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="bg-[#0761ff] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FiTarget className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
            <p className="text-gray-600">
              Transformar a presença digital dos nossos clientes, gerando valor e resultados 
              concretos através de soluções tecnológicas inovadoras e estratégias personalizadas.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="bg-[#0761ff] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FiEye className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
            <p className="text-gray-600">
              Ser reconhecida como a principal parceira de transformação digital, 
              impulsionando o crescimento sustentável de empresas em todo o Brasil 
              com soluções que antecipam tendências.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="bg-[#0761ff] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <FiHeart className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
            <p className="text-gray-600">
              Inovação, excelência, transparência, compromisso com resultados 
              e foco no cliente são os valores que guiam todas as nossas ações 
              e decisões, todos os dias.
            </p>
          </div>
        </div>

        {/* Imagem central com texto sobreposto */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <p className="text-gray-600">Imagem da equipe em ação</p>
            {/* Descomente quando tiver a imagem disponível 
            <Image
              src="/images/sobre-mission.jpg"
              alt="Equipe DigitalmenteSEU em ação"
              fill
              style={{ objectFit: 'cover' }}
            />
            */}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-8 md:p-12 text-white max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Somos apaixonados por tecnologia e por transformar ideias em realidade
              </h3>
              <p className="text-white/90">
                Cada projeto é uma oportunidade de criar algo extraordinário 
                que impulsiona o sucesso dos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;