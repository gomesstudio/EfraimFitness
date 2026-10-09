import React, { useRef, useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Maximize,
  Minimize,
  Sparkles,
  ArrowDown,
  Volume2,
  VolumeX,
  RotateCcw
} from 'lucide-react';

interface VideoSectionProps {
  shareUrl?: string;
  videoSrc?: string;
  videoRemoteSrc?: string;
  posterSrc?: string;
  remotePosterSrc?: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  shareUrl = 'https://www.flexclip.com/pt/share/16571114xJbGYK9LmIDFbTg55MWOqNVMTZNiAcvs.html',
  videoSrc = '/video-jocel.mp4',
  videoRemoteSrc = 'https://www.flexclip.com/16571114/1791544547827-xJbGYK9LmIDFbTg55MWOqNVMTZNiAcvs.mp4?cc=share',
  posterSrc = '/video-jocel-cover.webp',
  remotePosterSrc = 'https://www.flexclip.com/xJbGYK9LmIDFbTg55MWOqNVMTZNiAcvs/share-cover.jpg?cc=share',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<HTMLInputElement>(null);
  const timeDisplayRef = useRef<HTMLSpanElement>(null);
  const isScrubbingRef = useRef(false);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastActivityRef = useRef<number>(0);

  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(videoSrc);

  // Monitora mudanças de tela cheia (Desktop, Android e iOS Safari nativo)
  useEffect(() => {
    const handleFullscreenChange = () => {
      const doc = document as any;
      const activeElement =
        doc.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement;
      setIsFullscreen(!!activeElement);
    };

    const handleVideoBeginFullscreen = () => {
      setIsFullscreen(true);
    };

    const handleVideoEndFullscreen = () => {
      setIsFullscreen(false);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    const videoEl = videoRef.current;
    if (videoEl) {
      videoEl.addEventListener('webkitbeginfullscreen', handleVideoBeginFullscreen);
      videoEl.addEventListener('webkitendfullscreen', handleVideoEndFullscreen);
    }

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);

      if (videoEl) {
        videoEl.removeEventListener('webkitbeginfullscreen', handleVideoBeginFullscreen);
        videoEl.removeEventListener('webkitendfullscreen', handleVideoEndFullscreen);
      }

      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  // Otimização: atualização de timeline e tempo direto via DOM, sem forçar re-render React a cada 100ms
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const current = video.currentTime;
    const dur = video.duration || duration || 0;

    if (timelineRef.current && !isScrubbingRef.current) {
      timelineRef.current.value = String(current);
    }
    if (timeDisplayRef.current) {
      timeDisplayRef.current.textContent = `${formatTime(current)} / ${formatTime(dur)}`;
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    const dur = video.duration || 0;
    setDuration(dur);
    if (timelineRef.current) {
      timelineRef.current.max = String(dur || 100);
    }
    if (timeDisplayRef.current) {
      timeDisplayRef.current.textContent = `${formatTime(video.currentTime)} / ${formatTime(dur)}`;
    }
  };

  // Throttled: esconde controles automaticamente após inatividade
  const handleUserActivity = () => {
    const now = Date.now();
    if (now - lastActivityRef.current < 150) return;
    lastActivityRef.current = now;

    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (videoRef.current && !videoRef.current.paused) {
        setShowControls(false);
      }
    }, 2800);
  };

