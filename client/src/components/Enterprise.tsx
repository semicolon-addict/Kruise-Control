import { motion } from "framer-motion";

const blocks = [
  {
    title: "Ownership Models",
    content:
      "Deep-dive financial analysis to determine the precise balance of owned vs. leased assets, customized to your corporate tax and capital requirements.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Leasing Frameworks",
    content:
      "Negotiation and structuring of master lease agreements to ensure maximum flexibility, favorable terms, and protection against market volatility.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Compliance Architecture",
    content:
      "Implementation of airtight protocols guaranteeing adherence to FMCSA, DOT, and local jurisdictional regulations across all operating regions.",
    image:
      "https://plus.unsplash.com/premium_photo-1661678274944-844c3a343fab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function Enterprise() {
  return (
    <section
      id="enterprise"
      className="relative py-32 overflow-hidden bg-[#0B0B0C]"
    >
      {/* Deep Navy Luxury Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(17,24,39,0.9)_0%,rgba(11,11,12,1)_65%)]" />

      {/* Blurred Gold Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[750px] h-[500px] bg-gradient-to-r from-[#F5D97B]/10 via-[#D4AF37]/10 to-[#A67C00]/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#F8FAFC] mb-4 tracking-wide">
            Enterprise Solutions
          </h2>

          <div className="w-20 h-[1px] bg-gradient-to-r from-[#F5D97B] via-[#D4AF37] to-[#A67C00] mb-6" />

          <p className="text-[#A1A1AA] max-w-2xl text-lg leading-relaxed">
            Structural frameworks built for scale, compliance, and financial
            efficiency.
          </p>
        </div>

        {/* ✅ Cards Updated Below Only */}
        <div className="grid md:grid-cols-3 gap-6">
          {blocks.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative h-[420px] rounded-[14px] overflow-hidden group cursor-pointer"
            >
              {/* Golden Hover Aura */}
              <div className="absolute inset-0 pointer-events-none opacity-0 transition-all duration-700 group-hover:opacity-100">
                <div className="absolute inset-[-40%] bg-[#D4AF37]/25 blur-[120px] rounded-full" />
              </div>

              {/* Background Image */}
              <img
                src={block.image}
                alt={block.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 
                group-hover:scale-105 
                group-hover:brightness-110 
                group-hover:opacity-70"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[#0B0B0C]/70 group-hover:bg-[#0B0B0C]/40 transition-all duration-700" />

              {/* Glass Text Panel */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div
                  className="
                    backdrop-blur-xl
                    bg-white/5
                    border border-white/10
                    rounded-[12px]
                    p-6
                    transition-all duration-500
                    group-hover:bg-white/15
                    group-hover:border-[#D4AF37]/50
                    group-hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]
                  "
                >
                  <h3 className="text-2xl font-serif text-[#F8FAFC] mb-4 tracking-wide transition-colors duration-300 group-hover:text-white">
                    {block.title}
                  </h3>

                  <p className="text-[#A1A1AA] text-sm leading-relaxed transition-colors duration-300 group-hover:text-[#E5E7EB]">
                    {block.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}