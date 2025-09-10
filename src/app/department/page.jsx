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

      <section className="py-0 px-6">
        <div className="grid md:grid-cols-3 gap-6">
        <div className="border p-6 rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="/Rectangle 13.png"
            alt="Dr. Maya Fernando"
            className="h-120 w-full object-cover rounded mb-4"
          />
          <h3 className="text-2xl font-bold flex justify-center">Dr. Maya Fernando</h3>
          <p className="text-black flex justify-center">Cardiology</p>
        </div>

        <div className="border p-6 rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="/Rectangle 51.png"
            alt="Dr. Aryan Samanasayaka"
            className="h-120 w-full object-cover rounded mb-4"
          />
          <h3 className="text-2xl font-semibold flex justify-center">Dr. Aryan Samanasayaka</h3>
          <p className="text-black flex justify-center">Cardiology</p>
        </div>

        <div className="border p-6 rounded-2xl shadow hover:shadow-lg transition">
          <img
            src="/Rectangle 52.png"
            alt="Dr. James Carter"
            className="h-120 w-full object-cover rounded mb-4"
          />
          <h3 className="flex text-2xl font-semibold justify-center">Dr. James Carter</h3>
          <p className="text-black flex justify-center">Cardiology</p>
        </div>
        </div>
      </section>


      <section className="py-10 px-6">
        <div className="relative w-full h-[800px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/Rectangle 57.png')" }}>
          <h1 className="text-6xl font-black text-blue-700">Pediatrics</h1>
        </div>

        <h1 className="py-5 flex flex-wrap justify-center text-4xl font-black text-black">Our Doctors</h1>
        <h3 className="py-5 flex flex-wrap justify-center text-xl font-black text-black">We care gentle and caring treatment for children.</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="/Rectangle 59.png"
              alt="Dr. Maya Fernando"
              className="h-100 w-full object-cover rounded mb-4"
            />
            <h3 className="flex text-2xl font-semibold justify-center">Dr.Michael Anderson</h3>
            <p className="text-black flex justify-center">Pediatrics</p>
          </div>

          <div className="border p-6 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="/Rectangle 62.png"
              alt="Dr. Aryan Samanasayaka"
              className="h-100 w-full object-cover rounded mb-4"
            />
            <h3 className="flex text-2xl font-semibold justify-center">Dr.Sarah Collins</h3>
            <p className="text-black flex justify-center">Pediatrics</p>
          </div>

          <div className="border p-6 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="/Rectangle 63.png"
              alt="Dr. James Carter"
              className="h-100 w-full object-cover rounded mb-4"
            />
            <h3 className="flex text-2xl font-semibold justify-center">Dr.james Patel</h3>
            <p className="text-black flex justify-center">Pediatrics</p>
          </div>
        </div>
      </section>


      <section className="py-10 px-6">
        <div className="relative w-full h-[800px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/Rectangle 64.png')" }}>
          <h1 className="text-6xl font-black text-blue-700">Obsterics</h1>
        </div>

        <h1 className="py-5 flex flex-wrap justify-center text-4xl font-black text-black">Our Doctors</h1>
        <h3 className="py-5 flex flex-wrap justify-center text-xl font-black text-black">We offer safe and supportive care for motthers and babies.</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="/Rectangle 81.png"
              alt="Dr. Maya Fernando"
              className="h-100 w-full object-cover rounded mb-4"
            />
            <h3 className="flex text-2xl font-semibold justify-center">Dr.Olivia Bennet</h3>
            <p className="text-black flex justify-center">Obsterics</p>
          </div>

          <div className="border p-6 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="/Rectangle 69.png"
              alt="Dr. Aryan Samanasayaka"
              className="h-100 w-full object-cover rounded mb-4"
            />
            <h3 className="flex text-2xl font-semibold justify-center">Dr.Daniel Harris</h3>
            <p className="text-black flex justify-center">Obsterics</p>
          </div>

          <div className="border p-6 rounded-2xl shadow hover:shadow-lg transition">
            <img
              src="/Rectangle 71.png"
              alt="Dr. James Carter"
              className="h-100 w-full object-cover rounded mb-4"
            />
            <h3 className="flex text-2xl font-semibold justify-center">Dr.Sophia  Carter</h3>
            <p className="text-black flex justify-center">Obsterics</p>
          </div>
        </div>
      </section>

      


  </div>
);
}
