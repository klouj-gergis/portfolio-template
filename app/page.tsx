import About from "@/components/About";
import Hero from "@/components/Hero";
import Line from "@/components/Contact";
import Portfolio from "@/components/Portfolio";


export default function Home() {
  return (
      <main className="w-full  flex flex-col relative bg-background -z-20">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
  );
} 
