import { motion } from "motion/react";
import { CareersHero } from "./components/CareersHero";
import { CareersCulture } from "./components/CareersCulture";
import { CareersRoles } from "./components/CareersRoles";
import { CareersStories } from "./components/CareersStories";
import { CareersBenefits } from "./components/CareersBenefits";
import { CareersProcess } from "./components/CareersProcess";
import { CareersWorkspace } from "./components/CareersWorkspace";
import { CareersCTA } from "./components/CareersCTA";

export function Careers() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white w-full overflow-hidden">
      <CareersHero />
      <CareersCulture />
      <CareersRoles />
      <CareersStories />
      <CareersBenefits />
      <CareersProcess />
      <CareersWorkspace />
      <CareersCTA />
    </div>
  );
}