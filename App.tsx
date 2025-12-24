
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
      
      {/* UPDATED STYLIZED FOOTER */}
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

          {/* Center Logo Area */}
          <div className="flex flex-col items-center mb-20">
            <div className="w-48 h-48 bg-[#1e1e1e]/80 backdrop-blur-sm p-4 rounded-sm shadow-2xl border border-white/5 flex flex-col items-center justify-center text-center">
               <img 
                 src="https://res.cloudinary.com/dufnwlqeq/image/upload/v1766570012/Untitled_design_6_itcn6y.png" 
                 alt="Traders Net Cafe Logo" 
                 className="w-full h-auto mb-2"
               />
               <div className="text-[9px] text-amber-500 font-bold tracking-[0.3em] uppercase">
                 Connect | Practice | Master
               </div>
            </div>
          </div>

          {/* Information Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Location */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">Location</h4>
              <p className="text-white/70 text-[11px] mb-1">PRACTICE HUB</p>
              <p className="text-white/70 text-[11px] mb-1">Tel: +971 50 416 1426</p>
              <a href="mailto:traderanetcafe@gmail.com" className="text-white/70 text-[11px] hover:text-amber-500 transition-colors">traderanetcafe@gmail.com</a>
            </div>

            {/* Business Hours & Web */}
            <div className="flex flex-col items-center">
              <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">Business Hours</h4>
              <p className="text-white/70 text-[11px] mb-6">Monday to Friday 9am - 7pm</p>
              <a href="https://www.tradersnetcafe.com" target="_blank" rel="noopener noreferrer" className="text-white text-[13px] font-bold tracking-[0.1em] hover:text-amber-500 transition-colors uppercase">
                WWW.TRADERSNETCAFE.COM
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">Get Social</h4>
              <div className="flex space-x-4">
                 <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-white hover:bg-amber-500/20 transition-colors cursor-pointer">t</div>
                 <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] text-white hover:bg-amber-500/20 transition-colors cursor-pointer">m</div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-20 pt-8 border-t border-white/5 w-full text-center">
             <p className="text-[10px] text-white/30 uppercase tracking-widest">
               &copy; {new Date().getFullYear()} Traders Net Cafe. All rights reserved.
             </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
