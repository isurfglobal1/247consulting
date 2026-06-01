import { motion } from 'motion/react';

import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CareersWorkspace() {
	const { t } = useLanguage();

	return (
		<section className="relative w-full py-40 bg-white overflow-hidden">
			<div className="container-enterprise">
				<div className="flex flex-col mb-24">
					<div className="text-primary-black font-mono text-sm tracking-widest uppercase mb-8">{t('Operational Ecosystem // 05')}</div>
					<h2 className="text-primary-black font-heading font-black text-4xl md:text-6xl tracking-tighter leading-[1.1] max-w-3xl">
						{t('THE ARCHITECTURE')} <br /> {t('OF AMBITION.')}
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
						className="md:col-span-8 aspect-[16/9] bg-gray-100 overflow-hidden relative group">
						<ImageWithFallback
							src="https://images.unsplash.com/photo-1737474707380-5ef35770d8a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcmNoaXRlY3R1cmFsJTIwb2ZmaWNlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzgwMDE5MDU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
							alt="Luxury Workspace"
							className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-out"
						/>
						<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 font-mono text-xs tracking-widest uppercase text-primary-black">
							{t('HQ / Collaborative Core')}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
						className="md:col-span-4 aspect-square md:aspect-auto bg-gray-100 overflow-hidden relative group">
						<ImageWithFallback
							src="https://images.unsplash.com/photo-1627801443714-184af09a2865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwb2ZmaWNlJTIwbG91bmdlJTIwZGFya3xlbnwxfHx8fDE3ODAwMTkwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
							alt="Lounge"
							className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-out"
						/>
						<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 font-mono text-xs tracking-widest uppercase text-primary-black">
							{t('Executive Lounge')}
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
					className="mt-16 max-w-2xl text-primary-black/70 text-lg md:text-xl font-light leading-relaxed">
					{t(
						'Spaces designed not just to house personnel, but to physically catalyze elite performance. The 247HR workspace acts as a luxury asset, fostering high-level focus and collaborative synthesis.'
					)}
				</motion.div>
			</div>
		</section>
	);
}
