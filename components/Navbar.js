"use client";

import { useState } from "react";
import Image from "next/image";
import logo from '../public/logo.svg';


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 flex items-center w-[90%] max-w-5xl mx-auto border border-slate-700 px-6 py-3 rounded-full text-black text-sm mt-2.5 bg-amber-100">
      
      {/* Left Section / Logo */}
      <div className="flex items-center min-w-[120px] h-10 gap-1.5">
        <Image 
                width={50}
                height={50}
                src={logo} 
                alt="Robot animation" 
                unoptimized 
              />
        <span className="text-2xl text-black font-bold inclusivesans">Prismify</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 ml-auto">
        <a href="#" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Products
          </span>

          <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
            Products
          </span>
        </a>

        <a href="#" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Stories
          </span>

          <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
            Stories
          </span>
        </a>

        <a href="#" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Pricing
          </span>

          <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
            Pricing
          </span>
        </a>

        <a href="#" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Docs
          </span>

          <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
            Docs
          </span>
        </a>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4 ml-8">
        <button className="border border-slate-600 hover:bg-slate-800 hover:text-white px-4 py-2 rounded-full text-sm font-medium transition">
          Contact
        </button>

        <button className="bg-black text-white hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition duration-300">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden ml-auto text-gray-600"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full mt-3 left-0 bg-black w-full text-base flex-col items-center gap-4 py-6 rounded-2xl ${
          mobileMenuOpen ? "flex" : "hidden"
        }`}
      >
        <a
          className="text-white hover:text-indigo-600"
          href="#"
          onClick={() => setMobileMenuOpen(false)}
        >
          Products
        </a>

        <a
          className="text-white hover:text-indigo-600"
          href="#"
          onClick={() => setMobileMenuOpen(false)}
        >
          Customer Stories
        </a>

        <a
          className="text-white hover:text-indigo-600"
          href="#"
          onClick={() => setMobileMenuOpen(false)}
        >
          Pricing
        </a>

        <a
          className="text-white hover:text-indigo-600"
          href="#"
          onClick={() => setMobileMenuOpen(false)}
        >
          Docs
        </a>

        <button className="border border-slate-600 text-white hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
          Contact
        </button>

        <button className="bg-[#A0F1BD] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
