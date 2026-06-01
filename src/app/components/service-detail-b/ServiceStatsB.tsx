import { motion } from "motion/react";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";

export function ServiceStatsB() {
  const serviceData = useContext(ServiceContext);
  const stats = serviceData?.stats || [];

  return (
    <section className="relative w-full bg-[#102A43] py-40 overflow-hidden text-white">
      
      <div className="container-enterprise relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="text-[#1D9BF0] text-xs font-mono uppercase tracking-widest mb-6">Metrics & Scale</div>
              <h2 className="text-4xl font-heading font-bold leading-tight mb-8">
                The Arithmetic of Reliability.
              </h2>
            </div>
            <p className="text-white/60 text-lg leading-relaxed max-w-sm">
              We measure success not in effort, but in absolute, documented output. Our systems are engineered to eliminate operational failure points.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 md:gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="flex flex-col border-l border-white/20 pl-6 lg:pl-10 py-4"
              >
                <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter mb-4 text-white">
                  {stat.num}
                </div>
                <div className="text-white/50 text-sm font-mono uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}