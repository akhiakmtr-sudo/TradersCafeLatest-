
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import MembersPage from './components/MembersPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'members'>('home');

  // Handle browser back/forward and initial load if hash is present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#about') {
        setCurrentPage('about');
      } else if (hash === '#services') {
        setCurrentPage('services');
      } else if (hash === '#members') {
        setCurrentPage('members');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: 'home' | 'about' | 'services' | 'members') => {
    window.location.hash = page === 'home' ? '' : page;
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header onNavigate={navigateTo} activePage={currentPage} />
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <Hero />
            <VideoSection />
          </>
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'members' && <MembersPage />}
      </main>
      
      {/* UPDATED STYLIZED FOOTER WITH LOGO SITTING DIRECTLY ON BACKGROUND */}
      <footer 
        id="contact-footer"
        className="relative w-full py-16 px-6 md:px-20 overflow-hidden"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dufnwlqeq/image/upload/v1766569731/Untitled_600_x_600_px_6_cnrznx.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Top Divider */}
          <div className="w-full h-[1px] bg-white/10 mb-16" />

          {/* Center Logo Area - Container removed as requested */}
          <div className="flex flex-col items-center mb-20">
            <div className="w-56 sm:w-64 md:w-72 transform hover:scale-105 transition-transform duration-500">
               <img 
                 src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766435137/Untitled_design_3_iwdkwo.png" 
                 alt="Traders Net Cafe Logo" 
                 className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
               />
            </div>
          </div>

          {/* Information Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Location */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">Location</h4>
              <p className="text-white/70 text-[11px] mb-1 uppercase tracking-wider">PRACTICE HUB</p>
              <p className="text-white/70 text-[11px] mb-1">Tel: +971 50 416 1426</p>
              <a href="mailto:traderanetcafe@gmail.com" className="text-white/70 text-[11px] hover:text-amber-500 transition-colors border-b border-transparent hover:border-amber-500/30">traderanetcafe@gmail.com</a>
            </div>

            {/* Business Hours & Web */}
            <div className="flex flex-col items-center">
              <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">Business Hours</h4>
              <p className="text-white/70 text-[11px] mb-6 uppercase tracking-wider">Monday to Friday 9am - 7pm</p>
              <a href="https://www.tradersnetcafe.com" target="_blank" rel="noopener noreferrer" className="text-white text-[13px] font-bold tracking-[0.1em] hover:text-amber-500 transition-all uppercase group">
                WWW.TRADERSNETCAFE.COM
                <div className="h-px w-0 group-hover:w-full bg-amber-500 transition-all duration-300 mx-auto" />
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">Get Social</h4>
              <div className="flex space-x-4">
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[12px] text-white hover:bg-amber-500 hover:border-amber-500 transition-all cursor-pointer shadow-lg">t</div>
                 <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[12px] text-white hover:bg-amber-500 hover:border-amber-500 transition-all cursor-pointer shadow-lg">m</div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-20 pt-8 border-t border-white/5 w-full text-center">
             <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium">
               &copy; {new Date().getFullYear()} Traders Net Cafe. All rights reserved.
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
