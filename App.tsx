
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
      
      {/* PROFESSIONAL COMPACT FOOTER */}
      <footer 
        id="contact-footer"
        className="relative w-full bg-zinc-950 border-t border-white/10 pt-8 pb-8 overflow-hidden"
      >
        {/* Subtle Background Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none mix-blend-soft-light"
          style={{ 
            backgroundImage: `url('https://res.cloudinary.com/dufnwlqeq/image/upload/v1766569731/Untitled_600_x_600_px_6_cnrznx.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-12">
            
            {/* Brand Column */}
            <div className="md:col-span-4 flex flex-col items-start">
              <div className="w-16 mb-6 opacity-90">
                 <img 
                   src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766435137/Untitled_design_3_iwdkwo.png" 
                   alt="Traders Net Cafe Logo" 
                   className="w-full h-auto"
                 />
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed max-w-xs font-medium">
                The premier trading hub for professionals. Practice, observe, and grow in a focused environment designed for serious market participants.
              </p>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:col-span-2"></div>

            {/* Info Grid */}
            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-10">
              
              {/* Contact Info */}
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Contact</h4>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-zinc-600 text-[10px] uppercase tracking-wide mb-1">Location</span>
                    <span className="text-zinc-400 text-xs">PRACTICE HUB</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-zinc-600 text-[10px] uppercase tracking-wide mb-1">Phone</span>
                    <span className="text-zinc-400 text-xs">+971 50 416 1426</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-zinc-600 text-[10px] uppercase tracking-wide mb-1">Email</span>
                    <a href="mailto:traderanetcafe@gmail.com" className="text-amber-500 text-xs hover:text-amber-400 transition-colors">traderanetcafe@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Hours</h4>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-zinc-600 text-[10px] uppercase tracking-wide mb-1">Mon - Fri</span>
                    <span className="text-zinc-400 text-xs">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-zinc-600 text-[10px] uppercase tracking-wide mb-1">Weekends</span>
                    <span className="text-zinc-500 text-xs italic">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social / Links */}
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Connect</h4>
                <div className="flex gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-600 hover:text-white text-zinc-400 flex items-center justify-center text-xs transition-all cursor-pointer border border-white/5 hover:border-amber-600">t</div>
                  <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-600 hover:text-white text-zinc-400 flex items-center justify-center text-xs transition-all cursor-pointer border border-white/5 hover:border-amber-600">m</div>
                </div>
                <a href="https://www.tradersnetcafe.com" target="_blank" rel="noopener noreferrer" className="inline-block border-b border-zinc-700 pb-0.5 text-zinc-500 hover:text-white hover:border-white text-[10px] uppercase tracking-wider transition-all">
                  Visit Website
                </a>
              </div>

            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">
              &copy; {new Date().getFullYear()} Traders Net Cafe. All rights reserved.
            </p>
            <div className="flex gap-8">
              <span className="text-[10px] text-zinc-700 hover:text-zinc-500 cursor-pointer uppercase tracking-wider transition-colors">Privacy Policy</span>
              <span className="text-[10px] text-zinc-700 hover:text-zinc-500 cursor-pointer uppercase tracking-wider transition-colors">Terms of Use</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
