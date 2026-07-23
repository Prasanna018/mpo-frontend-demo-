import React, { useState } from 'react';
import { Header } from './Header';
import { Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';

interface ContactViewProps {
  onNavigateHome: () => void;
  onSelectAboutSubTab: (subTab: string) => void;
  onOpenActionModal: (type: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  onNavigateHome,
  onSelectAboutSubTab,
  onOpenActionModal
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    organization: '',
    role: 'Resident / Citizen',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        organization: '',
        role: 'Resident / Citizen',
        message: ''
      });
    }, 4000);
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      
      {/* Contact Page Hero Banner matching Screenshot 1 */}
      <section className="relative h-[440px] sm:h-[500px] w-full flex flex-col justify-between overflow-hidden bg-slate-950">
        
        {/* Background Image: Planning contract signing / consulting */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=2400&q=90"
            alt="Contact TCAMPO"
            className="w-full h-full object-cover object-center scale-105"
          />
          
          {/* Top Dark Overlay */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none" />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-blue-950/20 to-transparent pointer-events-none" />

          {/* Bottom Dark Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />
        </div>

        {/* Top Navbar with Contact active */}
        <Header
          onOpenActionModal={onOpenActionModal}
          onNavigateHome={onNavigateHome}
          onSelectAboutSubTab={onSelectAboutSubTab}
          activeNav="Contact"
        />

        {/* Hero Title & Pill Badge matching Screenshot 1 */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/20 text-white shadow-xl">
            <span className="text-sm font-bold tracking-wide">Get In Touch</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl drop-shadow-xl">
            Contact TCAMPO
          </h1>
        </div>
      </section>

      {/* Main Form & Information Section matching Screenshot 2 */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Dark Urban Tram Image Card matching Screenshot 2 */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[480px] lg:min-h-full flex flex-col justify-between p-8 sm:p-10 bg-slate-950 shadow-xl">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&w=1200&q=85"
                alt="Transit & city street scene"
                className="w-full h-full object-cover object-center scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-black/40" />
            </div>

            {/* Top Pill Badge */}
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-md">
                Send a Message
              </div>
            </div>

            {/* Content Text */}
            <div className="relative z-10 space-y-4 pt-12">
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Have a Question or Comment?
              </h2>
              <p className="text-slate-200 text-sm sm:text-base font-medium leading-relaxed">
                Whether you are a resident, community organization, government agency, or media representative we welcome your questions, comments, and feedback. Fill out the form and our team will respond as soon as possible.
              </p>
            </div>
          </div>

          {/* Right Column: Light Sky-Blue Form & Contact Details matching Screenshot 2 */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4 animate-in fade-in duration-300 my-auto">
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-emerald-950">Message Sent Successfully!</h3>
                <p className="text-slate-700 font-semibold">
                  Thank you for reaching out to TCAMPO. Our planning team will review your submission and respond promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Row 1: Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#dbeafe]/70 border border-blue-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3.5 text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-500 transition-colors shadow-sm outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#dbeafe]/70 border border-blue-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3.5 text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-500 transition-colors shadow-sm outline-none"
                  />
                </div>

                {/* Row 2: Email Address */}
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#dbeafe]/70 border border-blue-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3.5 text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-500 transition-colors shadow-sm outline-none"
                />

                {/* Row 3: Organization Name & Select Role */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Organization Name"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-[#dbeafe]/70 border border-blue-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3.5 text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-500 transition-colors shadow-sm outline-none"
                  />
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#dbeafe]/70 border border-blue-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3.5 text-sm sm:text-base font-semibold text-slate-900 transition-colors shadow-sm outline-none"
                  >
                    <option value="Select your role">Select your role</option>
                    <option value="Resident / Citizen">Resident / Citizen</option>
                    <option value="Local Government Delegate">Local Government Delegate</option>
                    <option value="Agency Partner (VDOT / DRPT)">Agency Partner (VDOT / DRPT)</option>
                    <option value="Media Representative">Media Representative</option>
                    <option value="Business Owner">Business Owner</option>
                  </select>
                </div>

                {/* Row 4: Your Message */}
                <textarea
                  required
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#dbeafe]/70 border border-blue-200 focus:border-blue-500 focus:bg-white rounded-xl px-4 py-3.5 text-sm sm:text-base font-semibold text-slate-900 placeholder:text-slate-500 transition-colors shadow-sm outline-none resize-none"
                />

                {/* Submit Button matching Screenshot 2 */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-extrabold text-lg py-3.5 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Submit
                </button>
              </form>
            )}

            {/* Horizontal Line with Diamond Icon matching Screenshot 2 */}
            <div className="relative my-6 border-t border-slate-300">
              <div className="absolute left-1/2 -translate-x-1/2 -top-2.5 bg-white px-3 text-slate-700">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.83L18.17 12 12 18.17 5.83 12 12 5.83z"/>
                </svg>
              </div>
            </div>

            {/* Contact Details List matching Screenshot 2 */}
            <div className="space-y-3 text-sm sm:text-base font-semibold text-slate-800">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-900 shrink-0" />
                <a href="mailto:info@craterpdc.org" className="hover:text-blue-600 transition-colors">
                  info@craterpdc.org
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-slate-900 shrink-0" />
                <span>Crater PDC/TCAMPO, 1964 Wakefield Street, Petersburg, VA 23805</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-slate-900 shrink-0" />
                <span>Monday – Friday: 8:00 AM – 5:00 PM</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Google Map Location Card matching Screenshot 3 */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-navy-950 tracking-tight">
            Our Location
          </h2>
          <div className="w-full h-[450px] rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
            <iframe
              title="Crater Planning District Commission Location Map"
              src="https://maps.google.com/maps?q=1964%20Wakefield%20St,%20Petersburg,%20VA%2023805&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

    </div>
  );
};
