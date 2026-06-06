import { motion } from 'motion/react';

import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CareersStories() {
	const { t } = useLanguage();

	return (
		<section className="relative w-full py-32 bg-[#050505] overflow-hidden">
			<div className="container-enterprise">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
					className="flex flex-col lg:flex-row gap-16 lg:gap-24">
					<div className="w-full lg:w-5/12 flex flex-col justify-between py-12">
						<div>
							<div className="text-primary-blue font-mono text-sm tracking-widest uppercase mb-8">{t('careersStories.sectionTag')}</div>
							<h2 className="text-3xl md:text-5xl font-heading font-bold text-white leading-[1.2] tracking-tight">"{t('careersStories.quote')}"</h2>
						</div>

						<div className="mt-16 flex items-center gap-6">
							<div className="w-16 h-16 rounded-full overflow-hidden border border-white/20">
								<ImageWithFallback
									src="https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFscyUyMG1lZXRpbmd8ZW58MXx8fHwxNzgwMDE4OTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
									alt={t('careersStories.profileAlt')}
									className="w-full h-full object-cover grayscale"
								/>
							</div>
							<div className="flex flex-col">
								<span className="text-white font-bold text-lg">{t('careersStories.profileName')}</span>
								<span className="text-white/50 font-mono text-xs tracking-wider uppercase mt-1">{t('careersStories.profileTitle')}</span>
							</div>
						</div>
					</div>

					<div className="w-full lg:w-7/12">
						<div className="aspect-[4/3] w-full relative overflow-hidden">
							<ImageWithFallback
								src="https://images.unsplash.com/photo-1497215842964-222b430dc094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b3Jrc3BhY2UlMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3ODAwMTg5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
								alt={t('careersStories.imageAlt')}
								className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-[2s] ease-out"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
