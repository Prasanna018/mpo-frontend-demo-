import React, { useState } from 'react';
import { Header } from './Header';
import { MessageSquare } from 'lucide-react';
import type { NewsItem } from '../data/mockData';

interface BlogViewProps {
  onNavigateHome: () => void;
  onSelectAboutSubTab: (subTab: string) => void;
  onOpenActionModal: (type: string) => void;
  onSelectNews: (news: NewsItem) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({
  onNavigateHome,
  onSelectAboutSubTab,
  onOpenActionModal,
  onSelectNews
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [joined, setJoined] = useState(false);

  const blogPosts: Array<NewsItem & { commentsCount: string }> = [
    {
      id: 'blog-1',
      title: 'New Transportation Planning Initiative Announced',
      date: 'May 13, 2026',
      category: 'Infrastructure',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85',
      summary: 'Regional transportation improvements introduced supporting sustainable mobility and future infrastructure development plans.',
      content: 'The Tri-Cities Area Metropolitan Planning Organization (TCAMPO) is announcing a comprehensive multi-corridor transportation improvement plan. The initiative focuses on enhancing regional highway capacity, upgrading transit signal priority, and expanding multi-modal connections throughout Petersburg, Colonial Heights, Hopewell, and surrounding counties.',
      commentsCount: 'No Comments'
    },
    {
      id: 'blog-2',
      title: 'Community Development Funding Program Updates',
      date: 'May 13, 2026',
      category: 'Grants & Funding',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85',
      summary: 'New funding opportunities announced supporting infrastructure, sustainability, and regional community development initiatives.',
      content: 'TCAMPO has released updated grant allocation guidelines for regional transportation sub-grants. Eligible municipalities can now apply for federal matching funds supporting active transportation trails, ADA compliance upgrades, and transit hub modernization.',
      commentsCount: 'No Comments'
    },
    {
      id: 'blog-3',
      title: 'Upcoming Public Meeting For Regional Growth',
      date: 'May 13, 2026',
      category: 'Public Notice',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85',
      summary: 'Public meeting scheduled discussing transportation strategies, sustainability goals, and regional development priorities.',
      content: 'Citizens, business owners, and civic leaders are invited to attend the TCAMPO Public Visioning Workshop. The session will showcase long-term traffic modeling projections and solicit public input for the 2050 Metropolitan Transportation Plan.',
      commentsCount: 'No Comments'
    }
  ];

  const handleJoinCommunity = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setJoined(true);
    setTimeout(() => {
      setJoined(false);
      setEmailInput('');
    }, 3500);
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      
      {/* Blog Page Hero Banner matching Screenshot 1 */}
      <section className="relative h-[440px] sm:h-[500px] w-full flex flex-col justify-between overflow-hidden bg-slate-950">
        
        {/* Background Image: Construction engineers in hard hats outdoors */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=90"
            alt="Insights, Updates, and Regional Planning News - Construction site workers"
            className="w-full h-full object-cover object-center scale-105"
          />
          
          {/* Top Dark Overlay */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/85 via-black/45 to-transparent pointer-events-none" />

          {/* Warm Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-amber-950/20 to-transparent pointer-events-none" />

          {/* Bottom Dark Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/35 to-transparent pointer-events-none" />
        </div>

        {/* Top Navbar */}
        <Header
          onOpenActionModal={onOpenActionModal}
          onNavigateHome={onNavigateHome}
          onSelectAboutSubTab={onSelectAboutSubTab}
          activeNav="Blog"
        />

        {/* Hero Title & Pill Badge matching Screenshot 1 */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full space-y-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/20 text-white shadow-xl">
            <span className="text-sm font-bold tracking-wide">Blog</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl drop-shadow-xl">
            Insights, Updates, and Regional Planning News
          </h1>
        </div>
      </section>

      {/* Main Blog Grid Section matching Screenshot 2 */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#dbeafe]/80 hover:bg-[#dbeafe] border border-blue-100 rounded-3xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div>
                {/* Image Thumbnail matching Screenshot 2 */}
                <div className="w-full h-52 rounded-2xl overflow-hidden mb-4 bg-slate-200 shadow-inner">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Date & Comments Meta Row matching Screenshot 2 */}
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-600 mb-2">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1 text-blue-600 font-bold">
                    <MessageSquare className="w-4 h-4 fill-blue-500/20 stroke-blue-600" />
                    <span>{post.commentsCount}</span>
                  </div>
                </div>

                {/* Divider Line matching Screenshot 2 */}
                <div className="border-b border-slate-300 my-3" />

                {/* Post Title */}
                <h3 className="text-xl font-extrabold text-navy-950 leading-snug">
                  {post.title}
                </h3>

                {/* Post Excerpt */}
                <p className="text-sm font-medium text-slate-700 mt-2 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              {/* Read More Button matching Screenshot 2 */}
              <button
                onClick={() => onSelectNews(post)}
                className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-extrabold text-base py-3 rounded-full shadow-md transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner matching Screenshot 3 */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden min-h-[420px] flex items-center p-8 sm:p-12 shadow-2xl bg-slate-950">
          
          {/* Background Image: Planning executives around conference table */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=90"
              alt="Work Together for Better Communities"
              className="w-full h-full object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          </div>

          {/* Left Dark Floating Glass Card matching Screenshot 3 */}
          <div className="relative z-10 max-w-xl bg-slate-950/85 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 text-white space-y-6 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Work Together for Better Communities
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
              Contact us to learn more about regional programs, funding opportunities, and planning initiatives.
            </p>

            {/* Newsletter Input & Join Button Form */}
            {joined ? (
              <div className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 font-bold px-5 py-3 rounded-full text-sm">
                ✓ Thank you for subscribing to TCAMPO regional news updates!
              </div>
            ) : (
              <form onSubmit={handleJoinCommunity} className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  required
                  placeholder="E-mail"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder:text-slate-400 text-sm font-semibold focus:outline-none focus:border-blue-400 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 bg-blue-500 hover:bg-blue-600 text-white font-extrabold text-sm sm:text-base px-7 py-3 rounded-full shadow-lg transition-all duration-200 cursor-pointer"
                >
                  Join Community
                </button>
              </form>
            )}

            <p className="text-xs font-semibold text-slate-400 tracking-wide">
              Stay Updated With Regional News
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
