"use client";

const benefits = [
  {
    title: "Expert Team",
    description: "Skilled professionals with years of experience in cutting-edge technologies",
    icon: "👥"
  },
  {
    title: "Agile Process",
    description: "Flexible development methodology that adapts to your changing needs",
    icon: "⚡"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and quality control throughout the development process",
    icon: "✅"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance services",
    icon: "🛠️"
  },
  {
    title: "Scalable Solutions",
    description: "Future-proof architecture that grows with your business",
    icon: "📈"
  },
  {
    title: "Cost Effective",
    description: "Competitive pricing without compromising on quality or delivery",
    icon: "💰"
  }
];

export default function ServicesWhyChooseUs() {
  return (
    <section className="w-full py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mw-1360 px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            WHY CHOOSE US?
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
              <div className="text-4xl mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}