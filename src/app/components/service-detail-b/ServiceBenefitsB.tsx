import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";

export function ServiceBenefitsB() {
  const serviceData = useContext(ServiceContext);
  const benefits = serviceData?.benefits || [];

  return (
    <section className="relative w-full bg-white py-40 overflow-hidden">
      <div className="container-enterprise">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col"
          >
            <div className="text-[#0A0A0A] font-heading font-black text-6xl md:text-7xl lg:text-[7rem] leading-[0.85] tracking-tighter uppercase mb-16">
              Confidence <br/>
              <span className="text-[#E5E7EB]">By Design.</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-[#102A43] text-lg font-bold font-heading mb-3">{benefit.title}</div>
                  <p className="text-[#4B5563] text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[700px] w-full bg-[#F5F7FA]"
          >
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1769636929930-9afa5fb4fae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGVudGVycHJpc2UlMjB0ZWFtfGVufDF8fHx8MTc4MDAxMzU4NXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Enterprise Team"
              className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply"
            />
            {/* Minimalist Overlay */}
            <div className="absolute top-8 left-8 p-4 bg-white shadow-xl flex items-center gap-4 border border-[#E5E7EB]">
              <div className="w-2 h-2 rounded-full bg-[#1D9BF0] animate-pulse"></div>
              <div className="text-[#0A0A0A] font-mono text-[10px] uppercase tracking-widest">Active Alignment</div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}