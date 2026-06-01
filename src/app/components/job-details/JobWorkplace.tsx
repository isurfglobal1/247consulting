import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function JobWorkplace() {
  return (
    <section className="relative w-full py-40 bg-[#0A0A0A] overflow-hidden">
      <div className="container-enterprise">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-4xl md:text-[56px] font-heading font-black text-white uppercase tracking-tighter leading-[1.1] max-w-4xl">
            AN ENVIRONMENT BUILT FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary-blue to-primary-blue/30">COGNITIVE DOMINANCE.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[4/5] md:aspect-square relative overflow-hidden group"
          >
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1770992161135-e566047ddc22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBkYXJrJTIwd29ya3BsYWNlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc4MDAxOTc2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dark Architecture"
              className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">HQ / Nairobi</span>
              <p className="text-white text-xl font-bold mt-2">Executive Infrastructure</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="aspect-[4/5] md:aspect-square relative overflow-hidden group mt-0 md:mt-24"
          >
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1619927288452-502c5ff5371f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZnJpY2FuJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBkYXJrfGVufDF8fHx8MTc4MDAxOTc2OXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Team Collaboration"
              className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-8 left-8">
              <span className="font-mono text-xs uppercase tracking-widest text-white/50">Culture / Momentum</span>
              <p className="text-white text-xl font-bold mt-2">Relentless Collaboration</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}