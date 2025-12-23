import React from "react";
import { navMenu } from '../assets/assets';
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-6xl py-4 z-50 backdrop-blur-3xl bg-white/20 border border-white/30 rounded-3xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <div className="text-2xl font-bold bg-gradient-to-r from-zinc-800 to-zinc-600 bg-clip-text text-transparent">
            <span>THE-</span>
            <span className="text-purple-600 font-orbitron">PRIYANKA</span>
          </div>

          {/* Middle Menu - Centered */}
          <div className="hidden md:flex items-center space-x-12 px-8 py-3 backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl shadow-lg">
            {navMenu.map((item, index) => (
              <a 
                key={index} 
                href={`#${item}`}
                className="relative text-zinc-700 font-medium text-sm uppercase tracking-wider hover:text-purple-600 transition-all duration-300 hover:scale-105 group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

        
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
