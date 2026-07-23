import React, { useState } from 'react';
import { PROGRAMS_LIST } from '../data/mockData';
import type { NewsItem, EventItem } from '../data/mockData';
import { X, Calendar, MapPin, Clock, CheckCircle2, Send } from 'lucide-react';

interface ModalsProps {
  selectedNews: NewsItem | null;
  selectedEvent: EventItem | null;
  activeActionModal: string | null;
  onClose: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  selectedNews,
  selectedEvent,
  activeActionModal,
  onClose
}) => {
  const [meetingSubmitted, setMeetingSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', date: '', topic: '' });

  if (!selectedNews && !selectedEvent && !activeActionModal) {
    return null;
  }

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMeetingSubmitted(true);
    setTimeout(() => {
      setMeetingSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content: News Item */}
        {selectedNews && (
          <div className="overflow-y-auto p-6 sm:p-8">
            <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 bg-slate-100">
              <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                {selectedNews.category}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Published: {selectedNews.date}
              </span>
            </div>
            <h3 className="text-2xl font-extrabold text-navy-900 mb-4 leading-tight">
              {selectedNews.title}
            </h3>
            <p className="text-sm font-semibold text-slate-700 mb-4 leading-relaxed bg-blue-50/60 p-4 rounded-xl border border-blue-100">
              {selectedNews.summary}
            </p>
            <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
              <p>{selectedNews.content}</p>
              <p>For more information or to submit public comment regarding this item, please contact the TCAMPO Public Involvement Office at publicinvolvement@tcampo.org.</p>
            </div>
          </div>
        )}

        {/* Modal Content: Event Item */}
        {selectedEvent && (
          <div className="overflow-y-auto p-6 sm:p-8">
            <div className="bg-navy-900 text-white rounded-2xl p-6 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">Upcoming Event</div>
              <h3 className="text-2xl font-black text-white leading-snug mb-3">
                {selectedEvent.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-2 border-t border-navy-800">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span>{selectedEvent.fullDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="flex items-center gap-2 sm:col-span-2">
                  <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{selectedEvent.location}</span>
                </div>
              </div>
            </div>

            <h4 className="text-base font-bold text-navy-900 mb-2">Event Agenda & Overview</h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedEvent.description}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  alert('Event added to calendar!');
                  onClose();
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-md"
              >
                Add to Calendar
              </button>
              <button
                onClick={onClose}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm px-6 py-2.5 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Modal Content: Generic Action Modals */}
        {activeActionModal && !selectedNews && !selectedEvent && (
          <div className="overflow-y-auto p-6 sm:p-8">
            {activeActionModal === 'programs' && (
              <div>
                <h3 className="text-2xl font-extrabold text-navy-900 mb-2">Regional Programs & Initiatives</h3>
                <p className="text-xs text-slate-500 mb-6">Explore TCAMPO active transportation and infrastructure programs.</p>
                <div className="space-y-4">
                  {PROGRAMS_LIST.map((prog) => (
                    <div key={prog.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-0.5 rounded-full">{prog.category}</span>
                        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">{prog.status}</span>
                      </div>
                      <h4 className="text-base font-bold text-navy-900">{prog.title}</h4>
                      <p className="text-xs text-slate-600 mt-1">{prog.description}</p>
                      <div className="mt-3 text-xs font-semibold text-slate-500">Allocation: {prog.funding}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeActionModal === 'schedule' && (
              <div>
                <h3 className="text-2xl font-extrabold text-navy-900 mb-2">Schedule a Consultation</h3>
                <p className="text-xs text-slate-500 mb-6">Connect with a TCAMPO regional planner or technical staff member.</p>
                
                {meetingSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center space-y-3">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />
                    <h4 className="text-xl font-bold text-navy-900">Meeting Request Sent!</h4>
                    <p className="text-xs text-slate-600">Our administrative team will confirm your time via email shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleScheduleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="jane.doe@organization.org"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Topic</label>
                        <select
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                          <option value="">Select Topic</option>
                          <option value="grant">Grant Funding</option>
                          <option value="tip">TIP Modifications</option>
                          <option value="public">Public Comment</option>
                          <option value="data">GIS & Data Request</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 mt-4"
                    >
                      <Send className="w-4 h-4" />
                      Submit Consultation Request
                    </button>
                  </form>
                )}
              </div>
            )}

            {activeActionModal !== 'programs' && activeActionModal !== 'schedule' && (
              <div>
                <h3 className="text-2xl font-extrabold text-navy-900 mb-3 capitalize">
                  {activeActionModal.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-sm text-slate-700 space-y-3">
                  <p>Welcome to the <strong>{activeActionModal.toUpperCase()}</strong> portal of the Tri-Cities Area Metropolitan Planning Organization.</p>
                  <p>Our digital repository provides verified public documents, policy committee resolutions, and regional spatial datasets for member jurisdictions.</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <button onClick={onClose} className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-2.5 rounded-full">
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
