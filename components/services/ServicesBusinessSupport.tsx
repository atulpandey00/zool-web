"use client";

export default function ServicesBusinessSupport() {
  return (
    <section className="w-full max-w-[1920px] h-[562px] mx-auto pt-20 px-[280px] pb-10 bg-black text-white opacity-100">
      <div className="flex gap-20 h-full">
        {/* Left Side - Content */}
        <div className="w-[650px] h-[442px] flex flex-col gap-4 opacity-100">
          {/* Title */}
          <h2 className="text-4xl font-bold text-white">
            DELIVERY & SUPPORT
          </h2>
          
          {/* Description */}
          <div className="w-[574px] h-[108px] flex flex-col gap-4 opacity-100">
            <p className="text-white text-l">
              From deployment to ongoing maintenance, we ensure your product
              <br />
              runs perfectly and keeps evolving.
            </p>
          </div>
          
          {/* What we do section */}
          <div className="w-[650px] h-[196px] flex flex-col gap-4 opacity-100">
            <h3 className="text-2xl font-medium text-white">
              What we do
            </h3>
            
            {/* Service Tags */}
            <div className="flex flex-col gap-4">
              {/* First row - two tags */}
              <div className="flex gap-4">
                <div className="w-[300px] h-[37px] bg-white/20 opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                  <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" style={{ fontFamily: 'Manrope' }}>
                    Product Launch & Go-Live Planning
                  </span>
                </div>
                <div className="w-[260px] h-[37px] bg-white/20 opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                  <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" style={{ fontFamily: 'Manrope' }}>
                    DevOps, CI/CD & Deployment
                  </span>
                </div>
              </div>
              
              {/* Second row - two tags */}
              <div className="flex gap-4">
                <div className="w-[300px] h-[37px] bg-white/20 opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                  <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" style={{ fontFamily: 'Manrope' }}>
                    Ongoing Maintenance & Monitoring
                  </span>
                </div>
                <div className="w-[200px] h-[37px] bg-white/20 opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                  <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" style={{ fontFamily: 'Manrope' }}>
                    24/7 Technical Support
                  </span>
                </div>
              </div>
              
              {/* Third row - single tag */}
              <div className="flex">
                <div className="w-[300px] h-[37px] bg-white/20 opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                  <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" style={{ fontFamily: 'Manrope' }}>
                    Security Patches & Version Upgrades
                  </span>
                </div>
              </div>
              
              {/* Fourth row - single tag */}
              <div className="flex">
                <div className="w-[420px] h-[37px] bg-white/20 opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                  <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" style={{ fontFamily: 'Manrope' }}>
                    Feature Enhancements & Performance Improvements
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
              <source src="/videos/Support_Video.mp4" type="video/mp4" />
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