import React from "react";
import Image from 'next/image';

const Doctors: React.FC = () => {
  return (
    <section id="doctors" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-4">Our Doctors</h2>
        <h3 className="text-2xl font-bold mb-6">Meet Our Trusted Doctors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow text-center">
            <Image src="/images/doctor1.png" alt="Dr. Michael Anderson" width={400} height={400} className="mx-auto h-40 object-cover" /> 
            <h4 className="text-xl font-bold mt-2">Dr. Michael Anderson</h4>
            <p className="text-gray-600">Neurologist</p>
          </div>
          <div className="bg-white p-4 shadow text-center">
            <Image src="/images/doctor2.png" alt="Dr. Sara Mitchell" width={400} height={400} className="mx-auto h-40 object-cover" /> 
            <h4 className="text-xl font-bold mt-2">Dr. Sara Mitchell</h4>
            <p className="text-gray-600">Cardiology</p>
          </div>
          <div className="bg-white p-4 shadow text-center">
            <Image src="/images/doctor3.png" alt="Dr. Emily Carter" width={400} height={400} className="mx-auto h-40 object-cover" /> 
            <h4 className="text-xl font-bold mt-2">Dr. Emily Carter</h4>
            <p className="text-gray-600">Dental</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;