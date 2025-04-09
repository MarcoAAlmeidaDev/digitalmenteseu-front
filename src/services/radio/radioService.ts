// // src/services/radio/radioService.ts
// import { RadioChannel } from '@/types/radio';
// import apiClient from '../api/client';

// // Interfaces para a API
// interface GetRadioChannelsResponse {
//   channels: RadioChannel[];
// }

// interface GetChannelInfoResponse {
//   channel: RadioChannel;
// }

// // Funções do serviço
// export const radioService = {
//   // Obter todos os canais disponíveis
//   getChannels: () => 
//     apiClient.get<GetRadioChannelsResponse>('/radio/channels'),
  
//   // Obter informações de um canal específico
//   getChannelInfo: (channelId: string) => 
//     apiClient.get<GetChannelInfoResponse>(`/radio/channels/${channelId}`),
  
//   // Obter a música atual de um canal (para atualizações em tempo real)
//   getCurrentSong: (channelId: string) => 
//     apiClient.get<{ current_song: string; artist: string }>(`/radio/channels/${channelId}/current`),
// };

// export default radioService;