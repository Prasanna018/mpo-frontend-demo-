import React, { useState } from 'react';
import { Header } from './Header';
import { PROGRAMS_STUDIES_DATA } from '../data/mockData';

interface ProgramsViewProps {
  onNavigateHome: () => void;
  onSelectAboutSubTab: (subTab: string) => void;
  onOpenActionModal: (type: string) => void;
}

export const ProgramsView: React.FC<ProgramsViewProps> = ({
  onNavigateHome,
  onSelectAboutSubTab,
  onOpenActionModal
}) => {
  const [activeTab, setActiveTab] = useState<'Corridor Plans' | 'Regional Plans' | 'Reports'>('Corridor Plans');

  const tabsList: Array<'Corridor Plans' | 'Regional Plans' | 'Reports'> = [
    'Corridor Plans',
    'Regional Plans',
    'Reports'
  ];

  const currentList = PROGRAMS_STUDIES_DATA[activeTab] || PROGRAMS_STUDIES_DATA['Corridor Plans'];

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      
      {/* Programs Page Hero Banner matching Screenshot 1 */}
      <section className="relative h-[440px] sm:h-[500px] w-full flex flex-col justify-between overflow-hidden bg-slate-950">
        
        {/* Background Image: Local Public Asset for 100% Instant Loading */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80"
            alt="Regional Programs Driving Community Growth"
            className="w-full h-full object-cover object-center scale-105"
          />
          
          {/* Top Overlay for Navbar Contrast */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none" />

          {/* Environmental Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-emerald-950/20 to-transparent pointer-events-none" />

          {/* Bottom Dark Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />
        </div>

        {/* Top Navbar */}
        <Header
          onOpenActionModal={onOpenActionModal}
          onNavigateHome={onNavigateHome}
          onSelectAboutSubTab={onSelectAboutSubTab}
          activeNav="Programs & Studies"
        />

        {/* Hero Title & Pill Badge matching Screenshot 1 */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/20 text-white shadow-xl">
            <span className="text-sm font-bold tracking-wide">Programs</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl drop-shadow-xl">
            Regional Programs Driving Community Growth
          </h1>
        </div>
      </section>

      {/* Main Content Area Below Banner matching Screenshot 2 */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Left Sidebar Navigation matching Screenshot 2 */}
          <div className="md:col-span-4 lg:col-span-3 space-y-4 pt-2">
            <nav className="flex flex-col space-y-4">
              {tabsList.map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <div key={tab} className="relative pb-1">
                    <button
                      onClick={() => setActiveTab(tab)}
                      className={`text-left text-lg sm:text-xl transition-colors duration-200 ${
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

          {/* Right Main Content Area matching Screenshot 2 */}
          <div className="md:col-span-7 lg:col-span-8 space-y-8 pl-0 md:pl-4">
            
            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-black text-navy-950 tracking-tight leading-none">
              {activeTab}
            </h2>

            {/* List of Plan/Study Cards matching Screenshot 2 */}
            <div className="space-y-4 pt-2">
              {currentList.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#dbeafe]/80 hover:bg-[#dbeafe] border border-blue-100 rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {/* Left Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-navy-950 leading-snug">
                    {item.title}
                  </h3>

                  {/* Right PDF Badge Button matching Screenshot 2 */}
                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full bg-navy-950 hover:bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md transition-all duration-200 transform hover:scale-105"
                    title="Download Study PDF"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .8-.7 1.5-1.5 1.5H7v2H5.5V7H8c.8 0 1.5.7 1.5 1.5v3zm5 2c0 .8-.7 1.5-1.5 1.5h-2.5V7H13c.8 0 1.5.7 1.5 1.5v5zm3.5-3.5h-2v1.5h2V13h-2v2.5H16.5V7H18v3.5z" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
