import React from "react";
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8 md:py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="text-lg md:text-xl font-bold mb-2">Contact Information</h4>
          <p>📍 324 Marion Street, New York, USA</p>
          <p>✉️ Trinity-Hospital@mail.com</p>
          <p>📞 +94 77340789</p>
        </div>
        <div>
          <h4 className="text-lg md:text-xl font-bold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Service</a></li>
            <li><a href="#departments" className="hover:underline">Department</a></li>
            <li><a href="#doctors" className="hover:underline">Appointment</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg md:text-xl font-bold mb-2">Contact Us</h4>
          <form className="flex flex-col space-y-2">
            <input type="email" placeholder="Email" className="w-full p-2 text-black" />
            <textarea placeholder="Message" className="w-full p-2 text-black h-24" />
            <button type="submit" className="bg-white text-primary px-4 py-2 rounded w-full md:w-auto">Submit</button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-6 flex flex-row md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex space-x-4 max-w-50 md:w-auto justify-center md:justify-start">
          <a href="#"><Image src="/images/facebook.png" alt="Facebook" width={400} height={400} className="h-6" /></a> 
          <a href="#"><Image src="/images/instagram.png" alt="Instagram" width={400} height={400} className="h-6" /></a>
          <a href="#"><Image src="/images/x.png" alt="X" width={400} height={400} className="h-6" /></a>
          <a href="#"><Image src="/images/whatsapp.png" alt="Whatsapp" width={400} height={400} className="h-6" /></a>
          <a href="#"><Image src="/images/youtube.png" alt="Youtube" width={400} height={400} className="h-6" /></a>
        </div>
        <p className="text-sm text-center md:text-left">All Rights Reserved. Copyright © 2025 Trinity Hospital. Designed by Sobani Weerasinghe.</p>
      </div>
    </footer>
  );
};

export default Footer;