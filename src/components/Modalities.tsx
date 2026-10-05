import React from 'react';
import { IMAGES, createWhatsAppLink } from '../data/gymData';
import { ExclusiveWhatsAppIcon, ExclusiveArrowRight } from './ExclusiveIcons';

interface ModalitiesProps {
  onSelectModality: (name: string) => void;
}

export const Modalities: React.FC<ModalitiesProps> = ({ onSelectModality }) => {
  const modalities = [
    {
      name: 'Musculação',
      badge: 'Hipertrofia & Força',
      image: IMAGES.musculacao,
      description:
        'Fortalecimento muscular, aumento de densidade óssea, ganho de massa magra e queima calórica contínua.',
      bullets: [
        'Treinos para iniciantes a avançados',
        'Salão de peso livre e máquinas completas',
      ],
      whatsappMsg: 'Olá, gostaria de saber mais sobre os treinos de Musculação na Efraim Fitness!',
    },
    {
      name: 'Funcional',
      badge: 'Agilidade & Queima',
      image: IMAGES.funcional,
      description:
        'Circuitos dinâmicos com kettlebells, cordas e cones para ganho cardiovascular, mobilidade e condicionamento veloz.',
      bullets: [
        'Alta intensidade e gasto calórico',
        'Melhora postural e flexibilidade',
      ],
      whatsappMsg: 'Olá, gostaria de saber horários e turmas de Treinamento Funcional na Efraim Fitness!',
    },
    {
      name: 'Avaliação Física',
      badge: 'Ciência Aplicada',
      image: IMAGES.avaliacao,
      description:
        'Bioimpedância detalhada e aferição de circunferências para acompanhar a evolução milímetro a milímetro.',
      bullets: [
        'Relatório completo de composição corporal',
        'Comparativos periódicos de progresso',
      ],
      whatsappMsg: 'Olá, quero agendar uma Avaliação Física e Bioimpedância na Efraim Fitness!',
    },
    {
      name: 'Personal & Consultoria',
      badge: 'Acompanhamento VIP',
      image: IMAGES.personal,
      description:
        'Treinos exclusivos com foco obsessivo nas suas metas e acompanhamento online para quem viaja ou tem rotina corrida.',
      bullets: [
        'Treinos 100% individualizados',
        'Suporte direto via WhatsApp com o treinador',
      ],
      whatsappMsg: 'Olá, gostaria de informações sobre Personal Trainer e Consultoria Online na Efraim Fitness!',
    },
  ];

  return (
    <section id="modalidades" className="py-16 sm:py-20 lg:py-24 bg-brand-pitch border-b border-brand-border/60">
      <div className="max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-[5%]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div className="text-center md:text-left">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#65f603] block">
              VARIEDADE &amp; INTENSIDADE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mt-1">
              TREINE DO SEU JEITO.
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-lg mx-auto md:mx-0">
              Escolha o formato ideal para a sua rotina e seus objetivos.
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <a
              className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#65f603] hover:text-[#59e002] transition-colors group"
              href={createWhatsAppLink('Olá, tenho dúvidas sobre as modalidades da Efraim Fitness!')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Dúvidas sobre modalidades? Chame no WhatsApp</span>
              <ExclusiveArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modalities.map((item) => (
            <div
              key={item.name}
              className="group relative rounded-2xl overflow-hidden border border-brand-border bg-brand-surface hover:border-[#65f603]/60 transition duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/50"
            >
              {/* Card Image Cover */}
              <div className="h-52 sm:h-56 lg:h-60 overflow-hidden relative bg-black">
                <img
                  alt={`${item.name} Efraim Fitness`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500 ease-out"
                  src={item.image}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/30 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-black/80 border border-[#65f603]/50 text-[10px] font-black uppercase px-2.5 py-1 rounded-full text-[#65f603] backdrop-blur-sm">
                  {item.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between text-center sm:text-left">
                <div>
                  <h3 className="text-lg font-bold uppercase text-white tracking-wide group-hover:text-[#65f603] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div>
                  <ul className="text-[11px] text-gray-300 space-y-1.5 mt-4 pt-3 border-t border-brand-border text-left">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#65f603] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-3 border-t border-brand-border/60">
                    <a
                      href={createWhatsAppLink(item.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-full border border-[#65f603]/70 hover:border-[#65f603] bg-black/40 hover:bg-[#65f603] text-[#65f603] hover:text-black font-extrabold text-[11px] uppercase tracking-[0.08em] transition-all duration-200 shadow-sm active:scale-[0.98]"
                    >
                      <ExclusiveWhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                      <span>Consultar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
