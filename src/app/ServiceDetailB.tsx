import { ServiceBenefitsB } from './components/service-detail-b/ServiceBenefitsB';
import { ServiceCTAB } from './components/service-detail-b/ServiceCTAB';
import { ServiceFeaturesB } from './components/service-detail-b/ServiceFeaturesB';
import { ServiceHeroB } from './components/service-detail-b/ServiceHeroB';
import { ServiceNarrativeB } from './components/service-detail-b/ServiceNarrativeB';
import { ServiceStatsB } from './components/service-detail-b/ServiceStatsB';

export function ServiceDetailB() {
	return (
		<div className="w-full bg-[#F5F7FA] min-h-screen overflow-x-hidden flex flex-col">
			<ServiceHeroB />
			<ServiceNarrativeB />
			<ServiceFeaturesB />
			<ServiceStatsB />
			<ServiceBenefitsB />
			<ServiceCTAB />
		</div>
	);
}
