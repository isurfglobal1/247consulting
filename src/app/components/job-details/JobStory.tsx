import { motion } from "motion/react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function JobStory({ job }: { job: any }) {
  return (
    <section className="relative w-full py-40 bg-[#0A0A0A] overflow-hidden">
      <div className="container-enterprise relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="text-primary-blue font-mono text-sm tracking-widest uppercase mb-12 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary-blue" />
              Strategic Mandate
            </div>
            
            <h2 className="text-3xl md:text-[44px] font-heading font-black text-white leading-[1.1] tracking-tighter">
              {job.storyHeading} <br />
              <span className="text-white/40">{job.storySubheading}</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-12"
          >
            <p className="text-[18px] text-white/80 leading-relaxed font-light">
              {job.storyParagraph1}
            </p>
            <p className="text-[18px] text-white/60 leading-relaxed font-light">
              {job.storyParagraph2}
            </p>

            <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden">
              <ImageWithFallback 
                src={job.storyImage}
                alt="Documentary Meeting"
                className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A] to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}