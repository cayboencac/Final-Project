import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 fade-in-up">
      {/* Main Card Container */}
      <div className="max-w-3xl w-full glass p-10 md:p-16 rounded-[2.5rem] border-white/5 relative overflow-hidden shadow-2xl">
        
        {/* Subtle Decorative Background Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full"></div>

        {/* Header Label */}
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-blue-500 mb-10 font-bold flex items-center gap-4">
          <span className="w-8 h-[1px] bg-blue-500/50"></span>
          The Journey
        </h2>

        {/* The Narrative Paragraph */}
        <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
          "I’m currently pursuing my degree in 
          <span className="text-white font-medium"> Information Technology </span> 
          at <span className="text-blue-400 font-medium">UC</span>. 
          As a Student, I’ve moved past the basics and am now diving deep into how 
          technology actually works 
          <span className="text-white"> behind the scenes</span>. 
          My goal is to use what I learn here in the heart of 
          <span className="text-blue-400 font-medium"> Baguio </span> 
          to create software that helps people. I believe that being a developer isn't 
          just about math; it's about being a 
          <span className="text-white font-bold tracking-tight"> storyteller through technology</span>."
        </p>

        {/* Footer Detail */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-6 items-center">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-slate-500">Location</span>
            <span className="text-xs text-slate-300">University of the Cordilleras</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-slate-500">Current Status</span>
            <span className="text-xs text-slate-300">2nd Year Sophomore</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;