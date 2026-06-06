import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Metrics } from "./components/Metrics";
import { WhyForeignCompanies } from "./components/WhyForeignCompanies";
import { Testimonials } from "./components/Testimonials";
import { FinalCTA } from "./components/FinalCTA";

export function Home() {
  return (
    <div className="flex flex-col w-full bg-[#0A0A0A]">
      <Hero />
      <Metrics />
      <Services />
      <WhyForeignCompanies />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}
