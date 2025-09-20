"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed w-full z-50 shadow top-0 left-0">
      <div className="max-w-7xl h-16 mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Trinity Hospital"
            width={60}
            height={60}
            className="h-27 w-27 object-contain"
            priority
          />
          <span className="text-xl font-semibold leading-tight italic">
            <span className="text-gray-900 font-bold ">Trinity</span>
            <br />
            <span className="text-[#3212E4] font-bold relative left-7 ">Hospital</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-gray-700 font-bold">
          <a href="#" className="hover:text-[#2706FF] text-[#2706FF]">
            Home
          </a>
          <a href="#about" className="hover:text-[#2706FF]">
            About
          </a>
          <a href="#services" className="hover:text-[#2706FF]">
            Service
          </a>
          <a href="#departments" className="hover:text-[#2706FF]">
            Department
          </a>
          <a href="#appointment" className="hover:text-[#2706FF]">
            Appointment
          </a>
        </nav>

        {/* Register Button */}
        <button className="hidden md:block relative left-40 w-25 h-10 bg-[#2706FF] text-white rounded-lg font-bold transition">
          Register
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="h-7 w-7 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
            <a href="#" className="hover:text-[#2706FF]">
              Home
            </a>
            <a href="#about" className="hover:text-[#2706FF]">
              About
            </a>
            <a href="#services" className="hover:text-[#2706FF]">
              Service
            </a>
            <a href="#departments" className="hover:text-[#2706FF]">
              Department
            </a>
            <a href="#appointment" className="hover:text-[#2706FF]">
              Appointment
            </a>
            <button className="bg-[#2706FF] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#2706FF] transition">
              Register
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
