
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-black">
      {/* 1. About Us Section - Precise recreation with the requested image and dimensions */}
      <section 
        className="relative w-full min-h-[850px] flex flex-col justify-start items-start overflow-hidden pt-40 pb-24 px-6 md:px-20 lg:px-32"
        style={{ 
          background: 'linear-gradient(to right, #000000 0%, #000000 45%, #856a1e 100%)',
        }}
      >
        <div className="relative z-10 w-full max-w-7xl">
          {/* Header - Normal size (5xl to 7xl) as requested */}
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-16 tracking-wide font-normal uppercase leading-tight select-none">
            ABOUT US
          </h1>
          
          {/* Content Block - Perfectly aligned left text with comfortable reading measure */}
          <div className="max-w-4xl space-y-8 text-white/90 text-left mb-14">
            <p className="text-lg md:text-xl leading-[1.7] font-light tracking-wide">
              Welcome to Trader’s Net Cafe — Ever wondered what it feels like to sit beside real traders and experience the markets as they move? Step into a focused space where you can practice alongside experienced traders and observe live market strategies as they unfold.
            </p>
            <p className="text-lg md:text-xl leading-[1.7] font-light tracking-wide">
              Built for active market participants, our café blends professional tools, live market access, and a focused trading atmosphere. Trade independently, exchange insights, and sharpen your edge alongside experienced traders across U.S. and Indian markets.
            </p>
            <p className="text-lg md:text-xl leading-[1.7] font-light tracking-wide">
              At Traders Net Café, it’s not just about trading—it’s about trading with clarity, confidence, and community.
            </p>
          </div>

          {/* About Us Featured Image - Exact 850px width and 200px height with new Cloudinary URL */}
          <div className="w-full max-w-[850px] h-[200px] overflow-hidden rounded-sm shadow-2xl border border-white/5 bg-zinc-900/50">
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
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20 z-[1]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 w-full">
          {/* Vision */}
          <div className="flex flex-col items-center text-center">
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 md:mb-10 tracking-wide drop-shadow-lg font-normal">
              OUR VISION
            </h2>
            <p className="text-lg md:text-2xl text-white/95 leading-relaxed max-w-lg font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              To build a creative trading community café where practice, collaboration, and innovation meet — shaping the next generation of smart traders and financial thinkers.
            </p>
          </div>
          
          {/* Mission */}
          <div className="flex flex-col items-center text-center">
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 md:mb-10 tracking-wide drop-shadow-lg font-normal">
              OUR MISSION
            </h2>
            <p className="text-lg md:text-2xl text-white/95 leading-relaxed max-w-lg font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
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
        <div className="absolute inset-0 bg-black/10 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Title & Image */}
          <div className="flex flex-col justify-start pt-16 md:pt-20">
            <h2 className="font-serif text-4xl md:text-6xl text-white font-normal tracking-wide drop-shadow-lg mb-8">
              OUR MENTORS
            </h2>
            <div className="relative w-full max-w-[500px] aspect-square mx-auto md:mx-0 overflow-hidden rounded-xl">
               <img 
                 src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766506589/Untitled_600_x_600_px_1_zawoyn.png" 
                 alt="Our Mentors" 
                 className="w-full h-full object-cover drop-shadow-2xl"
               />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col justify-center items-center text-center px-4 md:pl-12">
             <div className="max-w-xl text-center">
                <p className="text-lg md:text-xl text-white/95 leading-relaxed font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
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
        <div className="absolute inset-0 bg-black/10 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full grid grid-cols-1 md:grid-cols-2">
           <div className="flex flex-col justify-start pt-16 md:pt-20">
            <h2 className="font-serif text-4xl md:text-6xl text-white font-normal tracking-wide drop-shadow-lg mb-8">
              TEAM
            </h2>
            <div className="relative w-full max-w-[500px] aspect-square mx-auto md:mx-0 overflow-hidden rounded-xl">
               <img 
                 src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766506585/Untitled_600_x_600_px_m4t97s.png" 
                 alt="Our Team" 
                 className="w-full h-full object-cover drop-shadow-2xl"
               />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center space-y-16 px-4 md:pl-12">
             <div className="max-w-lg">
                <h3 className="text-xl md:text-2xl font-normal text-white mb-3">IT & Social Media</h3>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Platform management, online events, live trading sessions, and digital promotions They ensure the café stays connected, smart, and tech-driven.
                </p>
             </div>
             <div className="max-w-lg">
                <h3 className="text-xl md:text-2xl font-normal text-white mb-3">Finance</h3>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
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
