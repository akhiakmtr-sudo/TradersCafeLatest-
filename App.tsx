
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import MembersPage from './components/MembersPage';

const LoadingScreen: React.FC = () => (
  <div className="fixed inset-0 z-[500] bg-black flex flex-col items-center justify-center">
    <div className="w-32 h-32 animate-pulse">
      <img 
        src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766435137/Untitled_design_3_iwdkwo.png" 
        alt="Traders Net Cafe" 
        className="w-full h-auto"
      />
    </div>
    <div className="mt-8 w-48 h-1 bg-zinc-900 rounded-full overflow-hidden">
      <div className="h-full bg-amber-600 animate-[shimmer_2s_infinite_linear]" style={{ width: '100%', transform: 'translateX(-100%)' }}>
        <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'members'>('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      setIsLoading(true);
      const hash = window.location.hash;
      if (hash === '#about') setCurrentPage('about');
      else if (hash === '#services') setCurrentPage('services');
      else if (hash === '#members') setCurrentPage('members');
      else setCurrentPage('home');
      
      // Artificial delay to show loading state
      setTimeout(() => setIsLoading(false), 800);
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: 'home' | 'about' | 'services' | 'members') => {
    setIsLoading(true);
    window.location.hash = page === 'home' ? '' : page;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black font-body relative">
      {isLoading && <LoadingScreen />}
      
      <Header onNavigate={navigateTo} activePage={currentPage} />
      
      <main className={`flex-grow transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
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
      
      <footer id="contact-footer" className="relative w-full bg-zinc-950 border-t border-white/10 pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-soft-light" style={{ backgroundImage: `url('https://res.cloudinary.com/dufnwlqeq/image/upload/v1766569731/Untitled_600_x_600_px_6_cnrznx.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
            <div className="md:col-span-4 flex flex-col items-start">
              <div className="w-20 mb-8 opacity-90">
                 <img src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766435137/Untitled_design_3_iwdkwo.png" alt="Traders Net Cafe Logo" className="w-full h-auto" />
              </div>
              <p className="font-body text-white/80 max-w-xs leading-relaxed">
                The premier trading hub for professionals. Practice, observe, and grow in a focused environment designed for serious market participants.
              </p>
            </div>

            <div className="hidden md:block md:col-span-1"></div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12">
              <div>
                <h4 className="font-heading text-white mb-6 text-sm tracking-widest">Contact</h4>
                <div className="space-y-4 font-body">
                  <div className="flex flex-col">
                    <span className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Location</span>
                    <span className="text-white text-sm">Practice Hub - Prism Tower, Business Bay, Dubai, UAE</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Phone</span>
                    <span className="text-white text-sm">+971 504161426</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Email</span>
                    <span className="text-white text-sm">tradersnetcafe@gmail.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-heading text-white mb-6 text-sm tracking-widest">Quick Links</h4>
                <ul className="space-y-3 font-body text-sm">
                  <li><button onClick={() => navigateTo('home')} className="text-white/60 hover:text-amber-500 transition-colors">Home</button></li>
                  <li><button onClick={() => navigateTo('about')} className="text-white/60 hover:text-amber-500 transition-colors">About Us</button></li>
                  <li><button onClick={() => navigateTo('services')} className="text-white/60 hover:text-amber-500 transition-colors">Services</button></li>
                  <li><button onClick={() => navigateTo('members')} className="text-white/60 hover:text-amber-500 transition-colors">Membership</button></li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-white mb-6 text-sm tracking-widest">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/traders_net_cafe?utm_source=qr&igsh=NGQ2aDg4MW5iOHJm" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-600/20 hover:border-amber-600/50 hover:shadow-[0_0_15px_rgba(217,119,6,0.3)] transition-all group" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-amber-500 transition-colors">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>
                  
                  <a href="#" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-600/20 hover:border-amber-600/50 hover:shadow-[0_0_15px_rgba(217,119,6,0.3)] transition-all group" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-amber-500 transition-colors">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>

                  <a href="https://www.facebook.com/profile.php?id=61585271807789" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-600/20 hover:border-amber-600/50 hover:shadow-[0_0_15px_rgba(217,119,6,0.3)] transition-all group" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-amber-500 transition-colors">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
            <p>© 2025 Traders Net Cafe. All rights reserved.</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
