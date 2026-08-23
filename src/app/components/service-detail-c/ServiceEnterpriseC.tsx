import { motion } from "motion/react";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ServiceEnterpriseC() {
  const serviceData = useContext(ServiceContext);
  const narrative = serviceData?.narrative?.paragraphs[0] || "We build the structures that allow visionary leadership to focus exclusively on systemic growth.";
  const stats = serviceData?.stats || [];

  return (
    <section className="relative w-full min-h-[900px] py-40 bg-[#0A0A0A] flex flex-col justify-center overflow-hidden">
      
      {/* Background cinematic blend */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1758519289714-519a9d9b96e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbGVhZGVycyUyMHN0dWR5aW5nJTIwbWVldGluZyUyMHByZW1pdW18ZW58MXx8fHwxNzgwMDE1NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Enterprise Architecture"
          className="w-full h-full object-cover opacity-20 mix-blend-screen grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]"></div>
        
        {/* Subtle motion light */}
        <motion.div 
          animate={{ x: ["-10%", "10%", "-10%"], y: ["-10%", "10%", "-10%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-primary-blue/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"
        />
      </div>

      <div className="container-enterprise relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto mb-32"
        >
          <h2 className="text-white text-3xl md:text-5xl lg:text-[4rem] font-heading font-black leading-[1.1] tracking-tighter uppercase mb-12">
            {narrative}
          </h2>
          <div className="w-px h-24 bg-white/20 mx-auto"></div>
        </motion.div>

        {stats.length > 0 && (
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 pt-16 border-t border-white/5">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
              >
                <div className="text-[clamp(3.875rem,8vw,7.875rem)] font-heading font-black text-white leading-none tracking-tighter mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  {stat.num}
                </div>
                <div className="text-white/40 font-mono text-sm tracking-[0.2em] uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}