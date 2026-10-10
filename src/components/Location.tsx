import React, { useState } from 'react';
import { MapPin, Copy, Check } from 'lucide-react';
import { GYM_INFO, IMAGES } from '../data/gymData';
import { ExclusiveArrowRight } from './ExclusiveIcons';

export const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(GYM_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-16 sm:py-20 lg:py-24 bg-brand-dark/80 border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Address Information */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#65f603] block text-center lg:text-left">
              ONDE ESTAMOS
            </span>

            <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-black uppercase text-white tracking-tight text-center lg:text-left text-balance">
              LOCALIZAÇÃO PRIVILEGIADA
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              Localização estratégica, próxima à Lagoa dos Namorados, no bairro Israel Pinheiro, com fácil acesso para você treinar com praticidade e comodidade no dia a dia.
            </p>

            <div className="bg-brand-surface border border-brand-border rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl w-full max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#5CFF00]/10 text-[#5CFF00] flex items-center justify-center shrink-0 mt-0.5 border border-[#5CFF00]/40">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                    Endereço Oficial
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                    Rua Tiradentes, nº 377A — Bairro Israel Pinheiro
                    <br />
                    Próximo à Lagoa dos Namorados • Nanuque - MG • CEP 39860-000
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    className="mt-2 text-xs font-bold text-[#5CFF00] hover:text-[#52e600] inline-flex items-center gap-1.5 transition cursor-pointer min-h-[40px] py-1 px-1.5 rounded-lg hover:bg-white/5"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#5CFF00]" />
                        <span>Endereço copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar endereço completo</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map Graphic / Stylized Dark Container */}
          <div className="lg:col-span-6 max-w-lg mx-auto lg:max-w-none w-full">
            <div className="rounded-3xl overflow-hidden border border-brand-border bg-brand-surface relative p-1 shadow-2xl">
              <div className="relative w-full h-[320px] sm:h-[360px] bg-[#111317] rounded-2xl flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                {/* Dark stylized map background lines */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(92, 255, 0, 0.18) 0%, transparent 70%)',
                  }}
                />

                {/* Subtle map coordinate grid effect */}
                <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-center mx-auto">
                    <img
                      src={IMAGES.brandLogo}
                      alt="Academia Efraim Fitness"
                      width="126"
                      height="64"
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
                      className="h-14 sm:h-16 w-auto object-contain"
                      style={{
                        filter: 'drop-shadow(0 0 12px rgba(92, 255, 0, 0.5))',
                      }}
                    />
                  </div>

                  <div>
                    <h4 className="text-white font-extrabold uppercase text-sm sm:text-base">
                      Academia Efraim Fitness
                    </h4>
                  </div>

                  <a
                    href={GYM_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#5CFF00] hover:text-black bg-black/70 hover:bg-[#5CFF00] border border-[#5CFF00]/60 px-5 py-2.5 min-h-[44px] rounded-full transition-all active:scale-[0.98] group"
                  >
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>Como Chegar</span>
                    <ExclusiveArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
