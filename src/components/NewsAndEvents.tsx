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
    setCurrentSlideIndex((prev) => (prev === 0 ? NEWS_ITEMS.length - 2 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev >= NEWS_ITEMS.length - 2 ? 0 : prev + 1));
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

        {/* Grid Container */}
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

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-6">
                {NEWS_ITEMS.slice(currentSlideIndex, currentSlideIndex + 2).map((news) => (
                  <div
                    key={news.id}
                    onClick={() => onSelectNews(news)}
                    className="bg-[#dbeafe]/80 hover:bg-[#dbeafe] border border-blue-100 rounded-3xl p-4 flex flex-col justify-between cursor-pointer transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 bg-slate-200 shadow-inner">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>

                      {/* Card Title */}
                      <h3 className="text-base font-bold text-navy-900 line-clamp-2 leading-snug mb-2">
                        {news.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-xs text-slate-600 font-medium line-clamp-3 leading-relaxed">
                        {news.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full">
                        {news.category}
                      </span>
                      <span className="text-xs font-bold text-blue-600 hover:underline">
                        Read Story →
                      </span>
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
