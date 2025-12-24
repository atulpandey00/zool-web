"use client";

const processSteps = [
    { id: 1, title: "Discover", description: "Understand business goals, user needs, and market opportunities." },
    { id: 2, title: "Define", description: "Understand business goals, user needs, and market opportunities." },
    { id: 3, title: "Design", description: "Craft intuitive, engaging, and functional user experiences." },
    { id: 4, title: "Develop", description: "Build scalable, secure, and future-ready digital products." },
    { id: 5, title: "Deploy & Evolve", description: "Measure performance, optimize continuously, and grow with data." }
];

export default function Process() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center py-16 md:py-20 lg:py-24 bg-green">
            {/* Mobile Diamond Background */}
            <div className="absolute inset-0 md:hidden flex flex-col items-center justify-center z-0">
                <Diamond className="absolute top-[400px] left-1/2 -translate-x-1/2 translate-y- opacity-30 scale-200" />
              
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[350px] md:max-w-7xl mw-1360 px-4 md:px-6 lg:px-8 py-16 md:py-0 flex flex-col items-center justify-center min-h-[1241px] md:min-h-0">

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 md:mb-12 lg:mb-16 text-center">
                    Our Process
                </h2>

                {/* Desktop Layout (lg and above) */}
                <div className="hidden lg:block relative w-full h-[500px] xl:h-[600px]">
                    {/* Diamonds */}
                    <Diamond className="absolute -top-25 -left-10 opacity-100 scale-75 xl:scale-120" />
                    <Diamond className="absolute -top-25 -right-10 opacity-100 scale-75 xl:scale-120" />
                    <Diamond className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[2px] opacity-100 scale-75 xl:scale-120" />

                    {/* Cards */}
                    <div className="absolute top-0 left-8 xl:left-16 z-30">
                        <ProcessCard step={processSteps[0]} />
                    </div>

                    <div className="absolute bottom-0 left-8 xl:left-16 z-30">
                        <ProcessCard step={processSteps[1]} />
                    </div>

                    <div className="absolute top-42 left-1/2 -translate-x-1/2 z-30">
                        <ProcessCard step={processSteps[2]} />
                    </div>

                    <div className="absolute top-0 right-8 xl:right-16 z-30">
                        <ProcessCard step={processSteps[3]} />
                    </div>

                    <div className="absolute bottom-0 right-8 xl:right-16 z-30">
                        <ProcessCard step={processSteps[4]} />
                    </div>
                </div>

                {/* Tablet Layout (md to lg) */}
                <div className="hidden md:block lg:hidden w-full">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <ProcessCard step={processSteps[0]} />
                        <ProcessCard step={processSteps[1]} />
                    </div>
                    <div className="flex justify-center mb-8">
                        <ProcessCard step={processSteps[2]} />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <ProcessCard step={processSteps[3]} />
                        <ProcessCard step={processSteps[4]} />
                    </div>
                </div>

                {/* Mobile Layout (sm and below) */}
                <div className="block md:hidden w-full space-y-6  z-20">
                    {processSteps.map((step) => (
                        <div
                            key={step.id}
                            className="sticky top-[80px]"
                        >
                            <ProcessCard step={step} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

/* Diamond Component */
function Diamond({ className = "" }: { className?: string }) {
    return (
        <img
            src="/holographic-diamond.png"
            alt="Process Flow"
            className={`object-contain pointer-events-none ${className}`}
            style={{
                width: '300px',
                height: '275px',
                transform: 'rotate(0deg)',
                opacity: 1
            }}
        />
    );
}

/* Card */
function ProcessCard({ step }: { step: typeof processSteps[0] }) {
    return (
        <div className="relative w-full max-w-sm mx-auto">
            <div className="
                w-[350px] sm:w-[300px] lg:w-[350px]
                h-[229px] lg:h-[229px]
                px-6 lg:px-[35px] 
                pt-[80px] lg:pt-[80px] 
                pb-[2px] lg:pb-[2px]
                flex flex-col gap-2.5 lg:gap-[10px]
                rounded-[20px]
                border border-[#212121]
                bg-white/10
                backdrop-blur-[10px]
                shadow-[0px_4px_10px_0px_rgba(255,255,255,0.25)]
                mx-auto
            ">
                {/* Step Number */}
                <div className="
                    w-8 h-8 sm:w-10 sm:h-10
                    rounded-full
                    bg-[#212121]
                    text-white
                    text-sm sm:text-lg font-bold
                    flex items-center justify-center
                ">
                    {step.id}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-bold text-[#212121] leading-tight">
                    {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm lg:text-[14px] text-[#3F3F3F] leading-[1.4]">
                    {step.description}
                </p>
            </div>
        </div>
    );
}
