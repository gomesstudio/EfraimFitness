import React from 'react';
import { GYM_INFO, IMAGES, createWhatsAppLink } from '../data/gymData';

interface HeroProps {
  onOpenTrialModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrialModal }) => {
  const handleScrollToSobre = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.querySelector('#sobre');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative w-full min-h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-4.5rem)] min-h-[640px] flex items-center overflow-hidden bg-black"
    >
      {/* 1. BACKGROUND: Imagem da academia/equipamentos com cover e center */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${IMAGES.heroBackground})`,
        }}
      />

      {/* 2. OVERLAY: Escurecimento cinematográfico com contraste no lado esquerdo/central e transparência à direita */}
      <div className="absolute inset-0 z-[1] bg-black/40 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black via-black/80 via-45% to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

      {/* 3. CONTAINER PRINCIPAL: Conteúdo perfeitamente equilibrado e centralizado verticalmente no Viewport (100vh) */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 h-full flex flex-col justify-center items-center lg:items-start pt-8 pb-16 sm:pt-10 sm:pb-20 lg:py-0">
        
        {/* Bloco de Conteúdo: hero-content posicionado na área esquerda-centro e ajustado um pouco mais acima */}
        <div className="hero-content w-full lg:max-w-[660px] xl:max-w-[720px] flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5 lg:space-y-6 my-auto -translate-y-3 sm:-translate-y-4 lg:-translate-y-6 xl:-translate-y-8 mx-auto lg:mx-0 lg:ml-2 xl:ml-6">
          
          {/* 1. LOGO EFRAIM FITNESS: Proporcional e alinhado na área esquerda-centro */}
          <div className="w-full flex items-center justify-center lg:justify-start">
            <img
              src={IMAGES.brandLogo}
              alt="Efraim Fitness"
              className="w-[150px] sm:w-[190px] lg:w-[220px] h-auto object-contain select-none pointer-events-none mx-auto lg:mx-0"
              style={{
                filter: 'drop-shadow(0 0 12px rgba(92, 255, 0, 0.45))',
              }}
              loading="eager"
            />
          </div>

          {/* 2. TÍTULO PRINCIPAL: 2 Linhas Inteiras, Centralizado no Mobile e Alinhado na Área Esquerda-Centro no Desktop */}
          <h1 className="w-full uppercase tracking-tight leading-[1.02] sm:leading-[0.98] text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Linha 1: 'SEU OBJETIVO.' (BRANCO) */}
            <span className="block font-black text-white text-[clamp(1.4rem,6.2vw,2.5rem)] sm:text-[clamp(2.4rem,5.2vw,3.6rem)] lg:text-[56px] xl:text-[64px] tracking-tight whitespace-nowrap text-center lg:text-left mx-auto lg:mx-0">
              SEU OBJETIVO.
            </span>
            {/* Linha 2: 'NOSSA MISSÃO.' (VERDE NEON/LIMA #5CFF00) */}
            <span className="block font-black text-[#5CFF00] text-[clamp(1.4rem,6.2vw,2.5rem)] sm:text-[clamp(2.4rem,5.2vw,3.6rem)] lg:text-[56px] xl:text-[64px] tracking-tight mt-1 whitespace-nowrap text-center lg:text-left mx-auto lg:mx-0">
              NOSSA MISSÃO.
            </span>
          </h1>

          {/* 3. DESCRIÇÃO: Largura balanceada de ~460px */}
          <p className="text-[#B8B8B8] text-sm sm:text-[15px] lg:text-base leading-relaxed font-normal max-w-[460px] text-center lg:text-left mx-auto lg:mx-0 px-2 sm:px-0">
            Musculação, treinamento funcional e acompanhamento personalizado para você evoluir de verdade.
          </p>

          {/* 4. BOTÕES CTA: Lado a Lado no Desktop e Adaptativos no Mobile */}
          <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4 w-full max-w-[340px] sm:max-w-none mx-auto lg:mx-0">
            {/* BOTÃO PRINCIPAL: QUERO COMEÇAR → */}
            <a
              href={createWhatsAppLink('Olá! Vim pelo site da Efraim Fitness e quero começar a treinar!')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#5CFF00] hover:bg-[#52e600] text-black font-extrabold text-xs sm:text-[13px] uppercase tracking-wider px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-[0_0_20px_rgba(92,255,0,0.5)] active:scale-[0.98] w-full sm:w-auto shrink-0"
            >
              {/* Badge Circular Esportivo */}
              <span className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-[#5CFF00] fill-current" viewBox="0 0 24 24">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
                </svg>
              </span>
              <span>QUERO COMEÇAR</span>
              {/* Seta à Direita */}
              <svg
                className="w-4 h-4 text-black stroke-current shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12h14.5" />
                <path d="m13 6.5 5.5 5.5-5.5 5.5" />
              </svg>
            </a>

            {/* BOTÃO SECUNDÁRIO: [ÍCONE INSTAGRAM] NOSSO INSTAGRAM */}
            <a
              href={GYM_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#5CFF00] text-white hover:bg-[#5CFF00] hover:text-black font-extrabold text-xs sm:text-[13px] uppercase tracking-wider px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200 bg-black/40 backdrop-blur-sm active:scale-[0.98] group w-full sm:w-auto shrink-0"
            >
              {/* Ícone Instagram Verde */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-[#5CFF00] group-hover:text-black transition-colors shrink-0"
              >
                <rect width="18" height="18" x="3" y="3" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
              </svg>
              <span>NOSSO INSTAGRAM</span>
            </a>
          </div>

        </div>
      </div>

      {/* 5. SCROLL INDICATOR: Na parte inferior central da hero */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto">
        <a
          href="#sobre"
          onClick={handleScrollToSobre}
          className="group flex flex-col items-center text-gray-300 hover:text-[#5CFF00] transition-colors duration-200"
          aria-label="Rolar para descobrir a próxima seção"
        >
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#B8B8B8] group-hover:text-white transition-colors mb-1 drop-shadow">
            ROLE PARA DESCOBRIR
          </span>
          {/* Seta Verde Neon apontando para baixo */}
          <svg
            className="w-4 h-4 text-[#5CFF00] animate-bounce"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
};
