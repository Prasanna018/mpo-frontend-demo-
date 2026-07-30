import React, { useState } from 'react';
import { NEWS_ITEMS, EVENTS_ITEMS } from '../data/mockData';
import type { NewsItem, EventItem } from '../data/mockData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsAndEventsProps {
  onSelectNews: (news: NewsItem) => void;
  onSelectEvent: (event: EventItem) => void;
  onOpenNewsList: () => void;
  onOpenEventsList: () => void;
}

const CARD_THEMES: Record<string, {
  border: string;
  hoverBorder: string;
  shadowHover: string;
  topBar: string;
  badgeGradient: string;
  iconColor: string;
  lineGradient: string;
  dateBadge: string;
  bottomBg: string;
}> = {
  'news-1': {
    border: 'border-amber-300/90',
    hoverBorder: 'hover:border-amber-400',
    shadowHover: 'hover:shadow-amber-500/25',
    topBar: 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500',
    badgeGradient: 'from-amber-500 via-amber-400 to-yellow-400',
    iconColor: 'text-amber-600',
    lineGradient: 'from-amber-400 via-slate-800 to-amber-400',
    dateBadge: 'bg-amber-100/90 text-amber-950 border-amber-200/90',
    bottomBg: 'from-[#fffdf5] via-[#fffbeb] to-[#fef8e7] border-amber-200/80'
  },
  'news-2': {
    border: 'border-blue-300/90',
    hoverBorder: 'hover:border-blue-400',
    shadowHover: 'hover:shadow-blue-500/25',
    topBar: 'bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500',
    badgeGradient: 'from-blue-600 via-sky-500 to-cyan-400',
    iconColor: 'text-blue-600',
    lineGradient: 'from-blue-500 via-slate-800 to-blue-500',
    dateBadge: 'bg-blue-100/90 text-blue-950 border-blue-200/90',
    bottomBg: 'from-[#f0f7ff] via-[#e8f3ff] to-[#e0f0fe] border-blue-200/80'
  },
  'news-3': {
    border: 'border-emerald-300/90',
    hoverBorder: 'hover:border-emerald-400',
    shadowHover: 'hover:shadow-emerald-500/25',
    topBar: 'bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500',
    badgeGradient: 'from-emerald-500 via-teal-400 to-emerald-300',
    iconColor: 'text-emerald-600',
    lineGradient: 'from-emerald-400 via-slate-800 to-emerald-400',
    dateBadge: 'bg-emerald-100/90 text-emerald-950 border-emerald-200/90',
    bottomBg: 'from-[#f0fdf4] via-[#e6f7ec] to-[#dcf5e7] border-emerald-200/80'
  },
  'news-4': {
    border: 'border-purple-300/90',
    hoverBorder: 'hover:border-purple-400',
    shadowHover: 'hover:shadow-purple-500/25',
    topBar: 'bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-600',
    badgeGradient: 'from-purple-600 via-fuchsia-500 to-pink-400',
    iconColor: 'text-purple-600',
    lineGradient: 'from-purple-500 via-slate-800 to-purple-500',
    dateBadge: 'bg-purple-100/90 text-purple-950 border-purple-200/90',
    bottomBg: 'from-[#faf5ff] via-[#f3e8ff] to-[#ebe0ff] border-purple-200/80'
  },
  'news-5': {
    border: 'border-rose-300/90',
    hoverBorder: 'hover:border-rose-400',
    shadowHover: 'hover:shadow-rose-500/25',
    topBar: 'bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500',
    badgeGradient: 'from-rose-500 via-pink-400 to-amber-300',
    iconColor: 'text-rose-600',
    lineGradient: 'from-rose-400 via-slate-800 to-rose-400',
    dateBadge: 'bg-rose-100/90 text-rose-950 border-rose-200/90',
    bottomBg: 'from-[#fff5f7] via-[#ffeef2] to-[#ffe5ec] border-rose-200/80'
  },
  'news-6': {
    border: 'border-indigo-300/90',
    hoverBorder: 'hover:border-indigo-400',
    shadowHover: 'hover:shadow-indigo-500/25',
    topBar: 'bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-500',
    badgeGradient: 'from-indigo-500 via-sky-400 to-cyan-300',
    iconColor: 'text-indigo-600',
    lineGradient: 'from-indigo-400 via-slate-800 to-indigo-400',
    dateBadge: 'bg-indigo-100/90 text-indigo-950 border-indigo-200/90',
    bottomBg: 'from-[#f5f7ff] via-[#eef2ff] to-[#e5ecff] border-indigo-200/80'
  }
};

