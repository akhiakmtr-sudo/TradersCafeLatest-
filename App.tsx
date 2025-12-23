
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import AboutPage from './components/AboutPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  // Handle browser back/forward and initial load if hash is present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: 'home' | 'about') => {
    window.location.hash = page === 'about' ? 'about' : '';
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header onNavigate={navigateTo} activePage={currentPage} />
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <VideoSection />
          </>
        ) : (
          <AboutPage />
        )}
      </main>
      <footer className="bg-zinc-900 py-12 text-center text-zinc-500 text-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6 font-black tracking-tighter text-white text-xl">
            TRADERS<span className="text-blue-500">NET</span>
          </div>
          <p className="opacity-60 transition-opacity hover:opacity-100 cursor-default">
            &copy; {new Date().getFullYear()} Traders Net Cafe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
