import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-black font-body">
      {/* 1. About Us Section */}
      <section 
        className="relative w-full min-h-screen flex flex-col justify-center items-start overflow-hidden pt-32 pb-24 px-6 md:px-20 lg:px-32"
        style={{ 
          background: 'linear-gradient(to right, #111111 0%, #111111 35%, #856a1e 100%)',
        }}
      >
        <div className="relative z-10 w-full max-w-7xl">
          <h1 className="font-heading text-white mb-12 select-none">
            ABOUT US
          </h1>
          
          <div className="max-w-4xl space-y-6 text-white mb-14">
            <p className="font-body text-justify hyphens-auto">
              Welcome to Trader’s Net Cafe — Ever wondered what it feels like to sit beside real traders and experience the markets as they move? Step into a focused space where you can practice alongside experienced traders and observe live market strategies as they unfold.
            </p>
            <p className="font-body text-justify hyphens-auto">
              Built for active market participants, our café blends professional tools, live market access, and a focused trading atmosphere. Trade independently, exchange insights, and sharpen your edge alongside experienced traders across U.S. and Indian markets.
            </p>
            <p className="font-body text-justify hyphens-auto">
              At Traders Net Café, it’s not just about trading—it’s about trading with clarity, confidence, and community.
            </p>
          </div>

          <div className="w-full max-w-[850px] aspect-video md:h-[300px] overflow-hidden rounded-sm shadow-2xl border border-white/10 bg-zinc-900/50">
            <img 
              src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766508252/Untitled_600_x_600_px_3_bx6vdf.png" 
              alt="Trading community at cafe" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision Section */}
      <section 
        className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden border-y border-white/5"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766490485/Untitled_design_5_mvfst3.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 w-full">
          <div className="flex flex-col items-center">
            <h2 className="font-heading text-white mb-8 drop-shadow-[0_4px_10px_rgba(0,0,0,1)] text-center">
              OUR VISION
            </h2>
            <p className="font-body text-white max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,1)] text-center">
              To build a creative trading community café where practice, collaboration, and innovation meet — shaping the next generation of smart traders and financial thinkers.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h2 className="font-heading text-white mb-8 drop-shadow-[0_4px_10px_rgba(0,0,0,1)] text-center">
              OUR MISSION
            </h2>
            <p className="font-body text-white max-w-lg drop-shadow-[0_2px_8px_rgba(0,0,0,1)] text-center">
              To make trading, investing, and learning accessible to everyone — in an inspiring, collaborative, and coffee-fueled environment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our Mentors Section */}
      <section 
        className="relative w-full min-h-screen flex items-center justify-center py-24 overflow-hidden border-b border-white/5"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766490941/Untitled_Website_1_arxpdc.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-start">
            <h2 className="font-heading text-white mb-8 drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
              OUR MENTORS
            </h2>
            <div className="relative w-full max-w-[450px] aspect-square overflow-hidden rounded-xl border border-white/10 shadow-2xl">
               <img 
                 src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766506589/Untitled_600_x_600_px_1_zawoyn.png" 
                 alt="Our Mentors" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>

          <div className="flex flex-col justify-center">
             <div className="max-w-xl w-full">
                <p className="font-body text-white text-justify hyphens-auto drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                  Guided by experience, driven by clarity. Our mentors bring years of hands-on market exposure across Indian and U.S. markets. They don’t just share strategies—they share perspective, discipline, and real-world insights. What sets them apart is live practice with mentors—learning by doing, side by side. This practical, trader-first approach helps you build confidence, discipline, and clarity while navigating real market conditions.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Our Team Section */}
      <section 
        className="relative w-full min-h-screen flex items-center justify-center py-24 overflow-hidden"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766491078/Untitled_Website_2_oekbqb.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="flex flex-col justify-start">
            <h2 className="font-heading text-white mb-8 drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">
              TEAM
            </h2>
            <div className="relative w-full max-w-[450px] aspect-square overflow-hidden rounded-xl border border-white/10 shadow-2xl">
               <img 
                 src="https://res.cloudinary.com/dsamz0zji/image/upload/v1766506585/Untitled_600_x_600_px_m4t97s.png" 
                 alt="Our Team" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-12">
             <div className="max-w-lg w-full">
                <h3 className="font-heading text-white mb-4 drop-shadow-md text-sm sm:text-lg">IT & Social Media</h3>
                <p className="font-body text-white text-justify hyphens-auto drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                  Platform management, online events, live trading sessions, and digital promotions They ensure the café stays connected, smart, and tech-driven.
                </p>
             </div>
             <div className="max-w-lg w-full">
                <h3 className="font-heading text-white mb-4 drop-shadow-md text-sm sm:text-lg">Finance</h3>
                <p className="font-body text-white text-justify hyphens-auto drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
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