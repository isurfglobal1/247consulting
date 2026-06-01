import { ArrowRight, ChevronUp, Settings, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';

import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Services() {
	const { t } = useLanguage();

	return (
		<section className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden">
			<div className="container-enterprise relative z-10 space-y-32">
				{/* ZigZag 1: Image Left, Text Right */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative">
						{/* Background decorative shape */}
						<div className="absolute -left-10 -bottom-10 w-40 h-40 bg-primary-blue/20 rounded-full blur-3xl pointer-events-none"></div>
						<div className="absolute -right-5 top-10 w-20 h-20 bg-orange-500/20 rounded-full blur-2xl pointer-events-none"></div>

						<div className="relative z-10 rounded-[32px] overflow-hidden aspect-square max-w-[450px] mx-auto border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
							<ImageWithFallback
								src="https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFscyUyMGNvbGxhYm9yYXRpdmUlMjBtZWV0aW5nfGVufDF8fHx8MTc3OTk3ODM2MHww&ixlib=rb-4.1.0&q=80&w=1080"
								alt="Global Payroll"
								className="w-full h-full object-cover opacity-80"
							/>

							{/* Floating Widget */}
							<div className="absolute bottom-8 right-[-20px] bg-[#151515]/90 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl w-[240px]">
								<div className="flex items-center gap-3 mb-4">
									<div className="w-10 h-10 rounded-full bg-orange-500 overflow-hidden">
										<ImageWithFallback
											src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbWFufGVufDF8fHx8MTc3OTk5ODUwMHww&ixlib=rb-4.1.0&q=80&w=1080"
											alt="Avatar"
											className="w-full h-full object-cover"
										/>
									</div>
									<div>
										<div className="text-white text-sm font-bold">{t('Marley Aminoff')}</div>
										<div className="text-white/40 text-[10px] uppercase">{t('Compliance Director')}</div>
									</div>
								</div>
								<div className="space-y-2 text-xs">
									<div className="flex justify-between">
										<span className="text-white/60">{t('Active Jurisdictions:')}</span>
										<span className="text-white">14</span>
									</div>
									<div className="flex justify-between">
										<span className="text-white/60">{t('Compliance Audits:')}</span>
										<span className="text-white">100%</span>
									</div>
								</div>
								<div className="mt-4 pt-3 border-t border-white/10">
									<div className="text-white/40 text-[10px] mb-1">{t('Total Regional Disbursed')}</div>
									<div className="text-white font-bold text-lg">ብር 2.4M</div>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="max-w-md">
						<h2 className="text-white text-3xl md:text-5xl font-heading font-black tracking-tight mb-6">
							{t('Payroll')} <br /> {t('Outsourcing')}
						</h2>
						<p className="text-white/60 text-lg font-body mb-8 leading-relaxed">
							{t(
								'Unify your entire African workforce under a single financial architecture. Automate multi-currency disbursements, localized tax withholdings, and statutory deductions with zero operational friction.'
							)}
						</p>
						<button className="flex items-center gap-2 text-primary-blue font-bold hover:text-white transition-colors">
							{t('Explore Payroll Infrastructure')} <ArrowRight size={18} />
						</button>
					</motion.div>
				</div>

				{/* ZigZag 2: Text Left, Image Right */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="max-w-md lg:order-1 order-2">
						<h2 className="text-white text-3xl md:text-5xl font-heading font-black tracking-tight mb-6">
							{t('Recruitment')} <br /> {t('Staffing')}
						</h2>
						<p className="text-white/60 text-lg font-body mb-8 leading-relaxed">
							{t(
								'Deploy advanced operational frameworks to map capabilities, track executive KPIs, and automate complex onboarding procedures across multiple subsidiaries and time zones.'
							)}
						</p>
						<div className="flex items-center gap-6 text-sm font-medium text-white/80">
							<div className="flex items-center gap-2">
								<UserCheck
									size={18}
									className="text-primary-blue"
								/>{' '}
								{t('Predictive modeling')}
							</div>
							<div className="flex items-center gap-2">
								<Settings
									size={18}
									className="text-primary-blue"
								/>{' '}
								{t('Automated workflows')}
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative lg:order-2 order-1">
						{/* Background shapes */}
						<div className="absolute top-10 right-0 w-[80%] h-[80%] bg-purple-600/20 rounded-bl-[100px] -z-10"></div>
						<div className="absolute bottom-0 right-10 w-32 h-32 bg-orange-500/20 rounded-tr-[100px] -z-10"></div>

						<div className="relative z-10 bg-[#111] rounded-[24px] border border-white/10 p-6 shadow-2xl">
							<div className="flex gap-4">
								{/* Sidebar mockup */}
								<div className="w-16 space-y-4 pt-2">
									<div className="w-8 h-8 rounded bg-primary-blue/20"></div>
									<div className="w-8 h-2 rounded bg-white/10"></div>
									<div className="w-8 h-2 rounded bg-white/10"></div>
									<div className="w-8 h-2 rounded bg-white/10"></div>
								</div>
								{/* Main content mockup */}
								<div className="flex-1">
									<div className="flex justify-between items-center mb-6">
										<div className="text-white text-sm font-bold">{t('Executive Dashboard')}</div>
										<div className="flex gap-2">
											<div className="w-16 h-6 rounded bg-white/5"></div>
											<div className="w-6 h-6 rounded-full bg-white/10"></div>
										</div>
									</div>
									<div className="grid grid-cols-2 gap-4 mb-6">
										<div className="bg-white/5 p-4 rounded-xl border border-white/5">
											<div className="flex items-center gap-2 mb-3">
												<div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-[10px] font-bold">ACC</div>
												<div className="text-white text-xs font-bold">{t('Accra Hub')}</div>
											</div>
											<div className="text-white text-lg font-bold">ብር 4.2M</div>
										</div>
										<div className="bg-white/5 p-4 rounded-xl border border-white/5">
											<div className="flex items-center gap-2 mb-3">
												<div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold">NBO</div>
												<div className="text-white text-xs font-bold">{t('Nairobi Hub')}</div>
											</div>
											<div className="text-white text-lg font-bold">ብር 8.1M</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				{/* ZigZag 3: Image Left, Text Right */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative">
						<div className="absolute top-0 -left-10 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl pointer-events-none"></div>

						{/* Charts Mockup */}
						<div className="relative z-10 flex gap-6 items-end justify-center">
							<div className="bg-[#111] p-5 rounded-2xl border border-white/10 shadow-2xl w-[200px] mb-10">
								<div className="flex justify-between items-center mb-6">
									<div className="text-white/50 text-xs font-medium">{t('Operational Efficiency')}</div>
									<div className="text-green-400 text-xs flex items-center">
										<ChevronUp size={12} /> 94%
									</div>
								</div>
								<div className="space-y-4">
									{[1, 2, 3].map((_, i) => (
										<div
											key={i}
											className="flex items-center gap-3">
											<div className="w-8 h-8 rounded-full bg-white/10"></div>
											<div className="w-20 h-2 bg-white/10 rounded"></div>
										</div>
									))}
								</div>
							</div>

							<div className="bg-[#151515] p-6 rounded-2xl border border-white/10 shadow-2xl w-[240px] z-20 -ml-10">
								<div className="text-white text-sm font-bold mb-6">{t('Capital Disbursement')}</div>
								<div className="flex items-end gap-3 h-32 mb-4">
									<div className="w-8 bg-purple-500/40 rounded-t-md h-[40%]"></div>
									<div className="w-8 bg-purple-500 rounded-t-md h-[80%] relative">
										<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold py-1 px-2 rounded">ብር 1.2M</div>
									</div>
									<div className="w-8 bg-purple-500/60 rounded-t-md h-[60%]"></div>
									<div className="w-8 bg-purple-500/30 rounded-t-md h-[50%]"></div>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 40 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="max-w-md">
						<h2 className="text-white text-3xl md:text-5xl font-heading font-black tracking-tight mb-6">
							{t('HR')} <br /> {t('Outsourcing')}
						</h2>
						<p className="text-white/60 text-lg font-body mb-8 leading-relaxed">
							{t(
								'Built for the demands of high-growth African enterprises. Our infrastructure provides the stability and robust API ecosystem required for rapid market penetration.'
							)}
						</p>
						<button className="px-8 py-4 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#F05A28]/90 transition-colors shadow-lg">
							{t('Initiate Deployment')}
						</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
