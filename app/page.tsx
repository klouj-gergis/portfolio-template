import About from "@/components/About";
import Hero from "@/components/Hero";


export default function Home() {
  return (
      <main className="w-full  flex flex-col relative bg-background -z-20">
        <Hero />
        <About />
      </main>
  );
} 
