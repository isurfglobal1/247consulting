import { Eye, Target } from 'lucide-react';
import { motion } from 'motion/react';

import { useLanguage } from '../../contexts/LanguageContext';

export function AboutMission() {
	const { t } = useLanguage();

	return (
		<section className="relative w-full py-32 bg-[#050505] overflow-hidden border-y border-white/5">
			{/* Abstract Background Elements */}
			<div className="absolute top-0 right-0 w-[50vw] h-full bg-gradient-to-l from-primary-blue/5 to-transparent pointer-events-none"></div>
			<div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

			<div className="container-enterprise relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
					{/* Mission */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="relative">
						<div className="mb-8 flex items-center gap-4 text-white/50 font-medium uppercase tracking-widest text-sm">
							<Target
								size={20}
								className="text-primary-blue"
							/>
							{t('aboutMission.missionLabel')}
						</div>
						<h2 className="text-white text-3xl md:text-5xl font-heading font-black tracking-tight mb-8 leading-[1.15]">
							{t('aboutMission.missionTitle1')} <span className="text-primary-blue">{t('aboutMission.missionTitle2')}</span> {t('aboutMission.missionTitle3')}
						</h2>
						<p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">{t('aboutMission.missionDesc')}</p>
					</motion.div>

					{/* Vision */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative">
						<div className="mb-8 flex items-center gap-4 text-white/50 font-medium uppercase tracking-widest text-sm">
							<Eye
								size={20}
								className="text-primary-blue"
							/>
							{t('aboutMission.visionLabel')}
						</div>
						<h2 className="text-white text-3xl md:text-5xl font-heading font-black tracking-tight mb-8 leading-[1.15]">
							{t('aboutMission.visionTitle1')} <span className="text-white/40">{t('aboutMission.visionTitle2')}</span> {t('aboutMission.visionTitle3')}
						</h2>
						<p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">{t('aboutMission.visionDesc')}</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
