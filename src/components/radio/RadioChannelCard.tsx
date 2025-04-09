// src/components/radio/RadioChannelCard.tsx
import { useState } from 'react';
import Image from 'next/image';

interface RadioChannelCardProps {
  id: string;
  name: string;
  frequency: string;
  currentSong?: string;
  artist?: string;
  coverImage: string;
  isPlaying: boolean;
  onPlay: (id: string) => void;
}

export default function RadioChannelCard({
  id,
  name,
  frequency,
  currentSong,
  artist,
  coverImage,
  isPlaying,
  onPlay,
}: RadioChannelCardProps) {
  return (
    <div 
      className={`flex items-center p-3 rounded-lg mb-2 cursor-pointer transition-all ${
        isPlaying ? 'bg-blue-100 border-l-4 border-orange-500' : 'bg-white hover:bg-gray-50'
      }`}
      onClick={() => onPlay(id)}
    >
      <div className="relative w-12 h-12 mr-4 flex-shrink-0">
        <Image 
          src={coverImage} 
          alt={name} 
          width={48} 
          height={48}
          className="rounded object-cover"
        />
        {isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded">
            <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
          </div>
        )}
      </div>
      
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-gray-900">{name}</h3>
          <span className="text-sm text-blue-600">{frequency}</span>
        </div>
        {currentSong && (
          <p className="text-sm text-gray-600 truncate">
            {artist && <span className="font-medium">{artist}</span>} {currentSong}
          </p>
        )}
      </div>
      
      <div className="ml-4">
        <button 
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isPlaying ? 'bg-orange-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}