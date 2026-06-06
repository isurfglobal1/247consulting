import { motion } from 'motion/react';

import { useLanguage } from '../../contexts/LanguageContext';

export function ServicesMetrics() {
	const { t } = useLanguage();

	const metrics = [
		{ value: '450+', label: t('servicesMetrics.metric1.label') },
		{ value: 'Br1.2B', label: t('servicesMetrics.metric2.label') },
		{ value: '14', label: t('servicesMetrics.metric3.label') },
		{ value: '12k+', label: t('servicesMetrics.metric4.label') },
		{ value: '98%', label: t('servicesMetrics.metric5.label') },
		{ value: '14D', label: t('servicesMetrics.metric6.label') },
	];

	return (
		<section className="relative w-full py-32 bg-[#050505] overflow-hidden">
			<div className="container-enterprise relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="lg:col-span-5">
						<h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter leading-[1] mb-8">
							{t('servicesMetrics.title1')} <br /> <span className="text-primary-blue">{t('servicesMetrics.title2')}</span>
						</h2>
						<p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-8">{t('servicesMetrics.description')}</p>
					</motion.div>

					<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
						{metrics.map((metric, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								className="relative">
								<div className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white tracking-tighter mb-4">{metric.value}</div>
								<div className="text-primary-blue/80 text-sm font-medium tracking-wide uppercase">{metric.label}</div>
								{/* Minimal divider */}
								<div className="mt-4 w-12 h-px bg-white/10"></div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
