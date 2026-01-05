"use client";

export default function ServicesDevelopment() {
  return (
    <section className="w-[1920px] h-[678px] bg-black text-white opacity-100 pt-20 pr-[280px] pb-20 pl-[280px] mx-auto">
      <div className="flex gap-20 h-full">
        {/* Left Side - Video Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-[450px] rounded-2xl overflow-hidden relative">
            <video 
              className="w-full h-full object-cover rounded-2xl scale-110"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/Development_Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Gradient Overlay - Note: Complex gradients still need inline styles */}
            <div 
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 28.35%, rgba(0, 0, 0, 0) 77.24%, #000000 100%), linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 24.04%, rgba(0, 0, 0, 0) 69.71%, #000000 100%)`
              }}
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-[650px] h-[518px] flex flex-col  opacity-100">
          {/* Title */}
          <h2 className="text-4xl font-bold text-white">
            DEVELOPMENT
          </h2>
          
          {/* Description */}
          <div className="w-[574px] h-[108px] flex flex-col gap-4 mt-4 opacity-100">
            <p className="text-white text-l">
              High-performance web and mobile applications, built for growth.
              <br />
              We use cutting-edge technologies and best practices.
            </p>
          </div>
          
          {/* What we do section */}
          <div className="w-[650px] h-[196px] flex flex-col gap-4 opacity-100">
            <h3 className="text-2xl font-medium text-white">
              What we do
            </h3>
            
            {/* Service Tags - Vertical Single Column */}
            <div className="flex flex-col gap-4">
              <div className="w-[380px] h-[37px] bg-white/20 opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm gap-2.5">
                <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal font-manrope">
                  Frontend Development (React, Next.js, Vue)
                </span>
              </div>
              <div className="w-[520px] h-[37px] bg-white/20 opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm gap-2.5">
                <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal font-manrope">
                  Mobile App Development (iOS, Android, Flutter, React Native)
                </span>
              </div>
              <div className="w-[360px] h-[37px] bg-white/20 opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm gap-2.5">
                <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal font-manrope">
                  Backend Development & API Engineering
                </span>
              </div>
              <div className="w-[330px] h-[37px] bg-white/20 opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm gap-2.5">
                <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal font-manrope">
                  Database Architecture & Cloud Setup
                </span>
              </div>
              <div className="w-[350px] h-[37px] bg-white/20 opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm gap-2.5">
                <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal font-manrope">
                  Integrations, Automation & Optimization
                </span>
              </div>
              <div className="w-[410px] h-[37px] bg-white/20 opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm gap-2.5">
                <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal font-manrope">
                  QA Testing, Code Review & Performance Checks
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}