"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
    return (
        <section className="w-full min-h-screen">
            {/* Desktop Layout */}
            <div className="hidden lg:flex items-start pt-10">
                <div className="container mx-auto grid grid-cols-5 gap-8 px-6 lg:px-12">
                    <div className="flex flex-col justify-center text-left col-span-2">
                        <h1 className="text-6xl xl:text-7xl font-bold leading-tight text-black">
                            WE DESIGN.
                        </h1>

                        <p className="text-lg xl:text-l text-gray-600 max-w-lg leading-relaxed mb-10">
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
                                <Image src="/clients.png" alt="Clients" width={70} height={70} className="rounded-full" />
                            </div>
                            <span className="text-gray-700 text-base font-medium">
                                50+ Global Clients
                            </span>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8">
                            <div className="text-left">
                                <h3 className="text-3xl xl:text-4xl font-bold text-black">100+</h3>
                                <p className="text-gray-600 text-sm">Projects Delivered</p>
                            </div>

                            <div className="border-l border-gray-300 pl-8">
                                <h3 className="text-3xl xl:text-4xl font-bold text-black">10+</h3>
                                <p className="text-gray-600 text-sm">Industries</p>
                            </div>

                            <div className="border-l border-gray-300 pl-8">
                                <h3 className="text-3xl xl:text-4xl font-bold text-black">14+</h3>
                                <p className="text-gray-600 text-sm">Years of Innovation</p>
                            </div>
                        </div>
                    </div>

                    {/* AI Head Image - Desktop */}
                    <div className="flex justify-center items-start col-span-3 -mt-20">
                        <div className="relative w-full max-w-6xl h-[800px] xl:h-[900px] 2xl:h-[1000px]">
                            <Image
                                src="/Hero-banner-img (1).png"
                                alt="AI Design Face"
                                fill
                                priority
                                className="object-contain drop-shadow-2xl scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden flex flex-col min-h-screen pt-20 px-6">
                {/* Mobile Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black mb-6">
                        WE DESIGN.
                    </h1>

                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-sm mx-auto">
                        Where creativity meets intelligent technology — and talent powers transformation.
                    </p>

                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-300">
                        Start a Project →
                    </Button>
                </div>

                {/* Mobile AI Image */}
                <div className="flex justify-center items-center flex-1 mb-8 overflow-hidden">
                    <div className="relative w-full max-w-xl h-[500px] sm:h-[550px]">
                        <Image
                            src="/Hero-banner-img (1).png"
                            alt="AI Design Face"
                            fill
                            priority
                            className="object-contain drop-shadow-2xl scale-[1.5]"
                        />
                    </div>
                </div>

                {/* Mobile Client Avatars */}
                <div className="flex items-center justify-center gap-3 mb-6 mt-8">
                    <div className="flex -space-x-3">
                        <Image src="/clients.png" alt="Clients" width={70} height={70} className="rounded-full" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                        50+ Global Clients
                    </span>
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