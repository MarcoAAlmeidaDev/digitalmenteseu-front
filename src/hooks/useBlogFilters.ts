// src/hooks/useBlogFilters.ts
import { useState, useEffect } from 'react';
import { Post } from '@/types/blog';
import { posts as allPosts } from '@/data/blogData';

export default function useBlogFilters() {
  const [posts, setPosts] = useState<Post[]>(allPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Aplicar filtros quando o termo de busca ou categoria mudar
  useEffect(() => {
    let filteredPosts = [...allPosts];
    
    // Filtrar por termo de busca
    if (searchTerm) {
      filteredPosts = filteredPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filtrar por categoria
    if (activeCategory !== 'Todos') {
      filteredPosts = filteredPosts.filter(post => 
        post.category === activeCategory
      );
    }
    
    setPosts(filteredPosts);
  }, [searchTerm, activeCategory]);

  // Funções para manipular os filtros
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  // Posts segmentados para diferentes seções
  const featuredPosts = posts.slice(0, 5);
  const highlightedPosts = posts.slice(5, 9);
  const mostReadPosts = [...posts].sort((a, b) => b.views - a.views).slice(0, 5);

  return {
    posts,
    searchTerm,
    activeCategory,
    handleSearch,
    handleCategoryChange,
    featuredPosts,
    highlightedPosts,
    mostReadPosts
  };
}