import React from 'react';
import Image from 'next/image';
import { FiExternalLink, FiThumbsUp } from 'react-icons/fi';
import { IATool } from '@/types/tools';

interface IAToolCardProps {
  tool: IATool;
  onClick: () => void;
}

const IAToolCard: React.FC<IAToolCardProps> = ({ tool, onClick }) => {
  // Limitar a descrição a um número máximo de caracteres
  const truncateDescription = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Determinar a cor de fundo baseada na categoria principal
  const getBgColor = () => {
    const mainCategory = tool.categories[0];
    
    switch (mainCategory) {
      case 'text':
        return 'bg-blue-50';
      case 'image':
        return 'bg-green-50';
      case 'audio':
        return 'bg-yellow-50';
      case 'video':
        return 'bg-purple-50';
      case 'productivity':
        return 'bg-indigo-50';
      case 'research':
        return 'bg-red-50';
      case 'seo':
        return 'bg-orange-50';
      case 'marketing':
        return 'bg-teal-50';
      default:
        return 'bg-gray-50';
    }
  };

  // Determinar a cor do badge de preço
  const getPricingBadgeColor = () => {
    switch (tool.pricing) {
      case 'free':
        return 'bg-green-100 text-green-800';
      case 'paid':
        return 'bg-purple-100 text-purple-800';
      case 'freemium':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      className={`rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer group border border-gray-200 ${getBgColor()}`}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          {/* Logo da ferramenta */}
          <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-white shadow-sm">
            <Image
              src={tool.logo || '/images/icon-digital.svg'}
              alt={tool.name}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Upvotes */}
          <div className="flex flex-col items-center">
            <FiThumbsUp size={16} className="text-blue-500 mb-1" />
            <span className="text-gray-600 font-medium">{tool.upvotes}</span>
          </div>
        </div>
        
        {/* Nome da ferramenta */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {tool.name}
        </h3>
        
        {/* Descrição resumida */}
        <p className="text-gray-600 mb-4 text-sm h-12">
          {truncateDescription(tool.description)}
        </p>
        
        {/* Tags e preço */}
        <div className="flex flex-wrap gap-2 mb-3">
          {/* Badge de preço */}
          <span className={`text-xs px-2 py-1 rounded-full ${getPricingBadgeColor()}`}>
            {tool.pricing === 'free' ? 'Gratuito' : tool.pricing === 'paid' ? 'Pago' : 'Freemium'}
          </span>
          
          {/* Mostrar até 2 categorias */}
          {tool.categories.slice(0, 2).map((category, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
            >
              {category === 'text' ? 'Texto' : 
               category === 'image' ? 'Imagem' : 
               category === 'audio' ? 'Áudio' : 
               category === 'video' ? 'Vídeo' : 
               category === 'productivity' ? 'Produtividade' : 
               category === 'research' ? 'Pesquisa' : 
               category === 'seo' ? 'SEO' : 
               category === 'marketing' ? 'Marketing' : category}
            </span>
          ))}
          
          {/* Indicador de mais categorias */}
          {tool.categories.length > 2 && (
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
              +{tool.categories.length - 2}
            </span>
          )}
        </div>
        
        {/* Botão para ver mais */}
        <div className="flex justify-between items-center">
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
            Ver detalhes
          </button>
          
          <a 
            href="#"
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600"
          >
            <FiExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IAToolCard;