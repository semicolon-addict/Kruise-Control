import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden hero-radial-glow">
      {/* Abstract structural grid lines for background depth */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#F8FAFC 1px, transparent 1px), linear-gradient(90deg, #F8FAFC 1px, transparent 1px)', backgroundSize: '100px 100px' }} 
      />

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block uppercase tracking-[0.2em] text-[#D4AF37] text-xs font-semibold mb-6">
            Elite Vehicle Asset Consulting
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-8"
        >
          Command Your Fleet <br />
          <span className="text-gold-gradient italic">With Precision.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl mb-12 font-light leading-relaxed"
        >
          Strategic fleet intelligence, asset optimization, and executive-level operational control for forward-thinking enterprises.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <button 
            onClick={scrollToContact}
            className="group flex items-center justify-center gap-3 bg-gold-gradient text-[#0B0B0C] px-8 py-4 rounded-[6px] font-semibold text-sm hover:-translate-y-0.5 hover:shadow-gold-hover transition-all duration-300"
          >
            Initiate Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={scrollToServices}
            className="flex items-center justify-center px-8 py-4 rounded-[6px] font-medium text-sm border border-[#D4AF37]/30 text-white hover:bg-[#D4AF37]/5 hover:border-[#D4AF37] transition-all duration-300"
          >
            Explore Frameworks
          </button>
        </motion.div>
      </div>
    </section>
  );
}
