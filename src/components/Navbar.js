import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Experience", path: "/experience" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] glass px-2 py-2 rounded-full flex items-center shadow-[0_0_50px_rgba(0,0,0,0.5)] border-white/5">
      <div className="flex gap-1 overflow-x-auto no-scrollbar max-w-[90vw] md:max-w-none">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) => `
              relative px-4 py-2 rounded-full text-[9px] md:text-[10px] uppercase tracking-[0.2em] transition-all duration-500 whitespace-nowrap
              ${isActive 
                ? "text-white bg-blue-600/20 nav-active-glow border border-blue-500/30" 
                : "text-slate-500 hover:text-slate-200 border border-transparent"}
            `}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;