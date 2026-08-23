import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';

import { useLanguage } from '../contexts/LanguageContext';
import { jobsData } from '../data/jobs';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CareersRoles() {
	const { t } = useLanguage();
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<section className="relative w-full py-40 bg-[#0A0A0A] overflow-hidden">
			<div className="container-enterprise">
				<div className="flex flex-col mb-24">
					<div className="flex items-center gap-4 mb-6">
						<span className="w-12 h-[1px] bg-primary-blue" />
						<span className="text-primary-blue font-mono text-sm tracking-[0.2em] uppercase">{t('careersRoles.openRequisitions')}</span>
					</div>
					<h2 className="text-white font-heading font-black text-5xl md:text-7xl uppercase tracking-tighter max-w-4xl leading-[0.9]">
						{t('careersRoles.title1')} <br />
						<span className="text-white/30">{t('careersRoles.title2')}</span>
					</h2>
				</div>

				<div className="w-full border-t border-white/10 flex flex-col relative z-20">
					{jobsData.map((role, idx) => (
						<Link
							to={`/careers/${role.id}`}
							key={idx}
							className="relative group border-b border-white/10 block"
							onMouseEnter={() => setHoveredIndex(idx)}
							onMouseLeave={() => setHoveredIndex(null)}>
							<div className="relative z-20 flex flex-col md:flex-row md:items-center justify-between py-10 md:py-16 px-4 md:px-0 transition-colors duration-500 hover:bg-white/[0.02]">
								<div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 w-full">
									<div className="text-white/20 font-mono text-lg md:text-2xl font-light w-12 shrink-0 group-hover:text-primary-blue transition-colors duration-300">
										0{idx + 1}
									</div>

									<div className="flex flex-col gap-2 w-full md:w-1/2">
										<h3 className="text-3xl md:text-5xl font-heading font-bold text-white group-hover:text-primary-blue transition-all duration-300 tracking-tight leading-[1.1]">
											{t(role.titleKey)}
										</h3>
										<div className="flex items-center gap-4 mt-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
											<span className="font-mono text-xs uppercase tracking-widest text-white/80">{t(role.departmentKey)}</span>
										</div>
									</div>

									<div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 w-full md:w-auto mt-6 md:mt-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
										<div className="flex flex-col gap-1">
											<span className="text-white/40 font-mono text-[12px] uppercase tracking-widest">{t('careersRoles.location')}</span>
											<span className="text-white text-sm font-medium tracking-wide">{t(role.locationKey)}</span>
										</div>
										<div className="flex flex-col gap-1">
											<span className="text-white/40 font-mono text-[12px] uppercase tracking-widest">{t('careersRoles.type')}</span>
											<span className="text-white text-sm font-medium tracking-wide">{t(role.typeKey)}</span>
										</div>

										<button className="hidden md:flex w-14 h-14 rounded-full border border-white/20 items-center justify-center text-white group-hover:bg-primary-blue group-hover:border-primary-blue group-hover:-rotate-45 transition-all duration-300">
											<ArrowUpRight size={24} />
										</button>
									</div>
								</div>
							</div>

							{/* Hover Image Reveal (Desktop Only) */}
							<div
								className={`absolute inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-500 hidden lg:block ${
									hoveredIndex === idx ? 'opacity-30' : 'opacity-0'
								}`}>
								<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-60 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-[2s] ease-out">
									<ImageWithFallback
										src={role.listImage}
										alt=""
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-transparent" />
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
