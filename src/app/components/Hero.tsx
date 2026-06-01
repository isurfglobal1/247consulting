import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
	const { t } = useLanguage();

	return (
		<section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0A0A0A] pt-32 pb-20">
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
							<span className="text-white/80 text-sm font-medium tracking-wide">{t('Enterprise HR Infrastructure')}</span>
						</div>

						<h1 className="font-heading font-black text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tighter text-white mb-6">
							{t("Building Africa's")} <br />
							<span className="text-primary-blue">{t('Next Workforce')}</span> {t('Infrastructure.')}
						</h1>

						<p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-10 max-w-lg">
							{t('Modern Workforce Solutions for High-Growth Enterprises. 247HR powers the workforce infrastructure behind modern businesses.')}
						</p>

						<div className="flex flex-wrap gap-4">
							<button className="h-[56px] px-8 rounded-xl bg-primary-blue text-white font-bold tracking-wide hover:bg-white hover:text-primary-black transition-all duration-300 shadow-[0_0_20px_rgba(29,155,240,0.3)]">
								{t('Get Started')}
							</button>
							<button className="h-[56px] px-8 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
								{t('Explore Services')}
							</button>
						</div>
					</motion.div>

					{/* Right: Image with Floating Widgets */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						className="relative w-full h-full min-h-[500px] flex items-center justify-center lg:justify-end">
						{/* Main Rounded Image */}
						<div className="relative w-[85%] max-w-[500px] aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl z-10">
							<ImageWithFallback
								src="https://images.unsplash.com/photo-1604933762021-54a5858c9832?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3N3b21hbiUyMGxhcHRvcHxlbnwxfHx8fDE3Nzk5OTc2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
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
								<div className="text-white text-sm font-bold">{t('Hayle Calden')}</div>
								<div className="text-white/50 text-xs">{t('HR Director')}</div>
							</div>
							<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
						</motion.div>

						{/* Floating Widget 2: Salary/Card (Top Right) */}
						<motion.div
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.8, duration: 0.8 }}
							className="absolute top-0 right-[5%] z-20 bg-[#151515]/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] w-[200px]">
							<div className="text-white/50 text-xs font-medium mb-1 uppercase tracking-wider">{t('Salary')}</div>
							<div className="text-white text-2xl font-heading font-bold mb-4">ብር5,400</div>

							<div className="space-y-3">
								<div className="flex justify-between items-center text-xs">
									<span className="text-white/60">{t('Base')}</span>
									<span className="text-white font-medium">ብር 4,500</span>
								</div>
								<div className="flex justify-between items-center text-xs">
									<span className="text-white/60">{t('Bonus')}</span>
									<span className="text-green-400 font-medium">+ብር 900</span>
								</div>
							</div>
						</motion.div>

						{/* Floating Widget 3: Payroll List (Bottom Left) */}
						<motion.div
							initial={{ x: -20, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ delay: 1, duration: 0.8 }}
							className="absolute bottom-[15%] left-[5%] lg:-left-[15%] z-20 bg-[#151515]/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] w-[280px]">
							<div className="text-white text-sm font-bold mb-4">{t('Recent Payroll')}</div>
							<div className="space-y-4">
								{[
									{ name: 'Sarah Oken', role: 'Design', amount: 'ብር 3,200', color: 'bg-purple-500' },
									{ name: 'James Carter', role: 'Engineering', amount: 'ብር 4,500', color: 'bg-blue-500' },
									{ name: 'Helen Davies', role: 'Marketing', amount: 'ብር 2,900', color: 'bg-orange-500' },
								].map((item, i) => (
									<div
										key={i}
										className="flex items-center gap-3">
										<div className={`w-8 h-8 rounded-full ብር{item.color} flex items-center justify-center text-white text-xs font-bold`}>{item.name.charAt(0)}</div>
										<div className="flex-1">
											<div className="text-white text-sm">{t(item.name)}</div>
											<div className="text-white/40 text-[10px] uppercase">{t(item.role)}</div>
										</div>
										<div className="text-white font-medium text-sm">{item.amount}</div>
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
