import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type InquiryInput } from "@shared/routes";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryInput>({
    resolver: zodResolver(api.inquiries.create.input),
  });

  const onSubmit = async (data: InquiryInput) => {
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxP6PtB3BMaQuMLxqYaDOHnn2ltdGrxUARxrW3dRxnJvM5efBZZi4YZyXNIPIxQ7z6F/exec",
        {
          method: "POST",
          mode: "no-cors", // ✅ added to prevent CORS preflight
          body: new URLSearchParams(data as Record<string, string>), // ✅ removed headers to prevent CORS preflight
        }
      );

      reset();
      alert("Enquiry submitted successfully.");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-40 overflow-hidden bg-[#0B0B0C]"
    >
      {/* Navy Spotlight Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(17,24,39,0.9)_0%,rgba(11,11,12,1)_70%)]" />

      {/* Top Gold Aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#F5D97B]/10 via-[#D4AF37]/10 to-[#A67C00]/10 blur-[140px] rounded-full" />
      </div>

      {/* Bottom Golden Oval Base */}
      <div className="absolute bottom-[-160px] left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-[#D4AF37]/20 blur-[170px] rounded-full pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 md:px-8 z-10">
        <div className="text-center mb-16">
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#F5D97B] via-[#D4AF37] to-[#A67C00] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif text-[#F8FAFC] mb-6 tracking-wide">
            Elevate Your Fleet Strategy
          </h2>
          <p className="text-[#A1A1AA] text-lg leading-relaxed">
            Connect with our executive team to discuss your operational challenges and discover tailored structural solutions.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-2xl bg-[#111827]/60 border border-[#D4AF37]/20 p-10 md:p-14 rounded-[12px] shadow-[0_25px_70px_rgba(0,0,0,0.7)]"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#A1A1AA]">
                  Full Name
                </label>
                <input
                  {...register("name")}
                  className="w-full bg-[#0B0B0C]/80 border border-[#333] text-white rounded-[6px] px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <span className="text-red-400 text-xs">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#A1A1AA]">
                  Corporate Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full bg-[#0B0B0C]/80 border border-[#333] text-white rounded-[6px] px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all"
                  placeholder="john@enterprise.com"
                />
                {errors.email && (
                  <span className="text-red-400 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#A1A1AA]">
                  Company Name
                </label>
                <input
                  {...register("company")}
                  className="w-full bg-[#0B0B0C]/80 border border-[#333] text-white rounded-[6px] px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all"
                  placeholder="Enterprise Logistics Inc."
                />
                {errors.company && (
                  <span className="text-red-400 text-xs">
                    {errors.company.message}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#A1A1AA]">
                  Current Fleet Size
                </label>
                <select
                  {...register("fleetSize")}
                  className="w-full bg-[#0B0B0C]/80 border border-[#333] text-white rounded-[6px] px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all appearance-none"
                >
                  <option value="" disabled hidden>
                    Select an option
                  </option>
                  <option value="1-50">1 - 50 Vehicles</option>
                  <option value="51-200">51 - 200 Vehicles</option>
                  <option value="201-500">201 - 500 Vehicles</option>
                  <option value="500+">500+ Vehicles</option>
                </select>
                {errors.fleetSize && (
                  <span className="text-red-400 text-xs">
                    {errors.fleetSize.message}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold tracking-wider uppercase text-[#A1A1AA]">
                Strategic Inquiry
              </label>
              <textarea
                {...register("message")}
                rows={4}
                className="w-full bg-[#0B0B0C]/80 border border-[#333] text-white rounded-[6px] px-4 py-3 focus:outline-none focus:border-[#D4AF37] focus:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all resize-none"
                placeholder="Briefly describe your operational challenges..."
              />
              {errors.message && (
                <span className="text-red-400 text-xs">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#F5D97B] via-[#D4AF37] to-[#A67C00] text-[#0B0B0C] font-semibold py-4 rounded-[6px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                "Submit Executive Inquiry"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}