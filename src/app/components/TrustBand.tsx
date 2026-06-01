import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function TrustBand() {
  const clients = [
    "TECHCORP", "GLOBAL ENTERPRISE", "NEXUS SYSTEMS", "HORIZON BANK", "ELEVATE HEALTH", "AFRICA LOGISTICS", "VERTEX RETAIL", "SYNAPSE AI"
  ];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0A] pt-12 pb-24 border-b border-white/5">
      
      <div className="container-enterprise mb-12 flex flex-col items-center text-center">
        <h3 className="text-white/40 font-bold text-sm tracking-[0.2em] uppercase mb-4">Infrastructure Trusted By Industry Leaders</h3>
        <div className="w-12 h-1 bg-primary-blue/50 rounded-full"></div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10"></div>
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex whitespace-nowrap items-center gap-32 px-16"
        >
          {[...clients, ...clients, ...clients].map((client, idx) => (
            <span 
              key={idx} 
              className="text-2xl lg:text-3xl font-heading font-black text-white/10 hover:text-white transition-colors duration-500 tracking-tight"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
