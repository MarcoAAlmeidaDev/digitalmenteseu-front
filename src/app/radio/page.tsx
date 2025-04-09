// src/app/radio/page.tsx
'use client';

import { useState } from 'react';
import RadioPlayer from '@/components/radio/RadioPlayer';
import RadioChannelList, { RadioChannel } from '@/components/radio/RadioChannelList';

// Dados mockados para os canais de rádio
const mockChannels: RadioChannel[] = [
  {
    id: '1',
    name: 'Digitalmente FM',
    frequency: '89.5 MHz',
    stream_url: 'https://example.com/stream/digitalmente',
    current_song: 'Transformação Digital',
    artist: 'Os Desenvolvedores',
    cover_image: '/images/radio/digitalmente-fm.jpg'
  },
  {
    id: '2',
    name: 'Tech Groove',
    frequency: '92.7 MHz',
    stream_url: 'https://example.com/stream/techgroove',
    current_song: 'Código Limpo',
    artist: 'Dev Masters',
    cover_image: '/images/radio/tech-groove.jpg'
  },
  {
    id: '3',
    name: 'React Wave',
    frequency: '98.3 MHz',
    stream_url: 'https://example.com/stream/reactwave',
    current_song: 'Hooks & Props',
    artist: 'Frontend Heroes',
    cover_image: '/images/radio/react-wave.jpg'
  },
  {
    id: '4',
    name: 'Node Beats',
    frequency: '101.9 MHz',
    stream_url: 'https://example.com/stream/nodebeats',
    current_song: 'Async Await',
    artist: 'Backend Brigade',
    cover_image: '/images/radio/node-beats.jpg'
  },
  {
    id: '5',
    name: 'Full Stack FM',
    frequency: '105.2 MHz',
    stream_url: 'https://example.com/stream/fullstackfm',
    current_song: 'MERN Stack Melody',
    artist: 'Code Composers',
    cover_image: '/images/radio/fullstack-fm.jpg'
  },
  // Adicione mais canais conforme necessário
];

// Solução para as imagens mockadas que não existem: use uma imagem de fallback
for (const channel of mockChannels) {
  // Vamos usar uma imagem de placeholder como fallback
  channel.cover_image = 'https://placehold.co/400x400/FF6B00/2563EB?text=' + encodeURIComponent(channel.name);
}

export default function RadioPage() {
  const [selectedChannel, setSelectedChannel] = useState<RadioChannel | undefined>(undefined);

  const handleChannelSelect = (channel: RadioChannel) => {
    setSelectedChannel(channel);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Digitalmente Rádio</h1>
        <p className="text-gray-600">Sua estação de música digital favorita</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 order-2 lg:order-1">
          <RadioChannelList 
            channels={mockChannels} 
            onChannelSelect={handleChannelSelect}
            currentChannelId={selectedChannel?.id}
          />
        </div>
        
        <div className="lg:col-span-2 order-1 lg:order-2">
          <RadioPlayer channel={selectedChannel} />
          
          <div className="mt-6 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Sobre a Digitalmente Rádio</h2>
            <p className="text-gray-600 mb-4">
              Bem-vindo à Digitalmente Rádio, sua fonte de músicas e conteúdo premium. 
              Nossos canais são cuidadosamente selecionados para proporcionar a melhor experiência auditiva 
              durante seus momentos de trabalho, estudo ou relaxamento.
            </p>
            <p className="text-gray-600">
              Selecione um canal na lista ao lado e aproveite o melhor da música digital. 
              A programação é atualizada constantemente para trazer sempre novidades do mundo da música.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}