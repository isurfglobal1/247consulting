import { motion } from "motion/react";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";

export function ServiceHeroB() {
  const serviceData = useContext(ServiceContext);
  if (!serviceData) return null;

  return (
    <section className="relative w-full min-h-screen bg-[#0A0A0A] flex flex-col justify-end pb-24 overflow-hidden pt-32">
      {/* Immersive Editorial Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0A0A] opacity-90 mix-blend-multiply"></div>
        <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* Subtle geometric grain or noise could go here */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      </div>

      <div className="container-enterprise relative z-10 w-full flex flex-col justify-between h-full">
        <div className="flex flex-col mb-16 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/40 text-xs font-mono tracking-widest uppercase mb-12 flex items-center gap-4"
          >
            <span className="w-10 h-px bg-white/20"></span>
            Operational Intelligence / Vol. 09
          </motion.div>

          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#E5E7EB] font-heading font-bold tracking-tighter leading-[0.85] text-[clamp(4rem,9vw,10rem)] uppercase"
            >
              <span className="block overflow-hidden pb-2">
                <motion.span 
                  initial={{ y: "100%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {serviceData.hero.words[0]}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2 text-white/40 ml-[10vw]">
                <motion.span 
                  initial={{ y: "100%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {serviceData.hero.words[1]}
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2 ml-[5vw] relative z-10">
                <motion.span 
                  initial={{ y: "100%" }} 
                  animate={{ y: 0 }} 
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {serviceData.hero.words[2]}
                </motion.span>
              </span>
            </motion.h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="md:col-span-5 text-white/50 font-light text-lg md:text-xl leading-relaxed max-w-md"
          >
            {serviceData.hero.description}
          </motion.div>
          <div className="md:col-span-3"></div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="md:col-span-4 flex justify-start md:justify-end"
          >
            <div className="flex flex-col items-start md:items-end text-left md:text-right">
              <div className="text-white font-mono text-[10px] tracking-widest uppercase mb-2">Scroll to explore</div>
              <div className="w-px h-16 bg-white/20 relative overflow-hidden">
                <motion.div 
                  initial={{ y: "-100%" }}
                  animate={{ y: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-full h-1/2 bg-white"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}