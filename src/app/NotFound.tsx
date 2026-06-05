import { AlertTriangle, ArrowLeft, Home, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

import { useLanguage } from '../contexts/LanguageContext';
import { companyInfo } from '../utils';

export function NotFound() {
	const { t } = useLanguage();

	return (
		<div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
			{/* Background Ambient Lighting */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/5 rounded-full blur-[150px] pointer-events-none" />
				<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-30" />
			</div>

			{/* Structural Grid Lines */}
			<div className="absolute inset-0 pointer-events-none z-0">
				<div className="w-full h-full flex justify-center">
					<div className="w-full max-w-[1440px] h-full grid grid-cols-12 gap-6 px-6">
						{[...Array(13)].map((_, i) => (
							<div
								key={i}
								className="h-full w-px bg-white/5"></div>
						))}
					</div>
				</div>
			</div>

			{/* Main Content */}
			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-32">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
					className="text-center max-w-3xl mx-auto">
					{/* 404 Number with Glow Effect */}
					<div className="relative mb-8">
						<div className="text-[120px] md:text-[180px] lg:text-[220px] font-heading font-black text-white/5 select-none absolute inset-0 flex items-center justify-center -z-10">
							404
						</div>
						<div className="text-[100px] md:text-[160px] lg:text-[200px] font-heading font-black text-white leading-none tracking-tighter">404</div>
						<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-primary-blue/50"></div>
					</div>

					{/* Error Badge */}
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
						<AlertTriangle
							size={14}
							className="text-primary-blue"
						/>
						<span className="text-white/70 text-sm font-medium tracking-wide">{t('Navigation Error')}</span>
					</div>

					{/* Error Message */}
					<h1 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 tracking-tight">{t('Page Not Found')}</h1>

					<p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl mx-auto">
						{t('The page you are looking for does not exist or may have been moved. Please check the URL or return to the homepage.')}
					</p>

					{/* Action Buttons */}
					<div className="flex flex-wrap items-center justify-center gap-4">
						<Link
							to="/"
							className="group h-[56px] px-8 rounded-full bg-white text-primary-black font-bold tracking-wider uppercase text-sm flex items-center gap-3 hover:bg-primary-blue hover:text-white transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(29,155,240,0.4)]">
							<Home
								size={18}
								className="group-hover:-translate-y-0.5 transition-transform"
							/>
							{t('Back to Home')}
						</Link>

						<button
							onClick={() => window.history.back()}
							className="group h-[56px] px-8 rounded-full border border-white/20 bg-transparent text-white font-bold tracking-wider uppercase text-sm flex items-center gap-3 hover:bg-white/10 transition-all duration-500">
							<ArrowLeft
								size={18}
								className="group-hover:-translate-x-1 transition-transform"
							/>
							{t('Go Back')}
						</button>
					</div>

					{/* Quick Links Section */}
					<div className="mt-24 pt-12 border-t border-white/10">
						<p className="text-white/40 text-sm mb-6">{t('Quick Navigation')}</p>
						<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
							{[
								{ name: t('Services'), path: '/services' },
								{ name: t('Careers'), path: '/careers' },
								{ name: t('About'), path: '/about' },
								{ name: t('Contact'), path: '/contact' },
							].map((item) => (
								<Link
									key={item.path}
									to={item.path}
									className="text-white/60 hover:text-white text-sm font-medium transition-colors hover:translate-x-1 inline-block duration-300">
									{item.name}
								</Link>
							))}
						</div>
					</div>

					{/* Search Suggestion */}
					<div className="mt-12 flex items-center justify-center gap-2 text-white/30 text-sm">
						<Search size={14} />
						<span>{t('Need help?')}</span>
						<Link
							to="/contact"
							className="text-primary-blue hover:text-white transition-colors ml-1">
							{t('Contact Support')}
						</Link>
					</div>
				</motion.div>

				{/* Footer Note */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.6, duration: 0.8 }}
					className="absolute bottom-8 left-0 right-0 text-center text-white/20 text-xs font-mono">
					<p>
						© 2026 {companyInfo.name}. {t('All rights reserved.')}
					</p>
				</motion.div>
			</div>
		</div>
	);
}
