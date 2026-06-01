import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function JobHero({ job }: { job: any }) {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#0A0A0A] flex flex-col justify-end pb-24 overflow-hidden pt-32">
      {/* Background cinematic imagery */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src={job.heroImage}
          alt={job.title}
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,155,240,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container-enterprise relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col"
          >
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="px-4 py-1.5 border border-white/20 rounded-full text-white/70 font-mono text-xs uppercase tracking-widest backdrop-blur-md">
                {job.department}
              </span>
              <span className="px-4 py-1.5 border border-white/20 rounded-full text-white/70 font-mono text-xs uppercase tracking-widest backdrop-blur-md">
                {job.location}
              </span>
              <span className="px-4 py-1.5 bg-primary-blue/10 border border-primary-blue/30 rounded-full text-primary-blue font-mono text-xs uppercase tracking-widest backdrop-blur-md">
                {job.type}
              </span>
            </div>

            <h1 className="text-[56px] md:text-[72px] font-heading font-black text-white leading-[0.9] tracking-tighter uppercase max-w-4xl">
              {job.heroHeading} <br />
              <span className="text-white/40">{job.heroSubheading}</span>
            </h1>

            <h2 className="mt-8 text-2xl md:text-3xl font-light text-white/80 max-w-2xl font-mono tracking-tight">
              {job.title}
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col gap-8 lg:pl-12 lg:border-l border-white/10"
          >
            <div className="flex flex-col gap-2">
              <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest">Experience Range</span>
              <span className="text-white text-lg tracking-wide">{job.experience}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest">Compensation Base</span>
              <span className="text-white text-lg tracking-wide">{job.compensation}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest">Application Window</span>
              <span className="text-primary-blue text-lg tracking-wide">{job.window}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}