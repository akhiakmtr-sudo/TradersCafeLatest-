
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'about' | 'services') => void;
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

  const navLinks = [
    { name: 'Home', action: () => onNavigate('home'), id: 'home' },
    { name: 'About Us', action: () => onNavigate('about'), id: 'about' },
    { name: 'Services', action: () => onNavigate('services'), id: 'services' },
    { name: 'Members', action: () => {}, id: 'members' },
    { name: 'Contact Us', action: () => {}, id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || isOpen ? 'bg-black/95 backdrop-blur-xl py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-end items-center">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => {
                link.action();
                setIsOpen(false);
              }}
              className={`text-[11px] font-bold transition-all duration-300 uppercase tracking-[0.2em] relative group ${
                activePage === link.id ? 'text-blue-500' : 'text-white hover:text-blue-400'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${activePage === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </button>
          ))}
        </nav>

        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none p-2 z-50 ml-auto"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-center relative">
            <span className={`w-full h-0.5 bg-white transition-all duration-300 transform origin-left ${isOpen ? 'rotate-45 translate-x-1' : ''}`} />
            <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-full h-0.5 bg-white transition-all duration-300 transform origin-left ${isOpen ? '-rotate-45 translate-x-1' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-40 transition-all duration-500 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'
        } flex flex-col items-center justify-center space-y-10`}
      >
        {navLinks.map((link, idx) => (
          <button 
            key={link.name} 
            onClick={() => {
              link.action();
              setIsOpen(false);
            }}
            className={`text-2xl font-bold transition-all duration-300 uppercase tracking-widest transform ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } ${activePage === link.id ? 'text-blue-500' : 'text-white hover:text-blue-500'}`}
            style={{ transitionDelay: `${idx * 50}ms` }}
          >
            {link.name}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
