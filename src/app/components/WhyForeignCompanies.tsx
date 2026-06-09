import { Briefcase, Cog, FileText, Gavel, Landmark, Scale, Users } from 'lucide-react';
import { motion } from 'motion/react';

import { useLanguage } from '../contexts/LanguageContext';

export function WhyForeignCompanies() {
	const { t } = useLanguage();
	return (
		<section className="w-full py-32 bg-[#0A0A0A] relative overflow-hidden">
			{/* Cinematic Background Elements */}
			<div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-primary-blue/5 rounded-full blur-[150px] pointer-events-none"></div>
			<div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>

			<div className="container-enterprise relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="max-w-4xl mb-24">
					<span className="text-primary-blue font-bold tracking-[0.2em] uppercase text-xs mb-6 flex items-center gap-4">
						<span className="w-12 h-px bg-primary-blue"></span> {t('why.tag', 'Strategic Advantage')}
					</span>
					<h2 className="font-heading font-black text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] tracking-tight text-white mb-8">
						{t('why.title1', 'Why Foreign Companies')} <br /> {t('why.title2', 'Choose')}{' '}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-blue-400">247HR?</span>
					</h2>
					<p className="text-white/60 text-xl font-light max-w-2xl leading-relaxed">
						{t(
							'why.desc',
							"We eliminate the friction of entering the Ethiopian market by providing an unshakeable operational foundation. Focus on your growth, we'll handle the ground reality."
						)}
					</p>
				</motion.div>

				{/* Modern Bento Grid Layout */}
				<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-3 gap-6 lg:gap-8">
					{/* Item 1: 2x2 Feature Block */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.1 }}
						className="md:col-span-2 md:row-span-2 rounded-[32px] p-10 lg:p-14 relative overflow-hidden bg-[#111] border border-white/10 group flex flex-col justify-end min-h-[400px] md:min-h-0">
						<div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
						<div className="absolute top-10 right-10 text-primary-blue/10 group-hover:text-primary-blue/20 group-hover:scale-110 transition-all duration-700 ease-out">
							<Scale
								size={160}
								strokeWidth={1}
							/>
						</div>
						<div className="relative z-10 mt-auto">
							<h3 className="text-3xl lg:text-5xl font-heading font-black text-white mb-6 leading-[1.1] tracking-tight">
								{t('why.item1.title1')} <br />
								<span className="text-primary-blue">{t('why.item1.title2')}</span>
							</h3>
							<p className="text-lg text-white/60 max-w-md leading-relaxed">{t('why.item1.desc')}</p>
						</div>
					</motion.div>

					{/* Item 2: 2x1 Horizontal Block */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="md:col-span-2 md:row-span-1 rounded-[32px] p-8 lg:p-10 relative overflow-hidden bg-white/5 border border-white/10 group flex flex-col sm:flex-row items-start sm:items-center gap-8 hover:bg-white/10 transition-colors duration-500">
						<div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary-blue shadow-[0_0_0_rgba(29,155,240,0)] group-hover:shadow-[0_0_30px_rgba(29,155,240,0.4)]">
							<Users size={36} />
						</div>
						<div>
							<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{t('why.item2.title')}</h3>
							<p className="text-white/60 leading-relaxed">{t('why.item2.desc')}</p>
						</div>
					</motion.div>

					{/* Item 3: 1x1 Small Square Block */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.3 }}
						className="md:col-span-1 md:row-span-1 rounded-[32px] p-8 relative overflow-hidden bg-white/5 border border-white/10 group flex flex-col hover:bg-white/10 transition-colors duration-500">
						<div className="w-14 h-14 rounded-2xl bg-[#151515] border border-white/5 flex items-center justify-center text-white mb-auto group-hover:text-primary-blue transition-colors duration-500">
							<Landmark size={24} />
						</div>
						<div className="mt-12">
							<h3 className="text-lg font-bold text-white leading-snug tracking-tight mb-2">{t('why.item3.title')}</h3>
							<p className="text-sm text-white/50 leading-relaxed line-clamp-3">{t('why.item3.desc')}</p>
						</div>
					</motion.div>

					{/* Item 4: 1x1 Small Square Block */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.4 }}
						className="md:col-span-1 md:row-span-1 rounded-[32px] p-8 relative overflow-hidden bg-white/5 border border-white/10 group flex flex-col hover:bg-white/10 transition-colors duration-500">
						<div className="w-14 h-14 rounded-2xl bg-[#151515] border border-white/5 flex items-center justify-center text-white mb-auto group-hover:text-primary-blue transition-colors duration-500">
							<FileText size={24} />
						</div>
						<div className="mt-12">
							<h3 className="text-lg font-bold text-white leading-snug tracking-tight mb-2">{t('why.item4.title')}</h3>
							<p className="text-sm text-white/50 leading-relaxed line-clamp-3">{t('why.item4.desc')}</p>
						</div>
					</motion.div>

					{/* Item 5: 2x1 Accent Horizontal Block */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.5 }}
						className="md:col-span-2 md:row-span-1 rounded-[32px] p-8 lg:p-10 relative overflow-hidden bg-primary-blue/10 border border-primary-blue/20 group flex flex-col sm:flex-row items-start sm:items-center gap-8 hover:bg-primary-blue/20 transition-colors duration-500">
						<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
						<div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary-blue/20 flex items-center justify-center text-primary-blue relative z-10 group-hover:scale-110 transition-transform duration-500">
							<Briefcase size={36} />
						</div>
						<div className="relative z-10">
							<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{t('why.item5.title')}</h3>
							<p className="text-white/70 leading-relaxed">{t('why.item5.desc')}</p>
						</div>
					</motion.div>

					{/* Item 6: 1x1 Small Square Block */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.6 }}
						className="md:col-span-1 md:row-span-1 rounded-[32px] p-8 relative overflow-hidden bg-white/5 border border-white/10 group flex flex-col hover:bg-white/10 transition-colors duration-500">
						<div className="w-14 h-14 rounded-2xl bg-[#151515] border border-white/5 flex items-center justify-center text-white mb-auto group-hover:text-primary-blue transition-colors duration-500">
							<Gavel size={24} />
						</div>
						<div className="mt-12">
							<h3 className="text-lg font-bold text-white leading-snug tracking-tight mb-2">{t('why.item6.title')}</h3>
							<p className="text-sm text-white/50 leading-relaxed line-clamp-3">{t('why.item6.desc')}</p>
						</div>
					</motion.div>

					{/* Item 7: 1x1 Small Square Block */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, delay: 0.7 }}
						className="md:col-span-1 md:row-span-1 rounded-[32px] p-8 relative overflow-hidden bg-[#111] border border-white/10 group flex flex-col hover:border-primary-blue/50 transition-colors duration-500">
						<div className="absolute inset-0 bg-gradient-to-t from-primary-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
						<div className="w-14 h-14 rounded-2xl bg-[#151515] border border-white/5 flex items-center justify-center text-white mb-auto group-hover:text-primary-blue transition-colors duration-500 relative z-10">
							<Cog size={24} />
						</div>
						<div className="mt-12 relative z-10">
							<h3 className="text-lg font-bold text-white leading-snug tracking-tight mb-2">{t('why.item7.title')}</h3>
							<p className="text-sm text-white/50 leading-relaxed line-clamp-3">{t('why.item7.desc')}</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
