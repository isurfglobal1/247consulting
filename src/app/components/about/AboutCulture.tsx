import { motion } from 'motion/react';

import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutCulture() {
	const { t } = useLanguage();

	return (
		<section className="relative w-full py-32 bg-[#0A0A0A] overflow-hidden">
			<div className="container-enterprise relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center max-w-3xl mx-auto mb-20">
					<h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-6 leading-[1.1]">
						{t('aboutCulture.title1')} <br /> <span className="text-primary-blue">{t('aboutCulture.title2')}</span>
					</h2>
					<p className="text-white/60 text-lg font-light leading-relaxed">{t('aboutCulture.description')}</p>
				</motion.div>

				{/* Editorial Collage Grid */}
				<div className="grid grid-cols-1 md:grid-cols-12 grid-rows-[auto_auto] gap-6">
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="md:col-span-8 rounded-[24px] overflow-hidden border border-white/10 aspect-video md:aspect-auto">
						<ImageWithFallback
							src="https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBtZWV0aW5nfGVufDF8fHx8MTc4MDAxMTI2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
							alt={t('aboutCulture.imageAlt1')}
							className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="md:col-span-4 rounded-[24px] bg-primary-blue p-8 flex flex-col justify-center border border-white/10 aspect-square md:aspect-auto">
						<h3 className="text-white text-3xl font-heading font-black leading-tight mb-4">{t('aboutCulture.quote')}</h3>
						<p className="text-white/80 font-medium">{t('aboutCulture.quoteAuthor')}</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="md:col-span-5 rounded-[24px] overflow-hidden border border-white/10 aspect-square">
						<ImageWithFallback
							src="https://images.unsplash.com/photo-1563132337-f159f484226c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJ1c2luZXNzJTIwd29tYW4lMjBvZmZpY2V8ZW58MXx8fHwxNzgwMDExMjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
							alt={t('aboutCulture.imageAlt2')}
							className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
						/>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="md:col-span-7 rounded-[24px] overflow-hidden border border-white/10 aspect-video md:aspect-auto relative group">
						<ImageWithFallback
							src="https://images.unsplash.com/photo-1600531529272-023c4b821f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjb3Jwb3JhdGUlMjBidWlsZGluZ3xlbnwxfHx8fDE3ODAwMTEyNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
							alt={t('aboutCulture.imageAlt3')}
							className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:scale-105 transition-all duration-700"
						/>
						<div className="absolute inset-0 bg-[#0A0A0A]/40 group-hover:bg-[#0A0A0A]/20 transition-colors duration-700"></div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
