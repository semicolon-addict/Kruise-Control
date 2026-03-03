import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoPng from "@assets/favicon_1772551129844.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-4 backdrop-blur-xl bg-[#0B0B0C]/70 border-b border-[#D4AF37]/20 shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <img
            src={logoPng}
            alt="Kruise Control Logo"
            className="h-12 w-auto object-contain"
          />
          <span className="font-serif text-2xl font-semibold tracking-wide text-white">
            Kruise Control
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {["Services", "Excellence", "Enterprise"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[#A1A1AA] hover:text-[#D4AF37] transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-[#F5D97B] via-[#D4AF37] to-[#A67C00] transition-all duration-300 group-hover:w-full" />
              </a>
            )
          )}

          <button
            onClick={scrollToContact}
            className="text-sm font-medium border border-[#D4AF37]/50 text-[#D4AF37] px-5 py-2 rounded-[6px] backdrop-blur-md bg-[#D4AF37]/5 hover:bg-[#D4AF37]/10 transition-all duration-300"
          >
            Client Portal
          </button>
        </nav>
      </div>
    </motion.header>
  );
}