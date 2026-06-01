import { useState } from "react";
import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

const pricingData = [
  {
    name: "Core HR",
    description: "Essential workforce management infrastructure.",
    monthlyPrice: 499,
    annualPrice: 399,
    popular: false,
    buttonText: "Start with Core",
    features: [
      "Automated Payroll Processing",
      "Basic Employee Directory",
      "Time & Attendance Tracking",
      "Standard Compliance Reporting",
      "Email Support"
    ]
  },
  {
    name: "Intelligence",
    description: "Advanced recruitment and performance analytics.",
    monthlyPrice: 899,
    annualPrice: 719,
    popular: true,
    buttonText: "Scale with Intelligence",
    features: [
      "Everything in Core HR",
      "AI-Powered Applicant Tracking",
      "Predictive Attrition Modeling",
      "Automated Onboarding Workflows",
      "Performance Management Tools",
      "Priority 24/7 Support"
    ]
  },
  {
    name: "Enterprise",
    description: "Full-scale customized workforce operating system.",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    popular: false,
    buttonText: "Contact Sales",
    features: [
      "Everything in Intelligence",
      "Custom Multi-Country Payroll",
      "Dedicated Success Manager",
      "On-Premise Deployment Options",
      "Advanced API Access",
      "Custom SLA & White-labeling"
    ]
  }
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className="relative w-full py-32 bg-[#0A0A0A] overflow-hidden border-t border-white/5">
      {/* Immersive Background Effects */}
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Radial glows */}
      <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] bg-primary-blue/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-[40vw] h-[40vw] bg-deep-navy/20 rounded-full blur-[150px] pointer-events-none translate-x-1/2"></div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', 
          backgroundSize: '80px 80px',
          backgroundPosition: 'center center'
        }}
      ></div>

      <div className="container-enterprise relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-white text-4xl md:text-6xl font-heading font-black tracking-tighter mb-6">
              Scalable pricing for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">modern enterprises</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-body font-light mb-12">
              Transform your workforce infrastructure with plans designed to scale from growing startups to continental enterprises.
            </p>

            {/* Premium Toggle */}
            <div className="flex items-center justify-center gap-6">
              <span className={`text-sm md:text-base transition-colors ${!isAnnual ? 'text-white font-medium' : 'text-white/50'}`}>
                Monthly Billing
              </span>
              
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-16 h-8 bg-white/5 rounded-full border border-white/20 transition-all focus:outline-none hover:bg-white/10"
              >
                <motion.div
                  className="absolute top-1 w-6 h-6 bg-primary-blue rounded-full shadow-[0_0_15px_rgba(29,155,240,0.6)]"
                  animate={{ left: isAnnual ? "34px" : "4px" }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
              
              <span className={`text-sm md:text-base flex items-center gap-3 transition-colors ${isAnnual ? 'text-white font-medium' : 'text-white/50'}`}>
                Annual Billing
                <span className="bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Save 20%
                </span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
          {pricingData.map((plan, index) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-3xl p-[1px] transition-all duration-500 h-full ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-primary-blue via-primary-blue/20 to-white/5 shadow-[0_0_60px_rgba(29,155,240,0.15)] -translate-y-2 lg:-translate-y-4' 
                    : 'bg-gradient-to-b from-white/10 to-transparent hover:from-white/20'
                }`}
              >
                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#1D9BF0] text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-[0_0_20px_rgba(29,155,240,0.4)] flex items-center gap-1.5">
                      <Sparkles size={14} className="animate-pulse" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Card Inner Background */}
                <div className={`h-full rounded-[23px] p-8 md:p-10 flex flex-col relative overflow-hidden ${
                  plan.popular ? 'bg-[#0A0A0A]' : 'bg-[#0A0A0A]'
                }`}>
                  
                  {/* Subtle internal glow for popular card */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/10 blur-[80px] pointer-events-none rounded-full translate-x-1/4 -translate-y-1/4" />
                  )}

                  {/* Top Content */}
                  <div className="relative z-10">
                    <h3 className="text-white text-2xl md:text-3xl font-heading font-bold mb-3">{plan.name}</h3>
                    <p className="text-white/50 text-sm font-body h-12 leading-relaxed">{plan.description}</p>
                    
                    {/* Price Display */}
                    <div className="my-8">
                      <div className="flex items-baseline gap-2">
                        {typeof price === 'number' ? (
                          <>
                            <span className="text-white text-5xl md:text-6xl font-heading font-black tracking-tighter">${price}</span>
                            <span className="text-white/40 text-sm font-medium">/mo</span>
                          </>
                        ) : (
                          <span className="text-white text-4xl md:text-5xl font-heading font-black tracking-tighter">{price}</span>
                        )}
                      </div>
                      <div className="mt-2 text-white/40 text-xs font-medium uppercase tracking-wider h-5">
                        {typeof price === 'number' 
                          ? (isAnnual ? `Billed annually at $${price * 12}` : 'Billed monthly') 
                          : 'Tailored to your needs'
                        }
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-10 flex-grow relative z-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-0.5 shrink-0 flex items-center justify-center w-5 h-5 rounded-full ${
                          plan.popular ? 'bg-primary-blue/20 text-primary-blue' : 'bg-white/5 text-white/60'
                        }`}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className={`text-sm font-body ${plan.popular ? 'text-white/90' : 'text-white/70'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <div className="mt-auto relative z-10">
                    <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-primary-blue text-white hover:bg-white hover:text-primary-black shadow-[0_0_20px_rgba(29,155,240,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                    }`}>
                      {plan.buttonText}
                    </button>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
