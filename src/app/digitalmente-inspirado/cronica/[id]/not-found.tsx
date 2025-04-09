// src/app/digitalmente-inspirado/cronica/[id]/not-found.tsx
import Link from 'next/link';

export default function ChronicleNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Crônica não encontrada</h2>
        <p className="text-lg text-gray-600 mb-8">
          A crônica que você está procurando não foi encontrada ou pode ter sido removida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/digitalmente-inspirado" 
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Voltar para Digitalmente Inspirado
          </Link>
          <Link 
            href="/" 
            className="px-6 py-3 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition-colors"
          >
            Ir para a Página Inicial
          </Link>
        </div>
      </div>
    </div>
  );
}