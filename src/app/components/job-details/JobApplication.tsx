import { motion } from "motion/react";
import { Upload } from "lucide-react";
import { useState } from "react";

export function JobApplication() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const fields = [
    { id: "name", label: "Full Legal Name", type: "text" },
    { id: "email", label: "Executive Contact Email", type: "email" },
    { id: "phone", label: "Direct Phone Line", type: "tel" },
    { id: "linkedin", label: "LinkedIn Profile URL", type: "url" },
    { id: "portfolio", label: "Portfolio / Case Studies URL (Optional)", type: "url" }
  ];

  return (
    <section id="application-section" className="relative w-full py-40 bg-[#0A0A0A]">
      <div className="container-enterprise max-w-4xl mx-auto">
        
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-[44px] font-heading font-black text-white uppercase tracking-tighter mb-4">
            SUBMIT CREDENTIALS
          </h2>
          <p className="text-white/50 font-light text-[18px]">
            Please provide accurate and up-to-date professional documentation.
          </p>
        </div>

        <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
          
          <div className="flex flex-col gap-6">
            {fields.map((field) => (
              <div 
                key={field.id}
                className="relative group"
              >
                <div 
                  className={`absolute inset-0 bg-primary-blue/5 rounded-lg transition-opacity duration-500 ${focusedField === field.id ? 'opacity-100' : 'opacity-0'}`}
                />
                <div 
                  className={`absolute -inset-[1px] rounded-lg bg-gradient-to-r from-primary-blue/30 to-transparent transition-opacity duration-500 ${focusedField === field.id ? 'opacity-100' : 'opacity-0'}`}
                />
                <input 
                  type={field.type}
                  id={field.id}
                  placeholder=" "
                  onFocus={() => setFocusedField(field.id)}
                  onBlur={() => setFocusedField(null)}
                  className="peer relative w-full bg-[#050505] text-white px-6 pt-8 pb-4 rounded-lg border border-white/10 outline-none transition-all duration-300 focus:border-primary-blue/50 text-[18px] font-light placeholder-transparent"
                />
                <label 
                  htmlFor={field.id}
                  className="absolute left-6 top-6 text-white/40 text-[18px] font-light transition-all duration-300 peer-focus:top-3 peer-focus:text-[12px] peer-focus:text-primary-blue peer-focus:font-mono peer-focus:uppercase peer-focus:tracking-widest peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-white/60 peer-[:not(:placeholder-shown)]:font-mono peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-widest pointer-events-none"
                >
                  {field.label}
                </label>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="relative group cursor-pointer h-40 flex flex-col items-center justify-center border border-dashed border-white/20 rounded-lg hover:border-primary-blue/50 hover:bg-primary-blue/5 transition-all duration-300">
              <Upload className="text-white/40 group-hover:text-primary-blue mb-3 transition-colors" size={24} />
              <span className="text-white font-medium text-[16px]">Upload Resume (PDF)</span>
              <span className="text-white/40 text-[12px] font-mono mt-1">Max 5MB</span>
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf" />
            </div>

            <div className="relative group cursor-pointer h-40 flex flex-col items-center justify-center border border-dashed border-white/20 rounded-lg hover:border-primary-blue/50 hover:bg-primary-blue/5 transition-all duration-300">
              <Upload className="text-white/40 group-hover:text-primary-blue mb-3 transition-colors" size={24} />
              <span className="text-white font-medium text-[16px]">Cover Letter (Optional)</span>
              <span className="text-white/40 text-[12px] font-mono mt-1">Max 5MB</span>
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" />
            </div>
          </div>

          <div className="mt-12">
            <button className="w-full relative overflow-hidden bg-primary-blue text-white py-6 rounded-lg font-bold text-[18px] tracking-wide hover:shadow-[0_0_30px_rgba(29,155,240,0.3)] transition-all duration-300 group">
              <span className="relative z-10">Initiate Candidacy</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              <span className="absolute inset-0 z-20 flex items-center justify-center text-primary-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                Initiate Candidacy
              </span>
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}