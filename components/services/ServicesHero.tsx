"use client";

export default function ServicesHero() {
  return (
    <section className="w-full max-w-[1920px] h-[214px] mw-1360 pt-20 px-[280px] bg-black text-white flex items-center justify-center opacity-100">
      <div className="text-center flex flex-col items-center justify-center gap-4 w-full opacity-100">
        <h1 className="text-4xl md:text-2xl lg:text-5xl pt-20 font-bold tracking-wide whitespace-nowrap">
          OUR SERVICES
        </h1>
        <p className="text-gray-300 font-normal text-xl leading-[150%] tracking-[-0.01em] text-center opacity-100" style={{ fontFamily: 'Manrope' }}>
          A complete digital solutions suite built to support your product
          <br />
          from concept to launch — and beyond.
        </p>
      </div>
    </section>
  );
}