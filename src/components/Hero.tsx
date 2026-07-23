import React from 'react';
import { Header } from './Header';

interface HeroProps {
  onOpenActionModal: (type: string) => void;
  onNavigateHome: () => void;
  onSelectAboutSubTab: (subTab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenActionModal,
  onNavigateHome,
  onSelectAboutSubTab
}) => {
  return (
    <section className="relative min-h-[560px] lg:min-h-[640px] w-full flex flex-col justify-between overflow-hidden bg-slate-950">
      {/* Background Image with Aerial Highway View */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-banner.jpg"
          alt="Tri-Cities Area MPO Aerial Sunset Cityscape & Highway Interchange"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        
        {/* Top Dark Overlay for Nav Contrast */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />

        {/* Subtle Warm Sunset Overlay & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-slate-900/20 to-amber-950/20 pointer-events-none" />

        {/* Bottom Dark Overlay Merging into Quick Action Bar */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy-900 via-navy-900/80 to-transparent pointer-events-none" />
      </div>

      {/* Header Bar */}
      <Header
        onOpenActionModal={onOpenActionModal}
        onNavigateHome={onNavigateHome}
        onSelectAboutSubTab={onSelectAboutSubTab}
        activeNav="Home"
      />

      {/* Hero Central Content / Spacing */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full flex flex-col items-center justify-center text-center">
        {/* Subtle decorative glow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-4 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          Tri-Cities Region Transportation & Urban Growth
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl text-glow">
          Empowering Connected, Sustainable & Resilient Regional Infrastructure
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl font-medium drop-shadow-md">
          Leading multi-modal planning, federal grant administration, and collaborative growth across the Tri-Cities region.
        </p>
      </div>

      {/* Empty bottom spacer to allow quick action bar seamless layout */}
      <div className="relative z-10 pb-6" />
    </section>
  );
};
