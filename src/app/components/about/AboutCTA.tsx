import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

import { useLanguage } from '../../../contexts/LanguageContext';

export function AboutCTA() {
	const { t } = useLanguage();

	return (
		<section className="relative w-full bg-[#0A0A0A] py-24 px-4 md:px-8 overflow-hidden">
			{/* Background ambient lighting */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

			<div className="max-w-[1200px] mx-auto bg-[#111] border border-white/5 rounded-[40px] relative overflow-hidden flex flex-col items-center py-32 px-6 shadow-2xl">
				{/* Subtle grid and shapes inside container */}
				<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')]"></div>
				<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center relative z-10 w-full">
					<div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
						<span className="text-white/80 text-xs font-bold tracking-widest uppercase">{t('The Next Step')}</span>
					</div>

					<h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight mb-8 max-w-4xl mx-auto leading-[1.05]">
						{t('Build the Future of')} <br />
						<span className="text-primary-blue">{t('Workforce Operations')}</span> <br />
						{t('With 247HR')}
					</h2>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
						<button className="h-[64px] px-10 rounded-xl bg-white text-primary-black font-bold text-lg hover:bg-primary-blue hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(29,155,240,0.5)] flex items-center gap-2 group">
							{t('Start Your Transformation')}
							<ArrowRight
								size={20}
								className="group-hover:translate-x-1 transition-transform"
							/>
						</button>
						<button className="h-[64px] px-10 rounded-xl bg-transparent border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-colors">
							{t('Speak to Leadership')}
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
