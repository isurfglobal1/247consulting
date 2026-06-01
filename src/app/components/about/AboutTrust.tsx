import { Activity, Globe, Lock, Shield } from 'lucide-react';
import { motion } from 'motion/react';

import { useLanguage } from '../../../contexts/LanguageContext';

export function AboutTrust() {
	const { t } = useLanguage();

	const trustFeatures = [
		{ icon: <Shield size={24} />, title: t('Operational Guarantees'), desc: t('SLA-backed performance on every deployment.') },
		{ icon: <Lock size={24} />, title: t('Compliance Systems'), desc: t('Military-grade data and legal compliance across all regions.') },
		{ icon: <Activity size={24} />, title: t('Recruitment Intelligence'), desc: t('Predictive modeling for talent acquisition.') },
		{ icon: <Globe size={24} />, title: t('Enterprise Scalability'), desc: t('Infrastructure built to handle multi-country hypergrowth.') },
	];

	return (
		<section className="relative w-full py-32 bg-[#000] overflow-hidden">
			{/* Immersive Dark Background / Lighting */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/5 rounded-full blur-[150px]"></div>
			</div>

			<div className="container-enterprise relative z-10">
				<div className="flex flex-col items-center text-center mb-20">
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-white text-4xl md:text-5xl lg:text-7xl font-heading font-black tracking-tight mb-8 leading-[1.05]">
						{t('Why Leading Enterprises')} <br /> {t('Trust')} <span className="text-white/20">247HR</span>
					</motion.h2>

					{/* New Commitment Text */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="max-w-5xl mx-auto">
						<p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
							{t(
								'We are committed to delivering reliable, professional, and people-focused HR solutions tailored to the unique needs of each organization. Our experienced team works closely with clients to streamline HR processes, ensure compliance with employment regulations, and build productive, high-performing workforces. We prioritize integrity, confidentiality, efficiency, and long-term client success.'
							)}
						</p>
					</motion.div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
					{trustFeatures.map((feat, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: idx * 0.1 }}
							className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500 overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-b from-primary-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="relative z-10">
								<div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-primary-blue mb-6 group-hover:scale-110 transition-transform duration-500">
									{feat.icon}
								</div>
								<h3 className="text-white text-xl font-bold font-heading mb-3">{feat.title}</h3>
								<p className="text-white/60 text-sm font-light leading-relaxed">{feat.desc}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

// import { Activity, Globe, Lock, Shield } from 'lucide-react';
// import { motion } from 'motion/react';

// import { useLanguage } from '../../../contexts/LanguageContext';

// export function AboutTrust() {
// 	const { t } = useLanguage();

// 	const trustFeatures = [
// 		{ icon: <Shield size={24} />, title: t('Operational Guarantees'), desc: t('SLA-backed performance on every deployment.') },
// 		{ icon: <Lock size={24} />, title: t('Compliance Systems'), desc: t('Military-grade data and legal compliance across all regions.') },
// 		{ icon: <Activity size={24} />, title: t('Recruitment Intelligence'), desc: t('Predictive modeling for talent acquisition.') },
// 		{ icon: <Globe size={24} />, title: t('Enterprise Scalability'), desc: t('Infrastructure built to handle multi-country hypergrowth.') },
// 	];

// 	return (
// 		<section className="relative w-full py-32 bg-[#000] overflow-hidden">
// 			{/* Immersive Dark Background / Lighting */}
// 			<div className="absolute inset-0 z-0">
// 				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/5 rounded-full blur-[150px]"></div>
// 			</div>

// 			<div className="container-enterprise relative z-10">
// 				<div className="flex flex-col items-center text-center mb-20">
// 					<motion.h2
// 						initial={{ opacity: 0, y: 30 }}
// 						whileInView={{ opacity: 1, y: 0 }}
// 						viewport={{ once: true }}
// 						transition={{ duration: 0.8 }}
// 						className="text-white text-4xl md:text-5xl lg:text-7xl font-heading font-black tracking-tight mb-8 leading-[1.05]">
// 						{t('Why Leading Enterprises')} <br /> {t('Trust')} <span className="text-white/20">247HR</span>
// 					</motion.h2>
// 				</div>

// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// 					{trustFeatures.map((feat, idx) => (
// 						<motion.div
// 							key={idx}
// 							initial={{ opacity: 0, y: 30 }}
// 							whileInView={{ opacity: 1, y: 0 }}
// 							viewport={{ once: true }}
// 							transition={{ duration: 0.8, delay: idx * 0.1 }}
// 							className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500 overflow-hidden">
// 							<div className="absolute inset-0 bg-gradient-to-b from-primary-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
// 							<div className="relative z-10">
// 								<div className="w-14 h-14 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-primary-blue mb-6 group-hover:scale-110 transition-transform duration-500">
// 									{feat.icon}
// 								</div>
// 								<h3 className="text-white text-xl font-bold font-heading mb-3">{feat.title}</h3>
// 								<p className="text-white/60 text-sm font-light leading-relaxed">{feat.desc}</p>
// 							</div>
// 						</motion.div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
