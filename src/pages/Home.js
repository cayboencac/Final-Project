import React from "react";

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 fade-in-up">
      <div className="mb-6 px-4 py-1.5 border border-blue-500/20 rounded-full text-[10px] uppercase tracking-[0.2em] text-blue-400 bg-blue-500/5 animate-pulse">
        System Active • Available for Projects
      </div>
      
      <h1 className="text-6xl md:text-9xl font-black tracking-tighter bg-gradient-to-b from-white via-white to-gray-600 bg-clip-text text-transparent leading-none">
        CAYBOEN <br /> CARL
      </h1>

      <p className="mt-4 text-blue-500 text-xs uppercase tracking-[0.4em] font-medium">
        Aspiring IT Professional & Web Developer
      </p>

      <div className="mt-8 max-w-sm">
        <p className="text-slate-400 text-sm italic font-light leading-relaxed">
          "First, solve the problem. Then, write the code."
        </p>
        <p className="mt-2 text-[10px] uppercase tracking-widest text-slate-600">
          — John Johnson
        </p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-4">
        <button className="px-10 py-4 bg-blue-600 text-white font-bold text-[10px] uppercase tracking-[0.2em] rounded-full transition-all duration-500 animate-glow hover:scale-105 hover:bg-blue-500">
          Explore Work
        </button>
      </div>
    </div>
  );
}

export default Home;