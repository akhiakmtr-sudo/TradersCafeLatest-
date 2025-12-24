
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'about' | 'services' | 'members') => void;
  activePage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, activePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const scrollToFooter = () => {
    const footer = document.getElementById('contact-footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', action: () => onNavigate('home'), id: 'home' },
    { name: 'About Us', action: () => onNavigate('about'), id: 'about' },
    { name: 'Services', action: () => onNavigate('services'), id: 'services' },
    { name: 'Members', action: () => onNavigate('members'), id: 'members' },
    { name: 'Contact Us', action: scrollToFooter, id: 'contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled || isOpen ? 'bg-black/95 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-end items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => {
                  link.action();
                  setIsOpen(false);
                }}
                className={`text-[11px] font-bold transition-all duration-300 uppercase tracking-[0.25em] relative group ${
                  activePage === link.id ? 'text-blue-500' : 'text-white hover:text-blue-400'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${activePage === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </button>
            ))}
          </nav>

          {/* Hamburger Button (Visible only on Mobile) */}
          <button 
            className="md:hidden text-white focus:outline-none w-10 h-10 flex items-center justify-center z-[110]"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <div className="flex flex-col space-y-1.5 w-6">
              <span className="w-full h-0.5 bg-white rounded-full"></span>
              <span className="w-full h-0.5 bg-white rounded-full"></span>
              <span className="w-full h-0.5 bg-white rounded-full"></span>
            </div>
          </button>
        </div>
      </header>

      {/* BACKDROP */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[190] transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* MOBILE DRAWER MENU (Reference Style) */}
      <div 
        className={`fixed inset-y-0 right-0 w-full max-w-[320px] bg-zinc-950 z-[200] transform transition-transform duration-300 ease-out shadow-2xl flex flex-col md:hidden border-l border-white/10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header: Title + Close Button */}
        <div className="flex items-center justify-between px-6 h-[70px] border-b border-white/10 bg-zinc-900/50 backdrop-blur-sm">
          <span className="text-sm font-bold text-white uppercase tracking-wider">Traders Net Cafe</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13L13 1M1 1L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto bg-zinc-950">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  link.action();
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-6 py-5 border-b border-white/5 text-left transition-colors active:bg-white/5 ${
                  activePage === link.id ? 'bg-white/5' : ''
                }`}
              >
                <span className={`text-[15px] font-medium tracking-wide ${activePage === link.id ? 'text-amber-500' : 'text-zinc-200'}`}>
                  {link.name}
                </span>
                {/* Chevron Icon */}
                <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Register Button Area (Pinned to Bottom) */}
        <div className="p-6 border-t border-white/10 bg-zinc-900/50 backdrop-blur-sm safe-area-bottom">
          <button 
            onClick={() => {
              onNavigate('members');
              setIsOpen(false);
            }}
            className="w-full py-4 bg-gradient-to-r from-amber-700 to-amber-600 text-white font-bold text-sm uppercase tracking-widest rounded-lg hover:from-amber-600 hover:to-amber-500 transition-all shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Register Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
