import { testimonials } from "@/lib/data"
import TestimonialCard from "@/components/TestimonialCard"

export default function TestimonialsSection() {
  return (
   <section className=" border-y h-fit flex flex-col items-center py-5 lg:gap-4 mt-5 overflow-hidden">
      <h2 className="text-5xl lg:text-5xl text-accent font-semibold font-heading lg:tracking-wider">What Our Clients Say</h2>
      <div className="w-full px-5 lg:px-0 py-10 lg:h-full flex lg:flex-col items-center">
        {/* MOBILE */}
        <div className="w-full lg:hidden h-full flex flex-col gap-4 items-center px-2">
          {testimonials.map((t, i) => (
             <TestimonialCard key={i} {...t}/>
          ))}
        </div>
  {/* DESKTOP MARQUEE */}
  <div className="relative hidden h-full lg:flex w-max gap-4
        animate-[scroll_30s_linear_infinite]
        hover:paused
        will-change-transform">

    <div className="flex gap-4">
      {testimonials.map((t, i) => (
        
         <TestimonialCard key={i} {...t}/>
      ))}
      </div>
         <div className="flex gap-4">
      {testimonials.map((t, i) => (
        
          <TestimonialCard key={i} {...t}/>
          
      ))}
    </div>

  </div>
      </div>


</section>
  )
}
