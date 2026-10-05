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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl py-2 sm:py-2.5'
          : 'bg-black border-b border-white/5 py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-[5%] flex items-center justify-between">
        {/* Brand Logo no topo esquerdo */}
        <a
          href="#inicio"
          onClick={(e) => handleLinkClick(e, '#inicio', 'inicio')}
          className="flex items-center gap-2 group focus:outline-none shrink-0"
        >
          <img
            src={IMAGES.brandLogo}
            alt="Academia Efraim Fitness"
            className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            style={{
              filter: 'drop-shadow(0 0 10px rgba(101, 246, 3, 0.45))',
            }}
          />
        </a>

        {/* Menu de Navegação Horizontal no Desktop */}
        <nav
          className="hidden lg:flex items-center gap-5 xl:gap-7 text-[12px] xl:text-[12.5px] font-bold tracking-wider text-gray-200 uppercase"
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
                  isActive ? 'text-white font-black' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-[#65f603] rounded-full shadow-[0_0_8px_rgba(101,246,3,0.9)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Botão de Ação Direita: FALE CONOSCO (Tamanho refinado de alto nível) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#65f603] hover:bg-[#59e002] text-black font-extrabold text-[11px] uppercase tracking-[0.08em] px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(101,246,3,0.35)] active:scale-[0.98]"
            href={createWhatsAppLink(GYM_INFO.defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExclusiveWhatsAppIcon className="w-3.5 h-3.5" />
            <span>FALE CONOSCO</span>
          </a>

          {/* Botão de Menu Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-[#65f603] transition focus:outline-none"
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
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                    isActive
                      ? 'text-[#65f603] bg-white/5 border-l-2 border-[#65f603] pl-3'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
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
              className="w-full flex items-center justify-center gap-2 bg-[#65f603] hover:bg-[#59e002] text-black font-extrabold text-[11px] uppercase tracking-[0.08em] py-3 rounded-full transition-all duration-200 shadow-md"
              href={createWhatsAppLink(GYM_INFO.defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExclusiveWhatsAppIcon className="w-3.5 h-3.5" />
              <span>FALE CONOSCO NO WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
