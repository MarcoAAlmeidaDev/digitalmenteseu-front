// src/types/tools.ts
export interface IATool {
    id: string;
    name: string;
    logo: string;
    description: string;
    longDescription?: string;
    categories: string[];
    pricing: 'free' | 'paid' | 'freemium';
    pricingDetails?: string;
    website?: string;
    videoUrl?: string;
    alternatives?: string[];
    added: string;
    upvotes: number;
    tags?: string[];
  }