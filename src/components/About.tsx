import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Dumbbell, ClipboardList, TrendingUp, Star, Smartphone, ShieldCheck, X } from 'lucide-react';
import { IMAGES } from '../data/gymData';
import { VideoSection } from './VideoSection';

export const About: React.FC = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  // Fecha o modal ao pressionar ESC e bloqueia rolagem do body quando aberto
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsImageOpen(false);
      }
    };
    if (isImageOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isImageOpen]);

  const differentials = [
    {
      icon: Dumbbell,
      line1: 'TREINAMENTO',
      line2: 'PERSONALIZADO',
    },
    {
      icon: Smartphone,
      line1: 'PRESCRIÇÃO DE',
      line2: 'TREINO ONLINE',
    },
    {
      icon: ClipboardList,
      line1: 'AVALIAÇÃO',
      line2: 'FÍSICA',
    },
    {
      icon: TrendingUp,
      line1: 'ACOMPANHAMENTO',
      line2: 'DA EVOLUÇÃO',
    },
    {
      icon: Star,
      line1: 'ESTRUTURA PARA',
      line2: 'SEUS OBJETIVOS',
    },
  ];

  return (
    <section id="sobre" className="relative w-full bg-[#0a0c0e] py-14 sm:py-20 lg:py-24 border-t border-white/10 overflow-hidden">
      {/* Luz ambiente de fundo verde neon sutil */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#65f603]/10 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#65f603]/5 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout estrutural: 
            - Mobile: Imagem primeiro (order-1) e Textos depois (order-2)
            - Desktop: Textos à esquerda (lg:order-1) e Imagem à direita (lg:order-2)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          
          {/* ========================================================= */}
          {/* COLUNA DA IMAGEM EM DESTAQUE COM MOLDURA CRIATIVA DE PROXIMIDADE */}
          {/* Mobile: Aparece PRIMEIRO (order-1) | Desktop: À DIREITA (lg:order-2) */}
          {/* ========================================================= */}
          <div className="order-1 lg:order-2 lg:col-span-6 xl:col-span-6 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] lg:max-w-none group">
              
              {/* Efeito Halo Sutil Dark Luxuoso de Profundidade */}
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-tr from-[#65f603]/15 via-emerald-500/5 to-transparent rounded-[2.25rem] blur-2xl opacity-60 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none" />

              {/* Moldura Minimalista Luxuosa Estilo Dark */}
              <div className="relative rounded-[1.75rem] sm:rounded-[2rem] p-2.5 sm:p-3 bg-gradient-to-b from-[#18181b] via-[#0e0e11] to-[#08080a] border border-white/[0.09] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(101,246,3,0.08)] backdrop-blur-xl transition-all duration-500 group-hover:border-[#65f603]/30 group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_45px_rgba(101,246,3,0.16)]">
                
                {/* Linha de reflexo sutil superior metálica (luxo minimalista) */}
                <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                {/* Container da Foto sem cortes, interativo para abrir a foto inteira */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsImageOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsImageOpen(true);
                    }
                  }}
                  aria-label="Clique para abrir a foto inteira em alta definição"
                  className="relative w-full aspect-[4/3] rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden bg-black cursor-pointer group/img focus:outline-none focus:ring-2 focus:ring-[#65f603]"
                >
                  <img
                    src={IMAGES.aboutHighlight}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.src !== IMAGES.aboutHighlightPng) {
                        target.src = IMAGES.aboutHighlightPng;
                      } else if (target.src !== IMAGES.aboutHighlightRemote) {
                        target.src = IMAGES.aboutHighlightRemote;
                      }
                    }}
                    alt="Ambiente e Treino na Academia Efraim Fitness"
                    width="1448"
                    height="1086"
                    className="w-full h-full object-cover select-none transition-transform duration-500 group-hover/img:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Vinheta luxuosa sutil sem cobrir a foto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.08] rounded-[1.25rem] sm:rounded-[1.5rem] pointer-events-none" />

                  {/* Badge Minimalista Dark com Efraim Fitness */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/[0.08] pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-[#65f603] shadow-[0_0_6px_#65f603]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Efraim Fitness
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Tela Cheia via Portal diretamente no body para sobrepor o cabeçalho fixo com 100% de garantia */}
          {isImageOpen &&
            typeof document !== 'undefined' &&
            createPortal(
              <div
                role="dialog"
                aria-modal="true"
                aria-label="Foto em tela cheia"
                onClick={() => setIsImageOpen(false)}
                className="fixed inset-0 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/95 backdrop-blur-md animate-fade-in transition-opacity duration-300"
                style={{ zIndex: 999999 }}
              >
                {/* Botão Superior para Fechar a Tela Cheia */}
                <button
                  type="button"
                  onClick={() => setIsImageOpen(false)}
                  className="fixed top-4 right-4 sm:top-6 sm:right-6 inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-black/85 hover:bg-[#65f603] text-white hover:text-black border border-white/20 hover:border-[#65f603] shadow-2xl transition-all duration-200 cursor-pointer group focus:outline-none"
                  style={{ zIndex: 1000000 }}
                  aria-label="Fechar tela cheia"
                >
                  <X className="w-5 h-5 transition-transform duration-200 group-hover:rotate-90" />
                  <span className="text-xs font-black uppercase tracking-wider hidden sm:inline">
                    Fechar
                  </span>
                </button>

                {/* Exibição Apenas da Imagem em Tela Cheia com Bordas Arredondadas */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-full max-h-full flex items-center justify-center animate-scale-up select-none"
                >
                  <img
                    src={IMAGES.aboutHighlight}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.src !== IMAGES.aboutHighlightPng) {
                        target.src = IMAGES.aboutHighlightPng;
                      } else if (target.src !== IMAGES.aboutHighlightRemote) {
                        target.src = IMAGES.aboutHighlightRemote;
                      }
                    }}
                    alt="Ambiente e Treino na Academia Efraim Fitness - Tela Cheia"
                    className="w-auto h-auto max-w-[94vw] max-h-[88vh] object-contain rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(101,246,3,0.25)] border border-white/15"
                  />
                </div>
              </div>,
              document.body
            )}

          {/* ========================================================= */}
          {/* COLUNA DE CONTEÚDO INSTITUCIONAL & DIFERENCIAIS */}
          {/* Mobile: Aparece DEPOIS da Foto (order-2) | Desktop: À ESQUERDA (lg:order-1) */}
          {/* ========================================================= */}
          <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Kicker apenas com as palavras */}
            <div>
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#65f603] block">
                SOBRE A EFRAIM
              </span>
            </div>

            {/* Headline Principal: MAIS QUE UMA ACADEMIA */}
            <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-black uppercase tracking-tight text-white leading-[1.08] text-center lg:text-left">
              MAIS QUE UMA
              <br />
              <span className="text-[#65f603]">ACADEMIA.</span>
            </h2>

            {/* Textos explicativos institucionais */}
            <div className="space-y-3.5 text-gray-200 text-sm sm:text-base leading-relaxed font-normal max-w-xl mx-auto lg:mx-0">
              <p>
                Na Efraim Fitness, cada treino tem um propósito. Oferecemos musculação, treinamento funcional e prescrição de treinos online, com o suporte de avaliação física antropométrica, bioimpedância e acompanhamento personalizado.
              </p>
              <p className="text-gray-300">
                Tudo isso para proporcionar um treinamento mais estratégico, monitorar sua evolução e ajudar você a conquistar resultados com mais consciência, consistência e foco nos seus objetivos.
              </p>
            </div>

            {/* Diferenciais em grade estilizados com borda neon e ícones reduzidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-2 w-full max-w-lg mx-auto lg:mx-0">
              {differentials.map((item, index) => {
                const Icon = item.icon;
                const isLastOdd = index === differentials.length - 1 && differentials.length % 2 !== 0;
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-start gap-2.5 py-2.5 px-3 rounded-xl bg-white/[0.025] border border-white/[0.08] hover:border-[#65f603]/60 hover:bg-[#65f603]/5 transition-all duration-300 group text-left min-h-[48px] ${
                      isLastOdd ? 'sm:col-span-2 sm:max-w-[280px] sm:mx-auto' : ''
                    }`}
                  >
                    {/* Círculo com borda verde idêntico ao da logo e ícone minimalista compacto */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-[1.5px] border-[#65f603] bg-black/90 flex items-center justify-center text-[#65f603] shrink-0 group-hover:scale-105 group-hover:bg-[#65f603]/15 transition-all duration-300 shadow-sm">
                      <Icon className="w-3.5 h-3.5 stroke-[2]" />
                    </div>

                    {/* Texto em duas linhas caixa-alta com tipografia proporcional e harmônica */}
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase text-white/90 tracking-wide leading-tight group-hover:text-[#65f603] transition-colors">
                        {item.line1}
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase text-white/90 tracking-wide leading-tight group-hover:text-[#65f603] transition-colors">
                        {item.line2}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Continuidade da Segunda Hero: Ala do Vídeo com Recado Especial */}
        <VideoSection
          videoId={IMAGES.videoJocelYouTubeId}
          posterSrc={IMAGES.videoJocelPoster}
          remotePosterSrc={IMAGES.videoJocelRemotePoster}
        />

      </div>
    </section>
  );
};
