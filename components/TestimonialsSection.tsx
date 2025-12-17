import { testimonials } from "@/lib/data"
import TestimonialCard from "@/components/TestimonialCard"

export default function TestimonialsSection() {
  return (
    <section className="w-full border-y py-10 lg:h-52 lg:flex lg:items-center lg:mt-20">
  
  {/* MOBILE */}
  <ul className="flex flex-col gap-4 px-4 lg:hidden">
    {testimonials.map((t, i) => (
      <li key={i}>
        <TestimonialCard {...t} />
      </li>
    ))}
  </ul>

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
</section>


  )
}
