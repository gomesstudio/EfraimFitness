import React from 'react';
import { GYM_INFO, IMAGES, createWhatsAppLink } from '../data/gymData';
import {
  ExclusiveWhatsAppIcon,
  ExclusiveInstagramIcon,
} from './ExclusiveIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050607] border-t border-[#1f242d] py-14 sm:py-18 text-xs text-gray-400 relative overflow-hidden">
      {/* Brilho sutil de fundo no topo central */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-[#5CFF00]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center space-y-8 sm:space-y-9 relative z-10">
        {/* Identidade Visual & Logo Centralizado */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={IMAGES.brandLogo}
            alt="Academia Efraim Fitness"
            className="h-11 sm:h-12 w-auto object-contain select-none"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(92, 255, 0, 0.45))',
            }}
          />
          <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed max-w-md mx-auto font-normal">
            Seu treino. Seu ritmo. Seu resultado. A academia que une alta performance,
            acompanhamento personalizado e conforto exclusivo em Nanuque - MG.
          </p>
        </div>

        {/* Símbolos Centralizados: Instagram e WhatsApp */}
        <div className="flex items-center justify-center gap-4 py-1">
          <a
            aria-label="Instagram da Academia Efraim Fitness"
            href={GYM_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-[#121418] border border-[#1f242d] hover:border-[#5CFF00] flex items-center justify-center text-gray-300 hover:text-[#5CFF00] transition-all duration-200 shadow-md hover:shadow-[0_0_16px_rgba(92,255,0,0.35)] hover:scale-105 active:scale-95"
          >
            <ExclusiveInstagramIcon className="w-5 h-5" />
          </a>

          <a
            aria-label="WhatsApp da Academia Efraim Fitness"
            href={createWhatsAppLink(GYM_INFO.defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-[#121418] border border-[#1f242d] hover:border-[#5CFF00] flex items-center justify-center text-gray-300 hover:text-[#5CFF00] transition-all duration-200 shadow-md hover:shadow-[0_0_16px_rgba(92,255,0,0.35)] hover:scale-105 active:scale-95"
          >
            <ExclusiveWhatsAppIcon className="w-5 h-5" />
          </a>
        </div>

        {/* Assinatura & Direitos Reservados */}
        <div className="flex flex-col items-center text-center space-y-1.5 text-gray-500 text-[11px] pt-4 border-t border-[#1f242d]/80 w-full max-w-sm">
          <p>© 2026 Academia Efraim Fitness • Todos os direitos reservados.</p>
          <p className="text-gray-400 font-medium">Nanuque - MG • Athletic Luxury Experience</p>
        </div>
      </div>
    </footer>
  );
};
