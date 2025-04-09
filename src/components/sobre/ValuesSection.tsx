'use client';

import React from 'react';
import { 
  FiStar, 
  FiTrendingUp, 
  FiUsers, 
  FiShield, 
  FiAward, 
  FiRefreshCw 
} from 'react-icons/fi';

const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: <FiStar className="text-3xl text-[#0761ff]" />,
      title: 'Excelência',
      description: 'Buscamos a excelência em tudo o que fazemos, superando expectativas e entregando resultados excepcionais.'
    },
    {
      icon: <FiTrendingUp className="text-3xl text-[#0761ff]" />,
      title: 'Inovação',
      description: 'Estamos sempre à frente, antecipando tendências e implementando soluções inovadoras que geram impacto.'
    },
    {
      icon: <FiUsers className="text-3xl text-[#0761ff]" />,
      title: 'Colaboração',
      description: 'Trabalhamos em parceria com nossos clientes e entre nossa equipe, unindo forças para alcançar objetivos comuns.'
    },
    {
      icon: <FiShield className="text-3xl text-[#0761ff]" />,
      title: 'Integridade',
      description: 'Atuamos com ética, transparência e honestidade em todas as nossas relações e decisões.'
    },
    {
      icon: <FiAward className="text-3xl text-[#0761ff]" />,
      title: 'Qualidade',
      description: 'Comprometemo-nos com os mais altos padrões de qualidade, oferecendo soluções robustas e confiáveis.'
    },
    {
      icon: <FiRefreshCw className="text-3xl text-[#0761ff]" />,
      title: 'Adaptabilidade',
      description: 'Somos ágeis e flexíveis, nos adaptando rapidamente às mudanças e evoluindo constantemente.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">VALORES QUE NOS GUIAM</h2>
          <p className="text-lg text-gray-600">
            Nossos valores são os pilares que sustentam nossa cultura e orientam 
            nossas decisões diárias. Eles refletem quem somos e o que defendemos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Citação */}
        <div className="mt-16 p-10 bg-[#fe6905] rounded-2xl text-white text-center max-w-4xl mx-auto">
          <div className="text-6xl font-serif opacity-50 mb-4">"</div>
          <p className="text-xl md:text-2xl font-medium mb-6">
            Não buscamos apenas desenvolver produtos digitais, mas criar 
            experiências transformadoras que impulsionam negócios e conectam pessoas.
          </p>
          <p className="font-bold text-lg">— Fundador da DigitalmenteSEU</p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;