import React from 'react';

interface FooterProps {
  onOpenActionModal: (type: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenActionModal }) => {
  return (
    <footer className="w-full bg-navy-950 text-white pt-16 pb-10 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 5 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm">
                <div className="text-left font-serif">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-extrabold leading-tight">Tri-Cities Area</span>
                  <span className="block text-2xl font-black italic tracking-tighter text-slate-950 leading-none">MPO</span>
                </div>
              </div>

              <div className="text-white leading-snug">
                <p className="text-xs font-bold">Tri-Cities Area</p>
                <p className="text-xs font-extrabold text-slate-100">Metropolitan Planning Organization</p>
                <p className="text-[11px] font-semibold text-slate-300">(TCAMPO)</p>
              </div>
            </div>

            <p className="text-sm text-slate-300 font-medium leading-relaxed">
              Supporting sustainable regional growth through planning, transportation, funding, and community development initiatives.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-extrabold text-white tracking-tight">Quick Links</h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-300">
              <li>
                <button onClick={() => onOpenActionModal('about')} className="hover:text-blue-400 transition-colors">
                  About Organization
                </button>
              </li>
              <li>
                <button onClick={() => onOpenActionModal('programs')} className="hover:text-blue-400 transition-colors">
                  Regional Programs
                </button>
              </li>
              <li>
                <button onClick={() => onOpenActionModal('funding')} className="hover:text-blue-400 transition-colors">
                  Funding Opportunities
                </button>
              </li>
              <li>
                <button onClick={() => onOpenActionModal('plans')} className="hover:text-blue-400 transition-colors">
                  Research Reports
                </button>
              </li>
              <li>
                <button onClick={() => onOpenActionModal('contact')} className="hover:text-blue-400 transition-colors">
                  Contact Information
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Client Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-extrabold text-white tracking-tight">Client Support</h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-300">
              <li>
                <button onClick={() => onOpenActionModal('contact')} className="hover:text-blue-400 transition-colors">
                  Help Center
                </button>
              </li>
              <li>
                <button onClick={() => onOpenActionModal('plans')} className="hover:text-blue-400 transition-colors">
                  Public Resources
                </button>
              </li>
              <li>
                <button onClick={() => onOpenActionModal('committee')} className="hover:text-blue-400 transition-colors">
                  Community Support
                </button>
              </li>
              <li>
                <button onClick={() => onOpenActionModal('schedule')} className="hover:text-blue-400 transition-colors">
                  Schedule Meeting
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Policies */}
          <div className="space-y-4">
            <h4 className="text-lg font-extrabold text-white tracking-tight">Policies</h4>
            <ul className="space-y-2.5 text-sm font-semibold text-slate-300">
              <li>
                <button onClick={() => onOpenActionModal('privacy')} className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenActionModal('terms')} className="hover:text-blue-400 transition-colors">
                  Terms Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onOpenActionModal('accessibility')} className="hover:text-blue-400 transition-colors">
                  Accessibility Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenActionModal('cookies')} className="hover:text-blue-400 transition-colors">
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Follow Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-extrabold text-white tracking-tight">Follow Us</h4>
            <ul className="space-y-3 text-sm font-semibold text-slate-300">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5 text-slate-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5 text-slate-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                  <svg className="w-5 h-5 text-slate-300 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 border-box 3-1.2 3-1.2z"></path>
                  </svg>
                  <span>Twitter</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator Rule */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col items-center justify-center">
          <p className="text-sm font-bold text-slate-300 tracking-wide text-center">
            © 2026 Regional Council, All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