  const handlePlayInitial = () => {
    setHasStarted(true);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
    handleUserActivity();
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      video.pause();
      setIsPlaying(false);
      setShowControls(true);
    } else {
      video.play().catch(() => {});
      setIsPlaying(true);
      handleUserActivity();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (nextMuted) {
      video.volume = 0;
    } else {
      const vol = volume > 0 ? volume : 0.8;
      video.volume = vol;
      if (volume === 0) setVolume(0.8);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    const video = videoRef.current;
    if (video) {
      video.volume = newVol;
      video.muted = newVol === 0;
      setIsMuted(newVol === 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    const video = videoRef.current;
    if (video) {
      video.currentTime = newTime;
    }
    if (timeDisplayRef.current) {
      timeDisplayRef.current.textContent = `${formatTime(newTime)} / ${formatTime(duration)}`;
    }
  };

  const handleRestart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
    setIsPlaying(true);
    handleUserActivity();
  };

  const toggleFullscreen = () => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    const doc = document as any;
    const isCurrentlyFullscreen = !!(
      doc.fullscreenElement ||
      doc.webkitFullscreenElement ||
      doc.mozFullScreenElement ||
      doc.msFullscreenElement
    );

    if (!isCurrentlyFullscreen) {
      if (container.requestFullscreen) {
        container.requestFullscreen().catch(() => {
          // Fallback para elemento de vídeo nativo (iOS / Safari)
          if ((video as any).webkitEnterFullscreen) {
            (video as any).webkitEnterFullscreen();
          }
        });
      } else if ((container as any).webkitRequestFullscreen) {
        (container as any).webkitRequestFullscreen();
      } else if ((video as any).webkitEnterFullscreen) {
        // Safari iOS nativo
        (video as any).webkitEnterFullscreen();
      } else if ((container as any).msRequestFullscreen) {
        (container as any).msRequestFullscreen();
      }
    } else {
      if (doc.exitFullscreen) {
        doc.exitFullscreen().catch(() => {});
      } else if (doc.webkitExitFullscreen) {
        doc.webkitExitFullscreen();
      } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen();
      }
    }
  };

  const handleVideoError = () => {
    // Fallback gracioso para a fonte remota se a local encontrar erro
    if (currentSrc !== videoRemoteSrc && videoRemoteSrc) {
      setCurrentSrc(videoRemoteSrc);
    }
  };

