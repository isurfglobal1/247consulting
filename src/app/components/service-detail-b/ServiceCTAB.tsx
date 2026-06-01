import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";

export function ServiceCTAB() {
  const serviceData = useContext(ServiceContext);

  return (
    <section className="relative w-full bg-[#0A0A0A] py-40 md:py-56 overflow-hidden flex flex-col justify-center items-center text-center border-t border-white/5">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#102A43]/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      </div>

      <div className="container-enterprise relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="text-white/30 text-sm font-mono tracking-widest uppercase mb-12">
            Final Directive
          </div>
          
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter leading-[1.05] mb-16">
            {serviceData?.cta.titleLines[0]} <br/> {serviceData?.cta.titleLines[1]} <br/> <span className="text-[#4B5563]">{serviceData?.cta.highlight}</span>
          </h2>

          <button className="h-[60px] px-10 rounded-none bg-white text-[#0A0A0A] font-bold text-sm hover:bg-[#1D9BF0] hover:text-white transition-colors duration-500 flex items-center gap-4 mx-auto group uppercase tracking-widest">
            {serviceData?.cta.button || "Initiate Deployment"}
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>

    </section>
  );
}