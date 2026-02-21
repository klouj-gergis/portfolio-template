import { TestimonialType } from "@/lib/data"
import Image from "next/image"

export default function TestimonialCard({ name, role, image, quote}: TestimonialType) {
  return (
    <div className=" w-96 h-full flex flex-col items-start bg-primary rounded-2xl p-3">
      <div className="h-fit flex items-center gap-3">
        <div className="w-max h-15 overflow-hidden rounded-full">
          <img src={image} height={60} width={60} alt="testimonial image" />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-accent">{name.toUpperCase()}</h3>
          <span className="text-text-secondary">{role.toUpperCase()}</span>
        </div>

      </div>
      <div className="w-full max-w-86 lg:max-w-96 p-3 px-5">
        <p className="text-text-main">{quote}</p>

      </div>
    </div>
  )
}
     
      
