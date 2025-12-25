import React, { useState } from 'react';
import emailjs from 'https://esm.sh/@emailjs/browser';

type ViewState = 'plan' | 'form' | 'success';

// EMAILJS CONFIGURATION UPDATED WITH USER CREDENTIALS
const EMAILJS_SERVICE_ID = 'qnb2veVwUgYHXFV7pMRrV';
const EMAILJS_TEMPLATE_ID = 'template_3mj2z4d';
const EMAILJS_PUBLIC_KEY = 'tmf1j02Q20F7sHhWC'; 

const MembersPage: React.FC = () => {
  const [view, setView] = useState<ViewState>('plan');
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // These keys must match the {{variable_name}} used in your EmailJS template
      const templateParams = {
        first_name: formData.firstName,
        middle_name: formData.middleName || 'N/A',
        surname: formData.surName,
        phone: formData.mobNo,
        email: formData.email,
        is_first_time: formData.isFirstTime,
        session_level: formData.sessionLevel,
        from_name: `${formData.firstName} ${formData.surName}`,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setView('success');
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Submission failed. Please check your EmailJS settings or connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-black pt-32 pb-16 px-6 font-body selection:bg-black/20">
      <div 
        className="max-w-5xl mx-auto rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl relative transition-all duration-500"
        style={{ background: '#FFD700' }}
      >
        {view === 'plan' && (
          <>
            <div className="p-10 md:p-16 border-b border-black/10">
              <h1 className="font-heading text-black mb-12">MEMBERSHIP</h1>
              
              <div className="flex flex-wrap gap-6 mb-16">
                <button 
                  onClick={() => setView('form')}
                  className="w-56 py-4 rounded-full bg-zinc-900 text-white font-bold tracking-wider hover:scale-105 transition-transform shadow-lg text-center"
                >
                  Register
                </button>
                <button className="w-56 py-4 rounded-full bg-zinc-900 text-white font-bold tracking-wider hover:scale-105 transition-transform shadow-lg text-center">
                  Login
                </button>
              </div>

              <div className="max-w-3xl">
                <h2 className="font-heading text-black mb-6 normal-case text-2xl">Become a Member of Traders Net Café</h2>
                <p className="font-body text-black/80">
                  Join Traders Net Café and get access to a focused trading environment where aspiring and active traders come together to practice, observe strategies, and sharpen market skills.
                </p>
              </div>
            </div>

            <div className="p-10 md:p-16">
              <h2 className="font-heading text-black mb-8">Monthly Membership Plan</h2>
              <div className="space-y-8">
                <div>
                  <p className="font-heading text-black mb-2 text-2xl normal-case">AED 499 / Month</p>
                  <p className="font-body text-black/70 italic">A simple, affordable plan for serious market participants.</p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-body font-bold text-black uppercase tracking-wider border-b border-black/10 pb-2 w-fit">What's Included:</h3>
                  <ul className="space-y-3">
                    {[
                      "Access to Traders Net Café trading environment",
                      "Live market observation sessions",
                      "Practice setups for U.S. market instruments",
                      "Interaction with experienced traders"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start font-body text-black/90">
                        <span className="mr-3 text-black font-bold">•</span>
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
            <button onClick={() => setView('plan')} className="font-body text-black/60 text-sm font-bold uppercase tracking-widest mb-10 flex items-center hover:text-black">
              <span className="mr-2">←</span> Back
            </button>
            <h2 className="font-heading text-black mb-12">Registration</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-2">
                <label className="text-black/70 text-xs font-bold uppercase tracking-widest">First Name</label>
                <input required disabled={isSubmitting} type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="bg-zinc-900 border border-black/10 rounded-lg p-4 text-white focus:outline-none placeholder-white/30" placeholder="First Name" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-black/70 text-xs font-bold uppercase tracking-widest">Middle Name</label>
                <input disabled={isSubmitting} type="text" name="middleName" value={formData.middleName} onChange={handleInputChange} className="bg-zinc-900 border border-black/10 rounded-lg p-4 text-white focus:outline-none placeholder-white/30" placeholder="Middle Name (Optional)" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-black/70 text-xs font-bold uppercase tracking-widest">Surname</label>
                <input required disabled={isSubmitting} type="text" name="surName" value={formData.surName} onChange={handleInputChange} className="bg-zinc-900 border border-black/10 rounded-lg p-4 text-white focus:outline-none placeholder-white/30" placeholder="Surname" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-black/70 text-xs font-bold uppercase tracking-widest">Mobile Number</label>
                <input required disabled={isSubmitting} type="tel" name="mobNo" value={formData.mobNo} onChange={handleInputChange} className="bg-zinc-900 border border-black/10 rounded-lg p-4 text-white focus:outline-none placeholder-white/30" placeholder="+971 -- --- ----" />
              </div>
              <div className="flex flex-col space-y-2 md:col-span-2">
                <label className="text-black/70 text-xs font-bold uppercase tracking-widest">Email Address</label>
                <input required disabled={isSubmitting} type="email" name="email" value={formData.email} onChange={handleInputChange} className="bg-zinc-900 border border-black/10 rounded-lg p-4 text-white focus:outline-none placeholder-white/30" placeholder="email@example.com" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-black/70 text-xs font-bold uppercase tracking-widest">First time?</label>
                <select name="isFirstTime" value={formData.isFirstTime} onChange={handleInputChange} className="bg-zinc-900 border border-black/10 rounded-lg p-4 text-white focus:outline-none appearance-none cursor-pointer">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-black/70 text-xs font-bold uppercase tracking-widest">Level</label>
                <select name="sessionLevel" value={formData.sessionLevel} onChange={handleInputChange} className="bg-zinc-900 border border-black/10 rounded-lg p-4 text-white focus:outline-none appearance-none cursor-pointer">
                  <option value="Basic">Basic</option>
                  <option value="Mid Level">Mid Level</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <div className="md:col-span-2 pt-8">
                <button type="submit" disabled={isSubmitting} className="w-full py-5 rounded-full bg-black text-white font-bold tracking-widest hover:scale-[1.02] active:scale-95 transition-all shadow-2xl uppercase flex items-center justify-center disabled:opacity-50">
                  {isSubmitting ? 'Sending...' : 'Submit Registration'}
                </button>
              </div>
            </form>
          </div>
        )}

        {view === 'success' && (
          <div className="p-16 md:p-24 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-black/10 rounded-full flex items-center justify-center mb-8 border border-black/20 text-black">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h2 className="font-heading text-black mb-6">Registration Successful</h2>
            <p className="font-body text-black/70 max-w-lg mb-12">We have received your registration details. Our team will contact you shortly.</p>
            <button onClick={() => setView('plan')} className="px-12 py-4 rounded-full bg-black text-white font-bold tracking-widest transition-all uppercase">
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembersPage;