import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'motion/react';

import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
	const { t } = useLanguage();
	return (
		<section className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
			<div className="container-enterprise relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Left: Text and Controls */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="max-w-md">
						<h2 className="text-white text-4xl md:text-6xl font-heading font-black tracking-tight mb-10">
							{t('testimonials.title', 'Trusted by \n Continental Leaders')
								.split('\n')
								.map((line, i) => (
									<span key={i}>
										{line}
										<br />
									</span>
								))}
						</h2>

						<div className="flex gap-4">
							<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
								<ArrowLeft size={20} />
							</button>
							<button className="w-12 h-12 rounded-full bg-white text-primary-black flex items-center justify-center hover:bg-white/90 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
								<ArrowRight size={20} />
							</button>
						</div>

						{/* Background shape */}
						<div className="absolute top-1/2 -left-20 w-40 h-40 bg-purple-600/20 rounded-tr-[100px] rounded-bl-[100px] -z-10 blur-xl"></div>
					</motion.div>

					{/* Right: Staggered Cards */}
					<div className="relative">
						<Quote className="absolute -right-10 top-0 text-white/5 w-32 h-32 rotate-180" />

						<div className="space-y-6">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.1 }}
								className="bg-[#151515] border border-white/10 p-6 rounded-2xl shadow-xl w-[90%] ml-auto">
								<p className="text-white/80 font-body text-sm leading-relaxed mb-6">{t('testimonials.quote1')}</p>
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-primary-blue overflow-hidden">
										<ImageWithFallback
											src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3OTk5ODUwMHww&ixlib=rb-4.1.0&q=80&w=1080"
											alt={t('testimonials.avatarAlt1')}
											className="w-full h-full object-cover"
										/>
									</div>
									<div>
										<div className="text-white text-sm font-bold">{t('testimonials.name1')}</div>
										<div className="text-white/40 text-[10px] uppercase">{t('testimonials.role1')}</div>
									</div>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.2 }}
								className="bg-[#111] border border-white/10 p-6 rounded-2xl shadow-xl w-[95%] relative -ml-4 z-10">
								<p className="text-white/80 font-body text-sm leading-relaxed mb-6">{t('testimonials.quote2')}</p>
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-orange-500 overflow-hidden">
										<ImageWithFallback
											src="/testimony_1.webp"
											alt={t('testimonials.avatarAlt2')}
											className="w-full h-full object-cover"
										/>
									</div>
									<div>
										<div className="text-white text-sm font-bold">{t('testimonials.name2')}</div>
										<div className="text-white/40 text-[10px] uppercase">{t('testimonials.role2')}</div>
									</div>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.3 }}
								className="bg-[#151515] border border-white/10 p-6 rounded-2xl shadow-xl w-[85%] ml-auto">
								<p className="text-white/80 font-body text-sm leading-relaxed mb-6">{t('testimonials.quote3')}</p>
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-purple-500 overflow-hidden">
										<ImageWithFallback
											src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFufGVufDF8fHx8MTc3OTk5ODUwMHww&ixlib=rb-4.1.0&q=80&w=1080"
											alt={t('testimonials.avatarAlt3')}
											className="w-full h-full object-cover"
										/>
									</div>
									<div>
										<div className="text-white text-sm font-bold">{t('testimonials.name3')}</div>
										<div className="text-white/40 text-[10px] uppercase">{t('testimonials.role3')}</div>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
