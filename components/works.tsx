import Image from "next/image";

const works = [
    {
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop&crop=center",
        title: "Qwixis – Medical & Health App",
        desc: "A modern medical application designed to streamline communication between patients and healthcare providers.",
    },
    {
        img: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=500&fit=crop&crop=center",
        title: "At Right Angle – Magazine Website Design",
        desc: "A professional magazine-style layout with high readability and engaging visual design.",
    },
    {
        img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&crop=center",
        title: "Laze Fitness – Gym Website / Platform Design",
        desc: "A clean and energetic fitness website built to improve user motivation and brand identity.",
    },
    {
        img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&crop=center",
        title: "NYFIT – Employee Wellness Platform",
        desc: "A wellness platform crafted to support employees' mental and physical health.",
    },
];

export default function Works() {
    return (
        <section className="py-8 sm:py-12 md:py-16 bg-[#f3f3f3]">
            <div className="container mx-auto px-4 sm:px-6">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10">
                    Our Works
                </h2>

                {/* Work Cards */}
                <div className="flex flex-col gap-6 sm:gap-8">

                    {works.map((work, i) => (
                        <div
                            key={i}
                            className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="w-full aspect-video sm:aspect-[16/10] overflow-hidden">
                                <Image
                                    src={work.img}
                                    alt={work.title}
                                    width={800}
                                    height={500}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold">{work.title}</h3>

                                <p className="text-gray-600 text-sm sm:text-base mt-2">
                                    {work.desc}
                                </p>

                                {/* Button */}
                                <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
                                    View Project →
                                </button>
                            </div>
                        </div>
                    ))}

                </div>

                {/* VIEW MORE BUTTON */}
                <div className="text-center mt-8 sm:mt-10">
                    <button className="px-6 py-2 border border-gray-400 rounded-full hover:bg-gray-100 transition">
                        View More →
                    </button>
                </div>

            </div>
        </section>
    );
}
