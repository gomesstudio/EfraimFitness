import React from 'react';
import { ChevronDown } from 'lucide-react';
import { GYM_INFO, IMAGES, createWhatsAppLink } from '../data/gymData';
import {
  ExclusiveWhatsAppIcon,
  ExclusiveInstagramIcon,
  ExclusiveArrowRight,
} from './ExclusiveIcons';

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
      className="relative w-full min-h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-4.5rem)] min-h-[580px] flex items-center justify-center lg:justify-start overflow-hidden overflow-x-hidden bg-black"
    >
      {/* 1. IMAGEM DE FUNDO: Ocupa toda a área com background-size: cover e background-position: center */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${IMAGES.heroBackground})`,
        }}
      />

      {/* 2. OVERLAY ESCURO SUTIL: Contraste perfeito sem ocultar os aparelhos e luzes da academia */}
      <div className="absolute inset-0 z-[1] bg-black/40 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none lg:bg-gradient-to-r lg:from-black/90 lg:via-black/55 lg:to-transparent" />

      {/* 3. ELEMENTOS DECORATIVOS: Linhas diagonais discretas no lado direito (apenas desktop grande) */}
      <div className="absolute right-0 top-1/4 w-72 h-72 pointer-events-none opacity-40 hidden xl:block z-[2]">
        <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
          <line x1="200" y1="40" x2="110" y2="190" stroke="#65f603" strokeWidth="2.5" />
          <line x1="200" y1="75" x2="135" y2="190" stroke="#65f603" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 4. CONTAINER PRINCIPAL: Totalmente centralizado em telas mobile com padding seguro anti-overflow */}
      <div className="relative z-10 max-w-[1536px] mx-auto px-4 xs:px-5 sm:px-8 lg:px-[5%] w-full h-full flex items-center justify-center lg:justify-start py-8 sm:py-12 lg:py-6">
        
        {/* Coluna de Conteúdo: 100% centralizada no mobile e alinhada à esquerda no desktop */}
        <div className="w-full lg:w-[50%] max-w-[580px] text-center lg:text-left flex flex-col items-center lg:items-start justify-center space-y-4 sm:space-y-5 mx-auto lg:mx-0 lg:-translate-y-8">
          
          {/* LOGO NO TOPO: Perfeitamente centralizada e proporcional para telas menores */}
          <div className="w-full flex justify-center lg:justify-start items-center">
            <img
              src={IMAGES.brandLogo}
              alt="Academias Efraim Fitness"
              className="w-[190px] xs:w-[220px] sm:w-[290px] lg:w-[380px] xl:w-[410px] max-w-full h-auto object-contain select-none pointer-events-none mx-auto lg:mx-0"
              style={{
                filter:
                  'drop-shadow(0 0 16px rgba(101, 246, 3, 0.45)) drop-shadow(0 3px 8px rgba(0, 0, 0, 0.9))',
              }}
              loading="eager"
            />
          </div>

          {/* TÍTULO: Dimensionamento responsivo anti-overflow com pesos distintos e contraste branco/verde */}
          <h1 className="w-full uppercase tracking-tight leading-[0.98] sm:leading-[0.94] text-center lg:text-left drop-shadow-2xl">
            {/* Linha 1: 'SEU OBJETIVO.' com peso font-extrabold (800) em branco sólido */}
            <span className="block font-bold sm:font-extrabold text-white text-[28px] xs:text-[32px] sm:text-[44px] md:text-5xl lg:text-[62px] xl:text-[68px] tracking-tight">
              SEU OBJETIVO.
            </span>
            {/* Linha 2: 'NOSSA MISSÃO.' com peso font-black (900) ultra-pesado no verde oficial (#65f603) */}
            <span className="block font-black text-[#65f603] text-[28px] xs:text-[32px] sm:text-[44px] md:text-5xl lg:text-[62px] xl:text-[68px] tracking-tight mt-0.5 sm:mt-1">
              NOSSA MISSÃO.
            </span>
          </h1>

          {/* DESCRIÇÃO: Centralizada no mobile com largura balanceada */}
          <p className="text-gray-100 text-xs sm:text-base lg:text-[18px] leading-relaxed font-normal max-w-[460px] text-center lg:text-left mx-auto lg:mx-0 drop-shadow-md px-2 sm:px-0">
            Musculação, treinamento funcional e acompanhamento personalizado para você evoluir de verdade.
          </p>

          {/* BOTÕES DE AÇÃO: Padrão Premium de Alto Nível (proporções elegantes e ícones exclusivos) */}
          <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 w-full max-w-[320px] sm:max-w-none mx-auto lg:mx-0">
            {/* CTA 1: QUERO COMEÇAR (Design refinado com verde oficial #65f603 e ícone exclusivo) */}
            <a
              href={createWhatsAppLink('Olá! Vim pelo site da Efraim Fitness e quero começar a treinar!')}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 bg-[#65f603] hover:bg-[#59e002] text-black font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.09em] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-[0_0_18px_rgba(101,246,3,0.35)] active:scale-[0.98] w-full sm:w-auto"
            >
              <ExclusiveWhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              <span>QUERO COMEÇAR</span>
              <ExclusiveArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>

            {/* CTA 2: NOSSO INSTAGRAM (Design translúcido sofisticado com borda fina de alta precisão) */}
            <a
              href={GYM_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 border border-[#65f603]/80 hover:border-[#65f603] text-white hover:bg-[#65f603] hover:text-black font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.09em] px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 bg-black/40 backdrop-blur-md active:scale-[0.98] w-full sm:w-auto"
            >
              <ExclusiveInstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#65f603] group-hover:text-black transition-colors" />
              <span>NOSSO INSTAGRAM</span>
            </a>
          </div>

          {/* INSTAGRAM HANDLE: @efraimfitness_ */}
          <div className="pt-0.5 flex items-center justify-center lg:justify-start gap-1.5 text-xs text-gray-200 w-full mx-auto">
            <ExclusiveInstagramIcon className="w-3.5 h-3.5 text-[#65f603]" />
            <a
              href={GYM_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-300 hover:text-[#65f603] transition-colors"
            >
              {GYM_INFO.instagramHandle}
            </a>
          </div>

        </div>
      </div>

      {/* 5. ELEMENTO 'ROLE PARA DESCOBRIR' CENTRALIZADO NA BASE */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto">
        <a
          href="#sobre"
          onClick={handleScrollToSobre}
          className="group flex flex-col items-center text-gray-300 hover:text-[#65f603] transition-colors duration-200"
          aria-label="Rolar para descobrir a próxima seção"
        >
          <div className="w-[1.5px] h-5 sm:h-6 bg-[#65f603] mb-1.5" />
          <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.22em] uppercase mb-1 drop-shadow">
            ROLE PARA DESCOBRIR
          </span>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce text-white group-hover:text-[#65f603] transition-colors" />
        </a>
      </div>
    </section>
  );
};
