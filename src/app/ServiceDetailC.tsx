import { useEffect } from "react";
import { ServiceHeroC } from "./components/service-detail-c/ServiceHeroC";
import { ServiceFeatureShowcaseC } from "./components/service-detail-c/ServiceFeatureShowcaseC";
import { ServiceGalleryC } from "./components/service-detail-c/ServiceGalleryC";
import { ServiceBenefitsC } from "./components/service-detail-c/ServiceBenefitsC";
import { ServiceSolutionsC } from "./components/service-detail-c/ServiceSolutionsC";
import { ServiceEnterpriseC } from "./components/service-detail-c/ServiceEnterpriseC";
import { ServiceCTAC } from "./components/service-detail-c/ServiceCTAC";

export function ServiceDetailC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#0A0A0A] text-white selection:bg-primary-blue selection:text-white flex flex-col font-sans">
      <ServiceHeroC />
      <ServiceFeatureShowcaseC />
      <ServiceGalleryC />
      <ServiceBenefitsC />
      <ServiceSolutionsC />
      <ServiceEnterpriseC />
      <ServiceCTAC />
    </main>
  );
}