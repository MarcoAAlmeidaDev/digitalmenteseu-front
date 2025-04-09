// src/components/blog/CategorySelector.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { categories } from '@/data/blogData';

export function CategorySelector() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Definir a categoria ativa com base na URL atual
  useEffect(() => {
    // Se estamos em uma página de categoria
    if (pathname.includes('/blog/categoria/')) {
      const slug = pathname.split('/').pop() || '';
      const category = categories.find(cat => cat.slug === slug);
      if (category) {
        setActiveCategory(category.name);
      }
    } else {
      // Se estamos na página principal do blog
      setActiveCategory('Todos');
    }
  }, [pathname]);

  const handleCategoryChange = (categoryName: string) => {
    setActiveCategory(categoryName);
    
    if (categoryName === 'Todos') {
      router.push('/blog');
    } else {
      const category = categories.find(cat => cat.name === categoryName);
      if (category) {
        router.push(`/blog/categoria/${category.slug}`);
      }
    }
  };

  return (
    <div className="w-full py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.name)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.name
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-blue-100'
            }`}
            aria-current={activeCategory === category.name ? 'page' : undefined}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
}