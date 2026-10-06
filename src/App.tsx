import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SectionDivider } from './components/SectionDivider';
import { Differentials } from './components/Differentials';
import { Modalities } from './components/Modalities';
import { Products } from './components/Products';
import { Plans } from './components/Plans';
import { Schedule } from './components/Schedule';
import { Location } from './components/Location';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { TrialModal } from './components/TrialModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-brand-pitch text-white font-sans antialiased selection:bg-brand-lime selection:text-black"
      style={{
        backgroundColor: '#070809',
        backgroundImage: `
          radial-gradient(circle at 15% 15%, rgba(101, 246, 3, 0.05) 0%, transparent 40%),
          radial-gradient(circle at 85% 60%, rgba(101, 246, 3, 0.04) 0%, transparent 45%),
          radial-gradient(circle at 50% 90%, rgba(20, 23, 29, 0.8) 0%, transparent 60%)
        `,
      }}
    >
      {/* 1. Header / Navigation */}
      <Navbar onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* 2. Hero Section */}
      <Hero onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* 3. Sobre & 4 Pilares de Excelência */}
      <About />

      {/* Divisor Horizontal Animado: Transição Sobre -> Diferenciais */}
      <SectionDivider />

      {/* 4. Método Efraim / Diferenciais */}
      <Differentials />

      {/* Divisor Horizontal Animado: Transição Diferenciais -> Modalidades */}
      <SectionDivider />

      {/* 5. Modalidades & Serviços */}
      <Modalities onSelectModality={() => setTrialModalOpen(true)} />

      {/* 6. Conveniência & Produtos */}
      <Products />

      {/* 7. Planos Exclusivos */}
      <Plans onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* 8. Horários & Estrutura */}
      <Schedule />

      {/* 9. Localização Privilegiada no Centro */}
      <Location />

      {/* 10. CTA Final */}
      <FinalCta onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* 11. Rodapé Completo */}
      <Footer />

      {/* Floating Elements & Modals */}
      <FloatingWhatsApp />
      <TrialModal isOpen={trialModalOpen} onClose={() => setTrialModalOpen(false)} />
    </div>
  );
}
