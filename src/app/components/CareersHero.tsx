import { motion } from 'motion/react';

import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CareersHero() {
	const { t } = useLanguage();

	return (
		<section className="relative w-full h-[120vh] min-h-[900px] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
			{/* Background Image & Overlays */}
			<div className="absolute inset-0 z-0">
				<ImageWithFallback
					src="https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZnJpY2FuJTIwb2ZmaWNlJTIwdGVhbXxlbnwxfHx8fDE3ODAwMTg5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
					alt="Cinematic Modern Workforce"
					className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-[#0A0A0A]/60 to-[#0A0A0A] z-10" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,155,240,0.08)_0%,rgba(10,10,10,0)_60%)] z-10" />
			</div>

			{/* Hero Content */}
			<div className="relative z-20 container-enterprise h-full flex flex-col justify-center">
				<div className="w-full max-w-[1200px] mx-auto relative pt-32">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
						className="flex items-center gap-4 mb-8">
						<span className="w-12 h-[1px] bg-primary-blue/60" />
						<span className="text-primary-blue font-mono text-sm tracking-[0.2em] uppercase">{t('Talent Ecosystem 2026')}</span>
					</motion.div>

					<div className="relative">
						<motion.h1
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
							className="font-heading font-black text-white text-[clamp(4rem,8vw,8rem)] leading-[0.85] tracking-tighter">
							{t('BUILD THE')} <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">{t('FUTURE OF WORK')}</span>
						</motion.h1>

						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
							className="absolute -right-[5%] top-[10%] w-[400px] h-[500px] hidden lg:block overflow-hidden rounded-2xl border border-white/5">
							<ImageWithFallback
								src="https://images.unsplash.com/photo-1771270759486-1f7703945072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9kZXJuJTIwb2ZmaWNlJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3ODAwMTg5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
								alt="Workspace Detail"
								className="w-full h-full object-cover mix-blend-luminosity opacity-80"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
							className="font-heading font-black text-white/90 text-[clamp(4rem,8vw,8rem)] leading-[0.85] tracking-tighter mt-4">
							{t('WITH US.')}
						</motion.h1>
					</div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
						className="mt-16 max-w-xl">
						<p className="text-white/60 text-xl font-light leading-relaxed">
							{t(
								'Join the workforce infrastructure powering modern Africa. An elite environment engineered for ambitious thinkers, creative operators, and executive leaders.'
							)}
						</p>
					</motion.div>
				</div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 1 }}
				className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
				<span className="text-white/40 font-mono text-xs uppercase tracking-widest">{t('Scroll')}</span>
				<div className="w-[1px] h-16 bg-white/10 overflow-hidden">
					<motion.div
						animate={{ y: [0, 64] }}
						transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
						className="w-full h-1/2 bg-primary-blue"
					/>
				</div>
			</motion.div>
		</section>
	);
}
