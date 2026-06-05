import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export type Language = 'EN' | 'AM';

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const EN: Record<string, string> = {
	// Navigation
	'Services': 'Services',
	'Careers': 'Careers',
	'About': 'About',
	'Contact': 'Contact',
	'Explore': 'Explore',
	'View All': 'View All',
	'Get Started': 'Get Started',

	// Hero Section
	'Enterprise HR Infrastructure': 'Enterprise HR Infrastructure',
	"Building Africa's": "Building Africa's",
	'Next Workforce': 'Next Workforce',
	'Infrastructure.': 'Infrastructure.',
	'Modern Workforce Solutions for High-Growth Enterprises. 247HR powers the workforce infrastructure behind modern businesses.':
		'Modern Workforce Solutions for High-Growth Enterprises. 247HR powers the workforce infrastructure behind modern businesses.',
	'Explore Services': 'Explore Services',

	// Widget texts
	'Hayle Calden': 'Hayle Calden',
	'HR Director': 'HR Director',
	'Salary': 'Salary',
	'Base': 'Base',
	'Bonus': 'Bonus',
	'Recent Payroll': 'Recent Payroll',
	'Sarah Oken': 'Sarah Oken',
	'James Carter': 'James Carter',
	'Helen Davies': 'Helen Davies',
	'Design': 'Design',
	'Engineering': 'Engineering',
	'Marketing': 'Marketing',

	// Metrics Section
	'Workforce Scalability': 'Workforce Scalability',
	'Navigate complex African labor frameworks with dynamically updated legal intelligence and automated regulatory reporting.':
		'Navigate complex African labor frameworks with dynamically updated legal intelligence and automated regulatory reporting.',
	'HR Automation': 'HR Automation',
	'Encrypted, on-continent data localization ensuring absolute compliance with regional data protection directives.':
		'Encrypted, on-continent data localization ensuring absolute compliance with regional data protection directives.',
	'Compliance Systems': 'Compliance Systems',
	'Transform raw continental workforce data into actionable, board-level strategic insights and predictive modeling.':
		'Transform raw continental workforce data into actionable, board-level strategic insights and predictive modeling.',
	'Architecting the future of': 'Architecting the future of',
	'African enterprise': 'African enterprise',
	'workforce management.': 'workforce management.',

	// Services Section
	'Payroll': 'Payroll',
	'Outsourcing': 'Outsourcing',
	'Unify your entire African workforce under a single financial architecture. Automate multi-currency disbursements, localized tax withholdings, and statutory deductions with zero operational friction.':
		'Unify your entire African workforce under a single financial architecture. Automate multi-currency disbursements, localized tax withholdings, and statutory deductions with zero operational friction.',
	'Explore Payroll Infrastructure': 'Explore Payroll Infrastructure',
	'Recruitment': 'Recruitment',
	'Staffing': 'Staffing',
	'Deploy advanced operational frameworks to map capabilities, track executive KPIs, and automate complex onboarding procedures across multiple subsidiaries and time zones.':
		'Deploy advanced operational frameworks to map capabilities, track executive KPIs, and automate complex onboarding procedures across multiple subsidiaries and time zones.',
	'Predictive modeling': 'Predictive modeling',
	'Automated workflows': 'Automated workflows',
	'HR': 'HR',
	'Built for the demands of high-growth African enterprises. Our infrastructure provides the stability and robust API ecosystem required for rapid market penetration.':
		'Built for the demands of high-growth African enterprises. Our infrastructure provides the stability and robust API ecosystem required for rapid market penetration.',
	'Initiate Deployment': 'Initiate Deployment',
	'Marley Aminoff': 'Marley Aminoff',
	'Compliance Director': 'Compliance Director',
	'Active Jurisdictions:': 'Active Jurisdictions:',
	'Compliance Audits:': 'Compliance Audits:',
	'Total Regional Disbursed': 'Total Regional Disbursed',

	// Additional Services Section Items
	'Executive Dashboard': 'Executive Dashboard',
	'Accra Hub': 'Accra Hub',
	'Nairobi Hub': 'Nairobi Hub',
	'Operational Efficiency': 'Operational Efficiency',
	'Capital Disbursement': 'Capital Disbursement',

	'Trusted by': 'Trusted by',
	'Continental Leaders': 'Continental Leaders',
	'"The structural elegance of this platform completely transformed our West African operations. It is the absolute gold standard for enterprise workforce management."':
		'"The structural elegance of this platform completely transformed our West African operations. It is the absolute gold standard for enterprise workforce management."',
	'Amina Diop': 'Amina Diop',
	'Chief Operations Officer': 'Chief Operations Officer',
	'"Finally, a solution that understands the nuance of pan-African compliance. The predictive analytics alone have optimized our continental labor structuring significantly."':
		'"Finally, a solution that understands the nuance of pan-African compliance. The predictive analytics alone have optimized our continental labor structuring significantly."',
	'Kwame Mensah': 'Kwame Mensah',
	'VP of Strategy': 'VP of Strategy',
	'"Deploying this infrastructure was a turning point. The robust API and seamless multi-country payroll features provide stability we couldnt find elsewhere."':
		'"Deploying this infrastructure was a turning point. The robust API and seamless multi-country payroll features provide stability we couldnt find elsewhere."',
	'Sarah Ndiaye': 'Sarah Ndiaye',
	'Head of Architecture': 'Head of Architecture',

	'Command your workforce with unparalleled precision.': 'Command your workforce with unparalleled precision.',

	'THE APEX': 'THE APEX',
	'OF ENTERPRISE HR.': 'OF ENTERPRISE HR.',
	'Initiate Dialogue': 'Initiate Dialogue',
	'Sign up for exclusive intelligence on pan-African workforce architecture.': 'Sign up for exclusive intelligence on pan-African workforce architecture.',
	'Executive Email': 'Executive Email',
	'Global Headquarters: Nairobi, Kenya.': 'Global Headquarters: Nairobi, Kenya.',
	'Deploying elite workforce infrastructure across emerging enterprise markets.': 'Deploying elite workforce infrastructure across emerging enterprise markets.',
	'Intelligence': 'Intelligence',
	'About Board': 'About Board',
	'Leadership': 'Leadership',
	'Global Network': 'Global Network',
	'ESG Impact': 'ESG Impact',
	'Infrastructure': 'Infrastructure',
	'Workforce Operations': 'Workforce Operations',
	'Talent Analytics': 'Talent Analytics',
	'Risk & Compliance': 'Risk & Compliance',
	'Network': 'Network',
	'Open Requisitions': 'Open Requisitions',
	'Life at 247HR': 'Life at 247HR',
	'Global Locations': 'Global Locations',
	'Press & Media': 'Press & Media',
	'© 2026 247HR Consulting PLC.': '© 2026 247HR Consulting PLC.',
	'Privacy Protocol': 'Privacy Protocol',
	'Terms of Service': 'Terms of Service',
	'Cookie Architecture': 'Cookie Architecture',
	'Executive Search': 'Executive Search',

	'The Future Operating System': 'The Future Operating System',
	'Powering the': 'Powering the',
	'Workforce Behind': 'Workforce Behind',
	"Africa's Leading Enterprises": "Africa's Leading Enterprises",
	'We are the operational backbone of modern workforce ecosystems, architecting scalable human capital infrastructure for rapid market penetration.':
		'We are the operational backbone of modern workforce ecosystems, architecting scalable human capital infrastructure for rapid market penetration.',
	'Work With Us': 'Work With Us',
	'Operational Velocity': 'Operational Velocity',
	'Active Deployments': 'Active Deployments',
	'14 Jurisdictions': '14 Jurisdictions',

	'Architecting the': 'Architecting the',
	'Continental Engine': 'Continental Engine',
	'The Founding Vision': 'The Founding Vision',
	'Established with a singular directive: to remove the friction from pan-African enterprise expansion. We saw high-growth companies bottlenecked not by market demand, but by fragmented human capital infrastructure.':
		'Established with a singular directive: to remove the friction from pan-African enterprise expansion. We saw high-growth companies bottlenecked not by market demand, but by fragmented human capital infrastructure.',
	'Operational Growth': 'Operational Growth',
	'What began as a premium recruitment consultancy has aggressively scaled into a comprehensive workforce operating system. We now engineer everything from multi-jurisdictional payroll to executive talent orchestration.':
		'What began as a premium recruitment consultancy has aggressively scaled into a comprehensive workforce operating system. We now engineer everything from multi-jurisdictional payroll to executive talent orchestration.',
	'"Our mandate isnt just staffing. Its building the resilient operational architecture that allows businesses to scale fearlessly."':
		'"Our mandate isnt just staffing. Its building the resilient operational architecture that allows businesses to scale fearlessly."',

	'Our Mission': 'Our Mission',
	'To engineer the most': 'To engineer the most',
	'resilient': 'resilient',
	"human capital systems for Africa's high-growth enterprises.": "human capital systems for Africa's high-growth enterprises.",
	'We deploy world-class workforce infrastructure that eliminates operational friction, ensuring our clients can focus strictly on market domination while we handle the complexity of talent, compliance, and scale.':
		'We deploy world-class workforce infrastructure that eliminates operational friction, ensuring our clients can focus strictly on market domination while we handle the complexity of talent, compliance, and scale.',
	'Our Vision': 'Our Vision',
	'To become the': 'To become the',
	'default operating system': 'default operating system',
	'for continental workforce management.': 'for continental workforce management.',
	'We envision a borderless corporate landscape where deploying talent across African jurisdictions is as seamless, transparent, and secure as processing a digital payment.':
		'We envision a borderless corporate landscape where deploying talent across African jurisdictions is as seamless, transparent, and secure as processing a digital payment.',

	'The Code We': 'The Code We',
	'Operate By': 'Operate By',
	'Our core values arent posters on a wall; they are the strict operational protocols that govern every deployment, recruitment, and strategy we execute.':
		'Our core values arent posters on a wall; they are the strict operational protocols that govern every deployment, recruitment, and strategy we execute.',
	'Operational Excellence': 'Operational Excellence',
	'Precision in every process, from compliance to payroll execution.': 'Precision in every process, from compliance to payroll execution.',
	'Talent Intelligence': 'Talent Intelligence',
	'Data-driven recruitment replacing guesswork with strategic acquisition.': 'Data-driven recruitment replacing guesswork with strategic acquisition.',
	'Speed': 'Speed',
	'Unmatched velocity in deployment and operational scaling.': 'Unmatched velocity in deployment and operational scaling.',
	'Enterprise Reliability': 'Enterprise Reliability',
	'A robust infrastructure that never fails when it matters most.': 'A robust infrastructure that never fails when it matters most.',
	'Workforce Innovation': 'Workforce Innovation',
	'Constantly pushing the boundaries of human capital technology.': 'Constantly pushing the boundaries of human capital technology.',
	'Integrity': 'Integrity',
	'Absolute transparency and uncompromising ethical standards.': 'Absolute transparency and uncompromising ethical standards.',

	'Command &': 'Command &',
	'Control': 'Control',
	'A leadership team forged in the complexities of continental expansion. We bring decades of multi-jurisdictional enterprise experience.':
		'A leadership team forged in the complexities of continental expansion. We bring decades of multi-jurisdictional enterprise experience.',
	'View Full Leadership': 'View Full Leadership',
	'David O. Alabi': 'David O. Alabi',
	'Chief Executive Officer': 'Chief Executive Officer',
	'Aisha N. Mensah': 'Aisha N. Mensah',
	'Head of Talent Intelligence': 'Head of Talent Intelligence',
	'Samuel K. Tesfaye': 'Samuel K. Tesfaye',
	'VP of Enterprise Operations': 'VP of Enterprise Operations',

	'The Scale of': 'The Scale of',
	'Our Impact': 'Our Impact',
	'We do not deal in assumptions. We deal in measurable, scalable enterprise performance. Our infrastructure supports the workforce demands of the continent’s most ambitious companies.':
		'We do not deal in assumptions. We deal in measurable, scalable enterprise performance. Our infrastructure supports the workforce demands of the continent’s most ambitious companies.',
	'Enterprise Clients': 'Enterprise Clients',
	'across 14 active jurisdictions': 'across 14 active jurisdictions',
	'Workforce Placements': 'Workforce Placements',
	'talent orchestrated annually': 'talent orchestrated annually',
	'Payroll Operations': 'Payroll Operations',
	'processed through our architecture': 'processed through our architecture',
	'Talent Success Rate': 'Talent Success Rate',
	'executive & technical retention': 'executive & technical retention',

	'A Culture of': 'A Culture of',
	'Relentless Execution': 'Relentless Execution',
	'Behind our technology lies a team of operators who believe that human capital is the ultimate competitive advantage.':
		'Behind our technology lies a team of operators who believe that human capital is the ultimate competitive advantage.',
	'"We dont just hire talent. We architect teams."': '"We dont just hire talent. We architect teams."',
	'Head of Internal Operations': 'Head of Internal Operations',

	'Why Leading Enterprises': 'Why Leading Enterprises',
	'Trust': 'Trust',
	'Operational Guarantees': 'Operational Guarantees',
	'SLA-backed performance on every deployment.': 'SLA-backed performance on every deployment.',
	'Recruitment Intelligence': 'Recruitment Intelligence',
	'Predictive modeling for talent acquisition.': 'Predictive modeling for talent acquisition.',
	'Enterprise Scalability': 'Enterprise Scalability',
	'Infrastructure built to handle multi-country hypergrowth.': 'Infrastructure built to handle multi-country hypergrowth.',

	'The Next Step': 'The Next Step',
	'Build the Future of': 'Build the Future of',
	'With 247HR': 'With 247HR',
	'Start Your Transformation': 'Start Your Transformation',
	'Speak to Leadership': 'Speak to Leadership',

	"Let's Build": "Let's Build",
	'Smarter Workforce Systems': 'Smarter Workforce Systems',
	'Together.': 'Together.',
	'Connect with the future of enterprise workforce solutions. We dont do standard support—we provide elite operational consultation.':
		'Connect with the future of enterprise workforce solutions. We dont do standard support—we provide elite operational consultation.',
	'Full Name': 'Full Name',
	'Company Name': 'Company Name',
	'Email Address': 'Email Address',
	'Phone Number': 'Phone Number',
	'Service Interest': 'Service Interest',
	'Message': 'Message',
	'Transmit Protocol': 'Transmit Protocol',
	'Global HQ': 'Global HQ',
	'The Exchange Tower,': 'The Exchange Tower,',
	'Westlands, Nairobi,': 'Westlands, Nairobi,',
	'Kenya': 'Kenya',
	'Direct Line': 'Direct Line',
	'Operations Center': 'Operations Center',
	'Global Coverage': 'Global Coverage',
	'24/7 Enterprise Support': '24/7 Enterprise Support',
	'GMT+3 Primary Operations': 'GMT+3 Primary Operations',
	'Executive Calendar Open': 'Executive Calendar Open',
	'Start Building The Future': 'Start Building The Future',
	'Of Workforce Operations': 'Of Workforce Operations',
	'Schedule Strategy Session': 'Schedule Strategy Session',

	'Talent Ecosystem 2026': 'Talent Ecosystem 2026',
	'BUILD THE': 'BUILD THE',
	'FUTURE OF WORK': 'FUTURE OF WORK',
	'WITH US.': 'WITH US.',
	'Join the workforce infrastructure powering modern Africa. An elite environment engineered for ambitious thinkers, creative operators, and executive leaders.':
		'Join the workforce infrastructure powering modern Africa. An elite environment engineered for ambitious thinkers, creative operators, and executive leaders.',
	'Scroll': 'Scroll',

	'Culture // 01': 'Culture // 01',
	"WE DON'T DO": "WE DON'T DO",
	'ORDINARY.': 'ORDINARY.',
	'Our culture is built for the obsessed. We believe that an elite workforce requires an environment that challenges, elevates, and rigorously supports its people. Here, operational excellence is the baseline.':
		'Our culture is built for the obsessed. We believe that an elite workforce requires an environment that challenges, elevates, and rigorously supports its people. Here, operational excellence is the baseline.',
	'Radical Accountability': 'Radical Accountability',
	'Ownership at every layer of the matrix.': 'Ownership at every layer of the matrix.',
	'Creative Operations': 'Creative Operations',
	'Solving rigid problems with fluid thinking.': 'Solving rigid problems with fluid thinking.',
	'The most magnetic thing a company can offer is the standard it refuses to compromise on.':
		'The most magnetic thing a company can offer is the standard it refuses to compromise on.',
	'CEO Directive': 'CEO Directive',

	'STEP INTO': 'STEP INTO',
	'THE ARENA.': 'THE ARENA.',
	'Location': 'Location',
	'Type': 'Type',

	'Executive Perspectives // 03': 'Executive Perspectives // 03',
	'"We dont manage processes. We engineer structural momentum for the entire continent."':
		'"We dont manage processes. We engineer structural momentum for the entire continent."',
	'Amara K.': 'Amara K.',
	'Head of Talent Systems': 'Head of Talent Systems',

	'THE': 'THE',
	'STANDARDS.': 'STANDARDS.',
	'Executive Trajectory': 'Executive Trajectory',
	'Rigorous mentorship and unfiltered exposure to multi-national operations, accelerating your career by years.':
		'Rigorous mentorship and unfiltered exposure to multi-national operations, accelerating your career by years.',
	'Sovereign Flexibility': 'Sovereign Flexibility',
	'We measure impact, not presence. Fluid remote frameworks structured around pure operational output.':
		'We measure impact, not presence. Fluid remote frameworks structured around pure operational output.',
	'Cognitive Capital': 'Cognitive Capital',
	'Uncapped budgets for continued learning, certifications, and global enterprise conferences.':
		'Uncapped budgets for continued learning, certifications, and global enterprise conferences.',
	'Holistic Architecture': 'Holistic Architecture',
	'Premium healthcare scaling to your family, comprehensive wellness stipends, and mandated reset periods.':
		'Premium healthcare scaling to your family, comprehensive wellness stipends, and mandated reset periods.',

	'The Path In.': 'The Path In.',
	'Application': 'Application',
	'Screening': 'Screening',
	'Interview': 'Interview',
	'Assessment': 'Assessment',
	'Offer': 'Offer',
	'Onboarding': 'Onboarding',

	'Operational Ecosystem // 05': 'Operational Ecosystem // 05',
	'THE ARCHITECTURE': 'THE ARCHITECTURE',
	'OF AMBITION.': 'OF AMBITION.',
	'HQ / Collaborative Core': 'HQ / Collaborative Core',
	'Executive Lounge': 'Executive Lounge',
	'Spaces designed not just to house personnel, but to physically catalyze elite performance. The 247HR workspace acts as a luxury asset, fostering high-level focus and collaborative synthesis.':
		'Spaces designed not just to house personnel, but to physically catalyze elite performance. The 247HR workspace acts as a luxury asset, fostering high-level focus and collaborative synthesis.',

	'JOIN THE WORKFORCE BUILDING THE FUTURE OF': 'JOIN THE WORKFORCE BUILDING THE FUTURE OF',
	'ENTERPRISE OPERATIONS.': 'ENTERPRISE OPERATIONS.',
	'Initiate Application': 'Initiate Application',

	'We are committed to delivering reliable, professional, and people-focused HR solutions tailored to the unique needs of each organization. Our experienced team works closely with clients to streamline HR processes, ensure compliance with employment regulations, and build productive, high-performing workforces. We prioritize integrity, confidentiality, efficiency, and long-term client success.':
		'We are committed to delivering reliable, professional, and people-focused HR solutions tailored to the unique needs of each organization. Our experienced team works closely with clients to streamline HR processes, ensure compliance with employment regulations, and build productive, high-performing workforces. We prioritize integrity, confidentiality, efficiency, and long-term client success.',

	'System': 'System',
	'SYS.OP.247 // ACTIVE': 'SYS.OP.247 // ACTIVE',
	'Scope': 'Scope',
	'Enterprise Workforce Operations': 'Enterprise Workforce Operations',
	'WORKFORCE': 'WORKFORCE',
	'ARCHITECTURE': 'ARCHITECTURE',
	'We do not provide standard HR services. We engineer, deploy, and manage the human capital infrastructure required for high-growth enterprises to scale without friction.':
		'We do not provide standard HR services. We engineer, deploy, and manage the human capital infrastructure required for high-growth enterprises to scale without friction.',
	'Deploy Systems': 'Deploy Systems',

	'The Operational': 'The Operational',
	'Ecosystem': 'Ecosystem',
	'Interact with the index below to explore our core enterprise deployments.': 'Interact with the index below to explore our core enterprise deployments.',
	'Human Resource Outsourcing (HRO)': 'Human Resource Outsourcing (HRO)',
	'Comprehensive offloading of human capital management, ensuring complete enterprise compliance and operational efficiency across all business functions.':
		'Comprehensive offloading of human capital management, ensuring complete enterprise compliance and operational efficiency across all business functions.',
	'Deploy HR Framework': 'Deploy HR Framework',
	'Recruitment and Talent Acquisition': 'Recruitment and Talent Acquisition',
	'Precision executive search and strategic talent acquisition. We utilize algorithmic market analysis for exact target identification and candidate matching.':
		'Precision executive search and strategic talent acquisition. We utilize algorithmic market analysis for exact target identification and candidate matching.',
	'Initiate Talent Search': 'Initiate Talent Search',
	'Payroll Management Services': 'Payroll Management Services',
	'Zero-error multi-currency payroll execution. A seamless financial shield guaranteeing absolute reliability, tax compliance, and timely employee compensation.':
		'Zero-error multi-currency payroll execution. A seamless financial shield guaranteeing absolute reliability, tax compliance, and timely employee compensation.',
	'Execute Payroll Integration': 'Execute Payroll Integration',
	'Employee Training and Development': 'Employee Training and Development',
	'Premium learning frameworks engineered for supreme human performance. Structured programs that enhance skills, boost productivity, and drive corporate innovation.':
		'Premium learning frameworks engineered for supreme human performance. Structured programs that enhance skills, boost productivity, and drive corporate innovation.',
	'Initiate Training Engagement': 'Initiate Training Engagement',
	'Performance Management Support': 'Performance Management Support',
	'Strategic frameworks for tracking, evaluating, and optimizing employee performance. Data-driven systems that align workforce output with business objectives.':
		'Strategic frameworks for tracking, evaluating, and optimizing employee performance. Data-driven systems that align workforce output with business objectives.',
	'Optimize Performance Systems': 'Optimize Performance Systems',
	'HR Policy Development and Compliance': 'HR Policy Development and Compliance',
	'Expert guidance on labor laws, regulatory frameworks, and corporate policies. Ensuring your organization operates within legal boundaries while maintaining best practices.':
		'Expert guidance on labor laws, regulatory frameworks, and corporate policies. Ensuring your organization operates within legal boundaries while maintaining best practices.',
	'Establish Compliance Framework': 'Establish Compliance Framework',
	'Workforce Planning and Talent Management': 'Workforce Planning and Talent Management',
	'Strategic workforce modeling and talent pipeline development. We help you forecast needs, identify skill gaps, and build sustainable talent ecosystems.':
		'Strategic workforce modeling and talent pipeline development. We help you forecast needs, identify skill gaps, and build sustainable talent ecosystems.',
	'Plan Workforce Strategy': 'Plan Workforce Strategy',
	'Employee Relations and Engagement': 'Employee Relations and Engagement',
	'Creating positive workplace cultures that drive retention and productivity. Proactive conflict resolution, engagement strategies, and employee wellness programs.':
		'Creating positive workplace cultures that drive retention and productivity. Proactive conflict resolution, engagement strategies, and employee wellness programs.',
	'Enhance Employee Engagement': 'Enhance Employee Engagement',
	'HR Advisory and Consulting Services': 'HR Advisory and Consulting Services',
	'Strategic HR consulting for organizational transformation. Expert guidance on restructuring, change management, and human capital optimization.':
		'Strategic HR consulting for organizational transformation. Expert guidance on restructuring, change management, and human capital optimization.',
	'Consult Our Experts': 'Consult Our Experts',
	'Staffing and Workforce Solutions': 'Staffing and Workforce Solutions',
	'Flexible staffing models including temporary, contract, and permanent placements. Rapid deployment of qualified professionals across all industries.':
		'Flexible staffing models including temporary, contract, and permanent placements. Rapid deployment of qualified professionals across all industries.',
	'Deploy Workforce Solutions': 'Deploy Workforce Solutions',
	'Visual Data Feed': 'Visual Data Feed',

	'System Advantages': 'System Advantages',
	'Operational Scalability': 'Operational Scalability',
	'Our systems expand dynamically. Whether deploying 50 executives or 5,000 field agents, infrastructure adjusts to volume without structural breakage.':
		'Our systems expand dynamically. Whether deploying 50 executives or 5,000 field agents, infrastructure adjusts to volume without structural breakage.',
	'Compliance Infrastructure': 'Compliance Infrastructure',
	'Navigating African labor laws requires precision. We provide a legal and financial shield guaranteeing 100% compliance across all active jurisdictions.':
		'Navigating African labor laws requires precision. We provide a legal and financial shield guaranteeing 100% compliance across all active jurisdictions.',
	'AI-Assisted Intelligence': 'AI-Assisted Intelligence',
	'Predictive algorithms map talent markets, accelerating recruitment velocity while radically improving retention probability across the board.':
		'Predictive algorithms map talent markets, accelerating recruitment velocity while radically improving retention probability across the board.',

	'Operational Sectors': 'Operational Sectors',
	'Dominated': 'Dominated',
	'Cross-industry expertise powering the continents most demanding corporate sectors.':
		'Cross-industry expertise powering the continents most demanding corporate sectors.',
	'Banking & Finance': 'Banking & Finance',
	'Technology': 'Technology',
	'Retail & Logistics': 'Retail & Logistics',
	'Manufacturing': 'Manufacturing',
	'Active Deployment': 'Active Deployment',
	'Telecom': 'Telecom',
	'Healthcare': 'Healthcare',
	'Government': 'Government',
	'Oil & Gas': 'Oil & Gas',

	'Execution Protocol': 'Execution Protocol',
	'The Operational Flow': 'The Operational Flow',
	'Architecture': 'Architecture',
	'Consultation & Architecture': 'Consultation & Architecture',
	'Mapping the operational gaps and designing the human capital infrastructure.': 'Mapping the operational gaps and designing the human capital infrastructure.',
	'Talent Mapping': 'Talent Mapping',
	'Algorithmic market analysis and executive target identification.': 'Algorithmic market analysis and executive target identification.',
	'Verification Protocol': 'Verification Protocol',
	'Rigorous legal, credential, and behavioral vetting processes.': 'Rigorous legal, credential, and behavioral vetting processes.',
	'System Deployment': 'System Deployment',
	'Seamless integration of personnel, payroll, and compliance systems.': 'Seamless integration of personnel, payroll, and compliance systems.',
	'Workforce Optimization': 'Workforce Optimization',
	'Continuous performance analytics and structural scaling.': 'Continuous performance analytics and structural scaling.',
	'Trust Measured': 'Trust Measured',
	'In Scale': 'In Scale',
	'True operational power is validated entirely by scale and precision. We support the human infrastructure behind the continents most demanding corporate entities.':
		'True operational power is validated entirely by scale and precision. We support the human infrastructure behind the continents most demanding corporate entities.',
	'Payroll Operations Processed': 'Payroll Operations Processed',
	'Countries Served': 'Countries Served',
	'Talent Retention Rate': 'Talent Retention Rate',
	'Avg. Executive Hiring Speed': 'Avg. Executive Hiring Speed',

	'Final Step': 'Final Step',
	'Build Smarter': 'Build Smarter',
	'Operations': 'Operations',

	'Global Headquarters: ': 'Global Headquarters: ',
	'Tel: ': 'Tel: ',

	'Navigation Error': 'Navigation Error',
	'Page Not Found': 'Page Not Found',
	'The page you are looking for does not exist or may have been moved. Please check the URL or return to the homepage.':
		'The page you are looking for does not exist or may have been moved. Please check the URL or return to the homepage.',
	'Back to Home': 'Back to Home',
	'Go Back': 'Go Back',
	'Quick Navigation': 'Quick Navigation',
	'Need help?': 'Need help?',
	'Contact Support': 'Contact Support',
	'All rights reserved.': 'All rights reserved.',

	'Server Error': 'Server Error',
	'Application Error': 'Application Error',
	'Connection Error': 'Connection Error',
	'Error Occurred': 'Error Occurred',
	'Something went wrong on our end. Please try again later.': 'Something went wrong on our end. Please try again later.',
	'An unexpected error occurred. Our team has been notified.': 'An unexpected error occurred. Our team has been notified.',
	'No Internet Connection': 'No Internet Connection',
	'Please check your network connection and try again.': 'Please check your network connection and try again.',
	'Try Again': 'Try Again',
	'Need assistance?': 'Need assistance?',
	'Contact our support team': 'Contact our support team',
};

