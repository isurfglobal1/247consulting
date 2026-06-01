import { useParams } from "react-router";
import { ServiceDetailA } from "./ServiceDetailA";
import { ServiceDetailB } from "./ServiceDetailB";
import { ServiceDetailC } from "./ServiceDetailC";
import { createContext } from "react";
import { servicesContent, ServiceContent } from "./data/serviceContent";

export const ServiceContext = createContext<ServiceContent | null>(null);

export function ServiceDetail() {
  const { id } = useParams();
  const serviceData = id && servicesContent[id] ? servicesContent[id] : servicesContent["default"];

  // IDs assigned to Layout B based on prompt specifications
  const layoutB_IDs = ["call-center", "verification", "back-office"]; 
  const layoutC_IDs = ["workspace", "training"];
  
  if (id && layoutC_IDs.includes(id)) {
    return (
      <ServiceContext.Provider value={serviceData}>
        <ServiceDetailC />
      </ServiceContext.Provider>
    );
  }

  if (id && layoutB_IDs.includes(id)) {
    return (
      <ServiceContext.Provider value={serviceData}>
        <ServiceDetailB />
      </ServiceContext.Provider>
    );
  }

  return (
    <ServiceContext.Provider value={serviceData}>
      <ServiceDetailA />
    </ServiceContext.Provider>
  );
}