import React from 'react';
import { GYM_INFO, IMAGES, createWhatsAppLink } from '../data/gymData';
import {
  ExclusiveWhatsAppIcon,
  ExclusiveInstagramIcon,
} from './ExclusiveIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050607] border-t border-[#1f242d] py-6 sm:py-7 text-xs text-gray-400 relative overflow-hidden">
      {/* Brilho sutil de fundo no topo central */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-16 bg-[#5CFF00]/5 blur-2xl pointer-events-none rounded-full" />

      <div className="max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-[5%] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          {/* Identidade Visual & Frase Compacta */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <img
              src={IMAGES.brandLogo}
              alt="Academia Efraim Fitness"
              width="72"
              height="36"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                if (target.src !== IMAGES.brandLogoPng) {
                  target.src = IMAGES.brandLogoPng;
                } else if (target.src !== IMAGES.brandLogoRemote) {
                  target.src = IMAGES.brandLogoRemote;
                }
              }}
              className="h-8 sm:h-9 w-auto object-contain select-none shrink-0"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(92, 255, 0, 0.4))',
              }}
            />
            <div className="h-4 w-px bg-[#1f242d] hidden sm:block" />
            <p className="text-[11px] sm:text-xs text-gray-400 max-w-sm sm:max-w-none">
              Seu treino. Seu ritmo. Seu resultado. • Nanuque - MG
            </p>
          </div>

          {/* Redes Sociais Compactas */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-gray-500 hidden lg:inline">
              Siga nossas redes:
            </span>

            <div className="flex items-center gap-2">
              <a
                aria-label="Instagram da Academia Efraim Fitness"
                href={GYM_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#121418] border border-[#1f242d] hover:border-[#5CFF00] flex items-center justify-center text-gray-300 hover:text-[#5CFF00] transition-all duration-200 shadow-sm hover:shadow-[0_0_12px_rgba(92,255,0,0.3)] hover:scale-105 active:scale-95"
              >
                <ExclusiveInstagramIcon className="w-4 h-4" />
              </a>

              <a
                aria-label="WhatsApp da Academia Efraim Fitness"
                href={createWhatsAppLink(GYM_INFO.defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#121418] border border-[#1f242d] hover:border-[#5CFF00] flex items-center justify-center text-gray-300 hover:text-[#5CFF00] transition-all duration-200 shadow-sm hover:shadow-[0_0_12px_rgba(92,255,0,0.3)] hover:scale-105 active:scale-95"
              >
                <ExclusiveWhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha de Direitos Compacta */}
        <div className="mt-4 pt-3 border-t border-[#1f242d]/60 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[10.5px] text-gray-500 text-center sm:text-left">
          <p>© 2026 Academia Efraim Fitness • Todos os direitos reservados.</p>
          <p className="text-gray-400 font-medium">Musculação • Funcional • Consultoria em Nanuque - MG</p>
        </div>
      </div>
    </footer>
  );
};
