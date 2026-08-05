import React, { useState } from 'react';
import { Header } from './Header';

interface DataViewProps {
  onNavigateHome: () => void;
  onSelectAboutSubTab: (subTab: string) => void;
  onOpenActionModal: (type: string) => void;
}

export const DataView: React.FC<DataViewProps> = ({
  onNavigateHome,
  onSelectAboutSubTab,
  onOpenActionModal
}) => {
  const [activeDataTab, setActiveDataTab] = useState<string>('Regional Travel Model');

  const dataSubTabs = [
    'Regional Travel Model',
    'Roadway Functional Classification',
    'Transportation Dashboard'
  ];



  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      
      {/* Data & Research Hero Banner matching Screenshot 1 */}
      <section className="relative h-[440px] sm:h-[500px] w-full flex flex-col justify-between overflow-hidden bg-slate-950">
        
        {/* Background Image: Data Analysts reviewing research screen */}
        <div className="absolute inset-0 z-0">
          <img
            src="/data-bg.png"
            alt="Data & Research Powering Regional Decisions"
            className="w-full h-full object-cover object-center scale-105"
          />
          
          {/* Top Dark Overlay */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none" />

          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-blue-950/20 to-transparent pointer-events-none" />

          {/* Bottom Dark Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />
        </div>

        {/* Top Navbar with Data active */}
        <Header
          onOpenActionModal={onOpenActionModal}
          onNavigateHome={onNavigateHome}
          onSelectAboutSubTab={onSelectAboutSubTab}
          activeNav="Data"
        />

        {/* Hero Title & Pill Badge matching Screenshot 1 */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/20 text-white shadow-xl">
            <span className="text-sm font-bold tracking-wide">Data & Research</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl drop-shadow-xl">
            Data & Research Powering Regional Decisions
          </h1>
        </div>
      </section>

      {/* Main Content Area Below Banner matching Screenshot 2 */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Left Sidebar Navigation matching Screenshot 2 */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4 pt-2">
            <nav className="flex flex-col space-y-4">
              {dataSubTabs.map((tab) => {
                const isActive = activeDataTab === tab;
                return (
                  <div key={tab} className="relative pb-1">
                    <button
                      onClick={() => setActiveDataTab(tab)}
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
            
            {/* 1. REGIONAL TRAVEL MODEL */}
            {activeDataTab === 'Regional Travel Model' && (
              <div className="space-y-8">
                
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
                  Regional Travel Model
                </h2>

                <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed">
                  The MPO and its stakeholders utilize a Regional Travel Demand Model to project traffic patterns and travel behavior across the region. The model primarily supports the Metropolitan Transportation Plan (MTP) by evaluating proposed roadway and transit projects, assessing potential impacts of development proposals, and aiding in various regional, subarea, and corridor studies. The latest version is calibrated to a 2017 base year, with future year projections extending to 2050.
                </p>

                {/* Horizontal Line with Diamond Icon matching Screenshot 2 */}
                <div className="relative my-8 border-t border-slate-300">
                  <div className="absolute left-0 -top-2.5 bg-white pr-2 text-slate-700">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.83L18.17 12 12 18.17 5.83 12 12 5.83z"/>
                    </svg>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <h3 className="text-2xl font-extrabold text-navy-950 tracking-tight">
                    Model Documentation
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-[#dbeafe]/80 hover:bg-[#dbeafe] border border-blue-100 rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4 transition-all duration-200 shadow-sm hover:shadow-md">
                      <h4 className="text-base sm:text-lg font-extrabold text-navy-950">
                        Socio-Economic Forecast Report (2017-2050)
                      </h4>
                      <a
                        href="https://craterpdc.org/wp-content/uploads/2026/08/TCAMPO_2050_SE_20230713.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-full bg-navy-950 hover:bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md transition-all duration-200 transform hover:scale-105"
                        title="Download Socio-Economic Forecast Report PDF"
                      >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .8-.7 1.5-1.5 1.5H7v2H5.5V7H8c.8 0 1.5.7 1.5 1.5v3zm5 2c0 .8-.7 1.5-1.5 1.5h-2.5V7H13c.8 0 1.5.7 1.5 1.5v5zm3.5-3.5h-2v1.5h2V13h-2v2.5H16.5V7H18v3.5z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* 2. ROADWAY FUNCTIONAL CLASSIFICATION */}
            {activeDataTab === 'Roadway Functional Classification' && (
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
                  Roadway Functional Classification
                </h2>

                <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed">
                  Functional classification is the process by which public streets and highways are grouped into classes according to the character of service they are intended to provide. TCAMPO works closely with the Virginia Department of Transportation (VDOT) to classify roadways into Interstates, Principal Arterials, Minor Arterials, Collectors, and Local Streets to determine federal funding eligibility and design standards.
                </p>

                <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed pt-2">
                  To see current functional classification maps for the MPO, please visit VDOT's{' '}
                  <a
                    href="https://www.arcgis.com/apps/mapviewer/index.html?webmap=3eca6c9adb6649c988d98734f85baddb"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-bold underline transition-colors"
                  >
                    Functional Classification Maps webpage.
                  </a>
                </p>
              </div>
            )}

            {/* 3. TRANSPORTATION DASHBOARD */}
            {activeDataTab === 'Transportation Dashboard' && (
              <div className="space-y-8">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
                  Transportation Dashboard
                </h2>

                <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed">
                  The Regional Transportation Performance Dashboard offers key insights into traffic counts, safety metrics, transit ridership, and freight throughput across the Tri-Cities region. Data is updated annually to assist policymakers and the public in evaluating regional mobility trends.
                </p>

                <div className="pt-4 border-t border-slate-200">
                  <div className="space-y-4">
                    <div className="bg-[#dbeafe]/80 hover:bg-[#dbeafe] border border-blue-100 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 shadow-sm hover:shadow-md">
                      <a
                        href="https://cpdcperftracker.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-base sm:text-lg font-extrabold text-navy-950 hover:text-blue-600 transition-colors"
                      >
                        Transportation Dashboard
                      </a>
                      <a
                        href="https://cpdcperftracker.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-full bg-navy-950 hover:bg-blue-600 text-white font-bold text-sm inline-flex items-center gap-2 shrink-0 shadow-md transition-all duration-200 transform hover:scale-105"
                      >
                        <span>Visit Dashboard</span>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};
