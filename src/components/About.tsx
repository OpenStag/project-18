import React from "react";
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="bg-secondary py-8 md:py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">About Us</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold">More than 20+ years provide medical</h3>
            <p className="text-gray-600 text-sm md:text-base">We are privileged to work with hundreds of the world&#39;s top hospitals, including many top brands, feel safe and comfortable in establishing.</p>
            <button className="bg-primary text-white px-4 py-2 rounded mt-4">Read More</button>
          </div>
          <Image src="/images/about-doctor.png" alt="Doctor" width={400} height={400} className="w-full md:w-1/2 rounded-full bg-white p-4 object-cover" /> 
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-8">
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-bold text-primary">586+</span>
            <p>Active clients</p>
          </div>
          <div className="text-center">
            <span className="text-3xl md:text-4xl font-bold text-primary">256+</span>
            <p>Projects Complete</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;