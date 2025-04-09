'use client';

import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<{ [key: number]: boolean }>({ 0: true }); // Primeiro item aberto por padrão
  
  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  const faqItems: FAQItem[] = [
    {
      question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam quia dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
    {
      question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam quia dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
    },
    {
      question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam quia dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
    },
    {
      question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam quia dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
    },
    {
      question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam quia dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
    },
    {
      question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam quia dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
    },
    {
      question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam quia dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
    },
    {
      question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam quia dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
    },
    {
      question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam quia dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
    },
    {
      question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam quia dolor sit amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
    }
  ];

  // Divide os itens em duas colunas
  const leftColumnItems = faqItems.slice(0, 5);
  const rightColumnItems = faqItems.slice(5, 10);

  const renderFAQItem = (item: FAQItem, index: number) => (
    <div 
      key={index} 
      className="rounded-lg overflow-hidden mb-4"
    >
      <button
        className="w-full flex justify-between items-center p-5 bg-[#0a1933] text-white text-left focus:outline-none"
        onClick={() => toggleItem(index)}
      >
        <span>{item.question}</span>
        <span>
          {openItems[index] ? (
            <FiMinus className="text-xl flex-shrink-0 ml-2" />
          ) : (
            <FiPlus className="text-xl flex-shrink-0 ml-2" />
          )}
        </span>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openItems[index] 
            ? 'max-h-[1000px] opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 bg-white text-gray-700">
          {item.answer}
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Encontre suas dúvidas aqui!
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Coluna Esquerda */}
          <div className="w-full md:w-1/2">
            {leftColumnItems.map((item, index) => renderFAQItem(item, index))}
          </div>
          
          {/* Coluna Direita */}
          <div className="w-full md:w-1/2">
            {rightColumnItems.map((item, index) => renderFAQItem(item, index + 5))}
          </div>
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/5500000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Contato via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#fff" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </section>
  );
};

export default FAQSection;