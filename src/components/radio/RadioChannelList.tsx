// src/components/radio/RadioChannelList.tsx
'use client';

import { useState } from 'react';
import RadioChannelCard from './RadioChannelCard';

export interface RadioChannel {
  id: string;
  name: string;
  frequency: string;
  stream_url: string;
  current_song?: string;
  artist?: string;
  cover_image: string;
}

interface RadioChannelListProps {
  channels: RadioChannel[];
  onChannelSelect: (channel: RadioChannel) => void;
  currentChannelId?: string;
}

export default function RadioChannelList({ 
  channels, 
  onChannelSelect, 
  currentChannelId 
}: RadioChannelListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredChannels = channels.filter(channel => 
    channel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    channel.frequency.includes(searchTerm)
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-full">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Canais de Rádio</h2>
      
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Buscar canal ou frequência..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute right-3 top-2.5 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </div>
      </div>
      
      <div className="overflow-y-auto max-h-[calc(100vh-280px)]">
        {filteredChannels.length > 0 ? (
          filteredChannels.map(channel => (
            <RadioChannelCard
              key={channel.id}
              id={channel.id}
              name={channel.name}
              frequency={channel.frequency}
              currentSong={channel.current_song}
              artist={channel.artist}
              coverImage={channel.cover_image}
              isPlaying={channel.id === currentChannelId}
              onPlay={() => onChannelSelect(channel)}
            />
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>Nenhum canal encontrado</p>
          </div>
        )}
      </div>
    </div>
  );
}