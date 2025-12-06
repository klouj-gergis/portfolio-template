import Image from "next/image";

export default function About() {
  return (
    <section>
      <div>
        <Image src="/about.jpg" alt="About Image" width={600} height={400} />
      </div>
      <div>
        <h1>About Me</h1>
        <p>I’m a video editor with a passion for turning raw footage into meaningful stories. I focus on creating clean, emotional, and engaging edits that keep viewers watching from the first frame to the last. Whether it’s a short-form reel or a long-form project, I work to make every cut, transition, and sound design choice serve one purpose — impact.</p>
      </div>
    </section>
  )
}
