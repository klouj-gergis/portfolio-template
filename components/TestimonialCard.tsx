import { TestimonialType } from "@/lib/data"
import Image from "next/image"

export default function TestimonialCard({ name, role, image, quote}: TestimonialType) {
  return (
    <div className="shrink-0 flex gap-2 items-start rounded bg-foreground p-2 text-primary">
      <div className="w-15 h-15 rounded-full overflow-hidden">
        <Image width={80} height={80}  className="rounded-full object-cover h-full " src={image} alt="client testimonial image" />
      </div>
      <div className="w-96 py-2 flex flex-col gap-2">
        <h3 className="text-3xl font-bold font-body">{name}</h3>
        <p className="pl-2 font-semibold">{quote}</p>
        <span className="text-end block font-semibold pr-2">{role}</span>
      </div>
    </div>
  )
}
     
      