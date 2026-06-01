import { motion } from 'motion/react';

import { useLanguage } from '../../../contexts/LanguageContext';

export function ServicesProcess() {
	const { t } = useLanguage();

	const steps = [
		{ num: '01', title: t('Consultation & Architecture'), desc: t('Mapping the operational gaps and designing the human capital infrastructure.') },
		{ num: '02', title: t('Talent Mapping'), desc: t('Algorithmic market analysis and executive target identification.') },
		{ num: '03', title: t('Verification Protocol'), desc: t('Rigorous legal, credential, and behavioral vetting processes.') },
		{ num: '04', title: t('System Deployment'), desc: t('Seamless integration of personnel, payroll, and compliance systems.') },
		{ num: '05', title: t('Workforce Optimization'), desc: t('Continuous performance analytics and structural scaling.') },
	];

	return (
		<section className="relative w-full py-32 bg-[#0A0A0A] overflow-hidden border-y border-white/5">
			{/* Network Background */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[600px] opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxwYXRoIGQ9Ik0wLDUwMCBDMzAwLDIwMCA3MDAsODAwIDEwMDAsNTAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxRDlCRjAiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')] bg-no-repeat bg-center"></div>
			</div>

			<div className="container-enterprise relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center max-w-4xl mx-auto mb-24">
					<div className="text-primary-blue font-mono text-sm tracking-widest uppercase mb-6">{t('Execution Protocol')}</div>
					<h2 className="text-white text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.05]">
						{t('The Operational Flow')} <br /> <span className="text-white/30">{t('Architecture')}</span>
					</h2>
				</motion.div>

				<div className="relative">
					{/* Central Connecting Line (Desktop) */}
					<div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2">
						<motion.div
							initial={{ scaleX: 0 }}
							whileInView={{ scaleX: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 1.5, ease: 'easeInOut' }}
							className="h-full bg-primary-blue origin-left"></motion.div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative">
						{steps.map((step, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: idx * 0.2 }}
								className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
								{/* Node Indicator */}
								<div className="w-16 h-16 rounded-2xl bg-[#0A0A0A] border border-primary-blue/50 flex items-center justify-center text-primary-blue font-heading font-black text-xl mb-8 relative z-10 shadow-[0_0_20px_rgba(29,155,240,0.2)]">
									{step.num}
									{/* Subtle pulse */}
									<div className="absolute inset-0 rounded-2xl border border-primary-blue/30 animate-ping"></div>
								</div>

								<h3 className="text-white text-xl font-bold font-heading mb-3">{step.title}</h3>
								<p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
