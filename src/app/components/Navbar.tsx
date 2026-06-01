import { ArrowRight, ArrowUpRight, ChevronRight, Globe, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

import { Language, useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

const navData = {
	Services: {
		path: '/services',
		image:
			'https://images.unsplash.com/photo-1573164713988-8665fc963095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbW9kZXJuJTIwb2ZmaWNlJTIwdGVjaHxlbnwxfHx8fDE2ODI1NTQ1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
		headline: 'Transforming Global Operations',
		sublinks: [
			{ label: 'Executive Search', path: '/services/executive-search' },
			{ label: 'Workforce Infrastructure', path: '/services/workforce-infrastructure' },
			{ label: 'Talent Analytics', path: '/services/talent-analytics' },
			{ label: 'Risk & Compliance', path: '/services/risk-compliance' },
		],
	},
	Careers: {
		path: '/careers',
		image:
			'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsc3xlbnwxfHx8fDE2ODI1NTQ1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
		headline: 'Step Into The Arena',
		sublinks: [
			{ label: 'Open Requisitions', path: '/careers' },
			{ label: 'Executive Leadership', path: '/careers' },
			{ label: 'Life at 247HR', path: '/careers' },
			{ label: 'Global Network', path: '/careers' },
		],
	},
	About: {
		path: '/about',
		image:
			'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtb2Rlcm58ZW58MXx8fDE2ODI1NTQ1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
		headline: 'The 247HR Philosophy',
		sublinks: [
			{ label: 'Our Story', path: '/about' },
			{ label: 'Executive Board', path: '/about' },
			{ label: 'Global Footprint', path: '/about' },
			{ label: 'ESG & Impact', path: '/about' },
		],
	},
	Contact: {
		path: '/contact',
		image:
			'https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBtb2Rlcm4lMjBvZmZpY2V8ZW58MXx8fHwxNjgxNDkxNDI3fDA&ixlib=rb-4.1.0&q=80&w=1440',
		headline: 'Initiate Dialogue',
		sublinks: [
			{ label: 'Global Communications', path: '/contact' },
			{ label: 'Executive Booking', path: '/contact' },
			{ label: 'Office Locations', path: '/contact' },
			{ label: 'Support Network', path: '/contact' },
		],
	},
};

type NavKeys = keyof typeof navData;

export function Navbar() {
	const [activeDropdown, setActiveDropdown] = useState<NavKeys | null>(null);
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
	const { language, setLanguage, t } = useLanguage();
	const location = useLocation();

	useEffect(() => {
		setActiveDropdown(null);
		setIsMobileOpen(false);
		setIsLanguageDropdownOpen(false);
	}, [location.pathname]);

	const navItems: NavKeys[] = ['Services', 'Careers', 'About', 'Contact'];

	const handleLanguageChange = (lang: Language) => {
		setLanguage(lang);
		setIsLanguageDropdownOpen(false);
	};

	const renderText = (text: string) => {
		return t(text);
	};

	return (
		<>
			<motion.header
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
				className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-6 pointer-events-none">
				<div
					className={`w-full max-w-[1200px] bg-[#0A0A0A]/60 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] pointer-events-auto transition-all duration-500 relative ${
						activeDropdown || isLanguageDropdownOpen ? 'rounded-t-[24px] rounded-b-none' : 'rounded-[24px]'
					}`}
					onMouseLeave={() => {
						setActiveDropdown(null);
						setIsLanguageDropdownOpen(false);
					}}>
					{/* Main Navbar Bar */}
					<div className="h-[88px] flex items-center justify-between px-8">
						<div className="flex items-center gap-2 relative z-20">
							<Link
								to="/"
								className="flex items-center gap-3 group">
								<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary-black font-heading font-black text-xl group-hover:scale-105 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(29,155,240,0.5)]">
									24
								</div>
								<span className="font-heading font-bold text-2xl tracking-tighter text-white">247HR</span>
							</Link>
						</div>

						{/* Desktop Nav Items */}
						<nav className="hidden lg:flex items-center gap-10 relative z-20">
							{navItems.map((item) => {
								const isActive = activeDropdown === item;
								const isCurrentPath = location.pathname.includes(navData[item].path) && navData[item].path !== '#';

								return (
									<div
										key={item}
										className="relative py-8 cursor-pointer group"
										onMouseEnter={() => setActiveDropdown(item)}>
										<Link
											to={navData[item].path}
											className={`relative font-medium tracking-wide text-sm transition-colors duration-300 ${
												isActive || isCurrentPath ? 'text-white' : 'text-white/70 hover:text-white'
											}`}>
											{renderText(item)}

											{/* Animated Hover Line */}
											<span
												className={`absolute -bottom-2 left-0 h-[2px] bg-primary-blue transition-all duration-300 rounded-full ${
													isActive ? 'w-full' : 'w-0 group-hover:w-full'
												}`}
											/>

											{/* Current Path Dot */}
											{isCurrentPath && !isActive && (
												<span className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary-blue rounded-full shadow-[0_0_10px_rgba(29,155,240,0.8)]" />
											)}
										</Link>
									</div>
								);
							})}
						</nav>

						{/* Desktop Actions - Language Toggle Button */}
						<div className="hidden lg:flex items-center gap-6 relative z-20">
							<div className="relative">
								<button
									onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
									onMouseEnter={() => setIsLanguageDropdownOpen(true)}
									className="h-[52px] px-8 rounded-[16px] bg-white text-primary-black font-bold tracking-wide flex items-center justify-center gap-2 hover:bg-primary-blue hover:text-white hover:shadow-[0_0_30px_rgba(29,155,240,0.4)] transition-all duration-500 transform hover:-translate-y-1 group">
									<Globe
										size={18}
										className="group-hover:text-white transition-colors duration-300"
									/>
									<span>{language === 'EN' ? 'English' : 'Amharic'}</span>
								</button>

								{/* Language Dropdown */}
								<AnimatePresence>
									{isLanguageDropdownOpen && (
										<motion.div
											initial={{ opacity: 0, y: -10, height: 0 }}
											animate={{ opacity: 1, y: 0, height: 'auto' }}
											exit={{ opacity: 0, y: -10, height: 0 }}
											transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
											className="absolute top-[60px] right-0 w-[200px] bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 rounded-[16px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
											onMouseLeave={() => setIsLanguageDropdownOpen(false)}>
											<div className="py-2">
												<button
													onClick={() => handleLanguageChange('EN')}
													className={`w-full px-4 py-3 text-left transition-colors duration-200 flex items-center gap-3 ${
														language === 'EN' ? 'text-primary-blue bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'
													}`}>
													<span className="font-medium">English</span>
													{language === 'EN' && (
														<ChevronRight
															size={16}
															className="ml-auto text-primary-blue"
														/>
													)}
												</button>
												<button
													onClick={() => handleLanguageChange('AM')}
													className={`w-full px-4 py-3 text-left transition-colors duration-200 flex items-center gap-3 ${
														language === 'AM' ? 'text-primary-blue bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'
													}`}>
													<span className="font-medium">አማርኛ</span>
													{language === 'AM' && (
														<ChevronRight
															size={16}
															className="ml-auto text-primary-blue"
														/>
													)}
												</button>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</div>

						{/* Mobile Menu Toggle */}
						<button
							className="lg:hidden text-white relative z-20"
							onClick={() => setIsMobileOpen(!isMobileOpen)}>
							{isMobileOpen ? <X size={28} /> : <Menu size={28} />}
						</button>
					</div>

					{/* Spatial Dropdown Environment */}
					<AnimatePresence>
						{activeDropdown && (
							<motion.div
								initial={{ opacity: 0, y: -20, height: 0 }}
								animate={{ opacity: 1, y: 0, height: 'auto' }}
								exit={{ opacity: 0, y: -10, height: 0 }}
								transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
								className="absolute top-[88px] left-0 right-0 w-full overflow-hidden rounded-b-[24px] bg-[#0A0A0A]/95 backdrop-blur-3xl border-t border-white/10">
								<div className="grid grid-cols-12 gap-8 p-12">
									{/* Left Imagery Column */}
									<div className="col-span-5 relative h-[280px] rounded-xl overflow-hidden group">
										<ImageWithFallback
											src={navData[activeDropdown].image}
											alt={activeDropdown}
											className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-60 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-80" />
										<div className="absolute bottom-6 left-6 right-6">
											<motion.h3
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: 0.1, duration: 0.4 }}
												className="text-2xl font-heading font-bold text-white leading-tight">
												{renderText(navData[activeDropdown].headline)}
											</motion.h3>
										</div>
									</div>

									{/* Right Links Column */}
									<div className="col-span-7 flex flex-col justify-center py-4 pl-8 border-l border-white/5">
										<div className="text-white/30 font-mono text-xs uppercase tracking-widest mb-8 flex items-center gap-4">
											<span className="w-8 h-[1px] bg-white/20" />
											{renderText('Explore')} {renderText(activeDropdown)}
										</div>

										<div className="grid grid-cols-2 gap-x-12 gap-y-6">
											{navData[activeDropdown].sublinks.map((link, idx) => (
												<motion.div
													key={link.label}
													initial={{ opacity: 0, x: -10 }}
													animate={{ opacity: 1, x: 0 }}
													transition={{ delay: 0.1 + idx * 0.05, duration: 0.3 }}>
													<Link
														to={link.path}
														className="flex items-center justify-between group/link py-2"
														onClick={() => setActiveDropdown(null)}>
														<span className="text-lg font-light text-white/70 group-hover/link:text-white transition-colors duration-300">{renderText(link.label)}</span>
														<ArrowRight
															size={16}
															className="text-primary-blue opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300"
														/>
													</Link>
												</motion.div>
											))}
										</div>

										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.4 }}
											className="mt-10">
											<Link
												to={navData[activeDropdown].path}
												className="inline-flex items-center gap-3 text-primary-blue text-sm font-bold uppercase tracking-widest hover:text-white transition-colors duration-300"
												onClick={() => setActiveDropdown(null)}>
												{renderText('View All')} {renderText(activeDropdown)} <ChevronRight size={16} />
											</Link>
										</motion.div>
									</div>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</motion.header>

			{/* Mobile Navigation Fullscreen Layer */}
			<AnimatePresence>
				{isMobileOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="fixed inset-0 z-[90] bg-[#0A0A0A] flex flex-col pt-32 px-6 pb-12 overflow-y-auto lg:hidden">
						<div className="flex flex-col gap-8">
							{navItems.map((item, idx) => (
								<motion.div
									key={item}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: idx * 0.1, duration: 0.4 }}
									className="flex flex-col border-b border-white/10 pb-6">
									<Link
										to={navData[item].path}
										onClick={() => setIsMobileOpen(false)}
										className="text-4xl font-heading font-bold text-white flex items-center justify-between group">
										{renderText(item)}
										<ArrowUpRight
											size={28}
											className="text-white/20 group-hover:text-primary-blue transition-colors"
										/>
									</Link>
								</motion.div>
							))}
						</div>

						<div className="mt-auto pt-12 flex flex-col gap-6">
							{/* Mobile Language Toggle */}
							<div className="flex flex-col gap-3">
								<button
									onClick={() => handleLanguageChange('EN')}
									className={`w-full h-[56px] rounded-[16px] font-bold tracking-wide transition-all duration-300 ${
										language === 'EN' ? 'bg-primary-blue text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
									}`}>
									English
								</button>
								<button
									onClick={() => handleLanguageChange('AM')}
									className={`w-full h-[56px] rounded-[16px] font-bold tracking-wide transition-all duration-300 ${
										language === 'AM' ? 'bg-primary-blue text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
									}`}>
									አማርኛ
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
