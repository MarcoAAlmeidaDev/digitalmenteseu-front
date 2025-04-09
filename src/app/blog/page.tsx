// src/app/blog/page.tsx
import { Metadata } from 'next';
import React from 'react';
import { Banner } from '@/components/blog/Banner';
import { SearchBar } from '@/components/blog/SearchBar';
import { CategorySelector } from '@/components/blog/CategorySelector';
import { FeaturedGrid } from '@/components/blog/FeaturedGrid';
import { HighlightedPosts } from '@/components/blog/HighlightedPosts';
import { AdBanner } from '@/components/blog/AdBanner';
import { MostReadPosts } from '@/components/blog/MostReadPosts';

// Metadados para SEO
export const metadata: Metadata = {
  title: 'Blog | DigitalmenteSeu',
  description: 'Explore nosso blog com artigos sobre tecnologia, produtos digitais, desenvolvimento pessoal e muito mais.',
  keywords: 'blog, tecnologia, marketing digital, desenvolvimento pessoal, produtos digitais',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Banner principal */}
        <Banner 
          imageUrl="/images/blog/banner.jpg" 
          altText="Pessoa utilizando computador em ambiente de trabalho moderno"
        />
        
        {/* Container principal do conteúdo */}
        <div className="container mx-auto px-4 py-8">
          {/* Barra de busca */}
          <div className="my-8">
            <SearchBar />
          </div>
          
          {/* Seletor de categorias */}
          <section aria-labelledby="categories-heading" className="mb-12">
            <h2 id="categories-heading" className="sr-only">Categorias do Blog</h2>
            <CategorySelector />
          </section>
          
          {/* Grid de destaques */}
          <section aria-labelledby="featured-heading" className="mb-16">
            <h2 id="featured-heading" className="text-2xl font-bold mb-6">Destaques</h2>
            <FeaturedGrid />
          </section>
          
          {/* Grid com Notícias em destaque + Banner de anúncio */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {/* Notícias em destaque */}
            <section aria-labelledby="highlighted-heading" className="lg:col-span-2">
              <div className="flex justify-between items-center mb-6">
                <h2 id="highlighted-heading" className="text-2xl font-bold">Notícias em Destaque</h2>
                <a href="/blog/mais-noticias" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                  Ver tudo
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              <HighlightedPosts />
            </section>
            
            {/* Banner de anúncio */}
            <section className="lg:col-span-1 flex flex-col justify-start">
              <h2 className="text-2xl font-bold mb-6">Publicidade</h2>
              <AdBanner />
            </section>
          </div>
          
          {/* Mais lidas da semana */}
          <section aria-labelledby="most-read-heading" className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <h2 id="most-read-heading" className="text-2xl font-bold">Mais lidas da semana</h2>
              <a href="/blog/mais-lidas" className="text-blue-600 hover:text-blue-800 transition-colors flex items-center">
                Ver tudo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <MostReadPosts />
          </section>
        </div>
      </main>
    </div>
  );
}