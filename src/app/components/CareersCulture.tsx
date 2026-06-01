import { motion } from 'motion/react';

import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CareersCulture() {
	const { t } = useLanguage();

	return (
		<section className="relative w-full py-32 bg-[#0A0A0A] overflow-hidden">
			<div className="container-enterprise">
				<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: '-100px' }}
						transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
						className="w-full lg:w-5/12 relative z-10">
						<div className="text-primary-blue font-mono text-sm tracking-widest uppercase mb-8">{t('Culture // 01')}</div>

						<h2 className="text-4xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter mb-8">
							{t("WE DON'T DO")} <br />
							<span className="text-white/40">{t('ORDINARY.')}</span>
						</h2>

						<p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg">
							{t(
								'Our culture is built for the obsessed. We believe that an elite workforce requires an environment that challenges, elevates, and rigorously supports its people. Here, operational excellence is the baseline.'
							)}
						</p>

						<div className="flex flex-col gap-6 mt-12 border-l border-white/10 pl-6">
							<div className="flex flex-col">
								<span className="text-white font-bold text-xl">{t('Radical Accountability')}</span>
								<span className="text-white/50 text-sm mt-1">{t('Ownership at every layer of the matrix.')}</span>
							</div>
							<div className="flex flex-col">
								<span className="text-white font-bold text-xl">{t('Creative Operations')}</span>
								<span className="text-white/50 text-sm mt-1">{t('Solving rigid problems with fluid thinking.')}</span>
							</div>
						</div>
					</motion.div>

					<div className="w-full lg:w-7/12 relative">
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
							className="aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden">
							<ImageWithFallback
								src="https://images.unsplash.com/photo-1510851896000-498520af2236?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBvZmZpY2UlMjBhcmNoaXRlY3R1cmUlMjBkYXJrfGVufDF8fHx8MTc4MDAxODkzNnww&ixlib=rb-4.1.0&q=80&w=1080"
								alt="Corporate Culture"
								className="w-full h-full object-cover grayscale mix-blend-luminosity hover:grayscale-0 hover:scale-105 transition-all duration-[2s] ease-out"
							/>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
							className="absolute -bottom-12 -left-12 lg:-left-24 bg-[#0A0A0A] p-8 lg:p-12 border border-white/5 max-w-md shadow-2xl backdrop-blur-md">
							<div className="text-white/30 font-heading font-black text-6xl leading-none mb-4">"</div>
							<p className="text-white text-xl md:text-2xl font-light italic leading-relaxed">
								{t('The most magnetic thing a company can offer is the standard it refuses to compromise on.')}
							</p>
							<div className="mt-6 flex items-center gap-4">
								<div className="w-12 h-[1px] bg-primary-blue" />
								<span className="text-white/60 font-mono text-xs tracking-widest uppercase">{t('CEO Directive')}</span>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
