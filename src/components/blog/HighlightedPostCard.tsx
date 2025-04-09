// src/components/blog/HighlightedPostCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/blog';

interface HighlightedPostCardProps {
  post: Post;
}

export function HighlightedPostCard({ post }: HighlightedPostCardProps) {
  return (
    <Link href={`/blog/post/${post.id}`} className="block">
      <article className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 bg-white hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300 border border-gray-100 hover:shadow-md cursor-pointer">
        {/* Conteúdo (Esquerda) */}
        <div className="md:col-span-2 flex flex-col">
          <span className="text-sm font-medium text-blue-600 mb-2">{post.category}</span>
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-700 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
          <div className="mt-auto flex items-center text-sm text-gray-500">
            <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime} min de leitura</span>
          </div>
        </div>
        
        {/* Imagem (Direita) */}
        <div className="order-first md:order-last md:col-span-1">
          <div className="relative w-full h-48 md:h-full rounded overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}