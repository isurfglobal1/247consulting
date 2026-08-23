import { motion } from "motion/react";
import { Maximize, Shield, Zap, Cpu } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WhyChoose() {
  return (
    <section className="py-[160px] bg-[#0A0A0A] relative overflow-hidden">
      {/* Abstract Tech Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGVudGVycHJpc2UlMjB0ZWNobm9sb2d5JTIwZGF0YXxlbnwxfHx8fDE3Nzk5NzgzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Abstract Data" 
          className="w-full h-full object-cover opacity-[0.15] mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
      </div>

      <div className="container-enterprise relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="col-span-1 lg:col-span-6"
          >
            <span className="text-primary-blue font-bold tracking-[0.2em] uppercase text-xs mb-6 block flex items-center gap-3">
              <span className="w-8 h-px bg-primary-blue"></span> Why Partner With Us
            </span>
            <h2 className="font-heading font-black text-[clamp(2.375rem,5vw,4.375rem)] leading-[1] tracking-tight text-white mb-8">
              Command Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-white/60">Workforce Scale.</span>
            </h2>
            <p className="text-xl text-white/60 font-light max-w-lg mb-12">
              We replace chaotic recruitment and fragmented HR with unified, automated, and legally unassailable workforce frameworks.
            </p>

            <div className="space-y-6">
              {[
                { title: "Infinite Scalability", desc: "Deploy hundreds of vetted personnel across borders in weeks, not months.", icon: Maximize },
                { title: "Risk Mitigation", desc: "Ironclad legal compliance frameworks tailored for African enterprise law.", icon: Shield },
                { title: "AI-Assisted Processing", desc: "Machine learning algorithms slash time-to-hire by mapping optimal candidates.", icon: Cpu }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-blue group-hover:bg-primary-blue group-hover:text-white group-hover:border-primary-blue transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-heading font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm max-w-md">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-6 relative"
          >
            {/* Holographic Dashboard Concept */}
            <div className="relative rounded-[32px] bg-white/[0.02] border border-white/10 p-2 backdrop-blur-2xl shadow-[0_0_80px_rgba(29,155,240,0.1)]">
              <div className="absolute top-0 right-10 w-[200px] h-[200px] bg-primary-blue/20 blur-[100px] rounded-full"></div>
              
              <div className="bg-[#050505] rounded-[28px] border border-white/5 p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-blue/50 to-transparent"></div>
                
                <div className="flex justify-between items-end mb-12">
                  <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">System Health</div>
                    <div className="text-7xl font-heading font-black text-white tracking-tighter">99.9<span className="text-3xl text-primary-blue">%</span></div>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary-blue/10 flex items-center justify-center text-primary-blue border border-primary-blue/20">
                    <Zap size={32} />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-white/70 font-medium">Recruitment Engine</span>
                      <span className="text-primary-blue font-bold tracking-wider">OPTIMIZED</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-gradient-to-r from-primary-blue/50 to-primary-blue" initial={{ width: 0 }} whileInView={{ width: "95%" }} transition={{ duration: 2, delay: 0.5 }}></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-white/70 font-medium">Compliance Firewall</span>
                      <span className="text-white font-bold tracking-wider">SECURED</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-white" initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 2, delay: 0.8 }}></motion.div>
                    </div>
                  </div>
                </div>

                {/* Simulated Terminal Text */}
                <div className="mt-12 bg-black/50 p-4 rounded-xl border border-white/5 font-mono text-[12px] text-white/30 leading-relaxed">
                  <p className="text-primary-blue/60">{`> INITIALIZING ENTERPRISE PROTOCOL...`}</p>
                  <p>{`> VALIDATING CANDIDATE MATRICES... [OK]`}</p>
                  <p>{`> ESTABLISHING COMPLIANCE HANDSHAKE... [OK]`}</p>
                  <p className="text-white/60 animate-pulse">{`> DEPLOYMENT READY_`}</p>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
