import { motion } from "motion/react";
import { Zap, Expand, Layers, ShieldCheck, Cpu, Database, Network } from "lucide-react";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";

const getIcon = (idx: number) => {
  const icons = [<Zap size={24} />, <Expand size={24} />, <Layers size={24} />, <ShieldCheck size={24} />, <Cpu size={24} />, <Database size={24} />, <Network size={24} />];
  return icons[idx % icons.length];
};

export function ServiceCapabilities() {
  const serviceData = useContext(ServiceContext);
  const capabilities = serviceData?.features || [];

  return (
    <section className="relative w-full py-32 bg-[#020202] border-t border-white/5 overflow-hidden">
      
      {/* Background Kinetic Pathways */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex justify-center items-center">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.2"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-enterprise relative z-10">
        
        <div className="mb-20">
          <div className="inline-block px-3 py-1 border border-primary-blue/30 bg-primary-blue/5 text-primary-blue text-xs font-mono uppercase tracking-widest mb-6">
            System Capabilities Matrix
          </div>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.05] max-w-3xl">
            Operational Architecture <br/>
            <span className="text-white/30">Built To Dominate.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          
          {/* Center Connector (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-px bg-white/5 pointer-events-none z-0"></div>
          <div className="hidden md:block absolute top-[10%] left-1/2 -translate-x-1/2 w-px h-[80%] bg-white/5 pointer-events-none z-0"></div>

          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative p-8 md:p-10 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-primary-blue/40 transition-colors duration-500 group overflow-hidden z-10"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:text-primary-blue group-hover:scale-110 transition-all duration-500 shadow-xl">
                  {getIcon(idx)}
                </div>
                <div className="text-white/20 font-mono text-2xl font-bold group-hover:text-primary-blue/30 transition-colors">
                  0{idx + 1}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-heading font-bold text-white mb-4">{cap.title}</h3>
                <p className="text-white/50 leading-relaxed font-light">{cap.description}</p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}