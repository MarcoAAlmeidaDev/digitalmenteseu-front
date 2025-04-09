// src/types/product.ts

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    reviewCount: number;
    image: string;
    category: string;
    featured?: boolean;
    author: string;
  }
  
  export interface Category {
    id: string;
    name: string;
    slug: string;
  }