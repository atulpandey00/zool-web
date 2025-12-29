"use client";

import Image from "next/image";

type LogoType = {
    src: string;
    alt: string;
};

const logos: LogoType[] = [
    { src: "/Gemini - logo.png", alt: "Gemini" },
    { src: "/AtRightAngle-logo.png", alt: "At Right Angles" },
    { src: "/AzimFoundation-logo.png", alt: "Azim Premji Foundation" },
    { src: "/NewyorkWomenFoundation-logo.png", alt: "The New York Women's Foundation" },
    { src: "/iwonder-logo.png", alt: "i wonder" },
    { src: "/healthWorker-logo.png", alt: "The Health Worker" },
];

export default function Trusted() {
    return (
        <section className="py-8 sm:py-12  transition-colors">
            <div className="container mw-1360 px-6 lg:px-12">
                {/* Header with yellow star */}
                <div className="text-center mb-8 sm:mb-12">
                    {/* Desktop: Star inline with text */}
                    <div className="hidden sm:flex items-center justify-center gap-2">
                        <svg className="w-6 h-6 text-yellow-400 fill-current flex-shrink-0" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <h2 className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl font-medium text-center leading-relaxed">
                            Trusted by Industry Leaders Worldwide
                        </h2>
                    </div>
                    
                    {/* Mobile: Star above text */}
                    <div className="sm:hidden flex flex-col items-center gap-3">
                        <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <h2 className="text-gray-700 dark:text-gray-300 text-lg font-medium text-center leading-relaxed">
                            Trusted by Industry Leaders Worldwide
                        </h2>
                    </div>
                </div>

                {/* Desktop Logo Grid - Single Line */}
                <div className="hidden lg:flex justify-center items-center overflow-x-auto">
                    <div className="flex items-center gap-2 min-w-max">
                        {logos.map((logo, index) => (
                            <div key={index} className="flex items-center">
                                {/* Vertical divider - only show between logos, not before first or after last */}
                                {index > 0 && (
                                    <div className="w-px h-16 bg-gray-300 dark:bg-gray-600 mr-2"></div>
                                )}
                                <div 
                                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 dark:invert hover:dark:invert-0 transition-all duration-300"
                                    style={{
                                        width: '193.55px',
                                        height: '100px',
                                        paddingTop: '8.06px',
                                        paddingRight: '19.35px',
                                        paddingBottom: '8.06px',
                                        paddingLeft: '19.35px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={155}
                                        height={84}
                                        className="object-contain max-w-full max-h-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Logo Display - All logos scroll continuously */}
                <div className="lg:hidden overflow-hidden">
                    {/* Animated Logos - All except desktop */}
                    <div className="xl:hidden overflow-hidden">
                        <div className="flex animate-scroll-mobile items-center">
                            {[...logos, ...logos].map((logo, index) => (
                                <div key={index} className="flex items-center flex-shrink-0">
                                    {index > 0 && (
                                        <div className="w-px h-12 bg-gray-400 dark:bg-gray-600 mx-2" />
                                    )}
                                    <div 
                                        className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 dark:invert hover:dark:invert-0 transition-all duration-300"
                                        style={{
                                            width: '193.55px',
                                            height: '100px',
                                            paddingTop: '8.06px',
                                            paddingRight: '19.35px',
                                            paddingBottom: '8.06px',
                                            paddingLeft: '19.35px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={155}
                                            height={84}
                                            className="object-contain max-w-full max-h-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                @keyframes scroll-mobile {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-scroll-mobile {
                    animation: scroll-mobile 25s linear infinite;
                }
            `}</style>
        </section>
    );
}