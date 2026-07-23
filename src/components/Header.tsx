import React, { useState } from 'react';
import { MPO_NAV_LINKS } from '../data/mockData';
import { ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenActionModal: (type: string) => void;
  onNavigateHome?: () => void;
  onSelectAboutSubTab?: (subTab: string) => void;
  activeNav?: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenActionModal,
  onNavigateHome,
  onSelectAboutSubTab,
  activeNav = 'Home'
}) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (name: string, hasDropdown?: boolean) => {
    if (hasDropdown) {
      setIsAboutOpen(!isAboutOpen);
    } else {
      setIsAboutOpen(false);
      setIsMobileMenuOpen(false);
      
      if (name === 'Home' && onNavigateHome) {
        onNavigateHome();
      } else {
        onOpenActionModal(name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/gi, ''));
      }
    }
  };

  const handleSubTabClick = (item: string) => {
    setIsAboutOpen(false);
    setIsMobileMenuOpen(false);
    if (onSelectAboutSubTab) {
      onSelectAboutSubTab(item);
    }
  };

  return (
    <header className="relative z-50 w-full pt-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left Side: MPO Logo & Title */}
        <div
          className="flex items-center gap-3.5 shrink-0 cursor-pointer"
          onClick={() => onNavigateHome && onNavigateHome()}
        >
          <div className="flex items-center bg-white/95 px-3.5 py-2 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm">
            <div className="text-left font-serif">
              <span className="block text-[11px] uppercase tracking-wider text-slate-500 font-extrabold leading-tight">Tri-Cities Area</span>
              <span className="block text-3xl font-black italic tracking-tighter text-slate-950 leading-none">MPO</span>
            </div>
          </div>

          <div className="hidden sm:block text-white max-w-[240px] leading-snug drop-shadow-md">
            <p className="text-sm font-bold tracking-wide">Tri-Cities Area</p>
            <p className="text-sm font-extrabold text-slate-100">Metropolitan Planning Organization</p>
            <p className="text-xs font-semibold text-slate-200 tracking-wider">(TCAMPO)</p>
          </div>
        </div>

        {/* Center: Glassmorphism Floating Pill Nav Bar */}
        <nav className="hidden lg:flex items-center">
          <div className="glass-pill rounded-full px-5 py-2 flex items-center gap-1.5 sm:gap-2 shadow-2xl">
            {MPO_NAV_LINKS.map((link) => {
              const isActive = activeNav === link.name;

              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative">
                    <button
                      onClick={() => handleNavClick(link.name, true)}
                      className={`flex items-center gap-1.5 px-4.5 py-2 rounded-full text-base font-bold transition-all duration-200 ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4.5 h-4.5 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* About Dropdown Menu matching User Requirements */}
                    {isAboutOpen && (
                      <div className="absolute top-full left-0 mt-3 w-64 bg-slate-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {link.dropdownItems?.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSubTabClick(item)}
                            className="w-full text-left px-5 py-3 text-sm font-bold text-slate-200 hover:text-white hover:bg-blue-600/40 transition-colors border-b border-white/5 last:border-0"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.name)}
                  className={`px-4.5 py-2 rounded-full text-base font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-extrabold'
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Right Side: CTA Button */}
        <div className="hidden sm:flex items-center">
          <button 
            onClick={() => onOpenActionModal('programs')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-blue-500/40 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Explore Programs
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-7xl mx-auto bg-slate-900/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2.5">
            {MPO_NAV_LINKS.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="flex flex-col gap-1">
                    <span className="px-5 py-2 text-xs font-black uppercase text-blue-400">About Section</span>
                    {link.dropdownItems?.map((subItem) => (
                      <button
                        key={subItem}
                        onClick={() => handleSubTabClick(subItem)}
                        className="text-left px-6 py-2.5 rounded-xl font-bold text-sm text-slate-200 hover:bg-white/10"
                      >
                        • {subItem}
                      </button>
                    ))}
                  </div>
                );
              }
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.name)}
                  className={`text-left px-5 py-3.5 rounded-2xl font-bold text-base transition-colors ${
                    activeNav === link.name ? 'bg-blue-600 text-white' : 'text-slate-200 hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenActionModal('programs');
              }}
              className="mt-3 w-full bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-center py-3.5 rounded-2xl shadow-lg"
            >
              Explore Programs
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
