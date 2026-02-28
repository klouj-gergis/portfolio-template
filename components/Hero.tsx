import Image from "next/image";
import Link from "next/link"

export default function Hero() {
  return (
    <section className="h-[90vh] lg:h-screen   w-full flex flex-col md:flex-row justify-end border-b border-text-secondary relative">
      <div className="relative top-0 left-0 w-full h-2/6 md:h-full overflow-hidden z-0 md:z-0 md:w-1/2">
          <Image src="/hero.jpg" alt="Hero Image" width={600} height={400} loading="eager" className="absolute md:relative -top-2/6 md:-top-1/6 w-full" />
        </div>
      <div className=" h-8/12 lg:h-full bg-background  flex flex-col justify-center items-start gap-4 p-8 md:w-1/2 md:justify-center xl:pl-20">
          <h1 className="text-5xl font-bold md:text-9xl  text-text-main font-heading border px-4 border-white/30 rounded-lg bg-white/5 backdrop-blur-[1px]">
          MAGOMY
        </h1>
        <h2 className="text-[3rem] md:text-8xl font-bold text-accent font-body -mt-4">
          Video Editor & Filmmaker
        </h2>
        <p className="text-xl font-body text-text-secondary">
          Helping creators turn raw footage into cinematic storytelling.
        </p>
        <Link href="#contact" className="py-2 px-5 bg-cards border border-accent hover:bg-accent hover:text-black ease-in-out duration-200 cursor-pointer">Let's Talk</Link>
        </div>
        
    </section>
  )
}
