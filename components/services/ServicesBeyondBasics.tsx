"use client";

import Image from "next/image";

const beyondServices = [
  {
    title: "Web3 & Blockchain",
    description: "Decentralized applications and smart contracts",
    image: "/holographic-diamond.png"
  },
  {
    title: "AI & Machine Learning", 
    description: "Intelligent automation and data insights",
    image: "/holographic-diamond.png"
  },
  {
    title: "IoT Solutions",
    description: "Connected devices and smart systems",
    image: "/holographic-diamond.png"
  },
  {
    title: "AR/VR Development",
    description: "Immersive experiences and virtual environments",
    image: "/holographic-diamond.png"
  },
  {
    title: "Cybersecurity",
    description: "Advanced security solutions and compliance",
    image: "/holographic-diamond.png"
  },
  {
    title: "Data Analytics",
    description: "Business intelligence and predictive analytics",
    image: "/holographic-diamond.png"
  }
];

export default function ServicesBeyondBasics() {
  return (
    <section className="w-full py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mw-1360 px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            BEYOND THE BASICS
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Cutting-edge technologies and specialized services for forward-thinking businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {beyondServices.map((service, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl overflow-hidden hover:border-white/40 transition-all duration-300 p-6 md:p-8">
              <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}