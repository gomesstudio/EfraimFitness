import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { GYM_INFO, IMAGES, createWhatsAppLink } from '../data/gymData';
import { ExclusiveWhatsAppIcon } from './ExclusiveIcons';

interface NavbarProps {
  onOpenTrialModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrialModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['inicio', 'sobre', 'modalidades', 'produtos', 'planos', 'horarios', 'localizacao'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'INÍCIO', id: 'inicio', href: '#inicio' },
    { label: 'SOBRE', id: 'sobre', href: '#sobre' },
    { label: 'MODALIDADES', id: 'modalidades', href: '#modalidades' },
    { label: 'PRODUTOS', id: 'produtos', href: '#produtos' },
    { label: 'PLANOS', id: 'planos', href: '#planos' },
    { label: 'HORÁRIOS', id: 'horarios', href: '#horarios' },
    { label: 'LOCALIZAÇÃO', id: 'localizacao', href: '#localizacao' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-white/5 py-2.5 sm:py-3 shadow-xl'
          : 'bg-black/90 backdrop-blur-sm border-b border-white/5 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* LOGO EFRAIM FITNESS à esquerda */}
        <a
          href="#inicio"
          onClick={(e) => handleLinkClick(e, '#inicio', 'inicio')}
          className="flex items-center gap-2 group focus:outline-none shrink-0"
        >
          <img
            src={IMAGES.brandLogo}
            alt="Academia Efraim Fitness"
            className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(92, 255, 0, 0.4))',
            }}
          />
        </a>

        {/* Links Centralizados no Desktop */}
        <nav
          className="hidden lg:flex items-center gap-7 xl:gap-9 text-[12px] xl:text-[13px] font-bold tracking-wider uppercase"
          aria-label="Menu principal"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.id)}
                className={`transition-colors duration-200 py-1 relative ${
                  isActive
                    ? 'text-[#5CFF00] font-black'
                    : 'text-white hover:text-[#5CFF00]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-[#5CFF00] rounded-full shadow-[0_0_8px_rgba(92,255,0,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Botão no Extremo Direito: [ÍCONE WHATSAPP + FALE CONOSCO] */}
        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center gap-2 bg-[#5CFF00] hover:bg-[#52e600] text-black font-extrabold text-xs uppercase tracking-wider px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
            href={createWhatsAppLink(GYM_INFO.defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExclusiveWhatsAppIcon className="w-4 h-4 fill-current text-black" />
            <span>FALE CONOSCO</span>
          </a>

          {/* Botão de Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-[#5CFF00] transition focus:outline-none"
            aria-label="Abrir Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Gaveta Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/98 border-b border-white/10 px-5 py-5 space-y-4 shadow-2xl backdrop-blur-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.id)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                    isActive
                      ? 'text-[#5CFF00] bg-white/5 border-l-2 border-[#5CFF00] pl-3.5'
                      : 'text-gray-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </a>
              );
            })}
          </nav>

          <div className="pt-2">
            <a
              className="w-full flex items-center justify-center gap-2 bg-[#5CFF00] hover:bg-[#52e600] text-black font-extrabold text-xs uppercase tracking-wider py-3.5 rounded-full transition-all duration-200 shadow-md"
              href={createWhatsAppLink(GYM_INFO.defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExclusiveWhatsAppIcon className="w-4 h-4 fill-current text-black" />
              <span>FALE CONOSCO NO WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
