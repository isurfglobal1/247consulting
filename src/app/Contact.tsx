import { ArrowRight, ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { SHADCN_FIELD, SHADCN_ITEM, SHADCN_POPUP } from './components/ui/brand';
import { useLanguage } from './contexts/LanguageContext';
import { formToFields, sendAsEmail } from './utils/mailto';

const CONTACT_FIELD_LABELS = {
	name: 'Full Name',
	company: 'Company Name',
	email: 'Email',
	phone: 'Phone',
	message: 'Message',
};

export function Contact() {
	const { t } = useLanguage();
	const [activeInput, setActiveInput] = useState<string | null>(null);
	const [service, setService] = useState('');

	const serviceOptions = [
		{ value: 'executive', label: t('contact.serviceOption1') },
		{ value: 'infrastructure', label: t('contact.serviceOption2') },
		{ value: 'compliance', label: t('contact.serviceOption3') },
		{ value: 'analytics', label: t('contact.serviceOption4') },
	];

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const fields = {
			...formToFields(e.currentTarget, CONTACT_FIELD_LABELS),
			'Service Interest': serviceOptions.find((s) => s.value === service)?.label,
		};
		sendAsEmail(`New Contact Inquiry from ${fields['Full Name'] || 'Website Visitor'}`, fields);
	};

	const inputClasses = (name: string) => `
    w-full bg-white/5 border ${activeInput === name ? 'border-primary-blue shadow-[0_0_30px_-10px_rgba(29,155,240,0.4)]' : 'border-white/20 shadow-sm'} 
    px-6 py-5 rounded-xl text-white placeholder-white/60 text-lg font-light focus:outline-none focus:bg-white/10 transition-all duration-300 hover:border-white/40
  `;

	return (
		<div className="bg-[#0A0A0A] min-h-screen text-white w-full overflow-hidden font-body">
			{/* Hero Section */}
			<section className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-10">
				<div className="absolute inset-0 z-0">
					<ImageWithFallback
						src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNjgxNDkxNDI3fDA&ixlib=rb-4.1.0&q=80&w=1440"
						alt="Cinematic Modern Office"
						className="w-full h-full object-cover opacity-60 scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
					<div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent w-full md:w-2/3" />
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
								<span className="text-primary-blue font-mono text-sm tracking-[0.2em] uppercase">{t('contact.heroBadge')}</span>
							</div>
							<h1 className="text-[clamp(2.375rem,10vw,4.875rem)] md:text-[62px] lg:text-[86px] font-heading font-black text-white leading-[1.1] md:leading-[0.9] tracking-tighter uppercase mb-8">
								{t('contact.heroTitle1')} <br />
								<span className="md:whitespace-nowrap">{t('contact.heroTitle2')}</span> {t('contact.heroTitle3')}
							</h1>
							<p className="text-xl md:text-2xl font-light text-white/60 max-w-2xl leading-relaxed">{t('contact.heroDescription')}</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Information & Form Section */}
			<section className="relative w-full py-20 md:py-32 z-20">
				<div className="container-enterprise">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: -40 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: '-100px' }}
							transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
							className="lg:col-span-7 flex flex-col">
							<h3 className="text-2xl md:text-3xl font-heading font-bold text-white uppercase tracking-tight mb-12 md:mb-16 border-b border-white/20 pb-6">
								{t('contact.formTitle', 'Initiate Dialogue')}
							</h3>

							<form
								className="flex flex-col gap-8 md:gap-12"
								onSubmit={handleSubmit}>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
									<div className="relative group">
										<input
											type="text"
											name="name"
											required
											placeholder={t('contact.fullNamePlaceholder')}
											className={inputClasses('name')}
											onFocus={() => setActiveInput('name')}
											onBlur={() => setActiveInput(null)}
										/>
									</div>
									<div className="relative group">
										<input
											type="text"
											name="company"
											placeholder={t('contact.companyNamePlaceholder')}
											className={inputClasses('company')}
											onFocus={() => setActiveInput('company')}
											onBlur={() => setActiveInput(null)}
										/>
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
									<div className="relative group">
										<input
											type="email"
											name="email"
											required
											placeholder={t('contact.emailPlaceholder')}
											className={inputClasses('email')}
											onFocus={() => setActiveInput('email')}
											onBlur={() => setActiveInput(null)}
										/>
									</div>
									<div className="relative group">
										<input
											type="tel"
											name="phone"
											placeholder={t('contact.phonePlaceholder')}
											className={inputClasses('phone')}
											onFocus={() => setActiveInput('phone')}
											onBlur={() => setActiveInput(null)}
										/>
									</div>
								</div>

								<div className="relative group">
									<Select
										value={service}
										onValueChange={setService}>
										<SelectTrigger
											className={`${SHADCN_FIELD} !h-auto w-full px-6 py-5 text-lg [&_svg]:hidden ${
												activeInput === 'service' ? 'border-primary-blue shadow-[0_0_30px_-10px_rgba(29,155,240,0.4)]' : 'border-white/20 shadow-sm'
											}`}
											onFocus={() => setActiveInput('service')}
											onBlur={() => setActiveInput(null)}>
											<SelectValue placeholder={t('contact.serviceInterestPlaceholder')} />
										</SelectTrigger>
										<SelectContent className={SHADCN_POPUP}>
											{serviceOptions.map((option) => (
												<SelectItem
													key={option.value}
													value={option.value}
													className={SHADCN_ITEM}>
													{option.label}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
										<ArrowUpRight
											size={20}
											className="rotate-45"
										/>
									</div>
								</div>

								<div className="relative group">
									<textarea
										name="message"
										placeholder={t('contact.messagePlaceholder')}
										rows={4}
										className={`${inputClasses('message')} resize-none`}
										onFocus={() => setActiveInput('message')}
										onBlur={() => setActiveInput(null)}
									/>
								</div>

								<div className="mt-6 md:mt-8">
									<button
										type="submit"
										className="w-full sm:w-auto h-[56px] md:h-[64px] px-8 md:px-12 bg-white text-primary-black font-bold tracking-widest uppercase text-xs md:text-sm rounded-xl hover:bg-primary-blue hover:text-white transition-all duration-500 flex items-center justify-center gap-3 md:gap-4 group shadow-premium-hover">
										{t('contact.submitButton')}
										<ArrowRight
											className="group-hover:translate-x-2 transition-transform duration-300"
											size={18}
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
							className="lg:col-span-5 flex flex-col gap-12 md:gap-16 lg:pl-16 border-l border-white/5">
							<div className="flex flex-col gap-4 md:gap-6 group cursor-default">
								<div className="flex items-center gap-3 md:gap-4 text-white/40 mb-1 md:mb-2 group-hover:text-primary-blue transition-colors duration-300">
									<MapPin
										size={18}
										className="md:w-5 md:h-5"
									/>
									<span className="font-mono text-[12px] md:text-xs uppercase tracking-widest">{t('contact.hqLabel')}</span>
								</div>
								<p className="text-xl md:text-2xl font-light leading-snug">
									{t('contact.hqAddress1')}
									<br />
									{t('contact.hqAddress2')}
									<br />
									{t('contact.hqAddress3')}
								</p>
								<div className="w-12 h-[1px] bg-white/10 group-hover:bg-primary-blue group-hover:w-24 transition-all duration-500" />
							</div>

							<div className="flex flex-col gap-4 md:gap-6 cursor-pointer -mx-6 md:-mx-8 px-6 md:px-8 py-4 md:py-6 rounded-2xl transition-all duration-500">
								<div className="flex items-center gap-3 md:gap-4 text-white/40 mb-1 md:mb-2 hover:text-primary-blue transition-colors duration-300">
									<Mail
										size={18}
										className="md:w-5 md:h-5"
									/>
									<span className="font-mono text-[12px] md:text-xs uppercase tracking-widest">{t('contact.emailLabel')}</span>
								</div>
								<p className="text-xl md:text-2xl font-light text-white hover:text-primary-blue transition-colors duration-300 break-all">{t('contact.emailAddress')}</p>
							</div>

							<div className="flex flex-col gap-6 cursor-pointer hover:bg-white/5 -mx-6 md:-mx-8 px-6 md:px-8 py-4 md:py-6 rounded-2xl transition-all duration-500">
								<div className="flex items-center gap-3 md:gap-4 text-white/40 mb-1 md:mb-2 hover:text-primary-blue transition-colors duration-300">
									<Phone
										size={18}
										className="md:w-5 md:h-5"
									/>
									<span className="font-mono text-[12px] md:text-xs uppercase tracking-widest">{t('contact.phoneLabel')}</span>
								</div>
								<p className="text-xl md:text-2xl font-light text-white hover:text-primary-blue transition-colors duration-300">{t('contact.phoneNumber')}</p>
								<p className="text-xl md:text-2xl font-light text-white hover:text-primary-blue transition-colors duration-300">{t('contact.phoneNumberAlt')}</p>
								<p className="text-xl md:text-2xl font-light text-white hover:text-primary-blue transition-colors duration-300">{'+251 98 725 2643'}</p>
							</div>

							<div className="flex flex-col gap-4 md:gap-6">
								<div className="flex items-center gap-3 md:gap-4 text-white/40 mb-1 md:mb-2">
									<Clock
										size={18}
										className="md:w-5 md:h-5"
									/>
									<span className="font-mono text-[12px] md:text-xs uppercase tracking-widest">{t('contact.coverageLabel')}</span>
								</div>
								<p className="text-base md:text-lg font-mono text-white/60">
									{t('contact.coverageLine1')}
									<br />
									{t('contact.coverageLine2')}
								</p>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Map Experience */}
			<section className="relative w-full h-[40vh] md:h-[60vh] mt-8 md:mt-16 overflow-hidden">
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
						className="w-3 h-3 md:w-4 md:h-4 bg-primary-blue rounded-full shadow-[0_0_30px_rgba(29,155,240,1)] relative">
						<div className="absolute inset-0 bg-primary-blue rounded-full animate-ping opacity-50" />
					</motion.div>

					<div className="absolute top-1/2 left-1/2 translate-x-4 md:translate-x-6 -translate-y-1/2 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-xl hidden md:flex flex-col gap-2">
						<span className="font-mono text-[12px] md:text-xs text-primary-blue uppercase tracking-widest">{t('contact.mapHubName')}</span>
						<span className="text-white text-xs md:text-sm font-medium">{t('contact.mapCoordinates')}</span>
					</div>
				</div>
			</section>

			{/* Consultation Final CTA */}
			<section className="relative w-full py-24 md:py-40 flex items-center justify-center">
				<div className="container-enterprise text-center flex flex-col items-center px-6 md:px-0">
					<div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-1.5 md:py-2 border border-white/10 rounded-full mb-8 md:mb-12 bg-white/[0.02] backdrop-blur-md">
						<div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary-blue animate-pulse" />
						<span className="text-white/70 font-mono text-[12px] md:text-xs uppercase tracking-widest">{t('contact.finalBadge')}</span>
					</div>

					<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-tight tracking-tighter uppercase mb-8 md:mb-12 max-w-4xl">
						{t('contact.finalTitle1')} <br />
						<span className="text-white/50">{t('contact.finalTitle2')}</span>
					</h2>

					<button className="group relative h-[56px] md:h-[72px] px-8 md:px-16 rounded-full bg-white text-primary-black font-bold tracking-widest uppercase text-[12px] md:text-sm overflow-hidden flex items-center gap-2 md:gap-4 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-500 transform hover:-translate-y-2">
						<span className="relative z-10 whitespace-nowrap">{t('contact.finalButton')}</span>
						<ArrowUpRight
							size={18}
							className="relative z-10 hover:rotate-45 hover:translate-x-1 hover:-translate-y-1 transition-transform duration-300"
						/>
						<div className="absolute inset-0 bg-primary-blue transform translate-y-full hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
						<span className="absolute inset-0 flex items-center justify-center gap-2 md:gap-4 text-white transform -translate-y-full hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-20 font-bold tracking-widest uppercase text-[12px] md:text-sm whitespace-nowrap">
							{t('contact.finalButton')}{' '}
							<ArrowUpRight
								size={18}
								className="rotate-45"
							/>
						</span>
					</button>
				</div>
			</section>
		</div>
	);
}
