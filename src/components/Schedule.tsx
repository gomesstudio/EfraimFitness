import React from 'react';
import { Clock, Sun, Moon, CalendarCheck, ShieldCheck, AlertCircle } from 'lucide-react';
import { GYM_INFO, SATURDAY_PLAN, createWhatsAppLink } from '../data/gymData';
import { ExclusiveWhatsAppIcon, ExclusiveArrowRight } from './ExclusiveIcons';

export const Schedule: React.FC = () => {
  return (
    <section id="horarios" className="py-16 sm:py-20 lg:py-24 bg-brand-pitch border-b border-brand-border/60">
      <div className="max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-[5%]">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#5CFF00] block">
            ROTINA &amp; DISCIPLINA
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight mt-1">
            HORÁRIO DE FUNCIONAMENTO
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm lg:text-base mt-3 leading-relaxed">
            Treinos de <strong>segunda a sexta-feira</strong> em dois turnos dedicados. No sábado, funcionamento exclusivo avulso com valor cobrado à parte.
          </p>
        </div>

        {/* Grade de Turnos e Horários Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: Turno Manhã (Segunda a Sexta) */}
          <div className="bg-brand-surface border border-brand-border hover:border-[#5CFF00]/70 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-black/60 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5CFF00]/10 border border-[#5CFF00]/30 text-[#5CFF00] text-[11px] font-black uppercase tracking-wider">
                  <Sun className="w-3.5 h-3.5" />
                  Turno Matutino
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-400 bg-brand-pitch px-2 py-0.5 rounded border border-brand-border">
                  Segunda a Sexta
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-[#5CFF00] transition-colors">
                05h às 10h
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm mt-3 leading-relaxed">
                Ideal para acelerar o metabolismo, ganhar clareza mental e cumprir o treino com calma antes dos compromissos do dia.
              </p>

              <ul className="space-y-2.5 text-xs text-gray-300 mt-5 pt-4 border-t border-brand-border">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF00] shrink-0" />
                  <span>Aparelhos liberados e ambiente dinâmico</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF00] shrink-0" />
                  <span>Orientação presencial desde a abertura às 05h</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF00] shrink-0" />
                  <span>Espaço de peso livre e musculação completa</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border/60">
              <span className="text-[11px] font-bold text-[#5CFF00] uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Segunda a Sexta • 05h às 10h
              </span>
            </div>
          </div>

          {/* Card 2: Turno Tarde & Noite (Segunda a Sexta) */}
          <div className="bg-brand-surface border-2 border-[#5CFF00] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-2xl relative glow-lime">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#5CFF00] text-black text-[10px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-widest shadow-md">
              Segunda a Sexta
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5CFF00]/15 border border-[#5CFF00]/40 text-[#5CFF00] text-[11px] font-black uppercase tracking-wider">
                  <Moon className="w-3.5 h-3.5" />
                  Turno Tarde &amp; Noite
                </span>
                <span className="text-[10px] uppercase font-bold text-black bg-[#5CFF00] px-2 py-0.5 rounded">
                  14h às 21h
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#5CFF00] tracking-tight">
                14h às 21h
              </h3>

              <p className="text-gray-200 text-xs sm:text-sm mt-3 leading-relaxed">
                A vibe de alta intensidade para descarregar o estresse do dia a dia, bater metas e treinar com foco total.
              </p>

              <ul className="space-y-2.5 text-xs text-gray-200 mt-5 pt-4 border-t border-brand-border">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF00] shrink-0" />
                  <span>Instrutores no salão para acompanhamento</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF00] shrink-0" />
                  <span>Iluminação esportiva e foco em musculação</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF00] shrink-0" />
                  <span>Acesso aos treinos nos turnos contratados</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border/60">
              <span className="text-[11px] font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#5CFF00]" />
                Segunda a Sexta • 14h às 21h
              </span>
            </div>
          </div>

          {/* Card 3: Sábado - Apenas Avulso (Cobrado à Parte) */}
          <div className="bg-brand-surface border border-brand-border hover:border-[#5CFF00]/70 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-black/60 group md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[11px] font-bold uppercase tracking-wider">
                  <CalendarCheck className="w-3.5 h-3.5 text-amber-400" />
                  Sábado
                </span>
                <span className="text-[10px] uppercase font-bold text-amber-300 bg-brand-pitch px-2 py-0.5 rounded border border-amber-500/30">
                  Apenas Avulso
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-[#5CFF00] transition-colors">
                Treino Avulso ({SATURDAY_PLAN.price})
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm mt-3 leading-relaxed">
                Não possuímos horário fixo aos sábados. O funcionamento acontece <strong className="text-white">exclusivamente como treino avulso</strong>, com valor cobrado à parte ({SATURDAY_PLAN.price} / treino).
              </p>

              <div className="mt-5 p-3.5 rounded-xl bg-brand-pitch border border-brand-border space-y-2 text-xs">
                <div className="flex items-start gap-2 text-gray-300">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Sábado <strong>não está incluído</strong> nos planos regulares; é cobrado à parte.</span>
                </div>
                <div className="flex items-start gap-2 text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-[#5CFF00] shrink-0 mt-0.5" />
                  <span>Consulte informações e disponibilidade do sábado direto pelo nosso WhatsApp.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border/60 text-center sm:text-left">
              <a
                href={createWhatsAppLink(SATURDAY_PLAN.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto sm:w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-2.5 px-4 rounded-full border border-[#5CFF00]/70 hover:border-[#5CFF00] bg-black/40 hover:bg-[#5CFF00] text-[#5CFF00] hover:text-black font-extrabold text-[10px] sm:text-[11px] uppercase tracking-[0.08em] transition-all duration-200 shadow-sm active:scale-[0.98] mx-auto sm:mx-0"
              >
                <ExclusiveWhatsAppIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current shrink-0" />
                <span>Consultar Sábado Avulso</span>
                <ExclusiveArrowRight className="w-3 h-3 shrink-0" />
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé Informativo: Resumo Oficial de Segunda a Sexta */}
        <div className="mt-10 sm:mt-12 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-brand-surface/70 border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#5CFF00]/10 border border-[#5CFF00]/30 flex items-center justify-center text-[#5CFF00] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-xs sm:text-sm font-bold">
                Segunda a Sexta: 05h às 10h e 14h às 21h
              </p>
              <p className="text-gray-400 text-[11px] sm:text-xs">
                Treinos com musculação inclusa em todos os planos. Sábado exclusivo treino avulso pago à parte.
              </p>
            </div>
          </div>

          <a
            href={createWhatsAppLink('Olá! Gostaria de falar com a recepção da Efraim Fitness sobre horários e matrículas.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#5CFF00] hover:text-[#52e600] shrink-0 transition"
          >
            <span>Falar com a recepção</span>
            <ExclusiveArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
