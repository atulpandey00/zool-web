import Hero from "@/components/home/HeroSection";
import Services from "@/components/home/ServicesSection";
import Trusted from "@/components/home/trustedSection";
import Works from "@/components/home/WorksSection";
import Process from "@/components/home/processSection";
import Testimonials from "@/components/home/testimonials";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <Services />
      <Works />
      <Process />
      <Testimonials />
      <CTASection/>
    </>
  );
}
