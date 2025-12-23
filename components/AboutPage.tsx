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
        className="relative w-full h-[1350px] flex flex-col items-center justify-center overflow-hidden border-y border-white/5"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766490485/Untitled_design_5_mvfst3.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Significantly lightened overlay for clear background visibility */}
        <div className="absolute inset-0 bg-black/35 z-0" />
        {/* Very subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_70%)] z-[1] opacity-30" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 gap-48 md:gap-64">
          <div className="text-center md:text-left group">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-blue-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:translate-x-4">Our Mission</h2>
            <p className="text-2xl md:text-4xl text-white leading-tight font-bold max-w-4xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Empowering the modern trader with the tools, community, and discipline required for long-term financial excellence.
            </p>
            <div className="h-1 w-24 bg-blue-500 mt-8 transition-all duration-500 group-hover:w-48 shadow-lg" />
          </div>
          
          <div className="text-center md:text-right flex flex-col md:items-end group">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:-translate-x-4">Our Vision</h2>
            <p className="text-2xl md:text-4xl text-white leading-tight font-bold max-w-4xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              To become the global benchmark for professional trading environments, bridging the gap between digital markets and physical networking.
            </p>
            <div className="h-1 w-24 bg-white mt-8 transition-all duration-500 group-hover:w-48 shadow-lg" />
          </div>
        </div>
      </section>

      {/* 3. Our Mentors Section - Height 760px */}
      <section 
        className="relative w-full h-[760px] flex items-center justify-center overflow-hidden border-b border-white/5"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766490941/Untitled_Website_1_arxpdc.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Transparent overlay to maintain image clarity */}
        <div className="absolute inset-0 bg-black/30 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center tracking-tighter uppercase drop-shadow-lg">Our <span className="text-blue-500">Mentors</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 aspect-[4/5] flex flex-col items-center justify-end hover:bg-black/60 transition-all duration-500 group">
                <div className="w-full h-48 bg-zinc-800/80 rounded-lg mb-6 group-hover:scale-105 transition-transform duration-500" />
                <h3 className="text-xl font-bold uppercase tracking-widest text-white drop-shadow-md">Mentor Name</h3>
                <p className="text-blue-400 text-sm mt-2 uppercase tracking-tighter font-semibold drop-shadow-md">Trading Expert</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Team Section - Height 760px */}
      <section 
        className="relative w-full h-[760px] flex items-center justify-center overflow-hidden"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766491078/Untitled_Website_2_oekbqb.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Transparent overlay to maintain image clarity */}
        <div className="absolute inset-0 bg-black/40 z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center tracking-tighter uppercase drop-shadow-lg">Our <span className="text-blue-500">Team</span></h2>
          <div className="flex flex-wrap justify-center gap-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center space-y-4 group">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-zinc-800/80 rounded-full border-2 border-white/20 group-hover:border-blue-500 transition-all duration-300 transform group-hover:scale-110 shadow-2xl overflow-hidden" />
                <div className="text-center px-4 py-2 bg-black/40 backdrop-blur-sm rounded-lg">
                  <h4 className="font-bold uppercase text-sm tracking-widest text-white drop-shadow-md">Team Member</h4>
                  <p className="text-zinc-300 text-[10px] uppercase mt-1 font-semibold drop-shadow-md">Designation</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;