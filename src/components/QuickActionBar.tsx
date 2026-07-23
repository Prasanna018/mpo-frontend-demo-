import React from 'react';

interface QuickActionBarProps {
  onOpenActionModal: (actionId: string) => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = ({ onOpenActionModal }) => {
  return (
    <section className="w-full bg-navy-900 border-t border-navy-800 py-10 px-4 sm:px-6 lg:px-8 text-white relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
          
          {/* Item 1: Explore Programs */}
          <button
            onClick={() => onOpenActionModal('programs')}
            className="group flex flex-col items-center text-center gap-3.5 p-3.5 rounded-2xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 w-full max-w-[220px]"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-md">
              <svg className="w-9 h-9 text-white stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
                <circle cx="10" cy="9" r="3"></circle>
                <line x1="12" y1="11" x2="15" y2="14"></line>
              </svg>
            </div>
            <span className="text-lg font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              Explore Programs
            </span>
          </button>

          {/* Item 2: View Regional Plans */}
          <button
            onClick={() => onOpenActionModal('plans')}
            className="group flex flex-col items-center text-center gap-3.5 p-3.5 rounded-2xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 w-full max-w-[220px]"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-md">
              <svg className="w-9 h-9 text-white stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                <polyline points="9 11 11 13 15 9"></polyline>
                <line x1="9" y1="17" x2="15" y2="17"></line>
              </svg>
            </div>
            <span className="text-lg font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              View Regional Plans
            </span>
          </button>

          {/* Item 3: Funding */}
          <button
            onClick={() => onOpenActionModal('funding')}
            className="group flex flex-col items-center text-center gap-3.5 p-3.5 rounded-2xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 w-full max-w-[220px]"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-md">
              <svg className="w-9 h-9 text-white stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2v6"></path>
                <path d="M9 5h6"></path>
                <circle cx="12" cy="11" r="3"></circle>
                <path d="M7 21h10a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z"></path>
                <path d="M12 15v2"></path>
              </svg>
            </div>
            <span className="text-lg font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              Funding
            </span>
          </button>

          {/* Item 4: Agendas */}
          <button
            onClick={() => onOpenActionModal('agendas')}
            className="group flex flex-col items-center text-center gap-3.5 p-3.5 rounded-2xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 w-full max-w-[220px]"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-md">
              <svg className="w-9 h-9 text-white stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <circle cx="15" cy="16" r="3"></circle>
                <polyline points="15 14.5 15 16 16.5 16"></polyline>
              </svg>
            </div>
            <span className="text-lg font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              Agendas
            </span>
          </button>

          {/* Item 5: Committee */}
          <button
            onClick={() => onOpenActionModal('committee')}
            className="group flex flex-col items-center text-center gap-3.5 p-3.5 rounded-2xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-1 w-full max-w-[220px] col-span-2 md:col-span-1"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 shadow-md">
              <svg className="w-9 h-9 text-white stroke-[1.75]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                <path d="M21 11h-3v-3"></path>
              </svg>
            </div>
            <span className="text-lg font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              Committee
            </span>
          </button>

        </div>
      </div>
    </section>
  );
};
