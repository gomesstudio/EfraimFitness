import React from 'react';
import { Dumbbell, ShieldCheck } from 'lucide-react';
import { GYM_PLANS, SATURDAY_PLAN, createWhatsAppLink } from '../data/gymData';
import { ExclusiveWhatsAppIcon } from './ExclusiveIcons';

interface PlansProps {}

export const Plans: React.FC<PlansProps> = () => {
  return (
    <section id="planos" className="py-16 sm:py-20 lg:py-24 bg-brand-dark/70 border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#65f603] block">
            INVESTIMENTO NO SEU CORPO
          </span>
          <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-black uppercase text-white tracking-tight mt-1 text-balance">
            PLANOS QUE CABEM NO SEU BOLSO
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            Transparência total e planos acessíveis para você manter a constância.
          </p>

          {/* Destaque principal solicitado: Todos os planos contam com musculação */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#65f603]/10 border border-[#65f603]/40 text-[#65f603] text-xs sm:text-sm font-bold shadow-sm">
            <Dumbbell className="w-4 h-4 text-[#65f603] shrink-0" />
            <span>Todos os planos contam com musculação</span>
          </div>
        </div>

        {/* 4 Periodic Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-stretch max-w-7xl mx-auto">
          {GYM_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="bg-brand-surface rounded-2xl border border-brand-border p-5 sm:p-6 flex flex-col justify-between hover:border-[#65f603]/50 transition duration-300 hover:shadow-lg h-full"
            >
              <div>
                <div className="flex justify-between items-center gap-2">
                  <h3 className="text-base font-extrabold uppercase text-white tracking-wide">{plan.name}</h3>
                  <span className="text-[10px] uppercase font-bold text-gray-300 bg-brand-pitch px-2 py-0.5 rounded border border-brand-border shrink-0">
                    {plan.badge}
                  </span>
                </div>

                <div className="mt-4 mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">{plan.price}</span>
                  <span className="text-xs text-gray-400 ml-1 font-semibold">{plan.period}</span>
                </div>

                <p className="text-xs text-gray-400 mb-5 leading-relaxed min-h-[36px]">
                  {plan.description}
                </p>

                <ul className="space-y-2.5 text-xs text-gray-300 pt-3 border-t border-brand-border">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#65f603] shrink-0" />
                      <span className={idx === 0 ? "font-bold text-white" : ""}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 text-center">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 border border-[#65f603]/80 hover:border-[#65f603] hover:bg-[#65f603] text-[#65f603] hover:text-black font-extrabold py-3 px-4 min-h-[44px] rounded-full transition-all duration-200 text-xs uppercase tracking-wider bg-black/40 backdrop-blur-sm active:scale-[0.98] text-center"
                  href={createWhatsAppLink(plan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExclusiveWhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
                  <span>Matricular via WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sábado Avulso Highlight Card */}
        <div className="max-w-4xl mx-auto mt-6 sm:mt-8">
          <div className="bg-brand-surface/90 rounded-2xl border border-brand-border p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 hover:border-[#65f603]/40 transition duration-300">
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-1.5">
                <span className="text-[10px] uppercase font-bold text-gray-300 bg-brand-pitch px-2 py-0.5 rounded border border-brand-border">
                  {SATURDAY_PLAN.badge}
                </span>
                <h3 className="text-lg font-black uppercase text-white tracking-wide">{SATURDAY_PLAN.name}</h3>
              </div>
              <p className="text-xs text-gray-400 max-w-xl">
                {SATURDAY_PLAN.description} <strong className="text-white">Musculação completa inclusa</strong>, sem necessidade de matrícula mensal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shrink-0 w-full sm:w-auto">
              <div className="text-center sm:text-right">
                <span className="text-2xl sm:text-3xl font-black text-white">{SATURDAY_PLAN.price}</span>
                <span className="text-xs text-gray-400 ml-1 font-semibold">{SATURDAY_PLAN.period}</span>
              </div>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#65f603]/80 hover:border-[#65f603] hover:bg-[#65f603] text-[#65f603] hover:text-black font-extrabold py-3 px-6 min-h-[44px] rounded-full transition-all duration-200 text-xs uppercase tracking-wider bg-black/40 backdrop-blur-sm active:scale-[0.98] text-center"
                href={createWhatsAppLink(SATURDAY_PLAN.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExclusiveWhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
                <span>Treinar no Sábado</span>
              </a>
            </div>
          </div>
        </div>

        {/* Security / Quality guarantee note */}
        <div className="mt-8 sm:mt-10 text-center text-xs text-gray-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#65f603]" />
          <span>Matrícula rápida, sem burocracia e com orientação presencial no primeiro dia de treino.</span>
        </div>
      </div>
    </section>
  );
};
