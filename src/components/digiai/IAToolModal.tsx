import React from 'react';
import Image from 'next/image';
import { FiX, FiExternalLink, FiShare2, FiThumbsUp, FiCalendar, FiStar } from 'react-icons/fi';
import { VideoEmbedHelper } from '@/components/helpers/VideoEmbedHelper';
import { IATool } from '@/types/tools';

interface IAToolModalProps {
  tool: IATool;
  isOpen: boolean;
  onClose: () => void;
}

const IAToolModal: React.FC<IAToolModalProps> = ({ tool, isOpen, onClose }) => {
  if (!isOpen) return null;

  // Traduzir categorias para português
  const translateCategory = (category: string) => {
    const translations: { [key: string]: string } = {
      'text': 'Texto',
      'image': 'Imagem',
      'audio': 'Áudio',
      'video': 'Vídeo',
      'productivity': 'Produtividade',
      'research': 'Pesquisa',
      'seo': 'SEO',
      'marketing': 'Marketing'
    };
    
    return translations[category] || category;
  };

  // Formatar data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  // Impedir propagação de clique para o overlay
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={handleContentClick}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 p-2 rounded-full text-gray-600 transition-colors z-10"
          aria-label="Fechar"
        >
          <FiX size={20} />
        </button>
        
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {/* Logo e informações básicas */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-white shadow-md border border-gray-200 relative">
                <Image
                  src={tool.logo || '/images/icon-digital.svg'}
                  alt={tool.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-2xl font-bold text-gray-800">{tool.name}</h2>
                <div className="flex items-center space-x-2">
                  <span className="flex items-center">
                    <FiThumbsUp size={16} className="text-blue-500 mr-1" />
                    <span className="text-gray-600 font-medium">{tool.upvotes}</span>
                  </span>
                </div>
              </div>
              
              <div className="mb-4">
                <span className={`text-sm px-3 py-1 rounded-full ${getPricingBadgeColor()} inline-block mr-2`}>
                  {tool.pricing === 'free' ? 'Gratuito' : tool.pricing === 'paid' ? 'Pago' : 'Freemium'}
                </span>
                <span className="text-sm text-gray-500 flex items-center">
                  <FiCalendar size={14} className="mr-1" />
                  Adicionado em {formatDate(tool.added)}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4">
                {tool.longDescription || tool.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.categories.map((category, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700"
                  >
                    {translateCategory(category)}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                <a 
                  href={tool.website || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-1 transition-colors"
                >
                  <FiExternalLink size={16} />
                  Acessar Ferramenta
                </a>
                
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-1 transition-colors">
                  <FiShare2 size={16} />
                  Compartilhar
                </button>
              </div>
            </div>
          </div>
          
          {/* Detalhes de preço, se disponíveis */}
          {tool.pricingDetails && (
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
              <h3 className="font-semibold text-gray-800 mb-2">Detalhes de Preço</h3>
              <p className="text-gray-600">{tool.pricingDetails}</p>
            </div>
          )}
          
          {/* Vídeo, se disponível */}
          {tool.videoUrl && (
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4">Como funciona</h3>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <VideoEmbedHelper url={tool.videoUrl} title={`Video demonstrativo de ${tool.name}`} />
              </div>
            </div>
          )}
          
          {/* Alternativas similares */}
          {tool.alternatives && tool.alternatives.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-4">Alternativas Similares</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tool.alternatives.map((alt, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg text-center hover:bg-gray-100 cursor-pointer">
                    <span className="text-gray-700">{alt}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Seção de avaliações - mockup */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Avaliações dos Usuários</h3>
            <div className="flex items-center mb-6">
              <div className="flex items-center text-yellow-400 mr-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar
                    key={star}
                    size={24}
                    fill={star <= 4 ? 'currentColor' : 'none'}
                    className={star <= 4 ? 'text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-800">4.0</span>
              <span className="text-gray-500 ml-2">(12 avaliações)</span>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">Maria S.</h4>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar
                        key={star}
                        size={16}
                        fill={star <= 5 ? 'currentColor' : 'none'}
                        className={star <= 5 ? 'text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">Ferramenta excelente! Economizou muito tempo no meu fluxo de trabalho diário. Recomendo para quem busca automatizar tarefas repetitivas.</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">Carlos B.</h4>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar
                        key={star}
                        size={16}
                        fill={star <= 4 ? 'currentColor' : 'none'}
                        className={star <= 4 ? 'text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">A interface é bem intuitiva e os resultados são muito bons. Contudo, a versão gratuita é bastante limitada.</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-semibold">Juliana M.</h4>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FiStar
                        key={star}
                        size={16}
                        fill={star <= 3 ? 'currentColor' : 'none'}
                        className={star <= 3 ? 'text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">Funciona bem para casos simples, mas ainda tem muito a melhorar para necessidades mais avançadas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IAToolModal;