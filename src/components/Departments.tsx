import React from "react";
import Image from 'next/image';

const Departments: React.FC = () => {
  return (
    <section className="bg-secondary py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-6">Hospital Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow">
            <Image src="/images/cardiology.png" alt="Cardiology" width={400} height={400} className="w-full h-40 object-cover" /> 
            <h4 className="text-xl font-bold mt-2">Cardiology</h4>
            <p className="text-gray-600">Our Cardiology department is dedicated to heart health with advanced technology and experienced doctors.</p>
          </div>
          <div className="bg-white p-4 shadow">
            <Image src="/images/dental.png" alt="Dental" width={400} height={400} className="w-full h-40 object-cover" /> 
            <h4 className="text-xl font-bold mt-2">Dental</h4>
            <p className="text-gray-600">Our Dental services focus on healthy smiles with gentle treatments. We are dedicated to keeping your teeth healthy.</p>
          </div>
          <div className="bg-white p-4 shadow">
            <Image src="/images/neurology.png" alt="Neurologist" width={400} height={400} className="w-full h-40 object-cover" /> 
            <h4 className="text-xl font-bold mt-2">Neurologist</h4>
            <p className="text-gray-600">Our Neurologist care specializes in brain, spine, and nerves, ensuring expert treatment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;