import React from "react";

function Education() {
  const eduData = [
    {
      school: "University of the Cordilleras",
      degree: "BS in Information Technology",
      year: "2024 - Present",
      status: "Second Year"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 fade-in-up">
      <div className="max-w-2xl w-full">
        <h2 className="text-3xl font-bold mb-10 italic tracking-tight text-white">/ Education</h2>
        {eduData.map((edu, index) => (
          <div key={index} className="glass p-8 rounded-2xl border-l-4 border-l-blue-500 shadow-lg">
            <span className="text-blue-400 text-[10px] uppercase tracking-[0.3em] font-bold">{edu.year}</span>
            <h3 className="text-xl font-bold mt-2">{edu.degree}</h3>
            <p className="text-slate-400 mt-1 font-light">{edu.school}</p>
            <div className="mt-4 text-[10px] text-slate-500 uppercase tracking-widest px-3 py-1 bg-white/5 rounded-full inline-block">
              {edu.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;