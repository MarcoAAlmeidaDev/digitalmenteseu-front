// src/components/blog/SmallPostCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/blog';

interface SmallPostCardProps {
  post: Post;
}

export function SmallPostCard({ post }: SmallPostCardProps) {
  return (
    <Link href={`/blog/post/${post.id}`} className="block">
      <article className="flex items-center space-x-4 py-3 hover:bg-gray-50 rounded-lg transition-colors duration-300 cursor-pointer">
        {/* Imagem (Miniatura) */}
        <div className="flex-shrink-0">
          <div className="relative w-16 h-16 rounded overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        </div>
        
        {/* Conteúdo */}
        <div className="min-w-0 flex-1">
          <span className="block text-xs font-medium text-blue-600 mb-1">{post.category}</span>
          <h3 className="text-sm font-semibold text-gray-900 truncate mb-1 hover:text-blue-700 transition-colors">
            {post.title}
          </h3>
          <div className="flex items-center text-xs text-gray-500">
            <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
            <span className="mx-1">•</span>
            <span>{post.views.toLocaleString()} visualizações</span>
          </div>
        </div>
      </article>
    </Link>
  );
}