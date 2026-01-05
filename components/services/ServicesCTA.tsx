"use client";

import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="w-full py-20 md:py-32 bg-black text-white flex items-center justify-center">
      <div 
        className="text-center flex flex-col"
        style={{
          width: '1360px',
          height: '237px',
          gap: '24px'
        }}
      >
        <h2 
          className="font-bold text-white mx-auto"
          style={{
            width: '781px',
            height: '69px',
            fontFamily: 'Istok Web',
            fontSize: '48px',
            lineHeight: '100%'
          }}
        >
          Let's Build Something Exceptional
        </h2>
        <p 
          className="text-white text-center mx-auto font-normal"
          style={{
            width: '648px',
            height: '70px',
            fontFamily: 'Istok Web',
            fontSize: '24px',
            lineHeight: '100%'
          }}
        >
          Whether you're starting a new product or improving an existing one, we're here to help you bring your vision to life.
        </p>
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center text-black font-medium bg-white hover:bg-gray-100 transition-colors duration-300 group rounded-3xl mx-auto"
          style={{
            width: '178px',
            height: '50px',
            gap: '8px',
            paddingTop: '15.5px',
            paddingRight: '30px',
            paddingBottom: '15.5px',
            paddingLeft: '30px'
          }}
        >
          Get in touch
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}