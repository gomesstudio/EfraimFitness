import React from 'react';

interface IconProps {
  className?: string;
}

/** Ícone de WhatsApp Minimalista & Exclusivo em Alta Definição */
export const ExclusiveWhatsAppIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`${className} shrink-0`}
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.08C19.42 7.64 20.28 9.71 20.28 11.92C20.28 16.46 16.58 20.16 12.04 20.16C10.6 20.16 9.18 19.78 7.93 19.04L7.63 18.86L4.52 19.68L5.35 16.65L5.15 16.33C4.34 15.04 3.8 13.5 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67ZM8.73 7.34C8.54 7.34 8.24 7.41 7.98 7.7C7.72 7.98 6.98 8.67 6.98 10.08C6.98 11.49 8.01 12.85 8.16 13.04C8.3 13.23 10.15 16.08 12.98 17.3C13.65 17.59 14.18 17.76 14.59 17.89C15.26 18.11 15.87 18.08 16.36 18C16.9 17.92 18.04 17.31 18.28 16.65C18.52 15.98 18.52 15.41 18.45 15.3C18.37 15.18 18.19 15.11 17.91 14.97C17.63 14.83 16.27 14.16 16.01 14.07C15.76 13.97 15.57 13.93 15.39 14.21C15.2 14.49 14.67 15.11 14.51 15.3C14.35 15.48 14.19 15.5 13.91 15.36C13.63 15.23 12.74 14.93 11.68 13.99C10.86 13.25 10.3 12.35 10.14 12.07C9.98 11.79 10.13 11.64 10.27 11.5C10.39 11.38 10.54 11.18 10.68 11.02C10.82 10.85 10.87 10.74 10.96 10.55C11.05 10.36 11.01 10.2 10.94 10.06C10.87 9.92 10.31 8.54 10.08 7.98C9.85 7.44 9.62 7.51 9.45 7.51C9.29 7.5 9.1 7.49 8.91 7.49L8.73 7.34Z" />
  </svg>
);

/** Ícone de Instagram Premium com Contorno Fino de Precisão */
export const ExclusiveInstagramIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className} shrink-0`}
    aria-hidden="true"
  >
    <rect width="18" height="18" x="3" y="3" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
  </svg>
);

/** Seta Elegante de Navegação e Ação */
export const ExclusiveArrowRight: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className} shrink-0 transition-transform duration-200 group-hover:translate-x-0.5`}
    aria-hidden="true"
  >
    <path d="M4 12h14.5" />
    <path d="m13 6.5 5.5 5.5-5.5 5.5" />
  </svg>
);

/** Ícone de Calendário / Agendamento Elegante */
export const ExclusiveCalendarIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className} shrink-0`}
    aria-hidden="true"
  >
    <rect width="18" height="18" x="3" y="4" rx="4" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
    <circle cx="12" cy="15" r="1.2" fill="currentColor" />
  </svg>
);

/** Raio / Energia Atlética de Alta Performance */
export const ExclusiveBoltIcon: React.FC<IconProps> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`${className} shrink-0`}
    aria-hidden="true"
  >
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
  </svg>
);

/** Checkmark Geométrico Refinado */
export const ExclusiveCheckIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className} shrink-0`}
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
