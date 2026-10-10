import React from 'react';
import { Clock, Sun, Moon } from 'lucide-react';
import { createWhatsAppLink } from '../data/gymData';
import { ExclusiveArrowRight } from './ExclusiveIcons';

export const Schedule: React.FC = () => {
  return (
    <section id="horarios" className="py-16 sm:py-20 lg:py-24 bg-brand-pitch border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#5CFF00] block">
            ROTINA &amp; DISCIPLINA
          </span>
          <h2 className="text-[clamp(1.6rem,4vw,2.5rem)] font-black uppercase text-white tracking-tight mt-1 text-balance">
            HORÁRIO DE FUNCIONAMENTO
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm lg:text-base mt-2.5 leading-relaxed max-w-xl mx-auto">
            Treinos de <strong>segunda a sexta-feira</strong> em dois turnos dedicados: manhã (05h às 10h) e tarde/noite (14h às 21h).
          </p>
        </div>

        {/* Grade de Turnos e Horários Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card 1: Turno Manhã (Segunda a Sexta) */}
          <div className="bg-brand-surface border border-brand-border hover:border-[#5CFF00]/70 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-black/60 group h-full">
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
          <div className="bg-brand-surface border border-brand-border hover:border-[#5CFF00]/70 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-black/60 group h-full">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5CFF00]/10 border border-[#5CFF00]/30 text-[#5CFF00] text-[11px] font-black uppercase tracking-wider">
                  <Moon className="w-3.5 h-3.5" />
                  Turno Tarde &amp; Noite
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-400 bg-brand-pitch px-2 py-0.5 rounded border border-brand-border">
                  Segunda a Sexta
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-[#5CFF00] transition-colors">
                14h às 21h
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm mt-3 leading-relaxed">
                A vibe de alta intensidade para descarregar o estresse do dia a dia, bater metas e treinar com foco total.
              </p>

              <ul className="space-y-2.5 text-xs text-gray-300 mt-5 pt-4 border-t border-brand-border">
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
              <span className="text-[11px] font-bold text-[#5CFF00] uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Segunda a Sexta • 14h às 21h
              </span>
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
                Treinos com musculação inclusa e suporte presencial em todos os planos.
              </p>
            </div>
          </div>

          <a
            href={createWhatsAppLink('Olá! Gostaria de falar com a recepção da Efraim Fitness sobre horários e matrículas.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-black uppercase tracking-wider text-[#5CFF00] hover:text-black hover:bg-[#5CFF00] border border-[#5CFF00]/40 px-4 py-2.5 rounded-full shrink-0 transition min-h-[44px]"
          >
            <span>Falar com a recepção</span>
            <ExclusiveArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
