import React from 'react';
import { Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';
import {
  ExclusiveCalendarIcon,
  ExclusiveInstagramIcon,
  ExclusiveArrowRight,
} from './ExclusiveIcons';

interface FinalCtaProps {
  onOpenTrialModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenTrialModal }) => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-pitch relative overflow-hidden border-b border-brand-border/60">
      {/* Background glow decoration */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[130px] opacity-25"
          style={{ background: 'rgba(101, 246, 3, 0.25)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-[#65f603]/40 text-[#65f603] text-[11px] font-black tracking-wider uppercase mb-6 shadow-sm">
          <Sparkles className="w-3 h-3" />
          COMECE HOJE MESMO
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight max-w-3xl mx-auto">
          SEU OBJETIVO COMEÇA COM UMA <span className="text-[#65f603]">DECISÃO</span>.
        </h2>

        <p className="text-gray-300 text-xs sm:text-sm lg:text-base max-w-xl mx-auto mt-4 sm:mt-5 leading-relaxed font-normal">
          Agende sua aula experimental gratuita e venha sentir a motivação, os equipamentos e o acompanhamento personalizado da Efraim Fitness em Nanuque.
        </p>

        {/* Action Buttons: Padrão Premium de Alto Nível */}
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-3.5 max-w-md sm:max-w-none mx-auto">
          <button
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#65f603] hover:bg-[#59e002] text-black font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.09em] px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(101,246,3,0.35)] active:scale-[0.98] cursor-pointer group"
          >
            <ExclusiveCalendarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Agendar Aula Gratuita</span>
            <ExclusiveArrowRight className="w-3 h-3" />
          </button>

          <a
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#65f603]/80 hover:border-[#65f603] text-white hover:bg-[#65f603] hover:text-black font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.09em] px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-full transition-all duration-200 bg-black/40 backdrop-blur-md active:scale-[0.98] group"
            href={GYM_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExclusiveInstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#65f603] group-hover:text-black transition-colors" />
            <span>Seguir no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};