export const NewsAndEvents: React.FC<NewsAndEventsProps> = ({
  onSelectNews,
  onSelectEvent,
  onOpenNewsList,
  onOpenEventsList
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev <= 0 ? 4 : prev - 2));
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev >= 4 ? 0 : prev + 2));
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50/50 to-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-blue-500/15 to-purple-500/15 text-blue-800 text-xs font-extrabold uppercase tracking-widest mb-3 border border-blue-200/80 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
            News & Public Notices
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-950 tracking-tight leading-tight">
            Latest Regional News & Updates
          </h2>
          <p className="text-sm font-medium text-slate-600 mt-2 max-w-2xl">
            Stay informed with official announcements, public meeting notices, and regional transportation planning updates.
          </p>
        </div>

        {/* Grid Container: News Left, Events Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: News Cards Slider (7 Columns on LG) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Carousel Container with Arrows */}
            <div className="relative w-full">
              
              {/* Left Arrow Button */}
              <button
                onClick={prevSlide}
                aria-label="Previous News"
                className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white flex items-center justify-center shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-110 active:scale-95 border border-white/30 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={nextSlide}
                aria-label="Next News"
                className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white flex items-center justify-center shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-110 active:scale-95 border border-white/30 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Cards Grid: Slices 2 cards per slide */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6">
                {NEWS_ITEMS.slice(currentSlideIndex, currentSlideIndex + 2).map((news) => {
                  const theme = CARD_THEMES[news.id] || CARD_THEMES['news-1'];
                  return (
                    <div
                      key={news.id}
                      onClick={() => onSelectNews(news)}
                      className={`bg-white border-2 ${theme.border} ${theme.hoverBorder} rounded-3xl p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 transform hover:-translate-y-2.5 shadow-lg hover:shadow-2xl ${theme.shadowHover} relative overflow-hidden group min-h-[365px]`}
                    >
                      {/* Top Accent Gradient Bar */}
                      <div className={`absolute top-0 inset-x-0 h-1.5 ${theme.topBar}`} />

                      {/* Top Content Section */}
                      <div className="flex flex-col items-center text-center pt-2">
                        
                        {/* Circular Dual-Tone Gradient Icon Badge */}
                        <div className={`w-13 h-13 rounded-full bg-gradient-to-tr ${theme.badgeGradient} p-[2.5px] shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mb-4`}>
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <svg className={`w-6 h-6 ${theme.iconColor}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="9" />
                              <circle cx="12" cy="12" r="3" />
                              <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                              <path d="m5.6 5.6 2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
                            </svg>
                          </div>
                        </div>

                        {/* Card Title */}
                        <h3 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight leading-snug mb-3 px-1 min-h-[46px] flex items-center justify-center text-center whitespace-pre-line group-hover:text-blue-900 transition-colors">
                          {news.title}
                        </h3>

                        {/* Horizontal Gradient Separator Line */}
                        <div className={`w-14 h-[2.5px] bg-gradient-to-r ${theme.lineGradient} rounded-full mb-3`} />

                        {/* Date Badge */}
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider mb-3 border shadow-2xs ${theme.dateBadge}`}>
                          <span>{news.date}</span>
                        </div>
                      </div>

                      {/* Bottom Soft Colored Pastel Container */}
                      <div className={`bg-gradient-to-br ${theme.bottomBg} border-t rounded-2xl p-4.5 mt-2 flex-1 flex flex-col justify-between shadow-inner`}>
                        <p className="text-xs text-slate-800 font-semibold leading-relaxed line-clamp-4">
                          {news.summary || 'Click to view details and public notice document.'}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* View All News Button */}
            <div className="mt-8">
              <button
                onClick={onOpenNewsList}
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-600 text-white font-extrabold text-sm px-9 py-3.5 rounded-full shadow-lg shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                View All News →
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Upcoming Events List (5 Columns on LG) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Events Stack */}
            <div className="w-full space-y-4">
              {EVENTS_ITEMS.map((event) => (
                <div
                  key={event.id}
                  onClick={() => {
                    if (event.pdfUrl) {
                      window.open(event.pdfUrl, '_blank');
                    } else {
                      onSelectEvent(event);
                    }
                  }}
                  className="bg-gradient-to-r from-blue-50/90 via-sky-50/70 to-blue-50/90 hover:from-blue-100 hover:to-sky-100 border border-blue-200/90 rounded-2xl p-3.5 flex items-center gap-4 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md group"
                >
                  {/* Left Navy Date Box */}
                  <div className="w-28 h-20 bg-gradient-to-br from-navy-950 via-slate-900 to-blue-950 text-white rounded-xl flex flex-col items-center justify-center shrink-0 p-2 shadow-md group-hover:scale-105 transition-transform border border-amber-400/30">
                    <span className="text-sm font-black tracking-wider text-center leading-tight text-amber-300">
                      {event.dayMonth}
                    </span>
                    <span className="text-xs font-bold text-slate-300 mt-0.5">
                      {event.year}
                    </span>
                  </div>

                  {/* Right Event Info Box */}
                  <div className="flex-1 pr-2">
                    <h4 className="text-sm font-extrabold text-navy-950 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
                      {event.title}
                    </h4>
                    <p className="text-xs font-bold text-blue-600 mt-1.5 flex items-center gap-1 group-hover:underline">
                      <span>Read More</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Events Button */}
            <div className="mt-8">
              <button
                onClick={onOpenEventsList}
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-600 text-white font-extrabold text-sm px-9 py-3.5 rounded-full shadow-lg shadow-blue-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                View All Events →
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
