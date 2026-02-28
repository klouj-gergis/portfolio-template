import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import TestimonialsSection from "@/components/TestimonialsSection"
import Footer from "@/components/Footer";


export default function Home() {
  return (
      <main className="w-full  flex flex-col relative bg-gradient-to-tl from-fuchsia-900 via-violet-600 to-slate-50">
        <Hero />
        <About />
        <Portfolio />
        <TestimonialsSection />
        <Contact />
        <Footer />
      </main>
  );
} 
