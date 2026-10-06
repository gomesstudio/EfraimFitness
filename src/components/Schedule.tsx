import React from 'react';
import { Clock, Sun, Moon, CalendarCheck, ShieldCheck } from 'lucide-react';
import { GYM_INFO, createWhatsAppLink } from '../data/gymData';
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
            Estrutura planejada para quem treina cedo antes do trabalho ou prefere encerrar o dia descarregando a energia pós-expediente.
          </p>
        </div>

        {/* Grade de Turnos e Horários Principais (Sem imagens, 100% tipografia e arquitetura da informação) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: Turno Manhã */}
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
                  <span>Aparelhos liberados e ambiente silencioso</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF00] shrink-0" />
                  <span>Orientação presencial desde a abertura às 05h</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF00] shrink-0" />
                  <span>Espaço de peso livre totalmente higienizado</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border/60">
              <span className="text-[11px] font-bold text-[#5CFF00] uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                5 horas ininterruptas de salão aberto
              </span>
            </div>
          </div>

          {/* Card 2: Turno Tarde & Noite (Destaque) */}
          <div className="bg-brand-surface border-2 border-[#5CFF00] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-2xl relative glow-lime">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#5CFF00] text-black text-[10px] font-black px-3.5 py-0.5 rounded-full uppercase tracking-widest shadow-md">
              Pico de Energia
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5CFF00]/15 border border-[#5CFF00]/40 text-[#5CFF00] text-[11px] font-black uppercase tracking-wider">
                  <Moon className="w-3.5 h-3.5" />
                  Turno Noturno
                </span>
                <span className="text-[10px] uppercase font-bold text-black bg-[#5CFF00] px-2 py-0.5 rounded">
                  Segunda a Sexta
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#5CFF00] tracking-tight">
                14h às 21h
              </h3>

              <p className="text-gray-200 text-xs sm:text-sm mt-3 leading-relaxed">
                A vibe de alta intensidade para descarregar o estresse do trabalho, bater metas e treinar com trilha sonora motivadora.
              </p>

              <ul className="space-y-2.5 text-xs text-gray-200 mt-5 pt-4 border-t border-brand-border">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF00] shrink-0" />
                  <span>Instrutores no salão para correções de postura</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF00] shrink-0" />
                  <span>Iluminação esportiva e foco total em cargas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CFF00] shrink-0" />
                  <span>Acesso irrestrito a musculação e funcional</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border/60">
              <span className="text-[11px] font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#5CFF00]" />
                7 horas consecutivas para seu treino
              </span>
            </div>
          </div>

          {/* Card 3: Sábados & Informações de Fim de Semana */}
          <div className="bg-brand-surface border border-brand-border hover:border-[#5CFF00]/70 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-black/60 group md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200 text-[11px] font-bold uppercase tracking-wider">
                  <CalendarCheck className="w-3.5 h-3.5 text-[#5CFF00]" />
                  Fins de Semana
                </span>
                <span className="text-[10px] uppercase font-bold text-[#5CFF00] bg-brand-pitch px-2 py-0.5 rounded border border-brand-border">
                  Plantão Especial
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-[#5CFF00] transition-colors">
                Sábados &amp; Feriados
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm mt-3 leading-relaxed">
                Treinos pontuais em sábados selecionados e feriados prolongados com aviso prévio nas redes e mural oficial.
              </p>

              <div className="mt-5 p-3.5 rounded-xl bg-brand-pitch border border-brand-border space-y-2 text-xs">
                <div className="flex items-start gap-2 text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-[#5CFF00] shrink-0 mt-0.5" />
                  <span>Avisos atualizados toda semana pelo Instagram oficial <strong>{GYM_INFO.instagramHandle}</strong>.</span>
                </div>
                <div className="flex items-start gap-2 text-gray-300">
                  <ShieldCheck className="w-4 h-4 text-[#5CFF00] shrink-0 mt-0.5" />
                  <span>Você pode treinar de manhã ou à noite na mesma matrícula, sem taxas extras.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border/60">
              <a
                href={createWhatsAppLink('Olá, gostaria de confirmar os horários de treino de hoje na Efraim Fitness!')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full border border-[#5CFF00]/70 hover:border-[#5CFF00] bg-black/40 hover:bg-[#5CFF00] text-[#5CFF00] hover:text-black font-extrabold text-[11px] uppercase tracking-[0.08em] transition-all duration-200 shadow-sm active:scale-[0.98]"
              >
                <ExclusiveWhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Confirmar Horário no WhatsApp</span>
                <ExclusiveArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Rodapé Informativo: Flexibilidade de Horários */}
        <div className="mt-10 sm:mt-12 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-brand-surface/70 border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#5CFF00]/10 border border-[#5CFF00]/30 flex items-center justify-center text-[#5CFF00] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-xs sm:text-sm font-bold">
                Flexibilidade Total na sua Matrícula
              </p>
              <p className="text-gray-400 text-[11px] sm:text-xs">
                Sua rotina mudou? Alterne entre os turnos da manhã e noite livremente sem burocracia.
              </p>
            </div>
          </div>

          <a
            href={createWhatsAppLink('Olá! Gostaria de consultar os horários de pico e turmas na Efraim Fitness.')}
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
