import { ServicesHero } from "./components/services/ServicesHero";
import { ServicesEcosystem } from "./components/services/ServicesEcosystem";
import { ServicesStrategy } from "./components/services/ServicesStrategy";
import { ServicesIndustries } from "./components/services/ServicesIndustries";
import { ServicesProcess } from "./components/services/ServicesProcess";
import { ServicesMetrics } from "./components/services/ServicesMetrics";
import { ServicesCTA } from "./components/services/ServicesCTA";

export function Services() {
  return (
    <div className="w-full bg-[#0A0A0A] min-h-screen overflow-hidden flex flex-col">
      <ServicesHero />
      <ServicesEcosystem />
      <ServicesStrategy />
      <ServicesIndustries />
      <ServicesProcess />
      <ServicesMetrics />
      <ServicesCTA />
    </div>
  );
}