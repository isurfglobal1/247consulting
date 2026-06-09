import { Activity, Cpu, Database } from 'lucide-react';
import { motion } from 'motion/react';
import { useContext } from 'react';

import { useLanguage } from '../../contexts/LanguageContext';
import { ServiceContext } from '../../ServiceDetail';

export function ServiceDetailHero() {
	const serviceData = useContext(ServiceContext);
	const { t } = useLanguage();
	const serviceId = serviceData?.id || 'default';

	return (
		<section className="relative w-full min-h-screen bg-[#020202] overflow-hidden flex items-center pt-32 pb-20 perspective-1000">
			{/* Immersive Deep Environment Background */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary-blue/10 rounded-full blur-[150px] mix-blend-screen opacity-50"></div>
				<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-deep-navy/40 rounded-full blur-[120px] mix-blend-screen"></div>

				{/* Futuristic System Grid */}
				<svg
					className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
					xmlns="http://www.w3.org/2000/svg">
					<motion.path
						initial={{ pathLength: 0, opacity: 0 }}
						animate={{ pathLength: 1, opacity: 1 }}
						transition={{ duration: 3, ease: 'easeInOut' }}
						d="M 100 800 Q 400 500 800 600 T 1400 200"
						fill="none"
						stroke="#1D9BF0"
						strokeWidth="1"
						strokeDasharray="4 8"
					/>
				</svg>
			</div>

			<div className="container-enterprise relative z-10 w-full">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, y: 40, rotateX: 10 }}
						animate={{ opacity: 1, y: 0, rotateX: 0 }}
						transition={{ duration: 1.2, ease: 'easeOut' }}
						className="lg:col-span-8 relative z-20">
						{/* System Status Label */}
						<div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-white/5 border border-white/10 mb-8 backdrop-blur-xl">
							<Activity
								className="text-primary-blue"
								size={16}
							/>
							<span className="text-white/70 text-xs font-mono tracking-widest uppercase">
								{t('serviceDetailHero.nodeLabel', 'Node')}: {t(`services.${serviceId}.category`, serviceData?.category || 'Operations')}
							</span>
							<span className="w-1.5 h-1.5 rounded-full bg-primary-blue animate-pulse shadow-[0_0_10px_#1D9BF0]"></span>
						</div>

						<h1 className="font-heading font-black text-[clamp(3.5rem,7vw,8rem)] leading-[0.9] tracking-tighter text-white uppercase mb-8 relative">
							<span className="block opacity-40 translate-y-4 filter blur-[2px] pointer-events-none absolute -z-10 text-transparent [-webkit-text-stroke:1px_#1D9BF0]">
								{t(`services.${serviceId}.hero.word1`, 'WORKFORCE')}
							</span>
							{t(`services.${serviceId}.hero.word1`, serviceData?.hero.words[0] || 'WORKFORCE')} <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-white to-white">
								{t(`services.${serviceId}.hero.word2`, serviceData?.hero.words[1] || 'INFRASTRUCTURE')}{' '}
								{t(`services.${serviceId}.hero.word3`, serviceData?.hero.words[2] || '')}
							</span>
						</h1>

						<p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-3xl border-l border-primary-blue/30 pl-6 ml-2 font-mono">
							{t(
								`services.${serviceId}.hero.description`,
								serviceData?.hero.description ||
									'Engineered for massive scale. We deploy algorithmic target identification and multi-layered vetting to construct the operational backbone of high-growth African enterprises.'
							)}
						</p>
					</motion.div>

					{/* Holographic / Floating Spatial Interface Fragments */}
					<div className="lg:col-span-4 relative h-[500px] hidden lg:block transform-style-3d perspective-1000">
						<motion.div
							initial={{ opacity: 0, z: -100, x: 100 }}
							animate={{ opacity: 1, z: 0, x: 0 }}
							transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
							className="absolute top-10 right-0 w-[340px] p-6 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] transform rotate-y-[-15deg]">
							<div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
								<div className="flex items-center gap-2">
									<Database
										size={16}
										className="text-primary-blue"
									/>
									<span className="text-xs text-white/60 font-mono">{t('serviceDetailHero.talentPoolLabel', 'TALENT_POOL.SYS')}</span>
								</div>
								<div className="text-[10px] text-primary-blue uppercase tracking-widest font-bold border border-primary-blue/30 px-2 py-1 rounded">
									{t('serviceDetailHero.activeStatus', 'Active')}
								</div>
							</div>
							<div className="space-y-4">
								<div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: '85%' }}
										transition={{ duration: 2, delay: 1 }}
										className="h-full bg-primary-blue"></motion.div>
								</div>
								<div className="h-2 w-3/4 bg-white/5 rounded-full overflow-hidden">
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: '60%' }}
										transition={{ duration: 2, delay: 1.2 }}
										className="h-full bg-white/40"></motion.div>
								</div>
								<div className="h-2 w-1/2 bg-white/5 rounded-full overflow-hidden">
									<motion.div
										initial={{ width: 0 }}
										animate={{ width: '92%' }}
										transition={{ duration: 2, delay: 1.4 }}
										className="h-full bg-primary-blue"></motion.div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, z: 50, y: 100 }}
							animate={{ opacity: 1, z: 100, y: 0 }}
							transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
							className="absolute bottom-10 left-[-40px] w-[280px] p-5 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-2xl border border-primary-blue/20 shadow-[0_20px_40px_rgba(29,155,240,0.15)] transform rotate-y-[10deg]">
							<div className="flex items-center gap-4 mb-4">
								<div className="w-10 h-10 rounded bg-primary-blue/10 flex items-center justify-center border border-primary-blue/30">
									<Cpu
										className="text-primary-blue"
										size={20}
									/>
								</div>
								<div>
									<div className="text-white text-sm font-bold font-mono">{t('serviceDetailHero.vettingProtocolLabel', 'VETTING_PROTOCOL')}</div>
									<div className="text-[10px] text-white/50 uppercase tracking-widest">{t('serviceDetailHero.executingStatus', 'Executing')}</div>
								</div>
							</div>
							<div className="grid grid-cols-6 gap-1">
								{[...Array(24)].map((_, i) => (
									<motion.div
										key={i}
										initial={{ opacity: 0.2 }}
										animate={{ opacity: [0.2, 1, 0.2] }}
										transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.05 }}
										className={`h-2 rounded-sm ${i % 7 === 0 ? 'bg-primary-blue' : 'bg-white/20'}`}></motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
