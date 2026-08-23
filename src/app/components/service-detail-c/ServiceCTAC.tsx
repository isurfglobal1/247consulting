import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";

export function ServiceCTAC() {
  const serviceData = useContext(ServiceContext);
  const lines = serviceData?.cta.titleLines || ["Build Exceptional Work", "Environments for the Future"];
  const highlight = serviceData?.cta.highlight || "Transform Today.";
  const button = serviceData?.cta.button || "Initiate Engagement";

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#000000] overflow-hidden py-32">
      
      {/* Deep atmospheric lighting */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(29,155,240,0.08)_0%,rgba(0,0,0,1)_70%)]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-primary-blue/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container-enterprise relative z-10 flex flex-col items-center text-center px-4">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-6xl w-full"
        >
          <div className="text-white/30 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-16 relative">
            <span className="relative z-10">Strategic Ignition</span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-px bg-white/10 -z-0"></div>
          </div>

          <h2 className="text-[clamp(2.875rem,8vw,8.875rem)] font-heading font-black text-white leading-[0.85] tracking-tighter uppercase mb-16 flex flex-col items-center">
            {lines.map((line, i) => (
              <span key={i} className="block relative z-10">
                {line}
              </span>
            ))}
            <span className="block text-white/20 mt-4 relative z-10">
              {highlight}
            </span>
          </h2>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-6 bg-white text-primary-black overflow-hidden flex items-center gap-6"
          >
            {/* Button highlight sweep */}
            <div className="absolute inset-0 bg-primary-blue -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
            
            <span className="relative z-10 font-mono text-sm tracking-widest uppercase font-bold group-hover:text-white transition-colors duration-500">
              {button}
            </span>
            <ArrowRight size={20} className="relative z-10 group-hover:text-white transition-colors duration-500 group-hover:translate-x-2" />
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
}