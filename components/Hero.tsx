import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen   w-full flex flex-col md:flex-row relative justify-end">
      <div className=" h-4/6 bg-background flex flex-col justify-center items-start gap-4 p-8 md:w-1/2 md:justify-center xl:pl-20 mt-30">
          <h1 className="text-5xl font-bold md:text-9xl  text-text-main font-heading">
          MAGOMY
        </h1>
        <h2 className="text-[3rem] md:text-8xl font-bold text-accent font-body -mt-4">
          Video Editor & Filmmaker
        </h2>
        <p className="text-xl font-body text-text-secondary">
          Helping creators turn raw footage into cinematic storytelling.
        </p>
        <button className="py-2 px-5 bg-cards border border-accent hover:bg-accent hover:text-black ease-in-out duration-200 cursor-pointer">Let's Talk</button>
        </div>
        
    </section>
  )
}
