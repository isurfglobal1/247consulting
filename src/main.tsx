import './styles/index.css';

import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import App from './app/App.tsx';
import { LanguageProvider } from './contexts/LanguageContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<LanguageProvider>
			<App />
		</LanguageProvider>
	</React.StrictMode>
);
