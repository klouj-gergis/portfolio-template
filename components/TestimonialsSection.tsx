import { testimonials } from "@/lib/data"
import TestimonialCard from "@/components/TestimonialCard"

export default function TestimonialsSection() {
  return (
    <section className="w-full h-52 border-y my-40 overflow-hidden relative">
      <ul className="flex items-center h-full w-max animate-scroll hover:[animation-play-state:paused]">
        
        {/* FIRST TRACK */}
       
          {testimonials.map((t, i) => (
            <li key={i} className="shrink-0 ml-5">
              <TestimonialCard {...t} />
            </li>
          ))}
     

        {/* SECOND TRACK */}
        
          {testimonials.map((t, i) => (
            <li key={`b-${i}`} className="shrink-0 ml-5">
              <TestimonialCard {...t} />
            </li>
          ))}
        

      </ul>
      <div className="absolute top-0 left-0 h-full bg-linear-to-r from-black to-black/0 w-1/12"></div>
      <div className="absolute top-0 right-0 h-full bg-linear-to-l from-black to-black/0 w-1/12"></div>
    </section>
  )
}
