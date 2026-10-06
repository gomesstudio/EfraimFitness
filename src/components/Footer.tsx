import React from 'react';
import { GYM_INFO, IMAGES, createWhatsAppLink } from '../data/gymData';
import {
  ExclusiveWhatsAppIcon,
  ExclusiveInstagramIcon,
} from './ExclusiveIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050607] border-t border-[#1f242d] py-16 sm:py-20 text-xs text-gray-400 relative overflow-hidden">
      {/* Brilho sutil de fundo no topo central */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-[#5CFF00]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col items-center text-center space-y-10 sm:space-y-12 relative z-10">
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

        {/* Informações Centrais: Funcionamento & Canais de Atendimento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 w-full max-w-2xl py-8 border-y border-[#1f242d]/80 text-center">
          {/* Horários de Funcionamento */}
          <div className="flex flex-col items-center space-y-2.5">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#5CFF00]">
              Funcionamento
            </h4>
            <div className="text-xs text-gray-300 leading-relaxed space-y-1">
              <p className="font-semibold text-white">Segunda a Sexta-feira</p>
              <p className="text-gray-400">Manhã: 05h00 às 10h00</p>
              <p className="text-gray-400">Tarde / Noite: 14h00 às 21h00</p>
            </div>
            <span className="text-[11px] text-gray-500 pt-0.5">
              Consulte horários de feriados via WhatsApp.
            </span>
          </div>

          {/* Canais de Atendimento e Redes */}
          <div className="flex flex-col items-center space-y-2.5">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#5CFF00]">
              Canais de Atendimento
            </h4>
            <div className="text-xs text-gray-300 leading-relaxed space-y-1">
              <p>
                WhatsApp:{' '}
                <strong className="text-white font-semibold">{GYM_INFO.phone}</strong>
              </p>
              <p>
                Instagram:{' '}
                <a
                  href={GYM_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5CFF00] hover:underline font-medium"
                >
                  {GYM_INFO.instagramHandle}
                </a>
              </p>
            </div>

            {/* Ícones de Acesso Direto */}
            <div className="flex items-center justify-center gap-3 pt-1.5">
              <a
                aria-label="Instagram da Academia Efraim Fitness"
                href={GYM_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#121418] border border-[#1f242d] hover:border-[#5CFF00] flex items-center justify-center text-gray-300 hover:text-[#5CFF00] transition-all duration-200 shadow-sm hover:shadow-[0_0_12px_rgba(92,255,0,0.3)] active:scale-95"
              >
                <ExclusiveInstagramIcon className="w-4 h-4" />
              </a>

              <a
                aria-label="WhatsApp da Academia Efraim Fitness"
                href={createWhatsAppLink(GYM_INFO.defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#121418] border border-[#1f242d] hover:border-[#5CFF00] flex items-center justify-center text-gray-300 hover:text-[#5CFF00] transition-all duration-200 shadow-sm hover:shadow-[0_0_12px_rgba(92,255,0,0.3)] active:scale-95"
              >
                <ExclusiveWhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Assinatura & Direitos Reservados */}
        <div className="flex flex-col items-center text-center space-y-2 text-gray-500 text-[11px]">
          <p>© 2026 Academia Efraim Fitness • Todos os direitos reservados.</p>
          <p className="text-gray-400 font-medium">Nanuque - MG • Athletic Luxury Experience</p>
        </div>
      </div>
    </footer>
  );
};
