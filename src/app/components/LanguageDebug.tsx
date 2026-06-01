// src/components/LanguageDebug.tsx
import { useLanguage } from '../../contexts/LanguageContext';

export function LanguageDebug() {
	const { language, t, setLanguage } = useLanguage();

	return (
		<div className="fixed bottom-4 right-4 z-[9999] bg-black/90 text-white p-3 rounded-lg text-xs font-mono">
			<div>Language: {language}</div>
			<div>Test: {t('Services')}</div>
			<button
				onClick={() => setLanguage(language === 'EN' ? 'AM' : 'EN')}
				className="mt-2 px-2 py-1 bg-blue-500 rounded">
				Toggle
			</button>
		</div>
	);
}
