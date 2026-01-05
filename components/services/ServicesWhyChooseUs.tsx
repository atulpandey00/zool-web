"use client";

import { Truck, User, Layers, Home, Tag, Headphones } from "lucide-react";

const benefits = [
  {
    title: "Fast Delivery",
    description: "Most projects delivered in 2-4 weeks without compromising quality",
    icon: Truck
  },
  {
    title: "User-Focused",
    description: "Every decision backed by research and real user data",
    icon: User
  },
  {
    title: "Modern Stack",
    description: "Latest technologies and best practices for future-proof solutions",
    icon: Layers
  },
  {
    title: "Transparent Process",
    description: "Regular updates, clear communication, no surprises",
    icon: Home
  },
  {
    title: "Flexible Pricing",
    description: "Fixed-price projects or flexible retainers. Whatever works for you",
    icon: Tag
  },
  {
    title: "Ongoing Support",
    description: "We stick around after launch to ensure continued success",
    icon: Headphones
  }
];

export default function ServicesWhyChooseUs() {
  return (
    <section className="w-full  via-gray-900 to-black text-white relative overflow-hidden" style={{ width: '1920px', height: '914px' }}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative mx-auto px-20 h-full flex flex-col justify-center" style={{ maxWidth: '1360px' }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A streamlined, transparent, and collaborative workflow built
            <br /> for quality and speed.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const isFirstTypeCard = index === 0 || index === 2 || index === 4; // Cards 1, 3, 5
            const isSecondTypeCard = index === 1 || index === 3 || index === 5; // Cards 2, 4, 6
            
            return (
              <div 
                key={index} 
                className={`group relative rounded-2xl hover:border-gray-600/50 transition-all duration-300 backdrop-blur-sm flex flex-col items-center text-center ${
                  isFirstTypeCard 
                    ? 'border border-gray-700/50' 
                    : 'bg-gray-800/50 border border-gray-700/50'
                }`}
                style={isFirstTypeCard ? {
                  width: '389px',
                  height: '283px',
                  paddingTop: '56px',
                  paddingRight: '32px',
                  paddingBottom: '56px',
                  paddingLeft: '32px',
                  borderRadius: '14px',
                  background: '#2A2A2A'
                } : isSecondTypeCard ? {
                  width: '389px',
                  height: '283px',
                  paddingTop: '56px',
                  paddingRight: '32px',
                  paddingBottom: '56px',
                  paddingLeft: '32px',
                  borderRadius: '14px',
                  background: '#151515',
                  gap: '16px'
                } : {
                  padding: '24px'
                }}
              >
                <div className="mb-6">
                  <IconComponent className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}