// src/components/blog/SearchHeader.tsx
interface SearchHeaderProps {
    searchQuery: string;
    resultsCount: number;
  }
  
  export function SearchHeader({ searchQuery, resultsCount }: SearchHeaderProps) {
    return (
      <div className="relative bg-gray-900 py-16 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90" />
        
        {/* Conteúdo do cabeçalho */}
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {searchQuery 
              ? `Resultados da busca: "${searchQuery}"`
              : 'Resultados da busca'}
          </h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {resultsCount === 0 
              ? 'Nenhum artigo encontrado. Tente usar outras palavras-chave.'
              : `Encontramos ${resultsCount} ${resultsCount === 1 ? 'artigo' : 'artigos'} para sua busca.`}
          </p>
        </div>
      </div>
    );
  }