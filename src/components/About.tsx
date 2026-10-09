import React from 'react';
import { Dumbbell, ClipboardList, TrendingUp, Star, Smartphone, ShieldCheck } from 'lucide-react';
import { IMAGES } from '../data/gymData';
import { VideoSection } from './VideoSection';

export const About: React.FC = () => {
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
            <div className="relative w-full max-w-[540px] lg:max-w-none lg:translate-x-5 xl:translate-x-7 group">
              
              {/* Efeito Halo Sutil Dark Luxuoso de Profundidade */}
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-tr from-[#65f603]/15 via-emerald-500/5 to-transparent rounded-[2.25rem] blur-2xl opacity-60 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none" />

              {/* Moldura Minimalista Luxuosa Estilo Dark */}
              <div className="relative rounded-[1.75rem] sm:rounded-[2rem] p-2.5 sm:p-3 bg-gradient-to-b from-[#18181b] via-[#0e0e11] to-[#08080a] border border-white/[0.09] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(101,246,3,0.08)] backdrop-blur-xl transition-all duration-500 group-hover:border-[#65f603]/30 group-hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_45px_rgba(101,246,3,0.16)]">
                
                {/* Linha de reflexo sutil superior metálica (luxo minimalista) */}
                <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                {/* Container da Foto sem cortes, exibindo a imagem completa em proporção nativa 4:3 */}
                <div className="relative w-full aspect-[4/3] rounded-[1.25rem] sm:rounded-[1.5rem] overflow-hidden bg-black">
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
                    className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Vinheta luxuosa sutil sem cobrir a foto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.08] rounded-[1.25rem] sm:rounded-[1.5rem] pointer-events-none" />

                  {/* Badge Minimalista Dark com Efraim Fitness */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-md border border-white/[0.08]">
                    <div className="w-2 h-2 rounded-full bg-[#65f603] shadow-[0_0_6px_#65f603]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-white">
                      Efraim Fitness
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* COLUNA DE CONTEÚDO INSTITUCIONAL & DIFERENCIAIS */}
          {/* Mobile: Aparece DEPOIS da Foto (order-2) | Desktop: À ESQUERDA (lg:order-1) */}
          {/* ========================================================= */}
          <div className="order-2 lg:order-1 lg:col-span-6 xl:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Kicker com traço verde idêntico ao da identidade visual */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5">
              <span className="w-7 sm:w-8 h-[2px] bg-[#65f603]" />
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#65f603]">
                SOBRE A EFRAIM
              </span>
            </div>

            {/* Headline Principal: MAIS QUE UMA ACADEMIA */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-black uppercase tracking-tight text-white leading-[1.05]">
              MAIS QUE UMA
              <br />
              <span className="text-[#65f603]">ACADEMIA.</span>
            </h2>

            {/* Textos explicativos institucionais */}
            <div className="space-y-3.5 text-gray-200 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              <p>
                Na Efraim Fitness, cada treino tem um propósito. Oferecemos musculação, treinamento funcional e prescrição de treinos online, com o suporte de avaliação física antropométrica, bioimpedância e acompanhamento personalizado.
              </p>
              <p className="text-gray-300">
                Tudo isso para proporcionar um treinamento mais estratégico, monitorar sua evolução e ajudar você a conquistar resultados com mais consciência, consistência e foco nos seus objetivos.
              </p>
            </div>

            {/* Diferenciais em grade estilizados com borda neon e ícones reduzidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-1 w-full max-w-lg">
              {differentials.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-start gap-2.5 py-2 px-2.5 sm:px-3 rounded-lg bg-white/[0.025] border border-white/[0.08] hover:border-[#65f603]/60 hover:bg-[#65f603]/5 transition-all duration-300 group text-left"
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
          shareUrl={IMAGES.videoJocelFlexClip}
          videoSrc={IMAGES.videoJocelSrc}
          videoRemoteSrc={IMAGES.videoJocelRemoteSrc}
          posterSrc={IMAGES.videoJocelPoster}
          remotePosterSrc={IMAGES.videoJocelRemotePoster}
        />

      </div>
    </section>
  );
};
