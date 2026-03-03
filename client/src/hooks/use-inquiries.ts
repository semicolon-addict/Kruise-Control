import { useMutation } from "@tanstack/react-query";
import { api, type InquiryInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InquiryInput) => {
      // Parse using the shared schema for safety before sending
      const validated = api.inquiries.create.input.parse(data);
      
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.inquiries.create.responses[400].parse(await res.json());
          throw new Error(error.message || "Invalid submission data.");
        }
        throw new Error("An unexpected error occurred. Please try again later.");
      }

      return api.inquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Received",
        description: "An executive consultant will be in touch shortly.",
        className: "bg-[#111827] border-[#D4AF37] text-[#F8FAFC]",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please check your inputs and try again.",
      });
    }
  });
}
