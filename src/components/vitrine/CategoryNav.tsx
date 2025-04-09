// src/components/vitrine/CategoryNav.tsx
import React from 'react';
import Link from 'next/link';
import { Category } from '@/types/product';

interface CategoryNavProps {
  categories: Category[];
  activeCategory?: string;
}

export function CategoryNav({ categories, activeCategory }: CategoryNavProps) {
  return (
    <div className="overflow-x-auto hide-scrollbar py-4">
      <div className="flex space-x-3 min-w-max px-2">
        <Link
          href="/vitrine"
          className={`px-4 py-2 text-sm font-medium rounded-full ${
            !activeCategory
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          } transition-colors whitespace-nowrap`}
        >
          Todos
        </Link>
        
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/vitrine/categoria/${category.slug}`}
            className={`px-4 py-2 text-sm font-medium rounded-full ${
              activeCategory === category.slug
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            } transition-colors whitespace-nowrap`}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}