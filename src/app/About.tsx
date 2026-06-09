import { AboutCTA } from './components/about/AboutCTA';
import { AboutCulture } from './components/about/AboutCulture';
import { AboutHero } from './components/about/AboutHero';
import { AboutMetrics } from './components/about/AboutMetrics';
import { AboutMission } from './components/about/AboutMission';
import { AboutStory } from './components/about/AboutStory';
// import { AboutTeam } from './components/about/AboutTeam';
import { AboutValues } from './components/about/AboutValues';

export function About() {
	return (
		<div className="w-full bg-[#0A0A0A] min-h-screen overflow-hidden flex flex-col">
			<AboutHero />
			<AboutStory />
			<AboutMission />
			<AboutValues />
			{/* <AboutTeam /> */}
			<AboutMetrics />
			<AboutCulture />
			<AboutCTA />
		</div>
	);
}
