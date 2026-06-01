import { motion } from 'motion/react';

import { useLanguage } from '../../../contexts/LanguageContext';

export function AboutMetrics() {
	const { t } = useLanguage();

	const metrics = [
		{ label: t('Enterprise Clients'), value: '450+', desc: t('across 14 active jurisdictions') },
		{ label: t('Workforce Placements'), value: '12,000+', desc: t('talent orchestrated annually') },
		{ label: t('Payroll Operations'), value: '$1.2B', desc: t('processed through our architecture') },
		{ label: t('Talent Success Rate'), value: '98.4%', desc: t('executive & technical retention') },
	];

	return (
		<section className="relative w-full py-32 bg-[#050505] overflow-hidden">
			<div className="absolute inset-0 z-0">
				<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px]"></div>
			</div>

			<div className="container-enterprise relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mb-24">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}>
						<h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-6">
							{t('The Scale of')} <br /> <span className="text-primary-blue">{t('Our Impact')}</span>
						</h2>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="lg:pl-16 border-l border-white/10">
						<p className="text-white/60 text-lg font-light leading-relaxed">
							{t(
								'We do not deal in assumptions. We deal in measurable, scalable enterprise performance. Our infrastructure supports the workforce demands of the continent’s most ambitious companies.'
							)}
						</p>
					</motion.div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
					{metrics.map((metric, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: idx * 0.1 }}
							className="relative p-8 rounded-3xl bg-[#111] border border-white/5 overflow-hidden group">
							<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="text-white/40 text-sm font-medium uppercase tracking-widest mb-6">{metric.label}</div>
							<div className="flex items-baseline gap-4 mb-4">
								<span className="text-6xl md:text-8xl font-heading font-black text-white tracking-tighter">{metric.value}</span>
							</div>
							<div className="text-primary-blue/80 text-lg">{metric.desc}</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
