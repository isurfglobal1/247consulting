import { motion } from "motion/react";
import { Globe2, ShieldCheck, TrendingUp } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Metrics() {
  const { t } = useLanguage();
  const features = [
    {
      icon: <Globe2 className="text-primary-blue w-6 h-6" />,
      title: t("metrics.f1.title", "Workforce Scalability"),
      description: t("metrics.f1.desc", "Navigate complex African labor frameworks with dynamically updated legal intelligence and automated regulatory reporting."),
      color: "from-primary-blue/20 to-primary-blue/5"
    },
    {
      icon: <ShieldCheck className="text-green-400 w-6 h-6" />,
      title: t("metrics.f2.title", "HR Automation"),
      description: t("metrics.f2.desc", "Encrypted, on-continent data localization ensuring absolute compliance with regional data protection directives."),
      color: "from-green-400/20 to-green-400/5"
    },
    {
      icon: <TrendingUp className="text-purple-400 w-6 h-6" />,
      title: t("metrics.f3.title", "Compliance Systems"),
      description: t("metrics.f3.desc", "Transform raw continental workforce data into actionable, board-level strategic insights and predictive modeling."),
      color: "from-purple-400/20 to-purple-400/5"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[#0A0A0A] overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/10 rounded-bl-full blur-2xl"></div>
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-orange-500/10 rounded-r-full blur-2xl"></div>

      <div className="container-enterprise relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-white text-3xl md:text-5xl font-heading font-black tracking-tight mb-6">
            Architecting the future of <span className="text-primary-blue">African enterprise</span> workforce management.
          </h2>
        </motion.div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
          
          {/* Vertical Dividers for Desktop */}
          <div className="hidden md:block absolute top-10 bottom-10 left-[33%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          <div className="hidden md:block absolute top-10 bottom-10 left-[66%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center px-4"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} border border-white/5 flex items-center justify-center mb-6 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-heading font-bold mb-4">{feature.title}</h3>
              <p className="text-white/50 text-sm md:text-base font-body leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
