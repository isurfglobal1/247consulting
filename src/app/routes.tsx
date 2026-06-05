import { createBrowserRouter } from 'react-router';

import { About } from './About';
import { Careers } from './Careers';
import { Layout } from './components/Layout';
import { Contact } from './Contact';
import { ErrorPage } from './ErrorPage';
import { Home } from './Home';
import { JobDetails } from './JobDetails';
import { NotFound } from './NotFound';
import { ServiceDetail } from './ServiceDetail';
import { Services } from './Services';

export const router = createBrowserRouter([
	{
		path: '/',
		Component: Layout,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, Component: Home },
			{ path: '/about', Component: About },
			{ path: '/services', Component: Services },
			{ path: '/services/:id', Component: ServiceDetail },
			{ path: '/careers', Component: Careers },
			{ path: '/careers/:id', Component: JobDetails },
			{ path: '/contact', Component: Contact },
			// 404 catch-all route - must be last
			{ path: '*', Component: NotFound },
		],
	},
]);
