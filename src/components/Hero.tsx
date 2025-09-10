import React from "react";
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[50vh] md:h-[70vh] lg:h-[80vh]">
      <Image src="/images/hero.png" alt="Doctors" fill className="object-cover" /> 
      <div className="absolute top-1/4 left-5 md:left-10 text-black hero-text">
        <h1 className="text-3xl md:text-4xl font-bold">Your health is our greatest priority.</h1>
        <p className="text-base md:text-lg mt-2 md:mt-4">At Trinity Hospital, we combine world-class medical expertise with compassionate care to provide the best possible health outcomes for our patients.</p>
      </div>
      <button className="absolute bottom-5 left-5 md:bottom-10 md:left-10 btn-primary px-4 md:px-6 py-2 rounded">Emergency</button>
    </section>
  );
};

export default Hero;