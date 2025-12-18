import { testimonials } from "@/lib/data"
import TestimonialCard from "@/components/TestimonialCard"

export default function TestimonialsSection() {
  return (
    <section className=" border-y flex flex-col items-center py-5 lg:gap-4">
      <h2 className="text-5xl lg:text-5xl text-accent font-semibold font-heading lg:tracking-wider">What Our Clients Say</h2>
      <div className="w-full px-5 lg:px-0 py-10 lg:h-52 flex lg:flex-col items-center">
        {/* MOBILE */}
        <div className="w-full lg:hidden flex flex-col gap-4 items-center px-2">
          {testimonials.map((t, i) => (
             <TestimonialCard key={i} {...t}/>
          ))}
        </div>
  {/* DESKTOP MARQUEE */}
  <div className="relative hidden lg:block w-full overflow-hidden">
    
    <ul
      className="
        flex w-max gap-4
        animate-[scroll_30s_linear_infinite]
        hover:[animation-play-state:paused]
        will-change-transform
      "
    >
      {testimonials.map((t, i) => (
        <li key={i} className="shrink-0">
          <TestimonialCard {...t} />
        </li>
      ))}
      {testimonials.map((t, i) => (
        <li key={`dup-${i}`} className="shrink-0">
          <TestimonialCard {...t} />
        </li>
      ))}
    </ul>

  </div>
      </div>
  
  
</section>


  )
}
