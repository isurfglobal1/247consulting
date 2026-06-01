import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";

export function ServiceTrust() {
  const serviceData = useContext(ServiceContext);
  const benefits = serviceData?.benefits || [];
  const stats = serviceData?.stats || [];

  return (
    <section className="relative w-full py-32 bg-[#020202] overflow-hidden">
      
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1639313521811-fdfb1c040ddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwdGVjaCUyMGNvbnRyb2wlMjByb29tfGVufDF8fHx8MTc4MDAxMjkxMXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="High Tech Operations"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-[#020202]"></div>
      </div>

      <div className="container-enterprise relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter leading-[1] mb-8">
              Engineered <br/> For Absolute <br/> <span className="text-primary-blue">Reliability.</span>
            </h2>
            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
              When scaling across Africa, intuition is insufficient. You require structural certainty. We combine deep local operational knowledge with military-grade systemic precision.
            </p>

            <div className="space-y-6">
              {benefits.slice(0, 3).map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full border border-primary-blue/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary-blue"></div>
                  </div>
                  <span className="text-white text-lg font-medium tracking-wide">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-6 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 md:gap-6 relative z-10"
            >
              {stats.slice(0, 4).map((metric, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center items-center text-center group hover:bg-primary-blue/10 hover:border-primary-blue/30 transition-colors duration-500">
                  <div className="text-4xl md:text-5xl font-heading font-black text-white mb-2 group-hover:text-primary-blue transition-colors">
                    {metric.num}
                  </div>
                  <div className="text-white/40 text-xs font-bold tracking-widest uppercase font-mono">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Glowing blur behind metrics */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary-blue/20 blur-[100px] rounded-full z-0 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
}