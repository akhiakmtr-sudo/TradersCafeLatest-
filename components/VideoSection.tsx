
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section 
      id="video"
      className="relative w-full py-12 md:py-24 bg-black flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Container to handle the requested 1360x736 size responsiveley */}
      <div 
        className="relative w-full max-w-[1360px] aspect-video sm:aspect-auto sm:h-[400px] md:h-[600px] lg:h-[736px] rounded-2xl md:rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/5 group"
      >
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          loop 
          muted 
          playsInline
          src="https://res.cloudinary.com/dsamz0zji/video/upload/v1766484347/Untitled_design_modbkw.mp4"
        />
        
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />
        
        {/* High-end glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* Aesthetic Background Lighting Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default VideoSection;
