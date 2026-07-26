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

export const NewsAndEvents: React.FC<NewsAndEventsProps> = ({
  onSelectNews,
  onSelectEvent,
  onOpenNewsList,
  onOpenEventsList
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? 2 : 0));
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? 2 : 0));
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="inline-block px-5 py-1.5 rounded-full bg-sky-100 text-blue-600 text-sm font-semibold mb-3 border border-sky-200">
            News & Updates
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight">
            Latest Regional News & Updates
          </h2>
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
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={nextSlide}
                aria-label="Next News"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Cards Grid: Slices 2 cards per slide (Cards 1&2, then Cards 3&4) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-6">
                {NEWS_ITEMS.slice(currentSlideIndex, currentSlideIndex + 2).map((news) => (
                  <div
                    key={news.id}
                    onClick={() => onSelectNews(news)}
                    className="bg-white border-2 border-amber-300/90 rounded-3xl p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl relative overflow-hidden group min-h-[350px]"
                  >
                    {/* Top Content Section */}
                    <div className="flex flex-col items-center text-center">
                      
                      {/* Circular Gold Badge Icon */}
                      <div className="w-12 h-12 rounded-full bg-white border-2 border-amber-300 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                          <circle cx="12" cy="12" r="9" />
                          <circle cx="12" cy="12" r="3" />
                          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                          <path d="m5.6 5.6 2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
                        </svg>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight leading-snug mb-3 px-1 min-h-[44px] flex items-center justify-center">
                        {news.title}
                      </h3>

                      {/* Horizontal Separator Line */}
                      <div className="w-12 h-[2px] bg-slate-700 mb-3" />

                      {/* Date */}
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">
                        {news.date}
                      </span>
                    </div>

                    {/* Bottom Soft Yellow/Cream Container */}
                    <div className="bg-[#fffdf0] border-t border-amber-200/60 rounded-2xl p-4 mt-2 flex-1 flex flex-col justify-between">
                      <p className="text-xs text-slate-700 font-medium leading-relaxed line-clamp-4">
                        {news.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* View All News Button */}
            <div className="mt-8">
              <button
                onClick={onOpenNewsList}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5"
              >
                View All News
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
                  onClick={() => onSelectEvent(event)}
                  className="bg-[#dbeafe]/80 hover:bg-[#dbeafe] border border-blue-100 rounded-2xl p-2.5 flex items-center gap-4 cursor-pointer transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm"
                >
                  {/* Left Navy Square Date Box */}
                  <div className="w-28 h-20 bg-navy-900 text-white rounded-xl flex flex-col items-center justify-center shrink-0 p-2 shadow-md">
                    <span className="text-sm font-black tracking-wider text-center leading-tight">
                      {event.dayMonth}
                    </span>
                    <span className="text-xs font-semibold text-slate-300 mt-0.5">
                      {event.year}
                    </span>
                  </div>

                  {/* Right Event Info Box */}
                  <div className="flex-1 pr-2">
                    <h4 className="text-sm font-bold text-navy-900 leading-snug">
                      {event.fullDate}
                    </h4>
                    <p className="text-xs font-semibold text-blue-600 mt-1 hover:underline">
                      Read More
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Events Button */}
            <div className="mt-8">
              <button
                onClick={onOpenEventsList}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5"
              >
                View All Events
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
