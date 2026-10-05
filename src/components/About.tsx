import React from 'react';
import { Dumbbell, ClipboardList, TrendingUp, Star } from 'lucide-react';
import { IMAGES } from '../data/gymData';

export const About: React.FC = () => {
  const differentials = [
    {
      icon: Dumbbell,
      line1: 'TREINAMENTO',
      line2: 'PERSONALIZADO',
    },
    {
      icon: ClipboardList,
      line1: 'AVALIAÇÃO',
      line2: 'FÍSICA',
    },
    {
      icon: TrendingUp,
      line1: 'ACOMPANHAMENTO',
      line2: 'DA EVOLUÇÃO',
    },
    {
      icon: Star,
      line1: 'ESTRUTURA PARA',
      line2: 'SEUS OBJETIVOS',
    },
  ];

  return (
    <section id="sobre" className="relative w-full bg-black border-t border-white/10 overflow-hidden">
      {/* Estrutura Exata em Duas Colunas (50% / 50%) com alinhamento refinado para Mobile & Desktop */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-stretch">
        
        {/* COLUNA ESQUERDA (0% a 50%): Foto real da fachada da academia */}
        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-full min-h-[280px] lg:min-h-[560px] bg-black overflow-hidden">
          <img
            alt="Fachada Academia Efraim Fitness"
            className="w-full h-full object-cover object-center select-none"
            src={IMAGES.facadeAbout}
            loading="lazy"
          />
          {/* Gradiente sutil nas bordas para integração fluida */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />
        </div>

        {/* COLUNA DIREITA (50% a 100%): Conteúdo institucional SOBRE A EFRAIM */}
        <div className="flex flex-col justify-center items-center lg:items-start px-5 sm:px-10 lg:px-14 xl:px-20 py-10 sm:py-16 lg:py-20 space-y-5 sm:space-y-6 text-center lg:text-left bg-black">
          
          {/* Kicker com traço verde idêntico ao da logo */}
          <div className="flex items-center justify-center lg:justify-start gap-2.5">
            <span className="w-7 sm:w-8 h-[2px] bg-[#65f603]" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#65f603]">
              SOBRE A EFRAIM
            </span>
          </div>

          {/* Headline Principal: MAIS QUE UMA ACADEMIA */}
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] xl:text-[54px] font-black uppercase tracking-tight text-white leading-[1.02] text-center lg:text-left">
            MAIS QUE UMA
            <br />
            <span className="text-[#65f603]">ACADEMIA.</span>
          </h2>

          {/* Textos explicativos conforme especificação da imagem-guia */}
          <div className="space-y-3 sm:space-y-4 text-gray-200 text-sm sm:text-base leading-relaxed font-normal max-w-xl text-center lg:text-left mx-auto lg:mx-0">
            <p>
              Na Academia Efraim Fitness, você encontra musculação e treinamento funcional, aliados à avaliação física antropométrica, bioimpedância e acompanhamento personalizado.
            </p>
            <p className="text-gray-300">
              Tudo para oferecer um treinamento mais direcionado, acompanhar sua evolução e ajudar você a alcançar seus objetivos.
            </p>
          </div>

          {/* 4 Diferenciais em grade 2x2 perfeitamente enquadrados no mobile e desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4 sm:gap-y-5 pt-2 sm:pt-4 max-w-xl w-full mx-auto lg:mx-0">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center justify-start gap-3 sm:gap-3.5 group max-w-xs mx-auto sm:mx-0 w-full text-left">
                  {/* Círculo com borda verde idêntico ao da logo e ícone minimalista */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#65f603] bg-black/60 flex items-center justify-center text-[#65f603] shrink-0 group-hover:scale-105 group-hover:bg-[#65f603]/10 transition-all duration-300 shadow-sm">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                  </div>

                  {/* Texto em duas linhas caixa-alta branco */}
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] sm:text-xs font-black uppercase text-white tracking-wider leading-tight group-hover:text-[#65f603] transition-colors">
                      {item.line1}
                    </span>
                    <span className="text-[11px] sm:text-xs font-black uppercase text-white tracking-wider leading-tight group-hover:text-[#65f603] transition-colors">
                      {item.line2}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
