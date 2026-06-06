import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

import { useLanguage } from '../../contexts/LanguageContext';

export function ServicesStrategy() {
	const { t } = useLanguage();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleItems, setVisibleItems] = useState(3);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setVisibleItems(1);
			} else if (window.innerWidth < 1024) {
				setVisibleItems(2);
			} else {
				setVisibleItems(3);
			}
		};

		// Initial call
		handleResize();

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const points = [
		{
			num: '01',
			title: t('servicesStrategy.point1.title'),
			desc: t('servicesStrategy.point1.desc'),
		},
		{
			num: '02',
			title: t('servicesStrategy.point2.title'),
			desc: t('servicesStrategy.point2.desc'),
		},
		{
			num: '03',
			title: t('servicesStrategy.point3.title'),
			desc: t('servicesStrategy.point3.desc'),
		},
		{
			num: '04',
			title: t('servicesStrategy.point4.title'),
			desc: t('servicesStrategy.point4.desc'),
		},
	];

	const maxIndex = Math.max(0, points.length - visibleItems);

	const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
	const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

	return (
		<section className="relative w-full py-32 bg-[#F5F7FA] overflow-hidden">
			<div className="container-enterprise relative z-10">
				<div className="mb-16 md:mb-24 flex items-center justify-between">
					<h2 className="text-primary-black text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase">{t('servicesStrategy.title')}</h2>

					{/* Desktop controls */}
					<div className="hidden md:flex gap-4">
						<button
							onMouseEnter={prev}
							onClick={prev}
							disabled={currentIndex === 0}
							className="w-14 h-14 rounded-full border border-primary-black flex items-center justify-center text-primary-black hover:bg-primary-black hover:text-white transition-colors disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-primary-black cursor-pointer disabled:cursor-not-allowed"
							aria-label={t('servicesStrategy.previousLabel')}>
							<ArrowLeft size={24} />
						</button>
						<button
							onMouseEnter={next}
							onClick={next}
							disabled={currentIndex === maxIndex}
							className="w-14 h-14 rounded-full border border-primary-black flex items-center justify-center text-primary-black hover:bg-primary-black hover:text-white transition-colors disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-primary-black cursor-pointer disabled:cursor-not-allowed"
							aria-label={t('servicesStrategy.nextLabel')}>
							<ArrowRight size={24} />
						</button>
					</div>
				</div>

				{/* Mobile controls */}
				<div className="md:hidden flex gap-4 mb-8 justify-end">
					<button
						onClick={prev}
						disabled={currentIndex === 0}
						className="w-12 h-12 rounded-full border border-primary-black flex items-center justify-center text-primary-black transition-colors disabled:opacity-20"
						aria-label={t('servicesStrategy.previousLabel')}>
						<ArrowLeft size={20} />
					</button>
					<button
						onClick={next}
						disabled={currentIndex === maxIndex}
						className="w-12 h-12 rounded-full border border-primary-black flex items-center justify-center text-primary-black transition-colors disabled:opacity-20"
						aria-label={t('servicesStrategy.nextLabel')}>
						<ArrowRight size={20} />
					</button>
				</div>

				<div className="overflow-hidden border-y border-primary-black/10">
					<motion.div
						className="flex"
						animate={{ x: `-${currentIndex * (100 / visibleItems)}%` }}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
						{points.map((pt, idx) => (
							<div
								key={idx}
								className="flex-none w-full md:w-1/2 lg:w-1/3 p-8 lg:p-12 border-r border-primary-black/10 group hover:bg-white transition-colors duration-500">
								<div className="text-primary-blue font-mono text-sm mb-12">[{pt.num}]</div>
								<h3 className="text-2xl font-heading font-black text-primary-black mb-6 uppercase tracking-tight group-hover:text-primary-blue transition-colors">
									{pt.title}
								</h3>
								<p className="text-primary-black/60 leading-relaxed min-h-[80px]">{pt.desc}</p>
							</div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
