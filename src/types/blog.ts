// src/types/blog.ts

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  date: string;
  author: string;
  readTime: number;
  tags: string[];
  views: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}