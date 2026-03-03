import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoPng from "@assets/favicon_1772551129844.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
        scrolled ? "glass-nav border-[#D4AF37]/20 py-4 shadow-gold-subtle" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={logoPng} alt="Kruise Control Logo" className="h-12 w-auto object-contain" />
          <span className="font-serif text-2xl font-semibold tracking-wide text-white">
            Kruise Control
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-10">
          {["Services", "Excellence", "Enterprise"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-[#A1A1AA] hover:text-[#D4AF37] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-gradient transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button 
            onClick={scrollToContact}
            className="text-sm font-medium border border-[#D4AF37]/50 text-[#D4AF37] px-5 py-2 rounded-[6px] hover:bg-[#D4AF37]/10 transition-all"
          >
            Client Portal
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
