// src/components/blog/TableOfContents.tsx
'use client';

import { useEffect, useState } from 'react';

export function TableOfContents() {
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  // Função para gerar IDs para os cabeçalhos que não têm
  const generateId = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, '-');
  };

  // Capturar todos os cabeçalhos h2 e h3 do artigo
  useEffect(() => {
    // Selecionamos apenas artigo > h2, h3 para garantir que pegamos apenas os cabeçalhos do conteúdo
    const articleHeadings = document.querySelectorAll('article h2, article h3');
    
    const headingsArray = Array.from(articleHeadings).map((heading) => {
      const el = heading as HTMLElement;
      
      // Se o cabeçalho não tiver ID, criamos um
      if (!el.id) {
        el.id = generateId(el.textContent || '');
      }
      
      return {
        id: el.id,
        text: el.textContent || '',
        level: parseInt(el.tagName.substring(1), 10), // Extrair o número do elemento (H2 -> 2, H3 -> 3)
      };
    });
    
    setHeadings(headingsArray);
  }, []);

  // Detectar qual seção está visível na tela
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -80% 0px', // Considerar um elemento como visível quando estiver 20% visível no topo
        threshold: 0.1,
      }
    );

    // Observar todos os cabeçalhos
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  // Se não houver cabeçalhos, não renderizar nada
  if (headings.length === 0) {
    return (
      <div className="text-gray-500 text-sm italic">
        Este artigo não possui seções marcadas.
      </div>
    );
  }

  // Função para scrollar até o cabeçalho quando clicar no índice
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="toc text-sm">
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li 
            key={heading.id}
            className={`
              ${heading.level === 3 ? 'ml-4' : ''} 
              ${activeId === heading.id ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'}
            `}
          >
            <button
              onClick={() => scrollToHeading(heading.id)}
              className="text-left w-full block transition-colors duration-200 hover:underline"
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}