
import React, { useState } from 'react';

type ViewState = 'plan' | 'form' | 'success';

const MembersPage: React.FC = () => {
  const [view, setView] = useState<ViewState>('plan');
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    surName: '',
    mobNo: '',
    email: '',
    isFirstTime: 'Yes',
    sessionLevel: 'Basic'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send data to an API here
    console.log('Form Submitted:', formData);
    setView('success');
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-10 px-6 selection:bg-amber-500/30">
      <div 
        className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl relative transition-all duration-500"
        style={{ 
          background: 'linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 40%, rgba(166,124,0,0.8) 100%)'
        }}
      >
        {view === 'plan' && (
          <>
            {/* Header Section */}
            <div className="p-10 md:p-16 border-b border-white/10">
              <h1 className="text-4xl md:text-6xl text-white tracking-[0.05em] font-serif uppercase mb-12">
                MEMBERSHIP
              </h1>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-6 mb-16">
                <button 
                  onClick={() => setView('form')}
                  className="px-12 py-4 rounded-full bg-gradient-to-b from-amber-800/80 to-amber-950 text-white font-bold tracking-wider hover:scale-105 transition-transform border border-amber-600/30 shadow-lg"
                >
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
          </>
        )}

        {view === 'form' && (
          <div className="p-10 md:p-16">
            <button 
              onClick={() => setView('plan')}
              className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-10 flex items-center hover:text-amber-400 transition-colors"
            >
              <span className="mr-2">←</span> Back to Plans
            </button>
            
            <h2 className="text-3xl md:text-5xl text-white tracking-[0.05em] font-serif uppercase mb-12">
              Registration
            </h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-2">
                <label className="text-white/60 text-xs font-bold uppercase tracking-widest">First Name</label>
                <input 
                  required
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-zinc-900/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                  placeholder="Enter your first name"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-white/60 text-xs font-bold uppercase tracking-widest">Middle Name</label>
                <input 
                  type="text" 
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className="bg-zinc-900/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                  placeholder="Enter your middle name"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-white/60 text-xs font-bold uppercase tracking-widest">Sur Name</label>
                <input 
                  required
                  type="text" 
                  name="surName"
                  value={formData.surName}
                  onChange={handleInputChange}
                  className="bg-zinc-900/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                  placeholder="Enter your surname"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-white/60 text-xs font-bold uppercase tracking-widest">Mobile Number</label>
                <input 
                  required
                  type="tel" 
                  name="mobNo"
                  value={formData.mobNo}
                  onChange={handleInputChange}
                  className="bg-zinc-900/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                  placeholder="+971 -- --- ----"
                />
              </div>

              <div className="flex flex-col space-y-2 md:col-span-2">
                <label className="text-white/60 text-xs font-bold uppercase tracking-widest">Email Address</label>
                <input 
                  required
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-zinc-900/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors"
                  placeholder="email@example.com"
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-white/60 text-xs font-bold uppercase tracking-widest">First time attending a session?</label>
                <select 
                  name="isFirstTime"
                  value={formData.isFirstTime}
                  onChange={handleInputChange}
                  className="bg-zinc-900/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors appearance-none cursor-pointer"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-white/60 text-xs font-bold uppercase tracking-widest">Level of session</label>
                <select 
                  name="sessionLevel"
                  value={formData.sessionLevel}
                  onChange={handleInputChange}
                  className="bg-zinc-900/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-amber-500/50 transition-colors appearance-none cursor-pointer"
                >
                  <option value="Basic">Basic</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className="md:col-span-2 pt-8">
                <button 
                  type="submit"
                  className="w-full py-5 rounded-full bg-gradient-to-b from-amber-800/80 to-amber-950 text-white font-bold tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all border border-amber-600/30 shadow-2xl uppercase"
                >
                  Submit Registration
                </button>
              </div>
            </form>
          </div>
        )}

        {view === 'success' && (
          <div className="p-16 md:p-24 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mb-8 border border-amber-500/50">
              <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-3xl md:text-5xl text-white tracking-[0.02em] font-serif mb-6">
              Registration Successful
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-lg mb-12">
              We are pleased to confirm your registration. Our admin team will contact you shortly.
            </p>
            <button 
              onClick={() => setView('plan')}
              className="px-12 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold tracking-widest border border-white/10 transition-all uppercase"
            >
              Back to Membership
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembersPage;
