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
        <section className="py-16 md:py-20">
            <div className="max-w-[1360px] mw-1360 px-4 md:px-6 lg:px-20">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-10">
                    Our Works
                </h2>

                {/* Work Cards */}
                <div className="flex flex-col gap-8 md:gap-16 lg:gap-20">
                    {works.map((work, i) => (
                        <div
                            key={i}
                            className="sticky top-[80px] md:top-[120px] w-full max-w-[398px] h-[500px] mx-auto md:max-w-none md:h-auto mb-4 md:mb-8"
                        >
                            {/* Image */}
                            <div className="w-full h-full overflow-hidden rounded-2xl relative">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    width={1200}
                                    height={750}
                                    className="w-full h-full object-cover object-center md:-translate-y-25 transition-transform duration-500"
                                    style={{
                                        width: 1200,
                                        height: 750,
                                        gap: '10px',
                                        transform: 'rotate(0deg)',
                                        opacity: 1,
                                        borderRadius: '16px'
                                    }}
                                />

                                {/* Arrow Button - Top Right */}
                                <button
                                    className=" absolute top-4 right-4 w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg  transition z-10"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-600"
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
                                className="absolute bottom-0 left-0 right-0 backdrop-blur-sm bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-b-2xl flex items-end"
                                style={{
                                    width: 1200,
                                    height: 114.00006866455078,
                                    gap: '16px',
                                    transform: 'rotate(0deg)',
                                    opacity: 1,
                                    borderTopWidth: '1px',
                                    padding: '24px'
                                }}
                            >
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base md:text-xl font-semibold text-white drop-shadow-lg leading-tight">
                                        {work.title} – {work.subtitle}
                                    </h3>
                                    <p className="text-gray-200 text-xs md:text-sm mt-1 md:mt-2 drop-shadow-md">
                                        <span className="block md:hidden">
                                            {work.description.length > 50 ? `${work.description.substring(0, 50)}...` : work.description}
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