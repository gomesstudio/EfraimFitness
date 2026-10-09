import React, { useRef, useState } from 'react';
import { Play, Sparkles, ArrowDown } from 'lucide-react';

interface VideoSectionProps {
  videoId?: string;
  shareUrl?: string;
  videoSrc?: string;
  videoRemoteSrc?: string;
  posterSrc?: string;
  remotePosterSrc?: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  videoId = 'FtneDtNmbFU',
  posterSrc = '/video-jocel-cover.webp',
  remotePosterSrc = 'https://www.flexclip.com/xJbGYK9LmIDFbTg55MWOqNVMTZNiAcvs/share-cover.jpg?cc=share',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToVideo = () => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleStartPlay = () => {
    setIsPlaying(true);
  };

  // URL oficial de incorporação sem cookies, com parâmetros otimizados para reprodução limpa
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=1&rel=0&playsinline=1&iv_load_policy=3`;

  return (
    <div className="w-full pt-16 sm:pt-20 lg:pt-24 border-t border-white/[0.08] relative">
      {/* Luz ambiente de fundo no tom verde neon característico */}
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
      {/* ALA DO VÍDEO VERTICAL COM MOLDURA FLUTUANTE ESTILO DARK */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex justify-center">
        <div
          ref={containerRef}
          className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[400px] group"
        >
          {/* Halo sutil flutuante dark */}
          <div
            className={`absolute -inset-2 sm:-inset-3 bg-gradient-to-tr from-[#65f603]/25 via-[#65f603]/5 to-transparent rounded-[2.5rem] blur-xl pointer-events-none transition-opacity duration-300 ${
              isPlaying ? 'opacity-40' : 'opacity-60 group-hover:opacity-90'
            }`}
          />

          {/* Moldura flutuante estilo dark */}
          <div className="relative w-full rounded-[1.75rem] sm:rounded-[2rem] p-2.5 sm:p-3 bg-gradient-to-b from-[#1c1d22] via-[#111215] to-[#090a0c] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] group-hover:border-[#65f603]/40 transition-colors duration-300">
            {/* Linha superior de reflexo luxuoso */}
            <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

            {/* Barra superior de identificação da moldura */}
            <div className="flex items-center justify-between px-2 py-1.5 mb-2 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#65f603] shadow-[0_0_8px_#65f603]" />
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white">
                  Jocel • Efraim Fitness
                </span>
              </div>
            </div>

            {/* Container do Vídeo: Formato 9:16 vertical nativo sem cortes ou barras estranhas */}
            <div className="relative w-full aspect-[9/16] rounded-[1.35rem] sm:rounded-[1.6rem] bg-black select-none overflow-hidden shadow-inner">
              {/* ESTADO 1: Capa personalizada elegante antes da interação (carregamento zero de iframe) */}
              {!isPlaying ? (
                <div
                  onClick={handleStartPlay}
                  className="absolute inset-0 z-20 group/poster cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleStartPlay();
                    }
                  }}
                  aria-label="Reproduzir recado do Jocel"
                >
                  {/* Capa fotográfica em alta definição */}
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

                  {/* Gradiente sutil para legibilidade e luxo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 pointer-events-none" />

                  {/* Botão Play Central Gigante Neon com Halo Suave */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="relative group/btn">
                      <div className="absolute -inset-3 bg-[#65f603]/30 rounded-full blur-md opacity-60 group-hover/poster:opacity-100 transition-opacity" />
                      <button
                        type="button"
                        aria-label="Dar o play no vídeo"
                        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#65f603] hover:bg-[#52e600] text-black flex items-center justify-center transition-transform duration-200 shadow-[0_0_30px_rgba(101,246,3,0.6)] group-hover/poster:scale-110 active:scale-95 cursor-pointer pointer-events-none"
                      >
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-black translate-x-0.5" />
                      </button>
                    </div>

                    <div className="flex flex-col items-center text-center px-4 pointer-events-none">
                      <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white drop-shadow-md">
                        Toque para assistir
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* ESTADO 2: Iframe responsivo YouTube sob demanda com áudio e controles completos */
                <iframe
                  src={embedUrl}
                  title="Um recado do Jocel para você • Efraim Fitness"
                  className="w-full h-full border-0 rounded-[1.35rem] sm:rounded-[1.6rem] bg-black"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
