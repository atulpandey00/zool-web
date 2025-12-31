"use client";

import { Card, CardContent } from "@/components/ui/card";

const workServices = [
  {
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
    icon: "🔍",
    color: "from-purple-600 to-purple-800"
  },
  {
    title: "Design & Prototyping", 
    description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize your product before development begins.",
    icon: "🎨",
    color: "from-blue-600 to-blue-800"
  },
  {
    title: "Development & Testing",
    description: "We build your product using agile methodologies, with continuous testing and quality assurance throughout the development process.",
    icon: "⚙️",
    color: "from-green-600 to-green-800"
  },
  {
    title: "Launch & Support",
    description: "We handle the deployment and provide ongoing support, maintenance, and optimization to ensure your product's continued success.",
    icon: "🚀",
    color: "from-orange-600 to-orange-800"
  },
  {
    title: "Analytics & Optimization",
    description: "We monitor performance metrics and user behavior to continuously improve and optimize your digital products for better results.",
    icon: "📈",
    color: "from-red-600 to-red-800"
  },
  {
    title: "Scaling & Growth",
    description: "As your business grows, we help scale your technology infrastructure and add new features to support your expanding needs.",
    icon: "📊",
    color: "from-indigo-600 to-indigo-800"
  }
];

export default function ServicesHowWeWork() {
  return (
    <section className="w-full py-16 md:py-24 bg-black text-white">
      <div className="max-w-7xl mw-1360 px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            HOW WE WORK
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our proven process ensures successful project delivery from concept to launch and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {workServices.map((service, index) => (
            <Card key={index} className="group relative bg-black border border-white/20 rounded-2xl overflow-hidden hover:border-white/40 transition-all duration-300">
              <CardContent className="p-6 md:p-8 h-full">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-2xl`}>
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}