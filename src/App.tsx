import React, { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionDivider } from './components/SectionDivider';

// Code splitting & Lazy loading dos componentes abaixo da primeira dobra
const About = lazy(() => import('./components/About').then((m) => ({ default: m.About })));
const Differentials = lazy(() => import('./components/Differentials').then((m) => ({ default: m.Differentials })));
const Modalities = lazy(() => import('./components/Modalities').then((m) => ({ default: m.Modalities })));
const Products = lazy(() => import('./components/Products').then((m) => ({ default: m.Products })));
const Plans = lazy(() => import('./components/Plans').then((m) => ({ default: m.Plans })));
const Schedule = lazy(() => import('./components/Schedule').then((m) => ({ default: m.Schedule })));
const Location = lazy(() => import('./components/Location').then((m) => ({ default: m.Location })));
const FinalCta = lazy(() => import('./components/FinalCta').then((m) => ({ default: m.FinalCta })));
const Footer = lazy(() => import('./components/Footer').then((m) => ({ default: m.Footer })));
const FloatingWhatsApp = lazy(() => import('./components/FloatingWhatsApp').then((m) => ({ default: m.FloatingWhatsApp })));

export default function App() {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const fullUrl = window.location.href;
      const origin = window.location.origin;

      // Sincroniza canonical e Open Graph com a URL absoluta do domínio
      let ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        ogUrl = document.createElement('meta');
        ogUrl.setAttribute('property', 'og:url');
        document.head.appendChild(ogUrl);
      }
      ogUrl.setAttribute('content', fullUrl);

      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', `${origin}/og-image.jpg`);
      }

      const ogSecureImage = document.querySelector('meta[property="og:image:secure_url"]');
      if (ogSecureImage) {
        ogSecureImage.setAttribute('content', `${origin}/og-image.jpg`);
      }

      const twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (twitterImage) {
        twitterImage.setAttribute('content', `${origin}/og-image.jpg`);
      }
    }
  }, []);

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
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* Seções abaixo da primeira dobra com carregamento sob demanda (Code Splitting) */}
      <Suspense fallback={<div className="w-full min-h-[300px] opacity-0" aria-hidden="true" />}>
        {/* 3. Sobre & 4 Pilares de Excelência */}
        <About />

        {/* Divisor Horizontal Animado: Transição Sobre -> Diferenciais */}
        <SectionDivider />

        {/* 4. Método Efraim / Diferenciais */}
        <Differentials />

        {/* Divisor Horizontal Animado: Transição Diferenciais -> Modalidades */}
        <SectionDivider />

        {/* 5. Modalidades & Serviços */}
        <Modalities />

        {/* 6. Conveniência & Produtos */}
        <Products />

        {/* 7. Planos Exclusivos */}
        <Plans />

        {/* 8. Horários & Estrutura */}
        <Schedule />

        {/* 9. Localização Privilegiada no Centro */}
        <Location />

        {/* 10. CTA Final */}
        <FinalCta />

        {/* 11. Rodapé Completo */}
        <Footer />
      </Suspense>

      {/* Floating Elements com carregamento diferido */}
      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
}
