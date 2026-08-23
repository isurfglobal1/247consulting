import { format } from 'date-fns';
import { ArrowUpRight, Calendar as CalendarIcon, Check, Clock, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { useLanguage } from '../contexts/LanguageContext';
import { formToFields, sendAsEmail } from '../utils/mailto';
import { SHADCN_FIELD, SHADCN_ITEM, SHADCN_POPUP } from './ui/brand';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const CONSULTATION_FIELD_LABELS = {
	name: 'Full Name',
	company: 'Company Name',
	email: 'Email',
	phone: 'Phone',
	message: 'Notes',
};

const SERVICE_OPTIONS = [
	{ value: 'executive', label: 'Executive Search' },
	{ value: 'infrastructure', label: 'Workforce Infrastructure' },
	{ value: 'compliance', label: 'Risk & Compliance' },
	{ value: 'analytics', label: 'Talent Analytics' },
];

const TIME_SLOTS = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM'];

export function ConsultationDrawer({ renderTrigger }: { renderTrigger: (open: () => void) => React.ReactNode }) {
	const { t } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);
	const [activeInput, setActiveInput] = useState<string | null>(null);
	const [isSent, setIsSent] = useState(false);
	const [service, setService] = useState('');
	const [date, setDate] = useState<Date | undefined>(undefined);
	const [time, setTime] = useState('');

	useEffect(() => {
		if (!isOpen) return;
		document.body.style.overflow = 'hidden';
		const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
		window.addEventListener('keydown', onKeyDown);
		return () => {
			document.body.style.overflow = '';
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen]);

	const close = () => {
		setIsOpen(false);
		setTimeout(() => {
			setIsSent(false);
			setService('');
			setDate(undefined);
			setTime('');
		}, 400);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const fields = {
			...formToFields(e.currentTarget, CONSULTATION_FIELD_LABELS),
			'Area of Interest': SERVICE_OPTIONS.find((s) => s.value === service)?.label,
			'Preferred Date': date ? format(date, 'PPP') : undefined,
			'Preferred Time': time,
		};
		sendAsEmail(`Consultation Request from ${fields['Full Name'] || 'Website Visitor'}`, fields);
		setIsSent(true);
		e.currentTarget.reset();
		setTimeout(close, 2200);
	};

	const fieldState = (name: string) => (activeInput === name ? 'border-primary-blue shadow-[0_0_30px_-10px_rgba(29,155,240,0.4)]' : 'border-white/15');

	// Fixed h-[52px] + flex so every field — text input, textarea excluded,
	// shadcn Select trigger, and the date Popover trigger — lines up exactly.
	const inputClasses = (name: string) => `
    w-full h-[52px] flex items-center bg-white/5 border ${fieldState(name)}
    px-5 rounded-xl text-white placeholder-white/40 text-sm font-light focus:outline-none focus:bg-white/10 transition-all duration-300 hover:border-white/30
  `;

	const textareaClasses = (name: string) => `
    w-full bg-white/5 border ${fieldState(name)}
    px-5 py-4 rounded-xl text-white placeholder-white/40 text-sm font-light focus:outline-none focus:bg-white/10 transition-all duration-300 hover:border-white/30 resize-none
  `;

	return (
		<>
			{renderTrigger(() => setIsOpen(true))}

			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.4 }}
							onClick={close}
							className="fixed inset-0 z-[100] bg-[#0A0A0A]/80 backdrop-blur-sm"
						/>

						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
							className="fixed inset-y-0 right-0 z-[101] w-full sm:max-w-[520px] bg-[#0A0A0A] border-l border-white/10 shadow-[-40px_0_80px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden">
							{/* Ambient glow, matching site language */}
							<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-blue/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/3 translate-x-1/3" />

							<div className="relative flex flex-col h-full overflow-y-auto custom-scrollbar">
								{/* Header */}
								<div className="flex items-start justify-between px-8 pt-10 pb-6 border-b border-white/10">
									<div>
										<div className="flex items-center gap-3 mb-4">
											<span className="w-6 h-[1px] bg-primary-blue" />
											<span className="text-primary-blue font-mono text-xs tracking-[0.2em] uppercase">Private Session</span>
										</div>
										<h2 className="text-3xl font-heading font-black text-white uppercase tracking-tighter leading-[1]">
											Book a<br />
											Consultation
										</h2>
									</div>
									<button
										onClick={close}
										aria-label="Close"
										className="shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 transition-all duration-300">
										<X size={18} />
									</button>
								</div>

								{isSent ? (
									<div className="flex-1 flex flex-col items-center justify-center gap-6 px-8 text-center">
										<motion.div
											initial={{ scale: 0.5, opacity: 0 }}
											animate={{ scale: 1, opacity: 1 }}
											transition={{ type: 'spring', bounce: 0.5 }}
											className="w-16 h-16 rounded-full bg-primary-blue/15 border border-primary-blue/40 flex items-center justify-center">
											<Check
												size={28}
												className="text-primary-blue"
											/>
										</motion.div>
										<div>
											<h3 className="text-xl font-heading font-bold text-white mb-2">Request drafted</h3>
											<p className="text-white/50 text-sm max-w-xs">Your mail client is opening with the details filled in — just hit send.</p>
										</div>
									</div>
								) : (
									<form
										onSubmit={handleSubmit}
										className="flex-1 flex flex-col gap-6 px-8 py-8">
										<p className="text-white/50 text-sm font-light leading-relaxed -mt-2">
											Tell us about your business and preferred time. We'll confirm your session within one business day.
										</p>

										<div className="grid grid-cols-2 gap-4">
											<input
												type="text"
												name="name"
												required
												placeholder="Full Name"
												onFocus={() => setActiveInput('name')}
												onBlur={() => setActiveInput(null)}
												className={inputClasses('name')}
											/>
											<input
												type="text"
												name="company"
												placeholder="Company"
												onFocus={() => setActiveInput('company')}
												onBlur={() => setActiveInput(null)}
												className={inputClasses('company')}
											/>
										</div>

										<div className="grid grid-cols-2 gap-4">
											<input
												type="email"
												name="email"
												required
												placeholder="Email"
												onFocus={() => setActiveInput('email')}
												onBlur={() => setActiveInput(null)}
												className={inputClasses('email')}
											/>
											<input
												type="tel"
												name="phone"
												placeholder="Phone"
												onFocus={() => setActiveInput('phone')}
												onBlur={() => setActiveInput(null)}
												className={inputClasses('phone')}
											/>
										</div>

										<Select
											value={service}
											onValueChange={setService}>
											<SelectTrigger className={`${SHADCN_FIELD} !h-[52px] px-5 w-full [&_svg]:text-white/30`}>
												<SelectValue placeholder="Area of Interest" />
											</SelectTrigger>
											<SelectContent className={SHADCN_POPUP}>
												{SERVICE_OPTIONS.map((option) => (
													<SelectItem
														key={option.value}
														value={option.value}
														className={SHADCN_ITEM}>
														{option.label}
													</SelectItem>
												))}
											</SelectContent>
										</Select>

										<div className="grid grid-cols-2 gap-4">
											<Popover>
												<PopoverTrigger asChild>
													<button
														type="button"
														className={`${SHADCN_FIELD} h-[52px] px-5 flex items-center justify-between text-left ${date ? 'text-white' : 'text-white/40'}`}>
														{date ? format(date, 'MMM d, yyyy') : 'Date'}
														<CalendarIcon
															size={16}
															className="text-white/30 shrink-0"
														/>
													</button>
												</PopoverTrigger>
												<PopoverContent className={`${SHADCN_POPUP} w-auto p-0`}>
													<Calendar
														mode="single"
														selected={date}
														onSelect={setDate}
														disabled={{ before: new Date() }}
														classNames={{
															caption_label: 'text-sm font-heading font-bold text-white',
															nav_button: 'size-7 rounded-md border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors',
															head_cell: 'text-white/30 rounded-md w-8 font-mono text-[10px] uppercase tracking-widest',
															day: 'size-8 p-0 font-normal text-white/70 rounded-md hover:bg-white/10 hover:text-white transition-colors aria-selected:opacity-100',
															day_selected: 'bg-primary-blue text-white hover:bg-primary-blue hover:text-white focus:bg-primary-blue focus:text-white',
															day_today: 'border border-primary-blue/50 text-primary-blue',
															day_outside: 'text-white/20',
															day_disabled: 'text-white/10 opacity-40',
														}}
													/>
												</PopoverContent>
											</Popover>

											<Select
												value={time}
												onValueChange={setTime}>
												<SelectTrigger className={`${SHADCN_FIELD} !h-[52px] px-5 w-full [&_svg]:text-white/30`}>
													<div className="flex items-center gap-2 min-w-0">
														<Clock
															size={14}
															className="text-white/30 shrink-0"
														/>
														<SelectValue placeholder="Time" />
													</div>
												</SelectTrigger>
												<SelectContent className={`${SHADCN_POPUP} max-h-64`}>
													{TIME_SLOTS.map((slot) => (
														<SelectItem
															key={slot}
															value={slot}
															className={SHADCN_ITEM}>
															{slot}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
										</div>

										<textarea
											name="message"
											rows={4}
											placeholder="What would you like to discuss?"
											onFocus={() => setActiveInput('message')}
											onBlur={() => setActiveInput(null)}
											className={textareaClasses('message')}
										/>

										<button
											type="submit"
											className="mt-2 w-full h-[56px] bg-primary-blue text-white font-bold tracking-widest uppercase text-xs rounded-xl hover:bg-white hover:text-primary-black transition-all duration-500 flex items-center justify-center gap-3 group">
											{t('hero.btn.book')}
											<ArrowUpRight
												size={16}
												className="group-hover:rotate-45 transition-transform duration-300"
											/>
										</button>
									</form>
								)}
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
