import React, { useState } from 'react';
import { Activity, Users, Dumbbell, Calculator } from 'lucide-react';
import { createWhatsAppLink } from '../data/gymData';
import { ExclusiveWhatsAppIcon, ExclusiveArrowRight, ExclusiveCheckIcon } from './ExclusiveIcons';

export const Differentials: React.FC = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [weight, setWeight] = useState<string>('72');
  const [height, setHeight] = useState<string>('175');
  const [gender, setGender] = useState<'masculino' | 'feminino'>('masculino');

  const numWeight = parseFloat(weight) || 0;
  const numHeight = (parseFloat(height) || 0) / 100;
  const imc = numHeight > 0 ? (numWeight / (numHeight * numHeight)).toFixed(1) : '0';

  const getImcClassification = (val: number) => {
    if (val < 18.5) return { label: 'Abaixo do peso', color: 'text-yellow-400' };
    if (val < 25) return { label: 'Peso ideal / Saudável', color: 'text-[#65f603]' };
    if (val < 30) return { label: 'Sobrepeso leve', color: 'text-amber-400' };
    return { label: 'Obesidade', color: 'text-red-400' };
  };

  const currentClass = getImcClassification(parseFloat(imc));

  const differentials = [
    {
      icon: Activity,
      title: 'Bioimpedância Precisa',
      description: 'Conheça exatamente sua taxa de gordura, músculo esquelético e metabolismo basal.',
      tag: 'Avaliação Periódica',
      action: () => setShowCalculator(true),
      actionLabel: 'Ver Simulação',
    },
    {
      icon: Users,
      title: 'Acompanhamento Direto',
      description: 'Treinadores atentos e dispostos a orientar cada execução no salão de treino.',
      tag: 'Segurança nos Movimentos',
      action: null,
      actionLabel: null,
    },
    {
      icon: Dumbbell,
      title: 'Equipamentos Novos',
      description: 'Pesos livres, barras olímpicas, kettlebells e máquinas biomecanicamente ajustadas.',
      tag: 'Carga & Ergonomia',
      action: null,
      actionLabel: null,
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-brand-pitch border-b border-brand-border/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#65f603]">
            MÉTODO EFRAIM
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mt-1">
            DIFERENCIAIS PARA O SEU RESULTADO
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">
            Treinar com método científico faz você poupar tempo e evitar lesões.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-brand-surface/70 border border-brand-border rounded-2xl p-6 sm:p-7 hover:border-[#65f603]/50 transition duration-300 flex flex-col justify-between group hover:bg-brand-cardHover shadow-sm"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#65f603]/10 border border-[#65f603]/30 flex items-center justify-center text-[#65f603] mb-5 group-hover:scale-105 group-hover:border-[#65f603] transition">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white uppercase tracking-wide group-hover:text-[#65f603] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-5 pt-4 border-t border-brand-border/60">
                  <span className="text-[11px] font-semibold text-[#65f603] uppercase tracking-wider">
                    {item.tag}
                  </span>
                  {item.actionLabel && (
                    <button
                      onClick={item.action}
                      className="text-xs text-gray-300 hover:text-[#65f603] font-semibold flex items-center gap-1 transition-colors cursor-pointer group"
                    >
                      <span>{item.actionLabel}</span>
                      <ExclusiveArrowRight className="w-3.5 h-3.5 text-[#65f603]" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Bioimpedance / Fitness Calculator Card */}
        {showCalculator && (
          <div className="mt-8 bg-brand-surface border border-[#65f603]/40 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-brand-border">
              <div className="flex items-center gap-2.5">
                <Calculator className="w-5 h-5 text-[#65f603]" />
                <h4 className="text-sm sm:text-base font-bold uppercase tracking-wide text-white">
                  Prévia de Avaliação Corporal Efraim
                </h4>
              </div>
              <button
                onClick={() => setShowCalculator(false)}
                className="text-xs text-gray-400 hover:text-white px-2.5 py-1 rounded-lg bg-brand-pitch border border-brand-border cursor-pointer transition"
              >
                Fechar
              </button>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-5">
              <div>
                <label className="text-xs text-gray-400 block mb-1.5 font-medium">Gênero</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setGender('masculino')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border transition cursor-pointer ${
                      gender === 'masculino'
                        ? 'bg-[#65f603] text-black border-[#65f603]'
                        : 'bg-brand-pitch border-brand-border text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    Masc
                  </button>
                  <button
                    onClick={() => setGender('feminino')}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border transition cursor-pointer ${
                      gender === 'feminino'
                        ? 'bg-[#65f603] text-black border-[#65f603]'
                        : 'bg-brand-pitch border-brand-border text-gray-300 hover:border-gray-500'
                    }`}
                  >
                    Fem
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-400 block mb-1.5 font-medium">Peso (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-brand-pitch border border-brand-border rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-[#65f603]"
                  placeholder="Ex: 75"
                />
              </div>

              <div>
                <label className="text-xs text-gray-400 block mb-1.5 font-medium">Altura (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-brand-pitch border border-brand-border rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-[#65f603]"
                  placeholder="Ex: 175"
                />
              </div>
            </div>

            <div className="mt-5 p-4 rounded-xl bg-brand-pitch border border-brand-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 block">
                  Índice Calculado (IMC)
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-black text-white">{imc}</span>
                  <span className={`text-xs font-bold ${currentClass.color}`}>
                    • {currentClass.label}
                  </span>
                </div>
                <p className="text-[11px] text-gray-400 mt-1">
                  * Na bioimpedância presencial na Efraim, você descobre % de gordura visceral, massa magra e água corporal real.
                </p>
              </div>

              <a
                href={createWhatsAppLink(
                  `Olá, calculei meu IMC (${imc}) no site e gostaria de agendar uma bioimpedância completa na Efraim Fitness!`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-[#65f603] hover:bg-[#59e002] text-black font-extrabold text-[11px] sm:text-xs uppercase tracking-[0.08em] px-5 py-2.5 rounded-full transition-all duration-200 shadow-md active:scale-[0.98]"
              >
                <ExclusiveWhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                <span>Agendar Bioimpedância Real</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
