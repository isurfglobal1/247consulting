import { FinalCTA } from './components/FinalCTA';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';

export function Home() {
	return (
		<div className="flex flex-col w-full bg-[#0A0A0A]">
			<Hero />
			<Metrics />
			<Services />
			<Testimonials />
			<FinalCTA />
		</div>
	);
}
