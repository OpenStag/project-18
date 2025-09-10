import React from "react";
import Image from 'next/image';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-8 md:py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Our Services</h2>
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Personalized Healthcare, Just For You</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow">
            <Image src="/images/pediatric.png" alt="Pediatric Clinic" width={400} height={400} className="w-full h-32 md:h-40 object-cover" /> 
            <h4 className="text-lg md:text-xl font-bold mt-2">Pediatric Clinic</h4>
            <p className="text-gray-600 text-sm md:text-base">Our Pediatric Clinic provides compassionate care for children of all ages. We focus on preventive health, routine checkups, and creating a friendly environment. We ensure every visit is comfortable.</p>
          </div>
          <div className="bg-white p-4 shadow">
            <Image src="/images/eye-care.png" alt="Eye Care" width={400} height={400} className="w-full h-32 md:h-40 object-cover" />
            <h4 className="text-lg md:text-xl font-bold mt-2">Eye Care</h4>
            <p className="text-gray-600 text-sm md:text-base">Our Eye Care offers complete vision checks, treatment for all ages. We use modern technology to diagnose and protect your vision for a brighter future.</p>
          </div>
          <div className="bg-white p-4 shadow">
            <Image src="/images/rehab.png" width={400} height={400} alt="Rehabilitation Clinic" className="w-full h-32 md:h-40 object-cover" />
            <h4 className="text-lg md:text-xl font-bold mt-2">Rehabilitation Clinic</h4>
            <p className="text-gray-600 text-sm md:text-base">Our Rehabilitation Clinic is dedicated to helping patients recover after injury or illness. We offer personalized programs with experienced rehabilitation specialists.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;