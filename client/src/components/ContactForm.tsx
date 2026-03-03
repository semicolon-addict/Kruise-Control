import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type InquiryInput } from "@shared/routes";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const mutation = useCreateInquiry();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<InquiryInput>({
    resolver: zodResolver(api.inquiries.create.input),
  });

  const onSubmit = async (data: InquiryInput) => {
    await mutation.mutateAsync(data);
    reset();
  };

  return (
    <section id="contact" className="py-32 bg-[#0B0B0C] relative">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      
      <div className="max-w-3xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Elevate Your Fleet Strategy</h2>
          <p className="text-[#A1A1AA] text-lg">
            Connect with our executive team to discuss your operational challenges and discover tailored structural solutions.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[hsl(var(--section-bg))] p-8 md:p-12 rounded-[8px] border border-[#222] shadow-2xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#A1A1AA]">Full Name</label>
                <input 
                  {...register("name")}
                  className="w-full bg-[#0B0B0C] border border-[#333] text-white rounded-[6px] px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#A1A1AA]">Corporate Email</label>
                <input 
                  {...register("email")}
                  type="email"
                  className="w-full bg-[#0B0B0C] border border-[#333] text-white rounded-[6px] px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="john@enterprise.com"
                />
                {errors.email && <span className="text-red-400 text-xs">{errors.email.message}</span>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#A1A1AA]">Company Name</label>
                <input 
                  {...register("company")}
                  className="w-full bg-[#0B0B0C] border border-[#333] text-white rounded-[6px] px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="Enterprise Logistics Inc."
                />
                {errors.company && <span className="text-red-400 text-xs">{errors.company.message}</span>}
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-semibold tracking-wider uppercase text-[#A1A1AA]">Current Fleet Size</label>
                <select 
                  {...register("fleetSize")}
                  className="w-full bg-[#0B0B0C] border border-[#333] text-white rounded-[6px] px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none"
                >
                  <option value="" disabled hidden>Select an option</option>
                  <option value="1-50">1 - 50 Vehicles</option>
                  <option value="51-200">51 - 200 Vehicles</option>
                  <option value="201-500">201 - 500 Vehicles</option>
                  <option value="500+">500+ Vehicles</option>
                </select>
                {errors.fleetSize && <span className="text-red-400 text-xs">{errors.fleetSize.message}</span>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold tracking-wider uppercase text-[#A1A1AA]">Strategic Inquiry</label>
              <textarea 
                {...register("message")}
                rows={4}
                className="w-full bg-[#0B0B0C] border border-[#333] text-white rounded-[6px] px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                placeholder="Briefly describe your operational challenges..."
              />
              {errors.message && <span className="text-red-400 text-xs">{errors.message.message}</span>}
            </div>

            <button 
              type="submit"
              disabled={isSubmitting || mutation.isPending}
              className="w-full bg-gold-gradient text-[#0B0B0C] font-semibold py-4 rounded-[6px] hover:shadow-gold-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting || mutation.isPending ? (
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
