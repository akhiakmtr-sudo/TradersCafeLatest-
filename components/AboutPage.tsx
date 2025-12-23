
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. About Us Section - Height 760px */}
      <section 
        className="relative w-full h-[760px] flex items-center justify-center overflow-hidden"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766490302/Untitled_Website_ohs4ke.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Lighter Overlay for better background visibility */}
        <div className="absolute inset-0 bg-black/25 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-[1]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter uppercase drop-shadow-2xl">
            About <span className="text-blue-500">Us</span>
          </h1>
          <div className="space-y-6 text-white max-w-4xl mx-auto">
            <p className="text-lg md:text-2xl font-semibold leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Welcome to Trader’s Net Cafe — Ever wondered what it feels like to sit beside real traders and experience the markets as they move? Step into a focused space where you can practice alongside experienced traders and observe live market strategies as they unfold.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Built for active market participants, our café blends professional tools, live market access, and a focused trading atmosphere. Trade independently, exchange insights, and sharpen your edge alongside experienced traders across U.S. and Indian markets.
            </p>
            <p className="text-lg md:text-xl font-bold text-blue-400 italic drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-black/20 py-2 rounded-lg inline-block px-4">
              At Traders Net Café, it’s not just about trading—it’s about trading with clarity, confidence, and community.
            </p>
          </div>
        </div>
        
        {/* Decorative bottom element */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-10" />
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
        {/* Adjusted overlay to ensure text is readable but background is visible */}
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/20 z-[1]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 w-full">
          {/* Vision - Left Side */}
          <div className="flex flex-col items-center text-center">
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6 md:mb-10 tracking-wide drop-shadow-lg font-normal">
              OUR VISION
            </h2>
            <p className="text-lg md:text-2xl text-white/95 leading-relaxed max-w-lg font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              To build a creative trading community café where practice, collaboration, and innovation meet — shaping the next generation of smart traders and financial thinkers.
            </p>
          </div>
          
          {/* Mission - Right Side */}
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
        {/* Light Overlay to ensure text readability against the art in background */}
        <div className="absolute inset-0 bg-black/10 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Title */}
          <div className="flex flex-col justify-start pt-20 md:pt-24">
            <h2 className="font-serif text-4xl md:text-6xl text-white font-normal tracking-wide drop-shadow-lg">
              OUR MENTORS
            </h2>
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
           {/* Left Column - Title */}
           <div className="flex flex-col justify-start pt-20 md:pt-24">
            <h2 className="font-serif text-4xl md:text-6xl text-white font-normal tracking-wide drop-shadow-lg">
              TEAM
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center items-center text-center space-y-16 px-4 md:pl-12">
             
             {/* Block 1 */}
             <div className="max-w-lg">
                <h3 className="text-xl md:text-2xl font-normal text-white mb-3">IT & Social Media</h3>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Platform management, online events, live trading sessions, and digital promotions They ensure the café stays connected, smart, and tech-driven.
                </p>
             </div>

             {/* Block 2 */}
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
