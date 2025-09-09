import React from 'react'
import Image from 'next/image'
export default function Departments(){
return (
  <div className="w-full bg-white text-gray-900">
    <div
      className="relative w-full h-[800px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/Rectangle 42.png')" }}
    >
      <h1 className="text-6xl font-black text-blue-700">Departments</h1>
    </div>
    <div className='flex flex-wrap justify-center gap-20 py-6 text-black font-black'>
        <button className="hover:text-blue-500">All</button>
        <button className="hover:text-blue-500">Cardiology</button>
        <button className="hover:text-blue-500">Pedistrics</button>
        <button className="hover:text-blue-500">Obsterics</button>
        <button className="hover:text-blue-500">Dental Care</button>
        <button className="hover:text-blue-500">Eye Care</button>
    </div>

    <div
      className="relative w-full h-[800px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/Rectangle 43.png')" }}
    >
      <h1 className="text-6xl font-black text-blue-700">Departments</h1>
    </div>
        <h1 className="py-15 flex flex-wrap justify-center text-4xl font-black text-black">Our Doctors</h1>

  </div>
);
}
