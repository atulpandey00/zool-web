"use client";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "/avatar-1.jpg",
    content: "Working with this team transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.",
    company: "TechStart"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager, InnovateCorp",
    avatar: "/avatar-2.jpg", 
    content: "The development process was seamless and the final product delivered exactly what we envisioned. Highly recommend their services.",
    company: "InnovateCorp"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, CreativeStudio",
    avatar: "/avatar-3.jpg",
    content: "Professional, reliable, and creative. They brought our ideas to life with exceptional quality and delivered on time.",
    company: "CreativeStudio"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO, DataFlow",
    avatar: "/avatar-4.jpg",
    content: "Outstanding technical expertise and project management. They delivered a robust solution that scaled perfectly with our growing business needs.",
    company: "DataFlow"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Marketing Director, BrandForge",
    avatar: "/avatar-5.jpg",
    content: "Exceptional collaboration and results-driven approach. Our new platform has significantly improved user engagement and conversion rates.",
    company: "BrandForge"
  }
];

export default function Testimonials() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-16 md:py-20 lg:py-24">
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[430px] md:max-w-7xl mw-1360 px-4 md:px-8">
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
          Our Work Speaks Through Our Clients
        </h2>

        {/* Mobile Layout - Horizontal Scroll */}
        <div className="block md:hidden w-full overflow-x-auto scrollbar-hide pl-4">
          <div className="flex gap-7 pb-4">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex gap-8 overflow-x-auto scrollbar-hide pl-[360px]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
      </div>
    </section>
  );
}

/* Testimonial Card Component */
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="relative flex-shrink-0">
      <div
        className="
          w-[398px] md:w-[434.67px] 
          h-[338px] md:min-h-[338px]
          px-4 md:px-[16px] 
          py-8 md:py-[32px]
          flex flex-col
          rounded-[20px]
          border border-black
        "
        style={{ backgroundColor: '#AAAAAA33' }}
      >
        {/* Quotation Mark */}
        <div className="text-4xl md:text-6xl text-gray-500 leading-none mb-4 md:mb-4 font-serif">"</div>
        
        {/* Content */}
        <div className="flex-1 mb-6">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            {testimonial.content}
          </p>
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Avatar */}
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-gray-600 flex items-center justify-center relative">
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.parentElement?.querySelector('.fallback-initials') as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="fallback-initials absolute inset-0 hidden items-center justify-center text-white font-semibold text-sm">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>

          {/* Name & Company */}
          <div>
            <h4 className="text-gray-900 font-bold text-base md:text-lg">
              {testimonial.name}
            </h4>
            <p className="text-gray-600 text-xs md:text-sm">
              {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}