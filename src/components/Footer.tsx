import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { GYM_INFO, IMAGES, createWhatsAppLink } from '../data/gymData';

export const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050607] border-t border-brand-border/60 py-14 text-xs text-gray-400">
      <div className="max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-brand-border/50 text-center md:text-left">
          {/* Col 1: Brand Info */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <img
                src={IMAGES.brandLogo}
                alt="Academia Efraim Fitness"
                className="h-10 w-auto object-contain"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(101, 246, 3, 0.45))',
                }}
              />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
              Seu treino. Seu ritmo. Seu resultado. A academia que une alta performance, acompanhamento e conforto em Nanuque - MG.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#65f603] mb-3">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  className="hover:text-white transition duration-150"
                  href="#inicio"
                  onClick={(e) => handleLinkClick(e, '#inicio')}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition duration-150"
                  href="#sobre"
                  onClick={(e) => handleLinkClick(e, '#sobre')}
                >
                  Quem Somos
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition duration-150"
                  href="#modalidades"
                  onClick={(e) => handleLinkClick(e, '#modalidades')}
                >
                  Modalidades
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition duration-150"
                  href="#produtos"
                  onClick={(e) => handleLinkClick(e, '#produtos')}
                >
                  Boutique &amp; Produtos
                </a>
              </li>
              <li>
                <a
                  className="hover:text-white transition duration-150"
                  href="#planos"
                  onClick={(e) => handleLinkClick(e, '#planos')}
                >
                  Planos &amp; Preços
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#65f603] mb-3">
              Funcionamento
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              <strong className="text-white">Segunda a Sexta-feira:</strong>
              <br />
              Manhã: 05h00 às 10h00
              <br />
              Tarde/Noite: 14h00 às 21h00
            </p>
            <p className="text-[11px] text-gray-500 mt-2">
              Consulte horários para feriados via WhatsApp.
            </p>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#65f603] mb-3">
              Canais de Atendimento
            </h4>
            <p className="text-xs text-gray-300">
              WhatsApp: <strong className="text-white">{GYM_INFO.phone}</strong>
            </p>
            <p className="text-xs text-gray-300 mt-1">
              Instagram:{' '}
              <a
                className="text-[#65f603] hover:underline"
                href={GYM_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {GYM_INFO.instagramHandle}
              </a>
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
              <a
                aria-label="Instagram da Academia Efraim Fitness"
                className="w-8 h-8 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-gray-400 hover:text-[#65f603] hover:border-[#65f603] transition"
                href={GYM_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                aria-label="WhatsApp da Academia Efraim Fitness"
                className="w-8 h-8 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-gray-400 hover:text-[#65f603] hover:border-[#65f603] transition"
                href={createWhatsAppLink(GYM_INFO.defaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-[11px] gap-4 text-center sm:text-left">
          <p>© 2026 Academia Efraim Fitness • Todos os direitos reservados.</p>
          <p className="text-gray-500">Nanuque - MG • Athletic Luxury Experience</p>
        </div>
      </div>
    </footer>
  );
};
