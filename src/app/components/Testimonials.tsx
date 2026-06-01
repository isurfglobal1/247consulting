import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'motion/react';

import { useLanguage } from '../../contexts/LanguageContext';
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
							{t('Trusted by')} <br /> {t('Continental Leaders')}
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
								<p className="text-white/80 font-body text-sm leading-relaxed mb-6">
									{t(
										'"The structural elegance of this platform completely transformed our West African operations. It is the absolute gold standard for enterprise workforce management."'
									)}
								</p>
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-primary-blue overflow-hidden">
										<ImageWithFallback
											src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3OTk5ODUwMHww&ixlib=rb-4.1.0&q=80&w=1080"
											alt="Avatar"
											className="w-full h-full object-cover"
										/>
									</div>
									<div>
										<div className="text-white text-sm font-bold">{t('Amina Diop')}</div>
										<div className="text-white/40 text-[10px] uppercase">{t('Chief Operations Officer')}</div>
									</div>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.2 }}
								className="bg-[#111] border border-white/10 p-6 rounded-2xl shadow-xl w-[95%] relative -ml-4 z-10">
								<p className="text-white/80 font-body text-sm leading-relaxed mb-6">
									{t(
										'"Finally, a solution that understands the nuance of pan-African compliance. The predictive analytics alone have optimized our continental labor structuring significantly."'
									)}
								</p>
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-orange-500 overflow-hidden">
										<ImageWithFallback
											src="https://images.unsplash.com/photo-1531123897727-8f129e1bf98a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3OTk5ODUwMHww&ixlib=rb-4.1.0&q=80&w=1080"
											alt="Avatar"
											className="w-full h-full object-cover"
										/>
									</div>
									<div>
										<div className="text-white text-sm font-bold">{t('Kwame Mensah')}</div>
										<div className="text-white/40 text-[10px] uppercase">{t('VP of Strategy')}</div>
									</div>
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.3 }}
								className="bg-[#151515] border border-white/10 p-6 rounded-2xl shadow-xl w-[85%] ml-auto">
								<p className="text-white/80 font-body text-sm leading-relaxed mb-6">
									{t(
										'"Deploying this infrastructure was a turning point. The robust API and seamless multi-country payroll features provide stability we couldnt find elsewhere."'
									)}
								</p>
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-purple-500 overflow-hidden">
										<ImageWithFallback
											src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFufGVufDF8fHx8MTc3OTk5ODUwMHww&ixlib=rb-4.1.0&q=80&w=1080"
											alt="Avatar"
											className="w-full h-full object-cover"
										/>
									</div>
									<div>
										<div className="text-white text-sm font-bold">{t('Sarah Ndiaye')}</div>
										<div className="text-white/40 text-[10px] uppercase">{t('Head of Architecture')}</div>
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
