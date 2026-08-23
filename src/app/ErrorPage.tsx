import { AlertTriangle, ArrowLeft, Bug, Home, RefreshCw, Server, ShieldAlert, WifiOff } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router';

import { useLanguage } from './contexts/LanguageContext';

interface ErrorPageProps {
	error?: Error;
}

export function ErrorPage({ error }: ErrorPageProps) {
	const { t } = useLanguage();
	const routeError = useRouteError();
	const [theme, setTheme] = useState<'light' | 'dark'>('dark');

	useEffect(() => {
		const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
		const currentTheme = savedTheme || 'dark';
		setTheme(currentTheme);
	}, []);

	const isDark = theme === 'dark';

	// Theme-aware styles
	const bgClass = isDark ? 'bg-[#0A0A0A]' : 'bg-[#F5F7FA]';
	const gridLineClass = isDark ? 'bg-white/5' : 'bg-black/5';
	const textPrimaryClass = isDark ? 'text-white' : 'text-primary-black';
	const textSecondaryClass = isDark ? 'text-white/60' : 'text-primary-black/60';
	const textMutedClass = isDark ? 'text-white/40' : 'text-primary-black/40';
	const textDimClass = isDark ? 'text-white/10' : 'text-primary-black/10';
	const badgeBgClass = isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10';
	const badgeTextClass = isDark ? 'text-white/70' : 'text-primary-black/70';
	const borderClass = isDark ? 'border-white/10' : 'border-black/10';
	const buttonBorderClass = isDark ? 'border-white/20' : 'border-black/20';
	const buttonHoverClass = isDark ? 'hover:bg-white/10' : 'hover:bg-black/10';
	const buttonTextClass = isDark ? 'text-white' : 'text-primary-black';
	const glowClass = isDark ? 'bg-primary-blue/5' : 'bg-primary-blue/10';

	let errorType = 'unknown';
	let errorTitle = '';
	let errorMessage = '';
	let errorIcon = (
		<AlertTriangle
			size={48}
			className="text-primary-blue"
		/>
	);

	if (isRouteErrorResponse(routeError)) {
		// Handle route errors (4xx, 5xx from React Router)
		if (routeError.status === 404) {
			errorType = '404';
			errorTitle = t('Page Not Found');
			errorMessage = t('The page you are looking for does not exist or may have been moved.');
			errorIcon = (
				<AlertTriangle
					size={48}
					className="text-primary-blue"
				/>
			);
		} else if (routeError.status === 500) {
			errorType = '500';
			errorTitle = t('Server Error');
			errorMessage = t('Something went wrong on our end. Please try again later.');
			errorIcon = (
				<Server
					size={48}
					className="text-primary-blue"
				/>
			);
		} else {
			errorType = `${routeError.status}`;
			errorTitle = t('Something Went Wrong');
			errorMessage = routeError.statusText || t('An unexpected error occurred.');
			errorIcon = (
				<ShieldAlert
					size={48}
					className="text-primary-blue"
				/>
			);
		}
	} else if (error || routeError) {
		const actualError = error || (routeError as Error);
		errorType = 'client';
		errorTitle = t('Application Error');
		errorMessage = t('An unexpected error occurred. Our team has been notified.');
		errorIcon = (
			<Bug
				size={48}
				className="text-primary-blue"
			/>
		);
	} else if (!navigator.onLine) {
		errorType = 'network';
		errorTitle = t('No Internet Connection');
		errorMessage = t('Please check your network connection and try again.');
		errorIcon = (
			<WifiOff
				size={48}
				className="text-primary-blue"
			/>
		);
	}

	return (
		<div className={`min-h-screen ${bgClass} relative overflow-hidden`}>
			<div className="absolute inset-0 z-0">
				<div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] ${glowClass} rounded-full blur-[150px] pointer-events-none`} />
				<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-30" />
			</div>

			<div className="absolute inset-0 pointer-events-none z-0">
				<div className="w-full h-full flex justify-center">
					<div className="w-full max-w-[1440px] h-full grid grid-cols-12 gap-6 px-6">
						{[...Array(13)].map((_, i) => (
							<div
								key={i}
								className={`h-full w-px ${gridLineClass}`}></div>
						))}
					</div>
				</div>
			</div>

			<div className={`absolute top-20 right-20 w-64 h-64 ${glowClass} rounded-full blur-[100px] animate-pulse`} />
			<div
				className={`absolute bottom-20 left-20 w-80 h-80 ${glowClass} rounded-full blur-[120px] animate-pulse`}
				style={{ animationDelay: '1s' }}
			/>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-32">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					className="text-center max-w-3xl mx-auto">
					{/* Error Icon with Pulse Effect */}
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ type: 'spring', bounce: 0.5, duration: 0.8 }}
						className="mb-8 flex justify-center">
						<div className="relative">
							<div className={`w-24 h-24 rounded-full ${glowClass} flex items-center justify-center`}>{errorIcon}</div>
							<div
								className={`absolute inset-0 w-24 h-24 rounded-full bg-primary-blue/20 animate-ping`}
								style={{ animationDuration: '2s' }}
							/>
						</div>
					</motion.div>

					{errorType !== 'client' && errorType !== 'network' && errorType !== 'unknown' && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 }}
							className={`text-[78px] md:text-[118px] font-heading font-black ${textDimClass} select-none mb-4`}>
							{errorType}
						</motion.div>
					)}

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${badgeBgClass} border ${borderClass} mb-8 backdrop-blur-md`}>
						{errorType === 'network' ? (
							<WifiOff
								size={14}
								className="text-primary-blue"
							/>
						) : errorType === '500' ? (
							<Server
								size={14}
								className="text-primary-blue"
							/>
						) : (
							<AlertTriangle
								size={14}
								className="text-primary-blue"
							/>
						)}
						<span className={`${badgeTextClass} text-sm font-medium tracking-wide`}>
							{errorType === 'network' ? t('Connection Error') : errorType === '500' ? t('Server Error') : t('Error Occurred')}
						</span>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className={`text-3xl md:text-5xl font-heading font-black ${textPrimaryClass} mb-6 tracking-tight`}>
						{errorTitle}
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className={`${textSecondaryClass} text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl mx-auto`}>
						{errorMessage}
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="flex flex-wrap items-center justify-center gap-4">
						<Link
							to="/"
							className={`group h-[56px] px-8 rounded-full ${
								isDark ? 'bg-white text-primary-black hover:bg-primary-blue hover:text-white' : 'bg-primary-black text-white hover:bg-primary-blue'
							} font-bold tracking-wider uppercase text-sm flex items-center gap-3 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(29,155,240,0.4)]`}>
							<Home
								size={18}
								className="group-hover:-translate-y-0.5 transition-transform"
							/>
							{t('Back to Home')}
						</Link>

						<button
							onClick={() => window.location.reload()}
							className={`group h-[56px] px-8 rounded-full border ${buttonBorderClass} bg-transparent ${buttonTextClass} font-bold tracking-wider uppercase text-sm flex items-center gap-3 ${buttonHoverClass} transition-all duration-500`}>
							<RefreshCw
								size={18}
								className="group-hover:rotate-180 transition-transform duration-500"
							/>
							{t('Try Again')}
						</button>

						<button
							onClick={() => window.history.back()}
							className={`group h-[56px] px-8 rounded-full border ${buttonBorderClass} bg-transparent ${buttonTextClass} font-bold tracking-wider uppercase text-sm flex items-center gap-3 ${buttonHoverClass} transition-all duration-500`}>
							<ArrowLeft
								size={18}
								className="group-hover:-translate-x-1 transition-transform"
							/>
							{t('Go Back')}
						</button>
					</motion.div>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.7 }}
						className={`mt-16 pt-8 border-t ${borderClass}`}>
						<p className={`${textMutedClass} text-sm`}>
							{t('Need assistance?')}{' '}
							<Link
								to="/contact"
								className="text-primary-blue hover:text-white transition-colors">
								{t('Contact our support team')}
							</Link>
						</p>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
