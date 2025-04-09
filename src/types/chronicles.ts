// src/types/chronicles.ts

export interface Author {
    id: string;
    name: string;
    image: string;
    role: string;
    bio: string;
    social: {
      linkedin?: string;
      twitter?: string;
      instagram?: string;
      facebook?: string;
    };
  }
  
  export interface Chronicle {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    coverImage: string;
    date: string;
    author: Author;
    readTime: number;
    categories: string[];
    tags: string[];
  }