import { motion } from 'motion/react';

import { useLanguage } from '../contexts/LanguageContext';

export function CareersBenefits() {
	const { t } = useLanguage();

	const benefits = [
		{
			title: t('careersBenefits.benefit1.title'),
			desc: t('careersBenefits.benefit1.desc'),
		},
		{
			title: t('careersBenefits.benefit2.title'),
			desc: t('careersBenefits.benefit2.desc'),
		},
		{
			title: t('careersBenefits.benefit3.title'),
			desc: t('careersBenefits.benefit3.desc'),
		},
		{
			title: t('careersBenefits.benefit4.title'),
			desc: t('careersBenefits.benefit4.desc'),
		},
	];

	return (
		<section className="relative w-full py-40 bg-[#0A0A0A]">
			<div className="container-enterprise">
				<div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
					<div className="w-full lg:w-1/3">
						<h2 className="text-4xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter mb-8 sticky top-32">
							{t('careersBenefits.title1')} <br />
							<span className="text-white/40">{t('careersBenefits.title2')}</span>
						</h2>
					</div>

					<div className="w-full lg:w-2/3 flex flex-col gap-24">
						{benefits.map((benefit, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
								className="flex flex-col md:flex-row gap-8 lg:gap-16 border-t border-white/10 pt-12">
								<div className="text-primary-blue font-heading font-black text-6xl leading-none md:w-1/4 shrink-0">0{idx + 1}</div>
								<div className="md:w-3/4">
									<h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">{benefit.title}</h3>
									<p className="text-white/60 text-lg leading-relaxed font-light">{benefit.desc}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
