import Hero from "@/components/hero";
import Services from "@/components/services";
import Trusted from "@/components/trusted";
import Works from "@/components/works";
import Footer from "@/components/footer";
import Process from "@/components/process";
import Testimonials from "@/components/testimonials";
import CTASection from "@/components/cta-section";

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
      <Footer />
    </>
  );
}
