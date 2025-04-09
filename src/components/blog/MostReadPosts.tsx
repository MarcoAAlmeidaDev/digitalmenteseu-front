// src/components/blog/MostReadPosts.tsx
'use client';

import { useEffect, useState } from 'react';
import { SmallPostCard } from '@/components/blog/SmallPostCard';
import { posts } from '@/data/blogData';
import { Post } from '@/types/blog';

export function MostReadPosts() {
  const [mostReadPosts, setMostReadPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    // Em produção, carregaria do backend ou API
    // Aqui ordenamos por visualizações
    const sortedPosts = [...posts].sort((a, b) => b.views - a.views).slice(0, 5);
    setMostReadPosts(sortedPosts);
  }, []);

  if (mostReadPosts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6 animate-fadeIn">
      <div className="space-y-4 divide-y divide-gray-100">
        {mostReadPosts.map((post) => (
          <SmallPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}