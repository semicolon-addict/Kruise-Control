import { motion } from "framer-motion";
import { Check } from "lucide-react";

const advantages = [
  "Aggressive cost optimization and capital preservation",
  "Uncompromising regulatory precision and risk mitigation",
  "Total lifecycle control from acquisition to disposal",
  "Stringent vendor accountability and SLA enforcement",
  "Transparent, data-driven executive reporting"
];

export function Excellence() {
  return (
    <section id="excellence" className="py-32 bg-[#0B0B0C] border-y border-[#111827]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D4AF37] tracking-[0.2em] uppercase text-xs font-semibold mb-4 block">The Kruise Standard</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-8">
              Operational Excellence,<br/> Delivered.
            </h2>
            <div className="w-16 h-[2px] bg-[#D4AF37] mb-8" />
            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-8">
              We do not merely manage vehicles; we architect high-performance operational ecosystems. By applying rigorous financial and operational discipline, we ensure your fleet operates at maximum efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {advantages.map((adv, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#111827] flex items-center justify-center border border-[#D4AF37]/30">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={3} />
                </div>
                <p className="text-white text-lg font-light">{adv}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
