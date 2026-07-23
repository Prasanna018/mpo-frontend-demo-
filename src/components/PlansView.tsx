import React, { useState } from 'react';
import { Header } from './Header';

interface PlansViewProps {
  onNavigateHome: () => void;
  onSelectAboutSubTab: (subTab: string) => void;
  onOpenActionModal: (type: string) => void;
}

export const PlansView: React.FC<PlansViewProps> = ({
  onNavigateHome,
  onSelectAboutSubTab,
  onOpenActionModal
}) => {
  const [activePlanTab, setActivePlanTab] = useState<string>('Metropolitan Transportation Plan (MTP)');

  const planSubTabs = [
    'Metropolitan Transportation Plan (MTP)',
    'Metropolitan Transportation Improvement Program (MTIP)',
    'Congestion Management Process (CMP)',
    'Unified Planning Work Program (UPWP)',
    'Public Participation Plan (PPP)',
    'Transportation Performance Management',
    'Listing of Obligated Projects',
    'Title VI'
  ];

  const defaultPdfUrl = 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/Draft-5.07.2026-Policy-Committee-Agenda-V6-05.07.2026.pdf';
  const cmpPdfUrl = 'https://lightblue-dogfish-243005.hostingersite.com/wp-content/uploads/2026/05/2025-CMP-1.pdf';

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      
      {/* Plans Hero Banner matching Screenshot 1 */}
      <section className="relative h-[440px] sm:h-[500px] w-full flex flex-col justify-between overflow-hidden bg-slate-950">
        
        {/* Background Image: Data analysts / planners looking at charts */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2400&q=90"
            alt="Long-Range Plans Shaping the Tri-Cities Region"
            className="w-full h-full object-cover object-center scale-105"
          />
          
          {/* Top Dark Overlay */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none" />

          {/* Blue Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-blue-950/20 to-transparent pointer-events-none" />

          {/* Bottom Dark Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />
        </div>

        {/* Top Navbar with Plans active */}
        <Header
          onOpenActionModal={onOpenActionModal}
          onNavigateHome={onNavigateHome}
          onSelectAboutSubTab={onSelectAboutSubTab}
          activeNav="Plans"
        />

        {/* Hero Title & Pill Badge matching Screenshot 1 */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/20 text-white shadow-xl">
            <span className="text-sm font-bold tracking-wide">Regional Plans</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl drop-shadow-xl">
            Long-Range Plans Shaping the Tri-Cities Region
          </h1>
        </div>
      </section>

      {/* Main Content Area Below Banner matching Screenshot 2 */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Left Sidebar Navigation matching Screenshot 2 */}
          <div className="md:col-span-4 lg:col-span-4 space-y-4 pt-2">
            <nav className="flex flex-col space-y-4">
              {planSubTabs.map((tab) => {
                const isActive = activePlanTab === tab;
                return (
                  <div key={tab} className="relative pb-1">
                    <button
                      onClick={() => setActivePlanTab(tab)}
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
          <div className="hidden md:block md:col-span-1 border-l border-slate-300 h-full min-h-[500px]" />

          {/* Right Main Content Area matching User Text & Screenshot 2 */}
          <div className="md:col-span-7 lg:col-span-7 space-y-8 pl-0 md:pl-2">
            
            {/* 1. METROPOLITAN TRANSPORTATION PLAN (MTP) */}
            {activePlanTab === 'Metropolitan Transportation Plan (MTP)' && (
              <div className="space-y-8 text-slate-800 text-base sm:text-lg font-normal leading-relaxed">
                
                <p>
                  The Metropolitan Transportation Plan is a long-term strategic document that serves as a comprehensive guide for transportation investments in the region over the next 25 years. It outlines transportation needs, policies, strategies, and projects designed to enhance the quality of life for all residents as part of TCAMPO’s ongoing, comprehensive, and collaborative planning efforts. Updated every five years, the plan adapts to evolving priorities, population shifts, and economic growth trends that influence travel demand. Its development involves coordination between TCAMPO, local communities, state and federal agencies, and the public to create regional solutions for maintaining, managing, and improving the transportation network.
                </p>

                {/* Horizontal Line with Diamond Icon matching Screenshot 2 */}
                <div className="relative my-8 border-t border-slate-300">
                  <div className="absolute left-0 -top-2.5 bg-white pr-2 text-slate-700">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.83L18.17 12 12 18.17 5.83 12 12 5.83z"/>
                    </svg>
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                    2050 Metropolitan Transportation Plan (PLAN2050)
                  </h2>
                  <p>
                    The development of the 2050 Metropolitan Transportation Plan for TCAMPO is currently in progress. This collaborative effort aims to maintain consistency in long-range planning across the region, and your participation is encouraged.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="text-xl font-bold text-navy-950">
                    Get Involved:
                  </h3>
                  <p>
                    Feedback from local transportation network users is essential in shaping a comprehensive long-range transportation plan. Your input will help the study team identify and address key priorities throughout the planning process.{' '}
                    <button
                      onClick={() => onOpenActionModal('survey')}
                      className="text-blue-600 hover:text-blue-800 font-bold underline inline-flex items-center gap-1"
                    >
                      Participate in the Visioning Phase Outreach Survey
                    </button>
                  </p>
                </div>

                {/* Horizontal Line with Diamond Icon matching Screenshot 2 */}
                <div className="relative my-8 border-t border-slate-300">
                  <div className="absolute left-0 -top-2.5 bg-white pr-2 text-slate-700">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.83L18.17 12 12 18.17 5.83 12 12 5.83z"/>
                    </svg>
                  </div>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                    2045 Metropolitan Transportation Plan
                  </h2>
                  <p>
                    The 2045 Metropolitan Transportation Plan was adopted by the TCAMPO’s Policy Committee on November 12, 2020. The Metropolitan Transportation Plan and accompanying documents can be{' '}
                    <a
                      href={defaultPdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-bold underline"
                    >
                      found here.
                    </a>
                  </p>
                </div>

              </div>
            )}

            {/* 2. METROPOLITAN TRANSPORTATION IMPROVEMENT PROGRAM (MTIP) */}
            {activePlanTab === 'Metropolitan Transportation Improvement Program (MTIP)' && (
              <div className="space-y-8 text-slate-800 text-base sm:text-lg font-normal leading-relaxed">
                <p>
                  The Metropolitan Transportation Improvement Program (MTIP) is a financially constrained, four-year program of federally, state, and locally funded transportation projects. It includes investments in highways, transit, bridges, rail, bicycle and pedestrian facilities, and other transportation improvements. Projects included in the MTIP are consistent with the region’s Metropolitan Transportation Plan (MTP) and typically progress from long-range concepts identified in the MTP into the four-year implementation program as funding becomes available and priorities are established.
                </p>

                <div className="space-y-6 pt-4 border-t border-slate-200">
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-navy-950">Adopted MTIP</h3>
                    <a
                      href={defaultPdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold underline"
                    >
                      FFY 2024-2027 Metropolitan Transportation Improvement Program (October 18, 2023)
                    </a>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-xl font-extrabold text-navy-950">Adopted MTIP</h3>
                    <a
                      href={defaultPdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold underline"
                    >
                      FFY 2027-30 Metropolitan Transportation Improvement Program (May 7, 2026)
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* 3. CONGESTION MANAGEMENT PROCESS (CMP) */}
            {activePlanTab === 'Congestion Management Process (CMP)' && (
              <div className="space-y-8 text-slate-800 text-base sm:text-lg font-normal leading-relaxed">
                <p>
                  Traffic congestion impacts the mobility of people and goods in Southern Virginia, which affects quality of life and economic growth in the region. The TCAMPO maintains the federally-required Congestion Management Process (CMP) to improve transportation system reliability, safety, and performance.
                </p>

                <div className="space-y-3 pt-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                    2025 CMP
                  </h2>
                  <p>
                    The 2025 CMP identifies an objectives-driven, performance-based process to manage regional transportation congestion. The CMP includes congestion-related goals, objectives, and performance measures. In 2018, congestion cost Americans $87 Billion and an average of 97 hours. Congestion also wastes billions of gallons of fuel, releasing billions of pounds of carbon dioxide into the atmosphere, annually. The CMP seeks to manage congestion through a variety of region- and corridor-specific strategies.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <h3 className="text-xl font-extrabold text-navy-950">Reports</h3>
                  <div className="flex flex-col space-y-3">
                    <a
                      href={cmpPdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold underline"
                    >
                      2025 CMP Report (PDF)
                    </a>
                    <a
                      href={cmpPdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold underline"
                    >
                      2016 CMP Report (PDF)
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* 4. UNIFIED PLANNING WORK PROGRAM (UPWP) */}
            {activePlanTab === 'Unified Planning Work Program (UPWP)' && (
              <div className="space-y-8 text-slate-800 text-base sm:text-lg font-normal leading-relaxed">
                <p>
                  Unified Planning Work Program (UPWP) is a federally-required document that outlines the TCAMPO’s annual budget, planning priorities, and proposed work for each fiscal year. For all budgeted projects, the UPWP describes the following:
                </p>

                <ul className="list-disc pl-6 space-y-2 font-semibold text-slate-900">
                  <li>Planning work involved</li>
                  <li>Resulting products of projects</li>
                  <li>Project work timeframes</li>
                  <li>Project costs</li>
                  <li>Project funding sources</li>
                </ul>

                <p>Additional elements included in the UPWP include the following:</p>

                <ul className="list-disc pl-6 space-y-2 font-semibold text-slate-900">
                  <li>a review of the previous year’s work</li>
                  <li>an overview of significant regional issues and any unmet transportation planning needs</li>
                </ul>

                <div className="space-y-4 pt-6 border-t border-slate-200">
                  <h3 className="text-2xl font-extrabold text-navy-950">Revisions and Adopted UPWP</h3>
                  <div className="flex flex-col space-y-3">
                    <a
                      href={defaultPdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-bold underline"
                    >
                      TCAMPO’s UPWP for FY 2024
                    </a>
                    <a
                      href={defaultPdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-bold underline"
                    >
                      TCAMPO’s Draft UPWP for FY2024-2025 (Open for Public Comment from August 1, 2024 – August 3)
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* 5. PUBLIC PARTICIPATION PLAN (PPP) */}
            {activePlanTab === 'Public Participation Plan (PPP)' && (
              <div className="space-y-8 text-slate-800 text-base sm:text-lg font-normal leading-relaxed">
                <p>
                  The TCAMPO Public Participation Plan (PPP) describes the strategies that will be used to encourage public participation in the development of the MPO’s various transportation planning documents. The Public Participation Plan outlines the MPO’s commitment to an open and transparent involvement process with the public, local communities, and local, state, and federal agencies to support the regional transportation planning process. The Public Participation Plan ensures everyone is given ample opportunity to access, review, and comment on plans, studies, and other transportation documents as they are being developed. Procedures outlined in the Public Participation Plan are reviewed periodically and updated as necessary to ensure a full and open participation process. Public involvement opportunities are established early in the process and remain a continuous effort throughout the development of a planning document or project by the MPO. The latest participation plan can be{' '}
                  <a
                    href={defaultPdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-bold underline"
                  >
                    found here.
                  </a>
                </p>
              </div>
            )}

            {/* 6. TRANSPORTATION PERFORMANCE MANAGEMENT */}
            {activePlanTab === 'Transportation Performance Management' && (
              <div className="space-y-8 text-slate-800 text-base sm:text-lg font-normal leading-relaxed">
                <p>
                  Transportation Performance Management (TPM) is a strategic approach that uses system information to make investment and policy decisions to achieve national performance goals. TCAMPO coordinates with state DOTs and regional transit operators to establish quantifiable targets for safety, pavement condition, bridge condition, system reliability, and transit asset management.
                </p>
                <div className="pt-4">
                  <a
                    href={defaultPdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-bold underline"
                  >
                    Download Latest System Performance Report (PDF)
                  </a>
                </div>
              </div>
            )}

            {/* 7. LISTING OF OBLIGATED PROJECTS */}
            {activePlanTab === 'Listing of Obligated Projects' && (
              <div className="space-y-8 text-slate-800 text-base sm:text-lg font-normal leading-relaxed">
                <p>
                  Each year, TCAMPO publishes an annual listing of projects for which federal transportation funds have been obligated during the preceding federal fiscal year. This report provides transparency into how federal highway and transit dollars are deployed within the Tri-Cities region.
                </p>
                <div className="pt-4">
                  <a
                    href={defaultPdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-bold underline"
                  >
                    Annual Listing of Obligated Projects - FFY 2025 (PDF)
                  </a>
                </div>
              </div>
            )}

            {/* 8. TITLE VI */}
            {activePlanTab === 'Title VI' && (
              <div className="space-y-8 text-slate-800 text-base sm:text-lg font-normal leading-relaxed">
                <p>
                  TCAMPO is committed to ensuring that no person is excluded from participation in, denied the benefits of, or subjected to discrimination under any program or activity receiving federal financial assistance, as provided by Title VI of the Civil Rights Act of 1964.
                </p>
                <div className="pt-4">
                  <a
                    href={defaultPdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-bold underline"
                  >
                    TCAMPO Title VI Implementation Plan & Complaint Procedures (PDF)
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};
