import Image from "next/image";

export default function Home() {
  return (
      <main className="h-screen">
        
        <div className="fixed top-0 left-0 w-full h-2/6 overflow-hidden -z-10">
          <Image src="/about.jpg" alt="Hero Image" width={600} height={400} className="absolute -top-2/6" />
        </div>
        <div className=" h-full flex flex-col justify-center items-start gap-6 p-8">
          <h1 className="text-7xl font-bold text-text-main font-heading">
          MAGOMY
        </h1>
        <h2 className="text-4xl font-bold text-accent font-heading">
          Video Editor & Filmmaker
        </h2>
        <p className="text-xl font-body">
          Helping creators turn raw footage into cinematic storytelling.
        </p>
        <button className="py-2 px-5 bg-cards">Let's Talk</button>
        </div>
      </main>
  );
} 
