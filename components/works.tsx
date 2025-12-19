import Image from "next/image";

const works = [
  {
    id: 1,
    title: "Gemini",
    subtitle: "Website & Mobile App",
    description: "Lorem ipsum dolor sit amet consectetur. Ut cursus porta augue mauris ut lorem mauris dolor lorem.",
    image: "/work-gemini.png",
    category: "Web Development"
  },
  {
    id: 2,
    title: "At Right Angle",
    subtitle: "Magazine Website design",
    description: "Lorem ipsum dolor sit amet consectetur. Ut cursus porta augue mauris ut lorem mauris dolor lorem.",
    image: "/work-right-angle.jpg",
    category: "Web Design"
  },
  {
    id: 3,
    title: "Azim Premji Foundation",
    subtitle: "Educational Web Platform",
    description: "Lorem ipsum dolor sit amet consectetur. Ut cursus porta augue mauris ut lorem mauris dolor lorem.",
    image: "/work-Azim-premji.jpg",
    category: "Web Platform"
  },
  {
    id: 4,
    title: "NYWF",
    subtitle: "Donation & Impact Website",
    description: "Lorem ipsum dolor sit amet consectetur. Ut cursus porta augue mauris ut lorem mauris dolor lorem.",
    image: "/work-nywf.jpg",
    category: "Web Development"
  }
];

export default function Works() {
    return (
        <section 
            className="bg-[#f3f3f3]" 
            style={{
                width: '1920px',
                height: '3549px',
                paddingTop: '80px',
                paddingBottom: '80px',
                paddingLeft: '280px',
                paddingRight: '280px',
                opacity: 1
            }}
        >
            <div className="w-full h-full">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Our Works
                </h2>

                {/* Work Cards */}
                <div className="flex flex-col" style={{ gap: '40px' }}>

                    {works.map((work, i) => (
                        <div
                            key={i}
                            className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="w-full aspect-video sm:aspect-[16/10] overflow-hidden">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    width={800}
                                    height={500}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-6">
                                <h3 className="text-lg sm:text-xl font-semibold">{work.title}</h3>
                                <p className="text-gray-500 text-sm sm:text-base">{work.subtitle}</p>

                                <p className="text-gray-600 text-sm sm:text-base mt-2">
                                    {work.description}
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
                <div className="text-center mt-10">
                    <button className="px-6 py-2 border border-gray-400 rounded-full hover:bg-gray-100 transition">
                        View More →
                    </button>
                </div>

            </div>
        </section>
    );
}
