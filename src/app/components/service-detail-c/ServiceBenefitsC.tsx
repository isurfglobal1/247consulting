import { motion } from "motion/react";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";

export function ServiceBenefitsC() {
  const serviceData = useContext(ServiceContext);
  const benefits = serviceData?.benefits || [];

  return (
    <section className="relative w-full py-40 bg-[#0A0A0A] overflow-hidden">
      <div className="container-enterprise flex flex-col gap-32">
        
        {benefits.map((benefit, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, filter: 'blur(10px)', y: 40 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row items-start md:items-baseline gap-8 md:gap-16 border-b border-white/5 pb-16"
          >
            <div className="w-full md:w-1/2">
              <h3 className="text-[clamp(2.5rem,5vw,5rem)] font-heading font-black text-white leading-[0.9] tracking-tighter uppercase">
                {benefit.title}
              </h3>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-white/50 text-xl md:text-3xl font-light leading-snug tracking-tight max-w-xl">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}