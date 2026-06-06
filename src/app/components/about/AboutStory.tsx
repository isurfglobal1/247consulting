import { motion } from 'motion/react';

import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutStory() {
	const { t } = useLanguage();

	return (
		<section className="relative w-full py-32 bg-[#0A0A0A] overflow-hidden">
			<div className="container-enterprise relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
					{/* Visual Side */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="lg:col-span-6 relative">
						{/* Background glow */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-blue/10 rounded-full blur-[100px]"></div>

						<div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[24px] overflow-hidden border border-white/10">
							<ImageWithFallback
								src="https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWxzJTIwb2ZmaWNlfGVufDF8fHx8MTc4MDAxMTI2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
								alt={t('aboutStory.mainImageAlt')}
								className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/30"></div>
						</div>

						{/* Overlapping small image */}
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="absolute -bottom-12 -right-6 md:-right-12 w-[60%] aspect-square rounded-[20px] overflow-hidden border-4 border-[#0A0A0A] shadow-2xl">
							<ImageWithFallback
								src="https://images.unsplash.com/photo-1563132337-f159f484226c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJ1c2luZXNzJTIwd29tYW4lMjBvZmZpY2V8ZW58MXx8fHwxNzgwMDExMjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
								alt={t('aboutStory.overlayImageAlt')}
								className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
							/>
						</motion.div>
					</motion.div>

					{/* Text Side */}
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="lg:col-span-5 lg:col-start-8 pt-12 lg:pt-0">
						<h2 className="text-white text-3xl md:text-5xl font-heading font-black tracking-tight mb-10 leading-[1.1]">
							{t('aboutStory.title1')} <br />
							<span className="text-primary-blue">{t('aboutStory.title2')}</span>
						</h2>

						<div className="space-y-8">
							<div>
								<h3 className="text-white text-xl font-bold font-heading mb-3 flex items-center gap-4">
									<span className="w-8 h-[2px] bg-primary-blue"></span>
									{t('aboutStory.section1Title')}
								</h3>
								<p className="text-white/60 text-lg font-light leading-relaxed">{t('aboutStory.section1Desc')}</p>
							</div>

							<div>
								<h3 className="text-white text-xl font-bold font-heading mb-3 flex items-center gap-4">
									<span className="w-8 h-[2px] bg-primary-blue"></span>
									{t('aboutStory.section2Title')}
								</h3>
								<p className="text-white/60 text-lg font-light leading-relaxed">{t('aboutStory.section2Desc')}</p>
							</div>

							<div className="p-6 rounded-2xl bg-white/5 border border-white/10 mt-8 relative overflow-hidden">
								<div className="absolute top-0 left-0 w-1 h-full bg-primary-blue"></div>
								<p className="text-white text-lg font-medium italic">{t('aboutStory.quote')}</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
