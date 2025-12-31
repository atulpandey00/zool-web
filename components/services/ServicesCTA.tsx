"use client";

import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="w-full py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mw-1360 px-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something Exceptional
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-8 md:mb-12">
            Ready to transform your ideas into reality? Get in touch with our team and let's discuss how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 text-lg"
            >
              Start Your Project
            </Link>
            <Link 
              href="/works"
              className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}