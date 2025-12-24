
import React from 'react';

const MembersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 px-6 selection:bg-amber-500/30">
      <div 
        className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl relative"
        style={{ 
          background: 'linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(166,124,0,0.8) 100%)'
        }}
      >
        {/* Header Section */}
        <div className="p-10 md:p-16 border-b border-white/10">
          <h1 className="text-4xl md:text-6xl text-white tracking-[0.05em] font-serif uppercase mb-12">
            MEMBERSHIP
          </h1>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-6 mb-16">
            <button className="px-12 py-4 rounded-full bg-gradient-to-b from-amber-800/80 to-amber-950 text-white font-bold tracking-wider hover:scale-105 transition-transform border border-amber-600/30">
              Register
            </button>
            <button className="px-12 py-4 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 text-white font-bold tracking-wider hover:scale-105 transition-transform border border-white/5">
              Login
            </button>
          </div>

          {/* Intro Text */}
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
              Become a Member of Traders Net Café
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-medium">
              Practice. Observe. Grow with real market professionals. Join Traders Net Café and get access to a focused trading environment where aspiring and active traders come together to practice, observe strategies, and sharpen market skills under experienced guidance.
            </p>
          </div>
        </div>

        {/* Membership Plan Section */}
        <div className="p-10 md:p-16">
          <h2 className="text-3xl md:text-5xl text-white tracking-[0.02em] font-serif mb-8">
            Monthly Membership Plan
          </h2>
          
          <div className="space-y-8">
            <div>
              <p className="text-xl md:text-2xl font-bold text-white mb-2">AED 499 / Month</p>
              <p className="text-white/70 italic">A simple, affordable plan designed for serious market participants.</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2 w-fit">
                What's Included:
              </h3>
              <ul className="space-y-3">
                {[
                  "Access to Traders Net Café trading environment",
                  "Live market observation sessions",
                  "Practice setups for U.S. market instruments",
                  "Interaction with experienced traders",
                  "Community discussions and market insights",
                  "One-month flexible membership (no long-term commitment)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-white/90 text-sm md:text-base">
                    <span className="mr-3 text-amber-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
