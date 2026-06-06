import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';

import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ServicesEcosystem() {
	const { t } = useLanguage();
	const [activeService, setActiveService] = useState(0);

	const services = [
		{
			id: 'hr-out',
			num: '01',
			title: t('servicesEcosystem.hrOutsourcing.title'),
			desc: t('servicesEcosystem.hrOutsourcing.desc'),
			img: 'https://images.unsplash.com/photo-1509099955921-f0b4ed0c175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29ya2ZvcmNlJTIwb3BlcmF0aW9ucyUyMGJyaWdodCUyMGNvbG9yfGVufDF8fHx8MTc4MDcwMTk3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
			cta: t('servicesEcosystem.hrOutsourcing.cta'),
		},
		{
			id: 'recruit',
			num: '02',
			title: t('servicesEcosystem.recruitment.title'),
			desc: t('servicesEcosystem.recruitment.desc'),
			img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJ1c2luZXNzJTIwbWVldGluZyUyMGJyaWdodCUyMGNvbG9yfGVufDF8fHx8MTc4MDcwMTk4MXww&ixlib=rb-4.1.0&q=80&w=1080',
			cta: t('servicesEcosystem.recruitment.cta'),
		},
		{
			id: 'payroll',
			num: '03',
			title: t('servicesEcosystem.payroll.title'),
			desc: t('servicesEcosystem.payroll.desc'),
			img: 'https://images.unsplash.com/photo-1655720357872-ce227e4164ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29ycG9yYXRlJTIwYmFua2luZyUyMGJyaWdodCUyMGNvbG9yfGVufDF8fHx8MTc4MDcwMTk4NXww&ixlib=rb-4.1.0&q=80&w=1080',
			cta: t('servicesEcosystem.payroll.cta'),
		},
		{
			id: 'call-center',
			num: '04',
			title: t('servicesEcosystem.callCenter.title'),
			desc: t('servicesEcosystem.callCenter.desc'),
			img: 'https://images.unsplash.com/photo-1629018941876-d4659de95468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2FsbCUyMGNlbnRlciUyMGFnZW50JTIwYnJpZ2h0JTIwY29sb3J8ZW58MXx8fHwxNzgwNzAxOTg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
			cta: t('servicesEcosystem.callCenter.cta'),
		},
		{
			id: 'workspace',
			num: '05',
			title: t('servicesEcosystem.workspace.title'),
			desc: t('servicesEcosystem.workspace.desc'),
			img: 'https://images.unsplash.com/photo-1487083990731-52aaad54939a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwdGVjaCUyMGVudGVycHJpc2UlMjBhcmNoaXRlY3R1cmUlMjBicmlnaHQlMjBjb2xvcnxlbnwxfHx8fDE3ODA3MDE5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
			cta: t('servicesEcosystem.workspace.cta'),
		},
		{
			id: 'training',
			num: '06',
			title: t('servicesEcosystem.training.title'),
			desc: t('servicesEcosystem.training.desc'),
			img: 'https://images.unsplash.com/photo-1656360192797-77f8bb9e71b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMGxlY3R1cmUlMjBsdXh1cnklMjBhcmNoaXRlY3R1cmUlMjBicmlnaHQlMjBjb2xvcnxlbnwxfHx8fDE3ODA3MDE5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
			cta: t('servicesEcosystem.training.cta'),
		},
	];

	return (
		<section className="relative w-full bg-[#0A0A0A] py-32 border-t border-white/10">
			<div className="container-enterprise relative z-10">
				<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-8">
					<h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[0.9]">{t('servicesEcosystem.title')}</h2>
					<p className="text-white/50 text-lg max-w-sm">{t('servicesEcosystem.subtitle')}</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
					<div className="lg:col-span-7 flex flex-col max-h-[600px] overflow-y-auto scrollbar-none pr-4">
						{services.map((svc, idx) => {
							const isActive = activeService === idx;

							return (
								<div
									key={svc.id}
									onMouseEnter={() => setActiveService(idx)}
									className={`group relative border-t ${
										idx === services.length - 1 ? 'border-b' : ''
									} border-white/10 py-10 cursor-pointer transition-colors duration-500 hover:bg-white/[0.02]`}>
									{/* Active Indicator Line */}
									<motion.div
										initial={false}
										animate={{ width: isActive ? '4px' : '0px' }}
										className="absolute left-0 top-0 bottom-0 bg-primary-blue"
									/>

									<div className="flex items-start gap-8 px-4 lg:px-8">
										<span className={`font-mono text-sm mt-2 transition-colors duration-500 ${isActive ? 'text-primary-blue' : 'text-white/30'}`}>{svc.num}</span>

										<div className="flex-1">
											<h3
												className={`text-3xl md:text-5xl font-heading font-black tracking-tight transition-colors duration-500 ${
													isActive ? 'text-white' : 'text-white/40 group-hover:text-white/70'
												}`}>
												{svc.title}
											</h3>

											<AnimatePresence>
												{isActive && (
													<motion.div
														initial={{ height: 0, opacity: 0, marginTop: 0 }}
														animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
														exit={{ height: 0, opacity: 0, marginTop: 0 }}
														transition={{ duration: 0.4, ease: 'easeInOut' }}
														className="overflow-hidden">
														<p className="text-white/70 text-lg leading-relaxed max-w-md mb-8">{svc.desc}</p>
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									</div>
								</div>
							);
						})}
					</div>

					{/* Right: Sticky Image Reveal */}
					<div className="hidden lg:block lg:col-span-5 h-[600px] sticky top-32">
						<div className="w-full h-full relative rounded-none overflow-hidden bg-[#111]">
							<AnimatePresence mode="wait">
								<motion.div
									key={activeService}
									initial={{ opacity: 0, scale: 1.05 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.7, ease: 'easeInOut' }}
									className="absolute inset-0 w-full h-full group">
									<ImageWithFallback
										src={services[activeService].img}
										alt={services[activeService].title}
										className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten group-hover:![filter:none] group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 cursor-crosshair"
									/>

									{/* Technical Overlay */}
									<div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
									<div className="absolute top-6 left-6 flex items-center gap-3">
										<span className="w-2 h-2 bg-primary-blue rounded-full"></span>
										<span className="text-white/50 text-xs font-mono uppercase tracking-widest">{t('servicesEcosystem.visualDataFeed')}</span>
									</div>
									<div className="absolute bottom-6 right-6 text-white/30 font-mono text-xs">{services[activeService].id.toUpperCase()}_SYS</div>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
