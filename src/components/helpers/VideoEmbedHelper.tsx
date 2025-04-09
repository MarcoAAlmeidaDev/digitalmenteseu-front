import React from 'react';

interface VideoEmbedHelperProps {
  url: string;
  title?: string;
  width?: string;
  height?: string;
  className?: string;
}

export const VideoEmbedHelper: React.FC<VideoEmbedHelperProps> = ({
  url,
  title = 'Video embed',
  width = '100%',
  height = '100%',
  className = '',
}) => {
  // Extrair ID do vídeo do YouTube
  const getYoutubeEmbedUrl = (youtubeUrl: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = youtubeUrl.match(regExp);
    
    const videoId = match && match[2].length === 11 ? match[2] : null;
    
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Retorna a URL original se não for possível extrair o ID
    return youtubeUrl;
  };

  // Verificar se é um vídeo do Vimeo
  const getVimeoEmbedUrl = (vimeoUrl: string): string => {
    const regExp = /vimeo\.com\/(?:video\/)?(\d+)/;
    const match = vimeoUrl.match(regExp);
    
    const videoId = match ? match[1] : null;
    
    if (videoId) {
      return `https://player.vimeo.com/video/${videoId}`;
    }
    
    // Retorna a URL original se não for possível extrair o ID
    return vimeoUrl;
  };

  // Determinar o tipo de vídeo e obter a URL de incorporação adequada
  const getEmbedUrl = (url: string): string => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return getYoutubeEmbedUrl(url);
    } else if (url.includes('vimeo.com')) {
      return getVimeoEmbedUrl(url);
    }
    
    // Se não for YouTube ou Vimeo, retorna a URL original
    return url;
  };

  const embedUrl = getEmbedUrl(url);

  return (
    <div className={`video-wrapper ${className}`} style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        src={embedUrl}
        title={title}
        width={width}
        height={height}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default VideoEmbedHelper;