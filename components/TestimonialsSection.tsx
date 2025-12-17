import { testimonials } from "@/lib/data"
import TestimonialCard from "@/components/TestimonialCard"

export default function TestimonialsSection() {
  return (
    <section className="w-full h-screen lg:h-52 lg:flex items-center border-y lg:mt-20 lg:overflow-hidden relative">
      <ul className="flex flex-col h-full items-center justify-center gap-4 lg:flex-row lg:h-max w-max lg:animate-scroll lg:hover:[animation-play-state:paused]  relative">
        
        {/* FIRST TRACK */}
       
          {testimonials.map((t, i) => (
            <li key={i} className="shrink-0 ml-5 col-span-1">
              <TestimonialCard {...t} />
            </li>
          ))}
     

        {/* SECOND TRACK */}
        
          {testimonials.map((t, i) => (
            <li key={`b-${i}`} className="hidden lg:block shrink-0 ml-5">
              <TestimonialCard {...t} />
            </li>
          ))}
        

      </ul>
      <div className="hidden lg:block absolute top-0 left-0 h-full bg-linear-to-r from-black to-black/0 w-1/12"></div>
      <div className="hidden lg:block absolute top-0 right-0 h-full bg-linear-to-l from-black to-black/0 w-1/12"></div>
    </section>
  )
}
