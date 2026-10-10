import React from 'react';

interface SectionDividerProps {
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full overflow-hidden flex items-center justify-center py-2 sm:py-3 select-none pointer-events-none bg-brand-pitch ${className}`}
      aria-hidden="true"
    >
      {/* Contêiner de largura máxima idêntico aos containers das seções */}
      <div className="relative w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {/* Linha de base discreta: gradiente suave das extremidades transparentes até o centro */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent relative overflow-hidden">
          {/* Feixe animado de luz verde (#65f603) que desliza de um lado ao outro */}
          <div
            className="absolute top-0 bottom-0 w-28 sm:w-48 -left-32 animate-beam-slide bg-gradient-to-r from-transparent via-[#65f603] to-transparent opacity-80"
            style={{
              filter: 'drop-shadow(0 0 6px rgba(101, 246, 3, 0.8))',
            }}
          />
        </div>

        {/* Detalhe central geométrico: diamante com brilho suave e sutil */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          {/* Halo de pulsação suave no verde da marca */}
          <div className="w-6 h-6 rounded-full bg-[#65f603]/15 blur-sm animate-pulse-subtle" />

          {/* Diamante central em rotação 45 graus */}
          <div className="absolute w-1.5 h-1.5 rotate-45 bg-[#65f603] shadow-[0_0_8px_rgba(101,246,3,0.9)]" />
        </div>
      </div>
    </div>
  );
};
