import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";

export function ServiceCTA() {
  const serviceData = useContext(ServiceContext);

  return (
    <section className="relative w-full py-40 bg-[#000] overflow-hidden flex items-center justify-center min-h-[60vh]">
      
      {/* Deep atmospheric environment */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary-blue/20 rounded-[100%] blur-[120px] pointer-events-none"></div>
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wIDQwLjVoNDBWMG0zOS41IDB2NDAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,transparent,black_50%,transparent)]"></div>
      </div>

      <div className="container-enterprise relative z-10 text-center max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-1 rounded-sm border border-primary-blue/30 mb-8 bg-primary-blue/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary-blue animate-pulse"></span>
            <span className="text-primary-blue text-xs font-mono uppercase tracking-widest">System Ready For Deployment</span>
          </div>

          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter leading-[0.95] mb-10">
            {serviceData?.cta.titleLines[0]} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-white">{serviceData?.cta.titleLines[1]} {serviceData?.cta.highlight}</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <button className="h-[60px] px-10 rounded-sm bg-white text-primary-black font-bold text-lg hover:bg-primary-blue hover:text-white transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(29,155,240,0.4)] flex items-center gap-3 group uppercase tracking-wider">
              {serviceData?.cta.button || "Initialize Consultation"}
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}