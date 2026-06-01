import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

import { useLanguage } from '../../../contexts/LanguageContext';

export function ServicesCTA() {
	const { t } = useLanguage();

	return (
		<section className="relative w-full py-40 bg-primary-blue overflow-hidden flex items-center justify-center min-h-[70vh]">
			{/* Structural Brutalist Background Overlay */}
			<div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay">
				<div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wIDQwLjVoNDBWMG0zOS41IDB2NDAiIHN0cm9rZT0iIzAwMCIvPjwvc3ZnPg==')]"></div>
			</div>

			<div className="container-enterprise relative z-10 text-center max-w-5xl">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: 'easeOut' }}>
					<div className="inline-block px-4 py-1 border-2 border-primary-black mb-8 text-primary-black font-bold uppercase tracking-widest text-xs">
						{t('Final Step')}
					</div>

					<h2 className="text-primary-black text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter leading-[0.9] mb-12 uppercase">
						{t('Build Smarter')} <br />
						<span className="text-white">{t('Operations')}</span> <br />
						{t('With 247HR')}
					</h2>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
						<button className="h-[64px] px-12 bg-primary-black text-white font-bold text-lg hover:bg-white hover:text-primary-black transition-colors flex items-center gap-3 group uppercase tracking-wide">
							{t('Initiate Deployment')}
							<ArrowRight
								size={20}
								className="group-hover:translate-x-2 transition-transform"
							/>
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
