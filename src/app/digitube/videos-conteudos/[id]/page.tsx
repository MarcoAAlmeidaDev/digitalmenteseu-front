import React from 'react';
import VideoDetailContent from '@/components/digitube/VideoDetailContent';
import { videoData } from '@/data/videoData';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const video = videoData.find((v) => v.id === params.id);
  
  if (!video) {
    return {
      title: 'Vídeo não encontrado | DigiTube',
      description: 'O vídeo solicitado não foi encontrado na nossa plataforma.',
    };
  }
  
  return {
    title: `${video.title} | DigiTube`,
    description: video.description,
    keywords: `${video.category}, educação, vídeo, tutorial, ${video.title}`,
  };
}

export default function VideoDetailPage({ params }: { params: { id: string } }) {
  const video = videoData.find((v) => v.id === params.id);
  
  if (!video) {
    notFound();
  }
  
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-blue-50 to-white">
      <VideoDetailContent video={video} />
    </div>
  );
}