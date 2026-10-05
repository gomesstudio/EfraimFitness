import React, { useState } from 'react';
import { X, Clock, Target } from 'lucide-react';
import { IMAGES, createWhatsAppLink } from '../data/gymData';
import { ExclusiveWhatsAppIcon, ExclusiveArrowRight } from './ExclusiveIcons';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [shift, setShift] = useState<'Manhã (05h às 10h)' | 'Tarde / Noite (14h às 21h)'>('Manhã (05h às 10h)');
  const [objective, setObjective] = useState('Hipertrofia & Força');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = name.trim() || 'Visitante';
    const message = `Olá, me chamo ${finalName}! Gostaria de agendar minha 1ª Aula Experimental Gratuita na Efraim Fitness.
• Turno de preferência: ${shift}
• Principal objetivo: ${objective}`;

    window.open(createWhatsAppLink(message), '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-brand-surface border border-[#65f603]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#65f603]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-brand-pitch border border-brand-border text-gray-400 hover:text-white hover:border-[#65f603] transition cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 space-y-3">
          <div className="flex items-center justify-between">
            <img
              src={IMAGES.brandLogo}
              alt="Academia Efraim Fitness"
              className="h-9 sm:h-11 w-auto object-contain"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(101, 246, 3, 0.45))',
              }}
            />
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#65f603]/10 border border-[#65f603]/30 text-[#65f603] text-[11px] font-black uppercase tracking-wider">
              100% Gratuito
            </div>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
              Agende Sua Aula Experimental
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Venha conhecer nossa estrutura completa, aparelhos e acompanhamento na prática.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
              Seu Nome Completo
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Carlos Silva"
              className="w-full bg-brand-pitch border border-brand-border rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#65f603] focus:ring-1 focus:ring-[#65f603] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#65f603]" />
              Turno de Treino Preferido
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setShift('Manhã (05h às 10h)')}
                className={`py-2 px-3 rounded-xl border text-xs font-bold transition flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                  shift === 'Manhã (05h às 10h)'
                    ? 'border-[#65f603] bg-[#65f603]/10 text-[#65f603] shadow-sm'
                    : 'border-brand-border bg-brand-pitch text-gray-400 hover:text-white'
                }`}
              >
                <span>Manhã</span>
                <span className="text-[10px] opacity-80">05h às 10h</span>
              </button>

              <button
                type="button"
                onClick={() => setShift('Tarde / Noite (14h às 21h)')}
                className={`py-2 px-3 rounded-xl border text-xs font-bold transition flex flex-col items-center justify-center gap-0.5 cursor-pointer ${
                  shift === 'Tarde / Noite (14h às 21h)'
                    ? 'border-[#65f603] bg-[#65f603]/10 text-[#65f603] shadow-sm'
                    : 'border-brand-border bg-brand-pitch text-gray-400 hover:text-white'
                }`}
              >
                <span>Tarde / Noite</span>
                <span className="text-[10px] opacity-80">14h às 21h</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-[#65f603]" />
              Qual o seu objetivo principal?
            </label>
            <select
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              className="w-full bg-brand-pitch border border-brand-border rounded-xl px-4 py-2.5 sm:py-3 text-sm text-white focus:outline-none focus:border-[#65f603] transition"
            >
              <option value="Hipertrofia & Força">Hipertrofia &amp; Ganho de Massa</option>
              <option value="Emagrecimento & Definição">Emagrecimento &amp; Definição</option>
              <option value="Treinamento Funcional">Treinamento Funcional &amp; Agilidade</option>
              <option value="Saúde & Qualidade de Vida">Saúde, Postura &amp; Qualidade de Vida</option>
              <option value="Avaliação Física & Bioimpedância">Avaliação Física &amp; Bioimpedância</option>
            </select>
          </div>

          {/* Action Button: Padrão Premium de Alto Nível */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#65f603] hover:bg-[#59e002] text-black font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.09em] py-3 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-[0_0_20px_rgba(101,246,3,0.35)] active:scale-[0.98] cursor-pointer"
            >
              <ExclusiveWhatsAppIcon className="w-3.5 h-3.5 fill-current" />
              <span>Confirmar no WhatsApp</span>
              <ExclusiveArrowRight className="w-3 h-3" />
            </button>
          </div>

          <p className="text-[11px] text-center text-gray-400 pt-1">
            ✓ Sem cobranças ou cartão de crédito. Você receberá a confirmação diretamente da nossa recepção.
          </p>
        </form>
      </div>
    </div>
  );
};
