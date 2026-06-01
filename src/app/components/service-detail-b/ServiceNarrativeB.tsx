import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useContext } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ServiceContext } from "../../ServiceDetail";

export function ServiceNarrativeB() {
  const serviceData = useContext(ServiceContext);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef as any,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef as any} style={{ position: "relative" }} className="relative w-full bg-[#F5F7FA] py-40 md:py-56 overflow-hidden">
      
      <div className="container-enterprise relative z-10">
        
        {/* Editorial Pull Quote */}
        <div className="max-w-4xl mx-auto text-center mb-40">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-heading font-medium tracking-tight text-[#0A0A0A] leading-[1.1]"
          >
            "Scale is meaningless without <span className="text-[#4B5563] italic">structural certainty</span>. We replace operational friction with architectural silence."
          </motion.h2>
          <div className="mt-8 text-[#4B5563] font-mono text-xs uppercase tracking-widest">
            — The 247HR Operational Philosophy
          </div>
        </div>

        {/* Asymmetrical Image/Text Fusion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          <div className="lg:col-span-5 relative">
            <motion.div style={{ y: y1 }} className="relative z-10 w-[90%] mx-auto lg:w-full">
              <div className="aspect-[3/4] overflow-hidden bg-[#E5E7EB]">
                <ImageWithFallback 
                  src={serviceData?.narrative?.image || "https://images.unsplash.com/photo-1758611972971-1c8b9c6d7822?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29ycG9yYXRlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc4MDAxMzU4NXww&ixlib=rb-4.1.0&q=80&w=1080"}
                  alt="Enterprise Workspace"
                  className="w-full h-full object-cover grayscale mix-blend-multiply opacity-90 contrast-125"
                />
              </div>
            </motion.div>
            
            <motion.div 
              style={{ y: y2 }} 
              className="absolute -bottom-16 -right-8 w-1/2 aspect-square bg-white shadow-2xl p-6 hidden md:flex flex-col justify-between z-20"
            >
              <div className="text-[#1D9BF0] font-mono text-[10px] uppercase tracking-widest">Data point</div>
              <div className="text-3xl font-heading font-black text-[#0A0A0A]">100%</div>
              <div className="text-xs text-[#4B5563] font-medium uppercase tracking-wide">Verification Accuracy</div>
            </motion.div>
          </div>

          <div className="lg:col-span-2"></div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-12 h-px bg-[#0A0A0A] mb-8"></div>
              <h3 className="text-4xl lg:text-5xl font-heading font-black text-[#0A0A0A] mb-8 tracking-tight">
                {serviceData?.narrative?.title || "Process Intelligence."}
              </h3>
              <div className="space-y-6 text-[#4B5563] text-lg font-light leading-relaxed">
                {serviceData?.narrative?.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                )) || (
                  <>
                    <p>
                      In the modern enterprise ecosystem, operational support is no longer a cost center—it is a strategic differentiator. We design back-office and customer operations that function with the precision of a high-performance engine.
                    </p>
                    <p>
                      Every layer of our support infrastructure is meticulously mapped, documented, and executed by elite personnel. We remove the burden of day-to-day management, allowing your leadership to focus exclusively on systemic growth.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}