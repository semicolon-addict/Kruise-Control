import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Excellence } from "@/components/Excellence";
import { Enterprise } from "@/components/Enterprise";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Excellence />
        <Enterprise />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
