import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative w-full min-h-[95vh] bg-[#F5F7FA] overflow-hidden flex flex-col pt-32">
      {/* Structural Brutalist Grid Lines */}
      <div className="absolute inset-0 pointer-events-none flex justify-center z-0">
        <div className="w-full max-w-[1440px] h-full grid grid-cols-12 gap-6 px-6 lg:px-12">
          {[...Array(13)].map((_, i) => (
            <div key={i} className="h-full w-px bg-primary-black/[0.04]"></div>
          ))}
        </div>
      </div>
      
      {/* Horizontal structural lines */}
      <div className="absolute top-[30%] left-0 w-full h-px bg-primary-black/[0.04] z-0"></div>
      <div className="absolute top-[65%] left-0 w-full h-px bg-primary-black/[0.04] z-0"></div>

      <div className="container-enterprise relative z-10 flex-1 flex flex-col justify-center pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          
          {/* Top Left: Meta Data */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3 pb-8 lg:pb-0 order-2 lg:order-1"
          >
            <div className="flex flex-col gap-8">
              <div>
                <div className="text-primary-black/40 text-xs font-bold tracking-widest uppercase mb-2">System</div>
                <div className="text-primary-black font-mono text-sm">SYS.OP.247 // ACTIVE</div>
              </div>
              <div>
                <div className="text-primary-black/40 text-xs font-bold tracking-widest uppercase mb-2">Scope</div>
                <div className="text-primary-black font-medium">Pan-African Enterprise<br/>Workforce Operations</div>
              </div>
            </div>
          </motion.div>

          {/* Center/Right: Massive Editorial Typography */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-9 order-1 lg:order-2 mb-12 lg:mb-0"
          >
            <h1 className="font-heading font-black text-[clamp(3.5rem,8vw,9rem)] leading-[0.85] tracking-tighter text-primary-black uppercase">
              WORKFORCE <br/>
              <span className="flex items-center gap-4">
                <span className="w-16 md:w-32 h-[8px] md:h-[12px] bg-primary-blue mt-4"></span>
                ARCHITECTURE
              </span>
            </h1>
          </motion.div>

        </div>

        {/* Bottom Section: Description & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-16 lg:mt-32 pt-12 border-t border-primary-black/10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:col-span-5 lg:col-start-4"
          >
            <p className="text-xl md:text-2xl text-primary-black/70 font-light leading-relaxed">
              We do not provide standard HR services. We engineer, deploy, and manage the human capital infrastructure required for high-growth enterprises to scale without friction.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="lg:col-span-4 flex justify-start lg:justify-end items-start"
          >
            <button className="group flex items-center justify-between w-full lg:w-auto gap-12 pb-4 border-b-2 border-primary-black text-primary-black hover:text-primary-blue hover:border-primary-blue transition-colors">
              <span className="font-bold text-lg tracking-wide uppercase">Deploy Systems</span>
              <ArrowDownRight size={24} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}