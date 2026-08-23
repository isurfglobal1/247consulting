import { Activity, ArrowRight, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutHero() {
	const { t } = useLanguage();

	return (
		<section className="relative w-full min-h-screen bg-[#0A0A0A] overflow-hidden flex items-center pt-32 pb-24">
			{/* Background Ambience */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary-blue/10 rounded-full blur-[120px] mix-blend-screen"></div>
				<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-deep-navy/40 rounded-full blur-[120px] mix-blend-screen"></div>
				{/* Subtle Grid */}
				<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
			</div>

			<div className="container-enterprise relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
				{/* Text Content */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className="lg:col-span-7 z-20">
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
						<span className="w-2 h-2 rounded-full bg-primary-blue animate-pulse"></span>
						<span className="text-white/80 text-sm font-medium tracking-wide">{t('aboutHero.tagline')}</span>
					</div>

					<h1 className="font-heading font-black text-[clamp(2.375rem,5vw,4.875rem)] leading-[1.05] tracking-tighter text-white mb-8">
						{t('aboutHero.title1')} <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-white">{t('aboutHero.title2')}</span> <br />
						{t('aboutHero.title3')}
					</h1>

					<p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-12 max-w-xl">{t('aboutHero.description')}</p>

					<div className="flex flex-wrap gap-4">
						<Link
							to="/services"
							className="h-[56px] px-8 rounded-xl bg-white text-primary-black font-bold tracking-wide hover:bg-primary-blue hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(29,155,240,0.4)] flex items-center gap-2 group">
							{t('aboutHero.buttonExplore')}
							<ArrowRight
								size={18}
								className="group-hover:translate-x-1 transition-transform"
							/>
						</Link>

						<Link
							to="/contact"
							className="flex items-center justify-center h-[56px] px-8 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
							{t('aboutHero.buttonWorkWithUs')}
						</Link>
					</div>
				</motion.div>

				{/* Visual Composition */}
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
					className="lg:col-span-5 relative z-10 hidden md:block">
					<div className="relative w-full aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
						<ImageWithFallback
							src="https://images.unsplash.com/photo-1631023777074-8a85f27bf67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBza3lzY3JhcGVyJTIwaW50ZXJpb3IlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwMDExMjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
							alt={t('aboutHero.imageAlt')}
							className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
						/>

						{/* Overlay Gradient */}
						<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
						<div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-transparent mix-blend-overlay"></div>

						{/* Floating UI Elements */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.8, duration: 0.6 }}
							className="absolute top-12 -left-8 bg-[#111]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl w-[220px]">
							<div className="flex items-center gap-3 mb-2">
								<div className="w-8 h-8 rounded-full bg-primary-blue/20 flex items-center justify-center">
									<Activity
										size={16}
										className="text-primary-blue"
									/>
								</div>
								<div>
									<div className="text-white text-xs font-bold">{t('aboutHero.metric1Title')}</div>
									<div className="text-green-400 text-[12px]">{t('aboutHero.metric1Value')}</div>
								</div>
							</div>
							<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
								<div className="h-full bg-primary-blue w-[78%]"></div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1, duration: 0.6 }}
							className="absolute bottom-12 right-[-20px] bg-[#111]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl w-[240px]">
							<div className="flex items-center gap-3 mb-3">
								<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
									<Users
										size={16}
										className="text-white"
									/>
								</div>
								<div>
									<div className="text-white text-xs font-bold">{t('aboutHero.metric2Title')}</div>
									<div className="text-white/50 text-[12px]">{t('aboutHero.metric2Value')}</div>
								</div>
							</div>
							<div className="flex -space-x-2">
								{[1, 2, 3, 4].map((i) => (
									<div
										key={i}
										className="w-8 h-8 rounded-full border-2 border-[#111] bg-white/20 overflow-hidden">
										<ImageWithFallback
											src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=facearea&facepad=2&w=100&h=100&q=80`}
											alt="Avatar"
											className="w-full h-full object-cover opacity-80"
										/>
									</div>
								))}
								<div className="w-8 h-8 rounded-full border-2 border-[#111] bg-white/10 flex items-center justify-center text-[12px] text-white font-medium">
									{t('aboutHero.metric2Extra')}
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
