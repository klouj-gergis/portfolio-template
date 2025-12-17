import { TestimonialType } from "@/lib/data"
import Image from "next/image"

export default function TestimonialCard({ name, role, image, quote}: TestimonialType) {
  return (
    <div className="flex flex-col items-start bg-primary rounded-2xl w-max p-3">
      <div className="flex items-center gap-3">
        <div className="w-max h-15 overflow-hidden rounded-full">
          <Image src={image} height={60} width={60} alt="testimonial image" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-accent">{name.toUpperCase()}</h3>
          <span className="text-text-secondary">{role.toUpperCase()}</span>
        </div>
        
      </div>
      <div className="w-full max-w-[22.3rem] lg:max-w-96 p-3 px-5">
        <p>{quote}</p>
        
      </div>
    </div>
  )
}
     
      