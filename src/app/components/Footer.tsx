import { ArrowUpRight, Linkedin, Mail, Twitter } from 'lucide-react';
import { Link } from 'react-router';

import { useLanguage } from '../contexts/LanguageContext';
import { sendAsEmail } from '../utils/mailto';

export function Footer() {
	const { t } = useLanguage();

	const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const email = new FormData(e.currentTarget).get('email');
		sendAsEmail('Newsletter Signup', { Email: String(email || '') });
		e.currentTarget.reset();
	};

	return (
		<footer className="bg-[#0A0A0A] pt-40 pb-12 relative overflow-hidden">
			{/* Immersive glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-blue/5 blur-[150px] rounded-full pointer-events-none" />

			<div className="container-enterprise relative z-10">
				{/* Top Cinematic CTA */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-white/10 pb-24 mb-24">
					<div className="lg:col-span-8 flex flex-col">
						<h2 className="text-4xl md:text-[62px] font-heading font-black text-white leading-[0.9] tracking-tighter uppercase mb-8">
							{t('footer.ctaTitle1')} <br />
							<span className="text-white/30">{t('footer.ctaTitle2')}</span>
						</h2>
						<div className="flex gap-6 mt-4">
							<Link
								to="/contact"
								className="h-[56px] px-8 rounded-full bg-white text-primary-black font-bold tracking-widest uppercase text-sm flex items-center gap-3 hover:bg-primary-blue hover:text-real-white hover:shadow-[0_0_30px_rgba(29,155,240,0.4)] transition-all duration-500 group">
								{t('footer.ctaButton')}{' '}
								<ArrowUpRight
									size={20}
									className="group-hover:rotate-45 transition-transform duration-300"
								/>
							</Link>
						</div>
					</div>

					<div className="lg:col-span-4 flex flex-col justify-end">
						<div className="flex flex-col gap-4 border-l border-white/10 pl-8">
							<p className="text-xl font-light text-white/80">{t('footer.newsletterText')}</p>
							<form
								className="relative mt-4"
								onSubmit={handleNewsletterSubmit}>
								<input
									type="email"
									name="email"
									required
									placeholder={t('footer.newsletterPlaceholder')}
									className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/30 font-light focus:outline-none focus:border-primary-blue transition-colors pr-12"
								/>
								<button
									type="submit"
									className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-primary-blue transition-colors">
									<ArrowUpRight size={24} />
								</button>
							</form>
						</div>
					</div>
				</div>

				{/* Links Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
					<div className="col-span-1 lg:col-span-4 flex flex-col items-start pr-8">
						<Link
							to="/"
							className="flex items-center gap-3 mb-8 group">
							<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary-black font-heading font-black text-2xl group-hover:bg-primary-blue group-hover:text-white transition-colors duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
								24
							</div>
							<span className="font-heading font-black text-3xl tracking-tighter text-white">247HR</span>
						</Link>
						<p className="text-white/40 text-sm leading-relaxed font-light mb-8 max-w-sm">{t('footer.hqDescription')}</p>
						<div className="flex gap-4">
							{[
								{ Icon: Linkedin, href: 'https://www.linkedin.com/company/247hr', label: 'LinkedIn' },
								{ Icon: Twitter, href: 'https://twitter.com/247hr', label: 'Twitter' },
								{ Icon: Mail, href: 'mailto:executive@247hr.com', label: 'Email' },
							].map(({ Icon, href, label }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white/[0.05] hover:text-primary-blue transition-all duration-300 hover:-translate-y-1">
									<Icon size={18} />
								</a>
							))}
						</div>
					</div>

					<div className="col-span-1 lg:col-span-2 flex flex-col gap-6">
						<h5 className="font-mono text-xs uppercase tracking-[0.2em] text-white/30">{t('footer.intelligenceTitle')}</h5>
						<ul className="space-y-4">
							{[
								{ key: 'footer.aboutBoard', link: '/about' },
								{ key: 'footer.leadership', link: '/about' },
								{ key: 'footer.globalNetwork', link: '/about' },
								{ key: 'footer.esgImpact', link: '/about' },
							].map((item) => (
								<li key={item.key}>
									<Link
										to={item.link}
										className="text-white/60 font-light hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
										{t(item.key)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="col-span-1 lg:col-span-3 flex flex-col gap-6">
						<h5 className="font-mono text-xs uppercase tracking-[0.2em] text-white/30">{t('footer.infrastructureTitle')}</h5>
						<ul className="space-y-4">
							{[
								{ key: 'footer.executiveSearch', link: '/services' },
								{ key: 'footer.workforceOperations', link: '/services' },
								{ key: 'footer.talentAnalytics', link: '/services' },
								{ key: 'footer.riskCompliance', link: '/services' },
							].map((item) => (
								<li key={item.key}>
									<Link
										to={item.link}
										className="text-white/60 font-light hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
										{t(item.key)}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="col-span-1 lg:col-span-3 flex flex-col gap-6">
						<h5 className="font-mono text-xs uppercase tracking-[0.2em] text-white/30">{t('footer.networkTitle')}</h5>
						<ul className="space-y-4">
							{[
								{ key: 'footer.openRequisitions', link: '/careers' },
								{ key: 'footer.lifeAt247hr', link: '/careers' },
								{ key: 'footer.globalLocations', link: '/about' },
								{ key: 'footer.pressMedia', link: '/contact' },
							].map((item) => (
								<li key={item.key}>
									<Link
										to={item.link}
										className="text-white/60 font-light hover:text-white hover:translate-x-2 inline-block transition-all duration-300">
										{t(item.key)}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Legal */}
				<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs font-mono text-white/30 uppercase tracking-widest">
					<p>© 2026 247HR Consulting PLC. {t('footer.rights')}</p>
					<div className="flex gap-8 mt-4 md:mt-0">
						<Link
							to="/contact"
							className="hover:text-white transition-colors">
							{t('footer.privacyProtocol')}
						</Link>
						<Link
							to="/contact"
							className="hover:text-white transition-colors">
							{t('footer.termsOfService')}
						</Link>
						<Link
							to="/contact"
							className="hover:text-white transition-colors">
							{t('footer.cookieArchitecture')}
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
