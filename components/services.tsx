"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "UI UX Design",
    description:
      "Human-centered, visually striking, and purposeful interfaces.",
    img: "/card_img1.png",
    tags: ["Wireframing", "Prototyping", "Usability Testing", "Visual Design", "Design Systems", "Iconography", "Micro-Interactions"]
  },
  {
    title: "Development",
    description:
      "High-performance web and mobile applications, built for growth.",
    img: "/card_img2.png",
    tags: ["Web Development", "Mobile Apps", "Frontend & Backend", "API Integration"]
  },
  {
    title: "Employee Outsourcing",
    description:
      "Hire global tech talent — flexible, skilled, and ready to scale.",
    img: "/card_img3.png",
    tags: ["Dedicated Staff Outsourcing", "Technical Consulting", "Maintenance & Support", "Strategic Planning", "Quality Assurance & Testing", "Digital Transformation"]
  },
];

export default function Services() {
  return (
    <section className="w-full bg-white py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="max-w-7xl mw-1360 px-6 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
          Our Services
        </h2>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-end justify-center gap-6 xl:gap-10">
          <div className="mb-[60px]">
            <ServiceCard {...services[0]} isFirst />
          </div>
          <ServiceCard {...services[1]} center isSecond />
          <div className="mb-[60px]">
            <ServiceCard {...services[2]} large />
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-6 place-items-center">
          <ServiceCard {...services[0]} isFirst />
          <ServiceCard {...services[1]} center isSecond />
          <div className="col-span-2 flex justify-center">
            <ServiceCard {...services[2]} large />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden gap-[55px] items-center px-4">
          <ServiceCard {...services[0]} isFirst />
          <ServiceCard {...services[1]} center isSecond />
          <ServiceCard {...services[2]} large />
        </div>
      </div>
    </section>
  );
}

/* ---------------- SHADCN CARD ---------------- */

function ServiceCard({
  title,
  description,
  img,
  tags,
  center = false,
  large = false,
  isFirst = false,
  isSecond = false,
}: {
  title: string;
  description: string;
  img: string;
  tags: string[];
  center?: boolean;
  large?: boolean;
  isFirst?: boolean;
  isSecond?: boolean;
}) {
  return (
    <Card className="group relative w-[398px] max-w-[398px] sm:w-[300px] lg:w-[320px] h-[398px] sm:h-[380px] lg:h-[400px] rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] bg-black overflow-hidden border-none shadow-2xl cursor-pointer" style={{perspective: '1000px'}}>
      {/* Purple gradient background image */}
      <div className="absolute inset-0">
        <Image
          src="/card_img.png"
          alt="Purple gradient background"
          fill
          className="object-cover opacity-80 scale-110"
          priority
        />
      </div>

      {/* Default Content */}
      <CardContent className="absolute inset-0 z-10 p-0 h-full flex flex-col transition-transform duration-2000 ease-in-out group-hover:-translate-x-full">
        {/* Text */}
        <div className="mb-4 sm:mb-6 px-4 sm:px-6 pt-4 sm:pt-6">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image - responsive sizing */}
        <div
          className={`flex-1 flex items-end ${isFirst ? "pb-1 sm:pb-2" : "pb-4 sm:pb-6"} ${
            center ? "justify-center" : "justify-start"
          }`}
        >
          <div
            className={`relative ${
              large 
                ? "w-80 h-60 sm:w-72 sm:h-52 lg:w-80 lg:h-60" 
                : isFirst || isSecond 
                ? "w-80 h-60 sm:w-72 sm:h-52 lg:w-80 lg:h-60" 
                : "w-72 h-54 sm:w-64 sm:h-46 lg:w-72 lg:h-52"
            }`}
          >
            <Image
              src={img}
              alt={title}
              fill
              className={`object-contain scale-110 md:scale-100 ${
                center ? "object-center-bottom" : "object-left-bottom"
              }`}
            />
          </div>
        </div>

        {/* Arrow - responsive sizing */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-white sm:w-6 sm:h-6"
          >
            <path 
              d="M7 17L17 7M17 7H7M17 7V17" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </CardContent>

      {/* Hover Content */}
      <CardContent className="absolute inset-0 z-10 p-0 h-full flex flex-col transition-transform duration-2000 ease-in-out translate-x-full group-hover:translate-x-0">
        {/* Text */}
        <div className="mb-6 px-4 sm:px-6 pt-4 sm:pt-6">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Service Tags */}
        <div className="flex-1 px-4 sm:px-6 pb-16">
          {/* UI UX Design - Mixed Layout */}
          {isFirst && (
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-sm px-3 py-1.5 text-xs text-white hover:backdrop-blur-md transition-all duration-200" style={{backdropFilter: 'blur(4px)', backgroundColor: '#FFFFFF26', border: '1px solid #FFFFFF26'}}>
                  {tags[0]}
                </div>
                <div className="rounded-sm px-3 py-1.5 text-xs text-white hover:backdrop-blur-md transition-all duration-200" style={{backdropFilter: 'blur(4px)', backgroundColor: '#FFFFFF26', border: '1px solid #FFFFFF26'}}>
                  {tags[1]}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-sm px-3 py-1.5 text-xs text-white hover:backdrop-blur-md transition-all duration-200" style={{backdropFilter: 'blur(4px)', backgroundColor: '#FFFFFF26', border: '1px solid #FFFFFF26'}}>
                  {tags[2]}
                </div>
                <div className="rounded-sm px-3 py-1.5 text-xs text-white hover:backdrop-blur-md transition-all duration-200" style={{backdropFilter: 'blur(4px)', backgroundColor: '#FFFFFF26', border: '1px solid #FFFFFF26'}}>
                  {tags[3]}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-sm px-3 py-1.5 text-xs text-white hover:backdrop-blur-md transition-all duration-200" style={{backdropFilter: 'blur(4px)', backgroundColor: '#FFFFFF26', border: '1px solid #FFFFFF26'}}>
                  {tags[4]}
                </div>
                <div className="rounded-sm px-3 py-1.5 text-xs text-white hover:backdrop-blur-md transition-all duration-200" style={{backdropFilter: 'blur(4px)', backgroundColor: '#FFFFFF26', border: '1px solid #FFFFFF26'}}>
                  {tags[5]}
                </div>
              </div>
              <div className=" rounded-sm px-3 py-1.5 text-xs text-white hover:backdrop-blur-md transition-all duration-200" style={{backdropFilter: 'blur(4px)', backgroundColor: '#FFFFFF26', border: '1px solid #FFFFFF26'}}>
                {tags[6]}
              </div>
            </div>
          )}

          {/* Development - 2x2 Grid */}
          {isSecond && (
            <div className="grid grid-cols-2 gap-3">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="rounded-sm px-3 py-1.5 text-xs text-white hover:backdrop-blur-md transition-all duration-200"
                  style={{backdropFilter: 'blur(4px)', backgroundColor: '#FFFFFF26', border: '1px solid #FFFFFF26'}}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}

          {/* Employee Outsourcing - Single Column */}
          {!isFirst && !isSecond && (
            <div className="space-y-2">
              {tags.map((tag, index) => (
                <div
                  key={index}
                  className="rounded-sm px-3 py-1.5 text-xs text-white hover:backdrop-blur-md transition-all duration-200"
                  style={{backdropFilter: 'blur(4px)', backgroundColor: '#FFFFFF26', border: '1px solid #FFFFFF26'}}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Arrow - responsive sizing */}
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-white sm:w-6 sm:h-6"
          >
            <path 
              d="M7 17L17 7M17 7H7M17 7V17" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
