'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { 
  FiHome, 
  FiChevronRight, 
  FiPlay, 
  FiPause,
  FiVolume2,
  FiVolumeX,
  FiMaximize,
  FiMinimize,
  FiSettings,
  FiChevronDown,
  FiCheck,
  FiClock
} from 'react-icons/fi';
import Link from 'next/link';
import { aulasMock } from '@/data/aulasMock';

interface Curso {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  imagem: string;
  progresso: number;
  totalAulas: number;
  aulasAssistidas: number;
  modulos?: any[];
}

interface CursoContentProps {
  curso: Curso;
}

export default function CursoContent({ curso }: CursoContentProps) {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volumeLevel, setVolumeLevel] = useState(1);
  const [isVolumeControlVisible, setIsVolumeControlVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [selectedAula, setSelectedAula] = useState<any>(aulasMock[0]);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});
  const [playbackSpeed, setPlaybackSpeed] = useState(1); // Adicionando estado faltante
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Verificar se o usuário está autenticado
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  // Configurar expandedModules inicialmente
  useEffect(() => {
    const modulesState: Record<string, boolean> = {};
    
    // Se tiver módulos, expande o primeiro por padrão
    if (curso.modulos && curso.modulos.length > 0) {
      curso.modulos.forEach((modulo, index) => {
        modulesState[modulo.id] = index === 0;
      });
    }
    
    setExpandedModules(modulesState);
  }, [curso]);

  // Lidar com progresso do vídeo
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration);
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleVolumeChange = () => setIsMuted(video.muted);
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('volumechange', handleVolumeChange);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('volumechange', handleVolumeChange);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Auto-hide controls
  useEffect(() => {
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }

    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying, showControls]);

  // Função para formatar tempo em MM:SS
  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return '00:00';
    
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Controles de vídeo
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    
    const volume = parseFloat(e.target.value);
    video.volume = volume;
    setVolumeLevel(volume);
    
    if (volume === 0) {
      video.muted = true;
      setIsMuted(true);
    } else if (isMuted) {
      video.muted = false;
      setIsMuted(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    
    const seekTo = parseFloat(e.target.value);
    video.currentTime = seekTo;
    setCurrentTime(seekTo);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      const videoContainer = document.getElementById('video-container');
      if (videoContainer && videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const changePlaybackSpeed = (speed: number) => {
    const video = videoRef.current;
    if (!video) return;
    
    video.playbackRate = speed;
    setPlaybackSpeed(speed);
    setIsSettingsOpen(false);
  };

  const toggleModule = (moduleId: string) => {
    setExpandedModules({
      ...expandedModules,
      [moduleId]: !expandedModules[moduleId]
    });
  };

  const selectAula = (aula: any) => {
    setSelectedAula(aula);
    
    // Reiniciar o vídeo
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      setIsPlaying(true);
    }
  };

  // Estado de carregamento
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#121214] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400">Carregando curso...</p>
        </div>
      </div>
    );
  }

  // Se não estiver autenticado, não renderizar nada
  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="bg-[#1c1b29] border-b border-gray-800">
        <div className="px-4 py-3">
          <div className="flex items-center text-sm text-gray-400">
            <Link href="/" className="hover:text-blue-400 transition-colors flex items-center">
              <FiHome size={14} className="mr-1" />
              <span>Início</span>
            </Link>
            <FiChevronRight size={14} className="mx-2" />
            <Link href="/meus-cursos" className="hover:text-blue-400 transition-colors">
              Meus Cursos
            </Link>
            <FiChevronRight size={14} className="mx-2" />
            <span className="text-white truncate max-w-[200px]">{curso.titulo}</span>
          </div>
        </div>
      </div>

      {/* Conteúdo principal - Removido o container para permitir o conteúdo ficar próximo da sidebar */}
      <div className="py-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Player de vídeo (ocupa duas colunas em desktop) */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold mb-4 text-blue-300">{curso.titulo}</h1>
            
            {/* Aula atual */}
            <h2 className="text-xl mb-4 text-blue-100">{selectedAula?.titulo}</h2>
            
            {/* Player de vídeo */}
            <div 
              id="video-container" 
              className="relative bg-black rounded-lg overflow-hidden mb-4"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => isPlaying && setShowControls(false)}
            >
              <video
                ref={videoRef}
                src={selectedAula?.videoUrl || "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"}
                className="w-full aspect-video"
                onClick={togglePlay}
              />
              
              {/* Overlay de controles */}
              {showControls && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 flex flex-col justify-between p-4">
                  {/* Título no topo */}
                  <div className="text-white text-lg font-medium">
                    {selectedAula?.titulo}
                  </div>
                  
                  {/* Controles no fundo */}
                  <div>
                    {/* Barra de progresso */}
                    <div className="flex items-center mb-2">
                      <span className="text-sm text-gray-300 mr-2">{formatTime(currentTime)}</span>
                      <div className="flex-grow relative">
                        <input
                          type="range"
                          min="0"
                          max={duration || 100}
                          value={currentTime}
                          onChange={handleSeek}
                          className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
                        />
                        <div 
                          className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full pointer-events-none" 
                          style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-300 ml-2">{formatTime(duration)}</span>
                    </div>
                    
                    {/* Botões de controle */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {/* Play/Pause */}
                        <button 
                          onClick={togglePlay}
                          className="text-white hover:text-blue-400 transition-colors cursor-pointer"
                        >
                          {isPlaying ? <FiPause size={20} /> : <FiPlay size={20} />}
                        </button>
                        
                        {/* Volume */}
                        <div className="relative">
                          <button 
                            onClick={toggleMute}
                            onMouseEnter={() => setIsVolumeControlVisible(true)}
                            className="text-white hover:text-blue-400 transition-colors cursor-pointer"
                          >
                            {isMuted || volumeLevel === 0 ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
                          </button>
                          
                          {isVolumeControlVisible && (
                            <div 
                              className="absolute bottom-full left-0 mb-2 bg-gray-800 rounded-lg p-2 w-32"
                              onMouseEnter={() => setIsVolumeControlVisible(true)}
                              onMouseLeave={() => setIsVolumeControlVisible(false)}
                            >
                              <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={volumeLevel}
                                onChange={handleVolumeChange}
                                className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        {/* Configurações */}
                        <div className="relative">
                          <button 
                            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                            className="text-white hover:text-blue-400 transition-colors cursor-pointer"
                          >
                            <FiSettings size={18} />
                          </button>
                          
                          {isSettingsOpen && (
                            <div className="absolute bottom-full right-0 mb-2 bg-gray-800 rounded-lg overflow-hidden w-48">
                              <div className="p-2 border-b border-gray-700">
                                <span className="text-sm font-medium">Velocidade</span>
                              </div>
                              {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                                <button
                                  key={speed}
                                  onClick={() => changePlaybackSpeed(speed)}
                                  className={`w-full text-left p-2 text-sm hover:bg-gray-700 flex items-center justify-between cursor-pointer ${
                                    playbackSpeed === speed ? 'bg-gray-700' : ''
                                  }`}
                                >
                                  <span>{speed === 1 ? 'Normal' : `${speed}x`}</span>
                                  {playbackSpeed === speed && <FiCheck size={16} />}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        {/* Tela cheia */}
                        <button 
                          onClick={toggleFullscreen}
                          className="text-white hover:text-blue-400 transition-colors cursor-pointer"
                        >
                          {isFullscreen ? <FiMinimize size={18} /> : <FiMaximize size={18} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Play button overlay quando pausado */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={togglePlay}
                    className="bg-blue-600 bg-opacity-80 text-white rounded-full p-5 hover:bg-opacity-100 transition-colors cursor-pointer"
                  >
                    <FiPlay size={30} />
                  </button>
                </div>
              )}
            </div>
            
            {/* Descrição da aula */}
            <div className="bg-[#1c1b29] rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold mb-2 text-blue-100">Sobre esta aula</h3>
              <p className="text-gray-300 mb-4">
                {selectedAula?.descricao || "Nesta aula, você aprenderá conceitos fundamentais que serão a base para todo o curso."}
              </p>
              
              {/* Informações adicionais */}
              <div className="flex items-center text-sm text-gray-400">
                <FiClock size={14} className="mr-1" />
                <span>Duração: {selectedAula?.duracao || "10 minutos"}</span>
              </div>
            </div>
          </div>
          
          {/* Lista de aulas */}
          <div className="lg:col-span-1">
            <div className="bg-[#1c1b29] rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-800">
                <h3 className="font-semibold text-blue-100">Conteúdo do curso</h3>
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>{curso.aulasAssistidas} de {curso.totalAulas} aulas concluídas</span>
                  <span>{curso.progresso}% concluído</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-1.5 mt-2">
                  <div 
                    className="bg-blue-500 h-1.5 rounded-full" 
                    style={{ width: `${curso.progresso}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="overflow-y-auto max-h-[600px]">
                {/* Lista de módulos e aulas */}
                {curso.modulos ? (
                  // Versão com módulos
                  curso.modulos.map((modulo: any) => (
                    <div key={modulo.id} className="border-b border-gray-800 last:border-b-0">
                      <button
                        onClick={() => toggleModule(modulo.id)}
                        className="w-full flex items-center justify-between p-4 hover:bg-[#232230] transition-colors cursor-pointer"
                      >
                        <span className="font-medium">{modulo.titulo}</span>
                        <FiChevronDown 
                          className={`transition-transform duration-200 ${
                            expandedModules[modulo.id] ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {expandedModules[modulo.id] && (
                        <div className="pl-4">
                          {modulo.aulas.map((aula: any) => (
                            <button
                              key={aula.id}
                              onClick={() => selectAula(aula)}
                              className={`w-full flex items-center p-3 border-l-2 cursor-pointer ${
                                selectedAula?.id === aula.id 
                                  ? 'border-blue-500 bg-blue-900/20 text-blue-400' 
                                  : 'border-transparent hover:bg-[#232230] text-gray-300'
                              } transition-colors`}
                            >
                              <div className="mr-3">
                                {aula.assistida ? (
                                  <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center">
                                    <FiCheck size={12} />
                                  </div>
                                ) : selectedAula?.id === aula.id ? (
                                  <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                                    <FiPlay size={12} />
                                  </div>
                                ) : (
                                  <div className="w-5 h-5 rounded-full border border-gray-600" />
                                )}
                              </div>
                              <div className="text-left">
                                <p className="text-sm font-medium">{aula.titulo}</p>
                                <p className="text-xs text-gray-500 flex items-center">
                                  <FiClock size={10} className="mr-1" />
                                  {aula.duracao}
                                </p>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  // Versão simples sem módulos
                  <div>
                    {aulasMock.map((aula) => (
                      <button
                        key={aula.id}
                        onClick={() => selectAula(aula)}
                        className={`w-full flex items-center p-4 border-l-2 cursor-pointer ${
                          selectedAula?.id === aula.id 
                            ? 'border-blue-500 bg-blue-900/20 text-blue-400' 
                            : 'border-transparent hover:bg-[#232230] text-gray-300'
                        } transition-colors`}
                      >
                        <div className="mr-3">
                          {aula.assistida ? (
                            <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center">
                              <FiCheck size={12} />
                            </div>
                          ) : selectedAula?.id === aula.id ? (
                            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                              <FiPlay size={12} />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full border border-gray-600" />
                          )}
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-medium">{aula.titulo}</p>
                          <p className="text-xs text-gray-500 flex items-center">
                            <FiClock size={10} className="mr-1" />
                            {aula.duracao}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}