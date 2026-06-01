import { motion } from "motion/react";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";

export function ServiceProcess() {
  const serviceData = useContext(ServiceContext);
  const steps = serviceData?.process || [
    { num: "01", title: "Diagnostic Mapping", desc: "A rigorous audit of your existing infrastructure to identify vulnerabilities." },
    { num: "02", title: "Protocol Design", desc: "Engineering custom operational workflows based on the diagnostic data." },
    { num: "03", title: "System Activation", desc: "Executing the protocols across your deployed workforce ecosystem." }
  ];

  return (
    <section className="relative w-full py-32 bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="container-enterprise relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <div className="text-primary-blue font-mono text-sm tracking-widest uppercase mb-6">Execution Protocol</div>
          <h2 className="text-white text-4xl md:text-6xl font-heading font-black tracking-tight leading-[1.05]">
            Cinematic Process <br/> <span className="text-white/30">Architecture</span>
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main logistical pathway (Vertical line on mobile, Horizontal on desktop) */}
          <div className="absolute left-[28px] md:left-0 md:top-12 md:left-0 w-px h-full md:w-full md:h-px bg-white/10 z-0">
            <motion.div 
              initial={{ scaleY: 0, scaleX: 0 }}
              whileInView={{ scaleY: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full md:w-full md:h-full bg-gradient-to-b md:bg-gradient-to-r from-transparent via-primary-blue to-transparent origin-top md:origin-left"
            ></motion.div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-${steps.length} gap-12 md:gap-8 relative z-10`}>
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-0 group"
              >
                {/* Node */}
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#050505] border-2 border-white/20 flex items-center justify-center text-white/50 font-mono text-xs md:mb-8 group-hover:border-primary-blue group-hover:text-primary-blue group-hover:bg-primary-blue/10 transition-all duration-500 relative shadow-[0_0_20px_rgba(0,0,0,0.8)] z-10">
                  {idx + 1}
                  {/* Glowing ring on hover */}
                  <div className="absolute inset-0 rounded-full border border-primary-blue/0 group-hover:border-primary-blue/50 group-hover:animate-ping transition-all duration-500"></div>
                </div>
                
                {/* Content */}
                <div>
                  <div className="text-primary-blue/60 text-[10px] font-mono tracking-widest uppercase mb-2">
                    {step.num}
                  </div>
                  <h3 className="text-white text-xl font-bold font-heading mb-3">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}