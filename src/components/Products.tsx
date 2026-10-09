import React, { useState } from 'react';
import { Zap, Headphones, Droplets, Dumbbell, Smartphone, BatteryCharging, ShieldCheck } from 'lucide-react';
import { IMAGES, createWhatsAppLink } from '../data/gymData';
import { ExclusiveWhatsAppIcon, ExclusiveArrowRight } from './ExclusiveIcons';

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const items = [
    {
      name: 'Películas para celular',
      icon: ShieldCheck,
      desc: 'Temos película de hidrogel para qualquer marca de celular, privacidade , fosca e transparente, realizamos a aplicação.'
    },
    { name: 'Carregadores', icon: Zap, desc: 'Cabos iPhone, USB-C e adaptadores rápidos' },
    { name: 'Fones Bluetooth', icon: Headphones, desc: 'Som imersivo e encaixe firme para treinar focado' },
    { name: 'Garrafas & Shakers', icon: Droplets, desc: 'Squeezes e coqueteleiras térmicas de alta vedação' },
    { name: 'Munhequeiras', icon: Dumbbell, desc: 'Estabilidade articular e proteção nas cargas pesadas' },
    { name: 'Pochetes Celular', icon: Smartphone, desc: 'Conforto e segurança para carregar chaves e celular' },
    { name: 'Power Banks', icon: BatteryCharging, desc: 'Baterias portáteis para seu smartphone não descarregar' },
  ];

  return (
    <section id="produtos" className="py-16 sm:py-20 lg:py-24 bg-brand-pitch border-b border-brand-border/60">
      <div className="max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-[5%]">
        <div className="bg-gradient-to-br from-brand-surface via-brand-dark to-brand-pitch border border-brand-borderLight rounded-3xl p-5 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl">
          {/* Subtle Glow Background */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#65f603]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Image banner based on products poster com Moldura de Exibição Completa (Sem Cortes) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] mx-auto">
                {/* Ambient Backlight Halo */}
                <div className="absolute -inset-2 bg-gradient-to-b from-[#5CFF00]/25 via-[#5CFF00]/10 to-transparent rounded-[28px] blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 -z-10" />

                {/* Moldura Premium de Exibição */}
                <div className="relative p-2 sm:p-2.5 rounded-[26px] bg-gradient-to-b from-white/15 via-[#5CFF00]/20 to-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
                  {/* Container interno preto que preserva 100% da imagem sem nenhum corte */}
                  <div className="rounded-[18px] overflow-hidden bg-black relative flex items-center justify-center">
                    <img
                      alt="Cartaz Oficial de Conveniência e Acessórios Efraim Fitness"
                      width="941"
                      height="1672"
                      className="w-full h-auto object-contain block select-none group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                      src={IMAGES.productsPoster}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        if (target.src !== IMAGES.productsPosterPng) {
                          target.src = IMAGES.productsPosterPng;
                        } else if (target.src !== IMAGES.productsPosterRemote) {
                          target.src = IMAGES.productsPosterRemote;
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Selo Informativo Posicionado Abaixo da Moldura (Sem Cobrir o Conteúdo do Cartaz) */}
                <div className="mt-3.5 flex items-center justify-center">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/85 border border-[#5CFF00]/40 text-[#5CFF00] text-[11px] font-extrabold uppercase tracking-wider backdrop-blur-md shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF00] animate-pulse" />
                    <span>Disponível na Recepção • Pronta Entrega</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description and product listing - centralizado no mobile */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5CFF00]/10 border border-[#5CFF00]/30 text-[#5CFF00] text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0">
                Conveniência &amp; Praticidade
              </div>

              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight leading-tight text-center lg:text-left">
                TUDO PARA O SEU TREINO. <br />
                <span className="text-[#65f603]">TUDO PERTINHO DE VOCÊ!</span>
              </h2>

              <p className="text-gray-300 text-xs sm:text-base leading-relaxed text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                Esqueceu o fone? Acabou a bateria? Precisa de suporte no pulso? Na Efraim Fitness você encontra acessórios e conveniências selecionadas para não deixar seu treino parar.
              </p>

              {/* Grid de Itens com seleção interativa */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                {items.map((prod) => {
                  const Icon = prod.icon;
                  const isSelected = selectedProduct === prod.name;
                  return (
                    <button
                      key={prod.name}
                      onClick={() =>
                        setSelectedProduct(isSelected ? null : prod.name)
                      }
                      className={`p-3 sm:p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer group ${
                        isSelected
                          ? 'bg-[#65f603]/15 border-[#65f603] text-white shadow-md'
                          : 'bg-brand-surface/70 border-brand-border text-gray-300 hover:border-gray-500 hover:bg-brand-cardHover'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon
                          className={`w-4 h-4 shrink-0 transition-colors ${
                            isSelected
                              ? 'text-[#65f603]'
                              : 'text-gray-400 group-hover:text-[#65f603]'
                          }`}
                        />
                        <span className="text-[11px] sm:text-xs font-semibold text-gray-200 group-hover:text-white transition leading-snug line-clamp-2">
                          {prod.name}
                        </span>
                      </div>
                      {isSelected && (
                        <p className="text-[10px] text-gray-400 mt-2 pt-2 border-t border-brand-border leading-tight">
                          {prod.desc}
                        </p>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Action Button: Padrão Premium de Alto Nível e Proporcional no Mobile */}
              <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 w-full">
                <a
                  className="w-auto inline-flex items-center justify-center gap-2 text-[10.5px] sm:text-xs font-extrabold uppercase tracking-[0.08em] text-black bg-[#65f603] hover:bg-[#59e002] px-4.5 sm:px-6 py-2 sm:py-3 rounded-full transition duration-200 shadow-md hover:shadow-[0_0_18px_rgba(101,246,3,0.35)] active:scale-[0.98] group shrink-0 text-center"
                  href={createWhatsAppLink(
                    selectedProduct
                      ? `Olá, gostaria de saber o valor e disponibilidade de ${selectedProduct} na recepção da Efraim Fitness!`
                      : 'Olá, gostaria de consultar os produtos e acessórios disponíveis na recepção da Efraim Fitness!'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExclusiveWhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span>
                    {selectedProduct
                      ? `Consultar ${selectedProduct} no WhatsApp`
                      : 'Consultar Disponibilidade na Recepção'}
                  </span>
                  <ExclusiveArrowRight className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
