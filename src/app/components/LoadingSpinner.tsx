import { motion } from 'motion/react';

export function LoadingSpinner() {
	return (
		<div className="fixed inset-0 bg-[#0A0A0A] flex items-center justify-center z-50">
			<motion.div
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
				className="w-12 h-12 border-3 border-primary-blue/20 border-t-primary-blue rounded-full"
			/>
		</div>
	);
}
