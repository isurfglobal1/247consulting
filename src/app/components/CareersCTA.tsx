import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CareersCTA() {
	const { t } = useLanguage();

	return (
		<section className="relative w-full py-40 min-h-[800px] flex items-center justify-center bg-[#050505] overflow-hidden">
			<div className="absolute inset-0 z-0">
				<ImageWithFallback
					src="https://images.unsplash.com/photo-1710438399422-2fca27686bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBkYXJrJTIwbHV4dXJ5JTIwYWJzdHJhY3QlMjBsaWdodHxlbnwxfHx8fDE3ODAwMTkwODB8MA&ixlib=rb-4.1.0&q=80&w=1080"
					alt={t('careersCTA.backgroundAlt')}
					className="w-full h-full object-cover opacity-30 mix-blend-screen scale-110"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(29,155,240,0.15)_0%,rgba(10,10,10,0)_60%)]" />
			</div>

			<div className="container-enterprise relative z-10 flex flex-col items-center text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
					className="flex flex-col items-center">
					<h2 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-black text-white leading-[0.9] tracking-tighter mb-12 max-w-5xl">
						{t('careersCTA.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary-blue to-primary-blue/30">{t('careersCTA.title2')}</span>
					</h2>

					<button className="group relative overflow-hidden bg-white text-primary-black px-12 py-6 rounded-full font-bold text-lg tracking-wide hover:text-real-white hover:shadow-[0_0_40px_rgba(29,155,240,0.5)] transition-all duration-500 hover:scale-105 flex items-center gap-4">
						<span className="relative z-10">{t('careersCTA.button')}</span>
						<ArrowUpRight
							className="relative z-10 group-hover:rotate-45 transition-transform duration-500"
							size={24}
						/>
						<div className="absolute inset-0 bg-primary-blue scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1]" />
					</button>
				</motion.div>
			</div>
		</section>
	);
}
