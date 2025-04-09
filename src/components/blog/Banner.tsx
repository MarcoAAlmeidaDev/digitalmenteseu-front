// src/components/blog/Banner.tsx
import Image from 'next/image';

interface BannerProps {
  imageUrl: string;
  altText: string;
}

export function Banner({ imageUrl, altText }: BannerProps) {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          priority
          className="object-contain md:object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}