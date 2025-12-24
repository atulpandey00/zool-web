import Image from "next/image";

const works = [
    {
        id: 1,
        title: "Gemini",
        subtitle: "Website & Mobile App",
        description: "Lorem ipsum dolor sit amet consectetur. Ut cursus porta augue mauris ut lorem mauris dolor lorem.",
        image: "/workGemini.png",
        category: "Web Development"
    },
    {
        id: 2,
        title: "At Right Angle",
        subtitle: "Magazine Website design",
        description: "Lorem ipsum dolor sit amet consectetur. Ut cursus porta augue mauris ut lorem mauris dolor lorem.",
        image: "/work-right-angle.png",
        category: "Web Design"
    },
    {
        id: 3,
        title: "Azim Premji Foundation",
        subtitle: "Educational Web Platform",
        description: "Lorem ipsum dolor sit amet consectetur. Ut cursus porta augue mauris ut lorem mauris dolor lorem.",
        image: "/work-Azim-premji.png",
        category: "Web Platform"
    },
    {
        id: 4,
        title: "NYWF",
        subtitle: "Donation & Impact Website",
        description: "Lorem ipsum dolor sit amet consectetur. Ut cursus porta augue mauris ut lorem mauris dolor lorem.",
        image: "/work-nywf.png",
        category: "Web Development"
    }
];

export default function Works() {
    return (
        <section className="py-8 md:py-16 lg:py-20">
            <div className="max-w-[1360px] mw-1360 px-4 md:px-6 lg:px-20">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-10">
                    Our Works
                </h2>

                {/* Work Cards */}
                <div className="flex flex-col gap-4 md:gap-16 xl:gap-16 xl:w-[1200px] xl:mx-auto">
                    {works.map((work, i) => (
                        <div
                            key={i}
                            className="sticky top-[60px] sm:top-[80px] md:top-[100px] lg:top-[120px] w-full max-w-[398px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[500px] xl:w-[1200px] xl:max-w-[1200px] h-[400px] sm:h-[420px] md:h-[500px] lg:h-[550px] xl:h-[600px] mx-auto mb-2 sm:mb-4 md:mb-8 lg:mb-10"
                        >
                            {/* Image */}
                            <div className="w-full h-full overflow-hidden relative" style={{ borderRadius: '16px' }}>
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    width={1200}
                                    height={750}
                                    className="w-full h-full object-cover object-center transition-transform duration-500 -translate-y-8 md:-translate-y-12 lg:-translate-y-30"
                                    style={{ borderRadius: '16px' }}
                                />

                                {/* Arrow Button - Top Right */}
                                <button className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg transition z-10">
                                    <svg
                                        className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M7 17L17 7M17 7H9M17 7V15"
                                        />
                                    </svg>
                                </button>

                            </div>

                            {/* Content Overlay */}
                            <div 
                                className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end p-4 sm:p-5 md:p-6 lg:p-8 min-h-[100px] sm:min-h-[110px] md:min-h-[120px] lg:min-h-[130px]"
                                style={{ borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}
                            >
                                <div className="flex-1 min-w-0 w-full">
                                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white drop-shadow-lg leading-tight mb-1 sm:mb-2">
                                        {work.title} – {work.subtitle}
                                    </h3>
                                    <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg drop-shadow-md line-clamp-2 sm:line-clamp-3">
                                        <span className="block sm:hidden">
                                            {work.description.length > 40 ? `${work.description.substring(0, 40)}...` : work.description}
                                        </span>
                                        <span className="hidden sm:block md:hidden">
                                            {work.description.length > 60 ? `${work.description.substring(0, 60)}...` : work.description}
                                        </span>
                                        <span className="hidden md:block">
                                            {work.description}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Works Button */}
                <div className="text-center mt-8 md:mt-10">
                    <button className="px-6 md:px-8 py-3 md:py-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 md:gap-3 mx-auto text-sm md:text-lg font-medium text-black">
                        View All Works
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}