"use client";
import React, { useState } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Trinity Hospital" width={32} height={32} className="h-8 mr-2" />
          <span className="text-primary font-bold text-xl">Trinity Hospital</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-primary">Home</a>
          <a href="/about" className="text-gray-600 hover:text-primary">About</a>
          <a href="/services" className="text-gray-600 hover:text-primary">Service</a>
          <a href="/departments" className="text-gray-600 hover:text-primary">Department</a>
          <a href="/appointment" className="text-gray-600 hover:text-primary">Appointment</a>
        </nav>
        <button className="bg-primary text-white px-4 py-2 rounded hidden md:block">Register</button>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-gray-600 hover:text-primary">Home</a>
            <a href="/about" className="text-gray-600 hover:text-primary">About</a>
            <a href="/services" className="text-gray-600 hover:text-primary">Service</a>
            <a href="/departments" className="text-gray-600 hover:text-primary">Department</a>
            <a href="/appointment" className="text-gray-600 hover:text-primary">Appointment</a>
            <button className="bg-primary text-white px-4 py-2 rounded">Register</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;