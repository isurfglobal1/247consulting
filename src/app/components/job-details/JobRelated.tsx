import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { jobsData } from "../../data/jobs";

export function JobRelated() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Filter out the current job and only show max 2 related roles
  const related = jobsData.filter(job => job.id !== id).slice(0, 2);

  return (
    <section className="relative w-full py-32 bg-[#0A0A0A]">
      <div className="container-enterprise">
        <div className="text-white/40 font-mono text-xs uppercase tracking-widest mb-12">
          Parallel Opportunities
        </div>

        <div className="flex flex-col border-t border-white/10">
          {related.map((role, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              onClick={() => navigate(`/careers/${role.id}`)}
              className="group cursor-pointer py-10 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between transition-colors duration-500 hover:bg-white/[0.02] px-4"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl md:text-[32px] font-heading font-bold text-white group-hover:text-primary-blue transition-colors duration-300">
                  {role.title}
                </h3>
                <span className="text-white/50 font-mono text-[12px] uppercase tracking-widest">
                  {role.department}
                </span>
              </div>
              
              <div className="mt-6 md:mt-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary-black group-hover:-rotate-45 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}