import React from "react";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center fade-in-up">
      <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-white">LET'S CONNECT.</h2>
      <div className="glass p-10 rounded-[2.5rem] max-w-lg w-full">
        <a href="mailto:cayboen@email.com" className="text-xl md:text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          cayboen@email.com
        </a>
      </div>
    </div>
  );
}

export default Contact;