"use client";

import Image from "next/image";

export default function ServicesBusinessSupport() {
  return (
    <section className="w-full py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mw-1360 px-6 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              BUSINESS & SUPPORT
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Comprehensive business solutions and ongoing support to ensure your digital products continue to perform at their best. We provide strategic guidance and technical expertise to help your business thrive.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Digital Strategy & Consulting</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Technical Support & Maintenance</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Performance Optimization</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Staff Augmentation & Outsourcing</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-800 to-black opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-lg md:text-xl">📊</div>
                  </div>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-lg md:text-xl">🎯</div>
                  </div>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-lg md:text-xl">⚡</div>
                  </div>
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <div className="text-lg md:text-xl">🤝</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}