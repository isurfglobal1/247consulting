import { motion } from "motion/react";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ServiceHeroC() {
  const serviceData = useContext(ServiceContext);
  const words = serviceData?.hero.words || ["Premium", "Spaces", "Ecosystems."];
  const description = serviceData?.hero.description || "Designing Environments That Elevate Enterprise Potential";
  
  return (
    <section className="relative w-full h-[100vh] min-h-[800px] flex flex-col justify-end pb-32 bg-[#0A0A0A] overflow-hidden">
      
      {/* Background Environment */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src={serviceData?.narrative?.image || "https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmdXR1cmlzdGljJTIwd29ya3NwYWNlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc4MDAxNTYwNnww&ixlib=rb-4.1.0&q=80&w=1080"} 
          alt="Immersive Workspace Environment"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
        {/* Soft environmental glow */}
        <div className="absolute bottom-0 right-0 w-[80vw] h-[80vh] bg-primary-blue/5 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <div className="container-enterprise relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-10 flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 mb-12"
          >
            <div className="h-px w-24 bg-white/30"></div>
            <div className="text-white/60 font-mono text-sm tracking-[0.2em] uppercase">
              247HR / Experiential
            </div>
          </motion.div>

          <h1 className="text-white font-heading font-black tracking-tighter uppercase leading-[0.9] flex flex-col mb-12">
            {words.map((word, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 60, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <span className={`block text-[clamp(3.375rem,7vw,6.875rem)] ${idx === words.length - 1 ? 'text-white/40' : 'text-white'}`}>
                  {word}
                </span>
              </motion.div>
            ))}
          </h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl"
          >
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
              {description}
            </p>
            <div className="hidden md:flex flex-col justify-end">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-bounce">
                <div className="w-px h-4 bg-white/60"></div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}