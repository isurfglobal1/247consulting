import { motion } from "motion/react";

export function JobQualifications({ job }: { job: any }) {
  return (
    <section className="relative w-full py-32 bg-[#0A0A0A]">
      <div className="container-enterprise">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-[44px] font-heading font-black text-white leading-[1.1] tracking-tighter uppercase mb-6">
                ELITE <br /> <span className="text-white/30">STANDARDS.</span>
              </h2>
              <p className="text-white/50 text-[18px] font-light max-w-sm">
                We do not compromise on caliber. This role requires an individual who combines intellectual rigor with extreme operational velocity.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-16">
            {job.qualifications.map((qual: any, idx: number) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="flex flex-col"
              >
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {qual.title}
                </h3>
                <p className="text-[18px] text-white/60 font-light leading-relaxed">
                  {qual.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}