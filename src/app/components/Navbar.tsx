import { ArrowRight, ArrowUpRight, ChevronRight, Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

import { useLanguage } from '../contexts/LanguageContext';
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
	const { language, toggleLanguage, t } = useLanguage();
	const [activeDropdown, setActiveDropdown] = useState<NavKeys | null>(null);
	const [isMobileOpen, setIsMobileOpen] = useState(false);
	const [theme, setTheme] = useState<'light' | 'dark'>('dark');
	const location = useLocation();

	useEffect(() => {
		// Initialize theme from localStorage or default to dark
		const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
		const currentTheme = savedTheme || 'dark';
		setTheme(currentTheme);
		document.documentElement.setAttribute('data-theme', currentTheme);
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
	};

	useEffect(() => {
		setActiveDropdown(null);
		setIsMobileOpen(false);
	}, [location.pathname]);

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'instant', // or 'smooth' if you want animated scrolling
		});
	}, [location.pathname]);

	const navItems: NavKeys[] = ['Services', 'Careers', 'About', 'Contact'];

	return (
		<>
			<motion.header
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
				className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-6 pointer-events-none">
				<div
					className={`w-full max-w-[1200px] bg-[#0A0A0A]/60 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] pointer-events-auto transition-all duration-500 relative ${
						activeDropdown ? 'rounded-t-[24px] rounded-b-none' : 'rounded-[24px]'
					}`}
					onMouseLeave={() => setActiveDropdown(null)}>
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
											{t(`nav.${item.toLowerCase()}`, item)}

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

						{/* Desktop Actions */}
						<div className="hidden lg:flex items-center gap-6 relative z-20">
							<button
								onClick={toggleTheme}
								className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
								aria-label="Toggle theme">
								{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
							</button>

							<button
								onClick={toggleLanguage}
								className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-medium text-sm group">
								{language === 'EN' ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 60 30"
										width="18"
										height="12"
										className="group-hover:scale-110 transition-transform duration-300 rounded-[2px] overflow-hidden">
										<clipPath id="s">
											<path d="M0,0 v30 h60 v-30 z" />
										</clipPath>
										<clipPath id="t">
											<path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
										</clipPath>
										<g clipPath="url(#s)">
											<path
												d="M0,0 v30 h60 v-30 z"
												fill="#012169"
											/>
											<path
												d="M0,0 L60,30 M60,0 L0,30"
												stroke="#fff"
												strokeWidth="6"
											/>
											<path
												d="M0,0 L60,30 M60,0 L0,30"
												clipPath="url(#t)"
												stroke="#C8102E"
												strokeWidth="4"
											/>
											<path
												d="M30,0 v30 M0,15 h60"
												stroke="#fff"
												strokeWidth="10"
											/>
											<path
												d="M30,0 v30 M0,15 h60"
												stroke="#C8102E"
												strokeWidth="6"
											/>
										</g>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 1200 600"
										width="18"
										height="12"
										className="group-hover:scale-110 transition-transform duration-300 rounded-[2px] overflow-hidden">
										<rect
											width="1200"
											height="200"
											fill="#078930"
										/>
										<rect
											y="200"
											width="1200"
											height="200"
											fill="#Fcd116"
										/>
										<rect
											y="400"
											width="1200"
											height="200"
											fill="#da121a"
										/>
										<circle
											cx="600"
											cy="300"
											r="150"
											fill="#0f47af"
										/>
										<polygon
											points="600,165 632,260 730,260 651,320 682,415 600,355 518,415 549,320 470,260 568,260"
											fill="#Fcd116"
										/>
										<polygon
											points="600,200 621,263 686,263 632,305 653,369 600,328 547,369 568,305 514,263 579,263"
											fill="#0f47af"
										/>
									</svg>
								)}
								<span>{language}</span>
							</button>

							<Link
								to="/contact"
								className="h-[52px] px-8 rounded-[16px] bg-white text-primary-black font-bold tracking-wide flex items-center justify-center hover:bg-primary-blue hover:text-white hover:shadow-[0_0_30px_rgba(29,155,240,0.4)] transition-all duration-500 transform hover:-translate-y-1">
								{t('nav.getStarted', 'Get Started')}
							</Link>
						</div>

						{/* Mobile Actions & Menu Toggle */}
						<div className="lg:hidden flex items-center gap-4 relative z-20">
							<button
								onClick={toggleTheme}
								className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
								aria-label="Toggle theme">
								{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
							</button>

							<button
								className="text-white"
								onClick={() => setIsMobileOpen(!isMobileOpen)}>
								{isMobileOpen ? <X size={28} /> : <Menu size={28} />}
							</button>
						</div>
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
												{t(`nav.${activeDropdown.toLowerCase()}.headline`, navData[activeDropdown].headline)}
											</motion.h3>
										</div>
									</div>

									{/* Right Links Column */}
									<div className="col-span-7 flex flex-col justify-center py-4 pl-8 border-l border-white/5">
										<div className="text-white/30 font-mono text-xs uppercase tracking-widest mb-8 flex items-center gap-4">
											<span className="w-8 h-[1px] bg-white/20" />
											{t('nav.explore')} {t(`nav.${activeDropdown.toLowerCase()}`, activeDropdown)}
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
														<span className="text-lg font-light text-white/70 group-hover/link:text-white transition-colors duration-300">{link.label}</span>
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
												{t('nav.viewAll')} {t(`nav.${activeDropdown.toLowerCase()}`, activeDropdown)} <ChevronRight size={16} />
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
						className="fixed inset-0 z-[90] bg-[#0A0A0A] flex flex-col pt-44 px-6 pb-12 overflow-y-auto lg:hidden">
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
										{t(`nav.${item.toLowerCase()}`, item)}
										<ArrowUpRight
											size={28}
											className="text-white/20 group-hover:text-primary-blue transition-colors"
										/>
									</Link>
								</motion.div>
							))}

							{/* Language Toggle - Mobile */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: navItems.length * 0.1, duration: 0.4 }}
								className="border-b border-white/10 pb-6">
								<button
									onClick={() => {
										toggleLanguage();
										setIsMobileOpen(false);
									}}
									className="text-4xl font-heading font-bold text-white flex items-center justify-between group w-full">
									<span className="flex items-center gap-4">
										<Globe
											size={32}
											className="text-white/40 group-hover:text-primary-blue transition-colors"
										/>
										{language}
									</span>
									<ArrowUpRight
										size={28}
										className="text-white/20 group-hover:text-primary-blue transition-colors"
									/>
								</button>
							</motion.div>
						</div>

						<div className="mt-auto pt-12 flex flex-col gap-6">
							<Link
								to="/contact"
								onClick={() => setIsMobileOpen(false)}
								className="w-full h-[64px] bg-primary-blue text-white rounded-2xl flex items-center justify-center font-bold tracking-widest uppercase text-sm">
								{t('nav.initiate', 'Initiate Dialogue')}
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
