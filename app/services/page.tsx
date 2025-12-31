import ServicesHero from "@/components/services/ServicesHero";
import ServicesDesign from "@/components/services/ServicesDesign";
import ServicesDevelopment from "@/components/services/ServicesDevelopment";
import ServicesBusinessSupport from "@/components/services/ServicesBusinessSupport";
import ServicesHowWeWork from "@/components/services/ServicesHowWeWork";
import ServicesBeyondBasics from "@/components/services/ServicesBeyondBasics";
import ServicesWhyChooseUs from "@/components/services/ServicesWhyChooseUs";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDesign />
      <ServicesDevelopment />
      <ServicesBusinessSupport />
      <ServicesHowWeWork />
      <ServicesBeyondBasics />
      <ServicesWhyChooseUs />
      <ServicesCTA />
    </>
  );
}