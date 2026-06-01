import { motion } from "motion/react";
import { Check, Shield, GitMerge, Fingerprint, Layers, Cpu, Radio, Network } from "lucide-react";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";

// Simple mapping for icons based on index
const getIcon = (idx: number) => {
  const icons = [<Shield size={20} />, <Fingerprint size={20} />, <GitMerge size={20} />, <Layers size={20} />, <Cpu size={20} />, <Radio size={20} />, <Network size={20} />];
  return icons[idx % icons.length];
};

export function ServiceFeaturesB() {
  const serviceData = useContext(ServiceContext);
  const features = serviceData?.features || [];

  return (
    <section className="relative w-full bg-white py-32 overflow-hidden border-t border-[#E5E7EB]">
      <div className="container-enterprise">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-8">
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-heading font-black text-[#0A0A0A] tracking-tighter leading-[0.9] uppercase max-w-2xl">
            Structural <br/> Components
          </h2>
          <div className="text-[#4B5563] text-sm max-w-xs leading-relaxed">
            The architectural pillars that define our elite support ecosystems.
          </div>
        </div>

        <div className="w-full flex flex-col">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group flex flex-col md:flex-row md:items-center justify-between py-10 border-t border-[#E5E7EB] hover:bg-[#F5F7FA] transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8"
            >
              <div className="flex items-center gap-8 md:gap-16 w-full md:w-1/2 mb-4 md:mb-0">
                <div className="text-[#102A43] opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  {getIcon(idx)}
                </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#0A0A0A]">
                  {feat.title}
                </h3>
              </div>
              
              <div className="w-full md:w-1/3 text-[#4B5563] text-base leading-relaxed pr-8">
                {feat.description}
              </div>

              <div className="hidden md:flex w-12 h-12 rounded-full border border-[#E5E7EB] items-center justify-center text-[#0A0A0A] group-hover:bg-[#102A43] group-hover:text-white group-hover:border-[#102A43] transition-all duration-500">
                <Check size={16} />
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#E5E7EB] w-full"></div>
        </div>

      </div>
    </section>
  );
}