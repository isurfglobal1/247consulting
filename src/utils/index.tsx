// Company Information
export const companyInfo = {
	name: '247HR Consulting PLC',
	shortName: '247HR',
	logoText: '24',
	phone: '+251 98 730 3743',
	email: 'executive@247hr.com',
	address: {
		full: 'Addis Ababa, Bole Sub City, Woreda 03',
		city: 'Addis Ababa',
		subCity: 'Bole Sub City',
		woreda: 'Woreda 03',
		country: 'Ethiopia',
	},
	socialLinks: {
		linkedin: 'https://linkedin.com/company/247hr',
		twitter: 'https://twitter.com/247hr',
		mail: 'mailto:executive@247hr.com',
	},
	legal: {
		privacyProtocol: '/privacy',
		termsOfService: '/terms',
		cookieArchitecture: '/cookies',
	},
};

// Navigation Links
export const navLinks = {
	intelligence: [
		{ name: 'About Board', path: '/about' },
		{ name: 'Leadership', path: '/about#leadership' },
		{ name: 'Global Network', path: '/about#network' },
		{ name: 'ESG Impact', path: '/about#esg' },
	],
	infrastructure: [
		{ name: 'Executive Search', path: '/services' },
		{ name: 'Workforce Operations', path: '/services' },
		{ name: 'Talent Analytics', path: '/services' },
		{ name: 'Risk & Compliance', path: '/services' },
	],
	network: [
		{ name: 'Open Requisitions', path: '/careers' },
		{ name: 'Life at 247HR', path: '/careers#life' },
		{ name: 'Global Locations', path: '/careers#locations' },
		{ name: 'Press & Media', path: '/careers#press' },
	],
};

// Social Media Icons Data
export const socialIcons = [
	{ name: 'LinkedIn', icon: 'Linkedin', url: companyInfo.socialLinks.linkedin },
	{ name: 'Twitter', icon: 'Twitter', url: companyInfo.socialLinks.twitter },
	{ name: 'Mail', icon: 'Mail', url: companyInfo.socialLinks.mail },
];
