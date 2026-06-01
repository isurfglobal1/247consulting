import { motion } from "motion/react";
import { useContext } from "react";
import { ServiceContext } from "../../ServiceDetail";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ServiceGalleryC() {
  const serviceData = useContext(ServiceContext);
  const gallery = serviceData?.gallery || [
    "https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmdXR1cmlzdGljJTIwd29ya3NwYWNlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc4MDAxNTYwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1775486133942-91039b202e06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNwYXRpYWwlMjBhcmNoaXRlY3R1cmUlMjBkYXJrJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzgwMDE1NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1758519289714-519a9d9b96e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwbGVhZGVycyUyMHN0dWR5aW5nJTIwbWVldGluZyUyMHByZW1pdW18ZW58MXx8fHwxNzgwMDE1NjI3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  if (gallery.length < 3) return null;

  return (
    <section className="relative w-full py-40 bg-[#050505] overflow-hidden">
      <div className="container-enterprise">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="text-white/40 font-mono text-sm tracking-widest uppercase mb-6">Gallery / Environments</div>
          <h2 className="text-white text-3xl md:text-5xl font-heading font-black tracking-tighter">
            Architectural <span className="text-primary-blue">Exhibition</span>
          </h2>
        </div>
      </div>

      <div className="relative w-full px-4 md:px-12 flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center h-auto md:h-[800px]">
        
        {/* Left Image */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full md:w-[30vw] h-[50vh] md:h-[60vh] -translate-y-0 md:-translate-y-12 z-10"
        >
          <ImageWithFallback 
            src={gallery[0]}
            alt="Environment 1"
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 grayscale"
          />
        </motion.div>

        {/* Center Image (Main) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative w-full md:w-[45vw] h-[60vh] md:h-[75vh] z-20 shadow-2xl"
        >
          <ImageWithFallback 
            src={gallery[1]}
            alt="Environment 2"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay on center to give it cinematic pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </motion.div>

        {/* Right Image */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative w-full md:w-[25vw] h-[40vh] md:h-[50vh] translate-y-0 md:translate-y-16 z-10"
        >
          <ImageWithFallback 
            src={gallery[2]}
            alt="Environment 3"
            className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-700 grayscale"
          />
        </motion.div>

      </div>
    </section>
  );
}