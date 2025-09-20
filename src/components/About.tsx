import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-[#F5F7FF] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#3212E4] mb-8">
          About Us
        </h2>

        {/* 2-column layout */}
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left: copy */}
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
              More than 20+ years <br className="hidden md:block" />
              provide&nbsp;<span className="whitespace-nowrap">medical</span>
            </h3>

            <p className="mt-5 max-w-md text-slate-600 text-base md:text-[17px] leading-relaxed">
              We are privileged to work with hundreds of the world&apos;s top
              hospitals, including many top brands, feel safe and comfortable in
              establishing.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center rounded-lg bg-[#3212E4] px-6 py-3 text-white font-semibold shadow hover:bg-[#2810c0] transition-colors"
            >
              Read More
            </a>
          </div>

          {/* Right: image with decorative frame */}
          <div className="relative isolate w-full max-w-[560px] mx-auto">
            {/* frame.svg/png behind (kept from your assets) */}
            <Image
              src="/images/frame.png"
              alt="Decorative frame"
              width={720}
              height={720}
              className="z-1 pointer-events-none select-none absolute inset-0 w-full h-full object-contain"
              priority
            />

            {/* doctor photo on top, not cropped */}
            <Image
              src="/images/about-doctor.png"
              alt="Doctor"
              width={720}
              height={720}
              className="z-0 relative w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 gap-10">
          <div className="flex items-start gap-4">
            {/* If you have icons, place them here. Otherwise remove this Image. */}
            {/* <Image src="/images/icon-clients.svg" alt="" width={56} height={56} /> */}
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#3212E4]">
                586+
              </div>
              <div className="mt-1 italic text-[#2A1A9F]">Active clients</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            {/* <Image src="/images/icon-projects.svg" alt="" width={56} height={56} /> */}
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#3212E4]">
                256+
              </div>
              <div className="mt-1 italic text-[#2A1A9F]">Projects complete</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
