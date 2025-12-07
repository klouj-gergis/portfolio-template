import { statusData } from "@/lib/data"
import StatusCard from "./StatusCard"

export default function About() {
  return (
    <section className="flex flex-col justify-end pb-30 gap-8 md:gap-16 p-8 md:p-16 h-screen bg-background">
        
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="text-5xl text-accent">About Me</h1>
        <p className="text-xl">I’m a video editor with a passion for turning raw footage into meaningful stories. I focus on creating clean, emotional, and engaging edits that keep viewers watching from the first frame to the last. Whether it’s a short-form reel or a long-form project, I work to make every cut, transition, and sound design choice serve one purpose — impact.</p>
      </div>
      <ul className="w-full md:w-1/2 grid grid-cols-3 gap-8">
        {
          statusData.map(({ title, status }, index) => (
            <StatusCard key={index} title={title} status={status} />
          ) )
        }
      </ul>
    </section>
  )
}
