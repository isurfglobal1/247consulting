import { ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Link } from 'react-router';

import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ServicesEcosystem() {
	const [activeService, setActiveService] = useState(0);

	// const services = [
	//   {
	//     id: "hr-out",
	//     num: "01",
	//     title: "HR Outsourcing",
	//     desc: "Comprehensive offloading of human capital management, ensuring complete enterprise compliance across multiple African jurisdictions.",
	//     img: "https://images.unsplash.com/photo-1553775927-a071d5a6a39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29ya2ZvcmNlJTIwb3BlcmF0aW9uc3xlbnwxfHx8fDE3ODAwMTE5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
	//     cta: "Deploy HR Framework"
	//   },
	//   {
	//     id: "recruit",
	//     num: "02",
	//     title: "Recruitment & Staffing",
	//     desc: "Precision executive search and massive volume staffing. We utilize algorithmic market analysis for exact target identification.",
	//     img: "https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJ1c2luZXNzJTIwbWVldGluZ3xlbnwxfHx8fDE3ODAwMTE5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
	//     cta: "Initiate Talent Search"
	//   },
	//   {
	//     id: "payroll",
	//     num: "03",
	//     title: "Payroll Operations",
	//     desc: "Zero-error multi-currency payroll execution. A seamless financial shield guaranteeing absolute reliability and tax compliance.",
	//     img: "https://images.unsplash.com/photo-1758519291531-e96279895745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29ycG9yYXRlJTIwYmFua2luZ3xlbnwxfHx8fDE3ODAwMTE5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
	//     cta: "Execute Payroll Integration"
	//   },
	//   {
	//     id: "call-center",
	//     num: "04",
	//     title: "Call Center Solutions",
	//     desc: "Deploy fully managed omni-channel support hubs. We provide the real estate, the technology, and the trained personnel.",
	//     img: "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2FsbCUyMGNlbnRlciUyMGFnZW50fGVufDF8fHx8MTc4MDAxMTkxMXww&ixlib=rb-4.1.0&q=80&w=1080",
	//     cta: "Establish Support Hub"
	//   },
	//   {
	//     id: "workspace",
	//     num: "05",
	//     title: "Workforce Planning and Talent Management",
	//     desc: "Procuring and managing premium operational real estate tailored to the precise structural needs of your deployed workforce.",
	//     img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwdGVjaCUyMGVudGVycHJpc2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwMDExOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
	//     cta: "Procure Enterprise Space"
	//   },
	//   {
	//     id: "training",
	//     num: "06",
	//     title: "Employee Training and Development",
	//     desc: "Premium spaces and cognitive frameworks engineered for supreme human performance and corporate innovation.",
	//     img: "https://images.unsplash.com/photo-1779700210487-a01758a3c55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMGxlY3R1cmUlMjBsdXh1cnklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwMDE1NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
	//     cta: "Initiate Training Engagement"
	//   }
	// ];

	const services = [
		{
			id: 'hr-out',
			num: '01',
			title: 'Human Resource Outsourcing (HRO)',
			desc: 'Comprehensive offloading of human capital management, ensuring complete enterprise compliance and operational efficiency across all business functions.',
			img: 'https://images.unsplash.com/photo-1553775927-a071d5a6a39a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29ya2ZvcmNlJTIwb3BlcmF0aW9uc3xlbnwxfHx8fDE3ODAwMTE5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
			cta: 'Deploy HR Framework',
		},
		{
			id: 'recruitment',
			num: '02',
			title: 'Recruitment and Talent Acquisition',
			desc: 'Precision executive search and strategic talent acquisition. We utilize algorithmic market analysis for exact target identification and candidate matching.',
			img: 'https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGJ1c2luZXNzJTIwbWVldGluZ3xlbnwxfHx8fDE3ODAwMTE5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
			cta: 'Initiate Talent Search',
		},
		{
			id: 'payroll',
			num: '03',
			title: 'Payroll Management Services',
			desc: 'Zero-error multi-currency payroll execution. A seamless financial shield guaranteeing absolute reliability, tax compliance, and timely employee compensation.',
			img: 'https://images.unsplash.com/photo-1758519291531-e96279895745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29ycG9yYXRlJTIwYmFua2luZ3xlbnwxfHx8fDE3ODAwMTE5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
			cta: 'Execute Payroll Integration',
		},
		{
			id: 'training',
			num: '04',
			title: 'Employee Training and Development',
			desc: 'Premium learning frameworks engineered for supreme human performance. Structured programs that enhance skills, boost productivity, and drive corporate innovation.',
			img: 'https://images.unsplash.com/photo-1779700210487-a01758a3c55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMGxlY3R1cmUlMjBsdXh1cnklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwMDE1NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
			cta: 'Initiate Training Engagement',
		},
		{
			id: 'performance',
			num: '05',
			title: 'Performance Management Support',
			desc: 'Strategic frameworks for tracking, evaluating, and optimizing employee performance. Data-driven systems that align workforce output with business objectives.',
			img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcmZvcm1hbmNlJTIwcmV2aWV3fGVufDF8fHx8MTc4MDAxNjAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
			cta: 'Optimize Performance Systems',
		},
		{
			id: 'policy',
			num: '06',
			title: 'HR Policy Development and Compliance',
			desc: 'Expert guidance on labor laws, regulatory frameworks, and corporate policies. Ensuring your organization operates within legal boundaries while maintaining best practices.',
			img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wbGlhbmNlJTIwZG9jdW1lbnRzfGVufDF8fHx8MTc4MDAxNjAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
			cta: 'Establish Compliance Framework',
		},
		{
			id: 'workforce-planning',
			num: '07',
			title: 'Workforce Planning and Talent Management',
			desc: 'Strategic workforce modeling and talent pipeline development. We help you forecast needs, identify skill gaps, and build sustainable talent ecosystems.',
			img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwdGVjaCUyMGVudGVycHJpc2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwMDExOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
			cta: 'Plan Workforce Strategy',
		},
		{
			id: 'employee-relations',
			num: '08',
			title: 'Employee Relations and Engagement',
			desc: 'Creating positive workplace cultures that drive retention and productivity. Proactive conflict resolution, engagement strategies, and employee wellness programs.',
			img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxl bXBsb3llZSUyMGVuZ2FnZW1lbnR8ZW58MXx8fHwxNzgwMDE2MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
			cta: 'Enhance Employee Engagement',
		},
		{
			id: 'advisory',
			num: '09',
			title: 'HR Advisory and Consulting Services',
			desc: 'Strategic HR consulting for organizational transformation. Expert guidance on restructuring, change management, and human capital optimization.',
			img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdWx0aW5nJTIwbWVldGluZ3xlbnwxfHx8fDE3ODAwMTYwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
			cta: 'Consult Our Experts',
		},
		{
			id: 'staffing',
			num: '10',
			title: 'Staffing and Workforce Solutions',
			desc: 'Flexible staffing models including temporary, contract, and permanent placements. Rapid deployment of qualified professionals across all industries.',
			img: 'https://images.unsplash.com/photo-1560439514-b4969fcd448b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFmZmluZyUyMGFnZW5jeXxlbnwxfHx8fDE3ODAwMTYwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
			cta: 'Deploy Workforce Solutions',
		},
	];

	return (
		<section className="relative w-full bg-[#0A0A0A] py-32 border-t border-white/10">
			<div className="container-enterprise relative z-10">
				<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-8">
					<h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-[0.9]">
						The Operational <br /> Ecosystem
					</h2>
					<p className="text-white/50 text-lg max-w-sm">Interact with the index below to explore our core enterprise deployments.</p>
				</div>

				{/* Left: Interactive Typographic List */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
					{/*	<div className="lg:col-span-7 flex flex-col">
						{services.map((svc, idx) => {
							const isActive = activeService === idx;

							return (
								<div
									key={svc.id}
									onMouseEnter={() => setActiveService(idx)}
									className={`group relative border-t ${
										idx === services.length - 1 ? 'border-b' : ''
									} border-white/10 py-10 cursor-pointer transition-colors duration-500 hover:bg-white/[0.02]`}>
									<motion.div
										initial={false}
										animate={{ width: isActive ? '4px' : '0px' }}
										className="absolute left-0 top-0 bottom-0 bg-primary-blue"
									/>

									<div className="flex items-start gap-8 px-4 lg:px-8">
										<span className={`font-mono text-sm mt-2 transition-colors duration-500 ${isActive ? 'text-primary-blue' : 'text-white/30'}`}>{svc.num}</span>

										<div className="flex-1">
											<h3
												className={`text-3xl md:text-5xl font-heading font-black tracking-tight transition-colors duration-500 ${
													isActive ? 'text-white' : 'text-white/40 group-hover:text-white/70'
												}`}>
												{svc.title}
											</h3>

											<AnimatePresence>
												{isActive && (
													<motion.div
														initial={{ height: 0, opacity: 0, marginTop: 0 }}
														animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
														exit={{ height: 0, opacity: 0, marginTop: 0 }}
														transition={{ duration: 0.4, ease: 'easeInOut' }}
														className="overflow-hidden">
														<p className="text-white/70 text-lg leading-relaxed max-w-md mb-8">{svc.desc}</p>
														<Link
															to={`/services/${svc.id}`}
															className="inline-flex items-center gap-3 text-primary-blue font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">
															{svc.cta}
															<ArrowRight size={16} />
														</Link>
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									</div>
								</div>
							);
						})}
					</div> */}

					<div className="lg:col-span-7 flex flex-col max-h-[600px] overflow-y-auto scrollbar-none pr-4">
						{services.map((svc, idx) => {
							const isActive = activeService === idx;

							return (
								<div
									key={svc.id}
									onMouseEnter={() => setActiveService(idx)}
									className={`group relative border-t ${
										idx === services.length - 1 ? 'border-b' : ''
									} border-white/10 py-10 cursor-pointer transition-colors duration-500 hover:bg-white/[0.02]`}>
									{/* Active Indicator Line */}
									<motion.div
										initial={false}
										animate={{ width: isActive ? '4px' : '0px' }}
										className="absolute left-0 top-0 bottom-0 bg-primary-blue"
									/>

									<div className="flex items-start gap-8 px-4 lg:px-8">
										<span className={`font-mono text-sm mt-2 transition-colors duration-500 ${isActive ? 'text-primary-blue' : 'text-white/30'}`}>{svc.num}</span>

										<div className="flex-1">
											<h3
												className={`text-3xl md:text-5xl font-heading font-black tracking-tight transition-colors duration-500 ${
													isActive ? 'text-white' : 'text-white/40 group-hover:text-white/70'
												}`}>
												{svc.title}
											</h3>

											<AnimatePresence>
												{isActive && (
													<motion.div
														initial={{ height: 0, opacity: 0, marginTop: 0 }}
														animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
														exit={{ height: 0, opacity: 0, marginTop: 0 }}
														transition={{ duration: 0.4, ease: 'easeInOut' }}
														className="overflow-hidden">
														<p className="text-white/70 text-lg leading-relaxed max-w-md mb-8">{svc.desc}</p>
														<Link
															to={`/services/${svc.id}`}
															className="inline-flex items-center gap-3 text-primary-blue font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">
															{svc.cta}
															<ArrowRight size={16} />
														</Link>
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									</div>
								</div>
							);
						})}
					</div>

					{/* Right: Sticky Image Reveal */}
					<div className="hidden lg:block lg:col-span-5 h-[600px] sticky top-32">
						<div className="w-full h-full relative rounded-none overflow-hidden bg-[#111]">
							<AnimatePresence mode="wait">
								<motion.div
									key={activeService}
									initial={{ opacity: 0, scale: 1.05 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.7, ease: 'easeInOut' }}
									className="absolute inset-0 w-full h-full">
									<ImageWithFallback
										src={services[activeService].img}
										alt={services[activeService].title}
										className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten"
									/>

									{/* Technical Overlay */}
									<div className="absolute inset-0 border border-white/10 pointer-events-none"></div>
									<div className="absolute top-6 left-6 flex items-center gap-3">
										<span className="w-2 h-2 bg-primary-blue rounded-full"></span>
										<span className="text-white/50 text-xs font-mono uppercase tracking-widest">Visual Data Feed</span>
									</div>
									<div className="absolute bottom-6 right-6 text-white/30 font-mono text-xs">{services[activeService].id.toUpperCase()}_SYS</div>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
