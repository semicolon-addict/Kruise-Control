import logoPng from "@assets/favicon_1772551129844.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-16 bg-[#0B0B0C]">
      
      {/* Golden Ambient Base Glow (Continuation from Contact Section) */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-[#D4AF37]/15 blur-[170px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Glass Panel */}
        <div
          className="
            backdrop-blur-2xl
            bg-[#111827]/50
            border border-[#D4AF37]/20
            rounded-[14px]
            px-10 py-10
            shadow-[0_25px_70px_rgba(0,0,0,0.8)]
          "
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={logoPng}
                alt="Kruise Control Logo"
                className="h-9 w-auto object-contain"
              />
              <span className="font-serif text-lg font-semibold tracking-wide text-[#F8FAFC]">
                Kruise Control
              </span>
            </div>

            {/* Copyright */}
            <p className="text-[#A1A1AA] text-sm tracking-wide text-center">
              &copy; {new Date().getFullYear()} Kruise Control Inc.  
              <span className="mx-2 text-[#444]">|</span>  
              All rights reserved.
            </p>

            {/* Links */}
            <div className="flex gap-8">
              <a
                href="#"
                className="text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition-colors relative group"
              >
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-[#F5D97B] via-[#D4AF37] to-[#A67C00] transition-all duration-300 group-hover:w-full" />
              </a>

              <a
                href="#"
                className="text-sm text-[#A1A1AA] hover:text-[#D4AF37] transition-colors relative group"
              >
                Terms of Service
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-[#F5D97B] via-[#D4AF37] to-[#A67C00] transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}