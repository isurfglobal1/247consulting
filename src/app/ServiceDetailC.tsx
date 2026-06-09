import { useEffect } from 'react';

import { ServiceBenefitsC } from './components/service-detail-c/ServiceBenefitsC';
import { ServiceCTAC } from './components/service-detail-c/ServiceCTAC';
import { ServiceEnterpriseC } from './components/service-detail-c/ServiceEnterpriseC';
import { ServiceFeatureShowcaseC } from './components/service-detail-c/ServiceFeatureShowcaseC';
import { ServiceGalleryC } from './components/service-detail-c/ServiceGalleryC';
import { ServiceHeroC } from './components/service-detail-c/ServiceHeroC';
import { ServiceSolutionsC } from './components/service-detail-c/ServiceSolutionsC';

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
