import { motion } from 'motion/react';

import { useLanguage } from '../../contexts/LanguageContext';

export function AboutValues() {
	const { t } = useLanguage();

	const values = [
		{ num: '01', title: t('aboutValues.value1.title'), desc: t('aboutValues.value1.desc') },
		{ num: '02', title: t('aboutValues.value2.title'), desc: t('aboutValues.value2.desc') },
		{ num: '03', title: t('aboutValues.value3.title'), desc: t('aboutValues.value3.desc') },
		{ num: '04', title: t('aboutValues.value4.title'), desc: t('aboutValues.value4.desc') },
		{ num: '05', title: t('aboutValues.value5.title'), desc: t('aboutValues.value5.desc') },
		{ num: '06', title: t('aboutValues.value6.title'), desc: t('aboutValues.value6.desc') },
	];

	return (
		<section className="relative w-full py-32 bg-[#0A0A0A] overflow-hidden">
			<div className="container-enterprise relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="mb-20 max-w-2xl">
					<h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-6">
						{t('aboutValues.title1')} <br /> <span className="text-white/40">{t('aboutValues.title2')}</span>
					</h2>
					<p className="text-white/60 text-lg font-light leading-relaxed">{t('aboutValues.description')}</p>
				</motion.div>

				{/* Asymmetrical Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{values.map((val, idx) => (
						<motion.div
							key={val.num}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: idx * 0.1 }}
							className={`group relative p-8 rounded-[24px] bg-[#111] border border-white/5 hover:border-primary-blue/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden ${
								idx === 0 || idx === 3 ? 'lg:col-span-2' : 'lg:col-span-1'
							}`}>
							{/* Background Hover Glow */}
							<div className="absolute inset-0 bg-gradient-to-br from-primary-blue/0 to-primary-blue/0 group-hover:from-primary-blue/10 group-hover:to-transparent transition-all duration-500 z-0"></div>

							<div className="relative z-10 flex flex-col h-full justify-between min-h-[200px]">
								<div className="text-primary-blue/40 font-heading font-black text-5xl mb-12 group-hover:text-primary-blue transition-colors duration-500">{val.num}</div>
								<div>
									<h3 className="text-white text-2xl font-bold font-heading mb-3 group-hover:translate-x-2 transition-transform duration-300">{val.title}</h3>
									<p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-300">{val.desc}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
