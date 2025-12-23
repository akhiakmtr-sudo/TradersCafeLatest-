
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image - Set to cover and center to ensure it fits nicely on all device sizes */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766483573/Website_-_Traders_Net_Cafe_bt6obb.jpg')`,
        }}
      />
      
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Content Overlay - Fully Responsive */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-7xl mx-auto">
        {/* "Launching" Script Text - Size adjusted to balance with logo width */}
        <h2 className="font-script text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 md:mb-10 z-20 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] select-none leading-tight tracking-wide">
          Launching
        </h2>
        
        {/* Logo Image - Sized to be visually balanced (approx equal visual weight/width) with the text above */}
        <div className="w-56 sm:w-72 md:w-80 lg:w-96 transform hover:scale-[1.02] transition-transform duration-500">
          <img 
            src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766435137/Untitled_design_3_iwdkwo.png" 
            alt="Traders Net Cafe Logo"
            className="w-full h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>

      {/* Aesthetic bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

      {/* Minimalistic Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/70 mb-2 font-light">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white via-white/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
