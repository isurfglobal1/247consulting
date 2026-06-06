import './styles/index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app/App.tsx';
import { LanguageProvider } from './app/contexts/LanguageContext.tsx';

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<LanguageProvider>
			<App />
		</LanguageProvider>
	</React.StrictMode>
);
