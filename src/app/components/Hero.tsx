import { ArrowRight, CheckCircle2, Link as LinkIcon, Lock, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

import { useLanguage } from '../contexts/LanguageContext';
import { ConsultationDrawer } from './ConsultationDrawer';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
	const { t } = useLanguage();
	return (
		<section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0A0A0A] pt-40 pb-20">
			{/* Background Layering */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-primary-blue/10 blur-[150px] mix-blend-screen pointer-events-none translate-x-1/4 -translate-y-1/4"></div>
				<div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-deep-navy/30 blur-[150px] mix-blend-screen pointer-events-none -translate-x-1/4 translate-y-1/4"></div>
				<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
			</div>

			<div className="container-enterprise relative z-10 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
					{/* Left: Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						className="flex flex-col items-start text-left max-w-2xl">
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
							<div className="bg-primary-blue/20 p-1 rounded-full text-primary-blue">
								<Sparkles size={14} />
							</div>
							<span className="text-white/80 text-sm font-medium tracking-wide">{t('hero.tag')}</span>
						</div>

						<h1 className="font-heading font-black text-[clamp(1.875rem,4vw,3.625rem)] leading-[1.05] tracking-tighter text-white mb-6">
							<span className="whitespace-nowrap">{t('hero.h1.1')}</span> <br />
							<span className="text-primary-blue">{t('hero.h1.2')}</span> {t('hero.h1.3')}
						</h1>

						<p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-10 max-w-lg">{t('hero.desc')}</p>

						<div className="flex flex-wrap gap-4">
							<Link
								to="/contact"
								className="h-[56px] px-8 rounded-xl bg-primary-blue font-bold tracking-wide hover:bg-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(29,155,240,0.3)] flex items-center justify-center">
								{t('hero.btn.start')}
							</Link>
							<ConsultationDrawer
								renderTrigger={(open) => (
									<button
										onClick={open}
										className="h-[56px] px-8 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
										{t('hero.btn.book')}
									</button>
								)}
							/>
						</div>
					</motion.div>

					{/* Right: Image with Floating Widgets */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						className="relative w-full h-full min-h-[300px] sm:min-h-[500px] flex items-center justify-center lg:justify-end">
						{/* Main Rounded Image */}
						<div className="relative w-[85%] max-w-[500px] aspect-[4/5] rounded-[20px] sm:rounded-[32px] overflow-hidden border border-white/10 shadow-2xl z-10">
							<ImageWithFallback
								src="/hero-image.webp"
								alt="Professional using software"
								className="w-full h-full object-cover opacity-90"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent"></div>
						</div>

						{/* Floating Widget 1: User Profile (Top Left) */}
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.8 }}
							className="absolute top-[10%] left-0 lg:-left-[10%] z-20 bg-[#151515]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] w-[240px]">
							<div className="w-10 h-10 rounded-full bg-primary-blue overflow-hidden border border-white/20 shrink-0">
								<ImageWithFallback
									src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3OTk5ODUwMHww&ixlib=rb-4.1.0&q=80&w=1080"
									alt="Avatar"
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="flex-1">
								<div className="text-white text-sm font-bold">{t('hero.profileName')}</div>
								<div className="text-white/50 text-xs">{t('hero.profileRole')}</div>
							</div>
							<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
						</motion.div>

						{/* Floating Widget 2: Salary/Card (Top Right) */}
						<motion.div
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.8, duration: 0.8 }}
							className="absolute top-0 right-[5%] z-20 bg-[#151515]/90 backdrop-blur-xl border border-white/10 p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] w-[140px] sm:w-[200px]">
							<div className="text-white/50 text-[10px] sm:text-xs font-medium mb-1 uppercase tracking-wider">{t('hero.salary', 'Salary')}</div>
							<div className="text-white text-lg sm:text-2xl font-heading font-bold mb-3 sm:mb-4">Birr5,400</div>

							<div className="space-y-2 sm:space-y-3">
								<div className="flex justify-between items-center text-xs">
									<span className="text-white/60">{t('hero.base', 'Base')}</span>
									<span className="text-white font-medium">Birr4,500</span>
								</div>
								<div className="flex justify-between items-center text-xs">
									<span className="text-white/60">{t('hero.bonus', 'Bonus')}</span>
									<span className="text-green-400 font-medium">+Birr900</span>
								</div>
							</div>
						</motion.div>

						{/* Floating Widget 3: Payroll List (Bottom Left) */}
						<motion.div
							initial={{ x: -20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ delay: 1, duration: 0.8 }}
							className="absolute bottom-[15%] left-[5%] lg:-left-[15%] z-20 bg-[#151515]/90 backdrop-blur-xl border border-white/10 p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] w-[200px] sm:w-[280px]">
							<div className="text-white text-xs sm:text-sm font-bold mb-3 sm:mb-4">{t('hero.recentPayroll', 'Recent Payroll')}</div>
							<div className="space-y-2.5 sm:space-y-4">
								{[
									{ name: t('hero.payroll.name1'), role: t('hero.payroll.role1'), amount: 'Birr3,200', color: 'bg-purple-500' },
									{ name: t('hero.payroll.name2'), role: t('hero.payroll.role2'), amount: 'Birr4,500', color: 'bg-blue-500' },
									{ name: t('hero.payroll.name3'), role: t('hero.payroll.role3'), amount: 'Birr2,900', color: 'bg-orange-500' },
								].map((item, i) => (
									<div
										key={i}
									className="flex items-center gap-2 sm:gap-3">
									<div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${item.color} flex items-center justify-center text-white text-[10px] sm:text-xs font-bold`}>{item.name.charAt(0)}</div>
									<div className="flex-1 min-w-0">
										<div className="text-white text-xs sm:text-sm truncate">{item.name}</div>
										<div className="text-white/40 text-[9px] sm:text-[12px] uppercase">{item.role}</div>
								</div>
									<div className="text-white font-medium text-[11px] sm:text-sm whitespace-nowrap">{item.amount}</div>
									</div>
								))}
							</div>
						</motion.div>

						{/* Abstract Decorative Shapes (Matching the image vibe but dark theme) */}
						<div className="absolute top-[20%] -right-[10%] w-32 h-32 border-[20px] border-primary-blue/20 rounded-full z-0 pointer-events-none"></div>
						<div className="absolute -bottom-[5%] right-[20%] w-24 h-24 bg-orange-500/20 rounded-bl-full rounded-tr-full z-0 pointer-events-none blur-sm"></div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
