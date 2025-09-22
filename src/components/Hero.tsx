import React from "react";
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] md:h-[80vh] lg:h-[150vh]">
      <Image src="/images/hero.png" alt="Doctors" fill className="object-cover object-center translate-y-10" /> 
      <div className="absolute top-1/3 left-6 md:left-12 z-10 max-w-2xl text-black hero-text">
        <h1 className="text-3xl md:text-4xl font-bold">Your health is our <br /> greatest priority.</h1>
        <p className="text-base md:text-lg mt-2 md:mt-4">At Trinity Hospital, we combine world-class medical expertise with compassionate care to provide the best possible health outcomes for our patients.</p>
      </div>
      <button className="w-40 h-10 font-bold text-white absolute bottom-5 left-5 md:bottom-90 md:left-25 bg-[#1A088F]  px-4 md:px-6 py-2 rounded-lg">Emergency</button>
    </section>
  );
};

export default Hero;