// components/Footer.tsx
import { FC } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer: FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
       <div>
        <h2 className="font-bold text-lg mb-4">Contact Information</h2>
        <div className="flex items-start space-x-3 mb-13">
            <MdLocationOn className="text-2xl"/>
            <p>324 Marion Street<br />New York<br />USA</p>
        </div>
        <div className="flex items-center space-x-3 mb-13">
            <MdEmail className="text-2xl"/>
            <p>Trinity-Hospital@gmail.com</p>
        </div>
        <div className="flex items-center space-x-3 mb-13">
            <MdPhone className="text-2xl"/>
            <p>0112432345</p>
        </div>
        <div className="flex space-x-7 mt-4">
            <Link href="/"><FaFacebook className="w-7 h-7 text-blue-500 bg-white p-1 rounded"/></Link>
            <Link href="/"><FaInstagram className="w-7 h-7 text-pink-600 bg-white p-1 rounded"/></Link>
            <Link href="/"><FaWhatsapp className="w-7 h-7 text-green-600 bg-white p-1 rounded"/></Link>
            <Link href="/"><FaTwitter className="w-7 h-7 text-blue-500 bg-white p-1 rounded"/></Link>
            <Link href="/"><FaYoutube className="w-7 h-7 text-red-600 bg-white p-1 rounded"/></Link>
        </div>
       </div>

    <div>
        <h2  className="font-bold text-lg mb-4">Quick Link</h2>
        <ul className="space-y-6">
            <li><Link href="/">Home</Link></li>
             <li><Link href="/">About</Link></li>
              <li><Link href="/">Service</Link></li>
              <li><Link href="/">Department</Link></li>
              <li><Link href="/">Appointment</Link></li>
        </ul>
    </div>

<div>
          <h2  className="font-bold text-lg mb-4">Contact Us</h2>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="px-3 py-2 rounded text-black text-lg font-bold bg-white"
            />
            <textarea
              placeholder="Message"
               className="px-3 py-12 rounded text-black text-lg font-bold bg-white"
             ></textarea>
            <button
              type="submit"
              className="bg-white text-black font-semibold py-2 w-32 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      

      {/* Bottom Text */}
      <div className="mt-10 text-center border-t border-gray-400 pt-4 text-sm">
        <p className="font-semibold">All Rights Reserved.</p>
        <p className="mt-2">
          Copyright © 2025 <span className="font-bold">Trinity Hospital</span>. 
          Designed by <span className="font-bold">OpanStage</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 
