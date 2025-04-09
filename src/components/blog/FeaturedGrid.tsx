// src/components/blog/FeaturedGrid.tsx
'use client';

import { useEffect, useState } from 'react';
import { FeaturedPostCard } from '@/components/blog/FeaturedPostCard';
import { posts } from '@/data/blogData';
import { Post } from '@/types/blog';

export function FeaturedGrid() {
  // Função para adicionar classes CSS
  const gridStyles = {
    container: "grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 animate-fadeIn min-h-[32rem]",
    mainPost: "md:col-span-7 lg:col-span-6 h-full",
    smallPostsGrid: "md:col-span-5 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 h-full"
  };
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    // Em produção, carregaria do backend ou API
    // Aqui usamos os dados simulados
    setFeaturedPosts(posts.slice(0, 5));
  }, []);

  if (featuredPosts.length === 0) {
    return null;
  }

  return (
    <div className={gridStyles.container}>
      {/* Postagem principal (grande à esquerda) */}
      <div className={gridStyles.mainPost}>
        <FeaturedPostCard post={featuredPosts[0]} size="large" />
      </div>
      
      {/* Grid 2x2 à direita */}
      <div className={gridStyles.smallPostsGrid}>
        {featuredPosts.slice(1, 5).map((post) => (
          <FeaturedPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}