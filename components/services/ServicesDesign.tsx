"use client";

export default function ServicesDesign() {
  return (
    <section className="w-full max-w-[1920px] h-[562px] mx-auto pt-20 px-[280px] pb-10 bg-black text-white opacity-100">
      <div className="flex gap-20 h-full">
        {/* Left Side - Content */}
        <div className="w-[650px] h-[442px] flex flex-col gap-4 opacity-100">
          {/* Title */}
          <h2 className="text-4xl font-bold text-white">
            DESIGN
          </h2>
          
          {/* Description */}
          <div className="w-[574px] h-[108px] flex flex-col gap-4 opacity-100">
            <p className="text-white text-l">
              We create stunning, user-centered designs that not only look great
              <br />
              but drive real business results.
            </p>
          </div>
          
          {/* What we do section */}
          <div className="w-[650px] h-[196px] flex flex-col gap-4 opacity-100">
            <h3 className="text-2xl font-medium text-white">
              What we do
            </h3>
            
            {/* Service Tags */}
            <div className="flex flex-col gap-4">
              {/* First row - single tag */}
              <div className="flex">
                <div className="w-[350px] h-[37px] bg-white/20 text-black opacity-100 rounded-lg px-3 py-1.5 flex items-start justify-start backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                  <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" >
                    UX Research & User Journey Mapping
                  </span>
                </div>
              </div>
              
              {/* Second row - two tags */}
              <div className="flex gap-2">
                <div className="w-[350px] h-[37px] bg-white/20 text-black opacity-100 rounded-lg px-3 py-1.5 flex items-start justify-center backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                  <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" >
                    UI Design & High-Fidelity Prototypes
                  </span>
                </div>
                <div className="w-[350px] h-[37px] bg-white/20 text-black opacity-100 rounded-lg px-3 py-1.5 flex items-start justify-center backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                  <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" >
                    Mobile App & Web Interface Design
                  </span>
                </div>
              </div>
              
              {/* Third row - single tag */}
              <div className="flex">
                <div className="w-[380px] h-[37px] bg-white/20 text-black opacity-100 rounded-lg px-3 py-1.5 flex items-start justify-center backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                  <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" >
                    Wireframes, Design Systems & Style Guides
                  </span>
                </div>
              </div>
              
              {/* Fourth row - two tags */}
              <div className="flex gap-2">
                <div className="w-[320px] h-[37px] bg-white/20 text-black opacity-100 rounded-lg px-3 py-1.5 flex items-start justify-center backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                  <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" >
                    Branding Elements & Visual Identity
                  </span>
                </div>
                <div className="w-[290px] h-[37px] bg-white/20 text-black opacity-100 rounded-lg px-3 py-1.5 flex items-start justify-center backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                  <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" >
                    Usability Testing & Design Audit
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Video Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-[400px] rounded-2xl overflow-hidden relative">
            <video 
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/Mobile_App.mp4" type="video/mp4" />
              <source src="/your-video-file.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            {/* Gradient Overlay */}
            <div 
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 28.35%, rgba(0, 0, 0, 0) 77.24%, #000000 100%), linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 24.04%, rgba(0, 0, 0, 0) 69.71%, #000000 100%)`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}