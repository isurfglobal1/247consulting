import { motion } from 'motion/react';

import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CareersProcess() {
	const { t } = useLanguage();

	const steps = [t('Application'), t('Screening'), t('Interview'), t('Assessment'), t('Offer'), t('Onboarding')];

	return (
		<section className="relative w-full py-32 bg-[#0A0A0A] overflow-hidden">
			<div className="absolute inset-0 opacity-10">
				<ImageWithFallback
					src="https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWJzdHJhY3QlMjBhcmNoaXRlY3R1cmUlMjBsaW5lc3xlbnwxfHx8fDE3ODAwMTkwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
					alt="Architecture Lines"
					className="w-full h-full object-cover mix-blend-screen"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
			</div>

			<div className="container-enterprise relative z-10">
				<div className="text-center mb-24">
					<h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight">{t('The Path In.')}</h2>
				</div>

				<div className="relative max-w-5xl mx-auto">
					{/* Connecting line */}
					<div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 hidden md:block" />

					<div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative">
						{steps.map((step, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: idx * 0.1 }}
								className="flex flex-col items-center group cursor-default">
								<div className="w-12 h-12 rounded-full bg-[#0A0A0A] border border-white/20 flex items-center justify-center text-white/50 font-mono text-sm relative z-10 group-hover:border-primary-blue group-hover:text-primary-blue transition-colors duration-500">
									0{idx + 1}
									<div className="absolute inset-0 rounded-full bg-primary-blue/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md" />
								</div>
								<span className="text-white/70 font-medium text-sm md:text-base mt-6 group-hover:text-white transition-colors duration-300">{step}</span>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
