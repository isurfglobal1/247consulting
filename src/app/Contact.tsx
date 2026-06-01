import { ArrowRight, ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export function Contact() {
	const { t } = useLanguage();
	const [activeInput, setActiveInput] = useState<string | null>(null);

	const inputClasses = (name: string) => `
    w-full bg-transparent border-b ${activeInput === name ? 'border-primary-blue' : 'border-white/20'} 
    py-4 text-white placeholder-white/30 text-xl font-light focus:outline-none transition-all duration-300
    ${activeInput === name ? 'shadow-[0_4px_20px_-10px_rgba(29,155,240,0.5)]' : ''}
  `;

	return (
		<div className="bg-[#0A0A0A] min-h-screen text-white w-full overflow-hidden font-body pt-32">
			{/* Hero Section */}
			<section className="relative w-full min-h-[85vh] flex flex-col justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<ImageWithFallback
						src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNjgxNDkxNDI3fDA&ixlib=rb-4.1.0&q=80&w=1440"
						alt="Cinematic Modern Office"
						className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
					<div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
				</div>

				<div className="container-enterprise relative z-10">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-8 flex flex-col justify-center">
							<div className="flex items-center gap-4 mb-8">
								<span className="w-8 h-[1px] bg-primary-blue" />
								<span className="text-primary-blue font-mono text-sm tracking-[0.2em] uppercase">{t('Global Communications')}</span>
							</div>
							<h1 className="text-[64px] md:text-[88px] font-heading font-black leading-[0.9] tracking-tighter uppercase mb-8">
								{t("Let's Build")} <br />
								<span className="text-white/30">{t('Smarter Workforce Systems')}</span> {t('Together.')}
							</h1>
							<p className="text-2xl font-light text-white/60 max-w-2xl leading-relaxed">
								{t('Connect with the future of enterprise workforce solutions. We dont do standard support—we provide elite operational consultation.')}
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Information & Form Section */}
			<section className="relative w-full py-32 z-20">
				<div className="container-enterprise">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -40 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-7 flex flex-col">
							<h3 className="text-3xl font-heading font-bold uppercase tracking-tight mb-16 border-b border-white/10 pb-6">{t('Initiate Dialogue')}</h3>

							<form
								className="flex flex-col gap-12"
								onSubmit={(e) => e.preventDefault()}>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
									<div className="relative group">
										<input
											type="text"
											placeholder={t('Full Name')}
											className={inputClasses('name')}
											onFocus={() => setActiveInput('name')}
											onBlur={() => setActiveInput(null)}
										/>
									</div>
									<div className="relative group">
										<input
											type="text"
											placeholder={t('Company Name')}
											className={inputClasses('company')}
											onFocus={() => setActiveInput('company')}
											onBlur={() => setActiveInput(null)}
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
									<div className="relative group">
										<input
											type="email"
											placeholder={t('Email Address')}
											className={inputClasses('email')}
											onFocus={() => setActiveInput('email')}
											onBlur={() => setActiveInput(null)}
										/>
									</div>
									<div className="relative group">
										<input
											type="tel"
											placeholder={t('Phone Number')}
											className={inputClasses('phone')}
											onFocus={() => setActiveInput('phone')}
											onBlur={() => setActiveInput(null)}
										/>
									</div>
								</div>

								<div className="relative group">
									<select
										className={`${inputClasses('service')} appearance-none rounded-none cursor-pointer`}
										onFocus={() => setActiveInput('service')}
										onBlur={() => setActiveInput(null)}
										defaultValue="">
										<option
											value=""
											disabled
											className="bg-[#0A0A0A] text-white/50">
											{t('Service Interest')}
										</option>
										<option
											value="executive"
											className="bg-[#0A0A0A]">
											{t('Executive Search')}
										</option>
										<option
											value="infrastructure"
											className="bg-[#0A0A0A]">
											{t('Workforce Infrastructure')}
										</option>
										<option
											value="compliance"
											className="bg-[#0A0A0A]">
											{t('Risk & Compliance')}
										</option>
										<option
											value="analytics"
											className="bg-[#0A0A0A]">
											{t('Talent Analytics')}
										</option>
									</select>
									<div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
										<ArrowUpRight
											size={20}
											className="rotate-45"
										/>
									</div>
								</div>

								<div className="relative group">
									<textarea
										placeholder={t('Message')}
										rows={4}
										className={`${inputClasses('message')} resize-none`}
										onFocus={() => setActiveInput('message')}
										onBlur={() => setActiveInput(null)}
									/>
								</div>

								<div className="mt-8">
									<button className="h-[64px] px-12 bg-white text-primary-black font-bold tracking-widest uppercase text-sm rounded-none hover:bg-primary-blue hover:text-white transition-all duration-500 flex items-center gap-4 group">
										{t('Transmit Protocol')}
										<ArrowRight
											className="group-hover:translate-x-2 transition-transform duration-300"
											size={20}
										/>
									</button>
								</div>
							</form>
						</motion.div>

						{/* Immersive Contact Information */}
						<motion.div
							initial={{ opacity: 0, x: 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
							className="lg:col-span-5 flex flex-col gap-16 lg:pl-16 border-l border-white/5">
							<div className="flex flex-col gap-6 group cursor-default">
								<div className="flex items-center gap-4 text-white/40 mb-2 group-hover:text-primary-blue transition-colors duration-300">
									<MapPin size={20} />
									<span className="font-mono text-xs uppercase tracking-widest">{t('Global HQ')}</span>
								</div>
								<p className="text-2xl font-light leading-snug">
									{t('The Exchange Tower,')}
									<br />
									{t('Westlands, Nairobi,')}
									<br />
									{t('Kenya')}
								</p>
								<div className="w-12 h-[1px] bg-white/10 group-hover:bg-primary-blue group-hover:w-24 transition-all duration-500" />
							</div>

							<div className="flex flex-col gap-6 group cursor-pointer hover:bg-white/[0.02] -mx-8 px-8 py-6 rounded-2xl transition-colors duration-500">
								<div className="flex items-center gap-4 text-white/40 mb-2 group-hover:text-primary-blue transition-colors duration-300">
									<Mail size={20} />
									<span className="font-mono text-xs uppercase tracking-widest">{t('Direct Line')}</span>
								</div>
								<p className="text-2xl font-light text-white group-hover:text-primary-blue transition-colors duration-300">executive@247hr.com</p>
							</div>

							<div className="flex flex-col gap-6 group cursor-pointer hover:bg-white/[0.02] -mx-8 px-8 py-6 rounded-2xl transition-colors duration-500">
								<div className="flex items-center gap-4 text-white/40 mb-2 group-hover:text-primary-blue transition-colors duration-300">
									<Phone size={20} />
									<span className="font-mono text-xs uppercase tracking-widest">{t('Operations Center')}</span>
								</div>
								<p className="text-2xl font-light text-white group-hover:text-primary-blue transition-colors duration-300">+254 700 247 000</p>
							</div>

							<div className="flex flex-col gap-6">
								<div className="flex items-center gap-4 text-white/40 mb-2">
									<Clock size={20} />
									<span className="font-mono text-xs uppercase tracking-widest">{t('Global Coverage')}</span>
								</div>
								<p className="text-lg font-mono text-white/60">
									{t('24/7 Enterprise Support')}
									<br />
									{t('GMT+3 Primary Operations')}
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Map Experience */}
			<section className="relative w-full h-[60vh] mt-16 overflow-hidden">
				<div className="absolute inset-0 z-0">
					<ImageWithFallback
						src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBtb2Rlcm4lMjBjaXR5c2NhcGV8ZW58MXx8fHwxNjgyNDUxNDMzfDA&ixlib=rb-4.1.0&q=80&w=1440"
						alt="Global Hub"
						className="w-full h-full object-cover grayscale opacity-30 mix-blend-screen"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
					<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] to-transparent" />
				</div>

				<div className="absolute inset-0 z-10 flex items-center justify-center">
					<div className="w-[1px] h-full bg-primary-blue/20 absolute left-1/2 -translate-x-1/2" />
					<div className="w-full h-[1px] bg-primary-blue/20 absolute top-1/2 -translate-y-1/2" />

					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
						className="w-4 h-4 bg-primary-blue rounded-full shadow-[0_0_30px_rgba(29,155,240,1)] relative">
						<div className="absolute inset-0 bg-primary-blue rounded-full animate-ping opacity-50" />
					</motion.div>

					<div className="absolute top-1/2 left-1/2 translate-x-6 -translate-y-1/2 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 p-6 rounded-xl hidden md:flex flex-col gap-2">
						<span className="font-mono text-xs text-primary-blue uppercase tracking-widest">{t('Nairobi Hub')}</span>
						<span className="text-white text-sm font-medium">1.2921° S, 36.8219° E</span>
					</div>
				</div>
			</section>

			{/* Consultation Final CTA */}
			<section className="relative w-full py-40 flex items-center justify-center">
				<div className="container-enterprise text-center flex flex-col items-center">
					<div className="inline-flex items-center gap-3 px-6 py-2 border border-white/10 rounded-full mb-12 bg-white/[0.02] backdrop-blur-md">
						<div className="w-2 h-2 rounded-full bg-primary-blue animate-pulse" />
						<span className="text-white/70 font-mono text-xs uppercase tracking-widest">{t('Executive Calendar Open')}</span>
					</div>

					<h2 className="text-5xl md:text-7xl font-heading font-black text-white leading-tight tracking-tighter uppercase mb-12 max-w-4xl">
						{t('Start Building The Future')} <br />
						<span className="text-white/30">{t('Of Workforce Operations')}</span>
					</h2>

					<button className="group relative h-[72px] px-16 rounded-full bg-white text-primary-black font-bold tracking-widest uppercase text-sm overflow-hidden flex items-center gap-4 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-500 transform hover:-translate-y-2">
						<span className="relative z-10">{t('Schedule Strategy Session')}</span>
						<ArrowUpRight
							size={24}
							className="relative z-10 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
						/>
						<div className="absolute inset-0 bg-primary-blue transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
						<span className="absolute inset-0 flex items-center justify-center gap-4 text-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-20 font-bold tracking-widest uppercase text-sm">
							{t('Schedule Strategy Session')}{' '}
							<ArrowUpRight
								size={24}
								className="rotate-45"
							/>
						</span>
					</button>
				</div>
			</section>
		</div>
	);
}
