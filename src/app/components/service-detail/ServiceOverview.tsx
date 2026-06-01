import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";

export function ServiceOverview() {
  const serviceData = useContext(ServiceContext);

  return (
    <section className="relative w-full py-32 bg-[#050505] overflow-hidden">
      <div className="container-enterprise relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Asymmetrical Image Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative h-[600px]"
          >
            {/* Main structural image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-[#111]">
              <ImageWithFallback 
                src={serviceData?.narrative?.image || "https://images.unsplash.com/photo-1573164713712-03790a178651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwcHJvZmVzc2lvbmFsJTIwc2VydmVyfGVufDF8fHx8MTc4MDAxMjkxMnww&ixlib=rb-4.1.0&q=80&w=1080"} 
                alt="African Professional Server Operations"
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
            </div>

            {/* Overlapping Interface Fragment */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-10 -right-10 w-72 p-6 bg-[#0A0A0A] border border-primary-blue/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md rounded-lg hidden md:block"
            >
              <div className="text-primary-blue text-xs font-mono uppercase tracking-widest mb-4 flex justify-between">
                <span>Routing Status</span>
                <span>[Optimal]</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-white/70 text-sm">
                  <span>Candidate Match Rate</span>
                  <span className="text-white font-bold">94.8%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full">
                  <div className="w-[94.8%] h-full bg-primary-blue rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Editorial Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="text-white/40 text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[2px] bg-primary-blue"></span>
              Operational Narrative
            </div>
            
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.1] mb-8">
              Replacing Guesswork <br/> With <span className="text-white/30">Architecture.</span>
            </h2>

            <div className="space-y-6 text-white/60 text-lg font-light leading-relaxed">
              <p>
                Traditional recruitment relies on networks and intuition. We construct a multi-layered talent acquisition infrastructure that treats hiring as an engineering problem.
              </p>
              <p>
                By mapping African talent markets through advanced data algorithms and rigorous compliance vetting, we eliminate friction. The result is an acquisition pipeline that scales infinitely while maintaining uncompromising precision.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-heading font-black text-white mb-2">100%</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-mono">System Reliability</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-black text-white mb-2">Multi-Geo</div>
                <div className="text-xs text-primary-blue uppercase tracking-widest font-mono">Deployment Ready</div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}