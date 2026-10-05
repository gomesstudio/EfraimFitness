import React, { useState } from 'react';
import { Clock, Eye, X } from 'lucide-react';
import { IMAGES } from '../data/gymData';

export const Schedule: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="horarios" className="py-16 sm:py-20 lg:py-24 bg-brand-pitch border-b border-brand-border/60">
      <div className="max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-[5%]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center" id="estrutura">
          {/* Left: Official Operating Hours - centralizado no mobile */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#65f603] block text-center lg:text-left">
              ROTINA &amp; DISCIPLINA
            </span>

            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight text-center lg:text-left">
              HORÁRIO DE FUNCIONAMENTO
            </h2>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed text-center lg:text-left max-w-xl mx-auto lg:mx-0">
              Nosso horário foi estruturado para atender com qualidade máxima tanto quem acorda pronto para treinar quanto quem só consegue treinar após o expediente.
            </p>

            {/* Hours Boxes */}
            <div className="space-y-4 pt-2 w-full max-w-lg mx-auto lg:mx-0 text-left">
              {/* Turno Manhã */}
              <div className="bg-brand-surface border-2 border-[#65f603]/80 rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-lg hover:border-[#65f603] transition duration-300">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#65f603]/10 border border-[#65f603]/40 flex items-center justify-center text-[#65f603] shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs uppercase font-black tracking-widest text-[#65f603] block">
                      MANHÃ
                    </span>
                    <p className="text-xl sm:text-3xl font-black text-white">05h às 10h</p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium text-gray-300 bg-brand-pitch px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-brand-border">
                  Energia Matinal
                </span>
              </div>

              {/* Turno Tarde / Noite */}
              <div className="bg-brand-surface border-2 border-[#65f603]/80 rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-lg hover:border-[#65f603] transition duration-300">
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#65f603]/10 border border-[#65f603]/40 flex items-center justify-center text-[#65f603] shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs uppercase font-black tracking-widest text-[#65f603] block">
                      TARDE &amp; NOITE
                    </span>
                    <p className="text-xl sm:text-3xl font-black text-white">14h às 21h</p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-[11px] font-medium text-gray-300 bg-brand-pitch px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-brand-border">
                  Pós-Trabalho
                </span>
              </div>
            </div>

            <p className="text-[11px] text-gray-400 text-center lg:text-left">
              * Atendimento aos sábados com horários especiais informados previamente via mural e Instagram.
            </p>
          </div>

          {/* Right: Gallery of Training Area */}
          <div className="lg:col-span-6 max-w-lg mx-auto lg:max-w-none w-full">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div
                onClick={() => setActiveImage(IMAGES.trainingGallery1)}
                className="group relative h-48 sm:h-60 rounded-2xl overflow-hidden border border-brand-border bg-black cursor-pointer shadow-xl hover:border-[#65f603] transition duration-300"
              >
                <img
                  alt="Espaço Musculação Efraim Fitness"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  src={IMAGES.trainingGallery1}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white flex items-center gap-1.5">
                  <span>Equipamentos de Ponta</span>
                  <Eye className="w-3 h-3 text-[#65f603] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              <div
                onClick={() => setActiveImage(IMAGES.trainingGallery2)}
                className="group relative h-48 sm:h-60 rounded-2xl overflow-hidden border border-brand-border bg-black cursor-pointer shadow-xl hover:border-[#65f603] transition duration-300"
              >
                <img
                  alt="Área de Treino Efraim Fitness"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  src={IMAGES.trainingGallery2}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 text-[11px] font-bold text-white flex items-center gap-1.5">
                  <span>Foco no Resultado</span>
                  <Eye className="w-3 h-3 text-[#65f603] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#65f603] transition"
            >
              <X className="w-7 h-7" />
            </button>
            <img
              src={activeImage}
              alt="Ampliação da imagem da academia"
              className="rounded-2xl max-h-[85vh] w-auto object-contain border border-[#65f603]/40 shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};
