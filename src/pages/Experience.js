import React from "react";

function Experience() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 fade-in-up">
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-10 italic tracking-tight text-white">/ Experience</h2>
        <div className="glass p-8 rounded-3xl border-white/5">
          <h3 className="text-lg font-bold text-blue-400">Frontend Developer</h3>
          <p className="text-xs text-slate-500 mb-4 tracking-widest uppercase">Personal Projects</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Currently developing a React applications with a focus on UI/UX design 
            and CSS frameworks like Tailwind.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;