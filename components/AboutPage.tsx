
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-black">
      {/* 1. About Us Section */}
      <section 
        className="relative w-full min-h-[850px] flex flex-col justify-start items-start overflow-hidden pt-40 pb-24 px-6 md:px-20 lg:px-32"
        style={{ 
          background: 'linear-gradient(to right, #111111 0%, #111111 35%, #856a1e 100%)',
        }}
      >
        <div className="relative z-10 w-full max-w-7xl">
          <h1 className="text-5xl md:text-7xl text-white mb-16 tracking-[0.1em] font-light uppercase leading-tight select-none">
            ABOUT US
          </h1>
          
          <div className="max-w-4xl space-y-8 text-white text-left mb-14">
            <p className="text-lg md:text-xl leading-[1.7] font-medium tracking-wide drop-shadow-sm">
              Welcome to Trader’s Net Cafe — Ever wondered what it feels like to sit beside real traders and experience the markets as they move? Step into a focused space where you can practice alongside experienced traders and observe live market strategies as they unfold.
            </p>
            <p className="text-lg md:text-xl leading-[1.7] font-medium tracking-wide drop-shadow-sm">
              Built for active market participants, our café blends professional tools, live market access, and a focused trading atmosphere. Trade independently, exchange insights, and sharpen your edge alongside experienced traders across U.S. and Indian markets.
            </p>
            <p className="text-lg md:text-xl leading-[1.7] font-medium tracking-wide drop-shadow-sm">
              At Traders Net Café, it’s not just about trading—it’s about trading with clarity, confidence, and community.
            </p>
          </div>

          <div className="w-full max-w-[850px] h-[200px] overflow-hidden rounded-sm shadow-2xl border border-white/10 bg-zinc-900/50">
            <img 
              src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766508252/Untitled_600_x_600_px_3_bx6vdf.png" 
              alt="Trading community at cafe" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision Section - Height 1350px */}
      <section 
        className="relative w-full h-[1350px] flex flex-col items-center justify-start pt-32 md:pt-48 overflow-hidden border-y border-white/5"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766490485/Untitled_design_5_mvfst3.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlays removed */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 w-full">
          {/* Vision */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl text-white mb-6 md:mb-10 tracking-wider font-bold uppercase drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
              OUR VISION
            </h2>
            <p className="text-lg md:text-2xl text-white leading-relaxed max-w-lg font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
              To build a creative trading community café where practice, collaboration, and innovation meet — shaping the next generation of smart traders and financial thinkers.
            </p>
          </div>
          
          {/* Mission */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl text-white mb-6 md:mb-10 tracking-wider font-bold uppercase drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
              OUR MISSION
            </h2>
            <p className="text-lg md:text-2xl text-white leading-relaxed max-w-lg font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
              To make trading, investing, and learning accessible to everyone — in an inspiring, collaborative, and coffee-fueled environment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our Mentors Section */}
      <section 
        className="relative w-full h-[760px] flex items-center justify-center overflow-hidden border-b border-white/5"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766490941/Untitled_Website_1_arxpdc.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay removed */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-start pt-16 md:pt-20">
            <h2 className="text-4xl md:text-6xl text-white font-bold tracking-wider uppercase drop-shadow-[0_4px_10px_rgba(0,0,0,1)] mb-8">
              OUR MENTORS
            </h2>
            <div className="relative w-full max-w-[500px] aspect-square mx-auto md:mx-0 overflow-hidden rounded-xl border border-white/10">
               <img 
                 src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766506589/Untitled_600_x_600_px_1_zawoyn.png" 
                 alt="Our Mentors" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center px-4 md:pl-12">
             <div className="max-w-xl text-center">
                <p className="text-lg md:text-xl text-white leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                  Guided by experience, driven by clarity. Our mentors bring years of hands-on market exposure across Indian and U.S. markets. They don’t just share strategies—they share perspective, discipline, and real-world insights. What sets them apart is live practice with mentors—learning by doing, side by side. This practical, trader-first approach helps you build confidence, discipline, and clarity while navigating real market conditions.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Our Team Section */}
      <section 
        className="relative w-full h-[760px] flex items-center justify-center overflow-hidden"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766491078/Untitled_Website_2_oekbqb.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay removed */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full grid grid-cols-1 md:grid-cols-2">
           <div className="flex flex-col justify-start pt-16 md:pt-20">
            <h2 className="text-4xl md:text-6xl text-white font-bold tracking-wider uppercase drop-shadow-[0_4px_10px_rgba(0,0,0,1)] mb-8">
              TEAM
            </h2>
            <div className="relative w-full max-w-[500px] aspect-square mx-auto md:mx-0 overflow-hidden rounded-xl border border-white/10">
               <img 
                 src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766506585/Untitled_600_x_600_px_m4t97s.png" 
                 alt="Our Team" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center space-y-16 px-4 md:pl-12">
             <div className="max-w-lg">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-wider drop-shadow-md">IT & Social Media</h3>
                <p className="text-lg md:text-xl text-white leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                  Platform management, online events, live trading sessions, and digital promotions They ensure the café stays connected, smart, and tech-driven.
                </p>
             </div>
             <div className="max-w-lg">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-wider drop-shadow-md">Finance</h3>
                <p className="text-lg md:text-xl text-white leading-relaxed font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                  We Ensure smooth operations for both our internal activities and investor partnerships. Focused on accuracy, clarity, and sustainability in every transaction.
                </p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
