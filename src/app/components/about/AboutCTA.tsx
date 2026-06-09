import { ArrowRight, Mail, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';

import { useLanguage } from '../../contexts/LanguageContext';

export function AboutCTA() {
	const { t } = useLanguage();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [emailSent, setEmailSent] = useState(false);

	const handleEmailSubmit = () => {
		// Open default email client
		window.location.href =
			'mailto:operations@247consulting.com?subject=Leadership%20Inquiry%20-%20247HR&body=Dear%20Leadership%20Team%2C%0A%0AI%20would%20like%20to%20connect%20with%20your%20leadership%20regarding%20an%20opportunity%20to%20collaborate%20with%20247HR.%0A%0APlease%20find%20my%20details%20below%3A%0A%0AName%3A%0ACompany%3A%0APhone%3A%0A%0AI%20look%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards%2C';
		setEmailSent(true);
		setTimeout(() => setEmailSent(false), 3000);
		setIsModalOpen(false);
	};

	return (
		<>
			<section className="relative w-full bg-[#0A0A0A] py-24 px-4 md:px-8 overflow-hidden">
				{/* Background ambient lighting */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

				<div className="max-w-[1200px] mx-auto bg-[#111] border border-white/5 rounded-[40px] relative overflow-hidden flex flex-col items-center py-32 px-6 shadow-2xl">
					{/* Subtle grid and shapes inside container */}
					<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')]"></div>
					<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-blue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="text-center relative z-10 w-full">
						<div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
							<span className="text-white/80 text-xs font-bold tracking-widest uppercase">{t('aboutCTA.badge')}</span>
						</div>

						<h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight mb-8 max-w-4xl mx-auto leading-[1.05]">
							{t('aboutCTA.title1')} <br />
							<span className="text-primary-blue">{t('aboutCTA.title2')}</span> <br />
							{t('aboutCTA.title3')}
						</h2>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
							<Link
								to="/contact"
								className="h-[64px] px-10 rounded-xl bg-white text-primary-black font-bold text-lg hover:bg-primary-blue hover:text-real-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(29,155,240,0.5)] flex items-center gap-2 group">
								{t('aboutCTA.buttonPrimary')}
								<ArrowRight
									size={20}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</Link>

							<button
								onClick={() => setIsModalOpen(true)}
								className="h-[64px] px-10 rounded-xl bg-transparent border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2 group">
								<Mail
									size={18}
									className="group-hover:scale-110 transition-transform"
								/>
								{t('aboutCTA.buttonSecondary')}
							</button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Email Modal */}
			<AnimatePresence>
				{isModalOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setIsModalOpen(false)}
						className="fixed inset-0 z-[200] flex items-center justify-center px-4 bg-black/80 backdrop-blur-md">
						<motion.div
							initial={{ scale: 0.9, y: 20, opacity: 0 }}
							animate={{ scale: 1, y: 0, opacity: 1 }}
							exit={{ scale: 0.9, y: 20, opacity: 0 }}
							transition={{ type: 'spring', damping: 25, stiffness: 300 }}
							onClick={(e) => e.stopPropagation()}
							className="relative max-w-md w-full bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
							{/* Modal Header */}
							<div className="flex items-center justify-between p-6 border-b border-white/10">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-full bg-primary-blue/20 flex items-center justify-center">
										<Mail
											size={20}
											className="text-primary-blue"
										/>
									</div>
									<div>
										<h3 className="text-white font-heading font-bold text-xl">Contact Leadership</h3>
										<p className="text-white/40 text-xs">Direct executive communication</p>
									</div>
								</div>
								<button
									onClick={() => setIsModalOpen(false)}
									className="text-white/40 hover:text-white transition-colors">
									<X size={24} />
								</button>
							</div>

							{/* Modal Body */}
							<div className="p-6 space-y-4">
								<p className="text-white/70 text-sm leading-relaxed">Compose an email directly to our leadership team. Your message will be sent to:</p>
								<div className="bg-white/5 rounded-lg p-3 border border-white/10">
									<p className="text-primary-blue font-mono text-sm break-all">operations@247consulting.com</p>
								</div>

								<div className="space-y-2 pt-2">
									<div>
										<label className="text-white/60 text-xs uppercase tracking-widest block mb-1">Subject</label>
										<p className="text-white/90 text-sm font-medium">Leadership Inquiry - 247 Consulting</p>
									</div>
									<div>
										<label className="text-white/60 text-xs uppercase tracking-widest block mb-1">Body Preview</label>
										<p className="text-white/60 text-xs leading-relaxed">
											Dear Leadership Team,
											<br />I would like to connect with your leadership regarding an opportunity to collaborate with 247 Consulting...
										</p>
									</div>
								</div>
							</div>

							{/* Modal Footer */}
							<div className="flex gap-3 p-6 border-t border-white/10 bg-white/5">
								<button
									onClick={() => setIsModalOpen(false)}
									className="flex-1 h-[48px] rounded-xl border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
									Cancel
								</button>
								<button
									onClick={handleEmailSubmit}
									className="flex-1 h-[48px] rounded-xl bg-primary-blue text-white font-medium hover:bg-primary-blue/80 transition-all duration-300 flex items-center justify-center gap-2 group">
									<Mail size={16} />
									Open Email Client
								</button>
							</div>

							{/* Success Toast */}
							{emailSent && (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 20 }}
									className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
									Email client opened successfully!
								</motion.div>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
