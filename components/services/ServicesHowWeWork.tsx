"use client";

import Image from "next/image";

export default function ServicesHowWeWork() {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto py-20 px-[280px] bg-black text-white overflow-hidden">
      <div className="relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-white/80 text-xl">
            A streamlined, transparent, and collaborative workflow built
            <br />
            for quality and speed.
          </p>
        </div>

        {/* Cards Wrapper */}
        <div
          className="
            w-[1360px] h-[680px]
            mx-auto
            px-[80px]
            flex flex-col
            gap-y-6
          "
        >
          {/* TOP ROW */}
          <div className="grid grid-cols-[813px_363px] gap-8">
            {/* 1️⃣ Discovery */}
            <div className="relative h-[328px] p-6 rounded-[14px] bg-[#0C0F16] shadow-[0px_4px_10px_#FFFFFF26] overflow-hidden flex items-end">
              <div className="max-w-[520px] flex flex-col gap-[10px]">
                <h3 className="text-2xl font-bold">Discovery & Ideation</h3>
                <p className="text-white/80 text-lg">
                  We dive deep into your business, users, and goals. Research,
                  workshops, and strategy sessions to set the foundation.
                </p>
              </div>

              <div className="absolute right-6 -bottom-10 w-[244px] h-[416px]">
                <Image
                  src="/services_imgs/Discovery.png"
                  alt="Discovery"
                  width={244}
                  height={416}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* 2️⃣ Design */}
            <div className="relative h-[328px] p-6 rounded-[14px] bg-[#0C0F16] shadow-[0px_4px_10px_#FFFFFF26] overflow-hidden flex items-end">
              <div className="relative z-10 flex flex-col gap-[10px]">
                <h3 className="text-2xl font-bold">Design</h3>
                <p className="text-white/80 text-lg">
                  Creating beautiful, intuitive experiences. From wireframes to
                  high-fidelity prototypes, every pixel matters.
                </p>
              </div>

              {/* Image */}
              <div className="absolute inset-0 flex justify-end">
                <div className="relative w-[410px] h-[328px] ">
                  <Image
                    src="/services_imgs/design.png"
                    alt="Design"
                    width={410}
                    height={328}
                    className="object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className=" absolute inset-0  bg-[linear-gradient(180deg,_rgba(0,0,0,0)_35.51%,_#000000_100%)] "
                  />
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-[363px_813px] gap-8">
            {/* 3️⃣ Development */}
            <div className="relative h-[328px] p-6 rounded-[14px] bg-[#0C0F16] shadow-[0px_4px_10px_#FFFFFF26] overflow-hidden flex items-end">
              <div className="relative z-10 flex flex-col gap-[10px]">
                <h3 className="text-2xl font-bold">Development</h3>
                <p className="text-white/80 text-lg">
                  Bringing designs to life with clean, scalable code.
                  Rigorous testing ensures everything works perfectly.
                </p>
              </div>

              <div className="absolute inset-0 flex justify-end">
                <div className="relative w-[491px] h-[340px] ">
                  <Image
                    src="/services_imgs/development.png"
                    alt="Development"
                    width={490}
                    height={340}
                    className="object-contain"
                  />
                  <div
                    className=" absolute inset-0  bg-[linear-gradient(180deg,_rgba(0,0,0,0)_35.51%,_#000000_100%)] "
                  />
                </div>
              </div>
            </div>

            {/* 4️⃣ Launch */}
            <div className="relative h-[328px] p-6 rounded-[14px] bg-[#0C0F16] shadow-[0px_4px_10px_#FFFFFF26] overflow-hidden">

              {/* Text Overlay */}
              <div className="absolute left-6 bottom-6 z-20 max-w-[520px] flex flex-col gap-[10px]">
                <h3 className="text-2xl font-bold">Launch</h3>
                <p className="text-white/80 text-lg">
                  Smooth deployment and a successful launch with ongoing
                  support to keep your product running at peak performance.
                </p>
              </div>

              {/* Image */}
              <div className="absolute inset-0 flex justify-end z-10">
                <div className="relative w-[410px] h-[328px] bottom-6">
                  <Image
                    src="/services_imgs/launch.png"
                    alt="Launch"
                    width={410}
                    height={328}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Optional Gradient for Readability */}
              <div className="absolute inset-0 z-15 bg-[linear-gradient(180deg,_rgba(0,0,0,0)_35%,_rgba(0,0,0,0.9)_100%)]" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
