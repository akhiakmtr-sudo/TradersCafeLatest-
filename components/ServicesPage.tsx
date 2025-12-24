import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-black font-body selection:bg-amber-500/30">
      {/* SECTION 1: SERVICES HERO */}
      <section 
        className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-24"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766509091/Untitled_600_x_600_px_4_h6xszb.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute top-12 left-10 md:top-20 md:left-20 z-10">
          <h1 className="font-heading text-white select-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            SERVICES
          </h1>
        </div>
        
        <div className="mt-auto mb-16 z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group">
            <div className="bg-gradient-to-b from-amber-900/60 via-amber-950/40 to-amber-900/60 p-8 md:p-10 rounded-[2.5rem] border border-amber-400/30 shadow-2xl backdrop-blur-md flex flex-col items-center text-center h-full">
              <h3 className="font-heading text-white mb-4 drop-shadow-md normal-case text-2xl">
                Trading Lounge
              </h3>
              <p className="font-body text-white drop-shadow-md">
                Step into our high-speed trading zone — equipped with pro-level setups, real-time market screens, and powerful Wi-Fi. Trade, track, and triumph — all with a cup of coffee in hand.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="bg-gradient-to-b from-amber-900/60 via-amber-950/40 to-amber-900/60 p-8 md:p-10 rounded-[2.5rem] border border-amber-400/30 shadow-2xl backdrop-blur-md flex flex-col items-center text-center h-full">
              <h3 className="font-heading text-white mb-4 drop-shadow-md normal-case text-2xl">
                Learning Pods
              </h3>
              <p className="font-body text-white drop-shadow-md">
                Mini study hubs where beginners and pros exchange knowledge. Attend micro-sessions on Forex, Crypto, and Stock trading — or host your own session to teach and inspire!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRADER CONNECT PILLS */}
      <section 
        className="relative w-full min-h-screen flex items-center overflow-hidden py-24"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766511332/Untitled_600_x_600_px_5_p5g70d.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="hidden md:block"></div>
          <div className="flex flex-col space-y-6 w-full max-w-xl ml-auto">
            <div className="bg-gradient-to-r from-black via-black/95 to-amber-600 rounded-[3.5rem] p-10 md:p-12 border border-white/5 shadow-2xl flex flex-col items-center text-center">
              <h3 className="font-heading text-white mb-3 text-xl normal-case">
                Trader Connect
              </h3>
              <p className="font-body text-white">
                Meet fellow traders, investors, and financial enthusiasts. Network over cappuccinos, share insights, or form trading circles – your next big idea might start here.
              </p>
            </div>
            <div className="bg-gradient-to-r from-black via-black/95 to-amber-600 rounded-[3.5rem] p-10 md:p-12 border border-white/5 shadow-2xl flex flex-col items-center text-center">
              <h3 className="font-heading text-white mb-3 text-xl normal-case">
                Coffee & Charts
              </h3>
              <p className="font-body text-white">
                Our signature event! A casual blend of market talk and mocha. Discuss global trends, price actions, and strategies — every sip fuels your next move.
              </p>
            </div>
            <div className="bg-gradient-to-r from-black via-black/95 to-amber-600 rounded-[3.5rem] p-10 md:p-12 border border-white/5 shadow-2xl flex flex-col items-center text-center">
              <h3 className="font-heading text-white mb-3 text-xl normal-case">
                Mentorship Zone
              </h3>
              <p className="font-body text-white">
                Book 1-on-1 or group sessions with experienced traders. Learn smart strategies, risk management, and market psychology — practical wisdom brewed fresh daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MARKET CAFE STREAM */}
      <section 
        className="relative w-full min-h-screen flex items-center overflow-hidden py-24"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766511331/Untitled_600_x_600_px_6_g7ws79.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square rounded-sm overflow-hidden shadow-2xl border border-zinc-700/50 backdrop-blur-sm bg-black/40">
               <video 
                 src="https://res.cloudinary.com/dsamz0zji/video/upload/v1766513079/Untitled_600_x_600_px_alsjik.mp4" 
                 className="w-full h-full object-cover opacity-90"
                 autoPlay loop muted playsInline
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col space-y-6 w-full max-w-xl">
            <div className="bg-gradient-to-r from-black via-black/95 to-amber-600 rounded-[3.5rem] p-10 md:p-12 border border-white/5 shadow-2xl flex flex-col items-center text-center">
              <h3 className="font-heading text-white mb-3 text-xl normal-case">
                Global Market Café Stream
              </h3>
              <p className="font-body text-white">
                Live market screens featuring Forex, stocks, and crypto updates – projected in real-time. Stay connected to the world's pulse as you sip and study.
              </p>
            </div>
            <div className="bg-gradient-to-r from-black via-black/95 to-amber-600 rounded-[3.5rem] p-10 md:p-12 border border-white/5 shadow-2xl flex flex-col items-center text-center">
              <h3 className="font-heading text-white mb-3 text-xl normal-case">
                Simulation Corner
              </h3>
              <p className="font-body text-white">
                Test your trading skills in a demo environment – risk-free and realistic. Compete in "Trading Battles" or challenge your friends for the top spot!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TRADING WORKSHOPS */}
      <section 
        className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden py-24"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766443255/Website_-_Traders_Net_Cafe_ermald.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-black via-black/95 to-amber-600 rounded-[3.5rem] p-10 md:p-16 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col items-center">
            <h3 className="font-heading text-white mb-6">
              TRADING WORKSHOPS
            </h3>
            <p className="font-body text-white">
              Learn at your pace. From beginner to pro-level — tailored programs on Forex, Crypto, Stocks, and Technical Analysis — with certifications.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: BOTTOM CONTENT SECTION */}
      <section 
        className="relative w-full min-h-screen flex items-center overflow-hidden py-24"
        style={{ 
          backgroundImage: `url('https://res.cloudinary.com/dsamz0zji/image/upload/v1766490302/Untitled_Website_ohs4ke.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
               <img 
                 src="https://res.cloudinary.com/dufnwlqeq/image/upload/v1766570497/Untitled_600_x_600_px_500_x_500_px_jjejss.png" 
                 alt="Trader community collaborating" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>

          <div className="flex flex-col space-y-8 w-full max-w-xl">
            <div className="bg-gradient-to-r from-black via-black/95 to-amber-600 rounded-[3.5rem] p-10 md:p-12 border border-white/5 shadow-2xl flex flex-col items-center text-center">
              <h3 className="font-heading text-white mb-3 text-xl normal-case">
                Investment Talk Nights
              </h3>
              <p className="font-body text-white">
                Weekly community sessions where experts, guests, or even members share insights about trading, investing, and financial independence — in a cozy café vibe.
              </p>
            </div>
            <div className="bg-gradient-to-r from-black via-black/95 to-amber-600 rounded-[3.5rem] p-10 md:p-12 border border-white/5 shadow-2xl flex flex-col items-center text-center">
              <h3 className="font-heading text-white mb-3 text-xl normal-case">
                Chill & Create Zone
              </h3>
              <p className="font-body text-white">
                A relaxed spot to brainstorm business ideas, journal your trades, or simply enjoy creative conversations. Because great minds think better over good coffee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;