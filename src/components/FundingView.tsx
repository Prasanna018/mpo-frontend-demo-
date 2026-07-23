import React, { useState } from 'react';
import { Header } from './Header';

interface FundingViewProps {
  onNavigateHome: () => void;
  onSelectAboutSubTab: (subTab: string) => void;
  onOpenActionModal: (type: string) => void;
}

export const FundingView: React.FC<FundingViewProps> = ({
  onNavigateHome,
  onSelectAboutSubTab,
  onOpenActionModal
}) => {
  const [activeFundingTab, setActiveFundingTab] = useState<string>('Regional Surface Transportation Block Grant (RSTBG)');

  const fundingSubTabs = [
    'Regional Surface Transportation Block Grant (RSTBG)',
    'CMAQ Program',
    'TA Set-Aside',
    'SMART SCALE'
  ];

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      
      {/* Funding Hero Banner matching Screenshot 1 */}
      <section className="relative h-[440px] sm:h-[500px] w-full flex flex-col justify-between overflow-hidden bg-slate-950">
        
        {/* Background Image: Municipal transit buses */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=2400&q=90"
            alt="Funding Support For Regional Development"
            className="w-full h-full object-cover object-center scale-105"
          />
          
          {/* Top Dark Overlay */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none" />

          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-blue-950/20 to-transparent pointer-events-none" />

          {/* Bottom Dark Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />
        </div>

        {/* Top Navbar with Funding active */}
        <Header
          onOpenActionModal={onOpenActionModal}
          onNavigateHome={onNavigateHome}
          onSelectAboutSubTab={onSelectAboutSubTab}
          activeNav="Funding"
        />

        {/* Hero Title & Pill Badge matching Screenshot 1 */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/20 text-white shadow-xl">
            <span className="text-sm font-bold tracking-wide">Funding</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl drop-shadow-xl">
            Funding Support For Regional Development
          </h1>
        </div>
      </section>

      {/* Main Content Area Below Banner matching Screenshot 2 */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Left Sidebar Navigation matching Screenshot 2 */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4 pt-2">
            <nav className="flex flex-col space-y-4">
              {fundingSubTabs.map((tab) => {
                const isActive = activeFundingTab === tab;
                return (
                  <div key={tab} className="relative pb-1">
                    <button
                      onClick={() => setActiveFundingTab(tab)}
                      className={`text-left text-base sm:text-lg transition-colors duration-200 ${
                        isActive
                          ? 'text-blue-600 font-bold'
                          : 'text-slate-900 font-bold hover:text-blue-600'
                      }`}
                    >
                      {tab}
                    </button>
                    {/* Active Underline matching Screenshot 2 */}
                    {isActive && (
                      <div className="w-full border-b-2 border-blue-500 mt-2 animate-in fade-in duration-200" />
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Vertical Divider Line matching Screenshot 2 */}
          <div className="hidden md:block md:col-span-1 border-l border-slate-300 h-full min-h-[400px]" />

          {/* Right Main Content Area matching User Screenshot 2 */}
          <div className="md:col-span-7 lg:col-span-7 space-y-8 pl-0 md:pl-2">
            
            {/* 1. REGIONAL SURFACE TRANSPORTATION BLOCK GRANT (RSTBG) */}
            {activeFundingTab === 'Regional Surface Transportation Block Grant (RSTBG)' && (
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
                  Regional Surface Transportation Block Grant (RSTBG)
                </h2>

                <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed">
                  The <span className="font-bold underline text-slate-900">Surface Transportation Block Grant Program</span> (STBG) provides states and regions with flexible federal funding that may be used for a wide variety of highway and transit projects. Regional STBG funds are automatically sub allocated to regional planning organizations within the State. The wide variety of RSTGB investments in the Richmond Region support passenger and freight movement along the region's surface transportation systems. The funds can be used to preserve and improve the conditions and performance on highways, bridges, tunnels, pedestrian facilities, bicycle infrastructure, and transit capital projects.
                </p>
              </div>
            )}

            {/* 2. CMAQ PROGRAM */}
            {activeFundingTab === 'CMAQ Program' && (
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
                  CMAQ Program
                </h2>

                <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed">
                  The Congestion Mitigation and Air Quality Improvement (CMAQ) Program provides a flexible funding source to State and local governments for transportation projects and programs to help meet the requirements of the Clean Air Act. Funding is available to reduce congestion and improve air quality for areas that do not meet the National Ambient Air Quality Standards for ozone, carbon monoxide, or particulate matter (nonattainment areas) and for former nonattainment areas that are now in compliance (maintenance areas).
                </p>
              </div>
            )}

            {/* 3. TA SET-ASIDE */}
            {activeFundingTab === 'TA Set-Aside' && (
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
                  TA Set-Aside
                </h2>

                <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed">
                  The Transportation Alternatives (TA) Set-Aside program provides funding for programs and projects defined as transportation alternatives, including on- and off-road pedestrian and bicycle facilities, infrastructure projects for enhancing non-driver access to public transportation, community improvement activities, environmental mitigation, and safe routes to school projects.
                </p>
              </div>
            )}

            {/* 4. SMART SCALE */}
            {activeFundingTab === 'SMART SCALE' && (
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
                  SMART SCALE
                </h2>

                <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed">
                  SMART SCALE is Virginia’s process for prioritizing transportation projects. It evaluates candidate projects based on key factors: Safety, Congestion Mitigation, Accessibility, Environmental Quality, Economic Development, and Land Use. TCAMPO submits regional project applications through SMART SCALE every two years to compete for statewide funding allocations.
                </p>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};
