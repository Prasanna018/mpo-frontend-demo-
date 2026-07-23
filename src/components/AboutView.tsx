import React, { useState } from 'react';
import { Header } from './Header';
import { ABOUT_SECTIONS, POLICY_COMMITTEE_DATA, TAC_COMMITTEE_DATA, AGENDAS_DATA } from '../data/mockData';

interface AboutViewProps {
  activeSubTab: string;
  onSelectSubTab: (subTab: string) => void;
  onNavigateHome: () => void;
  onOpenActionModal: (type: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  activeSubTab,
  onSelectSubTab,
  onNavigateHome,
  onOpenActionModal
}) => {
  const [tacFilter, setTacFilter] = useState<'voting' | 'non-voting'>('voting');
  const [agendaFilter, setAgendaFilter] = useState<'PC' | 'TAC'>('PC');

  const currentSection = ABOUT_SECTIONS[activeSubTab as keyof typeof ABOUT_SECTIONS] || ABOUT_SECTIONS['MPO Overview'];

  const subTabsList = [
    'MPO Overview',
    'Policy Committee (PC)',
    'Technical Advisory Committee (TAC)',
    'Agendas'
  ];

  const isPolicyCommittee = activeSubTab === 'Policy Committee (PC)';
  const isTAC = activeSubTab === 'Technical Advisory Committee (TAC)';
  const isAgendas = activeSubTab === 'Agendas';

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      
      {/* About Page Hero Banner */}
      <section className="relative h-[380px] sm:h-[440px] w-full flex flex-col justify-between overflow-hidden bg-slate-950">
        
        {/* Background Image: Semi-Trucks driving on highway under bright sky */}
        <div className="absolute inset-0 z-0">
          <img
            src="/about-banner.png"
            alt="Freight semi trucks driving on highway"
            className="w-full h-full object-cover object-center scale-105"
          />
          
          {/* Top Overlay */}
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/75 via-black/35 to-transparent pointer-events-none" />

          {/* Bottom Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </div>

        {/* Top Navbar */}
        <Header
          onOpenActionModal={onOpenActionModal}
          onNavigateHome={onNavigateHome}
          onSelectAboutSubTab={onSelectSubTab}
          activeNav="About"
        />

        {/* Bottom Left Breadcrumb Pill */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/70 backdrop-blur-md border border-white/20 text-white shadow-xl">
            <span className="text-sm font-semibold text-slate-200">About Us</span>
            <span className="text-slate-400 font-light">|</span>
            <span className="text-sm font-bold text-white tracking-wide">{currentSection.title}</span>
          </div>
        </div>
      </section>

      {/* Main Content Area Below Banner */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Left Sidebar Navigation matching Screenshots */}
          <div className="md:col-span-4 lg:col-span-3 space-y-4 pt-2">
            <nav className="flex flex-col space-y-3">
              {subTabsList.map((tab) => {
                const isActive = activeSubTab === tab;
                return (
                  <div key={tab} className="relative pb-1">
                    <button
                      onClick={() => onSelectSubTab(tab)}
                      className={`text-left text-base sm:text-lg transition-colors duration-200 ${
                        isActive
                          ? 'text-blue-600 font-bold'
                          : 'text-slate-900 font-bold hover:text-blue-600'
                      }`}
                    >
                      {tab}
                    </button>
                    {/* Active Underline */}
                    {isActive && (
                      <div className="w-full border-b-2 border-blue-500 mt-1.5 animate-in fade-in duration-200" />
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Vertical Divider Line matching Screenshots */}
          <div className="hidden md:block md:col-span-1 border-l border-slate-300 h-full min-h-[550px]" />

          {/* Right Main Content Column */}
          <div className="md:col-span-7 lg:col-span-8 space-y-8 pl-0 md:pl-4">
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-black text-navy-950 tracking-tight leading-none">
              {currentSection.title}
            </h1>

            {/* IF AGENDAS SECTION IS SELECTED matching Screenshot */}
            {isAgendas ? (
              <div className="space-y-8 pt-2">
                
                {/* Agenda Pill Toggle Buttons (PC vs TAC) */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setAgendaFilter('PC')}
                    className={`px-6 py-2.5 rounded-full text-base font-bold transition-all duration-200 ${
                      agendaFilter === 'PC'
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-sky-100/90 text-blue-600 hover:bg-sky-200 border border-sky-300'
                    }`}
                  >
                    PC (Policy Committee)
                  </button>

                  <button
                    onClick={() => setAgendaFilter('TAC')}
                    className={`px-6 py-2.5 rounded-full text-base font-bold transition-all duration-200 ${
                      agendaFilter === 'TAC'
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-sky-100/90 text-blue-600 hover:bg-sky-200 border border-sky-300'
                    }`}
                  >
                    TAC (Technical Advisory Committee)
                  </button>
                </div>

                {/* Light Sky Blue Container Card matching Screenshot */}
                <div className="bg-[#dbeafe]/60 border border-blue-100 rounded-3xl p-6 sm:p-8 space-y-10 shadow-sm">
                  
                  {/* Current Agendas Table */}
                  <div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-separate border-spacing-y-2">
                        <thead>
                          <tr className="bg-sky-200/60 text-navy-950 text-xs font-black uppercase tracking-wider">
                            <th className="py-3 px-4 rounded-l-xl w-1/2">Venue</th>
                            <th className="py-3 px-4 w-1/4">Date</th>
                            <th className="py-3 px-4 w-1/6">Time</th>
                            <th className="py-3 px-4 rounded-r-xl text-center w-16">Agenda</th>
                          </tr>
                        </thead>
                        <tbody>
                          {AGENDAS_DATA.current.map((item) => (
                            <tr key={item.id} className="bg-white hover:bg-blue-50/80 transition-colors shadow-sm text-xs sm:text-sm font-semibold text-slate-900 rounded-xl">
                              <td className="py-3.5 px-4 rounded-l-xl font-medium text-slate-700 max-w-xs">{item.venue}</td>
                              <td className="py-3.5 px-4 font-bold text-navy-950 whitespace-nowrap">{item.date}</td>
                              <td className="py-3.5 px-4 whitespace-nowrap">{item.time}</td>
                              <td className="py-3.5 px-4 rounded-r-xl text-center">
                                {item.pdfUrl ? (
                                  <a
                                    href={item.pdfUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center p-1.5 text-red-600 hover:text-red-700 transition-transform transform hover:scale-110"
                                    title="Download Agenda PDF"
                                  >
                                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-2h2v2zm0-4h-2V7h2v5z" fill="none"/>
                                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .8-.7 1.5-1.5 1.5H7v2H5.5V7H8c.8 0 1.5.7 1.5 1.5v3zm5 2c0 .8-.7 1.5-1.5 1.5h-2.5V7H13c.8 0 1.5.7 1.5 1.5v5zm3.5-3.5h-2v1.5h2V13h-2v2.5H16.5V7H18v3.5z" />
                                    </svg>
                                  </a>
                                ) : (
                                  <span className="text-xs text-slate-400 font-bold">-</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Archieve Section matching Screenshot */}
                  <div className="pt-4">
                    <h2 className="text-2xl font-extrabold text-navy-950 mb-4 tracking-tight">
                      Archieve
                    </h2>

                    <div className="overflow-x-auto max-h-[550px] overflow-y-auto pr-1">
                      <table className="w-full text-left border-separate border-spacing-y-2">
                        <thead className="sticky top-0 z-10">
                          <tr className="bg-sky-200/80 backdrop-blur-md text-navy-950 text-xs font-black uppercase tracking-wider">
                            <th className="py-3 px-4 rounded-l-xl w-1/2">Venue</th>
                            <th className="py-3 px-4 w-1/4">Date</th>
                            <th className="py-3 px-4 w-1/6">Time</th>
                            <th className="py-3 px-4 rounded-r-xl text-center w-16">Agenda</th>
                          </tr>
                        </thead>
                        <tbody>
                          {AGENDAS_DATA.archive.map((item) => (
                            <tr key={item.id} className="bg-white hover:bg-blue-50/80 transition-colors shadow-sm text-xs sm:text-sm font-semibold text-slate-900 rounded-xl">
                              <td className="py-3.5 px-4 rounded-l-xl font-medium text-slate-700 max-w-xs">{item.venue}</td>
                              <td className="py-3.5 px-4 font-bold text-navy-950 whitespace-nowrap">{item.date}</td>
                              <td className="py-3.5 px-4 whitespace-nowrap">{item.time}</td>
                              <td className="py-3.5 px-4 rounded-r-xl text-center">
                                {item.status === 'cancelled' ? (
                                  <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                                    cancelled
                                  </span>
                                ) : item.status === 'No Meeting' ? (
                                  <span className="inline-block bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                                    No Meeting
                                  </span>
                                ) : item.pdfUrl ? (
                                  <a
                                    href={item.pdfUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center p-1.5 text-red-600 hover:text-red-700 transition-transform transform hover:scale-110"
                                    title="Download Archive PDF"
                                  >
                                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5c0 .8-.7 1.5-1.5 1.5H7v2H5.5V7H8c.8 0 1.5.7 1.5 1.5v3zm5 2c0 .8-.7 1.5-1.5 1.5h-2.5V7H13c.8 0 1.5.7 1.5 1.5v5zm3.5-3.5h-2v1.5h2V13h-2v2.5H16.5V7H18v3.5z" />
                                    </svg>
                                  </a>
                                ) : (
                                  <span className="text-xs text-slate-400 font-bold">-</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                </div>

              </div>
            ) : isTAC ? (
              /* TECHNICAL ADVISORY COMMITTEE (TAC) VIEW */
              <div className="space-y-8 pt-2">
                
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setTacFilter('voting')}
                    className={`px-6 py-2.5 rounded-full text-base font-bold transition-all duration-200 ${
                      tacFilter === 'voting'
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-sky-100/90 text-blue-600 hover:bg-sky-200 border border-sky-300'
                    }`}
                  >
                    Voting Members
                  </button>

                  <button
                    onClick={() => setTacFilter('non-voting')}
                    className={`px-6 py-2.5 rounded-full text-base font-bold transition-all duration-200 ${
                      tacFilter === 'non-voting'
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-sky-100/90 text-blue-600 hover:bg-sky-200 border border-sky-300'
                    }`}
                  >
                    Non Voting Members
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
                  {(tacFilter === 'voting' ? TAC_COMMITTEE_DATA.votingMembers : TAC_COMMITTEE_DATA.nonVotingMembers).map((member, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-3">
                      <div className="w-44 h-52 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md flex items-center justify-center p-3">
                        {member.avatarType === 'female' ? (
                          <svg className="w-32 h-40 text-slate-400" viewBox="0 0 100 120" fill="currentColor">
                            <path d="M50 15 C38 15 30 25 30 38 C30 50 38 58 42 60 C30 66 20 80 18 105 L82 105 C80 80 70 66 58 60 C62 58 70 50 70 38 C70 25 62 15 50 15 Z" />
                          </svg>
                        ) : (
                          <svg className="w-32 h-40 text-slate-400" viewBox="0 0 100 120" fill="currentColor">
                            <circle cx="50" cy="38" r="22" />
                            <path d="M15 110 C15 75, 85 75, 85 110 Z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-navy-950 leading-snug">
                          {member.name}
                        </h3>
                        <p className="text-xs font-semibold text-slate-600 mt-1 max-w-[200px]">
                          {member.organization}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ) : isPolicyCommittee ? (
              /* POLICY COMMITTEE VIEW */
              <div className="space-y-12 pt-2">
                
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                    Voting
                  </h2>

                  <div className="flex flex-col items-start gap-3">
                    <div className="w-48 h-56 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md">
                      <img
                        src={POLICY_COMMITTEE_DATA.chair.image}
                        alt={POLICY_COMMITTEE_DATA.chair.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-navy-950">
                        {POLICY_COMMITTEE_DATA.chair.name}
                      </h3>
                      <p className="text-sm font-medium text-slate-600">
                        {POLICY_COMMITTEE_DATA.chair.organization}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                    Vice Chair
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {POLICY_COMMITTEE_DATA.votingMembers.map((member, idx) => (
                      <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                        <div className="w-44 h-52 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md flex items-center justify-center">
                          {member.isVacant ? (
                            <div className="w-full h-full p-4 flex flex-col items-center justify-center bg-slate-50 text-slate-400">
                              <svg className="w-24 h-24 text-slate-300" viewBox="0 0 100 100" fill="none" stroke="currentColor">
                                <circle cx="50" cy="50" r="45" strokeWidth="3" />
                                <path d="M30 65 C30 50, 70 50, 70 65" strokeWidth="3" />
                                <circle cx="50" cy="38" r="14" strokeWidth="3" />
                              </svg>
                            </div>
                          ) : (
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          )}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-navy-950">
                            {member.name}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600">
                            {member.organization}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 pt-4 border-t border-slate-200">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                    Non Voting
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {POLICY_COMMITTEE_DATA.nonVotingMembers.map((member, idx) => (
                      <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                        <div className="w-44 h-52 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md flex items-center justify-center p-3">
                          <svg className="w-32 h-40 text-slate-400" viewBox="0 0 100 120" fill="currentColor">
                            <circle cx="50" cy="38" r="22" />
                            <path d="M15 110 C15 75, 85 75, 85 110 Z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-navy-950">
                            {member.name}
                          </h3>
                          <p className="text-xs font-semibold text-slate-600 max-w-[180px]">
                            {member.organization}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              /* MPO OVERVIEW VIEW */
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight capitalize">
                  {currentSection.subtitle}
                </h2>

                <div className="space-y-5 text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                  {currentSection.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}

                  {currentSection.bullets && currentSection.bullets.length > 0 && (
                    <ul className="list-disc pl-6 space-y-2 text-slate-800 font-medium">
                      {currentSection.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {currentSection.historyTitle && (
                  <div className="pt-8 border-t border-slate-200 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight capitalize">
                      {currentSection.historyTitle}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                      {currentSection.historyContent}
                    </p>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};
