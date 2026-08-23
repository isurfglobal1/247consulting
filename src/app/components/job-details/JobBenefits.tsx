import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function JobBenefits() {
  const benefits = [
    "Uncapped Executive Mentorship",
    "Global Enterprise Exposure",
    "Sovereign Operational Flexibility",
    "Premium Family Healthcare",
    "Aggressive Capital Growth Equity"
  ];

  return (
    <section className="relative w-full py-32 bg-[#050505]">
      <div className="container-enterprise">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/2 aspect-[4/5] relative overflow-hidden group">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1690983320828-c01b88baacb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcmNoaXRlY3R1cmUlMjB0ZXh0dXJlJTIwZGFya3xlbnwxfHx8fDE3ODAwMTk3Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Luxury Architecture"
              className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] to-transparent" />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-[42px] font-heading font-black text-white leading-[1.1] tracking-tighter uppercase mb-12">
              THE <br /> <span className="text-white/30">LIFESTYLE RETURN.</span>
            </h2>
            
            <div className="flex flex-col gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-6"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-blue shadow-[0_0_10px_rgba(29,155,240,0.8)]" />
                  <span className="text-[16px] md:text-xl text-white/80 font-light tracking-wide">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-white/50 text-[16px] font-light mt-12 leading-relaxed max-w-md">
              We understand that elite talent requires an ecosystem that supports holistic optimization. The benefits package is designed to remove friction from your personal and professional life.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}