  const scrollToVideo = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="w-full pt-16 sm:pt-20 lg:pt-24 border-t border-white/[0.08] relative">
      {/* Luz ambiente de fundo - estática para evitar composições contínuas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] sm:w-[48rem] h-[34rem] sm:h-[48rem] bg-[#65f603]/[0.04] rounded-full blur-[120px] pointer-events-none -z-0" />

      {/* ========================================================= */}
      {/* CABEÇALHO INDICATIVO */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#65f603]/10 border border-[#65f603]/25 mb-4 shadow-[0_0_20px_rgba(101,246,3,0.12)]">
          <Sparkles className="w-3.5 h-3.5 text-[#65f603]" />
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#65f603]">
            UMA MENSAGEM ESPECIAL
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black uppercase tracking-tight text-white leading-tight">
          Um recado do <span className="text-[#65f603]">Jocel</span> para você.
        </h3>

        <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-300 font-normal leading-relaxed max-w-xl mx-auto">
          Dê o play e conheça um pouco mais sobre a Efraim Fitness.
        </p>

        <button
          type="button"
          onClick={scrollToVideo}
          className="group inline-flex flex-col items-center gap-1.5 mt-5 text-gray-400 hover:text-[#65f603] transition-colors duration-200 cursor-pointer focus:outline-none"
          aria-label="Rolar e apontar para o vídeo"
        >
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">
            Assista ao vídeo abaixo
          </span>
          <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 group-hover:border-[#65f603]/60 group-hover:bg-[#65f603]/10 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-sm">
            <ArrowDown className="w-4 h-4 text-[#65f603]" />
          </div>
        </button>
      </div>

      {/* ========================================================= */}
      {/* ALA DO VÍDEO CENTRALIZADO COM MOLDURA FLUTUANTE ESTILO DARK */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex justify-center">
        <div
          ref={containerRef}
          className={`relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px] group ${
            isFullscreen
              ? '!max-w-none !w-full !h-full flex items-center justify-center bg-black p-0 m-0'
              : ''
          }`}
          onMouseMove={handleUserActivity}
          onTouchStart={handleUserActivity}
        >
          {/* Halo sutil flutuante dark quando parado */}
          {!isFullscreen && (
            <div
              className={`absolute -inset-2 sm:-inset-3 bg-gradient-to-tr from-[#65f603]/25 via-[#65f603]/5 to-transparent rounded-[2.5rem] blur-xl opacity-60 pointer-events-none transition-opacity duration-300 ${
                isPlaying ? 'opacity-40' : 'group-hover:opacity-90'
              }`}
            />
          )}

          {/* Moldura flutuante estilo dark */}
          <div
            className={`relative w-full rounded-[1.75rem] sm:rounded-[2rem] p-2.5 sm:p-3 bg-gradient-to-b from-[#1c1d22] via-[#111215] to-[#090a0c] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] ${
              isFullscreen
                ? '!p-0 !rounded-none !border-none !bg-black !shadow-none max-w-none h-full flex flex-col items-center justify-center'
                : 'group-hover:border-[#65f603]/40'
            }`}
          >
            {/* Linha superior de reflexo luxuoso */}
            {!isFullscreen && (
              <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
            )}

            {/* Barra superior de status da moldura dark */}
            {!isFullscreen && (
              <div className="flex items-center justify-between px-2 py-1.5 mb-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#65f603] shadow-[0_0_8px_#65f603]" />
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white">
                    Jocel • Efraim Fitness
                  </span>
                </div>
              </div>
            )}

            {/* Container do Vídeo: Formato 9:16 vertical nativo */}
            <div
              className={`relative w-full bg-black select-none overflow-hidden ${
                isFullscreen
                  ? 'h-full max-h-screen w-auto aspect-[9/16] flex items-center justify-center'
                  : 'aspect-[9/16] rounded-[1.35rem] sm:rounded-[1.6rem]'
              }`}
            >
              {/* Elemento de Vídeo HTML5 nativo com renderização de alta performance */}
              <video
                ref={videoRef}
                src={currentSrc}
                playsInline
                preload="metadata"
                className={`w-full h-full bg-black ${isFullscreen ? 'object-contain' : 'object-cover'}`}
                poster={posterSrc}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => {
                  setIsPlaying(false);
                  setShowControls(true);
                }}
                onError={handleVideoError}
                onClick={togglePlay}
              >
                Seu navegador não suporta a reprodução deste vídeo.
              </video>

              {/* Poster inicial com Play Interativo (antes de dar o play inicial) */}
              {!hasStarted && (
                <div className="absolute inset-0 z-20 group/poster">
                  <img
                    src={posterSrc}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.src.endsWith('.webp')) {
                        target.src = '/video-jocel-cover.jpg';
                      } else if (target.src !== remotePosterSrc) {
                        target.src = remotePosterSrc;
                      }
                    }}
                    alt="Vídeo do Jocel - Efraim Fitness"
                    width="271"
                    height="480"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/poster:scale-105"
                  />

                  {/* Película escura suave para contraste luxuoso */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30" />

                  {/* Botão Play Central Gigante Neon */}
                  <div
                    onClick={handlePlayInitial}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-4 cursor-pointer"
                  >
                    <div className="relative group/btn">
                      <div className="absolute -inset-3 bg-[#65f603]/30 rounded-full blur-md opacity-60" />
                      <button
                        type="button"
                        aria-label="Dar o play no vídeo"
                        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#65f603] hover:bg-[#52e600] text-black flex items-center justify-center transition-transform duration-200 shadow-[0_0_30px_rgba(101,246,3,0.6)] group-hover/btn:scale-110 active:scale-95 cursor-pointer"
                      >
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black translate-x-0.5" />
                      </button>
                    </div>

                    <div className="flex flex-col items-center text-center px-4">
                      <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white drop-shadow-md">
                        Toque para assistir
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Botão central flutuante de Play/Pause quando o vídeo já iniciou */}
              {hasStarted && (
                <div
                  onClick={togglePlay}
                  className={`absolute inset-0 z-10 flex items-center justify-center cursor-pointer transition-opacity duration-200 ${
                    !isPlaying || showControls ? 'bg-black/30 opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      togglePlay();
                    }}
                    aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/75 border border-white/20 text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 ${
                      !isPlaying ? 'ring-2 ring-[#65f603]/80 bg-[#65f603]/20 text-[#65f603]' : ''
                    }`}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-white" />
                    ) : (
                      <Play className="w-6 h-6 fill-white translate-x-0.5" />
                    )}
                  </button>
                </div>
              )}

              {/* Barra inferior de Controles Personalizados (Play/Pause, Timeline, Volume, Fullscreen) */}
              {hasStarted && (
                <div
                  className={`absolute bottom-0 inset-x-0 z-30 p-2.5 sm:p-3 bg-gradient-to-t from-black/95 via-black/80 to-transparent transition-opacity duration-200 ${
                    showControls || !isPlaying ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  {/* Timeline / Barra de Progresso Interativa */}
                  <div className="relative flex items-center mb-2 group/timeline">
                    <input
                      ref={timelineRef}
                      type="range"
                      min={0}
                      max={duration || 100}
                      step={0.1}
                      defaultValue={0}
                      onMouseDown={() => {
                        isScrubbingRef.current = true;
                      }}
                      onTouchStart={() => {
                        isScrubbingRef.current = true;
                      }}
                      onMouseUp={() => {
                        isScrubbingRef.current = false;
                      }}
                      onTouchEnd={() => {
                        isScrubbingRef.current = false;
                      }}
                      onChange={handleSeek}
                      className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#65f603] focus:outline-none group-hover/timeline:h-2 transition-all"
                      aria-label="Controle de linha do tempo"
                    />
                  </div>

                  {/* Linha de botões de controle e volume */}
                  <div className="flex items-center justify-between text-xs text-white">
                    {/* Lado Esquerdo: Play/Pause, Replay e Tempo */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="p-1 rounded text-white hover:text-[#65f603] transition-colors cursor-pointer"
                        aria-label={isPlaying ? 'Pausar' : 'Play'}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                      </button>

                      <button
                        type="button"
                        onClick={handleRestart}
                        className="p-1 rounded text-gray-300 hover:text-white transition-colors cursor-pointer"
                        title="Reiniciar vídeo"
                        aria-label="Reiniciar vídeo"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>

                      <span ref={timeDisplayRef} className="text-[11px] font-mono text-gray-300">
                        0:00 / {formatTime(duration)}
                      </span>
                    </div>

                    {/* Lado Direito: Controle de Volume e Fullscreen */}
                    <div className="flex items-center gap-2">
                      {/* Volume Slider & Toggle */}
                      <div className="flex items-center gap-1 group/vol">
                        <button
                          type="button"
                          onClick={toggleMute}
                          className="p-1 text-gray-300 hover:text-white transition-colors cursor-pointer"
                          title={isMuted ? 'Desmutar' : 'Mutar'}
                          aria-label={isMuted ? 'Desmutar' : 'Mutar'}
                        >
                          {isMuted || volume === 0 ? (
                            <VolumeX className="w-4 h-4 text-red-400" />
                          ) : (
                            <Volume2 className="w-4 h-4 text-[#65f603]" />
                          )}
                        </button>

                        <input
                          type="range"
                          min={0}
                          max={1}
                          step={0.05}
                          value={isMuted ? 0 : volume}
                          onChange={handleVolumeChange}
                          className="w-14 sm:w-18 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#65f603] focus:outline-none"
                          aria-label="Ajuste de volume"
                        />
                      </div>

                      {/* Botão Fullscreen no player */}
                      <button
                        type="button"
                        onClick={toggleFullscreen}
                        className="p-1 text-gray-300 hover:text-[#65f603] transition-colors cursor-pointer"
                        title={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
                        aria-label={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
                      >
                        {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
