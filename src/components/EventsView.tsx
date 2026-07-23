import React, { useState } from 'react';
import { Header } from './Header';
import { Search, ChevronLeft, ChevronDown } from 'lucide-react';
import type { EventItem } from '../data/mockData';

interface EventsViewProps {
  onNavigateHome: () => void;
  onSelectAboutSubTab: (subTab: string) => void;
  onOpenActionModal: (type: string) => void;
  onSelectEvent: (event: EventItem) => void;
}

export const EventsView: React.FC<EventsViewProps> = ({
  onNavigateHome,
  onSelectAboutSubTab,
  onOpenActionModal,
  onSelectEvent
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeViewMode, setActiveViewMode] = useState<'List' | 'Month' | 'Day'>('Month');
  const [selectedMonth] = useState('July 2026');

  const pastEvents = [
    {
      id: 'pe-1',
      dayMonth: 'MAY 7',
      year: '2026',
      fullDate: 'May 7, 2026',
      time: 'May 7 @ 4:30 am',
      title: 'May 7, 2026',
      subTitle: 'Policy Committee Board Session',
      location: 'USA1 Crater PDC, 1964 Wakefield Street, Petersburg, VA 23805',
      note: 'Updated 05.07.2026'
    },
    {
      id: 'pe-2',
      dayMonth: 'MAY 1',
      year: '2026',
      fullDate: 'May 1, 2026',
      time: 'May 1 @ 10:00 am',
      title: 'May 1, 2026',
      subTitle: 'Technical Advisory Committee (TAC) Technical Review',
      location: 'USA Crater PDC, 1964 Wakefield Street, Petersburg, VA 23805',
      note: ''
    },
    {
      id: 'pe-3',
      dayMonth: 'APR 9',
      year: '2026',
      fullDate: 'April 9, 2026',
      time: 'April 9 @ 4:30 am - 10:12 am',
      title: 'April 9, 2026',
      subTitle: 'Regional Freight & Intermodal Workgroup',
      location: 'USA Crater PDC, 1964 Wakefield Street, Petersburg, VA 23805',
      note: 'VIRTUAL Meeting - Updated 04.07.2026'
    }
  ];

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      
      {/* Top Header Section with Dark Navy Header */}
      <section className="w-full bg-navy-950 pb-6 border-b border-navy-900">
        <Header
          onOpenActionModal={onOpenActionModal}
          onNavigateHome={onNavigateHome}
          onSelectAboutSubTab={onSelectAboutSubTab}
          activeNav="Events"
        />
      </section>

      {/* Main Events Content Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Search Bar & View Mode Control Card matching Screenshot 1 */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input & Find Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto flex-1 max-w-2xl">
            <div className="relative w-full">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search for events"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white rounded-xl pl-11 pr-4 py-3 text-sm font-semibold text-slate-900 placeholder:text-slate-400 transition-colors outline-none"
              />
            </div>
            
            <button
              onClick={() => {}}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-extrabold text-sm px-6 py-3 rounded-xl shadow-md transition-all duration-200 shrink-0 cursor-pointer"
            >
              Find Events
            </button>
          </div>

          {/* Right View Mode Selectors (List / Month / Day) matching Screenshot 1 */}
          <div className="flex items-center gap-6 text-sm font-bold text-slate-700 pt-2 md:pt-0">
            {(['List', 'Month', 'Day'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setActiveViewMode(mode)}
                className={`relative pb-1.5 transition-colors cursor-pointer ${
                  activeViewMode === mode
                    ? 'text-slate-950 font-extrabold'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {mode}
                {activeViewMode === mode && (
                  <div className="absolute bottom-0 left-0 w-full border-b-2 border-slate-950" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Date Controls Row matching Screenshot 1 */}
        <div className="flex items-center gap-4 text-slate-900">
          <button
            onClick={() => {}}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          <button
            onClick={() => {}}
            className="px-4 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
          >
            This Month
          </button>

          <div className="flex items-center gap-1.5 text-2xl font-extrabold text-navy-950 cursor-pointer">
            <span>{selectedMonth}</span>
            <ChevronDown className="w-5 h-5 stroke-[2.5]" />
          </div>
        </div>

        {/* Notice Banner matching Screenshot 1 */}
        <div className="bg-slate-100/90 border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl p-5 text-center shadow-inner">
          There are no upcoming events.
        </div>

        {/* Latest Past Events Section matching Screenshot 1 & 2 */}
        <div className="space-y-6 pt-4">
          <h2 className="text-3xl font-black text-navy-950 tracking-tight">
            Latest Past Events
          </h2>

          <div className="space-y-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => onSelectEvent({
                  id: event.id,
                  dayMonth: event.dayMonth,
                  year: event.year,
                  fullDate: event.fullDate,
                  time: event.time,
                  title: `${event.title} - ${event.subTitle}`,
                  location: event.location,
                  description: event.note || 'Official TCAMPO committee session.'
                })}
                className="flex flex-col sm:flex-row items-start gap-6 group cursor-pointer p-2 rounded-2xl hover:bg-slate-50 transition-colors"
              >
                {/* Left Stacked Date Badge matching Screenshot 2 */}
                <div className="text-center min-w-[70px] shrink-0">
                  <span className="block text-[11px] uppercase tracking-wider font-bold text-slate-500">
                    {event.dayMonth.split(' ')[0]}
                  </span>
                  <span className="block text-3xl font-black text-navy-950 leading-none my-1">
                    {event.dayMonth.split(' ')[1]}
                  </span>
                  <span className="block text-[11px] font-semibold text-slate-500">
                    {event.year}
                  </span>
                </div>

                {/* Right Details Stack matching Screenshot 2 */}
                <div className="space-y-1.5">
                  <div className="text-xs font-semibold text-slate-600">
                    {event.time}
                  </div>

                  <h3 className="text-2xl font-black text-navy-950 group-hover:text-blue-600 transition-colors leading-tight">
                    {event.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-700">
                    {event.location}
                  </p>

                  {event.note && (
                    <p className="text-xs font-semibold text-slate-500 pt-1">
                      {event.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

    </div>
  );
};
