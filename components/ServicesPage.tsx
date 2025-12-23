
import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-black font-sans selection:bg-amber-500/30">
      {/* SECTION 1: SERVICES HERO - 1050px height */}
      <section 
        className="relative w-full h-[1050px] flex flex-col items-center justify-center overflow-hidden"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766509091/Untitled_600_x_600_px_4_h6xszb.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Top Left "SERVICES" watermark */}
        <div className="absolute top-12 left-10 md:top-20 md:left-20 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.1em] font-light uppercase select-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            SERVICES
          </h1>
        </div>
        
        {/* Bottom Pods Container */}
        <div className="absolute bottom-16 md:bottom-24 z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group">
            <div className="bg-gradient-to-b from-amber-900/60 via-amber-950/40 to-amber-900/60 p-8 md:p-10 rounded-[2.5rem] border border-amber-400/30 shadow-2xl backdrop-blur-md flex flex-col items-center text-center h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
                Trading Lounge
              </h3>
              <p className="text-white text-sm md:text-base leading-relaxed font-medium drop-shadow-md">
                Step into our high-speed trading zone — equipped with pro-level setups, real-time market screens, and powerful Wi-Fi. Trade, track, and triumph — all with a cup of coffee in hand.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="bg-gradient-to-b from-amber-900/60 via-amber-950/40 to-amber-900/60 p-8 md:p-10 rounded-[2.5rem] border border-amber-400/30 shadow-2xl backdrop-blur-md flex flex-col items-center text-center h-full">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
                Learning Pods
              </h3>
              <p className="text-white text-sm md:text-base leading-relaxed font-medium drop-shadow-md">
                Mini study hubs where beginners and pros exchange knowledge. Attend micro-sessions on Forex, Crypto, and Stock trading — or host your own session to teach and inspire!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRADER CONNECT PILLS - px_5 Background */}
      <section 
        className="relative w-full min-h-[850px] flex items-center overflow-hidden"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766511332/Untitled_600_x_600_px_5_p5g70d.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center py-20">
          {/* Left Column Spacer */}
          <div className="hidden md:block"></div>

          {/* Right Column: Pill Pods */}
          <div className="flex flex-col space-y-6 w-full max-w-xl ml-auto">
            {/* Pod 1: Trader Connect */}
            <div className="bg-gradient-to-r from-black via-black/95 to-amber-600 rounded-[3.5rem] p-10 md:p-12 border border-white/5 shadow-2xl flex flex-col items-center text-center">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 uppercase tracking-wider">
                TRADER CONNECT
              </h3>
              <p className="text-white text-[12px] md:text-[14px] leading-relaxed max-w-md font-normal">
                Meet fellow traders, investors, and financial enthusiasts. Network over cappuccinos, share insights, or form trading circles – your next big idea might start here.
              </p>
            </div>

            {/* Pod 2: Coffee & Charts */}
            <div className="bg-gradient-to-r from-black via-black/95 to-amber-600 rounded-[3.5rem] p-10 md:p-12 border border-white/5 shadow-2xl flex flex-col items-center text-center">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 uppercase tracking-wider">
                COFFEE & CHARTS
              </h3>
              <p className="text-white text-[12px] md:text-[14px] leading-relaxed max-w-md font-normal">
                Our signature event! A casual blend of market talk and mocha. Discuss global trends, price actions, and strategies — every sip fuels your next move.
              </p>
            </div>

            {/* Pod 3: Mentorship Zone */}
            <div className="bg-gradient-to-r from-black via-black/95 to-amber-600 rounded-[3.5rem] p-10 md:p-12 border border-white/5 shadow-2xl flex flex-col items-center text-center">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 uppercase tracking-wider">
                MENTORSHIP ZONE
              </h3>
              <p className="text-white text-[12px] md:text-[14px] leading-relaxed max-w-md font-normal">
                Book 1-on-1 or group sessions with experienced traders. Learn smart strategies, risk management, and market psychology — practical wisdom brewed fresh daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MARKET CAFE STREAM - px_6 Background */}
      <section 
        className="relative w-full min-h-[850px] flex items-center overflow-hidden"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766511331/Untitled_600_x_600_px_6_g7ws79.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">
          {/* Left Column: Framed Video Feed Area */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square rounded-sm overflow-hidden shadow-2xl border border-zinc-700/50 backdrop-blur-sm bg-black/40 group">
               <video 
                 src="https://res.cloudinary.com/dsamz0zji/video/upload/v1766513079/Untitled_600_x_600_px_alsjik.mp4" 
                 className="w-full h-full object-cover opacity-90 transition-opacity duration-700 group-hover:opacity-100"
                 autoPlay 
                 loop 
                 muted 
                 playsInline
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white/30 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold border border-white/20 px-4 py-2 bg-black/20 backdrop-blur-md">
                    Live Stream Feed
                  </span>
               </div>
            </div>
          </div>

          {/* Right Column: Pill Pods */}
          <div className="flex flex-col space-y-6 w-full max-w-xl">
            {/* Pod 1: Global Market Cafe Stream */}
            <div className="bg-gradient-to-r from-black via-black/95 to-amber-600 rounded-[3.5rem] p-10 md:p-12 border border-white/5 shadow-2xl flex flex-col items-center text-center">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 uppercase tracking-wider">
                GLOBAL MARKET CAFÉ STREAM
              </h3>
              <p className="text-white text-[12px] md:text-[14px] leading-relaxed max-w-md font-normal">
                Live market screens featuring Forex, stocks, and crypto updates – projected in real-time. Stay connected to the world's pulse as you sip and study.
              </p>
            </div>

            {/* Pod 2: Simulation Corner */}
            <div className="bg-gradient-to-r from-black via-black/95 to-amber-600 rounded-[3.5rem] p-10 md:p-12 border border-white/5 shadow-2xl flex flex-col items-center text-center">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 uppercase tracking-wider">
                SIMULATION CORNER
              </h3>
              <p className="text-white text-[12px] md:text-[14px] leading-relaxed max-w-md font-normal">
                Test your trading skills in a demo environment – risk-free and realistic. Compete in "Trading Battles" or challenge your friends for the top spot!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TRADING WORKSHOPS - Updated Background */}
      <section 
        className="relative w-full h-[760px] flex items-center justify-center overflow-hidden"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766443255/Website_-_Traders_Net_Cafe_ermald.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Card remains lowered as previously requested */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center transform translate-y-16 md:translate-y-24">
          <div className="bg-gradient-to-r from-black via-black/95 to-amber-600 rounded-[3.5rem] p-10 md:p-16 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-6 uppercase tracking-[0.2em]">
              TRADING WORKSHOPS
            </h3>
            <p className="text-white text-base md:text-lg leading-relaxed max-w-xl font-medium">
              Learn at your pace. From beginner to pro-level — tailored programs on Forex, Crypto, Stocks, and Technical Analysis — with certifications.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
