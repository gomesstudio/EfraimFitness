import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';
import { createWhatsAppLink } from '../data/gymData';
import {
  ExclusiveWhatsAppIcon,
  ExclusiveArrowRight,
  ExclusiveCheckIcon,
} from './ExclusiveIcons';

interface PlansProps {
  onOpenTrialModal: () => void;
}

export const Plans: React.FC<PlansProps> = ({ onOpenTrialModal }) => {
  return (
    <section id="planos" className="py-16 sm:py-20 lg:py-24 bg-brand-dark/70 border-b border-brand-border/60">
      <div className="max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-[5%]">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#65f603] block">
            INVESTIMENTO NO SEU CORPO
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mt-1">
            PLANOS QUE CABEM NO SEU BOLSO
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            Transparência total e planos acessíveis para você manter a constância.
          </p>

          {/* Quick Trial Pill */}
          <div className="mt-4 sm:mt-5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface border border-[#65f603]/30 text-xs text-gray-300">
            <Sparkles className="w-3.5 h-3.5 text-[#65f603]" />
            <span>Deseja testar primeiro?</span>
            <button
              onClick={onOpenTrialModal}
              className="text-[#65f603] font-extrabold hover:underline cursor-pointer"
            >
              Agende sua aula grátis
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {/* Plano Mensal */}
          <div className="bg-brand-surface rounded-2xl border border-brand-border p-6 sm:p-7 flex flex-col justify-between hover:border-[#65f603]/50 transition duration-300 hover:shadow-lg">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-base font-extrabold uppercase text-white">Plano Mensal</h3>
                <span className="text-[10px] uppercase font-bold text-gray-300 bg-brand-pitch px-2 py-0.5 rounded border border-brand-border">
                  Flexível
                </span>
              </div>

              <div className="mt-4 sm:mt-5 mb-5 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-black text-white">R$ XXX,XX</span>
                <span className="text-xs text-gray-400">/mês</span>
              </div>

              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Para quem busca total flexibilidade e treinos pontuais sem compromisso estendido.
              </p>

              <ul className="space-y-3 text-xs text-gray-300 pt-2 border-t border-brand-border">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#65f603] shrink-0" />
                  <span>Acesso irrestrito à musculação</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#65f603] shrink-0" />
                  <span>Horários manhã e tarde</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#65f603] shrink-0" />
                  <span>Orientação dos instrutores no salão</span>
                </li>
                <li className="flex items-center gap-2.5 text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-600 shrink-0" />
                  <span>Sem taxa de fidelidade</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <a
                className="w-full inline-flex items-center justify-center gap-2 border border-[#65f603]/80 hover:border-[#65f603] hover:bg-[#65f603] text-[#65f603] hover:text-black font-extrabold py-2.5 sm:py-3 px-4 rounded-full transition-all duration-200 text-[11px] sm:text-xs uppercase tracking-[0.08em] bg-black/40 backdrop-blur-sm active:scale-[0.98]"
                href={createWhatsAppLink(
                  'Olá, gostaria de saber o valor atual e fazer minha matrícula no Plano Mensal da Efraim Fitness!'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExclusiveWhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Consultar &amp; Matricular</span>
              </a>
            </div>
          </div>

          {/* Plano Semestral (FEATURED / MAIS ESCOLHIDO) */}
          <div className="bg-brand-surface rounded-2xl border-2 border-[#65f603] p-6 sm:p-7 lg:p-8 flex flex-col justify-between relative glow-lime shadow-2xl md:scale-[1.03] z-10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#65f603] text-black text-[10px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-widest shadow-md">
              Mais Escolhido
            </div>

            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-base font-extrabold uppercase text-white">Plano Semestral</h3>
                <span className="text-[10px] uppercase font-bold text-black bg-[#65f603] px-2 py-0.5 rounded">
                  Custo-Benefício
                </span>
              </div>

              <div className="mt-4 sm:mt-5 mb-5 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-black text-[#65f603]">
                  R$ XXX,XX
                </span>
                <span className="text-xs text-gray-300">/mês</span>
              </div>

              <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                O período ideal para consolidar hábitos e observar mudanças drásticas no físico.
              </p>

              <ul className="space-y-3.5 text-xs text-gray-200 pt-2 border-t border-brand-border">
                <li className="flex items-center gap-2.5">
                  <ExclusiveCheckIcon className="w-3.5 h-3.5 text-[#65f603] shrink-0" />
                  <span>Acesso total à musculação &amp; funcional</span>
                </li>
                <li className="flex items-center gap-2.5 font-semibold text-[#65f603]">
                  <ExclusiveCheckIcon className="w-3.5 h-3.5 text-[#65f603] shrink-0" />
                  <span>Avaliação física com bioimpedância inclusa</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ExclusiveCheckIcon className="w-3.5 h-3.5 text-[#65f603] shrink-0" />
                  <span>Ficha de treino personalizada e atualizada</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ExclusiveCheckIcon className="w-3.5 h-3.5 text-[#65f603] shrink-0" />
                  <span>Desconto especial garantido no semestre</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <a
                className="w-full inline-flex items-center justify-center gap-2 bg-[#65f603] hover:bg-[#59e002] text-black font-extrabold py-2.5 sm:py-3 px-5 rounded-full shadow-lg shadow-[#65f603]/20 hover:shadow-[#65f603]/35 transition-all duration-200 text-[11px] sm:text-xs uppercase tracking-[0.08em] active:scale-[0.98]"
                href={createWhatsAppLink(
                  'Olá, quero aproveitar as condições do Plano Semestral (Mais Escolhido) da Efraim Fitness!'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExclusiveWhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Quero Esse Plano</span>
                <ExclusiveArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Plano Anual */}
          <div className="bg-brand-surface rounded-2xl border border-brand-border p-6 sm:p-7 flex flex-col justify-between hover:border-[#65f603]/50 transition duration-300 hover:shadow-lg">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-base font-extrabold uppercase text-white">Plano Anual</h3>
                <span className="text-[10px] uppercase font-bold text-[#65f603] border border-[#65f603]/40 px-2 py-0.5 rounded">
                  Máxima Economia
                </span>
              </div>

              <div className="mt-4 sm:mt-5 mb-5 sm:mb-6">
                <span className="text-3xl sm:text-4xl font-black text-white">R$ XXX,XX</span>
                <span className="text-xs text-gray-400">/mês</span>
              </div>

              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Compromisso total de 365 dias para quem vive o estilo de vida fitness com o menor custo mensal.
              </p>

              <ul className="space-y-3 text-xs text-gray-300 pt-2 border-t border-brand-border">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#65f603] shrink-0" />
                  <span>Acesso irrestrito o ano todo</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#65f603] shrink-0" />
                  <span>Reavaliações periódicas inclusas</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#65f603] shrink-0" />
                  <span>Prescrição e atualização constante de ficha</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#65f603] shrink-0" />
                  <span>Acesso a todas as modalidades</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4">
              <a
                className="w-full inline-flex items-center justify-center gap-2 border border-[#65f603]/80 hover:border-[#65f603] hover:bg-[#65f603] text-[#65f603] hover:text-black font-extrabold py-2.5 sm:py-3 px-4 rounded-full transition-all duration-200 text-[11px] sm:text-xs uppercase tracking-[0.08em] bg-black/40 backdrop-blur-sm active:scale-[0.98]"
                href={createWhatsAppLink(
                  'Olá, quero saber mais sobre as condições e vantagens do Plano Anual da Efraim Fitness!'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExclusiveWhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Consultar &amp; Matricular</span>
              </a>
            </div>
          </div>
        </div>

        {/* Security / Quality guarantee note */}
        <div className="mt-10 sm:mt-12 text-center text-xs text-gray-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#65f603]" />
          <span>Matrícula rápida, sem burocracia e com orientação presencial no primeiro dia de treino.</span>
        </div>
      </div>
    </section>
  );
};
