import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';

import { LanguageProvider } from '../../contexts/LanguageContext';
// import { LanguageDebug } from '../components/LanguageDebug.tsx';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function Layout() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<LanguageProvider>
			<div className="min-h-screen flex flex-col bg-white">
				<Navbar />
				<main className="flex-grow w-full">
					<Outlet />
				</main>
				<Footer />
				{/* <LanguageDebug /> */}
			</div>
		</LanguageProvider>
	);
}
