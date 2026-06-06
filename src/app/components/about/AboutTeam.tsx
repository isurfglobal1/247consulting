import { Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutTeam() {
	const { t } = useLanguage();

	const leaders = [
		{
			name: t('aboutTeam.leader1.name'),
			role: t('aboutTeam.leader1.role'),
			img: 'https://images.unsplash.com/photo-1605602517229-cdbfc3dfb70c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG1hbGUlMjBjZW8lMjBvZmZpY2UlMjBwb3J0cmFpdCUyMGJyaWdodCUyMGNvbG9yfGVufDF8fHx8MTc4MDcwMTczMXww&ixlib=rb-4.1.0&q=80&w=1080',
			offset: 'md:mt-0',
			height: 'aspect-[3/4]',
		},
		{
			name: t('aboutTeam.leader2.name'),
			role: t('aboutTeam.leader2.role'),
			img: 'https://images.unsplash.com/photo-1611432579402-7037e3e2c1e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGZlbWFsZSUyMGV4ZWN1dGl2ZSUyMG9mZmljZSUyMHBvcnRyYWl0JTIwYnJpZ2h0JTIwY29sb3J8ZW58MXx8fHwxNzgwNzAxNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
			offset: 'md:mt-32',
			height: 'aspect-[4/5]',
		},
		{
			name: t('aboutTeam.leader3.name'),
			role: t('aboutTeam.leader3.role'),
			img: 'https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG1hbGUlMjBleGVjdXRpdmUlMjBvZmZpY2UlMjBwb3J0cmFpdCUyMHN1aXQlMjBicmlnaHQlMjBjb2xvcnxlbnwxfHx8fDE3ODA3MDE3Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
			offset: 'md:mt-16',
			height: 'aspect-[3/4]',
		},
	];

	return (
		<section className="relative w-full py-32 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
			<div className="container-enterprise relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
					<div>
						<h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-6">
							{t('aboutTeam.title1')} <br /> <span className="text-primary-blue">{t('aboutTeam.title2')}</span>
						</h2>
						<p className="text-white/60 text-lg font-light leading-relaxed max-w-md">{t('aboutTeam.description')}</p>
					</div>
					{/* <button className="px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors self-start md:self-auto">
						{t('aboutTeam.button')}
					</button> */}
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{leaders.map((leader, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: idx * 0.2 }}
							className={`group relative ${leader.offset}`}>
							<div className={`relative w-full ${leader.height} rounded-2xl overflow-hidden mb-6 border border-white/10`}>
								<ImageWithFallback
									src={leader.img}
									alt={leader.name}
									className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
								/>
								{/* Subtle Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-80 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>

								<a
									href="#"
									className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 border border-white/20 hover:bg-primary-blue hover:border-primary-blue">
									<Linkedin size={16} />
								</a>
							</div>

							<div>
								<h3 className="text-white text-2xl font-heading font-bold mb-1">{leader.name}</h3>
								<p className="text-primary-blue text-sm font-medium tracking-wide uppercase">{leader.role}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
