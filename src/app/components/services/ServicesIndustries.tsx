import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ServicesIndustries() {
  const industries = [
    { name: "Banking & Finance", img: "https://images.unsplash.com/photo-1758519291531-e96279895745?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29ycG9yYXRlJTIwYmFua2luZ3xlbnwxfHx8fDE3ODAwMTE5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Technology", img: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdGVjaG5vbG9neSUyMGRldmVsb3BlcnxlbnwxfHx8fDE3ODAwMTE5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Retail & Logistics", img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXRhaWwlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzgwMDExOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Manufacturing", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwdGVjaCUyMGVudGVycHJpc2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzgwMDExOTA2fDA&ixlib=rb-4.1.0&q=80&w=1080" },
  ];

  return (
    <section className="relative w-full py-32 bg-[#050505] overflow-hidden">
      <div className="container-enterprise relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <h2 className="text-white text-4xl md:text-5xl lg:text-7xl font-heading font-black tracking-tight leading-[1.05]">
            Operational Sectors <br/> <span className="text-primary-blue">Dominated</span>
          </h2>
          <p className="text-white/50 text-lg max-w-sm md:text-right">
            Cross-industry expertise powering the continent's most demanding corporate sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto md:h-[600px]">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group relative w-full h-[400px] md:h-full rounded-[24px] overflow-hidden cursor-pointer"
            >
              <ImageWithFallback 
                src={ind.img} 
                alt={ind.name}
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
              />
              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-4 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="w-8 h-[2px] bg-primary-blue"></span>
                  <span className="text-white text-xs font-bold tracking-widest uppercase">Active Deployment</span>
                </div>
                <h3 className="text-white text-2xl lg:text-3xl font-heading font-bold">
                  {ind.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Text Marquee / Additional Industries list below */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-8 md:gap-16 justify-center text-white/30 font-heading text-xl font-bold uppercase tracking-widest"
        >
          <span className="hover:text-white transition-colors cursor-default">Telecom</span>
          <span className="hover:text-white transition-colors cursor-default">Healthcare</span>
          <span className="hover:text-white transition-colors cursor-default">Government</span>
          <span className="hover:text-white transition-colors cursor-default">Oil & Gas</span>
        </motion.div>

      </div>
    </section>
  );
}