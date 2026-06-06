import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export function FinalCTA() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full bg-[#0A0A0A] pt-12 pb-24 px-4 md:px-8">
      
      {/* Massive Dark Rounded Container */}
      <div className="max-w-[1400px] mx-auto bg-deep-navy rounded-[40px] relative overflow-hidden flex flex-col items-center py-32 px-6 shadow-2xl">
        
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-blue/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10 w-full"
        >
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-10 max-w-4xl mx-auto leading-[1.1]">
            {t("finalCta.title", "Command your workforce with unparalleled precision.")}
          </h2>
          <button className="px-10 py-5 rounded-xl bg-[#F05A28] text-white font-bold hover:bg-[#F05A28]/90 transition-colors shadow-lg text-lg">
            {t("nav.getStarted", "Get Started")}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
