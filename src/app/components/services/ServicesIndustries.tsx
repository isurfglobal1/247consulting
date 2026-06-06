import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ServicesIndustries() {
	const { t } = useLanguage();
	const [activeGroup, setActiveGroup] = useState<0 | 1>(0);

	const groups = [
		[
			{
				name: t('servicesIndustries.bankingFinance'),
				img: 'https://images.unsplash.com/photo-1655720357872-ce227e4164ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29ycG9yYXRlJTIwYmFua2luZyUyMGJyaWdodCUyMGNvbG9yfGVufDF8fHx8MTc4MDcwMTk4NXww&ixlib=rb-4.1.0&q=80&w=1080',
			},
			{
				name: t('servicesIndustries.technology'),
				img: 'https://images.unsplash.com/photo-1487083990731-52aaad54939a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwdGVjaCUyMGVudGVycHJpc2UlMjBhcmNoaXRlY3R1cmUlMjBicmlnaHQlMjBjb2xvcnxlbnwxfHx8fDE3ODA3MDE5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
			},
			{
				name: t('servicesIndustries.retailLogistics'),
				img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJ1c2luZXNzJTIwbWVldGluZyUyMGJyaWdodCUyMGNvbG9yfGVufDF8fHx8MTc4MDcwMTk4MXww&ixlib=rb-4.1.0&q=80&w=1080',
			},
			{
				name: t('servicesIndustries.manufacturing'),
				img: 'https://images.unsplash.com/photo-1726731782158-fcf6822b6ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeSUyMGZhY2lsaXR5JTIwYnJpZ2h0JTIwY29sb3J8ZW58MXx8fHwxNzgwNzAyMDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
			},
		],
		[
			{
				name: t('servicesIndustries.telecom'),
				img: 'https://images.unsplash.com/photo-1557174360-3f4f7c724501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tbXVuaWNhdGlvbiUyMHRvd2VyJTIwYnJpZ2h0JTIwY29sb3J8ZW58MXx8fHwxNzgwNzAyMDcxfDA&ixlib=rb-4.1.0&q=80&w=1080',
			},
			{
				name: t('servicesIndustries.healthcare'),
				img: 'https://images.unsplash.com/photo-1719934398679-d764c1410770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJyaWdodCUyMGNvbG9yfGVufDF8fHx8MTc4MDcwMjA2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
			},
			{
				name: t('servicesIndustries.government'),
				img: 'https://images.unsplash.com/photo-1573181759662-1c146525b21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBicmlnaHQlMjBjb2xvcnxlbnwxfHx8fDE3ODA3MDIwNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
			},
			{
				name: t('servicesIndustries.oilGas'),
				img: 'https://images.unsplash.com/photo-1726731782158-fcf6822b6ca4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeSUyMGZhY2lsaXR5JTIwYnJpZ2h0JTIwY29sb3J8ZW58MXx8fHwxNzgwNzAyMDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
			},
		],
	];

	const activeIndustries = groups[activeGroup];
	const inactiveIndustries = groups[activeGroup === 0 ? 1 : 0];

	const handleSwap = () => {
		setActiveGroup((prev) => (prev === 0 ? 1 : 0));
	};

	return (
		<section className="relative w-full py-32 bg-[#050505] overflow-hidden">
			<div className="container-enterprise relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
					<h2 className="text-white text-4xl md:text-5xl lg:text-7xl font-heading font-black tracking-tight leading-[1.05]">
						{t('servicesIndustries.title1')} <br /> <span className="text-primary-blue">{t('servicesIndustries.title2')}</span>
					</h2>
					<p className="text-white/50 text-lg max-w-sm md:text-right">{t('servicesIndustries.subtitle')}</p>
				</motion.div>

				<div className="relative h-auto md:h-[600px] w-full perspective-1000">
					<AnimatePresence mode="wait">
						<motion.div
							key={activeGroup}
							initial={{ opacity: 0, rotateX: 10, y: 40 }}
							animate={{ opacity: 1, rotateX: 0, y: 0 }}
							exit={{ opacity: 0, rotateX: -10, y: -40 }}
							transition={{ duration: 0.6, staggerChildren: 0.1 }}
							className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
							{activeIndustries.map((ind, idx) => (
								<motion.div
									key={ind.name}
									initial={{ opacity: 0, y: 40 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: idx * 0.1 }}
									className="group relative w-full h-[400px] md:h-full rounded-[24px] overflow-hidden cursor-pointer">
									<ImageWithFallback
										src={ind.img}
										alt={ind.name}
										className="absolute inset-0 w-full h-full object-cover md:group-hover:![filter:none]s opacity-75 scale-100 md:group-hover:scale-110 transition-all duration-1000 ease-out"
									/>

									<div className="absolute inset-0 p-8 flex flex-col justify-end items-start transition-all duration-500">
										<div className="flex items-center gap-3 mb-4 opacity-100 md:opacity-0 md:-translate-x-4 md:group-hover:translate-x-0 md:group-hover:opacity-100 transition-all duration-500 delay-100">
											<span className="w-8 h-[2px] bg-primary-blue"></span>
											<span className="text-primary-blue text-xs font-bold tracking-widest uppercase">{t('servicesIndustries.activeDeployment')}</span>
										</div>
										<h3 className="text-real-white text-2xl lg:text-3xl font-sans font-bold tracking-tight leading-snug md:translate-y-6 md:group-hover:translate-y-0 transition-all duration-500 md:text-white/60s md:group-hover:text-white break-words">
											{ind.name}
										</h3>
									</div>
								</motion.div>
							))}
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Text Marquee / Additional Industries list below */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, delay: 0.5 }}
					className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8 md:gap-16 justify-center">
					{inactiveIndustries.map((ind) => (
						<button
							key={ind.name}
							onClick={handleSwap}
							className="text-white/30 hover:text-white font-heading text-xl font-bold uppercase tracking-widest transition-colors cursor-pointer">
							{ind.name}
						</button>
					))}
				</motion.div>
			</div>
		</section>
	);
}
