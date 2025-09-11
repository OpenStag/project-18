import Image from "next/image";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <main className="bg-[#e7e6ff] min-h-screen">
      {/* Top Section */}
      <section className="relative w-full h-[80vh] flex justify-center items-center">
        <Image
          src="/top.png"
          alt="About Us Cover"
          fill
          style={{ objectFit: "cover" }}
          className="absolute inset-0 z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#1e1e9b] mb-6">About Us</h1>
        
        </div>
      </section>
<section className="bg-[#6E8BD7] px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Midle Section */}
        <div>
          <h2 className="text-4xl font-bold text-[#1E1E9B] mb-4">About Us</h2>
          <h3 className="text-3xl font-bold text-[#000000] mb-6 leading-snug">
            More than 20+ years <br /> provide medical
          </h3>
          <p className="text-gray-800 leading-relaxed mb-8 text-lg max-w-lg">
            We are privileged to work with hundreds of future-thinking medical
            professionals, including many of the world’s top hardware, software,
            and brands. Feel safe and comfortable in establishing your
            healthcare with us.
          </p>
          <button className="bg-[#2D0FA6] text-white font-bold px-10 py-4 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 text-lg mb-12">
            Learn More
          </button>

          {/* middle content Section */}
          <div className="grid grid-cols-2 gap-8">
            
            <div>
              <h4 className="text-4xl font-bold text-[#2D0FA6] mb-1">20+</h4>
              <p className="text-black font-semibold">Years Of Trusted Care</p>
            </div>

            
            <div>
              <h4 className="text-4xl font-bold text-[#2D0FA6] mb-1">160+</h4>
              <p className="text-black font-semibold">Certified Specialists</p>
            </div>

           
            <div>
              <h4 className="text-4xl font-bold text-[#2D0FA6] mb-1">250+</h4>
              <p className="text-black font-semibold">Professional Nurses</p>
            </div>

            
            <div>
              <h4 className="text-4xl font-bold text-[#2D0FA6] mb-1">99%</h4>
              <p className="text-black font-semibold">Positive Reviews</p>
            </div>
          </div>
        </div>

        
        <div className="flex justify-center lg:justify-end">
          <div className="w-[400px] h-[600px] overflow-hidden rounded-[10px]">
            <Image
              src="/right.png" 
              alt="Doctor"
              width={400}
              height={600}
              className="object-cover "
            />
          </div>
        </div>
      </div>
    </section>
      
    </main>
  );
};

export default AboutPage;