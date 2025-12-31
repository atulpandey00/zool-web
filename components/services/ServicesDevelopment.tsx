"use client";

export default function ServicesDevelopment() {
  return (
    <section 
      className="bg-black text-white opacity-100" 
      style={{
        width: '1920px',
        height: '678.0001220703125px',
        paddingTop: '80px',
        paddingRight: '280px',
        paddingBottom: '80px',
        paddingLeft: '280px',
        gap: '80px'
      }}
    >
      <div className="flex gap-20 h-full">
        {/* Left Side - Image/Visual Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-700 to-black opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4">
                  <div className="text-2xl md:text-3xl">💻</div>
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center ml-8">
                  <div className="text-xl md:text-2xl">📱</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div 
          className="flex flex-col opacity-100"
          style={{
            width: '650px',
            height: '518.0001220703125px',
            gap: '56px'
          }}
        >
          {/* Title */}
          <h2 className="text-4xl font-bold text-white">
            DEVELOPMENT
          </h2>
          
          {/* Description */}
          <div className="w-[574px] h-[108px] flex flex-col gap-4 opacity-100">
            <p className="text-white text-xl">
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
              <div className="w-[500px] h-[37px] bg-white/20 text-black opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" style={{ fontFamily: 'Manrope' }}>
                  Frontend Development (React, Next.js, Vue)
                </span>
              </div>
              <div className="w-[600px] h-[37px] bg-white/20 text-black opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" style={{ fontFamily: 'Manrope' }}>
                  Mobile App Development (iOS, Android, Flutter, React Native)
                </span>
              </div>
              <div className="w-[450px] h-[37px] bg-white/20 text-black opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" style={{ fontFamily: 'Manrope' }}>
                  Backend Development & API Engineering
                </span>
              </div>
              <div className="w-[420px] h-[37px] bg-white/20 text-black opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" style={{ fontFamily: 'Manrope' }}>
                  Database Architecture & Cloud Setup
                </span>
              </div>
              <div className="w-[480px] h-[37px] bg-white/20 text-black opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" style={{ fontFamily: 'Manrope' }}>
                  Integrations, Automation & Optimization
                </span>
              </div>
              <div className="w-[520px] h-[37px] bg-white/20 text-black opacity-100 rounded-lg px-3 py-1.5 flex items-center justify-start backdrop-blur-sm" style={{ backdropFilter: 'blur(4px)', gap: '10px' }}>
                <span className="opacity-100 text-white text-lg leading-[140%] tracking-normal font-normal" style={{ fontFamily: 'Manrope' }}>
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