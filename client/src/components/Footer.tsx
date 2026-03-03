import logoPng from "@assets/favicon_1772551129844.png";

export function Footer() {
  return (
    <footer className="bg-[#0B0B0C] border-t border-[#222] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logoPng} alt="Kruise Control Logo" className="h-8 w-auto object-contain" />
          <span className="font-serif text-lg font-semibold tracking-wide text-white">
            Kruise Control
          </span>
        </div>
        
        <p className="text-[#A1A1AA] text-sm">
          &copy; {new Date().getFullYear()} Kruise Control Inc. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a href="#" className="text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
