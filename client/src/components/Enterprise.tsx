import { motion } from "framer-motion";

const blocks = [
  {
    title: "Ownership Models",
    content: "Deep-dive financial analysis to determine the precise balance of owned vs. leased assets, customized to your corporate tax and capital requirements."
  },
  {
    title: "Leasing Frameworks",
    content: "Negotiation and structuring of master lease agreements to ensure maximum flexibility, favorable terms, and protection against market volatility."
  },
  {
    title: "Compliance Architecture",
    content: "Implementation of airtight protocols guaranteeing adherence to FMCSA, DOT, and local jurisdictional regulations across all operating regions."
  }
];

export function Enterprise() {
  return (
    <section id="enterprise" className="py-32 bg-[hsl(var(--section-bg))]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-serif text-white mb-4">Enterprise Solutions</h2>
          <p className="text-[#A1A1AA] max-w-2xl text-lg">Structural frameworks built for scale, compliance, and financial efficiency.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blocks.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-[#0B0B0C] p-10 rounded-[8px] border border-[#222] relative overflow-hidden group"
            >
              {/* Subtle gold gradient line that reveals on hover */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-gold-gradient transition-all duration-500 group-hover:w-full" />
              
              <h3 className="text-2xl font-serif text-white mb-6 relative z-10">{block.title}</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed relative z-10">
                {block.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
