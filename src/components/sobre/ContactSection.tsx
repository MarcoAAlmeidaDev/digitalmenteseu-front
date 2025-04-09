'use client';

import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: <FiMapPin className="text-2xl text-[#0761ff]" />,
      title: 'Endereço',
      details: [
        'Av. Paulista, 1000 - Bela Vista',
        'São Paulo - SP, 01310-100'
      ]
    },
    {
      icon: <FiPhone className="text-2xl text-[#0761ff]" />,
      title: 'Telefone',
      details: [
        '+55 (11) 3456-7890',
        '+55 (11) 98765-4321'
      ]
    },
    {
      icon: <FiMail className="text-2xl text-[#0761ff]" />,
      title: 'E-mail',
      details: [
        'contato@digitalmenteseu.com.br',
        'suporte@digitalmenteseu.com.br'
      ]
    },
    {
      icon: <FiClock className="text-2xl text-[#0761ff]" />,
      title: 'Horário de Atendimento',
      details: [
        'Segunda a Sexta: 9h às 18h',
        'Sábado: 9h às 13h'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">ENTRE EM CONTATO</h2>
          <p className="text-lg text-gray-600">
            Estamos sempre disponíveis para ajudar em sua jornada de transformação digital. 
            Entre em contato conosco pelos canais abaixo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Informações de contato */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{item.icon}</div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <div className="text-gray-600">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="mb-1">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="lg:w-1/2">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Envie-nos uma mensagem</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0761ff] focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0761ff] focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Assunto</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0761ff] focus:border-transparent"
                    placeholder="Assunto da mensagem"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={6} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0761ff] focus:border-transparent"
                    placeholder="Digite sua mensagem aqui..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#0761ff] hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors shadow-md"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;