import { motion } from "motion/react";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";

export function ServiceSolutionsC() {
  const serviceData = useContext(ServiceContext);
  // Fallback if no solutions exist on the service
  const solutions = serviceData?.solutions || [
    { title: "Enterprise Transformation", description: "A multi-layered ecosystem upgrade aligning physical space with executive output." },
    { title: "Continuous Human Capital Integration", description: "Always-on development architectures embedded into daily operations." }
  ];

  if (solutions.length === 0) return null;

  return (
    <section className="relative w-full py-40 bg-[#050505] overflow-hidden">
      <div className="container-enterprise">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <div className="text-white/30 font-mono text-sm tracking-widest uppercase mb-4">Engagement Architecture</div>
          <div className="w-full h-px bg-white/10"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {solutions.map((solution, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col md:flex-row justify-between items-start md:items-center p-12 md:p-16 border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-700 overflow-hidden"
            >
              {/* Subtle hover environment strip */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/0 via-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-0"></div>

              <div className="relative z-10 w-full md:w-1/2 mb-8 md:mb-0">
                <div className="text-white/20 font-mono text-lg mb-4">0{idx + 1} // Phase</div>
                <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tighter">
                  {solution.title}
                </h3>
              </div>
              
              <div className="relative z-10 w-full md:w-1/2 md:pl-16">
                <p className="text-white/60 text-lg leading-relaxed font-light">
                  {solution.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}