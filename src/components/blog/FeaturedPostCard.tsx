// src/components/blog/FeaturedPostCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/types/blog';

interface FeaturedPostCardProps {
  post: Post;
  size?: 'large' | 'small';
}

export function FeaturedPostCard({ post, size = 'small' }: FeaturedPostCardProps) {
  return (
    <Link href={`/blog/post/${post.id}`} className="block h-full">
      <article 
        className={`relative rounded-lg overflow-hidden group transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
          size === 'large' ? 'h-full min-h-[24rem]' : 'h-full min-h-[16rem]'
        } cursor-pointer`}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes={size === 'large' ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 33vw'}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
        </div>
        
        {/* Content - Posicionado na parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded">{post.category}</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:underline">
            {post.title}
          </h3>
          {size === 'large' && (
            <p className="text-sm text-gray-200 mb-4 line-clamp-3">{post.excerpt}</p>
          )}
          <div className="flex items-center text-sm text-white mt-2">
            <span className="inline-flex items-center font-medium group-hover:text-blue-300 transition-colors">
              Leia mais
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}