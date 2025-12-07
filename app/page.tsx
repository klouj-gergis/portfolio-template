import About from "@/components/About";
import Hero from "@/components/Hero";
import Line from "@/components/Line";

export default function Home() {
  return (
      <main className="w-full *:min-h-screen flex flex-col relative bg-background -z-20">
        <Hero />
        <About />
      </main>
  );
} 
