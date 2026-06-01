import { motion } from "motion/react";

const steps = [
  { id: "01", title: "Discovery & Audit", desc: "Systematic mapping of your exact operational architecture and HR vulnerabilities." },
  { id: "02", title: "Strategic Sourcing", desc: "AI-assisted penetration of premium talent networks across the continent." },
  { id: "03", title: "Rigorous Verification", desc: "Military-grade compliance, background, and competency validation." },
  { id: "04", title: "Enterprise Deployment", desc: "Flawless integration of personnel and HR systems into your daily operations." }
];

export function Timeline() {
  return (
    <section className="py-[160px] bg-[#020202] relative overflow-hidden">
      {/* Minimal grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      ></div>

      <div className="container-enterprise relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 border-b border-white/10 pb-12">
          <div className="max-w-3xl">
            <h2 className="font-heading font-black text-5xl md:text-7xl text-white tracking-tight leading-none mb-6">
              The Execution <br />
              <span className="text-white/20">Protocol.</span>
            </h2>
          </div>
          <p className="text-xl text-white/50 font-light max-w-md">
            No guesswork. Just a ruthlessly engineered progression from operational audit to full-scale deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 relative">
          {/* Continuous Glowing Line */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-primary-blue shadow-[0_0_15px_rgba(29,155,240,1)]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              className="relative px-6 py-12 lg:py-0 text-center flex flex-col items-center group"
            >
              {/* Vertical line for mobile */}
              <div className="lg:hidden absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 -z-10"></div>
              
              <div className="w-[80px] h-[80px] rounded-[24px] bg-[#050505] border border-white/20 flex items-center justify-center mb-10 relative z-10 group-hover:border-primary-blue transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(29,155,240,0.3)]">
                <span className="font-heading font-black text-2xl text-white/80 group-hover:text-primary-blue transition-colors">
                  {step.id}
                </span>
                
                {/* Glowing dot on the line */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx * 0.3) + 0.5 }}
                  className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"
                />
              </div>

              <h3 className="text-2xl font-heading font-bold text-white mb-4">{step.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-[280px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
