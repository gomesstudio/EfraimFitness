import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { IMAGES } from '../data/gymData';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      const sections = ['inicio', 'sobre', 'modalidades', 'produtos', 'planos', 'horarios', 'localizacao'];
      const scrollPos = window.scrollY + 160;

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
    <>
      {/* Cabeçalho Fixo (Fixed) com Backdrop Blur para Navegação Contínua */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3 shadow-2xl'
            : 'bg-black/90 backdrop-blur-md border-b border-white/5 py-3 sm:py-3.5'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between relative">
          {/* 1. LOGO EFRAIM FITNESS: Alinhado na mesma altura e direção das palavras através de ajuste de posição CSS */}
          <div className="flex items-center shrink-0">
            <a
              href="#inicio"
              onClick={(e) => handleLinkClick(e, '#inicio', 'inicio')}
              className="inline-flex items-center justify-center group focus:outline-none"
            >
              <img
                src={IMAGES.brandLogo}
                alt="Academia Efraim Fitness"
                className="h-10 sm:h-11 lg:h-12 w-auto object-contain block select-none -translate-y-[20%] transition-transform duration-200 group-hover:scale-105"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(92, 255, 0, 0.45))',
                }}
              />
            </a>
          </div>

          {/* 2. MENU DE NAVEGAÇÃO: Perfeitamente alinhado na mesma altura e centro no Desktop */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-9 text-[12px] xl:text-[13px] font-bold tracking-wider uppercase lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2"
            aria-label="Menu principal"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href, link.id)}
                  className={`inline-flex items-center transition-colors duration-200 py-1 relative ${
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

          {/* 3. LADO DIREITO: Botão de Menu Mobile (Botão 'Fale Conosco' removido) */}
          <div className="flex items-center">
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
          <div className="lg:hidden bg-black/98 border-b border-white/10 px-5 py-5 space-y-3 shadow-2xl backdrop-blur-2xl">
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
          </div>
        )}
      </header>

      {/* Espaçador para manter o fluxo do documento com o cabeçalho fixo */}
      <div className="h-16 sm:h-[72px] shrink-0" aria-hidden="true" />
    </>
  );
};
