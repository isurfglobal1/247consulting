import { motion } from "motion/react";

export function ServicesStrategy() {
  const points = [
    {
      num: "01",
      title: "Operational Scalability",
      desc: "Our systems expand dynamically. Whether deploying 50 executives or 5,000 field agents, infrastructure adjusts to volume without structural breakage."
    },
    {
      num: "02",
      title: "Compliance Infrastructure",
      desc: "Navigating African labor laws requires precision. We provide a legal and financial shield guaranteeing 100% compliance across all active jurisdictions."
    },
    {
      num: "03",
      title: "AI-Assisted Intelligence",
      desc: "Predictive algorithms map talent markets, accelerating recruitment velocity while radically improving retention probability across the board."
    }
  ];

  return (
    <section className="relative w-full py-32 bg-[#F5F7FA] overflow-hidden">
      <div className="container-enterprise relative z-10">
        
        <div className="mb-24 flex items-center justify-between">
          <h2 className="text-primary-black text-3xl md:text-5xl font-heading font-black tracking-tighter uppercase">
            System Advantages
          </h2>
          <div className="hidden md:block w-1/3 h-px bg-primary-black/20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-primary-black/10">
          {points.map((pt, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`p-8 lg:p-12 ${idx !== 2 ? 'md:border-r' : ''} border-primary-black/10 group hover:bg-white transition-colors duration-500`}
            >
              <div className="text-primary-blue font-mono text-sm mb-12">
                [{pt.num}]
              </div>
              <h3 className="text-2xl font-heading font-black text-primary-black mb-6 uppercase tracking-tight group-hover:text-primary-blue transition-colors">
                {pt.title}
              </h3>
              <p className="text-primary-black/60 leading-relaxed">
                {pt.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}