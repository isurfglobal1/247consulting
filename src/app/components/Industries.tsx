import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const industries = [
  "Technology", "Banking", "Telecom", "Healthcare", "Logistics", "Retail", "Government", "Manufacturing"
];

export function Industries() {
  return (
    <section className="py-[120px] bg-soft-gray">
      <div className="container-enterprise">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-h2 text-primary-black mb-6">Cross-Sector Operational Dominance</h2>
            <p className="text-body-lg text-text-gray">
              We deploy specialized talent and HR frameworks tailored strictly to the regulatory and operational demands of your specific industry.
            </p>
          </div>
          <button className="flex items-center gap-2 text-primary-black font-medium hover:text-primary-blue transition-colors">
            View Case Studies <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((industry, idx) => (
            <motion.div 
              key={industry}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative h-[240px] rounded-[16px] overflow-hidden bg-white cursor-pointer border border-neutral-gray"
            >
              <div className="absolute inset-0 bg-primary-black opacity-0 group-hover:opacity-90 transition-opacity duration-500 z-10"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                <h3 className="text-2xl font-heading font-bold text-primary-black group-hover:text-white transition-colors duration-500 transform group-hover:-translate-y-4">
                  {industry}
                </h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  Specialized workforce deployment and compliance systems.
                </p>
              </div>

              {/* Decorative Blue Accents on Hover */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary-blue/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
