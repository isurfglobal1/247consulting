import { AboutHero } from "./components/about/AboutHero";
import { AboutStory } from "./components/about/AboutStory";
import { AboutMission } from "./components/about/AboutMission";
import { AboutValues } from "./components/about/AboutValues";
import { AboutTeam } from "./components/about/AboutTeam";
import { AboutMetrics } from "./components/about/AboutMetrics";
import { AboutCulture } from "./components/about/AboutCulture";
import { AboutTrust } from "./components/about/AboutTrust";
import { AboutCTA } from "./components/about/AboutCTA";

export function About() {
  return (
    <div className="w-full bg-[#0A0A0A] min-h-screen overflow-hidden flex flex-col">
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <AboutMetrics />
      <AboutCulture />
      <AboutTrust />
      <AboutCTA />
    </div>
  );
}