import { motion } from "motion/react";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ServiceFeatureShowcaseC() {
  const serviceData = useContext(ServiceContext);
  const features = serviceData?.features || [];

  const immersiveImages = serviceData?.featureImages || [
    "https://images.unsplash.com/photo-1737474707380-5ef35770d8a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBhYnN0cmFjdCUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzgwMDE1NjczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1497366412874-3415097a27e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMGJ1aWxkaW5nJTIwbHV4dXJ5JTIwbW9kZXJuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzgwMDE1Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY29ycG9yYXRlJTIwY29sbGFib3JhdGlvbiUyMG1lZXRpbmclMjByb29tfGVufDF8fHx8MTc4MDAxNTY3OXww&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  return (
    <section className="relative w-full py-40 bg-[#0A0A0A] overflow-hidden">
      <div className="container-enterprise">
        
        <div className="flex flex-col mb-32">
          <h2 className="text-white font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter max-w-2xl leading-[1]">
            Experiential <span className="text-white/30">Architecture.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-40">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/5] w-full overflow-hidden">
                  <ImageWithFallback 
                    src={immersiveImages[idx % immersiveImages.length]} 
                    alt={feat.title}
                    className="w-full h-full object-cover grayscale mix-blend-luminosity hover:grayscale-0 hover:scale-105 transition-all duration-[2s] ease-out"
                  />
                </div>
                <div className={`absolute top-1/2 -translate-y-1/2 ${idx % 2 !== 0 ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'} hidden lg:block`}>
                  <div className="text-white/10 font-heading font-black text-[12rem] leading-none select-none tracking-tighter">
                    0{idx + 1}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div className="text-primary-blue font-mono text-sm tracking-widest uppercase mb-8">
                  System Component // 0{idx + 1}
                </div>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 leading-[1.1] tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}