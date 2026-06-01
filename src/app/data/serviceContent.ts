export type ServiceContent = {
  id: string;
  category: string;
  hero: {
    words: string[];
    description: string;
  };
  narrative?: {
    title: string;
    paragraphs: string[];
    image: string;
  };
  features: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  stats: {
    num: string;
    label: string;
  }[];
  process?: {
    num: string;
    title: string;
    desc: string;
  }[];
  gallery?: string[];
  featureImages?: string[];
  solutions?: {
    title: string;
    description: string;
  }[];
  cta: {
    titleLines: string[];
    highlight: string;
    button: string;
  };
};

export const servicesContent: Record<string, ServiceContent> = {
  "call-center": {
    id: "call-center",
    category: "Support Infrastructure",
    hero: {
      words: ["Omnichannel", "Support", "Architecture."],
      description: "Where absolute reliability, strategic verification, and precision customer operations converge to form the backbone of elite African enterprises."
    },
    narrative: {
      title: "Omnichannel Intelligence.",
      paragraphs: [
        "In the modern enterprise ecosystem, customer support is no longer a cost center—it is a strategic differentiator. We design back-office and customer operations that function with the precision of a high-performance engine.",
        "Every layer of our support infrastructure is meticulously mapped, documented, and executed by elite personnel. We remove the burden of day-to-day management, allowing your leadership to focus exclusively on systemic growth."
      ],
      image: "https://images.unsplash.com/photo-1599776521727-e2e373e50d65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxsJTIwY2VudGVyJTIwbWluaW1hbHxlbnwxfHx8fDE3ODAwMTM1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    features: [
      { title: "Voice Architecture", description: "High-fidelity, latency-free voice routing designed for continuous enterprise availability." },
      { title: "Sentiment Analysis", description: "Automated real-time categorization of interaction data to prevent escalations." },
      { title: "Omnichannel Sync", description: "Seamless transition across chat, voice, and ticketing systems without dropping context." }
    ],
    benefits: [
      { title: "Zero Deflection", description: "Eliminate dropped calls and unanswered inquiries with our robust queue distribution." },
      { title: "Cultural Alignment", description: "Agents deeply integrated into regional nuances, speaking directly to local markets." },
      { title: "Rapid Scale", description: "Instantly expand seat capacity within 48 hours to handle sudden volume surges." },
      { title: "QA Consistency", description: "Algorithmic sampling ensures 99% adherence to your documented brand protocols." }
    ],
    stats: [
      { num: "99.9%", label: "System Uptime" },
      { num: "<15s", label: "Average Answer Time" },
      { num: "24/7", label: "Global Coverage" }
    ],
    cta: {
      titleLines: ["Build Support", "Operations That Scale"],
      highlight: "With Certainty.",
      button: "Initiate Call Center Deployment"
    }
  },
  "workspace": {
    id: "workspace",
    category: "Physical Infrastructure",
    hero: {
      words: ["Enterprise", "Workspace", "Ecosystems."],
      description: "Procuring, outfitting, and managing premium operational real estate tailored precisely to the structural and technological needs of your deployed workforce."
    },
    narrative: {
      title: "Architectural Certainty.",
      paragraphs: [
        "A workforce is only as effective as the environment that sustains it. We bypass the friction of traditional commercial real estate by delivering fully operational, enterprise-grade workspaces built for immediate deployment.",
        "From network redundancy and power infrastructure to ergonomic precision, we design spaces that act as a physical manifestation of operational excellence."
      ],
      image: "https://images.unsplash.com/photo-1491406213019-05b162a72c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFyY2hpdGVjdHVyZSUyMG1pbmltYWx8ZW58MXx8fHwxNzgwMDEzNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    features: [
      { title: "Power Redundancy", description: "Dual-failover grid connectivity ensuring absolute zero downtime for facility operations." },
      { title: "Network Architecture", description: "Enterprise-grade fiber backbone delivering dedicated, uncontended bandwidth." },
      { title: "Ergonomic Logic", description: "Spatially optimized layouts engineered to maximize sustained cognitive output." }
    ],
    benefits: [
      { title: "Turnkey Deployment", description: "Walk in and commence operations. We handle the entire build-out and procurement." },
      { title: "Physical Security", description: "Biometric access controls and total perimeter surveillance protocols." },
      { title: "Facility Maintenance", description: "Invisible ambient management of all physical systems by dedicated staff." },
      { title: "Scalable Footprint", description: "Modular zoning allows you to expand physical capacity without breaking lease terms." }
    ],
    stats: [
      { num: "100%", label: "Power Uptime Guarantee" },
      { num: "0", label: "Procurement Friction" },
      { num: "Tier 1", label: "Facility Grading" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmdXR1cmlzdGljJTIwd29ya3NwYWNlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc4MDAxNTYwNnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1746021375246-7dc8ab0583f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbW9kZXJuJTIwb2ZmaWNlJTIwbGVhcm5pbmclMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3ODAwMTU2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1754485115881-b956ddcbd4ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZXhlY3V0aXZlJTIwdGVhbSUyMGNvbGxhYm9yYXRpbmclMjBsdXh1cnl8ZW58MXx8fHwxNzgwMDE1NjEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    featureImages: [
      "https://images.unsplash.com/photo-1699621106755-4fe40ce95d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBvZmZpY2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwMDE4MDk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGludGVyaW9yJTIwd29ya3NwYWNlfGVufDF8fHx8MTc4MDAxODA5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBib2FyZHJvb218ZW58MXx8fHwxNzgwMDE4MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    solutions: [
      { title: "Turnkey Headquarters", description: "Fully operational enterprise hubs designed to spec, delivered ready for immediate deployment." },
      { title: "Modular Innovation Hubs", description: "Scalable environments specifically engineered for collaborative output and creative agility." }
    ],
    cta: {
      titleLines: ["Secure Premium", "Physical Infrastructure"],
      highlight: "For Your Enterprise.",
      button: "Procure Workspace"
    }
  },
  "hr-out": {
    id: "hr-out",
    category: "Human Capital Management",
    hero: {
      words: ["Enterprise", "Capital", "Management."],
      description: "Comprehensive offloading of human capital management, ensuring complete enterprise compliance and operational fluidity across multiple African jurisdictions."
    },
    features: [
      { title: "Compliance Shielding", description: "Absolute protection against multi-jurisdictional labor law infractions and penalties." },
      { title: "Benefits Architecture", description: "Structuring and administering localized employee benefit and healthcare programs." },
      { title: "Dispute Resolution", description: "Pre-emptive and active handling of personnel friction by accredited specialists." }
    ],
    benefits: [
      { title: "Risk Elimination", description: "We absorb the liability, acting as the employer of record where required." },
      { title: "Administrative Silence", description: "Complete removal of daily HR overhead from your executive leadership." },
      { title: "Policy Adherence", description: "Implementation of rigorous corporate guidelines tailored to local statutory limits." },
      { title: "Retention Dynamics", description: "Structural employee care programs proven to drastically reduce turnover rates." }
    ],
    stats: [
      { num: "Zero", label: "Compliance Infractions" },
      { num: "100%", label: "Statutory Adherence" },
      { num: "360°", label: "Lifecycle Management" }
    ],
    process: [
      { num: "01", title: "Audit & Assimilation", desc: "We map your current personnel architecture against local statutory requirements." },
      { num: "02", title: "Framework Deployment", desc: "Installation of our enterprise compliance and benefit structures." },
      { num: "03", title: "Active Governance", desc: "Continuous monitoring, payroll management, and dispute resolution." }
    ],
    cta: {
      titleLines: ["Offload Your", "Human Capital Management"],
      highlight: "To The Experts.",
      button: "Deploy HR Framework"
    }
  },
  "recruit": {
    id: "recruit",
    category: "Talent Acquisition",
    hero: {
      words: ["Precision", "Talent", "Acquisition."],
      description: "Precision executive search and massive volume staffing. We utilize algorithmic market analysis and deep networks for exact target identification."
    },
    features: [
      { title: "Executive Calibration", description: "Discreet, high-level extraction of proven leadership from competing market forces." },
      { title: "Volume Surging", description: "Algorithmic screening to rapidly deploy hundreds of capable personnel simultaneously." },
      { title: "Psychometric Testing", description: "Advanced behavioral analysis to ensure long-term cultural and operational fit." }
    ],
    benefits: [
      { title: "Speed to Desk", description: "Drastically compressed timelines from initial requisition to active deployment." },
      { title: "Network Access", description: "Tap into our proprietary database of pre-vetted, high-performance African talent." },
      { title: "Defect Reduction", description: "Multi-stage verification logic eliminates false positives in the hiring cycle." },
      { title: "Guaranteed Placement", description: "Structural warranties on executive placements ensuring operational continuity." }
    ],
    stats: [
      { num: "94%", label: "Retention Rate (1yr)" },
      { num: "3x", label: "Faster Deployment" },
      { num: "10k+", label: "Vetted Candidates" }
    ],
    process: [
      { num: "01", title: "Profile Calibration", desc: "Precise alignment on technical and psychological requirements." },
      { num: "02", title: "Algorithmic Sourcing", desc: "Simultaneous extraction across digital networks and physical databases." },
      { num: "03", title: "Integration Validation", desc: "Final verification logic before candidate deployment." }
    ],
    cta: {
      titleLines: ["Identify and Secure", "Top-Percentile Talent"],
      highlight: "At Scale.",
      button: "Initiate Talent Search"
    }
  },
  "payroll": {
    id: "payroll",
    category: "Financial Operations",
    hero: {
      words: ["Multi-Currency", "Payroll", "Execution."],
      description: "Zero-error payroll execution across jurisdictions. A seamless financial shield guaranteeing absolute reliability and regulatory tax compliance."
    },
    features: [
      { title: "Cryptographic Precision", description: "Immutable ledgers and multi-verification systems ensuring zero disbursement errors." },
      { title: "Tax Governance", description: "Automated, localized tax deductions remitted flawlessly to municipal authorities." },
      { title: "Currency Fluidity", description: "Seamless multi-currency conversions handling regional economic volatilities." }
    ],
    benefits: [
      { title: "Punctuality", description: "Funds hit accounts at the exact promised millisecond, regardless of borders." },
      { title: "Audit Immunity", description: "Impeccably documented financial trails built to instantly satisfy any regulatory audit." },
      { title: "Morale Preservation", description: "Eliminate the primary cause of workforce friction: delayed or inaccurate compensation." },
      { title: "Fiscal Efficiency", description: "Optimized routing protocols minimizing international transfer taxation." }
    ],
    stats: [
      { num: "100%", label: "Disbursement Accuracy" },
      { num: "Zero", label: "Late Payments" },
      { num: "Auto", label: "Tax Remittance" }
    ],
    process: [
      { num: "01", title: "Data Ingestion", desc: "Secure pipeline gathering timesheets and bonus structures." },
      { num: "02", title: "Algorithmic Calculation", desc: "Instantaneous processing of deductions, taxes, and conversions." },
      { num: "03", title: "Encrypted Disbursement", desc: "Simultaneous multi-node release of funds to personnel." }
    ],
    cta: {
      titleLines: ["Guarantee Zero-Error", "Financial Operations"],
      highlight: "Across Borders.",
      button: "Execute Payroll Integration"
    }
  },
  "training": {
    id: "training",
    category: "Human Development",
    hero: {
      words: ["Executive", "Learning", "Ecosystems."],
      description: "Where future workforces are built. Premium spaces and cognitive frameworks engineered for supreme human performance and corporate innovation."
    },
    narrative: {
      title: "Architectural Learning.",
      paragraphs: [
        "In the modern enterprise ecosystem, talent development cannot happen in sterile, uninspired environments. We design premium training programs embedded in luxurious spatial architectures.",
        "We combine world-class corporate curricula with environments that foster focus, creativity, and executive resilience."
      ],
      image: "https://images.unsplash.com/photo-1779700210487-a01758a3c55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMGxlY3R1cmUlMjBsdXh1cnklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwMDE1NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    features: [
      { title: "Immersive Learning Architecture", description: "Classrooms and hubs built specifically for flow states, cognitive absorption, and collaborative friction-free thinking." },
      { title: "Executive Coaching", description: "Bespoke leadership development tailored to the unique operational challenges of the African enterprise sector." },
      { title: "Spatial Knowledge Design", description: "Environments where physical space dictates intellectual expansion, breaking traditional corporate constraints." }
    ],
    benefits: [
      { title: "Cognitive Endurance", description: "Environments designed to sustain high-level focus and mitigate mental fatigue during intensive learning." },
      { title: "Cultural Alignment", description: "Curricula that harmonize global business standards with deep regional intelligence." },
      { title: "Leadership Elevation", description: "Transforming managers into visionary executives through immersive, high-stakes simulated scenarios." },
      { title: "Collaborative Synergy", description: "Architectures that physically encourage cross-disciplinary networking and idea synthesis." }
    ],
    stats: [
      { num: "300+", label: "Executives Trained" },
      { num: "98%", label: "Knowledge Retention" },
      { num: "10x", label: "ROI on Human Capital" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1775486133942-91039b202e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNwYXRpYWwlMjBhcmNoaXRlY3R1cmUlMjBkYXJrJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzgwMDE1NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1758519289714-519a9d9b96e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbGVhZGVycyUyMHN0dWR5aW5nJTIwbWVldGluZyUyMHByZW1pdW18ZW58MXx8fHwxNzgwMDE1NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1779700210487-a01758a3c55a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMGxlY3R1cmUlMjBsdXh1cnklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwMDE1NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    solutions: [
      { title: "The Executive Summit", description: "A three-day immersive leadership transformation program held in our premium off-site facilities." },
      { title: "Continuous Learning Hubs", description: "Always-on training environments built directly into your corporate headquarters." }
    ],
    cta: {
      titleLines: ["Build Exceptional Work", "Environments for the Future"],
      highlight: "Transform Today.",
      button: "Initiate Training Engagement"
    }
  },
  "default": {
    id: "default",
    category: "Operational Intelligence",
    hero: {
      words: ["Intelligent", "Workforce", "Infrastructure."],
      description: "Where absolute reliability, strategic verification, and precision operations converge to form the backbone of elite African enterprises."
    },
    narrative: {
      title: "Process Intelligence.",
      paragraphs: [
        "In the modern enterprise ecosystem, operational support is no longer a cost center—it is a strategic differentiator. We design back-office and customer operations that function with the precision of a high-performance engine.",
        "Every layer of our support infrastructure is meticulously mapped, documented, and executed by elite personnel. We remove the burden of day-to-day management, allowing your leadership to focus exclusively on systemic growth."
      ],
      image: "https://images.unsplash.com/photo-1758611972971-1c8b9c6d7822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29ycG9yYXRlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc4MDAxMzU4NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    features: [
      { title: "Compliance Systems", description: "Impenetrable legal and regulatory frameworks woven directly into your operational layers." },
      { title: "Verification Intelligence", description: "Deep-layer background analysis replacing intuition with documented, algorithmic truth." },
      { title: "Process Integration", description: "Seamless synchronization between deployed 247HR personnel and your internal enterprise tools." }
    ],
    benefits: [
      { title: "Scalability", description: "Instantly expand your operational capacity without inheriting management overhead." },
      { title: "Precision", description: "Rigorous vetting ensures only top-percentile personnel touch your critical processes." },
      { title: "Consistency", description: "Standardized workflows guarantee identical excellence across every touchpoint." },
      { title: "Focus", description: "We absorb the friction, allowing your leadership to concentrate on strategic growth." }
    ],
    stats: [
      { num: "99.9%", label: "Operational Uptime" },
      { num: "0.01%", label: "Variance Margin" },
      { num: "24/7", label: "Enterprise Support" }
    ],
    process: [
      { num: "01", title: "Diagnostic Mapping", desc: "A rigorous audit of your existing infrastructure to identify vulnerabilities." },
      { num: "02", title: "Protocol Design", desc: "Engineering custom operational workflows based on the diagnostic data." },
      { num: "03", title: "System Activation", desc: "Executing the protocols across your deployed workforce ecosystem." }
    ],
    cta: {
      titleLines: ["Build Enterprise", "Operations That Scale"],
      highlight: "With Confidence.",
      button: "Initiate Deployment"
    }
  }
};