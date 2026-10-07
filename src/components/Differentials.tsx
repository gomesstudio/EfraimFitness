import React from 'react';
import { Activity, Users, Dumbbell } from 'lucide-react';

export const Differentials: React.FC = () => {
  const differentials = [
    {
      icon: Activity,
      title: 'Bioimpedância Precisa',
      description: 'Conheça exatamente sua taxa de gordura, músculo esquelético e metabolismo basal.',
      tag: 'Avaliação Periódica',
    },
    {
      icon: Users,
      title: 'Acompanhamento Direto',
      description: 'Treinadores atentos e dispostos a orientar cada execução no salão de treino.',
      tag: 'Segurança nos Movimentos',
    },
    {
      icon: Dumbbell,
      title: 'Equipamentos Novos',
      description: 'Pesos livres, barras olímpicas, kettlebells e máquinas biomecanicamente ajustadas.',
      tag: 'Carga & Ergonomia',
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

                <div className="mt-5 pt-4 border-t border-brand-border/60">
                  <span className="text-[11px] font-semibold text-[#65f603] uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
