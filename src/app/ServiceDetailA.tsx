import { ServiceDetailHero } from "./components/service-detail/ServiceHero";
import { ServiceOverview } from "./components/service-detail/ServiceOverview";
import { ServiceCapabilities } from "./components/service-detail/ServiceCapabilities";
import { ServiceProcess } from "./components/service-detail/ServiceProcess";
import { ServiceTrust } from "./components/service-detail/ServiceTrust";
import { ServiceCTA } from "./components/service-detail/ServiceCTA";

export function ServiceDetailA() {
  return (
    <div className="w-full bg-[#020202] min-h-screen overflow-x-hidden flex flex-col">
      <ServiceDetailHero />
      <ServiceOverview />
      <ServiceCapabilities />
      <ServiceProcess />
      <ServiceTrust />
      <ServiceCTA />
    </div>
  );
}