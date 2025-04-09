// src/components/blog/HighlightedPosts.tsx
'use client';

import { useEffect, useState } from 'react';
import { HighlightedPostCard } from '@/components/blog/HighlightedPostCard';
import { posts } from '@/data/blogData';
import { Post } from '@/types/blog';

export function HighlightedPosts() {
  const [highlightedPosts, setHighlightedPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    // Em produção, carregaria do backend ou API
    setHighlightedPosts(posts.slice(5, 8)); // Reduzindo para 3 posts para melhor visualização
  }, []);

  if (highlightedPosts.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4 animate-fadeIn"> {/* Reduzido o espaçamento de 6 para 4 */}
      {highlightedPosts.map((post) => (
        <HighlightedPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}