const AM: Record<string, string> = {
	// Navigation
	'Services': 'አገልግሎቶች',
	'Careers': 'ሥራዎች',
	'About': 'ስለ እኛ',
	'Contact': 'አግኙን',
	'Explore': 'ያስሱ',
	'View All': 'ሁሉንም ይመልከቱ',
	'Get Started': 'ጀምር',

	// Hero Section
	'Enterprise HR Infrastructure': 'የድርጅት ሰው ኃይል መሠረተ ልማት',
	"Building Africa's": 'አፍሪካን መገንባት',
	'Next Workforce': 'ቀጣይ የሰው ኃይል',
	'Infrastructure.': 'መሠረተ ልማት።',
	'Modern Workforce Solutions for High-Growth Enterprises. 247HR powers the workforce infrastructure behind modern businesses.':
		'ለከፍተኛ እድገት ድርጅቶች ዘመናዊ የሰው ኃይል መፍትሄዎች። 247HR ከዘመናዊ ንግዶች ጀርባ ያለውን የሰው ኃይል መሠረተ ልማት ያጎለብታል።',
	'Explore Services': 'አገልግሎቶችን ያስሱ',

	// Widget texts
	'Hayle Calden': 'ሃይሌ ካልደን',
	'HR Director': 'የሰው ኃይል ዳይሬክተር',
	'Salary': 'ደሞዝ',
	'Base': 'መሠረት',
	'Bonus': 'ጉርሻ',
	'Recent Payroll': 'የቅርብ ጊዜ ደሞዝ',
	'Sarah Oken': 'ሳራ ኦከን',
	'James Carter': 'ጄምስ ካርተር',
	'Helen Davies': 'ሄለን ዴቪስ',
	'Design': 'ዲዛይን',
	'Engineering': 'ኢንጂነሪንግ',
	'Marketing': 'ግብይት',

	// Metrics Section
	'Workforce Scalability': 'የሰው ኃይል መለካት ችሎታ',
	'Navigate complex African labor frameworks with dynamically updated legal intelligence and automated regulatory reporting.':
		'ውስብስብ የአፍሪካ የሰው ኃይል ማዕቀፎችን በተለዋዋጭ የዘመነ የህግ እውቀት እና አውቶማቲክ የቁጥጥር ሪፖርት አሰራር ያስሱ።',
	'HR Automation': 'የሰው ኃይል አውቶሜሽን',
	'Encrypted, on-continent data localization ensuring absolute compliance with regional data protection directives.':
		'የክልል የውሂብ ጥበቃ መመሪያዎችን ሙሉ በሙሉ ማክበርን የሚያረጋግጥ የተመሰጠረ፣ አህጉር ላይ የውሂብ አካባቢያዊነት።',
	'Compliance Systems': 'ተገዢነት ስርዓቶች',
	'Transform raw continental workforce data into actionable, board-level strategic insights and predictive modeling.':
		'ጥሬ አህጉር አቀፍ የሰው ኃይል መረጃን ወደ ተግባራዊ፣ የቦርድ ደረጃ ስትራቴጂካዊ ግንዛቤዎች እና ትንበያ ሞዴሊንግ ይቀይሩ።',
	'Architecting the future of': 'የወደፊቱን የ',
	'African enterprise': 'አፍሪካ ኢንተርፕራይዝ',
	'workforce management.': 'የሰው ኃይል አስተዳደር በመቅረጽ ላይ።',

	// Services Section
	'Payroll': 'የደሞዝ ክፍያ',
	'Outsourcing': 'የውጭ አገልግሎት',
	'Unify your entire African workforce under a single financial architecture. Automate multi-currency disbursements, localized tax withholdings, and statutory deductions with zero operational friction.':
		'መላውን የአፍሪካ የሰው ኃይል በአንድ የፋይናንስ መዋቅር ስር ያዋህዱ። ባለብዙ ምንዛሪ ክፍያዎችን፣ የአካባቢ ግብር ቅነሳዎችን እና የህግ ተቀናሾችን ያለምንም የስራ ግጭት በራስ ሰር ያድርጉ።',
	'Explore Payroll Infrastructure': 'የደሞዝ ክፍያ መሠረተ ልማትን ያስሱ',
	'Recruitment': 'ምልመላ',
	'Staffing': 'ሰራተኛ ማቅረብ',
	'Deploy advanced operational frameworks to map capabilities, track executive KPIs, and automate complex onboarding procedures across multiple subsidiaries and time zones.':
		'አቅሞችን ለመቅረጽ፣ የስራ አስፈፃሚ KPIs ለመከታተል እና ውስብስብ የማስጀመሪያ ሂደቶችን በበርካታ ቅርንጫፎች እና የሰዓት ሰቅ ዞኖች ላይ ለማዘጋጀት የላቀ የስራ ማዕቀፎችን ያሰማሩ።',
	'Predictive modeling': 'ትንበያ ሞዴሊንግ',
	'Automated workflows': 'አውቶማቲክ የስራ ፍሰቶች',
	'HR': 'የሰው ኃይል',
	'Built for the demands of high-growth African enterprises. Our infrastructure provides the stability and robust API ecosystem required for rapid market penetration.':
		'ለከፍተኛ እድገት አፍሪካ ኢንተርፕራይዞች ፍላጎቶች ተገንብቷል። የእኛ መሠረተ ልማት ለፈጣን የገበያ ዘልቆ የሚያስፈልገውን መረጋጋት እና ጠንካራ ኤፒአይ ስነ-ምህዳር ያቀርባል።',
	'Initiate Deployment': 'ማሰማራት ጀምር',
	'Marley Aminoff': 'ማርሊ አሚኖፍ',
	'Compliance Director': 'ተገዢነት ዳይሬክተር',
	'Active Jurisdictions:': 'ንቁ የህግ ክልሎች፦',
	'Compliance Audits:': 'ተገዢነት ኦዲቶች፦',
	'Total Regional Disbursed': 'ጠቅላላ የክልል ክፍያ',

	// Additional Services Section Items
	'Executive Dashboard': 'የስራ አስፈፃሚ ዳሽቦርድ',
	'Accra Hub': 'አክራ ማዕከል',
	'Nairobi Hub': 'ናይሮቢ ማዕከል',
	'Operational Efficiency': 'የስራ ብቃት',
	'Capital Disbursement': 'ካፒታል ክፍያ',

	'Trusted by': 'የታመነ በ',
	'Continental Leaders': 'አህጉር አመራሮች',
	'"The structural elegance of this platform completely transformed our West African operations. It is the absolute gold standard for enterprise workforce management."':
		'"የዚህ መድረክ መዋቅራዊ ውበት የምዕራብ አፍሪካ ስራዎቻችንን ሙሉ በሙሉ ለውጦታል። ለድርጅት የሰው ኃይል አስተዳደር ፍጹም የወርቅ ደረጃ ነው።"',
	'Amina Diop': 'አሚና ዲኦፕ',
	'Chief Operations Officer': 'ዋና ኦፕሬሽን ኦፊሰር',
	'"Finally, a solution that understands the nuance of pan-African compliance. The predictive analytics alone have optimized our continental labor structuring significantly."':
		'"በመጨረሻ፣ የፓን-አፍሪካ ተገዢነት ስሜትን የሚረዳ መፍትሄ። ብቻውን ትንበያ ትንተና የአህጉር የሰው ኃይል መዋቅራችንን በከፍተኛ ደረጃ ማመቻቸት ችሏል።"',
	'Kwame Mensah': 'ክዋሜ ሜንሳህ',
	'VP of Strategy': 'የስትራቴጂ ምክትል ፕሬዝዳንት',
	'"Deploying this infrastructure was a turning point. The robust API and seamless multi-country payroll features provide stability we couldnt find elsewhere."':
		'"ይህን መሠረተ ልማት ማሰማራት መዞሪያ ነጥብ ነበር። ጠንካራው ኤፒአይ እና እንከን የለሽ የባለብዙ ሀገር የደሞዝ ክፍያ ባህሪያት በሌላ ቦታ ማግኘት ያልቻልነውን መረጋጋት ይሰጣሉ።"',
	'Sarah Ndiaye': 'ሳራ ንዲዬ',
	'Head of Architecture': 'የአርክቴክቸር ኃላፊ',

	'Command your workforce with unparalleled precision.': 'የሰው ኃይልዎን በማይመሳሰል ትክክለኛነት ያዘዙ።',

	'THE APEX': 'ከፍተኛው',
	'OF ENTERPRISE HR.': 'የድርጅት ሰው ኃይል።',
	'Initiate Dialogue': 'ውይይት ጀምሩ',
	'Sign up for exclusive intelligence on pan-African workforce architecture.': 'ለፓን-አፍሪካ የሰው ኃይል መዋቅር ልዩ መረጃ ይመዝገቡ።',
	'Executive Email': 'የሥራ አስፈፃሚ ኢሜይል',
	'Global Headquarters: Nairobi, Kenya.': 'ዓለም አቀፍ ዋና መሥሪያ ቤት፦ ናይሮቢ፣ ኬንያ።',
	'Deploying elite workforce infrastructure across emerging enterprise markets.': 'በታዳጊ የድርጅት ገበያዎች ላይ ከፍተኛ የሰው ኃይል መሠረተ ልማት ማሰማራት።',
	'Intelligence': 'እውቀት',
	'About Board': 'ስለ ቦርድ',
	'Leadership': 'አመራር',
	'Global Network': 'ዓለም አቀፍ አውታር',
	'ESG Impact': 'ESG ተጽእኖ',
	'Infrastructure': 'መሠረተ ልማት',
	'Workforce Operations': 'የሰው ኃይል ሥራዎች',
	'Talent Analytics': 'ተሰጥኦ ትንተና',
	'Risk & Compliance': 'አደጋ እና ተገዢነት',
	'Network': 'አውታር',
	'Open Requisitions': 'ክፍት ቦታዎች',
	'Life at 247HR': 'በ247HR ሕይወት',
	'Global Locations': 'ዓለም አቀፍ አድራሻዎች',
	'Press & Media': 'ፕሬስ እና ሚዲያ',
	'© 2026 247HR Consulting PLC.': '© 2026 247HR አማካሪ ኃላፊነቱ የተወሰነ ድርጅት።',
	'Privacy Protocol': 'የግላዊነት ፕሮቶኮል',
	'Terms of Service': 'የአገልግሎት ውሎች',
	'Cookie Architecture': 'ኩኪ መዋቅር',
	'Executive Search': 'ሥራ አስፈፃሚ ፍለጋ',

	'The Future Operating System': 'የወደፊት ኦፕሬቲንግ ሲስተም',
	'Powering the': 'የሚያጎለብተው',
	'Workforce Behind': 'ከኋላ ያለው የሰው ኃይል',
	"Africa's Leading Enterprises": 'የአፍሪካ መሪ ኢንተርፕራይዞች',
	'We are the operational backbone of modern workforce ecosystems, architecting scalable human capital infrastructure for rapid market penetration.':
		'እኛ የዘመናዊ የሰው ኃይል ስነ-ምህዳሮች የስራ ጀርባ ነን፣ ለፈጣን የገበያ ዘልቆ ሊሰፋ የሚችል የሰው ካፒታል መሠረተ ልማት በመቅረጽ ላይ።',
	'Work With Us': 'ከእኛ ጋር ይስሩ',
	'Operational Velocity': 'የስራ ፍጥነት',
	'Active Deployments': 'ንቁ ማሰማሪያዎች',
	'14 Jurisdictions': '14 የህግ ክልሎች',

	'Architecting the': 'በመቅረጽ ላይ',
	'Continental Engine': 'አህጉር አቀፍ ሞተር',
	'The Founding Vision': 'መሠረታዊ ራዕይ',
	'Established with a singular directive: to remove the friction from pan-African enterprise expansion. We saw high-growth companies bottlenecked not by market demand, but by fragmented human capital infrastructure.':
		'በአንድ አቅጣጫ የተቋቋመ፦ የፓን-አፍሪካ ድርጅት መስፋፋትን መሰናክል ለማስወገድ። ከፍተኛ እድገት ያላቸው ኩባንያዎች በገበያ ፍላጎት ሳይሆን በተበታተነ የሰው ካፒታል መሠረተ ልማት ሲተነፍሱ አይተናል።',
	'Operational Growth': 'የስራ እድገት',
	'What began as a premium recruitment consultancy has aggressively scaled into a comprehensive workforce operating system. We now engineer everything from multi-jurisdictional payroll to executive talent orchestration.':
		'በከፍተኛ ደረጃ የምልመላ አማካሪነት የጀመረው ወደ አጠቃላይ የሰው ኃይል ኦፕሬቲንግ ሲስተም በፍጥነት ተስፋፍቷል። አሁን ከባለብዙ የህግ ክልል የደሞዝ ክፍያ እስከ ሥራ አስፈፃሚ ተሰጥኦ ውህደት ድረስ ሁሉንም እንቀርፃለን።',
	'"Our mandate isnt just staffing. Its building the resilient operational architecture that allows businesses to scale fearlessly."':
		'"የእኛ ተልእኮ ሰራተኛ ማቅረብ ብቻ አይደለም። ንግዶች ያለፍርሃት እንዲስፋፉ የሚያስችል ጠንካራ የስራ መዋቅር መገንባት ነው።"',

	'Our Mission': 'ተልእኳችን',
	'To engineer the most': 'በጣም የሚቋቋሙትን መቅረጽ',
	'resilient': 'የሚቋቋሙ',
	"human capital systems for Africa's high-growth enterprises.": 'ለአፍሪካ ከፍተኛ እድገት ድርጅቶች የሰው ካፒታል ሥርዓቶች።',
	'We deploy world-class workforce infrastructure that eliminates operational friction, ensuring our clients can focus strictly on market domination while we handle the complexity of talent, compliance, and scale.':
		'የስራ ግጭትን የሚያስወግድ ዓለም አቀፍ ደረጃ ያለው የሰው ኃይል መሠረተ ልማት እናሰማራለን፣ ይህም ደንበኞቻችን በገበያ በላይነት ላይ ብቻ እንዲያተኩሩ ማረጋገጥ ሲሆን እኛ የተሰጥኦን፣ ተገዢነትን እና መስፋፋትን ውስብስብነት እንይዛለን።',
	'Our Vision': 'ራዕያችን',
	'To become the': 'መሆን',
	'default operating system': 'ነባሪ ኦፕሬቲንግ ሲስተም',
	'for continental workforce management.': 'ለአህጉር አቀፍ የሰው ኃይል አስተዳደር።',
	'We envision a borderless corporate landscape where deploying talent across African jurisdictions is as seamless, transparent, and secure as processing a digital payment.':
		'አህጉር አቀፍ ድንበር አልባ የኮርፖሬት መልክዓ ምድር እንገምታለን፣ በአፍሪካ የህግ ክልሎች ውስጥ ተሰጥኦ ማሰማራት ዲጂታል ክፍያ ማስኬድ እንደሚቻል ሁሉ እንከን የለሽ፣ ግልጽ እና ደህንነቱ የተጠበቀ ነው።',

	'The Code We': 'የምንሰራው ኮድ',
	'Operate By': 'የምንመራው',
	'Our core values arent posters on a wall; they are the strict operational protocols that govern every deployment, recruitment, and strategy we execute.':
		'የእኛ ዋና እሴቶች በግድግዳ ላይ ያሉ ፖስተሮች አይደሉም፤ እነሱ እያንዳንዱን ማሰማሪያ፣ ምልመላ እና ስትራቴጂ የሚመሩ ጥብቅ የስራ ፕሮቶኮሎች ናቸው።',
	'Operational Excellence': 'የስራ ልቀት',
	'Precision in every process, from compliance to payroll execution.': 'በየሂደቱ ውስጥ ትክክለኛነት፣ ከተገዢነት እስከ የደሞዝ ክፍያ አፈጻጸም።',
	'Talent Intelligence': 'ተሰጥኦ እውቀት',
	'Data-driven recruitment replacing guesswork with strategic acquisition.': 'በመረጃ የሚመራ ምልመላ ግምትን በስትራቴጂካዊ ግዢ ይተካል።',
	'Speed': 'ፍጥነት',
	'Unmatched velocity in deployment and operational scaling.': 'በማሰማራት እና በስራ መስፋፋት ላይ ተወዳዳሪ የሌለው ፍጥነት።',
	'Enterprise Reliability': 'የድርጅት አስተማማኝነት',
	'A robust infrastructure that never fails when it matters most.': 'በጣም አስፈላጊ በሆነ ጊዜ ፈጽሞ የማይሳካ ጠንካራ መሠረተ ልማት።',
	'Workforce Innovation': 'የሰው ኃይል ፈጠራ',
	'Constantly pushing the boundaries of human capital technology.': 'የሰው ካፒታል ቴክኖሎጂን ድንበሮች በየጊዜው መግፋት።',
	'Integrity': 'ታማኝነት',
	'Absolute transparency and uncompromising ethical standards.': 'ፍጹም ግልጽነት እና የማይተዋወቅ ሥነ ምግባራዊ ደረጃዎች።',

	'Command &': 'ትዕዛዝ እና',
	'Control': 'ቁጥጥር',
	'A leadership team forged in the complexities of continental expansion. We bring decades of multi-jurisdictional enterprise experience.':
		'በአህጉር መስፋፋት ውስብስብ ነገሮች ውስጥ የተፈጠረ የአመራር ቡድን። አስርት አመታት የባለብዙ የህግ ክልል ድርጅት ልምድ እናመጣለን።',
	'View Full Leadership': 'ሙሉ አመራር ይመልከቱ',
	'David O. Alabi': 'ዴቪድ ኦ አላቢ',
	'Chief Executive Officer': 'ዋና ሥራ አስፈፃሚ',
	'Aisha N. Mensah': 'አይሻ ኤን ሜንሳህ',
	'Head of Talent Intelligence': 'የተሰጥኦ እውቀት ኃላፊ',
	'Samuel K. Tesfaye': 'ሳሙኤል ኬ ተስፋዬ',
	'VP of Enterprise Operations': 'የድርጅት ሥራዎች ምክትል ፕሬዝዳንት',

	'The Scale of': 'የ',
	'Our Impact': 'ተጽኖአችን መጠን',
	'We do not deal in assumptions. We deal in measurable, scalable enterprise performance. Our infrastructure supports the workforce demands of the continent’s most ambitious companies.':
		'እኛ በግምቶች አንገበርም። በሚለካ፣ ሊሰፋ በሚችል የድርጅት አፈጻጸም እንገበራለን። የእኛ መሠረተ ልማት የአህጉሪቱን በጣም ታላላቅ ኩባንያዎች የሰው ኃይል ፍላጎቶች ይደግፋል።',
	'Enterprise Clients': 'የድርጅት ደንበኞች',
	'across 14 active jurisdictions': 'በ14 ንቁ የህግ ክልሎች ውስጥ',
	'Workforce Placements': 'የሰው ኃይል ምደባዎች',
	'talent orchestrated annually': 'በየአመቱ የሚደራጅ ተሰጥኦ',
	'Payroll Operations': 'የደሞዝ ክፍያ ሥራዎች',
	'processed through our architecture': 'በእኛ መዋቅር የሚሰራ',
	'Talent Success Rate': 'የተሰጥኦ ስኬት መጠን',
	'executive & technical retention': 'የሥራ አስፈፃሚ እና ቴክኒካል ማቆየት',

	'A Culture of': 'የ',
	'Relentless Execution': 'የማይታክት አፈጻጸም ባህል',
	'Behind our technology lies a team of operators who believe that human capital is the ultimate competitive advantage.':
		'ከቴክኖሎጂያችን በስተጀርባ የሰው ካፒታል የመጨረሻው ተወዳዳሪ ጥቅም ነው ብለው የሚያምኑ ኦፕሬተሮች ቡድን ይገኛል።',
	'"We dont just hire talent. We architect teams."': '"ተሰጥኦ ብቻ አንቀጥርም። ቡድኖችን እንቀርፃለን።"',
	'Head of Internal Operations': 'የውስጥ ሥራዎች ኃላፊ',

	'Why Leading Enterprises': 'ለምን መሪ ኢንተርፕራይዞች',
	'Trust': 'ይተማመናሉ',
	'Operational Guarantees': 'የስራ ዋስትናዎች',
	'SLA-backed performance on every deployment.': 'በእያንዳንዱ ማሰማሪያ ላይ በSLA የተደገፈ አፈጻጸም።',
	'Recruitment Intelligence': 'የምልመላ እውቀት',
	'Predictive modeling for talent acquisition.': 'ተሰጥኦ ግዢ ትንበያ ሞዴሊንግ።',
	'Enterprise Scalability': 'የድርጅት መስፋፋት ችሎታ',
	'Infrastructure built to handle multi-country hypergrowth.': 'ባለብዙ ሀገር ሃይፐር እድገት ለማስተናገድ የተገነባ መሠረተ ልማት።',

	'The Next Step': 'ቀጣዩ እርምጃ',
	'Build the Future of': 'የወደፊቱን ይገንቡ',
	'With 247HR': 'ከ247HR ጋር',
	'Start Your Transformation': 'ለውጥዎን ይጀምሩ',
	'Speak to Leadership': 'ከአመራር ጋር ይነጋገሩ',

	"Let's Build": 'እንገንባ',
	'Smarter Workforce Systems': 'ስማርት የሰው ኃይል ሥርዓቶች',
	'Together.': 'አብረን።',
	'Connect with the future of enterprise workforce solutions. We dont do standard support—we provide elite operational consultation.':
		'ከድርጅት የሰው ኃይል መፍትሄዎች የወደፊት ጋር ይገናኙ። እኛ መደበኛ ድጋፍ አንሰራም—ምርጥ የስራ ማማከር እናቀርባለን።',
	'Full Name': 'ሙሉ ስም',
	'Company Name': 'የኩባንያ ስም',
	'Email Address': 'ኢሜይል አድራሻ',
	'Phone Number': 'ስልክ ቁጥር',
	'Service Interest': 'የአገልግሎት ፍላጎት',
	'Message': 'መልእክት',
	'Transmit Protocol': 'ፕሮቶኮል አስተላልፍ',
	'Global HQ': 'ዓለም አቀፍ ዋና መሥሪያ ቤት',
	'The Exchange Tower,': 'ዘ ኤክስቼንጅ ታወር፣',
	'Westlands, Nairobi,': 'ዌስትላንድስ፣ ናይሮቢ፣',
	'Kenya': 'ኬንያ',
	'Direct Line': 'ቀጥተኛ መስመር',
	'Operations Center': 'የሥራ ማእከል',
	'Global Coverage': 'ዓለም አቀፍ ሽፋን',
	'24/7 Enterprise Support': '24/7 የድርጅት ድጋፍ',
	'GMT+3 Primary Operations': 'GMT+3 ዋና ሥራዎች',
	'Executive Calendar Open': 'የስራ አስፈፃሚ የቀን መቁጠሪያ ክፍት ነው',
	'Start Building The Future': 'ወደፊቱን መገንባት ጀምር',
	'Of Workforce Operations': 'የሰው ኃይል ሥራዎች',
	'Schedule Strategy Session': 'የስትራቴጂ ክፍለ ጊዜ መርሐግብር',

	'Talent Ecosystem 2026': 'የተሰጥኦ ስነ-ምህዳር 2026',
	'BUILD THE': 'ይገንቡ',
	'FUTURE OF WORK': 'የስራ ወደፊት',
	'WITH US.': 'ከእኛ ጋር።',
	'Join the workforce infrastructure powering modern Africa. An elite environment engineered for ambitious thinkers, creative operators, and executive leaders.':
		'ዘመናዊ አፍሪካን የሚያጎለብተውን የሰው ኃይል መሠረተ ልማት ይቀላቀሉ። ለከፍተኛ አሳቢዎች፣ ፈጣሪ ኦፕሬተሮች እና የስራ አስፈፃሚ መሪዎች የተሰራ ልሂቃን አካባቢ።',
	'Scroll': 'ማሸብለል',

	'Culture // 01': 'Culture // 01',
	"WE DON'T DO": 'አንሰራም',
	'ORDINARY.': 'ተራ።',
	'Our culture is built for the obsessed. We believe that an elite workforce requires an environment that challenges, elevates, and rigorously supports its people. Here, operational excellence is the baseline.':
		'ባህላችን ለተጠመዱ የተገነባ ነው። ልሂቃን የሰው ኃይል ህዝቡን የሚፈታተን፣ የሚያሳድግ እና በጥብቅ የሚደግፍ አካባቢ እንደሚፈልግ እናምናለን። እዚህ፣ የስራ ልቀት መሠረታዊ ደረጃ ነው።',
	'Radical Accountability': 'አክራሪ ተጠያቂነት',
	'Ownership at every layer of the matrix.': 'በማትሪክስ እያንዳንዱ ንብርብር ላይ ባለቤትነት።',
	'Creative Operations': 'ፈጠራ ሥራዎች',
	'Solving rigid problems with fluid thinking.': 'ጠንካራ ችግሮችን በፈሳሽ አስተሳሰብ መፍታት።',
	'The most magnetic thing a company can offer is the standard it refuses to compromise on.': 'አንድ ኩባንያ ሊሰጥ የሚችለው በጣም መግነጢሳዊ ነገር መግባባት የማይፈልገው ደረጃ ነው።',
	'CEO Directive': 'ዋና ሥራ አስፈፃሚ መመሪያ',

	'STEP INTO': 'ወደ ውስጥ ግቡ',
	'THE ARENA.': 'መድረኩ።',
	'Location': 'ቦታ',
	'Type': 'አይነት',
	'Executive Search Consultant': 'ሥራ አስፈፃሚ ፍለጋ አማካሪ',
	'Workforce Infrastructure Lead': 'የሰው ኃይል መሠረተ ልማት መሪ',
	'Talent Analytics Manager': 'የተሰጥኦ ትንተና ሥራ አስኪያጅ',
	'Risk & Compliance Officer': 'አደጋ እና ተገዢነት ኦፊሰር',
	'Nairobi, Kenya': 'ናይሮቢ፣ ኬንያ',
	'Lagos, Nigeria': 'ላጎስ፣ ናይጄሪያ',
	'Johannesburg, SA': 'ጆሃንስበርግ፣ ደቡብ አፍሪካ',
	'Full-time': 'ሙሉ ጊዜ',
	'Remote': 'ርቀት',

	'Executive Perspectives // 03': 'የሥራ አስፈፃሚ አመለካከቶች // 03',
	'"We dont manage processes. We engineer structural momentum for the entire continent."': '"ሂደቶችን አንመራም። ለመላው አህጉር መዋቅራዊ ጉልበት እንቀርፃለን።"',
	'Amara K.': 'አማራ ኬ.',
	'Head of Talent Systems': 'የተሰጥኦ ሥርዓቶች ኃላፊ',

	'THE': 'የ',
	'STANDARDS.': 'ደረጃዎቹ።',
	'Executive Trajectory': 'የሥራ አስፈፃሚ አቅጣጫ',
	'Rigorous mentorship and unfiltered exposure to multi-national operations, accelerating your career by years.':
		'ጥብቅ የአማካሪነት እና ያልተጣራ የብዙ ሀገር ሥራዎች መጋለጥ፣ ሥራዎን በዓመታት የሚያፋጥን።',
	'Sovereign Flexibility': 'ሉዓላዊ ተለዋዋጭነት',
	'We measure impact, not presence. Fluid remote frameworks structured around pure operational output.':
		'ተጽእኖን እንለካለን፣ መገኘትን አይደለም። በንጹህ የስራ ውፅዓት ዙሪያ የተዋቀሩ ፈሳሽ የርቀት ማዕቀፎች።',
	'Cognitive Capital': 'የእውቀት ካፒታል',
	'Uncapped budgets for continued learning, certifications, and global enterprise conferences.': 'ለቀጣይ ትምህርት፣ የምስክር ወረቀቶች እና ዓለም አቀፍ የድርጅት ኮንፈረንሶች ያልተገደበ በጀት።',
	'Holistic Architecture': 'ሁሉን አቀፍ መዋቅር',
	'Premium healthcare scaling to your family, comprehensive wellness stipends, and mandated reset periods.':
		'ለቤተሰብዎ የሚደርስ ፕሪሚየም ጤና እንክብካቤ፣ አጠቃላይ የደህንነት አበል እና የታዘዙ የእረፍት ጊዜዎች።',

	'The Path In.': 'የመግቢያ መንገድ።',
	'Application': 'ማመልከቻ',
	'Screening': 'ማጣሪያ',
	'Interview': 'ቃለ መጠይቅ',
	'Assessment': 'ግምገማ',
	'Offer': 'ቅናሽ',
	'Onboarding': 'ማስጀመር',

	'Operational Ecosystem // 05': 'የስራ ስነ-ምህዳር // 05',
	'THE ARCHITECTURE': 'መዋቅሩ',
	'OF AMBITION.': 'የምኞት።',
	'HQ / Collaborative Core': 'ዋና መሥሪያ ቤት / የትብብር ማዕከል',
	'Executive Lounge': 'የሥራ አስፈፃሚ ላውንጅ',
	'Spaces designed not just to house personnel, but to physically catalyze elite performance. The 247HR workspace acts as a luxury asset, fostering high-level focus and collaborative synthesis.':
		'ሰራተኞችን ለማስተናገድ ብቻ ሳይሆን ልሂቃን አፈጻጸምን በአካል ለማፋጠን የተነደፉ ቦታዎች። የ247HR የስራ ቦታ እንደ የቅንጦት ንብረት ሆኖ ያገለግላል፣ ከፍተኛ ደረጃ ትኩረትን እና የትብብር ውህደትን ያጎለብታል።',

	'JOIN THE WORKFORCE BUILDING THE FUTURE OF': 'የወደፊቱን የሚገነባውን የሰው ኃይል ተቀላቀሉ',
	'ENTERPRISE OPERATIONS.': 'የድርጅት ሥራዎች።',
	'Initiate Application': 'ማመልከቻ ጀምር',

	'We are committed to delivering reliable, professional, and people-focused HR solutions tailored to the unique needs of each organization. Our experienced team works closely with clients to streamline HR processes, ensure compliance with employment regulations, and build productive, high-performing workforces. We prioritize integrity, confidentiality, efficiency, and long-term client success.':
		'ለእያንዳንዱ ድርጅት ልዩ ፍላጎቶች የተዘጋጁ አስተማማኝ፣ ሙያዊ እና በሰዎች ላይ ያተኮሩ የሰው ኃይል መፍትሄዎችን ለማቅረብ ቁርጠኞች ነን። ልምድ ያለው ቡድናችን የሰው ኃይል ሂደቶችን ለማቀላጠፍ፣ የሥራ ህጎችን ማክበርን ለማረጋገጥ እና ውጤታማ፣ ከፍተኛ አፈጻጸም ያላቸውን የሰው ኃይሎች ለመገንባት ከደንበኞች ጋር በቅርበት ይሰራል። ታማኝነትን፣ ሚስጥራዊነትን፣ ብቃትን እና የረዥም ጊዜ የደንበኛ ስኬትን ቅድሚያ እንሰጣለን።',

	'System': 'ሲስተም',
	'SYS.OP.247 // ACTIVE': 'ሲስተም ኦፕ.247 // ንቁ',
	'Scope': 'ስፋት',
	'Enterprise Workforce Operations': 'የድርጅት የሰው ኃይል ሥራዎች',
	'WORKFORCE': 'የሰው ኃይል',
	'ARCHITECTURE': 'መዋቅር',
	'We do not provide standard HR services. We engineer, deploy, and manage the human capital infrastructure required for high-growth enterprises to scale without friction.':
		'መደበኛ የሰው ኃይል አገልግሎቶችን አንሰጥም። ለከፍተኛ እድገት ድርጅቶች ያለምንም እንቅፋት ለመስፋፋት የሚያስፈልገውን የሰው ካፒታል መሠረተ ልማት እንቀርፃለን፣ እናሰማራለን እንዲሁም እንደራለን።',
	'Deploy Systems': 'ሲስተሞችን አሰማራ',

	'The Operational': 'የስራ',
	'Ecosystem': 'ስነ-ምህዳሩ',
	'Interact with the index below to explore our core enterprise deployments.': 'ዋና የድርጅት ማሰማሪያዎቻችንን ለማሰስ ከታች ካለው መረጃ ጠቋሚ ጋር ይገናኙ።',
	'Human Resource Outsourcing (HRO)': 'የሰው ኃይል የውጭ አገልግሎት (ኤችአርኦ)',
	'Comprehensive offloading of human capital management, ensuring complete enterprise compliance and operational efficiency across all business functions.':
		'አጠቃላይ የሰው ካፒታል አስተዳደር ማስወገድ፣ በሁሉም የንግድ ተግባራት ላይ ሙሉ የድርጅት ተገዢነት እና የስራ ብቃት ማረጋገጥ።',
	'Deploy HR Framework': 'የሰው ኃይል ማዕቀፍ አሰማራ',
	'Recruitment and Talent Acquisition': 'ምልመላ እና ተሰጥኦ ግዢ',
	'Precision executive search and strategic talent acquisition. We utilize algorithmic market analysis for exact target identification and candidate matching.':
		'ትክክለኛ የሥራ አስፈፃሚ ፍለጋ እና ስትራቴጂካዊ ተሰጥኦ ግዢ። ለትክክለኛ ኢላማ መለየት እና እጩ ማዛመድ አልጎሪዝም የገበያ ትንተና እንጠቀማለን።',
	'Initiate Talent Search': 'ተሰጥኦ ፍለጋ ጀምር',
	'Payroll Management Services': 'የደሞዝ ክፍያ አስተዳደር አገልግሎቶች',
	'Zero-error multi-currency payroll execution. A seamless financial shield guaranteeing absolute reliability, tax compliance, and timely employee compensation.':
		'ስህተት የሌለው ባለብዙ ምንዛሪ የደሞዝ ክፍያ አፈጻጸም። ፍጹም አስተማማኝነት፣ የግብር ተገዢነት እና ወቅታዊ የሰራተኛ ካሳ የሚያረጋግጥ እንከን የለሽ የፋይናንስ ጋሻ።',
	'Execute Payroll Integration': 'የደሞዝ ክፍያ ውህደት አከናውን',
	'Employee Training and Development': 'የሰራተኛ ስልጠና እና ልማት',
	'Premium learning frameworks engineered for supreme human performance. Structured programs that enhance skills, boost productivity, and drive corporate innovation.':
		'ለከፍተኛ የሰው አፈጻጸም የተሰሩ ፕሪሚየም የትምህርት ማዕቀፎች። ክህሎቶችን የሚያሳድጉ፣ ምርታማነትን የሚያሳድጉ እና የኮርፖሬት ፈጠራን የሚያንቀሳቅሱ የተዋቀሩ ፕሮግራሞች።',
	'Initiate Training Engagement': 'የስልጠና ተሳትፎ ጀምር',
	'Performance Management Support': 'የአፈጻጸም አስተዳደር ድጋፍ',
	'Strategic frameworks for tracking, evaluating, and optimizing employee performance. Data-driven systems that align workforce output with business objectives.':
		'የሰራተኛ አፈጻጸም ለመከታተል፣ ለመገምገም እና ለማመቻቸት ስትራቴጂካዊ ማዕቀፎች። የሰው ኃይል ውፅዓት ከንግድ ዓላማዎች ጋር የሚያስማሙ በመረጃ የሚመሩ ሥርዓቶች።',
	'Optimize Performance Systems': 'የአፈጻጸም ሥርዓቶችን ያሻሽሉ',
	'HR Policy Development and Compliance': 'የሰው ኃይል ፖሊሲ ልማት እና ተገዢነት',
	'Expert guidance on labor laws, regulatory frameworks, and corporate policies. Ensuring your organization operates within legal boundaries while maintaining best practices.':
		'በሠራተኛ ህጎች፣ የቁጥጥር ማዕቀፎች እና የኮርፖሬት ፖሊሲዎች ላይ የባለሙያ መመሪያ። ድርጅትዎ ምርጥ ተግባራትን በመጠበቅ በህጋዊ ድንበሮች ውስጥ እንዲሰራ ማረጋገጥ።',
	'Establish Compliance Framework': 'ተገዢነት ማዕቀፍ ይመስርቱ',
	'Workforce Planning and Talent Management': 'የሰው ኃይል እቅድ እና ተሰጥኦ አስተዳደር',
	'Strategic workforce modeling and talent pipeline development. We help you forecast needs, identify skill gaps, and build sustainable talent ecosystems.':
		'ስትራቴጂካዊ የሰው ኃይል ሞዴሊንግ እና የተሰጥኦ ቧንቧ መስመር ልማት። ፍላጎቶችን ለመተንበይ፣ የክህሎት ክፍተቶችን ለመለየት እና ዘላቂ የተሰጥኦ ስነ-ምህዳሮችን ለመገንባት እንረዳዎታለን።',
	'Plan Workforce Strategy': 'የሰው ኃይል ስትራቴጂ ያቅዱ',
	'Employee Relations and Engagement': 'የሰራተኛ ግንኙነት እና ተሳትፎ',
	'Creating positive workplace cultures that drive retention and productivity. Proactive conflict resolution, engagement strategies, and employee wellness programs.':
		'ማቆየት እና ምርታማነትን የሚያነዱ አወንታዊ የስራ ባህሎችን መፍጠር። ንቁ የግጭት አፈታት፣ የተሳትፎ ስልቶች እና የሰራተኛ ደህንነት ፕሮግራሞች።',
	'Enhance Employee Engagement': 'የሰራተኛ ተሳትፎ ያሳድጉ',
	'HR Advisory and Consulting Services': 'የሰው ኃይል አማካሪ እና አማካሪ አገልግሎቶች',
	'Strategic HR consulting for organizational transformation. Expert guidance on restructuring, change management, and human capital optimization.':
		'ለድርጅታዊ ለውጥ ስትራቴጂካዊ የሰው ኃይል አማካሪ። በመልሶ ማዋቀር፣ ለውጥ አስተዳደር እና የሰው ካፒታል ማመቻቸት ላይ የባለሙያ መመሪያ።',
	'Consult Our Experts': 'ባለሙያዎቻችንን ያማክሩ',
	'Staffing and Workforce Solutions': 'የሰራተኛ እና የሰው ኃይል መፍትሄዎች',
	'Flexible staffing models including temporary, contract, and permanent placements. Rapid deployment of qualified professionals across all industries.':
		'ጊዜያዊ፣ ኮንትራት እና ቋሚ ምደባዎችን ጨምሮ ተለዋዋጭ የሰራተኛ ሞዴሎች። በሁሉም ኢንዱስትሪዎች ውስጥ ብቁ ባለሙያዎችን በፍጥነት ማሰማራት።',
	'Deploy Workforce Solutions': 'የሰው ኃይል መፍትሄዎች አሰማራ',
	'Visual Data Feed': 'የእይታ ውሂብ ምግብ',

	'System Advantages': 'የስርዓት ጥቅሞች',
	'Operational Scalability': 'የስራ መስፋፋት ችሎታ',
	'Our systems expand dynamically. Whether deploying 50 executives or 5,000 field agents, infrastructure adjusts to volume without structural breakage.':
		'የእኛ ስርዓቶች በተለዋዋጭነት ይስፋፋሉ። 50 ሥራ አስፈፃሚዎችን ወይም 5,000 የሜዳ ወኪሎችን በማሰማራት ላይ ይሁን፣ መሠረተ ልማት ያለ መዋቅራዊ መሰበር ከመጠን ጋር ይስማማል።',
	'Compliance Infrastructure': 'ተገዢነት መሠረተ ልማት',
	'Navigating African labor laws requires precision. We provide a legal and financial shield guaranteeing 100% compliance across all active jurisdictions.':
		'የአፍሪካ የሠራተኛ ህጎችን ማሰስ ትክክለኛነትን ይጠይቃል። በሁሉም ንቁ የህግ ክልሎች ውስጥ 100% ተገዢነትን የሚያረጋግጥ ህጋዊ እና ፋይናንስ ጋሻ እናቀርባለን።',
	'AI-Assisted Intelligence': 'ኤአይ የታገዘ እውቀት',
	'Predictive algorithms map talent markets, accelerating recruitment velocity while radically improving retention probability across the board.':
		'ትንበያ ስልተ ቀመሮች የተሰጥኦ ገበያዎችን ካርታ ያወጣሉ፣ የምልመላ ፍጥነትን ያፋጥናሉ በተመሳሳይ ጊዜ ደግሞ በሁሉም ደረጃ የማቆየት እድልን በከፍተኛ ደረጃ ያሻሽላሉ።',

	'Operational Sectors': 'የስራ ዘርፎች',
	'Dominated': 'የተቆጣጠሩት',
	'Cross-industry expertise powering the continents most demanding corporate sectors.': 'የአህጉሪቱን በጣም ፈላጊ የኮርፖሬት ዘርፎች የሚያጎለብት የተሻገረ የኢንዱስትሪ እውቀት።',
	'Banking & Finance': 'ባንክ እና ፋይናንስ',
	'Technology': 'ቴክኖሎጂ',
	'Retail & Logistics': 'ችርቻሮ እና ሎጅስቲክስ',
	'Manufacturing': 'ማኑፋክቸሪንግ',
	'Active Deployment': 'ንቁ ማሰማሪያ',
	'Telecom': 'ቴሌኮም',
	'Healthcare': 'ጤና እንክብካቤ',
	'Government': 'መንግስት',
	'Oil & Gas': 'ዘይት እና ጋዝ',

	'Execution Protocol': 'የአፈጻጸም ፕሮቶኮል',
	'The Operational Flow': 'የስራ ፍሰት',
	'Architecture': 'መዋቅር',
	'Consultation & Architecture': 'ማማከር እና መዋቅር',
	'Mapping the operational gaps and designing the human capital infrastructure.': 'የስራ ክፍተቶችን በካርታ መለየት እና የሰው ካፒታል መሠረተ ልማት ዲዛይን ማድረግ።',
	'Talent Mapping': 'ተሰጥኦ ካርታ',
	'Algorithmic market analysis and executive target identification.': 'አልጎሪዝም የገበያ ትንተና እና የሥራ አስፈፃሚ ኢላማ መለየት።',
	'Verification Protocol': 'የማረጋገጫ ፕሮቶኮል',
	'Rigorous legal, credential, and behavioral vetting processes.': 'ጥብቅ ህጋዊ፣ ማረጋገጫ እና የባህሪ ምርመራ ሂደቶች።',
	'System Deployment': 'የስርዓት ማሰማራት',
	'Seamless integration of personnel, payroll, and compliance systems.': 'የሰራተኛ፣ የደሞዝ ክፍያ እና የተገዢነት ስርዓቶች እንከን የለሽ ውህደት።',
	'Workforce Optimization': 'የሰው ኃይል ማመቻቸት',
	'Continuous performance analytics and structural scaling.': 'ቀጣይነት ያለው የአፈጻጸም ትንተና እና መዋቅራዊ መስፋፋት።',

	'Trust Measured': 'የታመነ የሚለካው',
	'In Scale': 'በመጠን ነው',
	'True operational power is validated entirely by scale and precision. We support the human infrastructure behind the continents most demanding corporate entities.':
		'እውነተኛ የስራ ኃይል ሙሉ በሙሉ በመጠን እና በትክክለኛነት የሚረጋገጥ ነው። ከአህጉሪቱ በጣም ፈላጊ የኮርፖሬት አካላት ጀርባ ያለውን የሰው መሠረተ ልማት እንደግፋለን።',
	'Payroll Operations Processed': 'የደሞዝ ክፍያ ስራዎች የተከናወኑ',
	'Countries Served': 'የተገለገሉ ሀገራት',
	'Talent Retention Rate': 'የተሰጥኦ ማቆየት መጠን',
	'Avg. Executive Hiring Speed': 'አማካይ የሥራ አስፈፃሚ ቅጥር ፍጥነት',

	'Final Step': 'የመጨረሻ እርምጃ',
	'Build Smarter': 'በማሰብ ግንባታ',
	'Operations': 'ሥራዎች',

	'Global Headquarters: ': 'ዓለም አቀፍ ዋና መሥሪያ ቤት፦ ',
	'Tel: ': 'ስልክ፦ ',

	'Navigation Error': 'የአሰሳ ስህተት',
	'Page Not Found': 'ገጽ አልተገኘም',
	'The page you are looking for does not exist or may have been moved. Please check the URL or return to the homepage.':
		'የሚፈልጉት ገጽ የለም ወይም ተንቀሳቅሷል። እባክዎ ዩአርኤሉን ያረጋግጡ ወይም ወደ መነሻ ገጽ ይመለሱ።',
	'Back to Home': 'ወደ መነሻ ገጽ ተመለስ',
	'Go Back': 'ተመለስ',
	'Quick Navigation': 'ፈጣን አሰሳ',
	'Need help?': 'እርዳታ ያስፈልጋል?',
	'Contact Support': 'ድጋፍ ያግኙ',
	'All rights reserved.': 'መብቱ በህግ የተጠበቀ ነው።',

	'Server Error': 'የአገልጋይ ስህተት',
	'Application Error': 'የመተግበሪያ ስህተት',
	'Connection Error': 'የግንኙነት ስህተት',
	'Error Occurred': 'ስህተት ተከስቷል',
	'Something went wrong on our end. Please try again later.': 'በእኛ በኩል ስህተት ተከስቷል። እባክዎ ቆይተው እንደገና ይሞክሩ።',
	'An unexpected error occurred. Our team has been notified.': 'ያልተጠበቀ ስህተት ተከስቷል። ቡድናችን ተገኝቷል።',
	'No Internet Connection': 'የበይነመረብ ግንኙነት የለም',
	'Please check your network connection and try again.': 'እባክዎ የአውታረ መረብ ግንኙነትዎን ያረጋግጡ እና እንደገና ይሞክሩ።',
	'Try Again': 'እንደገና ይሞክሩ',
	'Need assistance?': 'እርዳታ ያስፈልጋል?',
	'Contact our support team': 'የድጋፍ ቡድናችንን ያግኙ',
};

// Translation store with default values pre-populated
const translations: Record<Language, Record<string, string>> = {
	EN,
	AM,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>(() => {
		const saved = localStorage.getItem('language') as Language;
		return saved === 'EN' || saved === 'AM' ? saved : 'EN';
	});

	useEffect(() => {
		localStorage.setItem('language', language);
		document.documentElement.lang = language.toLowerCase();
		// Force a re-render of all components using t()
		// This will trigger updates
	}, [language]);

	const t = (key: string): string => {
		const translation = translations[language][key];
		if (!translation) {
			console.warn(`Missing translation for key: "${key}" in language: ${language}`);
			return key;
		}
		return translation;
	};

	return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within LanguageProvider');
	}
	return context;
}
