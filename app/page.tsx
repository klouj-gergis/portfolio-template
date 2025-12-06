import Image from "next/image";

export default function Home() {
  return (
      <main className="h-screen w-full flex flex-col md:flex-row relative">
        
        
        <div className=" h-full flex flex-col justify-end items-start gap-4 p-8 -translate-y-3/12 md:translate-y-0 md:w-1/2 md:justify-center xl:pl-20">
          <h1 className="text-7xl md:text-9xl font-bold text-text-main font-heading">
          MAGOMY
        </h1>
        <h2 className="text-4xl md:text-8xl font-bold text-accent font-heading -mt-4 max-w-[600px]">
          Video Editor & Filmmaker
        </h2>
        <p className="text-xl font-body">
          Helping creators turn raw footage into cinematic storytelling.
        </p>
        <button className="py-2 px-5 bg-cards border border-accent hover:bg-accent hover:text-black ease-in-out duration-200 cursor-pointer">Let's Talk</button>
        </div>
        <div className="fixed md:relative top-0 left-0 w-full h-2/6 md:full overflow-hidden -z-10 md:z-0 md:h-full md:w-1/2">
          <Image src="/about.jpg" alt="Hero Image" width={600} height={400} className="absolute -top-2/6 md:-top-1/6 w-full" />
        </div>
      </main>
  );
} 
