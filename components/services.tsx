"use client";

import Image from "next/image";

const services = [
    {
        title: "UI UX Design",
        description: "Human-centered, visually striking, and purposeful interfaces.",
        tags: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
        img: "/card_img1.png",
    },
    {
        title: "Development",
        description: "High-performance web and mobile applications, built for growth.",
        tags: ["Web Development", "Mobile Apps", "Frontend & Backend", "API Integration"],
        img: "/card_img2.png",
    },
    {
        title: "Employee Outsourcing",
        description: "Hire global tech talent — flexible, skilled, and ready to scale.",
        tags: ["Dedicated Staff Outsourcing", "Technical Consulting", "Maintenance & Support", "Strategic Planning", "Quality Assurance & Testing", "Digital Transformation"],
        img: "/card_img3.png",
    },
];

export default function Services() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
                    Our Services
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl bg-black text-white shadow-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 min-h-[400px]"
                        >
                            {/* Purple gradient background effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Animated purple glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-transparent opacity-0 group-hover:opacity-70 blur-xl transition-all duration-700" />

                            {/* Default state - Image visible */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between group-hover:opacity-0 group-hover:pointer-events-none transition-all duration-500">
                                {/* Header */}
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 text-base leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Image */}
                                <div className="relative flex-1 flex items-center justify-center mt-8">
                                    <Image
                                        src={service.img}
                                        alt={service.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-full object-contain max-h-48"
                                    />
                                </div>

                                {/* Arrow */}
                                <div className="absolute bottom-6 right-6 w-8 h-8 flex items-center justify-center">
                                    <svg 
                                        className="w-6 h-6 text-white" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </div>
                            </div>

                            {/* Hover state - Service tags visible */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500">
                                {/* Header */}
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Service Tags */}
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="flex flex-wrap gap-3">
                                        {service.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-lg text-sm font-medium border border-purple-500/30 bg-purple-900/20 transition-all duration-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="absolute bottom-6 right-6 w-8 h-8 flex items-center justify-center">
                                    <svg 
                                        className="w-6 h-6 text-white translate-x-1 -translate-y-1" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </div>
                            </div>

                            {/* Border glow effect */}
                            <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}