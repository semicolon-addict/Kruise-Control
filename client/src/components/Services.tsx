import { motion } from "framer-motion";
import { Compass, Car, FileCheck, LineChart, RefreshCw, Handshake, Landmark } from "lucide-react";

const services = [
  { icon: Compass, title: "Strategic Fleet Management", desc: "End-to-end oversight aligning your mobile assets with long-term corporate objectives." },
  { icon: Car, title: "Vehicle Acquisition Consulting", desc: "Data-driven procurement strategies to minimize capital expenditure and maximize utility." },
  { icon: FileCheck, title: "Maintenance & Compliance", desc: "Rigorous coordination of regulatory adherence and lifecycle maintenance schedules." },
  { icon: LineChart, title: "Telematics & Reporting", desc: "Executive dashboards transforming raw vehicle data into actionable business intelligence." },
  { icon: RefreshCw, title: "Asset Lifecycle Optimization", desc: "Calculated cycling of vehicles to capture peak resale value and minimize depreciation." },
  { icon: Handshake, title: "Vendor Oversight", desc: "Strict management of third-party relationships to ensure SLA compliance and cost control." },
  { icon: Landmark, title: "Leasing & Ownership Structuring", desc: "Financial modeling to determine the optimal capital structure for your specific operational needs." },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-[hsl(var(--section-bg))] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Strategic Capabilities</h2>
          <div className="w-24 h-[1px] bg-gold-gradient mx-auto mb-6" />
          <p className="text-[#A1A1AA] max-w-2xl mx-auto text-lg">
            Comprehensive methodologies designed to transform your fleet from an operational burden into a strategic advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0B0B0C] border border-[#222] border-t-[#D4AF37]/50 rounded-[8px] p-8 hover:border-t-[#D4AF37] hover:shadow-gold-hover transition-all duration-300 group"
            >
              <service.icon className="w-10 h-10 text-[#D4AF37] mb-6 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              <h3 className="text-xl font-serif text-white mb-4">{service.title}</h3>
              <p className="text-[#A1A1AA] leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
