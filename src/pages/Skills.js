import React from "react";

function Skills() {
  const skills = ["React", "JavaScript", "Tailwind CSS", "HTML5", "Git", "VS Code"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 fade-in-up text-center">
      <h2 className="text-3xl font-bold mb-12 italic tracking-tight text-white">/ Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
        {skills.map(skill => (
          <span key={skill} className="px-6 py-3 glass rounded-2xl text-xs uppercase tracking-widest hover:text-blue-400 hover:border-blue-500/50 transition-all">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Skills;