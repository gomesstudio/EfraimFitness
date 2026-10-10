import React from 'react';
import { Sparkles } from 'lucide-react';
import { createWhatsAppLink } from '../data/gymData';
import {
  ExclusiveWhatsAppIcon,
  ExclusiveArrowRight,
} from './ExclusiveIcons';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-pitch relative overflow-hidden border-b border-brand-border/60">
      {/* Background glow decoration */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[130px] opacity-25"
          style={{ background: 'rgba(101, 246, 3, 0.25)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface border border-[#65f603]/40 text-[#65f603] text-[11px] font-black tracking-wider uppercase mb-5 sm:mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          COMECE HOJE MESMO
        </div>

        <h2 className="text-[clamp(1.75rem,5.5vw,3.5rem)] font-black uppercase tracking-tight text-white leading-tight max-w-3xl mx-auto text-balance">
          SEU OBJETIVO COMEÇA COM UMA <span className="text-[#65f603]">DECISÃO</span>.
        </h2>

        <p className="text-gray-300 text-xs sm:text-sm lg:text-base max-w-xl mx-auto mt-3.5 sm:mt-5 leading-relaxed font-normal">
          Garanta sua vaga na Efraim Fitness e venha treinar com musculação completa, equipamentos de qualidade e suporte presencial em Nanuque.
        </p>

        {/* Action Button: Garantir Matrícula */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center w-full max-w-xs sm:max-w-none mx-auto">
          <a
            href={createWhatsAppLink('Olá! Quero me matricular na Efraim Fitness e começar a treinar!')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#65f603] hover:bg-[#59e002] text-black font-extrabold text-xs sm:text-[13px] uppercase tracking-wider px-7 sm:px-8 py-3.5 min-h-[48px] rounded-full transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(101,246,3,0.35)] active:scale-[0.98] cursor-pointer group shrink-0 text-center"
          >
            <ExclusiveWhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" />
            <span>Garantir Minha Matrícula</span>
            <ExclusiveArrowRight className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
};
