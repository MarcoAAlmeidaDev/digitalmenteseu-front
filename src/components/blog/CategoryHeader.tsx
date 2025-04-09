// src/components/blog/CategoryHeader.tsx
import Image from 'next/image';

interface CategoryHeaderProps {
  categoryName: string;
}

export function CategoryHeader({ categoryName }: CategoryHeaderProps) {
  // Função para obter uma imagem de fundo com base no nome da categoria
  const getCategoryBgImage = (category: string): string => {
    // Em produção, você teria imagens específicas para cada categoria
    const categoryImages: Record<string, string> = {
      'Automação': '/images/blog/categories/automacao.jpg',
      'Bem-Estar e Saúde Mental': '/images/blog/categories/bem-estar.jpg',
      'Desenvolvimento Pessoal': '/images/blog/categories/desenvolvimento-pessoal.jpg',
      'Marketing Digital': '/images/blog/categories/marketing-digital.jpg',
      'Produtos Digitais': '/images/blog/categories/produtos-digitais.jpg',
      'Tecnologia': '/images/blog/categories/tecnologia.jpg',
      'Inteligência Artificial': '/images/blog/categories/ia.jpg',
      // Adicione mais categorias conforme necessário
    };
    
    // Retorna a imagem da categoria ou uma imagem padrão
    return categoryImages[category] || '/images/blog/categories/default.jpg';
  };

  return (
    <div className="relative h-64 md:h-80 w-full">
      <Image
        src={getCategoryBgImage(categoryName)}
        alt={categoryName}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Conteúdo do cabeçalho */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm inline-block mb-4">
          Categoria
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {categoryName}
        </h1>
        <p className="text-lg text-black max-w-2xl">
          Explore nossos melhores artigos e dicas sobre {categoryName}
        </p>
      </div>
    </div>
  );
}