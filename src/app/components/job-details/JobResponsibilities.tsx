import { motion } from "motion/react";

export function JobResponsibilities({ job }: { job: any }) {
  return (
    <section className="relative w-full py-32 bg-[#050505]">
      <div className="container-enterprise">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-[56px] font-heading font-black text-white leading-none tracking-tighter uppercase">
            OPERATIONAL <br /> <span className="text-white/30">SCOPE.</span>
          </h2>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {job.responsibilities.map((req: string, idx: number) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group border-b border-white/10 py-12 md:py-16 pl-0 md:pl-24 pr-4 transition-colors duration-500 hover:bg-white/[0.02] flex flex-col md:flex-row gap-8 md:gap-16 items-start"
            >
              <div className="text-white/20 font-mono text-2xl font-light w-12 shrink-0 group-hover:text-primary-blue transition-colors duration-300">
                0{idx + 1}
              </div>
              <p className="text-[18px] md:text-2xl text-white/80 font-light leading-relaxed tracking-tight group-hover:text-white transition-colors duration-300">
                {req}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}