import { motion } from 'motion/react';

import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CareersHero() {
	const { t } = useLanguage();

	return (
		<>
			<style>
				{`
          /* Dark Mode (Default) - The Original State */
          .ch-bg-img {
            opacity: 0.4;
            mix-blend-mode: luminosity;
            filter: none;
            transform: scale(1.05);
          }
          .ch-grad-1 {
            background-image: linear-gradient(to bottom, rgba(10, 10, 10, 0.3), rgba(10, 10, 10, 0.6), rgba(10, 10, 10, 1));
          }
          .ch-grad-2 {
            background-image: radial-gradient(ellipse at center, rgba(29, 155, 240, 0.08) 0%, rgba(10, 10, 10, 0) 60%);
          }
          .ch-line {
            height: 1px;
            background-color: rgba(29, 155, 240, 0.6);
          }
          .ch-tag {
            font-weight: 400;
            filter: none;
          }
          .ch-dark-layout {
            display: block;
          }
          .ch-light-layout {
            display: none;
          }
          .ch-desc {
            color: rgba(255, 255, 255, 0.6);
            font-weight: 300;
            filter: none;
          }
          .ch-scroll-text {
            color: rgba(255, 255, 255, 0.4);
            font-weight: 400;
            filter: none;
          }
          .ch-scroll-track {
            width: 1px;
            background-color: rgba(255, 255, 255, 0.1);
            border-radius: 0;
          }
          .ch-scroll-thumb {
            box-shadow: none;
          }

          /* Light Mode Overrides - The New Changes */
          [data-theme='light'] .ch-bg-img {
            opacity: 0.2;
            mix-blend-mode: normal;
            filter: grayscale(100%);
          }
          [data-theme='light'] .ch-grad-1 {
            background-image: linear-gradient(to bottom, rgba(5, 5, 5, 0.9), rgba(5, 5, 5, 0.7), rgba(10, 10, 10, 1));
          }
          [data-theme='light'] .ch-grad-2 {
            background-image: radial-gradient(ellipse at center, rgba(29, 155, 240, 0.12) 0%, rgba(10, 10, 10, 0) 70%);
          }
          [data-theme='light'] .ch-line {
            height: 2px;
            background-color: rgba(29, 155, 240, 1);
          }
          [data-theme='light'] .ch-tag {
            font-weight: 700;
            filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
          }
          [data-theme='light'] .ch-dark-layout {
            display: none;
          }
          [data-theme='light'] .ch-light-layout {
            display: block;
          }
          [data-theme='light'] .ch-desc {
            color: rgba(255, 255, 255, 0.9);
            font-weight: 400;
            filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
          }
          [data-theme='light'] .ch-scroll-text {
            color: rgba(255, 255, 255, 0.8);
            font-weight: 700;
            filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
          }
          [data-theme='light'] .ch-scroll-track {
            width: 2px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 9999px;
          }
          [data-theme='light'] .ch-scroll-thumb {
            box-shadow: 0 0 8px rgba(29, 155, 240, 0.8);
          }
        `}
			</style>

			<section className="relative w-full h-[100dvh] md:h-[120dvh] min-h-[755px] md:min-h-[900px] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
				{/* Background Image & Overlays */}
				<div className="absolute inset-0 z-0 bg-[#0A0A0A]">
					<ImageWithFallback
						src="https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZnJpY2FuJTIwb2ZmaWNlJTIwdGVhbXxlbnwxfHx8fDE3ODAwMTg5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
						alt="Cinematic Modern Workforce"
						className="w-full h-full object-cover ch-bg-img transition-all duration-500"
					/>
					<div className="absolute inset-0 ch-grad-1 z-10 transition-all duration-500" />
					<div className="absolute inset-0 ch-grad-2 z-10 transition-all duration-500" />
				</div>

				{/* Hero Content */}
				<div className="relative z-20 container-enterprise h-full flex flex-col justify-center">
					<div className="w-full max-w-[1200px] mx-auto relative pt-32">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
							className="flex items-center gap-4 mb-8">
							<span className="w-12 ch-line transition-all duration-500" />
							<span className="text-primary-blue font-mono text-sm tracking-[0.2em] uppercase ch-tag transition-all duration-500">{t('careersHero.tag')}</span>
						</motion.div>

						{/* DARK MODE LAYOUT (Original) */}
						<div className="relative ch-dark-layout">
							<motion.h1
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
								className="font-heading font-black text-white text-[clamp(4rem,8vw,8rem)] leading-[0.85] tracking-tighter">
								{t('careersHero.titleLine1')} <br />
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">{t('careersHero.titleLine2')}</span>
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
								{t('careersHero.titleLine3')}
							</motion.h1>
						</div>

						{/* LIGHT MODE LAYOUT (New changes) */}
						<div className="relative ch-light-layout">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
								className="absolute -right-[5%] top-[10%] w-[400px] h-[500px] hidden lg:block overflow-hidden rounded-2xl border border-white/5 z-0">
								<ImageWithFallback
									src="https://images.unsplash.com/photo-1771270759486-1f7703945072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9kZXJuJTIwb2ZmaWNlJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3ODAwMTg5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
									alt="Workspace Detail"
									className="w-full h-full object-cover mix-blend-luminosity opacity-80"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
							</motion.div>

							<div className="relative z-10 pointer-events-none">
								<motion.h1
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
									className="font-heading font-black text-black text-[clamp(4rem,8vw,8rem)] leading-[0.85] tracking-tighter">
									{t('careersHero.titleLine1')} <br />
									<span className="text-whites">{t('careersHero.titleLine2')}</span>
								</motion.h1>

								<motion.h1
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
									className="font-heading font-black text-black text-[clamp(4rem,8vw,8rem)] leading-[0.85] tracking-tighter mt-4">
									{t('careersHero.titleLine3')}
								</motion.h1>
							</div>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
							className="mt-16 max-w-xl">
							<p className="text-xl leading-relaxed ch-desc transition-all duration-500">{t('careersHero.description')}</p>
						</motion.div>
					</div>
				</div>

				{/* Scroll indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0, duration: 0.1 }}
					className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
					<span className="font-mono text-xs uppercase tracking-widest ch-scroll-text transition-all duration-500">{t('careersHero.scroll')}</span>
					<div className="h-16 overflow-hidden ch-scroll-track transition-all duration-500">
						<motion.div
							animate={{ y: [0, 64] }}
							transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
							className="w-full h-1/2 bg-primary-blue ch-scroll-thumb transition-all duration-500"
						/>
					</div>
				</motion.div>
			</section>
		</>
	);
}
