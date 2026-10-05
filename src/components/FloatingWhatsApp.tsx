import React, { useState } from 'react';
import { GYM_INFO, createWhatsAppLink } from '../data/gymData';

export const FloatingWhatsApp: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover/mobile teaser */}
      {hovered && (
        <div className="hidden sm:flex bg-black/90 border border-[#65f603]/50 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-2xl backdrop-blur-md items-center gap-2 animate-in fade-in slide-in-from-right-3">
          <span className="w-2 h-2 rounded-full bg-[#65f603] animate-pulse" />
          <span>Fale no WhatsApp agora</span>
        </div>
      )}

      <a
        aria-label="Fale conosco pelo WhatsApp"
        className="bg-[#65f603] hover:bg-[#59e002] text-black p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center justify-center glow-lime focus:outline-none focus:ring-4 focus:ring-[#65f603]/50"
        href={createWhatsAppLink('Olá! Gostaria de tirar dúvidas sobre a Academia Efraim Fitness.')}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.076-1.927-.433-1.46-.603-2.404-2.079-2.477-2.176-.072-.098-.592-.787-.592-1.503 0-.717.377-1.07.51-1.215.134-.145.291-.182.387-.182s.193.003.277.008c.089.005.208-.033.324.246.121.291.413 1.007.449 1.08.036.073.06.158.012.255-.049.097-.073.158-.145.242-.073.085-.153.189-.219.255-.073.073-.148.152-.063.297.085.146.378.623.811 1.009.559.497 1.029.651 1.175.724.146.073.23.061.316-.037.085-.097.364-.424.461-.57.097-.145.194-.121.328-.073s.85.401.996.474c.145.073.242.109.279.17.036.061.036.353-.108.758z" />
        </svg>
      </a>
    </div>
  );
};
