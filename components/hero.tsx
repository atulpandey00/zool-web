"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="w-full overflow-hidden">
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-start pt-6 lg:pt-8 xl:pt-10">
                <div className="container mw-1360 grid grid-cols-5 gap-6 lg:gap-8 px-4 lg:px-8 xl:px-12">
                    <div className="flex flex-col justify-center text-left col-span-2">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight text-black">
                            WE DESIGN.
                        </h1>

                        <p className="text-base lg:text-lg xl:text-xl text-gray-600 max-w-lg leading-relaxed mb-8 lg:mb-10">
                            Where creativity meets intelligent technology — and talent powers transformation.
                        </p>

                        <div className="flex mb-50">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105">
                                Start a Project →
                            </Button>
                        </div>

                        {/* Client Avatars */}
                        <div className="flex items-center gap-2 mb-2">
                            <div className="flex -space-x-3">
                                <Image src="/clients.png" alt="Clients" width={90} height={90} className="rounded-full" />
                            </div>
                            <div className="leading-tight">
                                <p className="text-2xl font-bold text-gray-900">50+</p>
                                <p className="text-[#727272] text-base">Global Clients</p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-4 lg:gap-6 xl:gap-8">
                            <div className="text-left">
                                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black">100+</h3>
                                <p className="text-[#727272] text-xs lg:text-sm">Projects Delivered</p>
                            </div>

                            <div className="border-l border-gray-300 pl-4 lg:pl-6 xl:pl-8">
                                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black">10+</h3>
                                <p className="text-[#727272] text-xs lg:text-sm">Industries</p>
                            </div>

                            <div className="border-l border-gray-300 pl-4 lg:pl-6 xl:pl-8">
                                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black">14+</h3>
                                <p className="text-[#727272] text-xs lg:text-sm">Years of Innovation</p>
                            </div>
                        </div>
                    </div>

                    {/* AI Head Image - Desktop */}
                    <div className="flex justify-center items-start col-span-3 -mt-20">
                        <div className="relative w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]">
                            <Image
                                src="/Hero-banner-img (1).png"
                                alt="AI Design Face"
                                fill
                                priority
                                className="object-contain drop-shadow-2xl scale-90 lg:scale-90 xl:scale-97"
                                sizes="(max-width: 1024px) 80vw, (max-width: 1280px) 60vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden flex flex-col min-h-screen pt-16 sm:pt-20 px-4 sm:px-6">
                {/* Mobile Header */}
                <div className="text-center mb-8 mt-2">
                    <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black mb-2">
                        WE DESIGN.
                    </h1>

                    <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed mb-5 max-w-xs xs:max-w-sm sm:max-w-md mx-auto">
                        Where creativity meets intelligent technology — and talent powers transformation.
                    </p>

                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-300">
                        Start a Project →
                    </Button>
                </div>

                {/* Mobile AI Image */}
                <div className="flex justify-center items-center flex-1  ">
                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-[400px] xs:h-[450px] sm:h-[500px] md:h-[550px]">
                        <Image
                            src="/Hero-banner-img (1).png"
                            alt="AI Design Face"
                            fill
                            priority
                            className="object-contain drop-shadow-2xl scale-150 sm:scale-[1.3] md:scale-[1.4]"
                            sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 70vw"
                        />
                    </div>
                </div>

                {/* Mobile Client Avatars */}
                <div className="flex items-center justify-center gap-3 mb-6 mt-8">
                    <div className="flex -space-x-3">
                        <Image src="/clients.png" alt="Clients" width={90} height={90} className="rounded-full" />
                    </div>
                    <div className="leading-tight">
                        <p className="text-2xl font-bold text-gray-900">50+</p>
                        <p className="text-base text-[#727272]">Global Clients</p>
                    </div>
                </div>

                {/* Mobile Stats */}
                <div className="flex justify-center gap-6 sm:gap-8 pb-8">
                    <div className="text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold text-black">100+</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">Projects Delivered</p>
                    </div>

                    <div className="border-l border-gray-300 pl-6 sm:pl-8 text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold text-black">10+</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">Industries</p>
                    </div>

                    <div className="border-l border-gray-300 pl-6 sm:pl-8 text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold text-black">14+</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">Years of Innovation</p>
                    </div>
                </div>
            </div>
        </section>
    );
}