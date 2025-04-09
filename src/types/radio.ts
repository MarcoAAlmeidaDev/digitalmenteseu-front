// src/types/radio.ts
export interface RadioChannel {
    id: string;
    name: string;
    frequency: string;
    stream_url: string;
    current_song?: string;
    artist?: string;
    cover_image: string;
  }
  
  export interface RadioPlayerState {
    isPlaying: boolean;
    volume: number;
    currentTime: number;
    duration: number;
  }