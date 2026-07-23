import { useState } from 'react';
import { Hero } from './components/Hero';
import { QuickActionBar } from './components/QuickActionBar';
import { NewsAndEvents } from './components/NewsAndEvents';
import { AboutView } from './components/AboutView';
import { ProgramsView } from './components/ProgramsView';
import { PlansView } from './components/PlansView';
import { DataView } from './components/DataView';
import { FundingView } from './components/FundingView';
import { ContactView } from './components/ContactView';
import { BlogView } from './components/BlogView';
import { EventsView } from './components/EventsView';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import type { NewsItem, EventItem } from './data/mockData';

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'programs' | 'plans' | 'data' | 'funding' | 'contact' | 'blog' | 'events'>('home');
  const [activeAboutSubTab, setActiveAboutSubTab] = useState<string>('MPO Overview');

  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [activeActionModal, setActiveActionModal] = useState<string | null>(null);

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigatePrograms = () => {
    setCurrentView('programs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigatePlans = () => {
    setCurrentView('plans');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateData = () => {
    setCurrentView('data');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateFunding = () => {
    setCurrentView('funding');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateContact = () => {
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateBlog = () => {
    setCurrentView('blog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateEvents = () => {
    setCurrentView('events');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectAboutSubTab = (subTab: string) => {
    if (subTab === 'about' || subTab === 'About TCAMPO' || !subTab) {
      setActiveAboutSubTab('MPO Overview');
    } else {
      setActiveAboutSubTab(subTab);
    }
    setCurrentView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenActionModal = (rawActionId: string) => {
    const actionId = rawActionId.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (actionId.includes('about')) {
      handleSelectAboutSubTab('MPO Overview');
      return;
    }
    if (actionId.includes('program')) {
      handleNavigatePrograms();
      return;
    }
    if (actionId.includes('plan')) {
      handleNavigatePlans();
      return;
    }
    if (actionId.includes('data')) {
      handleNavigateData();
      return;
    }
    if (actionId.includes('fund')) {
      handleNavigateFunding();
      return;
    }
    if (actionId.includes('contact') || actionId.includes('touch')) {
      handleNavigateContact();
      return;
    }
    if (actionId.includes('blog') || actionId.includes('news')) {
      handleNavigateBlog();
      return;
    }
    if (actionId.includes('event')) {
      handleNavigateEvents();
      return;
    }
    if (actionId.includes('agenda')) {
      handleSelectAboutSubTab('Agendas');
      return;
    }
    if (actionId.includes('committee')) {
      handleSelectAboutSubTab('Policy Committee (PC)');
      return;
    }
    setSelectedNews(null);
    setSelectedEvent(null);
    setActiveActionModal(rawActionId);
  };

  const handleSelectNews = (news: NewsItem) => {
    setActiveActionModal(null);
    setSelectedEvent(null);
    setSelectedNews(news);
  };

  const handleSelectEvent = (event: EventItem) => {
    setActiveActionModal(null);
    setSelectedNews(null);
    setSelectedEvent(event);
  };

  const handleCloseModals = () => {
    setSelectedNews(null);
    setSelectedEvent(null);
    setActiveActionModal(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-600 selection:text-white">
      
      {currentView === 'home' ? (
        <>
          {/* Home View Hero Section with Integrated Header */}
          <Hero
            onOpenActionModal={handleOpenActionModal}
            onNavigateHome={handleNavigateHome}
            onSelectAboutSubTab={handleSelectAboutSubTab}
          />

          {/* Quick Action Navigation Bar (Navy Strip with 5 Icons) */}
          <QuickActionBar onOpenActionModal={handleOpenActionModal} />

          {/* Main Content: News & Events Section */}
          <main className="flex-1">
            <NewsAndEvents
              onSelectNews={handleSelectNews}
              onSelectEvent={handleSelectEvent}
              onOpenNewsList={() => handleNavigateBlog()}
              onOpenEventsList={() => handleNavigateEvents()}
            />
          </main>
        </>
      ) : currentView === 'about' ? (
        /* Dedicated About View */
        <main className="flex-1">
          <AboutView
            activeSubTab={activeAboutSubTab}
            onSelectSubTab={handleSelectAboutSubTab}
            onNavigateHome={handleNavigateHome}
            onOpenActionModal={handleOpenActionModal}
          />
        </main>
      ) : currentView === 'programs' ? (
        /* Dedicated Programs & Studies View */
        <main className="flex-1">
          <ProgramsView
            onNavigateHome={handleNavigateHome}
            onSelectAboutSubTab={handleSelectAboutSubTab}
            onOpenActionModal={handleOpenActionModal}
          />
        </main>
      ) : currentView === 'plans' ? (
        /* Dedicated Regional Plans View */
        <main className="flex-1">
          <PlansView
            onNavigateHome={handleNavigateHome}
            onSelectAboutSubTab={handleSelectAboutSubTab}
            onOpenActionModal={handleOpenActionModal}
          />
        </main>
      ) : currentView === 'data' ? (
        /* Dedicated Data & Research View */
        <main className="flex-1">
          <DataView
            onNavigateHome={handleNavigateHome}
            onSelectAboutSubTab={handleSelectAboutSubTab}
            onOpenActionModal={handleOpenActionModal}
          />
        </main>
      ) : currentView === 'funding' ? (
        /* Dedicated Funding Support View */
        <main className="flex-1">
          <FundingView
            onNavigateHome={handleNavigateHome}
            onSelectAboutSubTab={handleSelectAboutSubTab}
            onOpenActionModal={handleOpenActionModal}
          />
        </main>
      ) : currentView === 'contact' ? (
        /* Dedicated Contact View */
        <main className="flex-1">
          <ContactView
            onNavigateHome={handleNavigateHome}
            onSelectAboutSubTab={handleSelectAboutSubTab}
            onOpenActionModal={handleOpenActionModal}
          />
        </main>
      ) : currentView === 'blog' ? (
        /* Dedicated Blog View */
        <main className="flex-1">
          <BlogView
            onNavigateHome={handleNavigateHome}
            onSelectAboutSubTab={handleSelectAboutSubTab}
            onOpenActionModal={handleOpenActionModal}
            onSelectNews={handleSelectNews}
          />
        </main>
      ) : (
        /* Dedicated Events View matching User Screenshots */
        <main className="flex-1">
          <EventsView
            onNavigateHome={handleNavigateHome}
            onSelectAboutSubTab={handleSelectAboutSubTab}
            onOpenActionModal={handleOpenActionModal}
            onSelectEvent={handleSelectEvent}
          />
        </main>
      )}

      {/* Footer Section (5 Columns Dark Navy) */}
      <Footer onOpenActionModal={handleOpenActionModal} />

      {/* Interactive Modal Overlays */}
      <Modals
        selectedNews={selectedNews}
        selectedEvent={selectedEvent}
        activeActionModal={activeActionModal}
        onClose={handleCloseModals}
      />
    </div>
  );
}

export default App;
